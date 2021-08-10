
<template>
    <div>
        <mathlive-mathfield
            id="mf" ref="mathfield"
            :options="{smartFence:false, virtualKeyboardMode:'manual', virtualKeyboardTheme:'material'}"
            :on-keystroke="displayKeystroke"
            @input="method_executed"
            v-model="content_editor">
                {{content_editor}}
        </mathlive-mathfield>
    </div>
</template>
<script>
import Vue from "vue";
import MathLive from "mathlive/dist/mathlive";
import Mathfield from "mathlive/dist/vue-mathlive.mjs"
Vue.use(Mathfield, MathLive);
export default {
    props: ["content"],
    data() {
       return{
            content_editor: "",
            keystroke: "",
            formula: "",
            
        }; 
    },
    methods: {
        ping: function () {
          console.log("ping");
        },
        displayKeystroke: function (keystroke, _ev) {
          this.keystroke = keystroke;
          
          return true;
          
        },
        asSpokenText: function () {
          return this.$refs.mathfield
            ? this.$refs.mathfield.getValue("spoken")
            : "";
        },
        method_executed()
       {
           this.$emit('updateText', this.content_editor)
      
       },
    },
    mounted() {
        this.content_editor=this.content;
    },
};
</script>