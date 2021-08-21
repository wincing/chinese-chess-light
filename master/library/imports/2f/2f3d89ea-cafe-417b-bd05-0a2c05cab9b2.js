"use strict";
cc._RF.push(module, '2f3d8nqyv5Be70FCiwFyrmy', 'Skip');
// scripts/Skip.js

"use strict";

/**
 * 控制场景切换事件的类
 */
cc.Class({
  "extends": cc.Component,

  /**
   * 场景跳转
   * @param {*} event 
   * @param {String} customEventData 所要跳转至的场景名称
   */
  skipTo: function skipTo(event, customEventData) {
    cc.director.loadScene(customEventData);
  },

  /**
   * 跳转到当前关卡的下一关
   */
  nextPass: function nextPass() {
    var canvas = cc.find('Canvas');
    var level = canvas.getComponents(cc.Component)[1].index;
    canvas.stopAllActions();
    level += 1;

    if (level > 45) {
      cc.director.loadScene("Start");
    } else {
      cc.director.loadScene("Level" + level);
    }
  },

  /**
   * 按钮显示对应的指引
   * @param {*} event 
   * @param {String} customEventData 需要加载的教程资源名
   */
  loadTutorial: function loadTutorial(event, customEventData) {
    var show = cc.find('Canvas/Show');
    var name = 'tutorial/' + customEventData;
    cc.loader.loadRes(name, cc.SpriteFrame, function (err, spriteFrame) {
      show.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    });
  },

  /**
   * 隐藏提示
   */
  hide: function hide() {
    cc.find('Canvas/Tip').active = false;
  },

  /**
   * 显示提示
   */
  appear: function appear() {
    cc.find('Canvas/Tip').active = true;
  },

  /**
   * 主动分享
   */
  share: function share() {
    cc.loader.loadRes("share", function (err, data) {
      wx.shareAppMessage({
        title: "生于黑暗，始见光明。",
        imageUrl: data.url,
        success: function success(res) {
          console.log(res);
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    });
  }
});

cc._RF.pop();