cc.Class({
    extends: cc.Component,

    properties: {
       buttonSound:{
           type:cc.AudioClip,
           default:null
       }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    Sound(){
        cc.audioEngine.play(this.buttonSound,false,0.4);
    }

    // update (dt) {},
});

