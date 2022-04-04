
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ebf3ZcUG9CqJYsdjJBDhJV', 'Level3');
// scripts/levels/Level3.js

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
    this.index = 3; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[3] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[4] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[5] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[6] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[7] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[6] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[7] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[8] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBRUg7QUFyREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBkYXRhIDogW10sXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxuXG4gICAgICAgIC8vIHBhdGg6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyDlhbPljaHlj7dcbiAgICAgICAgdGhpcy5pbmRleCA9IDM7XG5cbiAgICAgICAgLy8g5Zyw5Zu+XG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcblxuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XG5cbiAgICB9XG5cbn0pO1xuIl19