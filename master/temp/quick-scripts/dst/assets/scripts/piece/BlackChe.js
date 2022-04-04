
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrQ2hlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsIlgiLCJZIiwieCIsInkiLCJncmlkcyIsIm5vZGUiLCJmbGFnIiwiaGFzUGllY2UiLCJwaWVjZSIsImRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUlDQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNOLGFBQVNDLE9BQU8sQ0FBQyxZQUFELENBRFY7QUFHTkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNwQixRQUFJQyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QixDQUhvQixDQU1wQjs7QUFDQUYsSUFBQUEsQ0FBQzs7QUFDRCxXQUFNQSxDQUFDLElBQUksQ0FBTCxJQUFVRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUMsQ0FBQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUF0RDtBQUFnRUwsTUFBQUEsQ0FBQztBQUFqRTs7QUFFQSxRQUFHQSxDQUFDLElBQUksQ0FBTCxJQUFVRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUNGLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBbEQsRUFBNEQ7QUFDeERILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsSUFBNUI7QUFDSDs7QUFDRFAsSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBYm9CLENBZXBCOztBQUNBRSxJQUFBQSxDQUFDOztBQUNELFdBQU1BLENBQUMsSUFBSSxDQUFMLElBQVVFLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQixDQUE5QixJQUFtQyxDQUFDRixLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLFFBQXREO0FBQWdFTCxNQUFBQSxDQUFDO0FBQWpFOztBQUVBLFFBQUdBLENBQUMsSUFBSSxDQUFMLElBQVVFLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQixDQUE5QixJQUFtQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUFsRCxFQUE0RDtBQUN4REgsTUFBQUEsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxLQUFaLENBQWtCQyxPQUFsQixHQUE0QixJQUE1QjtBQUNIOztBQUNEUCxJQUFBQSxDQUFDLEdBQUdGLENBQUosQ0F0Qm9CLENBd0JwQjs7QUFDQUcsSUFBQUEsQ0FBQzs7QUFDRCxXQUFNQSxDQUFDLElBQUksQ0FBTCxJQUFVQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUMsQ0FBQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUF0RDtBQUFnRUosTUFBQUEsQ0FBQztBQUFqRTs7QUFFQSxRQUFHQSxDQUFDLElBQUksQ0FBTCxJQUFVQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUNGLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBbEQsRUFBNEQ7QUFDeERILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsSUFBNUI7QUFDSDs7QUFDRE4sSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBL0JvQixDQWlDcEI7O0FBQ0FFLElBQUFBLENBQUM7O0FBQ0QsV0FBTUEsQ0FBQyxJQUFJLENBQUwsSUFBVUMsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CLENBQTlCLElBQW1DLENBQUNGLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBdEQ7QUFBZ0VKLE1BQUFBLENBQUM7QUFBakU7O0FBRUEsUUFBR0EsQ0FBQyxJQUFJLENBQUwsSUFBVUMsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CLENBQTlCLElBQW1DRixLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLFFBQWxELEVBQTREO0FBQ3hESCxNQUFBQSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLElBQTVCO0FBQ0g7O0FBQ0ROLElBQUFBLENBQUMsR0FBR0YsQ0FBSjtBQUNILEdBNUNLLENBOENOOztBQTlDTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaOp+WItum7keaji+i9pueahOe7hOS7tlxuICovXG5cbiBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogcmVxdWlyZShcIkJsYWNrUGllY2VcIiksXG5cbiAgICBzZXRmbGFnOiBmdW5jdGlvbihYLCBZKSB7XG4gICAgICAgIHZhciB4ID0gWDtcbiAgICAgICAgdmFyIHkgPSBZO1xuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm5vZGUuZ3JpZHM7XG4gICBcbiAgICAgIFxuICAgICAgICAvLyDlkJHkuItcbiAgICAgICAgeCsrO1xuICAgICAgICB3aGlsZSh4IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSkgeCsrO1xuXG4gICAgICAgIGlmKHggPD0gOSAmJiBncmlkc1t4XVt5XS5mbGFnICE9IDAgJiYgZ3JpZHNbeF1beV0uaGFzUGllY2UpIHtcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLnBpZWNlLmRpc2FibGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHggPSBYO1xuXG4gICAgICAgIC8vIOWQkeS4ilxuICAgICAgICB4LS07XG4gICAgICAgIHdoaWxlKHggPj0gMCAmJiBncmlkc1t4XVt5XS5mbGFnICE9IDAgJiYgIWdyaWRzW3hdW3ldLmhhc1BpZWNlKSB4LS07XG5cbiAgICAgICAgaWYoeCA+PSAwICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiBncmlkc1t4XVt5XS5oYXNQaWVjZSkge1xuICAgICAgICAgICAgZ3JpZHNbeF1beV0ucGllY2UuZGlzYWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgeCA9IFg7XG5cbiAgICAgICAgLy8g5ZCR5bemXG4gICAgICAgIHktLTtcbiAgICAgICAgd2hpbGUoeSA+PSAwICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpIHktLTtcblxuICAgICAgICBpZih5ID49IDAgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmIGdyaWRzW3hdW3ldLmhhc1BpZWNlKSB7XG4gICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB5ID0gWTtcblxuICAgICAgICAvLyDlkJHlj7NcbiAgICAgICAgeSsrO1xuICAgICAgICB3aGlsZSh5IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSkgeSsrO1xuXG4gICAgICAgIGlmKHkgPD0gOSAmJiBncmlkc1t4XVt5XS5mbGFnICE9IDAgJiYgZ3JpZHNbeF1beV0uaGFzUGllY2UpIHtcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLnBpZWNlLmRpc2FibGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHkgPSBZO1xuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19