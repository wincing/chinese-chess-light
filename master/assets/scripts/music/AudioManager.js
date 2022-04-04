/**
 * 控制全局音乐播放
 */
cc.Class({
    extends: cc.Component,

    properties: {
        bgMusic:{
            default: null,
            type: cc.AudioClip,
        },
    },

    onLoad() {
        cc.game.addPersistRootNode(this.node);
    },

    click() {
        this.flag ^= 1;
        if(this.flag == 1) {
            this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, true, 0.3);
        }else {
            cc.audioEngine.pause(this.bgMusicChannel);         
        }
    },

    start() {
        this.flag = 1;
        this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, true, 0.3);
    }

});