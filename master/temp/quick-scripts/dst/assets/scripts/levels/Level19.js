
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level19.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '36283YvzQJJ/KdtGNibCWZb', 'Level19');
// scripts/levels/Level19.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
    this.index = 19; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 1);
    this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.data[3] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.data[4] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 0, 0);
    this.data[5] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
    this.data[6] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 0, 0);
    this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 1);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[8] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 0, 0);
    this.path[9] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDE5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAxOTtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19