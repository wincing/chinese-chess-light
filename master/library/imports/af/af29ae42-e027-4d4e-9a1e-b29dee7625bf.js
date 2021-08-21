"use strict";
cc._RF.push(module, 'af29a5C4CdNTpoesp3udiW/', 'Piece');
// scripts/Piece.js

"use strict";

/**
 * 负责棋子的事件与交互的类
 * 
 * @property {cc.Node} node 该脚本挂载的节点
 * 
 * @property {Number} node.lastX 上一次棋子的x坐标
 * 
 * @property {Number} node.lastY 上一次棋子的x坐标
 * 
 * @property {Number} node.startX 棋子的初始x坐标
 * 
 * @property {Number} node.startY 棋子的初始y坐标
 * 
 * @property {Number} node.gx 棋子所处在格子的二维数组的行下标
 * 
 * @property {Number} node.gy 棋子所处在格子的二维数组的列下标
 * 
 * @property {Grid[]} node.grids 所有格子的引用数组
 * 
 * @property {PieceManager} node.manger 对所有棋子进行管理
 * 
 * @property {cc.Rect} node.range 棋盘所围成矩形
 * 
 * @property {Boolean} node.isInRange 标识棋子是否位于棋盘
 * 
 * @property {Boolean} node.disable 标识棋子是否失效 
 * 
 * @property {Boolean} node.type 标识棋子种类， 红棋为0， 黑棋为1
 */
cc.Class({
  "extends": cc.Component,

  /**
   * 标记棋子对周围格子的影响，将在子类中实现
   * @param {Number} status 1表示棋子下放, -1表示离开
   * @param {*} X 格子行下标
   * @param {*} Y 格子列下标
   */
  setflag: function setflag(status, X, Y) {},

  /**
   * 确定棋子是否属于当前格子, 若属于, 则更新棋子状态
   * @param {*} x 格子行下标
   * @param {*} y 格子列下标
   * @returns 属于返回true, 不属于返回false
   */
  fixGrid: function fixGrid(x, y) {
    var grid = this.node.grids[x][y]; // 该格子所在的矩形

    var size = grid.getContentSize();
    var rect = new cc.Rect(grid.x, grid.y - size.height, size.width, size.height);

    if (rect.contains(new cc.Vec2(this.node.x, this.node.y)) && grid.flag && !grid.hasPiece) {
      this.node.x = this.node.lastX = grid.x + size.width / 2;
      this.node.y = this.node.lastY = grid.y - size.height / 2;
      this.node.gx = x;
      this.node.gy = y;
      grid.hasPiece = true;
      grid.piece = this.node;
      this.node.isInRange = true;
      return true;
    }

    return false;
  },

  /**
   * 棋子开始拖动触发, 消除该棋子影响
   */
  onTouchStart: function onTouchStart(event) {
    if (this.isInRange) {
      this.grids[this.gx][this.gy].hasPiece = false; // 清除未失效棋子的影响

      if (!this.disable) {
        this.getComponents(cc.Component)[1].setflag(-1, this.gx, this.gy);
      }

      this.manger.enlighten();
    }
  },

  /**
   * 棋子拖动中, 持续更新棋子坐标
   */
  onTouchMove: function onTouchMove(event) {
    var delta = event.touch.getDelta();
    this.x += delta.x;
    this.y += delta.y;
  },

  /**
   * 当棋子下放时, 触发下放音效, 判断棋子是否落于某个格子, 更新所有格子状态，判断是否通关
   */
  onTouchEnd: function onTouchEnd(event) {
    // 下放音效
    var self = this;

    if (!self.putDownMusic) {
      cc.loader.loadRes("music/pieceDown", cc.AudioClip, function (err, clip) {
        self.putDownMusic = clip;
        cc.audioEngine.play(clip, false, 0.5); // 音量
      });
    } else {
      cc.audioEngine.play(self.putDownMusic, false, 1);
    } // 检查棋子是否被某个格子包含


    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        if (this.getComponents(cc.Component)[1].fixGrid(i, j)) {
          break;
        }
      }
    } // 棋子落点在棋盘外，回到起始点


    if (!this.range.contains(new cc.Vec2(this.x, this.y))) {
      this.x = this.lastX = this.startX;
      this.y = this.lastY = this.startY;
      this.gx = undefined;
      this.isInRange = false;
    } else {
      //返回上一个位置
      if (this.gx != undefined) {
        this.grids[this.gx][this.gy].hasPiece = true;
      }

      this.x = this.lastX;
      this.y = this.lastY;
    } // 更新所有格子状态并进行点亮


    this.manger.updateAll();
    this.manger.enlighten(); // 判断是否通关

    if (this.manger.checkPass()) {
      this.manger.passedAction();
    }
  },
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this.node);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this.node);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this.node);
  },
  onDestroy: function onDestroy() {
    this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this.node);
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this.node);
    this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this.node);
  },

  /**
   * 初始化
   */
  start: function start() {
    this.node.type = 0;
    this.node.disable = false;
    this.node.isInRange = false;
    this.node.startX = this.node.lastX = this.node.x;
    this.node.startY = this.node.lastY = this.node.y;
    this.node.manger = this.node.parent.getComponent("PieceManager"); // 棋盘所在矩形

    var grid = this.node.grids[9][0];
    var len = grid.getContentSize().width;
    this.node.range = new cc.Rect(grid.x, grid.y - len, len * 10, len * 10);
  }
});

cc._RF.pop();