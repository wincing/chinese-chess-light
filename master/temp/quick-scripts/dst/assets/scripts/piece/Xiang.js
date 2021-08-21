
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/Xiang.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e9999PLRKhJEY+OlN4cazOI', 'Xiang');
// scripts/piece/Xiang.js

"use strict";

/**
 * 控制棋子象的组件
 */
cc.Class({
  "extends": require("Piece"),
  setflag: function setflag(status, X, Y) {
    var grids = this.node.grids;
    var dirx = Array(-2, 2, 2, -2);
    var diry = Array(2, 2, -2, -2); // 象眼

    var hinderx = Array(-1, 1, 1, -1);
    var hindery = Array(1, 1, -1, -1); // 自身格子

    grids[X][Y].nums += status; // 周围格子

    for (var i = 0; i < 4; i++) {
      var x = X + dirx[i];
      var y = Y + diry[i];
      var hx = X + hinderx[i];
      var hy = Y + hindery[i];
      if (x < 0 || x > 9 || y < 0 || y > 9) continue;
      if (grids[x][y].flag == 0) continue; // 检查是否绊象眼

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXFhpYW5nLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsInN0YXR1cyIsIlgiLCJZIiwiZ3JpZHMiLCJub2RlIiwiZGlyeCIsIkFycmF5IiwiZGlyeSIsImhpbmRlcngiLCJoaW5kZXJ5IiwibnVtcyIsImkiLCJ4IiwieSIsImh4IiwiaHkiLCJmbGFnIiwiaGFzUGllY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUlBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNDLE9BQU8sQ0FBQyxPQUFELENBRFg7QUFHTEMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxNQUFULEVBQWlCQyxDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUI7QUFDNUIsUUFBSUMsS0FBSyxHQUFHLEtBQUtDLElBQUwsQ0FBVUQsS0FBdEI7QUFDQSxRQUFJRSxJQUFJLEdBQUdDLEtBQUssQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQUMsQ0FBWixDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBQyxDQUFaLENBQWhCLENBSDRCLENBSzVCOztBQUNBLFFBQUlFLE9BQU8sR0FBR0YsS0FBSyxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBQyxDQUFaLENBQW5CO0FBQ0EsUUFBSUcsT0FBTyxHQUFHSCxLQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFDLENBQVIsRUFBVyxDQUFDLENBQVosQ0FBbkIsQ0FQNEIsQ0FTNUI7O0FBQ0FILElBQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWVEsSUFBWixJQUFvQlYsTUFBcEIsQ0FWNEIsQ0FZNUI7O0FBQ0EsU0FBSSxJQUFJVyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsQ0FBbkIsRUFBc0JBLENBQUMsRUFBdkIsRUFBMkI7QUFDdkIsVUFBSUMsQ0FBQyxHQUFHWCxDQUFDLEdBQUdJLElBQUksQ0FBQ00sQ0FBRCxDQUFoQjtBQUNBLFVBQUlFLENBQUMsR0FBR1gsQ0FBQyxHQUFHSyxJQUFJLENBQUNJLENBQUQsQ0FBaEI7QUFDQSxVQUFJRyxFQUFFLEdBQUdiLENBQUMsR0FBR08sT0FBTyxDQUFDRyxDQUFELENBQXBCO0FBQ0EsVUFBSUksRUFBRSxHQUFHYixDQUFDLEdBQUdPLE9BQU8sQ0FBQ0UsQ0FBRCxDQUFwQjtBQUVBLFVBQUdDLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBRyxDQUFiLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEIsSUFBMkJBLENBQUMsR0FBRyxDQUFsQyxFQUFxQztBQUNyQyxVQUFHVixLQUFLLENBQUNTLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBdkIsRUFBMEIsU0FQSCxDQVN2Qjs7QUFDQSxVQUFHRixFQUFFLElBQUksQ0FBTixJQUFXQSxFQUFFLElBQUksQ0FBakIsSUFBc0JDLEVBQUUsSUFBSSxDQUE1QixJQUFpQ0EsRUFBRSxJQUFJLENBQXZDLEtBQ0VaLEtBQUssQ0FBQ1csRUFBRCxDQUFMLENBQVVDLEVBQVYsRUFBY0MsSUFBZCxJQUFzQixDQUF0QixJQUEyQmIsS0FBSyxDQUFDVyxFQUFELENBQUwsQ0FBVUMsRUFBVixFQUFjRSxRQUQzQyxDQUFILEVBQ3lEO0FBRXpEZCxNQUFBQSxLQUFLLENBQUNTLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlILElBQVosSUFBb0JWLE1BQXBCO0FBQ0g7QUFDSjtBQS9CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o6n5Yi25qOL5a2Q6LGh55qE57uE5Lu2XHJcbiAqL1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogcmVxdWlyZShcIlBpZWNlXCIpLFxyXG5cclxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKHN0YXR1cywgWCwgWSkge1xyXG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubm9kZS5ncmlkcztcclxuICAgICAgICB2YXIgZGlyeCA9IEFycmF5KC0yLCAyLCAyLCAtMik7XHJcbiAgICAgICAgdmFyIGRpcnkgPSBBcnJheSgyLCAyLCAtMiwgLTIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOixoeecvFxyXG4gICAgICAgIHZhciBoaW5kZXJ4ID0gQXJyYXkoLTEsIDEsIDEsIC0xKTtcclxuICAgICAgICB2YXIgaGluZGVyeSA9IEFycmF5KDEsIDEsIC0xLCAtMSk7XHJcblxyXG4gICAgICAgIC8vIOiHqui6q+agvOWtkFxyXG4gICAgICAgIGdyaWRzW1hdW1ldLm51bXMgKz0gc3RhdHVzO1xyXG5cclxuICAgICAgICAvLyDlkajlm7TmoLzlrZBcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gWCArIGRpcnhbaV07XHJcbiAgICAgICAgICAgIHZhciB5ID0gWSArIGRpcnlbaV07XHJcbiAgICAgICAgICAgIHZhciBoeCA9IFggKyBoaW5kZXJ4W2ldO1xyXG4gICAgICAgICAgICB2YXIgaHkgPSBZICsgaGluZGVyeVtpXTtcclxuXHJcbiAgICAgICAgICAgIGlmKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYoZ3JpZHNbeF1beV0uZmxhZyA9PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIOajgOafpeaYr+WQpue7iuixoeecvFxyXG4gICAgICAgICAgICBpZihoeCA+PSAwICYmIGh4IDw9IDkgJiYgaHkgPj0gMCAmJiBoeSA8PSA5ICYmIFxyXG4gICAgICAgICAgICAgICAgKGdyaWRzW2h4XVtoeV0uZmxhZyA9PSAwIHx8IGdyaWRzW2h4XVtoeV0uaGFzUGllY2UpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=