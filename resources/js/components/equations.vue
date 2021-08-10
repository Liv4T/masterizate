<template>
<div class="back row justify-content-center">
    <div class="col-sm-10">
        <div>
            <mathlive-mathfield 
            id="mf" ref="mathfield"
            :options="{smartFence:false, virtualKeyboardMode:'manual', virtualKeyboardTheme:'apple'}"
            @focus="ping"
            :on-keystroke="displayKeystroke"
            v-model="formula1">
                f(x)=
            </mathlive-mathfield>
        </div> 
        <div>
            <mathlive-mathfield 
            id="mf" ref="mathfield"
            :options="{smartFence:false, virtualKeyboardMode:'manual', virtualKeyboardTheme:'apple'}"
            @focus="ping"
            :on-keystroke="displayKeystroke"
            v-model="formula2">
                f(x)=
            </mathlive-mathfield>
        </div>
        <div>
            <mathlive-mathfield 
            id="mf" ref="mathfield"
            :options="{smartFence:false, virtualKeyboardMode:'manual', virtualKeyboardTheme:'apple'}"
            @focus="ping"
            :on-keystroke="displayKeystroke"
            v-model="formula3">
                f(x)=
            </mathlive-mathfield>
        </div>
        <div>
            <mathlive-mathfield 
            id="mf" ref="mathfield"
            :options="{smartFence:false, virtualKeyboardMode:'manual', virtualKeyboardTheme:'apple'}"
            @focus="ping"
            :on-keystroke="displayKeystroke"
            v-model="formula4">
                f(x)=
            </mathlive-mathfield>
        </div>
        <div>
            <mathlive-mathfield 
            id="mf" ref="mathfield"
            :options="{smartFence:false, virtualKeyboardMode:'manual', virtualKeyboardTheme:'apple'}"
            @focus="ping"
            :on-keystroke="displayKeystroke"
            v-model="formula5">
                f(x)=
            </mathlive-mathfield>
        </div>
    </div>
</div>
</template>
<script>
    import Vue from "vue";
    import MathLive from "mathlive/dist/mathlive";
    import Mathfield from "mathlive/dist/vue-mathlive.mjs"
    
    Vue.use(Mathfield, MathLive);
   export default {
    data(){
        return{
            formula1: "",
            formula2: "",
            formula3: "",
            formula4: "",
            formula5: "",
            keystroke: "",
        }
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
    }
};
</script>
<style>
.mathfield {
    border: 1px solid #ddd;
    padding:5px;
    margin: 10px 0 10px 0;
    border-radius:5px;
    background-color: #fff;
    font-size: 24px;
}
.output {
    padding:5px;
    margin: 20px 0 20px 0;
    border-radius:5px;
    border: 1px solid #000;
    font-family: "Source Code Pro", Menlo, "Bitstream Vera Sans Mono", Monaco, Courier, "Andale Mono", monospace;
    color: #f0c674;
    background: #35434e;
}
label {
    font-weight: bold;
}
button {
    background: none;
    border:	1px solid rgba(0, 0, 0, .12);
    border-radius: 4px;
    color: #0066ce;
    fill: #0066ce;
    position: relative;
    height: 36px;
    line-height: 36px;
    margin: 0 18px 0 0;
    min-width: 64px;
    padding: 0 16px;
    display: inline-block;
    overflow: hidden;
    will-change: box-shadow;
    transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1);
    outline: none;
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    font-size: 16px;
    letter-spacing: 0.08929em;
    text-transform: uppercase;
    box-shadow:  0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12); 
    }
button:first-child {
    margin-left: 0;
}
button:hover {
    background-color: rgba(0,0,0,0.08);
}
button:active{
    background-color: white;
}
</style>