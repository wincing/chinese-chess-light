
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/BlackChe.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00581o/TGBAnbfjvi5VVeJW', 'BlackChe');
// scripts/piece/BlackChe.js

"use strict";

/**
 * 控制黑棋车的组件
 */
cc.Class({
  "extends": require("BlackPiece"),
  setflag: function setflag(X, Y) {
    var x = X;
    var y = Y;
    var grids = this.node.grids; // 向下

    x++;

    while (x <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) {
      x++;
    }

    if (x <= 9 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
      grids[x][y].piece.disable = true;
    }

    x = X; // 向上

    x--;

    while (x >= 0 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) {
      x--;
    }

    if (x >= 0 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
      grids[x][y].piece.disable = true;
    }

    x = X; // 向左

    y--;

    while (y >= 0 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) {
      y--;
    }

    if (y >= 0 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
      grids[x][y].piece.disable = true;
    }

    y = Y; // 向右

    y++;

    while (y <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) {
      y++;
    }

    if (y <= 9 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
      grids[x][y].piece.disable = true;
    }

    y = Y;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrQ2hlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsIlgiLCJZIiwieCIsInkiLCJncmlkcyIsIm5vZGUiLCJmbGFnIiwiaGFzUGllY2UiLCJwaWVjZSIsImRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUlDQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNOLGFBQVNDLE9BQU8sQ0FBQyxZQUFELENBRFY7QUFHTkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNwQixRQUFJQyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QixDQUhvQixDQU1wQjs7QUFDQUYsSUFBQUEsQ0FBQzs7QUFDRCxXQUFNQSxDQUFDLElBQUksQ0FBTCxJQUFVRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUMsQ0FBQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUF0RDtBQUFnRUwsTUFBQUEsQ0FBQztBQUFqRTs7QUFFQSxRQUFHQSxDQUFDLElBQUksQ0FBTCxJQUFVRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUNGLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBbEQsRUFBNEQ7QUFDeERILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsSUFBNUI7QUFDSDs7QUFDRFAsSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBYm9CLENBZXBCOztBQUNBRSxJQUFBQSxDQUFDOztBQUNELFdBQU1BLENBQUMsSUFBSSxDQUFMLElBQVVFLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQixDQUE5QixJQUFtQyxDQUFDRixLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLFFBQXREO0FBQWdFTCxNQUFBQSxDQUFDO0FBQWpFOztBQUVBLFFBQUdBLENBQUMsSUFBSSxDQUFMLElBQVVFLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQixDQUE5QixJQUFtQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUFsRCxFQUE0RDtBQUN4REgsTUFBQUEsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxLQUFaLENBQWtCQyxPQUFsQixHQUE0QixJQUE1QjtBQUNIOztBQUNEUCxJQUFBQSxDQUFDLEdBQUdGLENBQUosQ0F0Qm9CLENBd0JwQjs7QUFDQUcsSUFBQUEsQ0FBQzs7QUFDRCxXQUFNQSxDQUFDLElBQUksQ0FBTCxJQUFVQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUMsQ0FBQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUF0RDtBQUFnRUosTUFBQUEsQ0FBQztBQUFqRTs7QUFFQSxRQUFHQSxDQUFDLElBQUksQ0FBTCxJQUFVQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUNGLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBbEQsRUFBNEQ7QUFDeERILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsSUFBNUI7QUFDSDs7QUFDRE4sSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBL0JvQixDQWlDcEI7O0FBQ0FFLElBQUFBLENBQUM7O0FBQ0QsV0FBTUEsQ0FBQyxJQUFJLENBQUwsSUFBVUMsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CLENBQTlCLElBQW1DLENBQUNGLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBdEQ7QUFBZ0VKLE1BQUFBLENBQUM7QUFBakU7O0FBRUEsUUFBR0EsQ0FBQyxJQUFJLENBQUwsSUFBVUMsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CLENBQTlCLElBQW1DRixLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLFFBQWxELEVBQTREO0FBQ3hESCxNQUFBQSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLElBQTVCO0FBQ0g7O0FBQ0ROLElBQUFBLENBQUMsR0FBR0YsQ0FBSjtBQUNILEdBNUNLLENBOENOOztBQTlDTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o6n5Yi26buR5qOL6L2m55qE57uE5Lu2XHJcbiAqL1xyXG5cclxuIGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IHJlcXVpcmUoXCJCbGFja1BpZWNlXCIpLFxyXG5cclxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKFgsIFkpIHtcclxuICAgICAgICB2YXIgeCA9IFg7XHJcbiAgICAgICAgdmFyIHkgPSBZO1xyXG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubm9kZS5ncmlkcztcclxuICAgXHJcbiAgICAgIFxyXG4gICAgICAgIC8vIOWQkeS4i1xyXG4gICAgICAgIHgrKztcclxuICAgICAgICB3aGlsZSh4IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSkgeCsrO1xyXG5cclxuICAgICAgICBpZih4IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmIGdyaWRzW3hdW3ldLmhhc1BpZWNlKSB7XHJcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLnBpZWNlLmRpc2FibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB4ID0gWDtcclxuXHJcbiAgICAgICAgLy8g5ZCR5LiKXHJcbiAgICAgICAgeC0tO1xyXG4gICAgICAgIHdoaWxlKHggPj0gMCAmJiBncmlkc1t4XVt5XS5mbGFnICE9IDAgJiYgIWdyaWRzW3hdW3ldLmhhc1BpZWNlKSB4LS07XHJcblxyXG4gICAgICAgIGlmKHggPj0gMCAmJiBncmlkc1t4XVt5XS5mbGFnICE9IDAgJiYgZ3JpZHNbeF1beV0uaGFzUGllY2UpIHtcclxuICAgICAgICAgICAgZ3JpZHNbeF1beV0ucGllY2UuZGlzYWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHggPSBYO1xyXG5cclxuICAgICAgICAvLyDlkJHlt6ZcclxuICAgICAgICB5LS07XHJcbiAgICAgICAgd2hpbGUoeSA+PSAwICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpIHktLTtcclxuXHJcbiAgICAgICAgaWYoeSA+PSAwICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiBncmlkc1t4XVt5XS5oYXNQaWVjZSkge1xyXG4gICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgeSA9IFk7XHJcblxyXG4gICAgICAgIC8vIOWQkeWPs1xyXG4gICAgICAgIHkrKztcclxuICAgICAgICB3aGlsZSh5IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSkgeSsrO1xyXG5cclxuICAgICAgICBpZih5IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmIGdyaWRzW3hdW3ldLmhhc1BpZWNlKSB7XHJcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLnBpZWNlLmRpc2FibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB5ID0gWTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=