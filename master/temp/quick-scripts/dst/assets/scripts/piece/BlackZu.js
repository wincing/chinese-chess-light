
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/BlackZu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '316aebOFeBEbaSQVzVlveLA', 'BlackZu');
// scripts/piece/BlackZu.js

"use strict";

/**
 * 控制黑棋卒的组件
 */
cc.Class({
  "extends": require("BlackPiece"),
  setflag: function setflag(X, Y) {
    var grids = this.node.grids;
    var dirx = Array(0, 0, 0, 1);
    var diry = Array(1, 0, -1, 0);

    for (var i = 0; i < 4; i++) {
      var x = X + dirx[i];
      var y = Y + diry[i];
      if (x < 0 || x > 9 || y < 0 || y > 9) continue;
      if (grids[x][y].flag == 0) continue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrWnUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzZXRmbGFnIiwiWCIsIlkiLCJncmlkcyIsIm5vZGUiLCJkaXJ4IiwiQXJyYXkiLCJkaXJ5IiwiaSIsIngiLCJ5IiwiZmxhZyIsImhhc1BpZWNlIiwicGllY2UiLCJ0eXBlIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUNBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ04sYUFBU0MsT0FBTyxDQUFDLFlBQUQsQ0FEVjtBQUdOQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ3BCLFFBQUlDLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVELEtBQXRCO0FBQ0EsUUFBSUUsSUFBSSxHQUFHQyxLQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBWCxDQUFoQjs7QUFFQSxTQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxDQUFuQixFQUFzQkEsQ0FBQyxFQUF2QixFQUEyQjtBQUN2QixVQUFJQyxDQUFDLEdBQUdSLENBQUMsR0FBR0ksSUFBSSxDQUFDRyxDQUFELENBQWhCO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHUixDQUFDLEdBQUdLLElBQUksQ0FBQ0MsQ0FBRCxDQUFoQjtBQUVBLFVBQUdDLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBRyxDQUFiLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEIsSUFBMkJBLENBQUMsR0FBRyxDQUFsQyxFQUFxQztBQUNyQyxVQUFHUCxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlDLElBQVosSUFBb0IsQ0FBdkIsRUFBMEI7O0FBRTFCLFVBQUdSLEtBQUssQ0FBQ00sQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUUsUUFBWixJQUF3QlQsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxLQUFaLENBQWtCQyxJQUFsQixJQUEwQixDQUFyRCxFQUF3RDtBQUNwRFgsUUFBQUEsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxLQUFaLENBQWtCRSxPQUFsQixHQUE0QixJQUE1QjtBQUNIO0FBQ0o7QUFDSjtBQW5CSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o6n5Yi26buR5qOL5Y2S55qE57uE5Lu2XHJcbiAqL1xyXG5cclxuIGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IHJlcXVpcmUoXCJCbGFja1BpZWNlXCIpLFxyXG5cclxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKFgsIFkpIHtcclxuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm5vZGUuZ3JpZHM7XHJcbiAgICAgICAgdmFyIGRpcnggPSBBcnJheSgwLCAwLCAwLCAxKTtcclxuICAgICAgICB2YXIgZGlyeSA9IEFycmF5KDEsIDAsIC0xLCAwKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgeCA9IFggKyBkaXJ4W2ldO1xyXG4gICAgICAgICAgICB2YXIgeSA9IFkgKyBkaXJ5W2ldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgaWYoZ3JpZHNbeF1beV0uaGFzUGllY2UgJiYgZ3JpZHNbeF1beV0ucGllY2UudHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=