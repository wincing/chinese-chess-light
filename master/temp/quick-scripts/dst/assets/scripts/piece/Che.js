
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/Che.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67cfcg2fc9O9obTYzjFST4w', 'Che');
// scripts/piece/Che.js

"use strict";

/**
 * 控制棋子车的组件
 */
cc.Class({
  "extends": require("Piece"),
  setflag: function setflag(status, X, Y) {
    var x = X;
    var y = Y;
    var grids = this.node.grids; // 自身格子

    grids[X][Y].nums += status; // 向下

    do {
      x++;
      if (x > 9 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);

    x = X; // 向上

    do {
      x--;
      if (x < 0 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);

    x = X; // 向左

    do {
      y--;
      if (y < 0 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);

    y = Y; // 向右

    do {
      y++;
      if (y > 9 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXENoZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwicmVxdWlyZSIsInNldGZsYWciLCJzdGF0dXMiLCJYIiwiWSIsIngiLCJ5IiwiZ3JpZHMiLCJub2RlIiwibnVtcyIsImZsYWciLCJoYXNQaWVjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0MsT0FBTyxDQUFDLE9BQUQsQ0FEWDtBQUdMQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUM1QixRQUFJQyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QixDQUg0QixDQUs1Qjs7QUFDQUEsSUFBQUEsS0FBSyxDQUFDSixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxJQUFaLElBQW9CUCxNQUFwQixDQU40QixDQVE1Qjs7QUFDQSxPQUFHO0FBQ0NHLE1BQUFBLENBQUM7QUFDRCxVQUFHQSxDQUFDLEdBQUcsQ0FBSixJQUFTRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLElBQVosSUFBb0IsQ0FBaEMsRUFBbUM7QUFDbkNILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQlAsTUFBcEI7QUFFSCxLQUxELFFBS1MsQ0FBQ0ssS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxRQUx0Qjs7QUFNQU4sSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBZjRCLENBaUI1Qjs7QUFDQSxPQUFHO0FBQ0NFLE1BQUFBLENBQUM7QUFDRCxVQUFHQSxDQUFDLEdBQUcsQ0FBSixJQUFTRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLElBQVosSUFBb0IsQ0FBaEMsRUFBbUM7QUFDbkNILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQlAsTUFBcEI7QUFFSCxLQUxELFFBS1MsQ0FBQ0ssS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxRQUx0Qjs7QUFNQU4sSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBeEI0QixDQTBCNUI7O0FBQ0EsT0FBRztBQUNDRyxNQUFBQSxDQUFDO0FBQ0QsVUFBR0EsQ0FBQyxHQUFHLENBQUosSUFBU0MsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxJQUFaLElBQW9CLENBQWhDLEVBQW1DO0FBQ25DSCxNQUFBQSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0JQLE1BQXBCO0FBRUgsS0FMRCxRQUtTLENBQUNLLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssUUFMdEI7O0FBTUFMLElBQUFBLENBQUMsR0FBR0YsQ0FBSixDQWpDNEIsQ0FtQzVCOztBQUNBLE9BQUc7QUFDQ0UsTUFBQUEsQ0FBQztBQUNELFVBQUdBLENBQUMsR0FBRyxDQUFKLElBQVNDLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksSUFBWixJQUFvQixDQUFoQyxFQUFtQztBQUNuQ0gsTUFBQUEsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CUCxNQUFwQjtBQUVILEtBTEQsUUFLUyxDQUFDSyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLFFBTHRCO0FBTUgsR0E3Q0ksQ0ErQ0w7O0FBL0NLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmjqfliLbmo4vlrZDovabnmoTnu4Tku7ZcclxuICovXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiUGllY2VcIiksXHJcblxyXG4gICAgc2V0ZmxhZzogZnVuY3Rpb24oc3RhdHVzLCBYLCBZKSB7XHJcbiAgICAgICAgdmFyIHggPSBYO1xyXG4gICAgICAgIHZhciB5ID0gWTtcclxuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm5vZGUuZ3JpZHM7XHJcbiAgIFxyXG4gICAgICAgIC8vIOiHqui6q+agvOWtkFxyXG4gICAgICAgIGdyaWRzW1hdW1ldLm51bXMgKz0gc3RhdHVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOWQkeS4i1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeCsrO1xyXG4gICAgICAgICAgICBpZih4ID4gOSB8fCBncmlkc1t4XVt5XS5mbGFnID09IDApIGJyZWFrO1xyXG4gICAgICAgICAgICBncmlkc1t4XVt5XS5udW1zICs9IHN0YXR1cztcclxuXHJcbiAgICAgICAgfSB3aGlsZSAoIWdyaWRzW3hdW3ldLmhhc1BpZWNlKTtcclxuICAgICAgICB4ID0gWDtcclxuXHJcbiAgICAgICAgLy8g5ZCR5LiKXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB4LS07XHJcbiAgICAgICAgICAgIGlmKHggPCAwIHx8IGdyaWRzW3hdW3ldLmZsYWcgPT0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xyXG5cclxuICAgICAgICB9IHdoaWxlICghZ3JpZHNbeF1beV0uaGFzUGllY2UpO1xyXG4gICAgICAgIHggPSBYO1xyXG5cclxuICAgICAgICAvLyDlkJHlt6ZcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHktLTtcclxuICAgICAgICAgICAgaWYoeSA8IDAgfHwgZ3JpZHNbeF1beV0uZmxhZyA9PSAwKSBicmVhaztcclxuICAgICAgICAgICAgZ3JpZHNbeF1beV0ubnVtcyArPSBzdGF0dXM7XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKCFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XHJcbiAgICAgICAgeSA9IFk7XHJcblxyXG4gICAgICAgIC8vIOWQkeWPs1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeSsrO1xyXG4gICAgICAgICAgICBpZih5ID4gOSB8fCBncmlkc1t4XVt5XS5mbGFnID09IDApIGJyZWFrO1xyXG4gICAgICAgICAgICBncmlkc1t4XVt5XS5udW1zICs9IHN0YXR1cztcclxuXHJcbiAgICAgICAgfSB3aGlsZSAoIWdyaWRzW3hdW3ldLmhhc1BpZWNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=