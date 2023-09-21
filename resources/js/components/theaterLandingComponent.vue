<template>
    <div>
        <div class="desktop">
            <div class="row">
                <div class="col-lg-12" style="padding: 20px 0px 10px 0px; margin-left: 50px;">
                    <vue-flux
                        :images="images"
                        :options="options"
                        :transitions="transitions">
                        <template v-slot:preloader>
                            <flux-preloader />
                        </template>
                        <template v-slot:controls>
                            <flux-controls />
                        </template>
                        <template v-slot:pagination>
                            <flux-pagination />
                        </template>
                    </vue-flux>
                </div>
            </div>
        </div>
        <div class="phone">
            <div class="row">
                <div class="col-lg-12" style="">
                    <vue-flux
                        :images="images"
                        :options="options"
                        :transitions="transitions">
                        <template v-slot:preloader>
                            <flux-preloader />
                        </template>
                        <template v-slot:controls>
                            <flux-controls />
                        </template>
                        <template v-slot:pagination>
                            <flux-pagination />
                        </template>
                    </vue-flux>
                </div>
            </div>
        </div>
      <div>
        <a href="https://wa.me/573165268709?text=Me%20gustaría%20saber%20más%20de%20los%20planes" class="whatsapp" target="_blank"> <i class="fa fa-whatsapp whatsapp-icon"></i></a>
      </div>
    </div>
  </template>
  <script>
    import Vue from "vue";
    import {
        VueFlux,
        FluxImages,
        FluxCaption,
        FluxControls,
        FluxIndex,
        FluxPagination,
        FluxPreloader,
    } from 'vue-flux';
    export default {
        components: {
            VueFlux,
            FluxImages,
            FluxCaption,
            FluxControls,
            FluxIndex,
            FluxPagination,
            FluxPreloader,
        },
    data() {
        return {
            options: {
                allowFullscreen: false,
                allowToSkipTransition: false,
                autohideTime: 2500,
                autoplay: true,
                bindKeys: false,
                delay: 18000,
                enableGestures: false,
                infinite: true,
                lazyLoad: true,
                lazyLoadAfter: 3,
                //aspectRatio: '4:5',
            },
            images: [],
            transitions: [
                'cube',
            ],
        };
    },
    mounted() {
        this.screenWidth();
    },
    computed: {},
    methods: {
        screenWidth(){
            if (screen.width < 600){
                this.images = [
                    '/images/teatro1_phone.png',
                    '/images/teatro2_phone.png',
                    '/images/teatro3_phone.png'
                ];
            }else{
                this.images = [
                    '/images/teatro1.png',
                    '/images/teatro2.png',
                    '/images/teatro3.png'
                ];
            }
        }
    },
  };
  </script>
  <style>
.phone {
    display: none;
}
.whatsapp a{
    color: white;
}
.whatsapp-icon {
    margin-top:13px;
}
.vue-flux{
    width: 1280px;
    height: 1020px;
    background-position: 0px 0px !important;
}
.flux-image{
    width: 100% !important;
    height: 1020px !important;
    background-size: 100% 1020px !important;
    background-position: bottom;
}
@media (max-width: 600px) {
    .desktop {
        display: none;
    }
    .phone {
        display: block;
    }
    .whatsapp a{
    color: white;
    }
    .whatsapp-icon {
        margin-top:13px;
    }
    .vue-flux{
        width: 390px;
        height: 840px;
        background-position: 0px 0px !important;
    }
    .flux-image{
        width: 100% !important;
        height: 840px !important;
        background-size: 100% 840px !important;
        background-position: 0px 0px !important;
        background-position: bottom;
    }
}
  </style>
