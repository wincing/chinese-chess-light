"use strict";
cc._RF.push(module, '51288LLlEdIwJBI9hXzYryK', 'AudioManager');
// scripts/music/AudioManager.js

"use strict";

/**
 * 控制全局音乐播放
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    bgMusic: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node);
  },
  click: function click() {
    this.flag ^= 1;

    if (this.flag == 1) {
      this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, true, 0.3);
    } else {
      cc.audioEngine.pause(this.bgMusicChannel);
    }
  },
  start: function start() {
    this.flag = 1;
    this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, true, 0.3);
  }
});

cc._RF.pop();