
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/Shi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '90503qU9RJEdYC5n2gW3Wq4', 'Shi');
// scripts/piece/Shi.js

"use strict";

/**
 * 控制棋子士的组件
 */
cc.Class({
  "extends": require("Piece"),
  setflag: function setflag(status, X, Y) {
    var grids = this.node.grids;
    var dirx = Array(0, 1, -1, 1, -1);
    var diry = Array(0, -1, 1, 1, -1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXFNoaS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwicmVxdWlyZSIsInNldGZsYWciLCJzdGF0dXMiLCJYIiwiWSIsImdyaWRzIiwibm9kZSIsImRpcngiLCJBcnJheSIsImRpcnkiLCJpIiwieCIsInkiLCJmbGFnIiwibnVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0MsT0FBTyxDQUFDLE9BQUQsQ0FEWDtBQUdMQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUM1QixRQUFJQyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QjtBQUNBLFFBQUlFLElBQUksR0FBR0MsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUFoQjs7QUFFQSxTQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxDQUFuQixFQUFzQkEsQ0FBQyxFQUF2QixFQUEyQjtBQUN2QixVQUFJQyxDQUFDLEdBQUdSLENBQUMsR0FBR0ksSUFBSSxDQUFDRyxDQUFELENBQWhCO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHUixDQUFDLEdBQUdLLElBQUksQ0FBQ0MsQ0FBRCxDQUFoQjtBQUVBLFVBQUdDLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBRyxDQUFiLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEIsSUFBMkJBLENBQUMsR0FBRyxDQUFsQyxFQUFxQztBQUNyQyxVQUFHUCxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlDLElBQVosSUFBb0IsQ0FBdkIsRUFBMEI7QUFFMUJSLE1BQUFBLEtBQUssQ0FBQ00sQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUUsSUFBWixJQUFvQlosTUFBcEI7QUFDSDtBQUNKO0FBakJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmjqfliLbmo4vlrZDlo6vnmoTnu4Tku7ZcclxuICovXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiUGllY2VcIiksXHJcblxyXG4gICAgc2V0ZmxhZzogZnVuY3Rpb24oc3RhdHVzLCBYLCBZKSB7XHJcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5ub2RlLmdyaWRzO1xyXG4gICAgICAgIHZhciBkaXJ4ID0gQXJyYXkoMCwgMSwgLTEsIDEsIC0xKTtcclxuICAgICAgICB2YXIgZGlyeSA9IEFycmF5KDAsIC0xLCAxLCAxLCAtMSk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHggPSBYICsgZGlyeFtpXTtcclxuICAgICAgICAgICAgdmFyIHkgPSBZICsgZGlyeVtpXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYoZ3JpZHNbeF1beV0uZmxhZyA9PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=