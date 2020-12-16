<template>
    <section class="relationship">
         <div class="row ">
            <div class="col-8 text-left">
                <h4>Ejercicio de relación</h4>
            </div>
            <div class="col-4 text-right">
                <button type="button" class="btn btn-primary" :disabled="disabled" @click="AddItemEvent">Agregar item</button>
            </div>
        </div>
        <div class="row" v-if="!disabled">
            <div class="col-sm padding-10">
                <p>*Agregue cada par de items, estos se organizarán aleatoriamente para que el estudiante relaciones segun corresponda.</p>
            </div>
        </div>
        <div class="row" >
            <div class="col-sm padding-10">
               <button type="button" class="btn btn-primary" @click="PreviewEvent">{{preview?'Editar':'Previsualizar'}}</button>
            </div>
        </div>
        <div class="row" v-if="loading_component" >
            <div class="col-sm padding-10">
                <span>Cargando...</span>
            </div>
        </div>
        <template v-if="!loading_component && !preview" >
            <div class="row" v-for="(item,k_item) in module.items" v-bind:key="k_item">
                <div class="col-sm ">
                    <div class="card padding-10">
                        <div class="row" >
                            <div class="col-12  col-lg-12" >
                                <div class="icon-remove-button" alt="Remover item" v-if="(k_item)>0" @click="RemoveItemEvent(k_item)">- Remover</div>
                            </div>
                        </div>
                        <div class="row" >
                            <div class="col-12  col-lg-6 padding-10" >
                                <label>Item {{k_item+1}}:</label>
                                <editor-component :content="item.content_left" v-bind:readonly="disabled" @updateText="SetContentLeftEvent($event,k_item)" ></editor-component>
                            </div>
                            <div class="col-12  col-lg-6 padding-10" >
                                 <label>Relacionado con:</label>
                                <editor-component :content="item.content_right" v-bind:readonly="disabled" @updateText="SetContentRightEvent($event,k_item)" ></editor-component>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="!loading_component && preview" >
            <div class="row" v-for="(item,k_item) in items_right" v-bind:key="k_item">
                <div class="col-sm ">
                    <div class="card padding-10">
                        <div class="row" >
                            <div class="col-12  col-lg-4 padding-10" >
                                <label>{{k_item+1}}.</label>
                                <div class="relation-container relation-container_draggable" v-on:dragstart="DragEvent($event,k_item)" v-on:drag="DraggingEvent" draggable="true" v-html="items_left[k_item].content_left"></div>
                            </div>
                             <div class="col-12  col-lg-4 padding-10" >
                                <label>Arrastrar aca.</label>
                                <div class="relation-container relation-container_drop"  v-on:drop="DropEvent($event,k_item)" v-on:dragover="AllowDropEvent" v-html="selected_items[k_item].content"></div>
                            </div>
                            <div class="col-12  col-lg-4 padding-10" >
                                <label></label>
                                <div class="relation-container" v-html="item.content_right"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>

    </section>
</template>
<script>

import { VueEditor } from "vue2-editor";
export default {
    props:['module', 'disabled','playing'],
    data() {
        return {
            loading_component:true,
            preview:false,
            items_left:[],
            items_right:[],
            selected_items:[]
        }
    },
    mounted() {
        if(this.module.items===undefined||this.module.items==null)
        {
            this.module.items=[{
                content_left:'',
                content_right:''
            }];
        }

       this.loadingComponent();
    },
    methods: {
        AddItemEvent(){
            this.preview=false;
            this.loadingComponent();

            this.module.items.push({
                content_left:'',
                content_right:'',
                index:this.module.items.length
            });
        },
        SetContentLeftEvent($e,index)
        {
            this.module.items[index].content_left=$e;
        },
        SetContentRightEvent($e,index)
        {
            this.module.items[index].content_right=$e;
        },
        RemoveItemEvent(index)
        {
            this.module.items.splice(index,1);
            this.loadingComponent();

        },
        loadingComponent()
        {
            this.loading_component=true;
            setTimeout(()=>{
                this.loading_component=false;
            },1000)
        },
        PreviewEvent()
        {
            this.preview=(!this.preview);

            this.createRandomLists();

        },
        DragEvent(ev,index)
        {
            console.log(ev);

            if(!ev) return;
           ev.dataTransfer.setData("index", index);
        },
        DropEvent(ev,index)
        {
            ev.preventDefault();
            var indexLeftItem = ev.dataTransfer.getData("index");

            if(this.selected_items.find(p=>p.index==indexLeftItem)!=null)
            {
                return;
            }

            this.selected_items[index].content=this.items_left[indexLeftItem].content_left;
            this.selected_items[index].index=indexLeftItem;

           // ev.target.appendChild(document.getElementById(data));
        },
        AllowDropEvent(ev) {
            ev.preventDefault();
        },
        DraggingEvent()
        {
            console.log('start dragging')
        },
        createRandomLists()
        {

            this.items_left=this.shuffleList(this.module.items);
            this.items_right=this.module.items;
            this.selected_items=[];
            this.module.items.forEach(()=>{
                this.selected_items.push({index:null,content:''});
            })
        },
        shuffleList(array)
        {
                let newArray=[];
                var currentIndex = array.length, temporaryValue, randomIndex;

                let i=0;
                 while (0 !== currentIndex) {

                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;

                    // And swap it with the current element.
                    temporaryValue = array[currentIndex];
                    newArray[i] = temporaryValue;
                    i++;
                }

                return newArray;
        }
    }
}
</script>
<style>
.relationship{
    background-color:#e9ecefb5;
    padding:5px;
}
.relationship .icon-remove-button{
  background-color:white;
  height:30px;
  width:100px;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
  cursor:default;
  color:rgb(255, 0, 21);
  font-weight:600;
}
.relationship .icon-remove-button:hover{ background-color:#f2f2f2;}
.relation-container{
    border:2px solid #f2f2f2;
    padding:5px;
    border-radius: 5px;
    min-height:150px;
    text-align: center;
}
.relation-container_draggable:hover{
    border:2px solid #aeff44;
    background-color:#ebffd2;
}
.relation-container_drop:hover{
    border:2px solid #ffbe44;
    background-color:#ffe7bb;
}
</style>
