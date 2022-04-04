"use strict";
cc._RF.push(module, '299a92UlGZLEYk+Sgvg7yu+', 'Grid');
// scripts/Grid.js

"use strict";

/**
 * 组成棋盘的格子
 * 
 * @property {Number} flag  标识棋子的状态, 0为墙, 1为路, 2为灯
 * 
 * @property {Boolean} hasPiece 标识该格子上是否有棋子, 0为无, 1为有
 * 
 * @property {Number} num  照亮该格子的棋子的个数
 * 
 * @property {Piece} piece 位于格子上的棋子, 没有则为null
 */
cc.Class({
  "extends": cc.Component,

  /**
   * 当某个格子收到状态更改事件, 自动调用repaint方法
   */
  onLoad: function onLoad() {
    this.node.on("flag_changed", function () {
      this.repaint();
    }, this);
  },

  /**
   * 更换棋子背景
   */
  repaint: function repaint() {
    var self = this;

    switch (this.node.flag) {
      case 1:
        cc.loader.loadRes("grid/path", cc.SpriteFrame, function (err, spriteFrame) {
          self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        break;

      case 2:
        cc.loader.loadRes("grid/light", cc.SpriteFrame, function (err, spriteFrame) {
          self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        break;
    }
  },
  start: function start() {
    this.flag = null;
    this.hasPiece = false;
    this.num = 0;
    this.piece = null;
  }
});

cc._RF.pop();