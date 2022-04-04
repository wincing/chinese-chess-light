
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrTWEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzZXRmbGFnIiwiWCIsIlkiLCJncmlkcyIsIm5vZGUiLCJkaXJ4IiwiQXJyYXkiLCJkaXJ5IiwiaGluZGVyeCIsImhpbmRlcnkiLCJpIiwieCIsInkiLCJoeCIsImh5IiwiZmxhZyIsImhhc1BpZWNlIiwicGllY2UiLCJ0eXBlIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUtDQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNOLGFBQVNDLE9BQU8sQ0FBQyxZQUFELENBRFY7QUFHTkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNwQixRQUFJQyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QjtBQUNBLFFBQUlFLElBQUksR0FBR0MsS0FBSyxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUMsQ0FBTixFQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFDLENBQXRCLEVBQXlCLENBQUMsQ0FBMUIsQ0FBaEI7QUFDQSxRQUFJQyxJQUFJLEdBQUdELEtBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFkLEVBQWlCLENBQUMsQ0FBbEIsRUFBcUIsQ0FBQyxDQUF0QixFQUF5QixDQUFDLENBQTFCLENBQWhCLENBSG9CLENBS3BCOztBQUNBLFFBQUlFLE9BQU8sR0FBR0YsS0FBSyxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBQyxDQUF4QixDQUFuQjtBQUNBLFFBQUlHLE9BQU8sR0FBR0gsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQUMsQ0FBakIsRUFBb0IsQ0FBQyxDQUFyQixFQUF3QixDQUF4QixDQUFuQixDQVBvQixDQVVwQjs7QUFDQSxTQUFJLElBQUlJLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxDQUFuQixFQUFzQkEsQ0FBQyxFQUF2QixFQUEyQjtBQUN2QixVQUFJQyxDQUFDLEdBQUdWLENBQUMsR0FBR0ksSUFBSSxDQUFDSyxDQUFELENBQWhCO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHVixDQUFDLEdBQUdLLElBQUksQ0FBQ0csQ0FBRCxDQUFoQjtBQUNBLFVBQUlHLEVBQUUsR0FBR1osQ0FBQyxHQUFHTyxPQUFPLENBQUNFLENBQUQsQ0FBcEI7QUFDQSxVQUFJSSxFQUFFLEdBQUdaLENBQUMsR0FBR08sT0FBTyxDQUFDQyxDQUFELENBQXBCO0FBRUEsVUFBR0MsQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxHQUFHLENBQWIsSUFBa0JDLENBQUMsR0FBRyxDQUF0QixJQUEyQkEsQ0FBQyxHQUFHLENBQWxDLEVBQXFDO0FBQ3JDLFVBQUdULEtBQUssQ0FBQ1EsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQixDQUF2QixFQUEwQixTQVBILENBU3ZCOztBQUNBLFVBQUdGLEVBQUUsSUFBSSxDQUFOLElBQVdBLEVBQUUsSUFBSSxDQUFqQixJQUFzQkMsRUFBRSxJQUFJLENBQTVCLElBQWlDQSxFQUFFLElBQUksQ0FBdkMsS0FDRVgsS0FBSyxDQUFDVSxFQUFELENBQUwsQ0FBVUMsRUFBVixFQUFjQyxJQUFkLElBQXNCLENBQXRCLElBQTJCWixLQUFLLENBQUNVLEVBQUQsQ0FBTCxDQUFVQyxFQUFWLEVBQWNFLFFBRDNDLENBQUgsRUFDeUQ7O0FBRXpELFVBQUdiLEtBQUssQ0FBQ1EsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBWixJQUF3QmIsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxLQUFaLENBQWtCQyxJQUFsQixJQUEwQixDQUFyRCxFQUF3RDtBQUNwRGYsUUFBQUEsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxLQUFaLENBQWtCRSxPQUFsQixHQUE0QixJQUE1QjtBQUNIO0FBQ0o7QUFDSjtBQS9CSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaOp+WItum7keaji+mprOeahOe7hOS7tlxuICogXG4gKi9cblxuIGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiQmxhY2tQaWVjZVwiKSxcblxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKFgsIFkpIHtcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5ub2RlLmdyaWRzO1xuICAgICAgICB2YXIgZGlyeCA9IEFycmF5KC0yLCAtMSwgMSwgMiwgMiwgMSwgLTEsIC0yKTtcbiAgICAgICAgdmFyIGRpcnkgPSBBcnJheSgxLCAyLCAyLCAxLCAtMSwgLTIsIC0yLCAtMSk7XG5cbiAgICAgICAgLy8g6ams6ISaXG4gICAgICAgIHZhciBoaW5kZXJ4ID0gQXJyYXkoLTEsIDAsIDAsIDEsIDEsIDAsIDAsIC0xKTtcbiAgICAgICAgdmFyIGhpbmRlcnkgPSBBcnJheSgwLCAxLCAxLCAwLCAwLCAtMSwgLTEsIDApO1xuXG4gXG4gICAgICAgIC8vIOWRqOWbtOagvOWtkFxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgeCA9IFggKyBkaXJ4W2ldO1xuICAgICAgICAgICAgdmFyIHkgPSBZICsgZGlyeVtpXTtcbiAgICAgICAgICAgIHZhciBoeCA9IFggKyBoaW5kZXJ4W2ldO1xuICAgICAgICAgICAgdmFyIGh5ID0gWSArIGhpbmRlcnlbaV07XG5cbiAgICAgICAgICAgIGlmKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmKGdyaWRzW3hdW3ldLmZsYWcgPT0gMCkgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIOajgOafpeaYr+WQpue7iumprOiEmlxuICAgICAgICAgICAgaWYoaHggPj0gMCAmJiBoeCA8PSA5ICYmIGh5ID49IDAgJiYgaHkgPD0gOSAmJiBcbiAgICAgICAgICAgICAgICAoZ3JpZHNbaHhdW2h5XS5mbGFnID09IDAgfHwgZ3JpZHNbaHhdW2h5XS5oYXNQaWVjZSkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5oYXNQaWVjZSAmJiBncmlkc1t4XVt5XS5waWVjZS50eXBlID09IDApIHtcbiAgICAgICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==