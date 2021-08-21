
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/BlackXiang.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '337cf02nLhPhqbb8D3E7Oro', 'BlackXiang');
// scripts/piece/BlackXiang.js

"use strict";

/**
 * 控制黑棋象的组件
 */
cc.Class({
  "extends": require("BlackPiece"),
  setflag: function setflag(X, Y) {
    var grids = this.node.grids;
    var dirx = Array(-2, 2, 2, -2);
    var diry = Array(2, 2, -2, -2); // 象眼

    var hinderx = Array(-1, 1, 1, -1);
    var hindery = Array(1, 1, -1, -1); // 周围格子

    for (var i = 0; i < 4; i++) {
      var x = X + dirx[i];
      var y = Y + diry[i];
      var hx = X + hinderx[i];
      var hy = Y + hindery[i];
      if (x < 0 || x > 9 || y < 0 || y > 9) continue;
      if (grids[x][y].flag == 0) continue; // 检查是否绊象眼

      if (hx >= 0 && hx <= 9 && hy >= 0 && hy <= 9 && (grids[hx][hy].flag == 0 || grids[hx][hy].hasPiece)) continue;

      if (grids[x][y].hasPiece && grids[x][y].piece.type == 0) {
        grids[x][y].piece.disable = true;
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrWGlhbmcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzZXRmbGFnIiwiWCIsIlkiLCJncmlkcyIsIm5vZGUiLCJkaXJ4IiwiQXJyYXkiLCJkaXJ5IiwiaGluZGVyeCIsImhpbmRlcnkiLCJpIiwieCIsInkiLCJoeCIsImh5IiwiZmxhZyIsImhhc1BpZWNlIiwicGllY2UiLCJ0eXBlIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUNBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ04sYUFBU0MsT0FBTyxDQUFDLFlBQUQsQ0FEVjtBQUdOQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ3BCLFFBQUlDLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVELEtBQXRCO0FBQ0EsUUFBSUUsSUFBSSxHQUFHQyxLQUFLLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFDLENBQVosQ0FBaEI7QUFDQSxRQUFJQyxJQUFJLEdBQUdELEtBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQUMsQ0FBUixFQUFXLENBQUMsQ0FBWixDQUFoQixDQUhvQixDQUtwQjs7QUFDQSxRQUFJRSxPQUFPLEdBQUdGLEtBQUssQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQUMsQ0FBWixDQUFuQjtBQUNBLFFBQUlHLE9BQU8sR0FBR0gsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBQyxDQUFaLENBQW5CLENBUG9CLENBU3BCOztBQUNBLFNBQUksSUFBSUksQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO0FBQ3ZCLFVBQUlDLENBQUMsR0FBR1YsQ0FBQyxHQUFHSSxJQUFJLENBQUNLLENBQUQsQ0FBaEI7QUFDQSxVQUFJRSxDQUFDLEdBQUdWLENBQUMsR0FBR0ssSUFBSSxDQUFDRyxDQUFELENBQWhCO0FBQ0EsVUFBSUcsRUFBRSxHQUFHWixDQUFDLEdBQUdPLE9BQU8sQ0FBQ0UsQ0FBRCxDQUFwQjtBQUNBLFVBQUlJLEVBQUUsR0FBR1osQ0FBQyxHQUFHTyxPQUFPLENBQUNDLENBQUQsQ0FBcEI7QUFFQSxVQUFHQyxDQUFDLEdBQUcsQ0FBSixJQUFTQSxDQUFDLEdBQUcsQ0FBYixJQUFrQkMsQ0FBQyxHQUFHLENBQXRCLElBQTJCQSxDQUFDLEdBQUcsQ0FBbEMsRUFBcUM7QUFDckMsVUFBR1QsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CLENBQXZCLEVBQTBCLFNBUEgsQ0FTdkI7O0FBQ0EsVUFBR0YsRUFBRSxJQUFJLENBQU4sSUFBV0EsRUFBRSxJQUFJLENBQWpCLElBQXNCQyxFQUFFLElBQUksQ0FBNUIsSUFBaUNBLEVBQUUsSUFBSSxDQUF2QyxLQUNFWCxLQUFLLENBQUNVLEVBQUQsQ0FBTCxDQUFVQyxFQUFWLEVBQWNDLElBQWQsSUFBc0IsQ0FBdEIsSUFBMkJaLEtBQUssQ0FBQ1UsRUFBRCxDQUFMLENBQVVDLEVBQVYsRUFBY0UsUUFEM0MsQ0FBSCxFQUN5RDs7QUFFekQsVUFBR2IsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUFaLElBQXdCYixLQUFLLENBQUNRLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLEtBQVosQ0FBa0JDLElBQWxCLElBQTBCLENBQXJELEVBQXdEO0FBQ3BEZixRQUFBQSxLQUFLLENBQUNRLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLEtBQVosQ0FBa0JFLE9BQWxCLEdBQTRCLElBQTVCO0FBQ0g7QUFFSjtBQUNKO0FBL0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmjqfliLbpu5Hmo4vosaHnmoTnu4Tku7ZcclxuICovXHJcblxyXG4gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogcmVxdWlyZShcIkJsYWNrUGllY2VcIiksXHJcblxyXG4gICAgc2V0ZmxhZzogZnVuY3Rpb24oWCwgWSkge1xyXG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubm9kZS5ncmlkcztcclxuICAgICAgICB2YXIgZGlyeCA9IEFycmF5KC0yLCAyLCAyLCAtMik7XHJcbiAgICAgICAgdmFyIGRpcnkgPSBBcnJheSgyLCAyLCAtMiwgLTIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOixoeecvFxyXG4gICAgICAgIHZhciBoaW5kZXJ4ID0gQXJyYXkoLTEsIDEsIDEsIC0xKTtcclxuICAgICAgICB2YXIgaGluZGVyeSA9IEFycmF5KDEsIDEsIC0xLCAtMSk7XHJcblxyXG4gICAgICAgIC8vIOWRqOWbtOagvOWtkFxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHggPSBYICsgZGlyeFtpXTtcclxuICAgICAgICAgICAgdmFyIHkgPSBZICsgZGlyeVtpXTtcclxuICAgICAgICAgICAgdmFyIGh4ID0gWCArIGhpbmRlcnhbaV07XHJcbiAgICAgICAgICAgIHZhciBoeSA9IFkgKyBoaW5kZXJ5W2ldO1xyXG5cclxuICAgICAgICAgICAgaWYoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm57uK6LGh55y8XHJcbiAgICAgICAgICAgIGlmKGh4ID49IDAgJiYgaHggPD0gOSAmJiBoeSA+PSAwICYmIGh5IDw9IDkgJiYgXHJcbiAgICAgICAgICAgICAgICAoZ3JpZHNbaHhdW2h5XS5mbGFnID09IDAgfHwgZ3JpZHNbaHhdW2h5XS5oYXNQaWVjZSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZ3JpZHNbeF1beV0uaGFzUGllY2UgJiYgZ3JpZHNbeF1beV0ucGllY2UudHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19