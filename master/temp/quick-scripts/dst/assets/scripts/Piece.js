
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Piece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGllY2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInNldGZsYWciLCJzdGF0dXMiLCJYIiwiWSIsImZpeEdyaWQiLCJ4IiwieSIsImdyaWQiLCJub2RlIiwiZ3JpZHMiLCJzaXplIiwiZ2V0Q29udGVudFNpemUiLCJyZWN0IiwiUmVjdCIsImhlaWdodCIsIndpZHRoIiwiY29udGFpbnMiLCJWZWMyIiwiZmxhZyIsImhhc1BpZWNlIiwibGFzdFgiLCJsYXN0WSIsImd4IiwiZ3kiLCJwaWVjZSIsImlzSW5SYW5nZSIsIm9uVG91Y2hTdGFydCIsImV2ZW50IiwiZGlzYWJsZSIsImdldENvbXBvbmVudHMiLCJtYW5nZXIiLCJlbmxpZ2h0ZW4iLCJvblRvdWNoTW92ZSIsImRlbHRhIiwidG91Y2giLCJnZXREZWx0YSIsIm9uVG91Y2hFbmQiLCJzZWxmIiwicHV0RG93bk11c2ljIiwibG9hZGVyIiwibG9hZFJlcyIsIkF1ZGlvQ2xpcCIsImVyciIsImNsaXAiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJpIiwiaiIsInJhbmdlIiwic3RhcnRYIiwic3RhcnRZIiwidW5kZWZpbmVkIiwidXBkYXRlQWxsIiwiY2hlY2tQYXNzIiwicGFzc2VkQWN0aW9uIiwib25Mb2FkIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJUT1VDSF9NT1ZFIiwiVE9VQ0hfRU5EIiwib25EZXN0cm95Iiwib2ZmIiwic3RhcnQiLCJ0eXBlIiwicGFyZW50IiwiZ2V0Q29tcG9uZW50IiwibGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7O0FBR0w7Ozs7OztBQU1BQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUJDLENBQWpCLEVB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UzhELEdBQTdCLEVBQWtDQSxHQUFHLEdBQUcsRUFBeEMsRUFBNENBLEdBQUcsR0FBRyxFQUFsRCxDQUFsQjtBQUVIO0FBdEpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDotJ/otKPmo4vlrZDnmoTkuovku7bkuI7kuqTkupLnmoTnsbtcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7Y2MuTm9kZX0gbm9kZSDor6XohJrmnKzmjILovb3nmoToioLngrlcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBub2RlLmxhc3RYIOS4iuS4gOasoeaji+WtkOeahHjlnZDmoIdcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBub2RlLmxhc3RZIOS4iuS4gOasoeaji+WtkOeahHjlnZDmoIdcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBub2RlLnN0YXJ0WCDmo4vlrZDnmoTliJ3lp4t45Z2Q5qCHXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gbm9kZS5zdGFydFkg5qOL5a2Q55qE5Yid5aeLeeWdkOagh1xyXG4gKiBcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IG5vZGUuZ3gg5qOL5a2Q5omA5aSE5Zyo5qC85a2Q55qE5LqM57u05pWw57uE55qE6KGM5LiL5qCHXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gbm9kZS5neSDmo4vlrZDmiYDlpITlnKjmoLzlrZDnmoTkuoznu7TmlbDnu4TnmoTliJfkuIvmoIdcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7R3JpZFtdfSBub2RlLmdyaWRzIOaJgOacieagvOWtkOeahOW8leeUqOaVsOe7hFxyXG4gKiBcclxuICogQHByb3BlcnR5IHtQaWVjZU1hbmFnZXJ9IG5vZGUubWFuZ2VyIOWvueaJgOacieaji+WtkOi/m+ihjOeuoeeQhlxyXG4gKiBcclxuICogQHByb3BlcnR5IHtjYy5SZWN0fSBub2RlLnJhbmdlIOaji+ebmOaJgOWbtOaIkOefqeW9olxyXG4gKiBcclxuICogQHByb3BlcnR5IHtCb29sZWFufSBub2RlLmlzSW5SYW5nZSDmoIfor4bmo4vlrZDmmK/lkKbkvY3kuo7mo4vnm5hcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbm9kZS5kaXNhYmxlIOagh+ivhuaji+WtkOaYr+WQpuWkseaViCBcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbm9kZS50eXBlIOagh+ivhuaji+WtkOenjeexu++8jCDnuqLmo4vkuLow77yMIOm7keaji+S4ujFcclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuIFxyXG4gICAgLyoqXHJcbiAgICAgKiDmoIforrDmo4vlrZDlr7nlkajlm7TmoLzlrZDnmoTlvbHlk43vvIzlsIblnKjlrZDnsbvkuK3lrp7njrBcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXMgMeihqOekuuaji+WtkOS4i+aUviwgLTHooajnpLrnprvlvIBcclxuICAgICAqIEBwYXJhbSB7Kn0gWCDmoLzlrZDooYzkuIvmoIdcclxuICAgICAqIEBwYXJhbSB7Kn0gWSDmoLzlrZDliJfkuIvmoIdcclxuICAgICAqL1xyXG4gICAgc2V0ZmxhZzogZnVuY3Rpb24oc3RhdHVzLCBYLCBZKSB7fSxcclxuIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56Gu5a6a5qOL5a2Q5piv5ZCm5bGe5LqO5b2T5YmN5qC85a2QLCDoi6XlsZ7kuo4sIOWImeabtOaWsOaji+WtkOeKtuaAgVxyXG4gICAgICogQHBhcmFtIHsqfSB4IOagvOWtkOihjOS4i+agh1xyXG4gICAgICogQHBhcmFtIHsqfSB5IOagvOWtkOWIl+S4i+agh1xyXG4gICAgICogQHJldHVybnMg5bGe5LqO6L+U5ZuedHJ1ZSwg5LiN5bGe5LqO6L+U5ZueZmFsc2VcclxuICAgICAqL1xyXG4gICAgZml4R3JpZDogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgICAgIHZhciBncmlkID0gdGhpcy5ub2RlLmdyaWRzW3hdW3ldO1xyXG5cclxuICAgICAgICAvLyDor6XmoLzlrZDmiYDlnKjnmoTnn6nlvaJcclxuICAgICAgICB2YXIgc2l6ZSA9IGdyaWQuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICB2YXIgcmVjdCA9IG5ldyBjYy5SZWN0KGdyaWQueCwgZ3JpZC55IC0gc2l6ZS5oZWlnaHQsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYocmVjdC5jb250YWlucyhuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpKSAmJiBncmlkLmZsYWcgJiYgIWdyaWQuaGFzUGllY2UpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy5ub2RlLmxhc3RYID0gZ3JpZC54ICsgc2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5ub2RlLmxhc3RZID0gZ3JpZC55IC0gc2l6ZS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmd4ID0geDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmd5ID0geTtcclxuXHJcbiAgICAgICAgICAgIGdyaWQuaGFzUGllY2UgPSB0cnVlOyBcclxuICAgICAgICAgICAgZ3JpZC5waWVjZSA9IHRoaXMubm9kZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5pc0luUmFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmo4vlrZDlvIDlp4vmi5bliqjop6blj5EsIOa2iOmZpOivpeaji+WtkOW9seWTjVxyXG4gICAgICovXHJcbiAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYodGhpcy5pc0luUmFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkc1t0aGlzLmd4XVt0aGlzLmd5XS5oYXNQaWVjZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8g5riF6Zmk5pyq5aSx5pWI5qOL5a2Q55qE5b2x5ZONXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmRpc2FibGUpIHsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudHMoY2MuQ29tcG9uZW50KVsxXS5zZXRmbGFnKC0xLCB0aGlzLmd4LCB0aGlzLmd5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1hbmdlci5lbmxpZ2h0ZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOL5a2Q5ouW5Yqo5LitLCDmjIHnu63mm7TmlrDmo4vlrZDlnZDmoIdcclxuICAgICAqL1xyXG4gICAgb25Ub3VjaE1vdmU6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGRlbHRhID0gZXZlbnQudG91Y2guZ2V0RGVsdGEoKTtcclxuICAgICAgICB0aGlzLnggKz0gZGVsdGEueDtcclxuICAgICAgICB0aGlzLnkgKz0gZGVsdGEueTtcclxuICAgIH0sXHJcbiAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+aji+WtkOS4i+aUvuaXtiwg6Kem5Y+R5LiL5pS+6Z+z5pWILCDliKTmlq3mo4vlrZDmmK/lkKbokL3kuo7mn5DkuKrmoLzlrZAsIOabtOaWsOaJgOacieagvOWtkOeKtuaAge+8jOWIpOaWreaYr+WQpumAmuWFs1xyXG4gICAgICovXHJcbiAgICBvblRvdWNoRW5kOiBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICAvLyDkuIvmlL7pn7PmlYhcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCFzZWxmLnB1dERvd25NdXNpYykge1xyXG4gICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwibXVzaWMvcGllY2VEb3duXCIsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wdXREb3duTXVzaWMgPSBjbGlwO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBmYWxzZSwgMC41KTsvLyDpn7Pph49cclxuICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkoc2VsZi5wdXREb3duTXVzaWMsIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOajgOafpeaji+WtkOaYr+WQpuiiq+afkOS4quagvOWtkOWMheWQq1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmdldENvbXBvbmVudHMoY2MuQ29tcG9uZW50KVsxXS5maXhHcmlkKGksIGopKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmo4vlrZDokL3ngrnlnKjmo4vnm5jlpJbvvIzlm57liLDotbflp4vngrlcclxuICAgICAgICBpZighdGhpcy5yYW5nZS5jb250YWlucyhuZXcgY2MuVmVjMih0aGlzLngsIHRoaXMueSkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMubGFzdFggPSB0aGlzLnN0YXJ0WDtcclxuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5sYXN0WSA9IHRoaXMuc3RhcnRZO1xyXG4gICAgICAgICAgICB0aGlzLmd4ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLmlzSW5SYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7ICAgIC8v6L+U5Zue5LiK5LiA5Liq5L2N572uXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ3ggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRzW3RoaXMuZ3hdW3RoaXMuZ3ldLmhhc1BpZWNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLmxhc3RYO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLmxhc3RZO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5pu05paw5omA5pyJ5qC85a2Q54q25oCB5bm26L+b6KGM54K55LquXHJcbiAgICAgICAgdGhpcy5tYW5nZXIudXBkYXRlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5tYW5nZXIuZW5saWdodGVuKCk7IFxyXG5cclxuICAgICAgICAvLyDliKTmlq3mmK/lkKbpgJrlhbNcclxuICAgICAgICBpZih0aGlzLm1hbmdlci5jaGVja1Bhc3MoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hbmdlci5wYXNzZWRBY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcy5ub2RlKTsgXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzLm5vZGUpOyBcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcy5ub2RlKTsgXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnR5cGUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZGlzYWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuaXNJblJhbmdlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5zdGFydFggPSB0aGlzLm5vZGUubGFzdFggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICB0aGlzLm5vZGUuc3RhcnRZID0gdGhpcy5ub2RlLmxhc3RZID0gdGhpcy5ub2RlLnk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5tYW5nZXIgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcIlBpZWNlTWFuYWdlclwiKTtcclxuXHJcbiAgICAgICAgLy8g5qOL55uY5omA5Zyo55+p5b2iXHJcbiAgICAgICAgdmFyIGdyaWQgPSB0aGlzLm5vZGUuZ3JpZHNbOV1bMF07XHJcbiAgICAgICAgdmFyIGxlbiA9IGdyaWQuZ2V0Q29udGVudFNpemUoKS53aWR0aDtcclxuICAgICAgICB0aGlzLm5vZGUucmFuZ2UgPSBuZXcgY2MuUmVjdChncmlkLngsIGdyaWQueSAtIGxlbiwgbGVuICogMTAsIGxlbiAqIDEwKTtcclxuXHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==