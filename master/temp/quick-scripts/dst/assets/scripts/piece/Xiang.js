
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXFhpYW5nLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsInN0YXR1cyIsIlgiLCJZIiwiZ3JpZHMiLCJub2RlIiwiZGlyeCIsIkFycmF5IiwiZGlyeSIsImhpbmRlcngiLCJoaW5kZXJ5IiwibnVtcyIsImkiLCJ4IiwieSIsImh4IiwiaHkiLCJmbGFnIiwiaGFzUGllY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUlBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNDLE9BQU8sQ0FBQyxPQUFELENBRFg7QUFHTEMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxNQUFULEVBQWlCQyxDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUI7QUFDNUIsUUFBSUMsS0FBSyxHQUFHLEtBQUtDLElBQUwsQ0FBVUQsS0FBdEI7QUFDQSxRQUFJRSxJQUFJLEdBQUdDLEtBQUssQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQUMsQ0FBWixDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBQyxDQUFaLENBQWhCLENBSDRCLENBSzVCOztBQUNBLFFBQUlFLE9BQU8sR0FBR0YsS0FBSyxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBQyxDQUFaLENBQW5CO0FBQ0EsUUFBSUcsT0FBTyxHQUFHSCxLQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFDLENBQVIsRUFBVyxDQUFDLENBQVosQ0FBbkIsQ0FQNEIsQ0FTNUI7O0FBQ0FILElBQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWVEsSUFBWixJQUFvQlYsTUFBcEIsQ0FWNEIsQ0FZNUI7O0FBQ0EsU0FBSSxJQUFJVyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsQ0FBbkIsRUFBc0JBLENBQUMsRUFBdkIsRUFBMkI7QUFDdkIsVUFBSUMsQ0FBQyxHQUFHWCxDQUFDLEdBQUdJLElBQUksQ0FBQ00sQ0FBRCxDQUFoQjtBQUNBLFVBQUlFLENBQUMsR0FBR1gsQ0FBQyxHQUFHSyxJQUFJLENBQUNJLENBQUQsQ0FBaEI7QUFDQSxVQUFJRyxFQUFFLEdBQUdiLENBQUMsR0FBR08sT0FBTyxDQUFDRyxDQUFELENBQXBCO0FBQ0EsVUFBSUksRUFBRSxHQUFHYixDQUFDLEdBQUdPLE9BQU8sQ0FBQ0UsQ0FBRCxDQUFwQjtBQUVBLFVBQUdDLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBRyxDQUFiLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEIsSUFBMkJBLENBQUMsR0FBRyxDQUFsQyxFQUFxQztBQUNyQyxVQUFHVixLQUFLLENBQUNTLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBdkIsRUFBMEIsU0FQSCxDQVN2Qjs7QUFDQSxVQUFHRixFQUFFLElBQUksQ0FBTixJQUFXQSxFQUFFLElBQUksQ0FBakIsSUFBc0JDLEVBQUUsSUFBSSxDQUE1QixJQUFpQ0EsRUFBRSxJQUFJLENBQXZDLEtBQ0VaLEtBQUssQ0FBQ1csRUFBRCxDQUFMLENBQVVDLEVBQVYsRUFBY0MsSUFBZCxJQUFzQixDQUF0QixJQUEyQmIsS0FBSyxDQUFDVyxFQUFELENBQUwsQ0FBVUMsRUFBVixFQUFjRSxRQUQzQyxDQUFILEVBQ3lEO0FBRXpEZCxNQUFBQSxLQUFLLENBQUNTLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlILElBQVosSUFBb0JWLE1BQXBCO0FBQ0g7QUFDSjtBQS9CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaOp+WItuaji+WtkOixoeeahOe7hOS7tlxuICovXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiUGllY2VcIiksXG5cbiAgICBzZXRmbGFnOiBmdW5jdGlvbihzdGF0dXMsIFgsIFkpIHtcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5ub2RlLmdyaWRzO1xuICAgICAgICB2YXIgZGlyeCA9IEFycmF5KC0yLCAyLCAyLCAtMik7XG4gICAgICAgIHZhciBkaXJ5ID0gQXJyYXkoMiwgMiwgLTIsIC0yKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOixoeecvFxuICAgICAgICB2YXIgaGluZGVyeCA9IEFycmF5KC0xLCAxLCAxLCAtMSk7XG4gICAgICAgIHZhciBoaW5kZXJ5ID0gQXJyYXkoMSwgMSwgLTEsIC0xKTtcblxuICAgICAgICAvLyDoh6rouqvmoLzlrZBcbiAgICAgICAgZ3JpZHNbWF1bWV0ubnVtcyArPSBzdGF0dXM7XG5cbiAgICAgICAgLy8g5ZGo5Zu05qC85a2QXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIHZhciB4ID0gWCArIGRpcnhbaV07XG4gICAgICAgICAgICB2YXIgeSA9IFkgKyBkaXJ5W2ldO1xuICAgICAgICAgICAgdmFyIGh4ID0gWCArIGhpbmRlcnhbaV07XG4gICAgICAgICAgICB2YXIgaHkgPSBZICsgaGluZGVyeVtpXTtcblxuICAgICAgICAgICAgaWYoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYoZ3JpZHNbeF1beV0uZmxhZyA9PSAwKSBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm57uK6LGh55y8XG4gICAgICAgICAgICBpZihoeCA+PSAwICYmIGh4IDw9IDkgJiYgaHkgPj0gMCAmJiBoeSA8PSA5ICYmIFxuICAgICAgICAgICAgICAgIChncmlkc1toeF1baHldLmZsYWcgPT0gMCB8fCBncmlkc1toeF1baHldLmhhc1BpZWNlKSkgY29udGludWU7XG5cbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19