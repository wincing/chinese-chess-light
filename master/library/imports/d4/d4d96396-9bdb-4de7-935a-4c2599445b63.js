"use strict";
cc._RF.push(module, 'd4d96OWm9tN55NaTCWZRFtj', 'InitColor');
// scripts/InitColor.js

"use strict";

/**
 * 改变过关关卡颜色
 */
cc.Class({
  "extends": cc.Component,

  /**
   * 初始按钮颜色
   */
  initButton: function initButton() {
    var levels = this.node.getChildren();
    cc.loader.loadRes("button/stage_passed", cc.SpriteFrame, function (err, spriteFrame) {
      for (var i = 0; i < 9; i++) {
        var key = levels[i].name;

        if (cc.sys.localStorage.getItem(key)) {
          // 更换字体颜色
          levels[i].getChildByName('Label').color = new cc.color(255, 217, 102, 255); // 更换按钮图片

          levels[i].getComponent(cc.Button).normalSprite = spriteFrame;
        }
      }
    });
  },

  /**
   * 初始标题颜色
   */
  initTitle: function initTitle() {
    var index = this.node.parent.getComponents(cc.Component)[1].index;

    if (cc.sys.localStorage.getItem('Level' + index)) {
      // 更换标题颜色
      this.node.color = new cc.color(255, 217, 102, 255);
    }
  },

  /**
   * 初始化章节颜色, 用与场景ChoiceCap
   */
  initChapter: function initChapter() {
    // 获取全部通关章节
    var caps = new Array();

    for (var i = 1; i <= 5; i++) {
      var flag = true;

      for (var j = (i - 1) * 9 + 1; j <= 9 * i; j++) {
        if (!cc.sys.localStorage.getItem('Level' + j)) {
          flag = false;
          break;
        }
      }

      if (flag) {
        var name = 'Canvas/BackGround/Chapter' + i;
        caps[i] = cc.find(name);
      }
    } // 更改章节样式


    cc.loader.loadRes("button/chap_passed", cc.SpriteFrame, function (err, spriteFrame) {
      for (var i = 1; i <= 5; i++) {
        if (caps[i]) {
          // 更换字体颜色
          caps[i].getChildByName('Label').color = new cc.color(255, 217, 102, 255); // 更换按钮图片

          caps[i].getComponent(cc.Button).normalSprite = spriteFrame;
        }
      }
    });
  },
  start: function start() {
    if (this.node.name == 'Levels') this.initButton();else if (this.node.name == 'Title') this.initTitle();else this.initChapter();
  }
});

cc._RF.pop();