
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level29.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cc36o71+NP/4VUo9O+GynO', 'Level29');
// scripts/levels/Level29.js

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
    this.index = 29; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 1, 1, 1, 1, 1, 0, 0, 0);
    this.data[3] = new Array(0, 1, 1, 0, 0, 0, 1, 0, 0, 0);
    this.data[4] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[5] = new Array(0, 0, 1, 0, 1, 0, 1, 1, 1, 0);
    this.data[6] = new Array(0, 0, 0, 1, 1, 1, 0, 0, 1, 1);
    this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
    this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDI5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAyOTtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEpO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTsiXX0=