
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/BlackMa.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32100opUblCFY2lX4TyLism', 'BlackMa');
// scripts/piece/BlackMa.js

"use strict";

/**
 * 控制黑棋马的组件
 * 
 */
cc.Class({
  "extends": require("BlackPiece"),
  setflag: function setflag(X, Y) {
    var grids = this.node.grids;
    var dirx = Array(-2, -1, 1, 2, 2, 1, -1, -2);
    var diry = Array(1, 2, 2, 1, -1, -2, -2, -1); // 马脚

    var hinderx = Array(-1, 0, 0, 1, 1, 0, 0, -1);
    var hindery = Array(0, 1, 1, 0, 0, -1, -1, 0); // 周围格子

    for (var i = 0; i < 8; i++) {
      var x = X + dirx[i];
      var y = Y + diry[i];
      var hx = X + hinderx[i];
      var hy = Y + hindery[i];
      if (x < 0 || x > 9 || y < 0 || y > 9) continue;
      if (grids[x][y].flag == 0) continue; // 检查是否绊马脚

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrTWEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzZXRmbGFnIiwiWCIsIlkiLCJncmlkcyIsIm5vZGUiLCJkaXJ4IiwiQXJyYXkiLCJkaXJ5IiwiaGluZGVyeCIsImhpbmRlcnkiLCJpIiwieCIsInkiLCJoeCIsImh5IiwiZmxhZyIsImhhc1BpZWNlIiwicGllY2UiLCJ0eXBlIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUtDQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNOLGFBQVNDLE9BQU8sQ0FBQyxZQUFELENBRFY7QUFHTkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNwQixRQUFJQyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QjtBQUNBLFFBQUlFLElBQUksR0FBR0MsS0FBSyxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUMsQ0FBTixFQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFDLENBQXRCLEVBQXlCLENBQUMsQ0FBMUIsQ0FBaEI7QUFDQSxRQUFJQyxJQUFJLEdBQUdELEtBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFkLEVBQWlCLENBQUMsQ0FBbEIsRUFBcUIsQ0FBQyxDQUF0QixFQUF5QixDQUFDLENBQTFCLENBQWhCLENBSG9CLENBS3BCOztBQUNBLFFBQUlFLE9BQU8sR0FBR0YsS0FBSyxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBQyxDQUF4QixDQUFuQjtBQUNBLFFBQUlHLE9BQU8sR0FBR0gsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQUMsQ0FBakIsRUFBb0IsQ0FBQyxDQUFyQixFQUF3QixDQUF4QixDQUFuQixDQVBvQixDQVVwQjs7QUFDQSxTQUFJLElBQUlJLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxDQUFuQixFQUFzQkEsQ0FBQyxFQUF2QixFQUEyQjtBQUN2QixVQUFJQyxDQUFDLEdBQUdWLENBQUMsR0FBR0ksSUFBSSxDQUFDSyxDQUFELENBQWhCO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHVixDQUFDLEdBQUdLLElBQUksQ0FBQ0csQ0FBRCxDQUFoQjtBQUNBLFVBQUlHLEVBQUUsR0FBR1osQ0FBQyxHQUFHTyxPQUFPLENBQUNFLENBQUQsQ0FBcEI7QUFDQSxVQUFJSSxFQUFFLEdBQUdaLENBQUMsR0FBR08sT0FBTyxDQUFDQyxDQUFELENBQXBCO0FBRUEsVUFBR0MsQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxHQUFHLENBQWIsSUFBa0JDLENBQUMsR0FBRyxDQUF0QixJQUEyQkEsQ0FBQyxHQUFHLENBQWxDLEVBQXFDO0FBQ3JDLFVBQUdULEtBQUssQ0FBQ1EsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQixDQUF2QixFQUEwQixTQVBILENBU3ZCOztBQUNBLFVBQUdGLEVBQUUsSUFBSSxDQUFOLElBQVdBLEVBQUUsSUFBSSxDQUFqQixJQUFzQkMsRUFBRSxJQUFJLENBQTVCLElBQWlDQSxFQUFFLElBQUksQ0FBdkMsS0FDRVgsS0FBSyxDQUFDVSxFQUFELENBQUwsQ0FBVUMsRUFBVixFQUFjQyxJQUFkLElBQXNCLENBQXRCLElBQTJCWixLQUFLLENBQUNVLEVBQUQsQ0FBTCxDQUFVQyxFQUFWLEVBQWNFLFFBRDNDLENBQUgsRUFDeUQ7O0FBRXpELFVBQUdiLEtBQUssQ0FBQ1EsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBWixJQUF3QmIsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxLQUFaLENBQWtCQyxJQUFsQixJQUEwQixDQUFyRCxFQUF3RDtBQUNwRGYsUUFBQUEsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxLQUFaLENBQWtCRSxPQUFsQixHQUE0QixJQUE1QjtBQUNIO0FBQ0o7QUFDSjtBQS9CSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o6n5Yi26buR5qOL6ams55qE57uE5Lu2XHJcbiAqIFxyXG4gKi9cclxuXHJcbiBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiQmxhY2tQaWVjZVwiKSxcclxuXHJcbiAgICBzZXRmbGFnOiBmdW5jdGlvbihYLCBZKSB7XHJcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5ub2RlLmdyaWRzO1xyXG4gICAgICAgIHZhciBkaXJ4ID0gQXJyYXkoLTIsIC0xLCAxLCAyLCAyLCAxLCAtMSwgLTIpO1xyXG4gICAgICAgIHZhciBkaXJ5ID0gQXJyYXkoMSwgMiwgMiwgMSwgLTEsIC0yLCAtMiwgLTEpO1xyXG5cclxuICAgICAgICAvLyDpqazohJpcclxuICAgICAgICB2YXIgaGluZGVyeCA9IEFycmF5KC0xLCAwLCAwLCAxLCAxLCAwLCAwLCAtMSk7XHJcbiAgICAgICAgdmFyIGhpbmRlcnkgPSBBcnJheSgwLCAxLCAxLCAwLCAwLCAtMSwgLTEsIDApO1xyXG5cclxuIFxyXG4gICAgICAgIC8vIOWRqOWbtOagvOWtkFxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHggPSBYICsgZGlyeFtpXTtcclxuICAgICAgICAgICAgdmFyIHkgPSBZICsgZGlyeVtpXTtcclxuICAgICAgICAgICAgdmFyIGh4ID0gWCArIGhpbmRlcnhbaV07XHJcbiAgICAgICAgICAgIHZhciBoeSA9IFkgKyBoaW5kZXJ5W2ldO1xyXG5cclxuICAgICAgICAgICAgaWYoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm57uK6ams6ISaXHJcbiAgICAgICAgICAgIGlmKGh4ID49IDAgJiYgaHggPD0gOSAmJiBoeSA+PSAwICYmIGh5IDw9IDkgJiYgXHJcbiAgICAgICAgICAgICAgICAoZ3JpZHNbaHhdW2h5XS5mbGFnID09IDAgfHwgZ3JpZHNbaHhdW2h5XS5oYXNQaWVjZSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgaWYoZ3JpZHNbeF1beV0uaGFzUGllY2UgJiYgZ3JpZHNbeF1beV0ucGllY2UudHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=