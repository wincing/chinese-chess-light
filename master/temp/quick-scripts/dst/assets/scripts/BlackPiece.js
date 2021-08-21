
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BlackPiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73550kheWRAf4ekXzYBsm/u', 'BlackPiece');
// scripts/BlackPiece.js

"use strict";

/**
 * 各种黑棋的基类
 * 
 * @property {Number} node.gx 黑棋的所在格子的行坐标
 * 
 * @property {Number} node.gy 黑棋的所在格子的列坐标
 * 
 * @property {Boolean} node.type 标识棋子种类， 红棋为0， 黑棋为1
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    gx: 0,
    gy: 0
  },

  /**
   *  使攻击范围内的红棋失效
   */
  setflag: function setflag(X, Y) {},
  start: function start() {
    this.node.type = 1;
    this.node.gx = this.gx;
    this.node.gy = this.gy; // 将黑棋固定到格子上

    if (this.node.grids) {
      var grid = this.node.grids[this.gx][this.gy];
      var size = grid.getContentSize();
      grid.hasPiece = true;
      grid.piece = this.node;
      this.node.x = grid.x + size.width / 2;
      this.node.y = grid.y - size.height / 2;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmxhY2tQaWVjZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImd4IiwiZ3kiLCJzZXRmbGFnIiwiWCIsIlkiLCJzdGFydCIsIm5vZGUiLCJ0eXBlIiwiZ3JpZHMiLCJncmlkIiwic2l6ZSIsImdldENvbnRlbnRTaXplIiwiaGFzUGllY2UiLCJwaWVjZSIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsRUFBRSxFQUFFO0FBRkksR0FIUDs7QUFRTDs7O0FBR0FDLEVBQUFBLE9BQU8sRUFBRSxpQkFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWUsQ0FBRSxDQVhyQjtBQWFMQyxFQUFBQSxLQWJLLG1CQWFHO0FBQ0osU0FBS0MsSUFBTCxDQUFVQyxJQUFWLEdBQWlCLENBQWpCO0FBRUEsU0FBS0QsSUFBTCxDQUFVTixFQUFWLEdBQWUsS0FBS0EsRUFBcEI7QUFDQSxTQUFLTSxJQUFMLENBQVVMLEVBQVYsR0FBZSxLQUFLQSxFQUFwQixDQUpJLENBTUo7O0FBQ0EsUUFBRyxLQUFLSyxJQUFMLENBQVVFLEtBQWIsRUFBb0I7QUFDaEIsVUFBSUMsSUFBSSxHQUFHLEtBQUtILElBQUwsQ0FBVUUsS0FBVixDQUFnQixLQUFLUixFQUFyQixFQUF5QixLQUFLQyxFQUE5QixDQUFYO0FBQ0EsVUFBSVMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLGNBQUwsRUFBWDtBQUNBRixNQUFBQSxJQUFJLENBQUNHLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQUgsTUFBQUEsSUFBSSxDQUFDSSxLQUFMLEdBQWEsS0FBS1AsSUFBbEI7QUFFQSxXQUFLQSxJQUFMLENBQVVRLENBQVYsR0FBY0wsSUFBSSxDQUFDSyxDQUFMLEdBQVNKLElBQUksQ0FBQ0ssS0FBTCxHQUFhLENBQXBDO0FBQ0EsV0FBS1QsSUFBTCxDQUFVVSxDQUFWLEdBQWNQLElBQUksQ0FBQ08sQ0FBTCxHQUFTTixJQUFJLENBQUNPLE1BQUwsR0FBYyxDQUFyQztBQUNIO0FBQ0o7QUE3QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWQhOenjem7keaji+eahOWfuuexu1xyXG4gKiBcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IG5vZGUuZ3gg6buR5qOL55qE5omA5Zyo5qC85a2Q55qE6KGM5Z2Q5qCHXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gbm9kZS5neSDpu5Hmo4vnmoTmiYDlnKjmoLzlrZDnmoTliJflnZDmoIdcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbm9kZS50eXBlIOagh+ivhuaji+WtkOenjeexu++8jCDnuqLmo4vkuLow77yMIOm7keaji+S4ujFcclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ3g6IDAsXHJcbiAgICAgICAgZ3k6IDAsXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiAg5L2/5pS75Ye76IyD5Zu05YaF55qE57qi5qOL5aSx5pWIXHJcbiAgICAgKi9cclxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKFgsIFkpIHt9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS50eXBlID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmd4ID0gdGhpcy5neDtcclxuICAgICAgICB0aGlzLm5vZGUuZ3kgPSB0aGlzLmd5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOWwhum7keaji+WbuuWumuWIsOagvOWtkOS4ilxyXG4gICAgICAgIGlmKHRoaXMubm9kZS5ncmlkcykge1xyXG4gICAgICAgICAgICB2YXIgZ3JpZCA9IHRoaXMubm9kZS5ncmlkc1t0aGlzLmd4XVt0aGlzLmd5XTtcclxuICAgICAgICAgICAgdmFyIHNpemUgPSBncmlkLmdldENvbnRlbnRTaXplKCk7XHJcbiAgICAgICAgICAgIGdyaWQuaGFzUGllY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBncmlkLnBpZWNlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSBncmlkLnggKyBzaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSBncmlkLnkgLSBzaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbn0pO1xyXG4iXX0=