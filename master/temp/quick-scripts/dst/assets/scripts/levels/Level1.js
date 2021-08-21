
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b9c22aBMh9GlJx2dksk799v', 'Level1');
// scripts/levels/Level1.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    // data : [],
    // typde : [cc.Integer],
    // path: [],
    // typde : [cc.Integer],
    data: {
      "default": [],
      type: [cc.Integer],
      visible: false
    },
    path: {
      "default": [],
      type: [cc.Integer],
      visible: false
    }
  },
  start: function start() {
    // 关卡号
    this.index = 1; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.data[2] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 0, 0);
    this.data[3] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
    this.data[4] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
    this.data[5] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
    this.data[6] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
    this.data[7] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[7] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 0, 0);
    this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUEr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QUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBkYXRhIDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIC8vIHBhdGg6IFtdLFxyXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxyXG5cclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyDlhbPljaHlj7dcclxuICAgICAgICB0aGlzLmluZGV4ID0gMTtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19