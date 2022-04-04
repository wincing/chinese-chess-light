
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/Ma.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8592bIi14BHJI0WtsZ0JmJa', 'Ma');
// scripts/piece/Ma.js

"use strict";

/**
 * 控制棋子马的组件
 * 
 */
cc.Class({
  "extends": require("Piece"),
  setflag: function setflag(status, X, Y) {
    var grids = this.node.grids;
    var dirx = Array(-2, -1, 1, 2, 2, 1, -1, -2);
    var diry = Array(1, 2, 2, 1, -1, -2, -2, -1); // 马脚

    var hinderx = Array(-1, 0, 0, 1, 1, 0, 0, -1);
    var hindery = Array(0, 1, 1, 0, 0, -1, -1, 0); // 自身格子

    grids[X][Y].nums += status; // 周围格子

    for (var i = 0; i < 8; i++) {
      var x = X + dirx[i];
      var y = Y + diry[i];
      var hx = X + hinderx[i];
      var hy = Y + hindery[i];
      if (x < 0 || x > 9 || y < 0 || y > 9) continue;
      if (grids[x][y].flag == 0) continue; // 检查是否绊马脚

      if (hx >= 0 && hx <= 9 && hy >= 0 && hy <= 9 && (grids[hx][hy].flag == 0 || grids[hx][hy].hasPiece)) continue;
      grids[x][y].nums += status;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXE1hLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsInN0YXR1cyIsIlgiLCJZIiwiZ3JpZHMiLCJub2RlIiwiZGlyeCIsIkFycmF5IiwiZGlyeSIsImhpbmRlcngiLCJoaW5kZXJ5IiwibnVtcyIsImkiLCJ4IiwieSIsImh4IiwiaHkiLCJmbGFnIiwiaGFzUGllY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFLQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTQyxPQUFPLENBQUMsT0FBRCxDQURYO0FBR0xDLEVBQUFBLE9BQU8sRUFBRSxpQkFBU0MsTUFBVCxFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCO0FBQzVCLFFBQUlDLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVELEtBQXRCO0FBQ0EsUUFBSUUsSUFBSSxHQUFHQyxLQUFLLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBQyxDQUFOLEVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQUMsQ0FBdEIsRUFBeUIsQ0FBQyxDQUExQixDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQWQsRUFBaUIsQ0FBQyxDQUFsQixFQUFxQixDQUFDLENBQXRCLEVBQXlCLENBQUMsQ0FBMUIsQ0FBaEIsQ0FINEIsQ0FLNUI7O0FBQ0EsUUFBSUUsT0FBTyxHQUFHRixLQUFLLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUFDLENBQXhCLENBQW5CO0FBQ0EsUUFBSUcsT0FBTyxHQUFHSCxLQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBQyxDQUFqQixFQUFvQixDQUFDLENBQXJCLEVBQXdCLENBQXhCLENBQW5CLENBUDRCLENBUzVCOztBQUNBSCxJQUFBQSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlRLElBQVosSUFBb0JWLE1BQXBCLENBVjRCLENBWTVCOztBQUNBLFNBQUksSUFBSVcsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO0FBQ3ZCLFVBQUlDLENBQUMsR0FBR1gsQ0FBQyxHQUFHSSxJQUFJLENBQUNNLENBQUQsQ0FBaEI7QUFDQSxVQUFJRSxDQUFDLEdBQUdYLENBQUMsR0FBR0ssSUFBSSxDQUFDSSxDQUFELENBQWhCO0FBQ0EsVUFBSUcsRUFBRSxHQUFHYixDQUFDLEdBQUdPLE9BQU8sQ0FBQ0csQ0FBRCxDQUFwQjtBQUNBLFVBQUlJLEVBQUUsR0FBR2IsQ0FBQyxHQUFHTyxPQUFPLENBQUNFLENBQUQsQ0FBcEI7QUFFQSxVQUFHQyxDQUFDLEdBQUcsQ0FBSixJQUFTQSxDQUFDLEdBQUcsQ0FBYixJQUFrQkMsQ0FBQyxHQUFHLENBQXRCLElBQTJCQSxDQUFDLEdBQUcsQ0FBbEMsRUFBcUM7QUFDckMsVUFBR1YsS0FBSyxDQUFDUyxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CLENBQXZCLEVBQTBCLFNBUEgsQ0FTdkI7O0FBQ0EsVUFBR0YsRUFBRSxJQUFJLENBQU4sSUFBV0EsRUFBRSxJQUFJLENBQWpCLElBQXNCQyxFQUFFLElBQUksQ0FBNUIsSUFBaUNBLEVBQUUsSUFBSSxDQUF2QyxLQUNFWixLQUFLLENBQUNXLEVBQUQsQ0FBTCxDQUFVQyxFQUFWLEVBQWNDLElBQWQsSUFBc0IsQ0FBdEIsSUFBMkJiLEtBQUssQ0FBQ1csRUFBRCxDQUFMLENBQVVDLEVBQVYsRUFBY0UsUUFEM0MsQ0FBSCxFQUN5RDtBQUV6RGQsTUFBQUEsS0FBSyxDQUFDUyxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSCxJQUFaLElBQW9CVixNQUFwQjtBQUNIO0FBQ0o7QUEvQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmjqfliLbmo4vlrZDpqaznmoTnu4Tku7ZcbiAqIFxuICovXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiUGllY2VcIiksXG5cbiAgICBzZXRmbGFnOiBmdW5jdGlvbihzdGF0dXMsIFgsIFkpIHtcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5ub2RlLmdyaWRzO1xuICAgICAgICB2YXIgZGlyeCA9IEFycmF5KC0yLCAtMSwgMSwgMiwgMiwgMSwgLTEsIC0yKTtcbiAgICAgICAgdmFyIGRpcnkgPSBBcnJheSgxLCAyLCAyLCAxLCAtMSwgLTIsIC0yLCAtMSk7XG5cbiAgICAgICAgLy8g6ams6ISaXG4gICAgICAgIHZhciBoaW5kZXJ4ID0gQXJyYXkoLTEsIDAsIDAsIDEsIDEsIDAsIDAsIC0xKTtcbiAgICAgICAgdmFyIGhpbmRlcnkgPSBBcnJheSgwLCAxLCAxLCAwLCAwLCAtMSwgLTEsIDApO1xuXG4gICAgICAgIC8vIOiHqui6q+agvOWtkFxuICAgICAgICBncmlkc1tYXVtZXS5udW1zICs9IHN0YXR1cztcblxuICAgICAgICAvLyDlkajlm7TmoLzlrZBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBYICsgZGlyeFtpXTtcbiAgICAgICAgICAgIHZhciB5ID0gWSArIGRpcnlbaV07XG4gICAgICAgICAgICB2YXIgaHggPSBYICsgaGluZGVyeFtpXTtcbiAgICAgICAgICAgIHZhciBoeSA9IFkgKyBoaW5kZXJ5W2ldO1xuXG4gICAgICAgICAgICBpZih4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkgY29udGludWU7XG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKbnu4rpqazohJpcbiAgICAgICAgICAgIGlmKGh4ID49IDAgJiYgaHggPD0gOSAmJiBoeSA+PSAwICYmIGh5IDw9IDkgJiYgXG4gICAgICAgICAgICAgICAgKGdyaWRzW2h4XVtoeV0uZmxhZyA9PSAwIHx8IGdyaWRzW2h4XVtoeV0uaGFzUGllY2UpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19