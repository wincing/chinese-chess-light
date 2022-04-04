
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGllY2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInNldGZsYWciLCJzdGF0dXMiLCJYIiwiWSIsImZpeEdyaWQiLCJ4IiwieSIsImdyaWQiLCJub2RlIiwiZ3JpZHMiLCJzaXplIiwiZ2V0Q29udGVudFNpemUiLCJyZWN0IiwiUmVjdCIsImhlaWdodCIsIndpZHRoIiwiY29udGFpbnMiLCJWZWMyIiwiZmxhZyIsImhhc1BpZWNlIiwibGFzdFgiLCJsYXN0WSIsImd4IiwiZ3kiLCJwaWVjZSIsImlzSW5SYW5nZSIsIm9uVG91Y2hTdGFydCIsImV2ZW50IiwiZGlzYWJsZSIsImdldENvbXBvbmVudHMiLCJtYW5nZXIiLCJlbmxpZ2h0ZW4iLCJvblRvdWNoTW92ZSIsImRlbHRhIiwidG91Y2giLCJnZXREZWx0YSIsIm9uVG91Y2hFbmQiLCJzZWxmIiwicHV0RG93bk11c2ljIiwibG9hZGVyIiwibG9hZFJlcyIsIkF1ZGlvQ2xpcCIsImVyciIsImNsaXAiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJpIiwiaiIsInJhbmdlIiwic3RhcnRYIiwic3RhcnRZIiwidW5kZWZpbmVkIiwidXBkYXRlQWxsIiwiY2hlY2tQYXNzIiwicGFzc2VkQWN0aW9uIiwib25Mb2FkIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJUT1VDSF9NT1ZFIiwiVE9VQ0hfRU5EIiwib25EZXN0cm95Iiwib2ZmIiwic3RhcnQiLCJ0eXBlIiwicGFyZW50IiwiZ2V0Q29tcG9uZW50IiwibGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7O0FBR0w7Ozs7OztBQU1BQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUJDLENBQWpCLEVB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UzhELEdBQTdCLEVBQWtDQSxHQUFHLEdBQUcsRUFBeEMsRUFBNENBLEdBQUcsR0FBRyxFQUFsRCxDQUFsQjtBQUVIO0FBdEpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6LSf6LSj5qOL5a2Q55qE5LqL5Lu25LiO5Lqk5LqS55qE57G7XG4gKiBcbiAqIEBwcm9wZXJ0eSB7Y2MuTm9kZX0gbm9kZSDor6XohJrmnKzmjILovb3nmoToioLngrlcbiAqIFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IG5vZGUubGFzdFgg5LiK5LiA5qyh5qOL5a2Q55qEeOWdkOagh1xuICogXG4gKiBAcHJvcGVydHkge051bWJlcn0gbm9kZS5sYXN0WSDkuIrkuIDmrKHmo4vlrZDnmoR45Z2Q5qCHXG4gKiBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBub2RlLnN0YXJ0WCDmo4vlrZDnmoTliJ3lp4t45Z2Q5qCHXG4gKiBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBub2RlLnN0YXJ0WSDmo4vlrZDnmoTliJ3lp4t55Z2Q5qCHXG4gKiBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBub2RlLmd4IOaji+WtkOaJgOWkhOWcqOagvOWtkOeahOS6jOe7tOaVsOe7hOeahOihjOS4i+agh1xuICogXG4gKiBAcHJvcGVydHkge051bWJlcn0gbm9kZS5neSDmo4vlrZDmiYDlpITlnKjmoLzlrZDnmoTkuoznu7TmlbDnu4TnmoTliJfkuIvmoIdcbiAqIFxuICogQHByb3BlcnR5IHtHcmlkW119IG5vZGUuZ3JpZHMg5omA5pyJ5qC85a2Q55qE5byV55So5pWw57uEXG4gKiBcbiAqIEBwcm9wZXJ0eSB7UGllY2VNYW5hZ2VyfSBub2RlLm1hbmdlciDlr7nmiYDmnInmo4vlrZDov5vooYznrqHnkIZcbiAqIFxuICogQHByb3BlcnR5IHtjYy5SZWN0fSBub2RlLnJhbmdlIOaji+ebmOaJgOWbtOaIkOefqeW9olxuICogXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IG5vZGUuaXNJblJhbmdlIOagh+ivhuaji+WtkOaYr+WQpuS9jeS6juaji+ebmFxuICogXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IG5vZGUuZGlzYWJsZSDmoIfor4bmo4vlrZDmmK/lkKblpLHmlYggXG4gKiBcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbm9kZS50eXBlIOagh+ivhuaji+WtkOenjeexu++8jCDnuqLmo4vkuLow77yMIOm7keaji+S4ujFcbiAqL1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiBcbiAgICAvKipcbiAgICAgKiDmoIforrDmo4vlrZDlr7nlkajlm7TmoLzlrZDnmoTlvbHlk43vvIzlsIblnKjlrZDnsbvkuK3lrp7njrBcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzIDHooajnpLrmo4vlrZDkuIvmlL4sIC0x6KGo56S656a75byAXG4gICAgICogQHBhcmFtIHsqfSBYIOagvOWtkOihjOS4i+agh1xuICAgICAqIEBwYXJhbSB7Kn0gWSDmoLzlrZDliJfkuIvmoIdcbiAgICAgKi9cbiAgICBzZXRmbGFnOiBmdW5jdGlvbihzdGF0dXMsIFgsIFkpIHt9LFxuIFxuXG4gICAgLyoqXG4gICAgICog56Gu5a6a5qOL5a2Q5piv5ZCm5bGe5LqO5b2T5YmN5qC85a2QLCDoi6XlsZ7kuo4sIOWImeabtOaWsOaji+WtkOeKtuaAgVxuICAgICAqIEBwYXJhbSB7Kn0geCDmoLzlrZDooYzkuIvmoIdcbiAgICAgKiBAcGFyYW0geyp9IHkg5qC85a2Q5YiX5LiL5qCHXG4gICAgICogQHJldHVybnMg5bGe5LqO6L+U5ZuedHJ1ZSwg5LiN5bGe5LqO6L+U5ZueZmFsc2VcbiAgICAgKi9cbiAgICBmaXhHcmlkOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHZhciBncmlkID0gdGhpcy5ub2RlLmdyaWRzW3hdW3ldO1xuXG4gICAgICAgIC8vIOivpeagvOWtkOaJgOWcqOeahOefqeW9olxuICAgICAgICB2YXIgc2l6ZSA9IGdyaWQuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgdmFyIHJlY3QgPSBuZXcgY2MuUmVjdChncmlkLngsIGdyaWQueSAtIHNpemUuaGVpZ2h0LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG5cbiAgICAgICAgaWYocmVjdC5jb250YWlucyhuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpKSAmJiBncmlkLmZsYWcgJiYgIWdyaWQuaGFzUGllY2UpIHtcblxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSB0aGlzLm5vZGUubGFzdFggPSBncmlkLnggKyBzaXplLndpZHRoIC8gMjtcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5ub2RlLmxhc3RZID0gZ3JpZC55IC0gc2l6ZS5oZWlnaHQgLyAyO1xuXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ3ggPSB4O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmd5ID0geTtcblxuICAgICAgICAgICAgZ3JpZC5oYXNQaWVjZSA9IHRydWU7IFxuICAgICAgICAgICAgZ3JpZC5waWVjZSA9IHRoaXMubm9kZTtcblxuICAgICAgICAgICAgdGhpcy5ub2RlLmlzSW5SYW5nZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgIFxuICAgICAgICB9IFxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5qOL5a2Q5byA5aeL5ouW5Yqo6Kem5Y+RLCDmtojpmaTor6Xmo4vlrZDlvbHlk41cbiAgICAgKi9cbiAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmKHRoaXMuaXNJblJhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRzW3RoaXMuZ3hdW3RoaXMuZ3ldLmhhc1BpZWNlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIOa4hemZpOacquWkseaViOaji+WtkOeahOW9seWTjVxuICAgICAgICAgICAgaWYoIXRoaXMuZGlzYWJsZSkgeyBcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudHMoY2MuQ29tcG9uZW50KVsxXS5zZXRmbGFnKC0xLCB0aGlzLmd4LCB0aGlzLmd5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWFuZ2VyLmVubGlnaHRlbigpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaji+WtkOaLluWKqOS4rSwg5oyB57ut5pu05paw5qOL5a2Q5Z2Q5qCHXG4gICAgICovXG4gICAgb25Ub3VjaE1vdmU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LnRvdWNoLmdldERlbHRhKCk7XG4gICAgICAgIHRoaXMueCArPSBkZWx0YS54O1xuICAgICAgICB0aGlzLnkgKz0gZGVsdGEueTtcbiAgICB9LFxuICAgIFxuXG4gICAgLyoqXG4gICAgICog5b2T5qOL5a2Q5LiL5pS+5pe2LCDop6blj5HkuIvmlL7pn7PmlYgsIOWIpOaWreaji+WtkOaYr+WQpuiQveS6juafkOS4quagvOWtkCwg5pu05paw5omA5pyJ5qC85a2Q54q25oCB77yM5Yik5pat5piv5ZCm6YCa5YWzXG4gICAgICovXG4gICAgb25Ub3VjaEVuZDogZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAvLyDkuIvmlL7pn7PmlYhcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIXNlbGYucHV0RG93bk11c2ljKSB7XG4gICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwibXVzaWMvcGllY2VEb3duXCIsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xuICAgICAgICAgICAgICAgIHNlbGYucHV0RG93bk11c2ljID0gY2xpcDtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGZhbHNlLCAwLjUpOy8vIOmfs+mHj1xuICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShzZWxmLnB1dERvd25NdXNpYywgZmFsc2UsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qOA5p+l5qOL5a2Q5piv5ZCm6KKr5p+Q5Liq5qC85a2Q5YyF5ZCrXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpWzFdLmZpeEdyaWQoaSwgaikpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaji+WtkOiQveeCueWcqOaji+ebmOWklu+8jOWbnuWIsOi1t+Wni+eCuVxuICAgICAgICBpZighdGhpcy5yYW5nZS5jb250YWlucyhuZXcgY2MuVmVjMih0aGlzLngsIHRoaXMueSkpKSB7XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLmxhc3RYID0gdGhpcy5zdGFydFg7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLmxhc3RZID0gdGhpcy5zdGFydFk7XG4gICAgICAgICAgICB0aGlzLmd4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5pc0luUmFuZ2UgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHsgICAgLy/ov5Tlm57kuIrkuIDkuKrkvY3nva5cbiAgICAgICAgICAgIGlmKHRoaXMuZ3ggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkc1t0aGlzLmd4XVt0aGlzLmd5XS5oYXNQaWVjZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOabtOaWsOaJgOacieagvOWtkOeKtuaAgeW5tui/m+ihjOeCueS6rlxuICAgICAgICB0aGlzLm1hbmdlci51cGRhdGVBbGwoKTtcbiAgICAgICAgdGhpcy5tYW5nZXIuZW5saWdodGVuKCk7IFxuXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpumAmuWFs1xuICAgICAgICBpZih0aGlzLm1hbmdlci5jaGVja1Bhc3MoKSkge1xuICAgICAgICAgICAgdGhpcy5tYW5nZXIucGFzc2VkQWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcy5ub2RlKTsgXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMubm9kZSk7IFxuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3kgKCkge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzLm5vZGUpOyBcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyWXG4gICAgICovXG4gICAgc3RhcnQgKCkge1xuXG4gICAgICAgIHRoaXMubm9kZS50eXBlID0gMDtcblxuICAgICAgICB0aGlzLm5vZGUuZGlzYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubm9kZS5pc0luUmFuZ2UgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm5vZGUuc3RhcnRYID0gdGhpcy5ub2RlLmxhc3RYID0gdGhpcy5ub2RlLng7XG4gICAgICAgIHRoaXMubm9kZS5zdGFydFkgPSB0aGlzLm5vZGUubGFzdFkgPSB0aGlzLm5vZGUueTtcblxuICAgICAgICB0aGlzLm5vZGUubWFuZ2VyID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJQaWVjZU1hbmFnZXJcIik7XG5cbiAgICAgICAgLy8g5qOL55uY5omA5Zyo55+p5b2iXG4gICAgICAgIHZhciBncmlkID0gdGhpcy5ub2RlLmdyaWRzWzldWzBdO1xuICAgICAgICB2YXIgbGVuID0gZ3JpZC5nZXRDb250ZW50U2l6ZSgpLndpZHRoO1xuICAgICAgICB0aGlzLm5vZGUucmFuZ2UgPSBuZXcgY2MuUmVjdChncmlkLngsIGdyaWQueSAtIGxlbiwgbGVuICogMTAsIGxlbiAqIDEwKTtcblxuICAgIH0sXG5cbn0pO1xuIl19