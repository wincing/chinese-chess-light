
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/Shuai.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '63a30TpacxENphTQn5oR3DH', 'Shuai');
// scripts/piece/Shuai.js

"use strict";

/**
 * 控制棋子帅的组件
 */
cc.Class({
  "extends": require("Piece"),
  setflag: function setflag(status, X, Y) {
    var grids = this.node.grids;
    var dirx = Array(1, 0, 0, 0, -1);
    var diry = Array(0, 1, 0, -1, 0);

    for (var i = 0; i < 5; i++) {
      var x = X + dirx[i];
      var y = Y + diry[i];
      if (x < 0 || x > 9 || y < 0 || y > 9) continue;
      if (grids[x][y].flag == 0) continue;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXFNodWFpLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsInN0YXR1cyIsIlgiLCJZIiwiZ3JpZHMiLCJub2RlIiwiZGlyeCIsIkFycmF5IiwiZGlyeSIsImkiLCJ4IiwieSIsImZsYWciLCJudW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFJQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTQyxPQUFPLENBQUMsT0FBRCxDQURYO0FBR0xDLEVBQUFBLE9BQU8sRUFBRSxpQkFBU0MsTUFBVCxFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCO0FBQzVCLFFBQUlDLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVELEtBQXRCO0FBQ0EsUUFBSUUsSUFBSSxHQUFHQyxLQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQUMsQ0FBZCxDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQUMsQ0FBWCxFQUFjLENBQWQsQ0FBaEI7O0FBRUEsU0FBSSxJQUFJRSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsQ0FBbkIsRUFBc0JBLENBQUMsRUFBdkIsRUFBMkI7QUFDdkIsVUFBSUMsQ0FBQyxHQUFHUixDQUFDLEdBQUdJLElBQUksQ0FBQ0csQ0FBRCxDQUFoQjtBQUNBLFVBQUlFLENBQUMsR0FBR1IsQ0FBQyxHQUFHSyxJQUFJLENBQUNDLENBQUQsQ0FBaEI7QUFFQSxVQUFHQyxDQUFDLEdBQUcsQ0FBSixJQUFTQSxDQUFDLEdBQUcsQ0FBYixJQUFrQkMsQ0FBQyxHQUFHLENBQXRCLElBQTJCQSxDQUFDLEdBQUcsQ0FBbEMsRUFBcUM7QUFDckMsVUFBR1AsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZQyxJQUFaLElBQW9CLENBQXZCLEVBQTBCO0FBRTFCUixNQUFBQSxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlFLElBQVosSUFBb0JaLE1BQXBCO0FBQ0g7QUFDSjtBQWpCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o6n5Yi25qOL5a2Q5biF55qE57uE5Lu2XHJcbiAqL1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogcmVxdWlyZShcIlBpZWNlXCIpLFxyXG5cclxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKHN0YXR1cywgWCwgWSkge1xyXG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubm9kZS5ncmlkcztcclxuICAgICAgICB2YXIgZGlyeCA9IEFycmF5KDEsIDAsIDAsIDAsIC0xKTtcclxuICAgICAgICB2YXIgZGlyeSA9IEFycmF5KDAsIDEsIDAsIC0xLCAwKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgeCA9IFggKyBkaXJ4W2ldO1xyXG4gICAgICAgICAgICB2YXIgeSA9IFkgKyBkaXJ5W2ldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZ3JpZHNbeF1beV0ubnVtcyArPSBzdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==