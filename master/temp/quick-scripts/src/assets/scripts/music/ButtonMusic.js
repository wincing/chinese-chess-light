"use strict";
cc._RF.push(module, '4b359ASVqJMzod+Qxu9Bf+J', 'ButtonMusic');
// scripts/music/ButtonMusic.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    buttonSound: {
      type: cc.AudioClip,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  Sound: function Sound() {
    cc.audioEngine.play(this.buttonSound, false, 0.4);
  } // update (dt) {},

});

cc._RF.pop();