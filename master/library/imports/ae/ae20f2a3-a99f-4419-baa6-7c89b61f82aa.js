"use strict";
cc._RF.push(module, 'ae20fKjqZ9EGbqmfIm2H4Kq', 'MusicEvent');
// scripts/music/MusicEvent.js

"use strict";

/**
 * 按钮控制音乐开关
 */
cc.Class({
  "extends": cc.Component,
  start: function start() {
    this.AudioPlayer = cc.find("Audio").getComponent("AudioManager");
    this.bg = cc.find('Canvas/Background/MusicPlayer/Background');
    this.monitor();
  },
  Sound: function Sound() {
    this.AudioPlayer.click();
  },

  /**
   * 更换音乐按钮
   */
  monitor: function monitor() {
    var flag = cc.director.getScene('Start').getChildByName("Audio").getComponent('AudioManager').flag;

    if (flag == 1) {
      var self = this;
      cc.loader.loadRes("button/sound_on", cc.SpriteFrame, function (err, spriteFrame) {
        self.bg.getComponent(cc.Sprite).spriteFrame = spriteFrame;
      });
    } else {
      var self = this;
      cc.loader.loadRes("button/sound_off", cc.SpriteFrame, function (err, spriteFrame) {
        self.bg.getComponent(cc.Sprite).spriteFrame = spriteFrame;
      });
    }
  }
});

cc._RF.pop();