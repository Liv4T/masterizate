<template>
    <div class="complete-sentence">
        <div class="row ">
            <div class="col-8 text-left">
                <h4>Completar la oración</h4>
            </div>
            <div class="col-4 text-right">
                <button type="button" class="btn btn-primary" :disabled="disabled" @click="AddSentenceEvent">Agregar oración</button>
            </div>
        </div>
        <div class="row" v-for="(sentence,k_sentence) in module.sentences" v-bind:key="k_sentence">
            <div class="col-sm ">
                <div class="card padding-10">
                    <div class="row" v-if="!disabled">
                        <div class="col-12  col-lg-6 padding-10" >
                            <label>Contenido de la oración:</label>
                            <textarea class="form-control input-color" rows="4" v-model="sentence.content" placeholder="Contenido"  @change="EvaluateContent(k_sentence, sentence)"></textarea>
                            <div class="row">
                                <div class="col-sm text-left">
                                    <button type="button" class="btn btn-link" @click="AddInputEvent(k_sentence,sentence)">Agregar campo</button>
                                </div>
                            </div>
                            <div class="row" v-for="(property,k_property) in sentence.properties" v-bind:key="k_property">
                                <div class="col-sm padding-10">
                                    <label>Respuesta del campo {{(k_property+1)}}:</label>
                                    <input class="form-control" type="text" v-model="property.text" placeholder="opción1,opción2 " @change="EvaluateContent(k_sentence, sentence)" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12  col-lg-6 padding-10">
                            <div class="label-preview">
                                <label>Previsualización:</label>
                                <button class="btn btn-default label-preview_button" @click="RefreshContent(k_sentence, sentence)">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"/></svg>
                                </button>
                            </div>

                            <div class="paragraph-sentence">
                                <p>
                                    <span v-for="(property,k_content) in module.sentences[k_sentence].content_array" v-bind:key="k_content">
                                        {{property.text}} <input class="input-word"  v-if="sentence.properties[k_content]" type="text" v-model="sentence.properties[k_content].text" :placeholder="'Respuesta '+(k_content+1)"/>
                                    </span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div class="row" v-if="disabled">
                         <div class="col-12 padding-10">
                            <label>Completar las oraciones:</label>
                            <div class="paragraph-sentence-preview">
                                <p>

                                    <span v-for="(property,k_content) in module.sentences[k_sentence].content_array" v-bind:key="k_content">
                                        {{property.text}}  <input class="input-word"  type="text" v-if="sentence.properties[k_content]" v-model="sentence.responses[k_content]"  @change="RefreshResponse(k_sentence)" :placeholder="'Respuesta '+(k_content+1)"/>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    props:['module', 'disabled','playing'],
    data() {
        return {

        }
    },
    mounted() {
        /*
        if(this.module)
        {
            this.module.sentences=JSON.parse(this.data).sentences;
            this.module.sentences.forEach(s=>{
                if(!s.responses) s.responses=[];

                s.properties.forEach(p=>{
                    s.responses.push('');
                })
            });
        }
        else{
            this.module.sentences=[];
        }*/
        //this.module.sentences=[];

    },
    methods: {
        AddSentenceEvent(){
            this.module.sentences.push({content:'',properties:[]});
        },
        AddInputEvent(i_sentence,sentence){
           sentence.content=`${sentence.content} ~input~`;

          this.EvaluateContent(i_sentence);
        },
        RefreshContent(i_sentence,sentence)
        {
             sentence.content=`${sentence.content} `;

             this.EvaluateContent(i_sentence);
        },
        RefreshResponse(i_sentence){

            let d={sentences:[], complete:false, score:0};
            let total=0;
            let corrects=0;

            this.module.sentences.forEach(s=>{
                let res=[];
                let i=0;
                s.responses.forEach(r=>{

                    let responses_correct=s.properties[i].text.split(',');

                    let isCorrect=(responses_correct.filter(p=>p.toLowerCase()==r.toLowerCase()).length>0);

                    if(isCorrect)
                    {
                        corrects++;
                    }

                      total++;

                    res.push({response:r,isCorrect:isCorrect});
                    i++;
                });

            });

            d.complete= this.module.sentences[i_sentence].responses.filter(p=>p=='').length==0;
            d.score=(corrects*5)/total;
            d.sentences=this.module.sentences;
+
            this.$emit('refresh-data',d);
        },
        EvaluateContent(i_sentence)
        {
            if(!this.module.sentences[i_sentence].content) return;

           this.module.sentences[i_sentence].content_array=[];

            let i=0;

             this.module.sentences[i_sentence].content.split(/(\~input\~)/g).forEach(e=>{
                 if(e!='~input~')
                 {
                   this.module.sentences[i_sentence].content_array.push({text:e});
                 }
                 else{

                     if(this.module.sentences[i_sentence].properties.length<=i)
                     {
                        this.module.sentences[i_sentence].properties.push({text:''});
                     }

                    i++;
                 }

             });

            let dif=this.module.sentences[i_sentence].properties.length-(i);

            for (let j = 0; j <dif; j++) {
                this.module.sentences[i_sentence].properties.splice(this.module.sentences[i_sentence].properties.length-1-j,1);
            }


           this.$emit('refresh-data',{sentences:this.module.sentences, complete: this.module.sentences[i_sentence].properties.filter(p=>p.text=='').length==0});

        }
    }
}
</script>
<style>
.complete-sentence{
    background-color:#e9ecefb5;
    padding:5px;
}
.input-word{
    height:30px ;
    border-radius: 5px;
    background-color:rgb(179, 209, 255);
    border-width: 0px;
    padding: 0px 15px;
    color:black;
}
.paragraph-sentence>p{
    line-height: 3.5;
    font-weight: 700;
    text-align: justify;
}
.paragraph-sentence-preview>p{
    line-height: 3.0;
    font-weight: 600;
    text-align: justify;
    font-size: 1.2em;
}
.input-color{
    background-color:#fffde7;
}
.label-preview{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}
.label-preview_button{
     animation-duration: 5s;
     outline:none;
}
.label-preview_button:hover{
    transform: rotate(360deg) ;
}
.label-preview_button:hover>svg{
    fill:#61f174;
}
</style>
