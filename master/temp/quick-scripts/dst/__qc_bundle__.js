
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.1-2.2.1_cc.Toggle_event');
require('./assets/scripts/BlackPiece');
require('./assets/scripts/CheckerBoard');
require('./assets/scripts/Grid');
require('./assets/scripts/InitColor');
require('./assets/scripts/Piece');
require('./assets/scripts/PieceManager');
require('./assets/scripts/Ranking');
require('./assets/scripts/Share');
require('./assets/scripts/Skip');
require('./assets/scripts/levels/LEvel6');
require('./assets/scripts/levels/Level1');
require('./assets/scripts/levels/Level10');
require('./assets/scripts/levels/Level11');
require('./assets/scripts/levels/Level12');
require('./assets/scripts/levels/Level13');
require('./assets/scripts/levels/Level14');
require('./assets/scripts/levels/Level15');
require('./assets/scripts/levels/Level16');
require('./assets/scripts/levels/Level17');
require('./assets/scripts/levels/Level18');
require('./assets/scripts/levels/Level19');
require('./assets/scripts/levels/Level2');
require('./assets/scripts/levels/Level20');
require('./assets/scripts/levels/Level21');
require('./assets/scripts/levels/Level22');
require('./assets/scripts/levels/Level23');
require('./assets/scripts/levels/Level24');
require('./assets/scripts/levels/Level25');
require('./assets/scripts/levels/Level26');
require('./assets/scripts/levels/Level27');
require('./assets/scripts/levels/Level28');
require('./assets/scripts/levels/Level29');
require('./assets/scripts/levels/Level3');
require('./assets/scripts/levels/Level30');
require('./assets/scripts/levels/Level31');
require('./assets/scripts/levels/Level32');
require('./assets/scripts/levels/Level33');
require('./assets/scripts/levels/Level34');
require('./assets/scripts/levels/Level35');
require('./assets/scripts/levels/Level36');
require('./assets/scripts/levels/Level37');
require('./assets/scripts/levels/Level38');
require('./assets/scripts/levels/Level39');
require('./assets/scripts/levels/Level4');
require('./assets/scripts/levels/Level40');
require('./assets/scripts/levels/Level41');
require('./assets/scripts/levels/Level42');
require('./assets/scripts/levels/Level43');
require('./assets/scripts/levels/Level44');
require('./assets/scripts/levels/Level45');
require('./assets/scripts/levels/Level5');
require('./assets/scripts/levels/Level7');
require('./assets/scripts/levels/Level8');
require('./assets/scripts/levels/Level9');
require('./assets/scripts/music/AudioManager');
require('./assets/scripts/music/ButtonMusic');
require('./assets/scripts/music/MusicEvent');
require('./assets/scripts/piece/Bing');
require('./assets/scripts/piece/BlackChe');
require('./assets/scripts/piece/BlackJiang');
require('./assets/scripts/piece/BlackMa');
require('./assets/scripts/piece/BlackPao');
require('./assets/scripts/piece/BlackShi');
require('./assets/scripts/piece/BlackXiang');
require('./assets/scripts/piece/BlackZu');
require('./assets/scripts/piece/Che');
require('./assets/scripts/piece/Ma');
require('./assets/scripts/piece/Pao');
require('./assets/scripts/piece/Shi');
require('./assets/scripts/piece/Shuai');
require('./assets/scripts/piece/Xiang');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level12.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50d1dpquING5aHJPPf8Jb9/', 'Level12');
// scripts/levels/Level12.js

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
    this.index = 12; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.data[1] = new Array(0, 1, 1, 1, 1, 1, 0, 0, 1, 0);
    this.data[2] = new Array(0, 0, 1, 0, 0, 1, 1, 0, 1, 0);
    this.data[3] = new Array(0, 0, 1, 0, 0, 0, 1, 1, 1, 0);
    this.data[4] = new Array(0, 1, 1, 1, 1, 0, 0, 0, 1, 0);
    this.data[5] = new Array(0, 1, 0, 0, 1, 0, 0, 0, 1, 0);
    this.data[6] = new Array(0, 1, 0, 0, 1, 0, 0, 1, 1, 0);
    this.data[7] = new Array(0, 1, 0, 0, 1, 1, 1, 1, 0, 0);
    this.data[8] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[4] = new Array(0, 1, 1, 1, 1, 0, 0, 0, 1, 0);
    this.path[5] = new Array(0, 1, 0, 0, 1, 0, 0, 0, 1, 0);
    this.path[6] = new Array(0, 1, 0, 0, 1, 0, 0, 1, 1, 0);
    this.path[7] = new Array(0, 1, 0, 0, 1, 1, 1, 1, 0, 0);
    this.path[8] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[9] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDEyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAxMjtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Grid.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '299a92UlGZLEYk+Sgvg7yu+', 'Grid');
// scripts/Grid.js

"use strict";

/**
 * 组成棋盘的格子
 * 
 * @property {Number} flag  标识棋子的状态, 0为墙, 1为路, 2为灯
 * 
 * @property {Boolean} hasPiece 标识该格子上是否有棋子, 0为无, 1为有
 * 
 * @property {Number} num  照亮该格子的棋子的个数
 * 
 * @property {Piece} piece 位于格子上的棋子, 没有则为null
 */
cc.Class({
  "extends": cc.Component,

  /**
   * 当某个格子收到状态更改事件, 自动调用repaint方法
   */
  onLoad: function onLoad() {
    this.node.on("flag_changed", function () {
      this.repaint();
    }, this);
  },

  /**
   * 更换棋子背景
   */
  repaint: function repaint() {
    var self = this;

    switch (this.node.flag) {
      case 1:
        cc.loader.loadRes("grid/path", cc.SpriteFrame, function (err, spriteFrame) {
          self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        break;

      case 2:
        cc.loader.loadRes("grid/light", cc.SpriteFrame, function (err, spriteFrame) {
          self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        break;
    }
  },
  start: function start() {
    this.flag = null;
    this.hasPiece = false;
    this.num = 0;
    this.piece = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JpZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwibm9kZSIsIm9uIiwicmVwYWludCIsInNlbGYiLCJmbGFnIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzdGFydCIsImhhc1BpZWNlIiwibnVtIiwicGllY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBWUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQOztBQUdMOzs7QUFHQUMsRUFBQUEsTUFOSyxvQkFNSztBQUNOLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLGNBQWIsRUFBNkIsWUFBWTtBQUNyQyxXQUFLQyxPQUFMO0FBQ0gsS0FGRCxFQUVHLElBRkg7QUFHSCxHQVZJOztBQWFMOzs7QUFHQUEsRUFBQUEsT0FBTyxFQUFFLG1CQUFXO0FBQ2hCLFFBQUlDLElBQUksR0FBRyxJQUFYOztBQUVBLFlBQVEsS0FBS0gsSUFBTCxDQUFVSSxJQUFsQjtBQUNJLFdBQUssQ0FBTDtBQUNJUixRQUFBQSxFQUFFLENBQUNTLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixXQUFsQixFQUErQlYsRUFBRSxDQUFDVyxXQUFsQyxFQUErQyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7QUFDdkVOLFVBQUFBLElBQUksQ0FBQ0gsSUFBTCxDQUFVVSxZQUFWLENBQXVCZCxFQUFFLENBQUNlLE1BQTFCLEVBQWtDRixXQUFsQyxHQUFnREEsV0FBaEQ7QUFDSCxTQUZEO0FBR0E7O0FBQ0osV0FBSyxDQUFMO0FBQ0liLFFBQUFBLEVBQUUsQ0FBQ1MsTUFBSCxDQUFVQyxPQUFWLENBQWtCLFlBQWxCLEVBQWdDVixFQUFFLENBQUNXLFdBQW5DLEVBQWdELFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtBQUN4RU4sVUFBQUEsSUFBSSxDQUFDSCxJQUFMLENBQVVVLFlBQVYsQ0FBdUJkLEVBQUUsQ0FBQ2UsTUFBMUIsRUFBa0NGLFdBQWxDLEdBQWdEQSxXQUFoRDtBQUNILFNBRkQ7QUFHQTtBQVZSO0FBYUgsR0FoQ0k7QUFrQ0xHLEVBQUFBLEtBbENLLG1CQWtDSTtBQUNMLFNBQUtSLElBQUwsR0FBWSxJQUFaO0FBRUEsU0FBS1MsUUFBTCxHQUFnQixLQUFoQjtBQUVBLFNBQUtDLEdBQUwsR0FBVyxDQUFYO0FBRUEsU0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDSDtBQTFDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOe7hOaIkOaji+ebmOeahOagvOWtkFxuICogXG4gKiBAcHJvcGVydHkge051bWJlcn0gZmxhZyAg5qCH6K+G5qOL5a2Q55qE54q25oCBLCAw5Li65aKZLCAx5Li66LevLCAy5Li654GvXG4gKiBcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gaGFzUGllY2Ug5qCH6K+G6K+l5qC85a2Q5LiK5piv5ZCm5pyJ5qOL5a2QLCAw5Li65pegLCAx5Li65pyJXG4gKiBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBudW0gIOeFp+S6ruivpeagvOWtkOeahOaji+WtkOeahOS4quaVsFxuICogXG4gKiBAcHJvcGVydHkge1BpZWNlfSBwaWVjZSDkvY3kuo7moLzlrZDkuIrnmoTmo4vlrZAsIOayoeacieWImeS4um51bGxcbiAqL1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgLyoqXG4gICAgICog5b2T5p+Q5Liq5qC85a2Q5pS25Yiw54q25oCB5pu05pS55LqL5Lu2LCDoh6rliqjosIPnlKhyZXBhaW505pa55rOVXG4gICAgICovXG4gICAgb25Mb2FkICgpIHsgICAgICAgIFxuICAgICAgICB0aGlzLm5vZGUub24oXCJmbGFnX2NoYW5nZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yZXBhaW50KCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICog5pu05o2i5qOL5a2Q6IOM5pmvXG4gICAgICovXG4gICAgcmVwYWludDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBzd2l0Y2ggKHRoaXMubm9kZS5mbGFnKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJncmlkL3BhdGhcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiZ3JpZC9saWdodFwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuZmxhZyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5oYXNQaWVjZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubnVtID0gMDtcblxuICAgICAgICB0aGlzLnBpZWNlID0gbnVsbDtcbiAgICB9LFxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_v2.1-2.2.1_cc.Toggle_event.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'be585mg+RNPZrle6rFKG5po', 'use_v2.1-2.2.1_cc.Toggle_event');
// migration/use_v2.1-2.2.1_cc.Toggle_event.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with the v2.1.0 ～ 2.2.1 version.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Toggle in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0 ~ 2.2.1 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Toggle，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
if (cc.Toggle) {
  // Whether to trigger 'toggle' and 'checkEvents' events when modifying 'toggle.isChecked' in the code
  // 在代码中修改 'toggle.isChecked' 时是否触发 'toggle' 与 'checkEvents' 事件
  cc.Toggle._triggerEventInScript_isChecked = true;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMS0yLjIuMV9jYy5Ub2dnbGVfZXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJUb2dnbGUiLCJfdHJpZ2dlckV2ZW50SW5TY3JpcHRfaXNDaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVlBLElBQUlBLEVBQUUsQ0FBQ0MsTUFBUCxFQUFlO0FBQ1g7QUFDQTtBQUNBRCxFQUFBQSxFQUFFLENBQUNDLE1BQUgsQ0FBVUMsK0JBQVYsR0FBNEMsSUFBNUM7QUFDSCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgc2NyaXB0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IENvY29zIENyZWF0b3IgYW5kIGlzIG9ubHkgdXNlZCBmb3IgcHJvamVjdHMgY29tcGF0aWJsZSB3aXRoIHRoZSB2Mi4xLjAg772eIDIuMi4xIHZlcnNpb24uXG4gKiBZb3UgZG8gbm90IG5lZWQgdG8gbWFudWFsbHkgYWRkIHRoaXMgc2NyaXB0IGluIGFueSBvdGhlciBwcm9qZWN0LlxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cbiAqIElmIHlvdXIgcHJvamVjdCBpcyBob3N0ZWQgaW4gVkNTIHN1Y2ggYXMgZ2l0LCBzdWJtaXQgdGhpcyBzY3JpcHQgdG9nZXRoZXIuXG4gKlxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCB+IDIuMi4xIOeJiOacrOeahOW3peeoi++8jFxuICog5L2g5peg6ZyA5Zyo5Lu75L2V5YW25a6D6aG555uu5Lit5omL5Yqo5re75Yqg5q2k6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67kuK3msqHnlKjliLAgVG9nZ2xl77yM5Y+v55u05o6l5Yig6Zmk6K+l6ISa5pys44CCXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxuICovXG5cbmlmIChjYy5Ub2dnbGUpIHtcbiAgICAvLyBXaGV0aGVyIHRvIHRyaWdnZXIgJ3RvZ2dsZScgYW5kICdjaGVja0V2ZW50cycgZXZlbnRzIHdoZW4gbW9kaWZ5aW5nICd0b2dnbGUuaXNDaGVja2VkJyBpbiB0aGUgY29kZVxuICAgIC8vIOWcqOS7o+eggeS4reS/ruaUuSAndG9nZ2xlLmlzQ2hlY2tlZCcg5pe25piv5ZCm6Kem5Y+RICd0b2dnbGUnIOS4jiAnY2hlY2tFdmVudHMnIOS6i+S7tlxuICAgIGNjLlRvZ2dsZS5fdHJpZ2dlckV2ZW50SW5TY3JpcHRfaXNDaGVja2VkID0gdHJ1ZTtcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/music/MusicEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ae20fKjqZ9EGbqmfIm2H4Kq', 'MusicEvent');
// scripts/music/MusicEvent.js

"use strict";

/**
 * 按钮控制音乐开关
 */
cc.Class({
  "extends": cc.Component,
  start: function start() {
    this.AudioPlayer = cc.find("Audio").getComponent("AudioManager");
    this.bg = cc.find('Canvas/Background/MusicPlayer/Background');
    this.monitor();
  },
  Sound: function Sound() {
    this.AudioPlayer.click();
  },

  /**
   * 更换音乐按钮
   */
  monitor: function monitor() {
    var flag = cc.director.getScene('Start').getChildByName("Audio").getComponent('AudioManager').flag;

    if (flag == 1) {
      var self = this;
      cc.loader.loadRes("button/sound_on", cc.SpriteFrame, function (err, spriteFrame) {
        self.bg.getComponent(cc.Sprite).spriteFrame = spriteFrame;
      });
    } else {
      var self = this;
      cc.loader.loadRes("button/sound_off", cc.SpriteFrame, function (err, spriteFrame) {
        self.bg.getComponent(cc.Sprite).spriteFrame = spriteFrame;
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbXVzaWNcXE11c2ljRXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInN0YXJ0IiwiQXVkaW9QbGF5ZXIiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiYmciLCJtb25pdG9yIiwiU291bmQiLCJjbGljayIsImZsYWciLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZ2V0Q2hpbGRCeU5hbWUiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJTcHJpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxLQUhLLG1CQUdJO0FBQ0wsU0FBS0MsV0FBTCxHQUFtQkosRUFBRSxDQUFDSyxJQUFILENBQVEsT0FBUixFQUFpQkMsWUFBakIsQ0FBOEIsY0FBOUIsQ0FBbkI7QUFDQSxTQUFLQyxFQUFMLEdBQVVQLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLDBDQUFSLENBQVY7QUFDQSxTQUFLRyxPQUFMO0FBQ0gsR0FQSTtBQVNMQyxFQUFBQSxLQVRLLG1CQVNHO0FBQ0osU0FBS0wsV0FBTCxDQUFpQk0sS0FBakI7QUFDSCxHQVhJOztBQWFMOzs7QUFHQUYsRUFBQUEsT0FoQksscUJBZ0JLO0FBQ04sUUFBSUcsSUFBSSxHQUFHWCxFQUFFLENBQUNZLFFBQUgsQ0FBWUMsUUFBWixDQUFxQixPQUFyQixFQUE4QkMsY0FBOUIsQ0FBNkMsT0FBN0MsRUFBc0RSLFlBQXRELENBQW1FLGNBQW5FLEVBQW1GSyxJQUE5Rjs7QUFFQSxRQUFHQSxJQUFJLElBQUksQ0FBWCxFQUFjO0FBQ1YsVUFBSUksSUFBSSxHQUFHLElBQVg7QUFDQWYsTUFBQUEsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLGlCQUFsQixFQUFxQ2pCLEVBQUUsQ0FBQ2tCLFdBQXhDLEVBQXFELFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtBQUU3RUwsUUFBQUEsSUFBSSxDQUFDUixFQUFMLENBQVFELFlBQVIsQ0FBcUJOLEVBQUUsQ0FBQ3FCLE1BQXhCLEVBQWdDRCxXQUFoQyxHQUE4Q0EsV0FBOUM7QUFDSCxPQUhEO0FBSUgsS0FORCxNQU1PO0FBQ0gsVUFBSUwsSUFBSSxHQUFHLElBQVg7QUFFQWYsTUFBQUEsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLGtCQUFsQixFQUFzQ2pCLEVBQUUsQ0FBQ2tCLFdBQXpDLEVBQXNELFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtBQUM5RUwsUUFBQUEsSUFBSSxDQUFDUixFQUFMLENBQVFELFlBQVIsQ0FBcUJOLEVBQUUsQ0FBQ3FCLE1BQXhCLEVBQWdDRCxXQUFoQyxHQUE4Q0EsV0FBOUM7QUFDSCxPQUZEO0FBR0g7QUFFSjtBQWpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaMiemSruaOp+WItumfs+S5kOW8gOWFs1xuICovXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICB0aGlzLkF1ZGlvUGxheWVyID0gY2MuZmluZChcIkF1ZGlvXCIpLmdldENvbXBvbmVudChcIkF1ZGlvTWFuYWdlclwiKTtcbiAgICAgICAgdGhpcy5iZyA9IGNjLmZpbmQoJ0NhbnZhcy9CYWNrZ3JvdW5kL011c2ljUGxheWVyL0JhY2tncm91bmQnKTtcbiAgICAgICAgdGhpcy5tb25pdG9yKCk7XG4gICAgfSxcblxuICAgIFNvdW5kKCkge1xuICAgICAgICB0aGlzLkF1ZGlvUGxheWVyLmNsaWNrKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOabtOaNoumfs+S5kOaMiemSrlxuICAgICAqL1xuICAgIG1vbml0b3IoKSB7XG4gICAgICAgIHZhciBmbGFnID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoJ1N0YXJ0JykuZ2V0Q2hpbGRCeU5hbWUoXCJBdWRpb1wiKS5nZXRDb21wb25lbnQoJ0F1ZGlvTWFuYWdlcicpLmZsYWc7XG5cbiAgICAgICAgaWYoZmxhZyA9PSAxKSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImJ1dHRvbi9zb3VuZF9vblwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcblxuICAgICAgICAgICAgICAgIHNlbGYuYmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImJ1dHRvbi9zb3VuZF9vZmZcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5iZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgfSkgIFxuICAgICAgICB9XG5cbiAgICB9XG5cbn0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/BlackChe.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '00581o/TGBAnbfjvi5VVeJW', 'BlackChe');
// scripts/piece/BlackChe.js

"use strict";

/**
 * 控制黑棋车的组件
 */
cc.Class({
  "extends": require("BlackPiece"),
  setflag: function setflag(X, Y) {
    var x = X;
    var y = Y;
    var grids = this.node.grids; // 向下

    x++;

    while (x <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) {
      x++;
    }

    if (x <= 9 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
      grids[x][y].piece.disable = true;
    }

    x = X; // 向上

    x--;

    while (x >= 0 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) {
      x--;
    }

    if (x >= 0 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
      grids[x][y].piece.disable = true;
    }

    x = X; // 向左

    y--;

    while (y >= 0 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) {
      y--;
    }

    if (y >= 0 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
      grids[x][y].piece.disable = true;
    }

    y = Y; // 向右

    y++;

    while (y <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) {
      y++;
    }

    if (y <= 9 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
      grids[x][y].piece.disable = true;
    }

    y = Y;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrQ2hlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsIlgiLCJZIiwieCIsInkiLCJncmlkcyIsIm5vZGUiLCJmbGFnIiwiaGFzUGllY2UiLCJwaWVjZSIsImRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUlDQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNOLGFBQVNDLE9BQU8sQ0FBQyxZQUFELENBRFY7QUFHTkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNwQixRQUFJQyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QixDQUhvQixDQU1wQjs7QUFDQUYsSUFBQUEsQ0FBQzs7QUFDRCxXQUFNQSxDQUFDLElBQUksQ0FBTCxJQUFVRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUMsQ0FBQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUF0RDtBQUFnRUwsTUFBQUEsQ0FBQztBQUFqRTs7QUFFQSxRQUFHQSxDQUFDLElBQUksQ0FBTCxJQUFVRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUNGLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBbEQsRUFBNEQ7QUFDeERILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsSUFBNUI7QUFDSDs7QUFDRFAsSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBYm9CLENBZXBCOztBQUNBRSxJQUFBQSxDQUFDOztBQUNELFdBQU1BLENBQUMsSUFBSSxDQUFMLElBQVVFLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQixDQUE5QixJQUFtQyxDQUFDRixLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLFFBQXREO0FBQWdFTCxNQUFBQSxDQUFDO0FBQWpFOztBQUVBLFFBQUdBLENBQUMsSUFBSSxDQUFMLElBQVVFLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQixDQUE5QixJQUFtQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUFsRCxFQUE0RDtBQUN4REgsTUFBQUEsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxLQUFaLENBQWtCQyxPQUFsQixHQUE0QixJQUE1QjtBQUNIOztBQUNEUCxJQUFBQSxDQUFDLEdBQUdGLENBQUosQ0F0Qm9CLENBd0JwQjs7QUFDQUcsSUFBQUEsQ0FBQzs7QUFDRCxXQUFNQSxDQUFDLElBQUksQ0FBTCxJQUFVQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUMsQ0FBQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUF0RDtBQUFnRUosTUFBQUEsQ0FBQztBQUFqRTs7QUFFQSxRQUFHQSxDQUFDLElBQUksQ0FBTCxJQUFVQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUNGLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBbEQsRUFBNEQ7QUFDeERILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsSUFBNUI7QUFDSDs7QUFDRE4sSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBL0JvQixDQWlDcEI7O0FBQ0FFLElBQUFBLENBQUM7O0FBQ0QsV0FBTUEsQ0FBQyxJQUFJLENBQUwsSUFBVUMsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CLENBQTlCLElBQW1DLENBQUNGLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBdEQ7QUFBZ0VKLE1BQUFBLENBQUM7QUFBakU7O0FBRUEsUUFBR0EsQ0FBQyxJQUFJLENBQUwsSUFBVUMsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CLENBQTlCLElBQW1DRixLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLFFBQWxELEVBQTREO0FBQ3hESCxNQUFBQSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLElBQTVCO0FBQ0g7O0FBQ0ROLElBQUFBLENBQUMsR0FBR0YsQ0FBSjtBQUNILEdBNUNLLENBOENOOztBQTlDTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaOp+WItum7keaji+i9pueahOe7hOS7tlxuICovXG5cbiBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogcmVxdWlyZShcIkJsYWNrUGllY2VcIiksXG5cbiAgICBzZXRmbGFnOiBmdW5jdGlvbihYLCBZKSB7XG4gICAgICAgIHZhciB4ID0gWDtcbiAgICAgICAgdmFyIHkgPSBZO1xuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm5vZGUuZ3JpZHM7XG4gICBcbiAgICAgIFxuICAgICAgICAvLyDlkJHkuItcbiAgICAgICAgeCsrO1xuICAgICAgICB3aGlsZSh4IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSkgeCsrO1xuXG4gICAgICAgIGlmKHggPD0gOSAmJiBncmlkc1t4XVt5XS5mbGFnICE9IDAgJiYgZ3JpZHNbeF1beV0uaGFzUGllY2UpIHtcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLnBpZWNlLmRpc2FibGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHggPSBYO1xuXG4gICAgICAgIC8vIOWQkeS4ilxuICAgICAgICB4LS07XG4gICAgICAgIHdoaWxlKHggPj0gMCAmJiBncmlkc1t4XVt5XS5mbGFnICE9IDAgJiYgIWdyaWRzW3hdW3ldLmhhc1BpZWNlKSB4LS07XG5cbiAgICAgICAgaWYoeCA+PSAwICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiBncmlkc1t4XVt5XS5oYXNQaWVjZSkge1xuICAgICAgICAgICAgZ3JpZHNbeF1beV0ucGllY2UuZGlzYWJsZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgeCA9IFg7XG5cbiAgICAgICAgLy8g5ZCR5bemXG4gICAgICAgIHktLTtcbiAgICAgICAgd2hpbGUoeSA+PSAwICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpIHktLTtcblxuICAgICAgICBpZih5ID49IDAgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmIGdyaWRzW3hdW3ldLmhhc1BpZWNlKSB7XG4gICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB5ID0gWTtcblxuICAgICAgICAvLyDlkJHlj7NcbiAgICAgICAgeSsrO1xuICAgICAgICB3aGlsZSh5IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSkgeSsrO1xuXG4gICAgICAgIGlmKHkgPD0gOSAmJiBncmlkc1t4XVt5XS5mbGFnICE9IDAgJiYgZ3JpZHNbeF1beV0uaGFzUGllY2UpIHtcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLnBpZWNlLmRpc2FibGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHkgPSBZO1xuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ranking.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '715e7T4PmlNoonpDiDaXUaO', 'Ranking');
// scripts/Ranking.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    SubContextView: {
      "default": null,
      type: cc.Node,
      serializable: true
    }
  },
  start: function start() {
    this.rankingPanel = this.SubContextView.parent;
    this.rankingPanel.active = false;
    this.SubContextView.active = false;
  },
  show: function show() {
    this.SubContextView.active = true;
    this.rankingPanel.active = true; // 判断是否是微信平台

    if (window['wx']) {
      // 给子域发送消息
      var openDataContext = wx.getOpenDataContext();
      openDataContext.postMessage({
        text: 'showRank' // 在子域中调用该函数

      });
    }
  },
  hide: function hide() {
    this.SubContextView.active = false;
    this.rankingPanel.active = false; // 判断是否是微信平台

    if (window['wx']) {
      // 给子域发送消息
      var openDataContext = wx.getOpenDataContext();
      openDataContext.postMessage({
        text: 'clear' // 清空排行榜

      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUmFua2luZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIlN1YkNvbnRleHRWaWV3IiwidHlwZSIsIk5vZGUiLCJzZXJpYWxpemFibGUiLCJzdGFydCIsInJhbmtpbmdQYW5lbCIsInBhcmVudCIsImFjdGl2ZSIsInNob3ciLCJ3aW5kb3ciLCJvcGVuRGF0YUNvbnRleHQiLCJ3eCIsImdldE9wZW5EYXRhQ29udGV4dCIsInBvc3RNZXNzYWdlIiwidGV4dCIsImhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxjQUFjLEVBQUU7QUFDWixpQkFBUyxJQURHO0FBRVpDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQUZHO0FBR1pDLE1BQUFBLFlBQVksRUFBRTtBQUhGO0FBRFIsR0FIUDtBQVdMQyxFQUFBQSxLQVhLLG1CQVdHO0FBQ0osU0FBS0MsWUFBTCxHQUFvQixLQUFLTCxjQUFMLENBQW9CTSxNQUF4QztBQUNBLFNBQUtELFlBQUwsQ0FBa0JFLE1BQWxCLEdBQTJCLEtBQTNCO0FBQ0EsU0FBS1AsY0FBTCxDQUFvQk8sTUFBcEIsR0FBNkIsS0FBN0I7QUFDSCxHQWZJO0FBaUJMQyxFQUFBQSxJQWpCSyxrQkFpQkU7QUFDSCxTQUFLUixjQUFMLENBQW9CTyxNQUFwQixHQUE2QixJQUE3QjtBQUNBLFNBQUtGLFlBQUwsQ0FBa0JFLE1BQWxCLEdBQTJCLElBQTNCLENBRkcsQ0FHSDs7QUFDQSxRQUFHRSxNQUFNLENBQUMsSUFBRCxDQUFULEVBQWlCO0FBQ2I7QUFDQSxVQUFJQyxlQUFlLEdBQUdDLEVBQUUsQ0FBQ0Msa0JBQUgsRUFBdEI7QUFDQUYsTUFBQUEsZUFBZSxDQUFDRyxXQUFoQixDQUE0QjtBQUN4QkMsUUFBQUEsSUFBSSxFQUFDLFVBRG1CLENBQ1A7O0FBRE8sT0FBNUI7QUFHSDtBQUNKLEdBNUJJO0FBOEJMQyxFQUFBQSxJQTlCSyxrQkE4QkU7QUFDSCxTQUFLZixjQUFMLENBQW9CTyxNQUFwQixHQUE2QixLQUE3QjtBQUNBLFNBQUtGLFlBQUwsQ0FBa0JFLE1BQWxCLEdBQTJCLEtBQTNCLENBRkcsQ0FHSDs7QUFDQSxRQUFHRSxNQUFNLENBQUMsSUFBRCxDQUFULEVBQWlCO0FBQ2I7QUFDQSxVQUFJQyxlQUFlLEdBQUdDLEVBQUUsQ0FBQ0Msa0JBQUgsRUFBdEI7QUFDQUYsTUFBQUEsZUFBZSxDQUFDRyxXQUFoQixDQUE0QjtBQUN4QkMsUUFBQUEsSUFBSSxFQUFDLE9BRG1CLENBQ1Y7O0FBRFUsT0FBNUI7QUFHSDtBQUNKO0FBekNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIFN1YkNvbnRleHRWaWV3OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnJhbmtpbmdQYW5lbCA9IHRoaXMuU3ViQ29udGV4dFZpZXcucGFyZW50O1xuICAgICAgICB0aGlzLnJhbmtpbmdQYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5TdWJDb250ZXh0Vmlldy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5TdWJDb250ZXh0Vmlldy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJhbmtpbmdQYW5lbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyDliKTmlq3mmK/lkKbmmK/lvq7kv6HlubPlj7BcbiAgICAgICAgaWYod2luZG93Wyd3eCddKSB7XG4gICAgICAgICAgICAvLyDnu5nlrZDln5/lj5HpgIHmtojmga9cbiAgICAgICAgICAgIHZhciBvcGVuRGF0YUNvbnRleHQgPSB3eC5nZXRPcGVuRGF0YUNvbnRleHQoKTtcbiAgICAgICAgICAgIG9wZW5EYXRhQ29udGV4dC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdGV4dDonc2hvd1JhbmsnLCAvLyDlnKjlrZDln5/kuK3osIPnlKjor6Xlh73mlbBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuU3ViQ29udGV4dFZpZXcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmFua2luZ1BhbmVsLmFjdGl2ZSA9IGZhbHNlOyAgXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpuaYr+W+ruS/oeW5s+WPsFxuICAgICAgICBpZih3aW5kb3dbJ3d4J10pIHtcbiAgICAgICAgICAgIC8vIOe7meWtkOWfn+WPkemAgea2iOaBr1xuICAgICAgICAgICAgdmFyIG9wZW5EYXRhQ29udGV4dCA9IHd4LmdldE9wZW5EYXRhQ29udGV4dCgpO1xuICAgICAgICAgICAgb3BlbkRhdGFDb250ZXh0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OidjbGVhcicsIC8vIOa4heepuuaOkuihjOamnFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gIFxuICAgIH1cblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/InitColor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4d96OWm9tN55NaTCWZRFtj', 'InitColor');
// scripts/InitColor.js

"use strict";

/**
 * 改变过关关卡颜色
 */
cc.Class({
  "extends": cc.Component,

  /**
   * 初始按钮颜色
   */
  initButton: function initButton() {
    var levels = this.node.getChildren();
    cc.loader.loadRes("button/stage_passed", cc.SpriteFrame, function (err, spriteFrame) {
      for (var i = 0; i < 9; i++) {
        var key = levels[i].name;

        if (cc.sys.localStorage.getItem(key)) {
          // 更换字体颜色
          levels[i].getChildByName('Label').color = new cc.color(255, 217, 102, 255); // 更换按钮图片

          levels[i].getComponent(cc.Button).normalSprite = spriteFrame;
        }
      }
    });
  },

  /**
   * 初始标题颜色
   */
  initTitle: function initTitle() {
    var index = this.node.parent.getComponents(cc.Component)[1].index;

    if (cc.sys.localStorage.getItem('Level' + index)) {
      // 更换标题颜色
      this.node.color = new cc.color(255, 217, 102, 255);
    }
  },

  /**
   * 初始化章节颜色, 用与场景ChoiceCap
   */
  initChapter: function initChapter() {
    // 获取全部通关章节
    var caps = new Array();

    for (var i = 1; i <= 5; i++) {
      var flag = true;

      for (var j = (i - 1) * 9 + 1; j <= 9 * i; j++) {
        if (!cc.sys.localStorage.getItem('Level' + j)) {
          flag = false;
          break;
        }
      }

      if (flag) {
        var name = 'Canvas/BackGround/Chapter' + i;
        caps[i] = cc.find(name);
      }
    } // 更改章节样式


    cc.loader.loadRes("button/chap_passed", cc.SpriteFrame, function (err, spriteFrame) {
      for (var i = 1; i <= 5; i++) {
        if (caps[i]) {
          // 更换字体颜色
          caps[i].getChildByName('Label').color = new cc.color(255, 217, 102, 255); // 更换按钮图片

          caps[i].getComponent(cc.Button).normalSprite = spriteFrame;
        }
      }
    });
  },
  start: function start() {
    if (this.node.name == 'Levels') this.initButton();else if (this.node.name == 'Title') this.initTitle();else this.initChapter();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5pdENvbG9yLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJpbml0QnV0dG9uIiwibGV2ZWxzIiwibm9kZSIsImdldENoaWxkcmVuIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJpIiwia2V5IiwibmFtZSIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXRDaGlsZEJ5TmFtZSIsImNvbG9yIiwiZ2V0Q29tcG9uZW50IiwiQnV0dG9uIiwibm9ybWFsU3ByaXRlIiwiaW5pdFRpdGxlIiwiaW5kZXgiLCJwYXJlbnQiLCJnZXRDb21wb25lbnRzIiwiaW5pdENoYXB0ZXIiLCJjYXBzIiwiQXJyYXkiLCJmbGFnIiwiaiIsImZpbmQiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQOztBQUdMOzs7QUFHQUMsRUFBQUEsVUFOSyx3QkFNUTtBQUNULFFBQUlDLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFdBQVYsRUFBYjtBQUVBTixJQUFBQSxFQUFFLENBQUNPLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixxQkFBbEIsRUFBeUNSLEVBQUUsQ0FBQ1MsV0FBNUMsRUFBeUQsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO0FBQ2pGLFdBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO0FBRXZCLFlBQUlDLEdBQUcsR0FBR1QsTUFBTSxDQUFDUSxDQUFELENBQU4sQ0FBVUUsSUFBcEI7O0FBQ0EsWUFBR2QsRUFBRSxDQUFDZSxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCSixHQUE1QixDQUFILEVBQXFDO0FBQ2pDO0FBQ0FU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LEtBQUs1QixJQUFMLENBQVVTLElBQVYsSUFBa0IsUUFBckIsRUFBK0IsS0FBS1gsVUFBTCxHQUEvQixLQUNLLElBQUcsS0FBS0UsSUFBTCxDQUFVUyxJQUFWLElBQWtCLE9BQXJCLEVBQThCLEtBQUtTLFNBQUwsR0FBOUIsS0FDQSxLQUFLSSxXQUFMO0FBQ1I7QUF6RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmlLnlj5jov4flhbPlhbPljaHpopzoibJcbiAqL1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIC8qKlxuICAgICAqIOWIneWni+aMiemSruminOiJslxuICAgICAqL1xuICAgIGluaXRCdXR0b24oKSB7XG4gICAgICAgIHZhciBsZXZlbHMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRyZW4oKTtcbiBcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJidXR0b24vc3RhZ2VfcGFzc2VkXCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDk7IGkrKykge1xuXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGxldmVsc1tpXS5uYW1lO1xuICAgICAgICAgICAgICAgIGlmKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOabtOaNouWtl+S9k+minOiJslxuICAgICAgICAgICAgICAgICAgICBsZXZlbHNbaV0uZ2V0Q2hpbGRCeU5hbWUoJ0xhYmVsJykuY29sb3IgPSBuZXcgY2MuY29sb3IoMjU1LCAyMTcsIDEwMiwgMjU1KTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5pu05o2i5oyJ6ZKu5Zu+54mHXG4gICAgICAgICAgICAgICAgICAgIGxldmVsc1tpXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5ub3JtYWxTcHJpdGUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cblxuICAgIC8qKlxuICAgICAqIOWIneWni+agh+mimOminOiJslxuICAgICAqL1xuICAgIGluaXRUaXRsZSgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudClbMV0uaW5kZXg7XG4gICAgICAgIGlmKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTGV2ZWwnICsgaW5kZXgpKSB7XG4gICAgICAgICAgICAvLyDmm7TmjaLmoIfpopjpopzoibJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jb2xvciA9IG5ldyBjYy5jb2xvcigyNTUsIDIxNywgMTAyLCAyNTUpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMlueroOiKguminOiJsiwg55So5LiO5Zy65pmvQ2hvaWNlQ2FwXG4gICAgICovXG4gICAgaW5pdENoYXB0ZXIoKSB7XG4gICAgICAgIC8vIOiOt+WPluWFqOmDqOmAmuWFs+eroOiKglxuICAgICAgICB2YXIgY2FwcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDw9IDU7IGkrKykge1xuICAgICAgICAgICAgdmFyIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgZm9yKHZhciBqID0gKGktMSkgKiA5ICsgMTsgaiA8PSA5ICogaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgaWYoIWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTGV2ZWwnICsgaikpIHtcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gIFxuICAgICAgICAgICAgaWYoZmxhZykge1xuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gJ0NhbnZhcy9CYWNrR3JvdW5kL0NoYXB0ZXInICsgaTtcbiAgICAgICAgICAgICAgICBjYXBzW2ldID0gY2MuZmluZChuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOabtOaUueeroOiKguagt+W8j1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImJ1dHRvbi9jaGFwX3Bhc3NlZFwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPD0gNTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYoY2Fwc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDmm7TmjaLlrZfkvZPpopzoibJcbiAgICAgICAgICAgICAgICAgICAgY2Fwc1tpXS5nZXRDaGlsZEJ5TmFtZSgnTGFiZWwnKS5jb2xvciA9IG5ldyBjYy5jb2xvcigyNTUsIDIxNywgMTAyLCAyNTUpO1xuICAgICAgICAgICAgICAgICAgICAvLyDmm7TmjaLmjInpkq7lm77niYdcbiAgICAgICAgICAgICAgICAgICAgY2Fwc1tpXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5ub3JtYWxTcHJpdGUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYodGhpcy5ub2RlLm5hbWUgPT0gJ0xldmVscycpIHRoaXMuaW5pdEJ1dHRvbigpO1xuICAgICAgICBlbHNlIGlmKHRoaXMubm9kZS5uYW1lID09ICdUaXRsZScpIHRoaXMuaW5pdFRpdGxlKCk7XG4gICAgICAgIGVsc2UgdGhpcy5pbml0Q2hhcHRlcigpO1xuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PieceManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4b07vA7axPm7uuiHi3YyxC', 'PieceManager');
// scripts/PieceManager.js

"use strict";

/**
 * 管理所有棋子的类
 * 
 * @property {cc.Node[]} map 存所有格子引用的数组
 * 
 * @property {cc.Node[]} pieces 存所有棋子引用的数组
 */
cc.Class({
  "extends": cc.Component,

  /**
   * 初始化
   */
  start: function start() {
    this.pieces = [];
    this.pieces = this.node.getChildren(); // 获取所有格子对象的引用

    this.map = this.node.parent.getComponent("CheckerBoard").map; // 将每个格子的引用传递到棋子上

    for (var i in this.pieces) {
      this.pieces[i].grids = this.map;
    }
  },

  /**
   * 根据格子的状态点亮格子
   */
  enlighten: function enlighten() {
    var grids = this.map;

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        var grid = grids[i][j];
        if (grid.flag == 0) continue;

        if (grid.nums > 0) {
          grid.flag = 2;
        } else {
          grid.flag = 1;
        } // 发送事件信息，调用repaint方法


        grid.emit("flag_changed");
      }
    }
  },

  /**
   * 通关后禁止所有棋子的脚本
   */
  stopAction: function stopAction() {
    for (var i in this.pieces) {
      this.pieces[i].getComponents(cc.Component)[1].destroy();
    }
  },

  /**
  * 检查是否通关
  * @returns {Boolean} 通关返回true, 反之返回false
  */
  checkPass: function checkPass() {
    var canvas = cc.find('Canvas');
    var path = canvas.getComponents(cc.Component)[1].path;
    var grids = this.map;

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        if (path[i][j] == 1 && grids[i][j].flag != 2) {
          return false;
        }
      }
    }

    return true;
  },

  /**
   * 过关动画呈现
   */
  show: function show() {
    var canvas = cc.find('Canvas');
    var grids = this.map;
    var path = canvas.getComponents(cc.Component)[1].path; // 查找起始点

    var begin = function () {
      for (var i = 0; i < 10; i++) {
        if (path[9][i] == 1) return cc.v2(9, i);
      }

      for (var i = 9; i >= 0; i--) {
        if (path[i][0] == 1) return cc.v2(i, 0);
      }

      for (var i = 0; i < 10; i++) {
        if (path[0][i] == 1) return cc.v2(0, i);
      }

      for (var i = 0; i < 10; i++) {
        if (path[i][9] == 1) return cc.v2(i, 9);
      }

      return null;
    }(); // 顺序获取路径上每格


    var dirx = new Array(0, 1, 0, -1);
    var diry = new Array(1, 0, -1, 0);
    var vist = new Array();
    var paint = new Array();
    vist[begin] = true;

    for (var nx = begin.x, ny = begin.y;;) {
      paint.push(grids[nx][ny]);
      var flag = false;

      for (var i = 0; i < 4; i++) {
        var x = nx + dirx[i];
        var y = ny + diry[i];
        var t = cc.v2(x, y);

        if (x < 10 && x >= 0 && y < 10 && y >= 0 && path[x][y] == 1 && !vist.hasOwnProperty(t)) {
          vist[t] = true;
          nx = x, ny = y;
          flag = true;
          break;
        }
      } // 当前已经是最后一个格子


      if (!flag) break;
    } // 更改格子背景


    cc.loader.loadRes("grid/pass", cc.SpriteFrame, function (err, spriteFrame) {
      for (var index in paint) {
        (function (index, obj, pic) {
          // 通过回调函数间隔更换背景
          obj.getComponent('Grid').scheduleOnce(function () {
            obj.getComponent(cc.Sprite).spriteFrame = pic;
          }, index * 0.018);
        })(index, paint[index], spriteFrame);
      }
    });
  },

  /**
   * 通关后执行行为
   */
  passedAction: function passedAction() {
    // 禁止棋子拖动
    this.stopAction(); // 过关弹窗

    var self = this.node;
    cc.loader.loadRes("alert", cc.Prefab, function (err, prefab) {
      var alert = cc.instantiate(prefab);
      self.parent.addChild(alert);
      alert.setPosition(cc.v2(0, -452.5));
    });
    this.show(); // 通关音效

    cc.loader.loadRes("music/pass", cc.AudioClip, function (err, clip) {
      cc.audioEngine.play(clip, false, 1);
    }); // 加载文字科普

    cc.loader.loadRes("describe/1", cc.Prefab, function (err, prefab) {
      var alert = cc.instantiate(prefab); // 设置节点层级在最上层

      alert.zIndex = 100;
      self.parent.addChild(alert);
      alert.setPosition(cc.v2(100, -100));
    }); // 禁用帮助按钮

    if (cc.find('Canvas/TipButton')) cc.find('Canvas/TipButton').active = false; // 记录通过的关卡到缓存

    var canvas = cc.find('Canvas');
    var index = canvas.getComponents(cc.Component)[1].index;
    cc.sys.localStorage.setItem('Level' + index, true); // 更新缓存通关总数

    var cnt = 0;

    for (var i = 1; i <= 45; i++) {
      if (cc.sys.localStorage.getItem('Level' + i)) {
        cnt++;
      }
    }

    var pastCnt = cc.sys.localStorage.getItem('totalPassed');

    if (pastCnt == null && pastCnt < cnt) {
      cc.sys.localStorage.setItem('totalPassed', cnt);
    } // TX云存储当前用户的总过关数


    if (window['wx']) {
      var kvDataList = new Array();
      kvDataList.push({
        //标签 存储的当前游戏种类的标签
        key: 'totalPassed',
        value: String(cnt)
      });
      wx.setUserCloudStorage({
        KVDataList: kvDataList,
        success: function success(e) {
          console.log('向wx存储用户数据成功');
          console.log(e);
        },
        fail: function fail(e) {
          console.log('向wx存储用户数据失败');
          console.log(e);
        }
      });
    }
  },

  /**
   * 更新所有棋子
   */
  updateAll: function updateAll() {
    // 重置方格
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        this.map[i][j].nums = 0;
      }
    } // 将棋盘内所有红棋设为生效


    for (var i in this.pieces) {
      var piece = this.pieces[i];

      if (piece.type == 0 && piece.isInRange) {
        piece.disable = false;
      }
    } // 更新黑棋以禁用受攻击的红棋


    for (var i in this.pieces) {
      var piece = this.pieces[i];

      if (piece.type == 1) {
        piece.getComponents(cc.Component)[1].setflag(piece.gx, piece.gy);
      }
    } // 更新红棋


    for (var i in this.pieces) {
      var piece = this.pieces[i];

      if (piece.type == 0 && piece.isInRange && piece.disable == false) {
        piece.getComponents(cc.Component)[1].setflag(1, piece.gx, piece.gy);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGllY2VNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJzdGFydCIsInBpZWNlcyIsIm5vZGUiLCJnZXRDaGlsZHJlbiIsIm1hcCIsInBhcmVudCIsImdldENvbXBvbmVudCIsImkiLCJncmlkcyIsImVubGlnaHRlbiIsImoiLCJncmlkIiwiZmxhZyIsIm51bXMiLCJlbWl0Iiwic3RvcEFjdGlvbiIsImdldENvbXBvbmVudHMiLCJkZXN0cm95IiwiY2hlY2tQYXNzIiwiY2FudmFzIiwiZmluZCIsInBhdGgiLCJzaG93IiwiYmVnaW4iLCJ2MiIsImRpcngiLCJBcnJheSIsImRpcnkiLCJ2aXN0IiwicGFpbnQiLCJueCIsIngiLCJueSIsInkiLCJwdXNoIiwidCIsImhhc093blByb3BlcnR5IiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJpbmRleCIsIm9iaiIsInBpYyIsInNjaGVkdWxlT25jZSIsIlNwcml0ZSIsInBhc3NlZEFjdGlvbiIsInNlbGYiLCJQcmVmYWIiLCJwcmVmYWIiLCJhbGVydCIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsIkF1ZGlvQ2xpcCIsImNsaXAiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJ6SW5kZXgiLCJhY3RpdmUiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY250IiwiZ2V0SXRlbSIsInBhc3RDbnQiLCJ3aW5kb3ciLCJrdkRhdGFMaXN0Iiwia2V5IiwidmFsdWUiLCJTdHJpbmciLCJ3eCIsInNldFVzZXJDbG91ZFN0b3JhZ2UiLCJLVkRhdGFMaXN0Iiwic3VjY2VzcyIsImUiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsInVwZGF0ZUFsbCIsInBpZWNlIiwidHlwZSIsImlzSW5SYW5nZSIsImRpc2FibGUiLCJzZXRmbGFnIiwiZ3giLCJneSJdLCJtYXBwaW5ncyI6Ijs7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LENBQWQsSUFBbUJELEtBQUssQ0FBQ0UsU0FBNUIsRUFBdUM7QUFDbkNGLFFBQUFBLEtBQUssQ0FBQ0csT0FBTixHQUFnQixLQUFoQjtBQUNIO0FBQ0osS0FmaUIsQ0FpQmxCOzs7QUFDQSxTQUFJLElBQUk3RSxDQUFSLElBQWEsS0FBS04sTUFBbEIsRUFBMEI7QUFDdEIsVUFBSWdGLEtBQUssR0FBRyxLQUFLaEYsTUFBTCxDQUFZTSxDQUFaLENBQVo7O0FBQ0EsVUFBRzBFLEtBQUssQ0FBQ0MsSUFBTixJQUFjLENBQWpCLEVBQW9CO0FBQ2hCRCxRQUFBQSxLQUFLLENBQUNqRSxhQUFOLENBQW9CbkIsRUFBRSxDQUFDRSxTQUF2QixFQUFrQyxDQUFsQyxFQUFxQ3NGLE9BQXJDLENBQTZDSixLQUFLLENBQUNLLEVBQW5ELEVBQXVETCxLQUFLLENBQUNNLEVBQTdEO0FBQ0g7QUFDSixLQXZCaUIsQ0F5QmxCOzs7QUFDQSxTQUFJLElBQUloRixDQUFSLElBQWEsS0FBS04sTUFBbEIsRUFBMEI7QUFDdEIsVUFBSWdGLEtBQUssR0FBRyxLQUFLaEYsTUFBTCxDQUFZTSxDQUFaLENBQVo7O0FBQ0EsVUFBRzBFLEtBQUssQ0FBQ0MsSUFBTixJQUFjLENBQWQsSUFBbUJELEtBQUssQ0FBQ0UsU0FBekIsSUFBc0NGLEtBQUssQ0FBQ0csT0FBTixJQUFpQixLQUExRCxFQUFpRTtBQUM3REgsUUFBQUEsS0FBSyxDQUFDakUsYUFBTixDQUFvQm5CLEVBQUUsQ0FBQ0UsU0FBdkIsRUFBa0MsQ0FBbEMsRUFBcUNzRixPQUFyQyxDQUE2QyxDQUE3QyxFQUFnREosS0FBSyxDQUFDSyxFQUF0RCxFQUEwREwsS0FBSyxDQUFDTSxFQUFoRTtBQUNIO0FBQ0o7QUFDSjtBQTdQSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOeuoeeQhuaJgOacieaji+WtkOeahOexu1xuICogXG4gKiBAcHJvcGVydHkge2NjLk5vZGVbXX0gbWFwIOWtmOaJgOacieagvOWtkOW8leeUqOeahOaVsOe7hFxuICogXG4gKiBAcHJvcGVydHkge2NjLk5vZGVbXX0gcGllY2VzIOWtmOaJgOacieaji+WtkOW8leeUqOeahOaVsOe7hFxuICovXG5jYy5DbGFzcyh7XG5cbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJZcbiAgICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBpZWNlcyA9IFtdO1xuICAgICAgICB0aGlzLnBpZWNlcyA9IHRoaXMubm9kZS5nZXRDaGlsZHJlbigpO1xuXG4gICAgICAgIC8vIOiOt+WPluaJgOacieagvOWtkOWvueixoeeahOW8leeUqFxuICAgICAgICB0aGlzLm1hcCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiQ2hlY2tlckJvYXJkXCIpLm1hcDtcbiAgICAgICAgXG4gICAgICAgIC8vIOWwhuavj+S4quagvOWtkOeahOW8leeUqOS8oOmAkuWIsOaji+WtkOS4ilxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5waWVjZXMpIHtcbiAgICAgICAgICAgIHRoaXMucGllY2VzW2ldLmdyaWRzID0gdGhpcy5tYXA7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmoLnmja7moLzlrZDnmoTnirbmgIHngrnkuq7moLzlrZBcbiAgICAgKi9cbiAgICBlbmxpZ2h0ZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm1hcDtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCAxMDsgaisrKXtcbiAgICAgICAgICAgICAgICB2YXIgZ3JpZCA9IGdyaWRzW2ldW2pdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoZ3JpZC5mbGFnID09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgaWYoZ3JpZC5udW1zID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBncmlkLmZsYWcgPSAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuZmxhZyA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g5Y+R6YCB5LqL5Lu25L+h5oGv77yM6LCD55SocmVwYWludOaWueazlVxuICAgICAgICAgICAgICAgIGdyaWQuZW1pdChcImZsYWdfY2hhbmdlZFwiKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuXG4gICAgLyoqXG4gICAgICog6YCa5YWz5ZCO56aB5q2i5omA5pyJ5qOL5a2Q55qE6ISa5pysXG4gICAgICovXG4gICAgc3RvcEFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnBpZWNlcykge1xuICAgICAgICAgICAgdGhpcy5waWVjZXNbaV0uZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpWzFdLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAgLyoqXG4gICAgICog5qOA5p+l5piv5ZCm6YCa5YWzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IOmAmuWFs+i/lOWbnnRydWUsIOWPjeS5i+i/lOWbnmZhbHNlXG4gICAgICovXG4gICAgY2hlY2tQYXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICB2YXIgcGF0aCA9IGNhbnZhcy5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudClbMV0ucGF0aDtcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5tYXA7XG5cbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCAxMDsgaisrKXtcbiAgICAgICAgICAgICAgICBpZihwYXRoW2ldW2pdID09IDEgJiYgZ3JpZHNbaV1bal0uZmxhZyAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBcbiAgICAvKipcbiAgICAgKiDov4flhbPliqjnlLvlkYjnjrBcbiAgICAgKi9cbiAgICBzaG93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm1hcDtcbiAgICAgICAgdmFyIHBhdGggPSBjYW52YXMuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpWzFdLnBhdGg7XG5cbiAgICAgICAgLy8g5p+l5om+6LW35aeL54K5XG4gICAgICAgIHZhciBiZWdpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDEwOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgaWYocGF0aFs5XVtpXSA9PSAxKSByZXR1cm4gY2MudjIoOSwgaSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKHZhciBpID0gOTsgaSA+PSAwOyBpLS0gKSB7XG4gICAgICAgICAgICAgICAgaWYocGF0aFtpXVswXSA9PSAxKSByZXR1cm4gY2MudjIoaSwgMCk7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgMTA7IGkrKyApIHtcbiAgICAgICAgICAgICAgICBpZihwYXRoWzBdW2ldID09IDEpIHJldHVybiBjYy52MigwLCBpKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgMTA7IGkrKyApIHtcbiAgICAgICAgICAgICAgICBpZihwYXRoW2ldWzldID09IDEpIHJldHVybiBjYy52MihpLCA5KTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSgpO1xuXG4gICAgICAgIC8vIOmhuuW6j+iOt+WPlui3r+W+hOS4iuavj+agvFxuICAgICAgICB2YXIgZGlyeCA9IG5ldyBBcnJheSgwLCAxLCAwLCAtMSk7XG4gICAgICAgIHZhciBkaXJ5ID0gbmV3IEFycmF5KDEsIDAsIC0xLCAwKTtcbiAgICAgICAgdmFyIHZpc3QgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdmFyIHBhaW50ID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdmlzdFtiZWdpbl0gPSB0cnVlO1xuICAgICAgICBmb3IodmFyIG54ID0gYmVnaW4ueCwgbnkgPSBiZWdpbi55OzspIHtcbiAgICAgICAgICAgIHBhaW50LnB1c2goZ3JpZHNbbnhdW255XSk7XG5cbiAgICAgICAgICAgIHZhciBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHggPSBueCArIGRpcnhbaV07XG4gICAgICAgICAgICAgICAgdmFyIHkgPSBueSArIGRpcnlbaV07XG4gICAgICAgICAgICAgICAgdmFyIHQgPSBjYy52Mih4LCB5KTtcbiAgICAgICAgICAgICAgICBpZih4IDwgMTAgJiYgeCA+PSAwICYmIHkgPCAxMCAmJiB5ID49IDAgJiYgXG4gICAgICAgICAgICAgICAgICAgIHBhdGhbeF1beV0gPT0gMSAmJiAhdmlzdC5oYXNPd25Qcm9wZXJ0eSh0KSkge1xuICAgICAgICAgICAgICAgICAgICB2aXN0W3RdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbnggPSB4LCBueSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlvZPliY3lt7Lnu4/mmK/mnIDlkI7kuIDkuKrmoLzlrZBcbiAgICAgICAgICAgIGlmKCFmbGFnKSBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOabtOaUueagvOWtkOiDjOaZr1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImdyaWQvcGFzc1wiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcblxuICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiBwYWludCkge1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbihpbmRleCwgb2JqLCBwaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6YCa6L+H5Zue6LCD5Ye95pWw6Ze06ZqU5pu05o2i6IOM5pmvXG4gICAgICAgICAgICAgICAgICAgIG9iai5nZXRDb21wb25lbnQoJ0dyaWQnKS5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gcGljO1xuICAgICAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDAuMDE4KTtcblxuICAgICAgICAgICAgICAgIH0pKGluZGV4LCBwYWludFtpbmRleF0sIHNwcml0ZUZyYW1lKTsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDpgJrlhbPlkI7miafooYzooYzkuLpcbiAgICAgKi9cbiAgICBwYXNzZWRBY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDnpoHmraLmo4vlrZDmi5bliqhcbiAgICAgICAgdGhpcy5zdG9wQWN0aW9uKCk7XG5cbiAgICAgICAgLy8g6L+H5YWz5by556qXXG4gICAgICAgIHZhciBzZWxmID0gdGhpcy5ub2RlO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImFsZXJ0XCIsIGNjLlByZWZhYiwgZnVuY3Rpb24oZXJyLCBwcmVmYWIpIHtcbiAgICAgICAgICAgIHZhciBhbGVydCA9ICBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgc2VsZi5wYXJlbnQuYWRkQ2hpbGQoYWxlcnQpO1xuICAgICAgICBcbiAgICAgICAgICAgIGFsZXJ0LnNldFBvc2l0aW9uKGNjLnYyKDAsIC00NTIuNSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNob3coKTtcblxuICAgICAgICAvLyDpgJrlhbPpn7PmlYhcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJtdXNpYy9wYXNzXCIsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBmYWxzZSwgMSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIOWKoOi9veaWh+Wtl+enkeaZrlxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImRlc2NyaWJlLzFcIiwgY2MuUHJlZmFiLCBmdW5jdGlvbihlcnIsIHByZWZhYikge1xuICAgICAgICAgICAgdmFyIGFsZXJ0ID0gIGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAvLyDorr7nva7oioLngrnlsYLnuqflnKjmnIDkuIrlsYJcbiAgICAgICAgICAgIGFsZXJ0LnpJbmRleCA9IDEwMDtcbiAgICAgICAgICAgIHNlbGYucGFyZW50LmFkZENoaWxkKGFsZXJ0KTtcbiAgICAgICAgICAgIGFsZXJ0LnNldFBvc2l0aW9uKGNjLnYyKDEwMCwgLTEwMCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDnpoHnlKjluK7liqnmjInpkq5cbiAgICAgICAgaWYoY2MuZmluZCgnQ2FudmFzL1RpcEJ1dHRvbicpKVxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL1RpcEJ1dHRvbicpLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIOiusOW9lemAmui/h+eahOWFs+WNoeWIsOe8k+WtmFxuICAgICAgICB2YXIgY2FudmFzID0gY2MuZmluZCgnQ2FudmFzJyk7XG4gICAgICAgIHZhciBpbmRleCA9IGNhbnZhcy5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudClbMV0uaW5kZXg7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTGV2ZWwnICsgaW5kZXgsIHRydWUpO1xuXG4gICAgICAgIC8vIOabtOaWsOe8k+WtmOmAmuWFs+aAu+aVsFxuICAgICAgICB2YXIgY250ID0gMDtcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8PSA0NTsgaSsrKSB7XG4gICAgICAgICAgICBpZihjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0xldmVsJyArIGkpKSB7XG4gICAgICAgICAgICAgICAgY250Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhc3RDbnQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvdGFsUGFzc2VkJyk7XG4gICAgICAgIGlmKHBhc3RDbnQgPT0gbnVsbCAmJiBwYXN0Q250IDwgY250KSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvdGFsUGFzc2VkJywgY250KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRY5LqR5a2Y5YKo5b2T5YmN55So5oi355qE5oC76L+H5YWz5pWwXG4gICAgICAgIGlmICh3aW5kb3dbJ3d4J10pe1xuICAgICAgICAgICAgdmFyIGt2RGF0YUxpc3QgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIGt2RGF0YUxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgLy/moIfnrb4g5a2Y5YKo55qE5b2T5YmN5ri45oiP56eN57G755qE5qCH562+XG4gICAgICAgICAgICAgICAga2V5OiAndG90YWxQYXNzZWQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBTdHJpbmcoY250KSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB3eC5zZXRVc2VyQ2xvdWRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICBLVkRhdGFMaXN0Omt2RGF0YUxpc3QsXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhlKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WQkXd45a2Y5YKo55So5oi35pWw5o2u5oiQ5YqfJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbChlKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WQkXd45a2Y5YKo55So5oi35pWw5o2u5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOabtOaWsOaJgOacieaji+WtkFxuICAgICAqL1xuICAgIHVwZGF0ZUFsbDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8g6YeN572u5pa55qC8XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwW2ldW2pdLm51bXMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgXG5cbiAgICAgICAgLy8g5bCG5qOL55uY5YaF5omA5pyJ57qi5qOL6K6+5Li655Sf5pWIXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnBpZWNlcykge1xuICAgICAgICAgICAgdmFyIHBpZWNlID0gdGhpcy5waWVjZXNbaV07XG4gICAgICAgICAgICBpZihwaWVjZS50eXBlID09IDAgJiYgcGllY2UuaXNJblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgcGllY2UuZGlzYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pu05paw6buR5qOL5Lul56aB55So5Y+X5pS75Ye755qE57qi5qOLXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnBpZWNlcykge1xuICAgICAgICAgICAgdmFyIHBpZWNlID0gdGhpcy5waWVjZXNbaV07XG4gICAgICAgICAgICBpZihwaWVjZS50eXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICBwaWVjZS5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudClbMV0uc2V0ZmxhZyhwaWVjZS5neCwgcGllY2UuZ3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pu05paw57qi5qOLXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnBpZWNlcykge1xuICAgICAgICAgICAgdmFyIHBpZWNlID0gdGhpcy5waWVjZXNbaV07XG4gICAgICAgICAgICBpZihwaWVjZS50eXBlID09IDAgJiYgcGllY2UuaXNJblJhbmdlICYmIHBpZWNlLmRpc2FibGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwaWVjZS5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudClbMV0uc2V0ZmxhZygxLCBwaWVjZS5neCwgcGllY2UuZ3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Piece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af29a5C4CdNTpoesp3udiW/', 'Piece');
// scripts/Piece.js

"use strict";

/**
 * 负责棋子的事件与交互的类
 * 
 * @property {cc.Node} node 该脚本挂载的节点
 * 
 * @property {Number} node.lastX 上一次棋子的x坐标
 * 
 * @property {Number} node.lastY 上一次棋子的x坐标
 * 
 * @property {Number} node.startX 棋子的初始x坐标
 * 
 * @property {Number} node.startY 棋子的初始y坐标
 * 
 * @property {Number} node.gx 棋子所处在格子的二维数组的行下标
 * 
 * @property {Number} node.gy 棋子所处在格子的二维数组的列下标
 * 
 * @property {Grid[]} node.grids 所有格子的引用数组
 * 
 * @property {PieceManager} node.manger 对所有棋子进行管理
 * 
 * @property {cc.Rect} node.range 棋盘所围成矩形
 * 
 * @property {Boolean} node.isInRange 标识棋子是否位于棋盘
 * 
 * @property {Boolean} node.disable 标识棋子是否失效 
 * 
 * @property {Boolean} node.type 标识棋子种类， 红棋为0， 黑棋为1
 */
cc.Class({
  "extends": cc.Component,

  /**
   * 标记棋子对周围格子的影响，将在子类中实现
   * @param {Number} status 1表示棋子下放, -1表示离开
   * @param {*} X 格子行下标
   * @param {*} Y 格子列下标
   */
  setflag: function setflag(status, X, Y) {},

  /**
   * 确定棋子是否属于当前格子, 若属于, 则更新棋子状态
   * @param {*} x 格子行下标
   * @param {*} y 格子列下标
   * @returns 属于返回true, 不属于返回false
   */
  fixGrid: function fixGrid(x, y) {
    var grid = this.node.grids[x][y]; // 该格子所在的矩形

    var size = grid.getContentSize();
    var rect = new cc.Rect(grid.x, grid.y - size.height, size.width, size.height);

    if (rect.contains(new cc.Vec2(this.node.x, this.node.y)) && grid.flag && !grid.hasPiece) {
      this.node.x = this.node.lastX = grid.x + size.width / 2;
      this.node.y = this.node.lastY = grid.y - size.height / 2;
      this.node.gx = x;
      this.node.gy = y;
      grid.hasPiece = true;
      grid.piece = this.node;
      this.node.isInRange = true;
      return true;
    }

    return false;
  },

  /**
   * 棋子开始拖动触发, 消除该棋子影响
   */
  onTouchStart: function onTouchStart(event) {
    if (this.isInRange) {
      this.grids[this.gx][this.gy].hasPiece = false; // 清除未失效棋子的影响

      if (!this.disable) {
        this.getComponents(cc.Component)[1].setflag(-1, this.gx, this.gy);
      }

      this.manger.enlighten();
    }
  },

  /**
   * 棋子拖动中, 持续更新棋子坐标
   */
  onTouchMove: function onTouchMove(event) {
    var delta = event.touch.getDelta();
    this.x += delta.x;
    this.y += delta.y;
  },

  /**
   * 当棋子下放时, 触发下放音效, 判断棋子是否落于某个格子, 更新所有格子状态，判断是否通关
   */
  onTouchEnd: function onTouchEnd(event) {
    // 下放音效
    var self = this;

    if (!self.putDownMusic) {
      cc.loader.loadRes("music/pieceDown", cc.AudioClip, function (err, clip) {
        self.putDownMusic = clip;
        cc.audioEngine.play(clip, false, 0.5); // 音量
      });
    } else {
      cc.audioEngine.play(self.putDownMusic, false, 1);
    } // 检查棋子是否被某个格子包含


    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        if (this.getComponents(cc.Component)[1].fixGrid(i, j)) {
          break;
        }
      }
    } // 棋子落点在棋盘外，回到起始点


    if (!this.range.contains(new cc.Vec2(this.x, this.y))) {
      this.x = this.lastX = this.startX;
      this.y = this.lastY = this.startY;
      this.gx = undefined;
      this.isInRange = false;
    } else {
      //返回上一个位置
      if (this.gx != undefined) {
        this.grids[this.gx][this.gy].hasPiece = true;
      }

      this.x = this.lastX;
      this.y = this.lastY;
    } // 更新所有格子状态并进行点亮


    this.manger.updateAll();
    this.manger.enlighten(); // 判断是否通关

    if (this.manger.checkPass()) {
      this.manger.passedAction();
    }
  },
  onLoad: function onLoad() {
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this.node);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this.node);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this.node);
  },
  onDestroy: function onDestroy() {
    this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this.node);
    this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this.node);
    this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this.node);
  },

  /**
   * 初始化
   */
  start: function start() {
    this.node.type = 0;
    this.node.disable = false;
    this.node.isInRange = false;
    this.node.startX = this.node.lastX = this.node.x;
    this.node.startY = this.node.lastY = this.node.y;
    this.node.manger = this.node.parent.getComponent("PieceManager"); // 棋盘所在矩形

    var grid = this.node.grids[9][0];
    var len = grid.getContentSize().width;
    this.node.range = new cc.Rect(grid.x, grid.y - len, len * 10, len * 10);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGllY2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInNldGZsYWciLCJzdGF0dXMiLCJYIiwiWSIsImZpeEdyaWQiLCJ4IiwieSIsImdyaWQiLCJub2RlIiwiZ3JpZHMiLCJzaXplIiwiZ2V0Q29udGVudFNpemUiLCJyZWN0IiwiUmVjdCIsImhlaWdodCIsIndpZHRoIiwiY29udGFpbnMiLCJWZWMyIiwiZmxhZyIsImhhc1BpZWNlIiwibGFzdFgiLCJsYXN0WSIsImd4IiwiZ3kiLCJwaWVjZSIsImlzSW5SYW5nZSIsIm9uVG91Y2hTdGFydCIsImV2ZW50IiwiZGlzYWJsZSIsImdldENvbXBvbmVudHMiLCJtYW5nZXIiLCJlbmxpZ2h0ZW4iLCJvblRvdWNoTW92ZSIsImRlbHRhIiwidG91Y2giLCJnZXREZWx0YSIsIm9uVG91Y2hFbmQiLCJzZWxmIiwicHV0RG93bk11c2ljIiwibG9hZGVyIiwibG9hZFJlcyIsIkF1ZGlvQ2xpcCIsImVyciIsImNsaXAiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJpIiwiaiIsInJhbmdlIiwic3RhcnRYIiwic3RhcnRZIiwidW5kZWZpbmVkIiwidXBkYXRlQWxsIiwiY2hlY2tQYXNzIiwicGFzc2VkQWN0aW9uIiwib25Mb2FkIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJUT1VDSF9NT1ZFIiwiVE9VQ0hfRU5EIiwib25EZXN0cm95Iiwib2ZmIiwic3RhcnQiLCJ0eXBlIiwicGFyZW50IiwiZ2V0Q29tcG9uZW50IiwibGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7O0FBR0w7Ozs7OztBQU1BQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUJDLENBQWpCLEVB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UzhELEdBQTdCLEVBQWtDQSxHQUFHLEdBQUcsRUFBeEMsRUFBNENBLEdBQUcsR0FBRyxFQUFsRCxDQUFsQjtBQUVIO0FBdEpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6LSf6LSj5qOL5a2Q55qE5LqL5Lu25LiO5Lqk5LqS55qE57G7XG4gKiBcbiAqIEBwcm9wZXJ0eSB7Y2MuTm9kZX0gbm9kZSDor6XohJrmnKzmjILovb3nmoToioLngrlcbiAqIFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IG5vZGUubGFzdFgg5LiK5LiA5qyh5qOL5a2Q55qEeOWdkOagh1xuICogXG4gKiBAcHJvcGVydHkge051bWJlcn0gbm9kZS5sYXN0WSDkuIrkuIDmrKHmo4vlrZDnmoR45Z2Q5qCHXG4gKiBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBub2RlLnN0YXJ0WCDmo4vlrZDnmoTliJ3lp4t45Z2Q5qCHXG4gKiBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBub2RlLnN0YXJ0WSDmo4vlrZDnmoTliJ3lp4t55Z2Q5qCHXG4gKiBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBub2RlLmd4IOaji+WtkOaJgOWkhOWcqOagvOWtkOeahOS6jOe7tOaVsOe7hOeahOihjOS4i+agh1xuICogXG4gKiBAcHJvcGVydHkge051bWJlcn0gbm9kZS5neSDmo4vlrZDmiYDlpITlnKjmoLzlrZDnmoTkuoznu7TmlbDnu4TnmoTliJfkuIvmoIdcbiAqIFxuICogQHByb3BlcnR5IHtHcmlkW119IG5vZGUuZ3JpZHMg5omA5pyJ5qC85a2Q55qE5byV55So5pWw57uEXG4gKiBcbiAqIEBwcm9wZXJ0eSB7UGllY2VNYW5hZ2VyfSBub2RlLm1hbmdlciDlr7nmiYDmnInmo4vlrZDov5vooYznrqHnkIZcbiAqIFxuICogQHByb3BlcnR5IHtjYy5SZWN0fSBub2RlLnJhbmdlIOaji+ebmOaJgOWbtOaIkOefqeW9olxuICogXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IG5vZGUuaXNJblJhbmdlIOagh+ivhuaji+WtkOaYr+WQpuS9jeS6juaji+ebmFxuICogXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IG5vZGUuZGlzYWJsZSDmoIfor4bmo4vlrZDmmK/lkKblpLHmlYggXG4gKiBcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbm9kZS50eXBlIOagh+ivhuaji+WtkOenjeexu++8jCDnuqLmo4vkuLow77yMIOm7keaji+S4ujFcbiAqL1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcbiBcbiAgICAvKipcbiAgICAgKiDmoIforrDmo4vlrZDlr7nlkajlm7TmoLzlrZDnmoTlvbHlk43vvIzlsIblnKjlrZDnsbvkuK3lrp7njrBcbiAgICAgKiBAcGFyYW0ge051bWJlcn0gc3RhdHVzIDHooajnpLrmo4vlrZDkuIvmlL4sIC0x6KGo56S656a75byAXG4gICAgICogQHBhcmFtIHsqfSBYIOagvOWtkOihjOS4i+agh1xuICAgICAqIEBwYXJhbSB7Kn0gWSDmoLzlrZDliJfkuIvmoIdcbiAgICAgKi9cbiAgICBzZXRmbGFnOiBmdW5jdGlvbihzdGF0dXMsIFgsIFkpIHt9LFxuIFxuXG4gICAgLyoqXG4gICAgICog56Gu5a6a5qOL5a2Q5piv5ZCm5bGe5LqO5b2T5YmN5qC85a2QLCDoi6XlsZ7kuo4sIOWImeabtOaWsOaji+WtkOeKtuaAgVxuICAgICAqIEBwYXJhbSB7Kn0geCDmoLzlrZDooYzkuIvmoIdcbiAgICAgKiBAcGFyYW0geyp9IHkg5qC85a2Q5YiX5LiL5qCHXG4gICAgICogQHJldHVybnMg5bGe5LqO6L+U5ZuedHJ1ZSwg5LiN5bGe5LqO6L+U5ZueZmFsc2VcbiAgICAgKi9cbiAgICBmaXhHcmlkOiBmdW5jdGlvbih4LCB5KSB7XG4gICAgICAgIHZhciBncmlkID0gdGhpcy5ub2RlLmdyaWRzW3hdW3ldO1xuXG4gICAgICAgIC8vIOivpeagvOWtkOaJgOWcqOeahOefqeW9olxuICAgICAgICB2YXIgc2l6ZSA9IGdyaWQuZ2V0Q29udGVudFNpemUoKTtcbiAgICAgICAgdmFyIHJlY3QgPSBuZXcgY2MuUmVjdChncmlkLngsIGdyaWQueSAtIHNpemUuaGVpZ2h0LCBzaXplLndpZHRoLCBzaXplLmhlaWdodCk7XG5cbiAgICAgICAgaWYocmVjdC5jb250YWlucyhuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpKSAmJiBncmlkLmZsYWcgJiYgIWdyaWQuaGFzUGllY2UpIHtcblxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSB0aGlzLm5vZGUubGFzdFggPSBncmlkLnggKyBzaXplLndpZHRoIC8gMjtcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5ub2RlLmxhc3RZID0gZ3JpZC55IC0gc2l6ZS5oZWlnaHQgLyAyO1xuXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ3ggPSB4O1xuICAgICAgICAgICAgdGhpcy5ub2RlLmd5ID0geTtcblxuICAgICAgICAgICAgZ3JpZC5oYXNQaWVjZSA9IHRydWU7IFxuICAgICAgICAgICAgZ3JpZC5waWVjZSA9IHRoaXMubm9kZTtcblxuICAgICAgICAgICAgdGhpcy5ub2RlLmlzSW5SYW5nZSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgIFxuICAgICAgICB9IFxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5qOL5a2Q5byA5aeL5ouW5Yqo6Kem5Y+RLCDmtojpmaTor6Xmo4vlrZDlvbHlk41cbiAgICAgKi9cbiAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGlmKHRoaXMuaXNJblJhbmdlKSB7XG4gICAgICAgICAgICB0aGlzLmdyaWRzW3RoaXMuZ3hdW3RoaXMuZ3ldLmhhc1BpZWNlID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIOa4hemZpOacquWkseaViOaji+WtkOeahOW9seWTjVxuICAgICAgICAgICAgaWYoIXRoaXMuZGlzYWJsZSkgeyBcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudHMoY2MuQ29tcG9uZW50KVsxXS5zZXRmbGFnKC0xLCB0aGlzLmd4LCB0aGlzLmd5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWFuZ2VyLmVubGlnaHRlbigpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOaji+WtkOaLluWKqOS4rSwg5oyB57ut5pu05paw5qOL5a2Q5Z2Q5qCHXG4gICAgICovXG4gICAgb25Ub3VjaE1vdmU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIHZhciBkZWx0YSA9IGV2ZW50LnRvdWNoLmdldERlbHRhKCk7XG4gICAgICAgIHRoaXMueCArPSBkZWx0YS54O1xuICAgICAgICB0aGlzLnkgKz0gZGVsdGEueTtcbiAgICB9LFxuICAgIFxuXG4gICAgLyoqXG4gICAgICog5b2T5qOL5a2Q5LiL5pS+5pe2LCDop6blj5HkuIvmlL7pn7PmlYgsIOWIpOaWreaji+WtkOaYr+WQpuiQveS6juafkOS4quagvOWtkCwg5pu05paw5omA5pyJ5qC85a2Q54q25oCB77yM5Yik5pat5piv5ZCm6YCa5YWzXG4gICAgICovXG4gICAgb25Ub3VjaEVuZDogZnVuY3Rpb24oZXZlbnQpIHtcblxuICAgICAgICAvLyDkuIvmlL7pn7PmlYhcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIXNlbGYucHV0RG93bk11c2ljKSB7XG4gICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwibXVzaWMvcGllY2VEb3duXCIsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xuICAgICAgICAgICAgICAgIHNlbGYucHV0RG93bk11c2ljID0gY2xpcDtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGZhbHNlLCAwLjUpOy8vIOmfs+mHj1xuICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShzZWxmLnB1dERvd25NdXNpYywgZmFsc2UsIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qOA5p+l5qOL5a2Q5piv5ZCm6KKr5p+Q5Liq5qC85a2Q5YyF5ZCrXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpWzFdLmZpeEdyaWQoaSwgaikpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaji+WtkOiQveeCueWcqOaji+ebmOWklu+8jOWbnuWIsOi1t+Wni+eCuVxuICAgICAgICBpZighdGhpcy5yYW5nZS5jb250YWlucyhuZXcgY2MuVmVjMih0aGlzLngsIHRoaXMueSkpKSB7XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLmxhc3RYID0gdGhpcy5zdGFydFg7XG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLmxhc3RZID0gdGhpcy5zdGFydFk7XG4gICAgICAgICAgICB0aGlzLmd4ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgdGhpcy5pc0luUmFuZ2UgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHsgICAgLy/ov5Tlm57kuIrkuIDkuKrkvY3nva5cbiAgICAgICAgICAgIGlmKHRoaXMuZ3ggIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkc1t0aGlzLmd4XVt0aGlzLmd5XS5oYXNQaWVjZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLmxhc3RYO1xuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5sYXN0WTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOabtOaWsOaJgOacieagvOWtkOeKtuaAgeW5tui/m+ihjOeCueS6rlxuICAgICAgICB0aGlzLm1hbmdlci51cGRhdGVBbGwoKTtcbiAgICAgICAgdGhpcy5tYW5nZXIuZW5saWdodGVuKCk7IFxuXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpumAmuWFs1xuICAgICAgICBpZih0aGlzLm1hbmdlci5jaGVja1Bhc3MoKSkge1xuICAgICAgICAgICAgdGhpcy5tYW5nZXIucGFzc2VkQWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcy5ub2RlKTsgXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMubm9kZSk7IFxuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3kgKCkge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcy5ub2RlKTtcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzLm5vZGUpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzLm5vZGUpOyBcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyWXG4gICAgICovXG4gICAgc3RhcnQgKCkge1xuXG4gICAgICAgIHRoaXMubm9kZS50eXBlID0gMDtcblxuICAgICAgICB0aGlzLm5vZGUuZGlzYWJsZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubm9kZS5pc0luUmFuZ2UgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLm5vZGUuc3RhcnRYID0gdGhpcy5ub2RlLmxhc3RYID0gdGhpcy5ub2RlLng7XG4gICAgICAgIHRoaXMubm9kZS5zdGFydFkgPSB0aGlzLm5vZGUubGFzdFkgPSB0aGlzLm5vZGUueTtcblxuICAgICAgICB0aGlzLm5vZGUubWFuZ2VyID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJQaWVjZU1hbmFnZXJcIik7XG5cbiAgICAgICAgLy8g5qOL55uY5omA5Zyo55+p5b2iXG4gICAgICAgIHZhciBncmlkID0gdGhpcy5ub2RlLmdyaWRzWzldWzBdO1xuICAgICAgICB2YXIgbGVuID0gZ3JpZC5nZXRDb250ZW50U2l6ZSgpLndpZHRoO1xuICAgICAgICB0aGlzLm5vZGUucmFuZ2UgPSBuZXcgY2MuUmVjdChncmlkLngsIGdyaWQueSAtIGxlbiwgbGVuICogMTAsIGxlbiAqIDEwKTtcblxuICAgIH0sXG5cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Share.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fe4a8XMOsNGRZbmAWXEoJEa', 'Share');
// scripts/Share.js

"use strict";

/**
 * 微信被动分享
 */
cc.Class({
  "extends": cc.Component,
  start: function start() {
    wx.showShareMenu({
      withShareTicket: true
    }); //开启右上角的分享按钮
  },

  /**
   * 被动分享
   */
  onLoad: function onLoad() {
    //分享按钮事件监听
    cc.loader.loadRes("share", function (err, data) {
      wx.onShareAppMessage(function (res) {
        return {
          title: "天黑了，你知道路在哪么？",
          //分享的标题
          imageUrl: data.url,
          success: function success(res) {
            console.log(res);
          },
          fail: function fail(res) {
            console.log(res);
          }
        };
      });
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2hhcmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInN0YXJ0Iiwid3giLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0Iiwib25Mb2FkIiwibG9hZGVyIiwibG9hZFJlcyIsImVyciIsImRhdGEiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsInRpdGxlIiwiaW1hZ2VVcmwiLCJ1cmwiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImZhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxLQUhLLG1CQUdHO0FBQ0pDLElBQUFBLEVBQUUsQ0FBQ0MsYUFBSCxDQUFpQjtBQUFFQyxNQUFBQSxlQUFlLEVBQUU7QUFBbkIsS0FBakIsRUFESSxDQUN3QztBQUMvQyxHQUxJOztBQU9MOzs7QUFHQUMsRUFBQUEsTUFWSyxvQkFVSTtBQUNMO0FBQ0FQLElBQUFBLEVBQUUsQ0FBQ1EsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE9BQWxCLEVBQTJCLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUN4Q1AsTUFBQUEsRUFBRSxDQUFDUSxpQkFBSCxDQUFxQixVQUFVQyxHQUFWLEVBQWU7QUFDaEMsZUFBTztBQUNIQyxVQUFBQSxLQUFLLEVBQUUsY0FESjtBQUNtQjtBQUN0QkMsVUFBQUEsUUFBUSxFQUFFSixJQUFJLENBQUNLLEdBRlo7QUFHSEMsVUFBQUEsT0FIRyxtQkFHS0osR0FITCxFQUdVO0FBQ1RLLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixHQUFaO0FBQ0gsV0FMRTtBQU1ITyxVQUFBQSxJQU5HLGdCQU1FUCxHQU5GLEVBTU87QUFDTkssWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLEdBQVo7QUFDSDtBQVJFLFNBQVA7QUFVSCxPQVhEO0FBWVAsS0FiRDtBQWNIO0FBMUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5b6u5L+h6KKr5Yqo5YiG5LqrXG4gKi9cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgd3guc2hvd1NoYXJlTWVudSh7IHdpdGhTaGFyZVRpY2tldDogdHJ1ZSB9KTsvL+W8gOWQr+WPs+S4iuinkueahOWIhuS6q+aMiemSrlxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDooqvliqjliIbkuqtcbiAgICAgKi9cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8v5YiG5Lqr5oyJ6ZKu5LqL5Lu255uR5ZCsXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hhcmVcIiwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xuICAgICAgICAgICAgICAgIHd4Lm9uU2hhcmVBcHBNZXNzYWdlKGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuWkqem7keS6hu+8jOS9oOefpemBk+i3r+WcqOWTquS5iO+8n1wiLC8v5YiG5Lqr55qE5qCH6aKYXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVVybDogZGF0YS51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Skip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f3d8nqyv5Be70FCiwFyrmy', 'Skip');
// scripts/Skip.js

"use strict";

/**
 * 控制场景切换事件的类
 */
cc.Class({
  "extends": cc.Component,

  /**
   * 场景跳转
   * @param {*} event 
   * @param {String} customEventData 所要跳转至的场景名称
   */
  skipTo: function skipTo(event, customEventData) {
    cc.director.loadScene(customEventData);
  },

  /**
   * 跳转到当前关卡的下一关
   */
  nextPass: function nextPass() {
    var canvas = cc.find('Canvas');
    var level = canvas.getComponents(cc.Component)[1].index;
    canvas.stopAllActions();
    level += 1;

    if (level > 45) {
      cc.director.loadScene("Start");
    } else {
      cc.director.loadScene("Level" + level);
    }
  },

  /**
   * 按钮显示对应的指引
   * @param {*} event 
   * @param {String} customEventData 需要加载的教程资源名
   */
  loadTutorial: function loadTutorial(event, customEventData) {
    var show = cc.find('Canvas/Show');
    var name = 'tutorial/' + customEventData;
    cc.loader.loadRes(name, cc.SpriteFrame, function (err, spriteFrame) {
      show.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    });
  },

  /**
   * 隐藏提示
   */
  hide: function hide() {
    cc.find('Canvas/Tip').active = false;
  },

  /**
   * 显示提示
   */
  appear: function appear() {
    cc.find('Canvas/Tip').active = true;
  },

  /**
   * 隐藏科普文字
   */
  hideDescribe: function hideDescribe() {
    this.node.parent.active = false;
  },

  /**
   * 主动分享
   */
  share: function share() {
    cc.loader.loadRes("share", function (err, data) {
      wx.shareAppMessage({
        title: "生于黑暗，始见光明。",
        imageUrl: data.url,
        success: function success(res) {
          console.log(res);
        },
        fail: function fail(res) {
          console.log(res);
        }
      });
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2tpcC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic2tpcFRvIiwiZXZlbnQiLCJjdXN0b21FdmVudERhdGEiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm5leHRQYXNzIiwiY2FudmFzIiwiZmluZCIsImxldmVsIiwiZ2V0Q29tcG9uZW50cyIsImluZGV4Iiwic3RvcEFsbEFjdGlvbnMiLCJsb2FkVHV0b3JpYWwiLCJzaG93IiwibmFtZSIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiaGlkZSIsImFjdGl2ZSIsImFwcGVhciIsImhpZGVEZXNjcmliZSIsIm5vZGUiLCJwYXJlbnQiLCJzaGFyZSIsImRhdGEiLCJ3eCIsInNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwiaW1hZ2VVcmwiLCJ1cmwiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImZhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDs7QUFHTDs7Ozs7QUFLQUMsRUFBQUEsTUFSSyxrQkFRRUMsS0FSRixFQVFTQyxlQVJULEVBUTBCO0FBQzNCTCxJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQkYsZUFBdEI7QUFDSCxHQVZJOztBQVlMOzs7QUFHQUcsRUFBQUEsUUFmSyxzQkFlTTtBQUNQLFFBQUlDLE1BQU0sR0FBR1QsRUFBRSxDQUFDVSxJQUFILENBQVEsUUFBUixDQUFiO0FBQ0EsUUFBSUMsS0FBSyxHQUFHRixNQUFNLENBQUNHLGFBQVAsQ0FBcUJaLEVBQUUsQ0FBQ0UsU0FBeEIsRUFBbUMsQ0FBbkMsRUFBc0NXLEtBQWxEO0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ0ssY0FBUDtBQUNBSCxJQUFBQSxLQUFLLElBQUksQ0FBVDs7QUFDQSxRQUFHQSxLQUFLLEdBQUcsRUFBWCxFQUFlO0FBQ1hYLE1BQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLE9BQXRCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hQLE1BQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLFVBQVVJLEtBQWhDO0FBQ0g7QUFDSixHQXpCSTs7QUEyQkw7Ozs7O0FBS0FJLEVBQUFBLFlBaENLLHdCQWdDUVgsS0FoQ1IsRUFnQ2VDLGVBaENmLEVBZ0NnQztBQUNqQyxRQUFJVyxJQUFJLEdBQUdoQixFQUFFLENBQUNVLElBQUgsQ0FBUSxhQUFSLENBQVg7QUFDQSxRQUFJTyxJQUFJLEdBQUcsY0FBY1osZUFBekI7QUFDQUwsSUFBQUEsRUFBRSxDQUFDa0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCRixJQUFsQixFQUF3QmpCLEVBQUUsQ0FBQ29CLFdBQTNCLEVBQXdDLFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtBQUNoRU4sTUFBQUEsSUFBSSxDQUFDTyxZQUFMLENBQWtCdkIsRUFBRSxDQUFDd0IsTUFBckIsRUFBNkJGLFdBQTdCLEdBQTJDQSxXQUEzQztBQUNILEtBRkQ7QUFHSCxHQXRDSTs7QUF3Q0w7OztBQUdBRyxFQUFBQSxJQTNDSyxrQkEyQ0U7QUFDSHpCLElBQUFBLEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLFlBQVIsRUFBc0JnQixNQUF0QixHQUErQixLQUEvQjtBQUNILEdBN0NJOztBQStDTDs7O0FBR0FDLEVBQUFBLE1BbERLLG9CQWtESTtBQUNMM0IsSUFBQUEsRUFBRSxDQUFDVSxJQUFILENBQVEsWUFBUixFQUFzQmdCLE1BQXRCLEdBQStCLElBQS9CO0FBQ0gsR0FwREk7O0FBc0RMOzs7QUFHQUUsRUFBQUEsWUF6REssMEJBeURVO0FBQ1gsU0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCSixNQUFqQixHQUEwQixLQUExQjtBQUNILEdBM0RJOztBQTZETDs7O0FBR0FLLEVBQUFBLEtBaEVLLG1CQWdFRztBQUNKL0IsSUFBQUEsRUFBRSxDQUFDa0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE9BQWxCLEVBQTJCLFVBQVVFLEdBQVYsRUFBZVcsSUFBZixFQUFxQjtBQUM1Q0MsTUFBQUEsRUFBRSxDQUFDQyxlQUFILENBQW1CO0FBQ2ZDLFFBQUFBLEtBQUssRUFBRSxZQURRO0FBRWZDLFFBQUFBLFFBQVEsRUFBRUosSUFBSSxDQUFDSyxHQUZBO0FBR2ZDLFFBQUFBLE9BSGUsbUJBR1BDLEdBSE8sRUFHRjtBQUNUQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNILFNBTGM7QUFNZkcsUUFBQUEsSUFOZSxnQkFNVkgsR0FOVSxFQU1MO0FBQ05DLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0g7QUFSYyxPQUFuQjtBQVVILEtBWEQ7QUFZSDtBQTdFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaOp+WItuWcuuaZr+WIh+aNouS6i+S7tueahOexu1xuICovXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgLyoqXG4gICAgICog5Zy65pmv6Lez6L2sXG4gICAgICogQHBhcmFtIHsqfSBldmVudCBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY3VzdG9tRXZlbnREYXRhIOaJgOimgei3s+i9rOiHs+eahOWcuuaZr+WQjeensFxuICAgICAqL1xuICAgIHNraXBUbyhldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShjdXN0b21FdmVudERhdGEpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDot7PovazliLDlvZPliY3lhbPljaHnmoTkuIvkuIDlhbNcbiAgICAgKi9cbiAgICBuZXh0UGFzcygpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICB2YXIgbGV2ZWwgPSBjYW52YXMuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpWzFdLmluZGV4O1xuICAgICAgICBjYW52YXMuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgbGV2ZWwgKz0gMTtcbiAgICAgICAgaWYobGV2ZWwgPiA0NSkge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU3RhcnRcIik7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTGV2ZWxcIiArIGxldmVsKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmjInpkq7mmL7npLrlr7nlupTnmoTmjIflvJVcbiAgICAgKiBAcGFyYW0geyp9IGV2ZW50IFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjdXN0b21FdmVudERhdGEg6ZyA6KaB5Yqg6L2955qE5pWZ56iL6LWE5rqQ5ZCNXG4gICAgICovXG4gICAgbG9hZFR1dG9yaWFsKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgdmFyIHNob3cgPSBjYy5maW5kKCdDYW52YXMvU2hvdycpO1xuICAgICAgICB2YXIgbmFtZSA9ICd0dXRvcmlhbC8nICsgY3VzdG9tRXZlbnREYXRhO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhuYW1lLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIHNob3cuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmakOiXj+aPkOekulxuICAgICAqL1xuICAgIGhpZGUoKSB7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9UaXAnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pi+56S65o+Q56S6XG4gICAgICovXG4gICAgYXBwZWFyKCkge1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvVGlwJykuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6ZqQ6JeP56eR5pmu5paH5a2XXG4gICAgICovXG4gICAgaGlkZURlc2NyaWJlKCkge1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDkuLvliqjliIbkuqtcbiAgICAgKi9cbiAgICBzaGFyZSgpIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaGFyZVwiLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIueUn+S6jum7keaal++8jOWni+ingeWFieaYjuOAglwiLFxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBkYXRhLnVybCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfSxcblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/BlackPiece.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73550kheWRAf4ekXzYBsm/u', 'BlackPiece');
// scripts/BlackPiece.js

"use strict";

/**
 * 各种黑棋的基类
 * 
 * @property {Number} node.gx 黑棋的所在格子的行坐标
 * 
 * @property {Number} node.gy 黑棋的所在格子的列坐标
 * 
 * @property {Boolean} node.type 标识棋子种类， 红棋为0， 黑棋为1
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    gx: 0,
    gy: 0
  },

  /**
   *  使攻击范围内的红棋失效
   */
  setflag: function setflag(X, Y) {},
  start: function start() {
    this.node.type = 1;
    this.node.gx = this.gx;
    this.node.gy = this.gy; // 将黑棋固定到格子上

    if (this.node.grids) {
      var grid = this.node.grids[this.gx][this.gy];
      var size = grid.getContentSize();
      grid.hasPiece = true;
      grid.piece = this.node;
      this.node.x = grid.x + size.width / 2;
      this.node.y = grid.y - size.height / 2;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmxhY2tQaWVjZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImd4IiwiZ3kiLCJzZXRmbGFnIiwiWCIsIlkiLCJzdGFydCIsIm5vZGUiLCJ0eXBlIiwiZ3JpZHMiLCJncmlkIiwic2l6ZSIsImdldENvbnRlbnRTaXplIiwiaGFzUGllY2UiLCJwaWVjZSIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsRUFBRSxFQUFFO0FBRkksR0FIUDs7QUFRTDs7O0FBR0FDLEVBQUFBLE9BQU8sRUFBRSxpQkFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWUsQ0FBRSxDQVhyQjtBQWFMQyxFQUFBQSxLQWJLLG1CQWFHO0FBQ0osU0FBS0MsSUFBTCxDQUFVQyxJQUFWLEdBQWlCLENBQWpCO0FBRUEsU0FBS0QsSUFBTCxDQUFVTixFQUFWLEdBQWUsS0FBS0EsRUFBcEI7QUFDQSxTQUFLTSxJQUFMLENBQVVMLEVBQVYsR0FBZSxLQUFLQSxFQUFwQixDQUpJLENBTUo7O0FBQ0EsUUFBRyxLQUFLSyxJQUFMLENBQVVFLEtBQWIsRUFBb0I7QUFDaEIsVUFBSUMsSUFBSSxHQUFHLEtBQUtILElBQUwsQ0FBVUUsS0FBVixDQUFnQixLQUFLUixFQUFyQixFQUF5QixLQUFLQyxFQUE5QixDQUFYO0FBQ0EsVUFBSVMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLGNBQUwsRUFBWDtBQUNBRixNQUFBQSxJQUFJLENBQUNHLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQUgsTUFBQUEsSUFBSSxDQUFDSSxLQUFMLEdBQWEsS0FBS1AsSUFBbEI7QUFFQSxXQUFLQSxJQUFMLENBQVVRLENBQVYsR0FBY0wsSUFBSSxDQUFDSyxDQUFMLEdBQVNKLElBQUksQ0FBQ0ssS0FBTCxHQUFhLENBQXBDO0FBQ0EsV0FBS1QsSUFBTCxDQUFVVSxDQUFWLEdBQWNQLElBQUksQ0FBQ08sQ0FBTCxHQUFTTixJQUFJLENBQUNPLE1BQUwsR0FBYyxDQUFyQztBQUNIO0FBQ0o7QUE3QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDlkITnp43pu5Hmo4vnmoTln7rnsbtcbiAqIFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IG5vZGUuZ3gg6buR5qOL55qE5omA5Zyo5qC85a2Q55qE6KGM5Z2Q5qCHXG4gKiBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBub2RlLmd5IOm7keaji+eahOaJgOWcqOagvOWtkOeahOWIl+WdkOagh1xuICogXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IG5vZGUudHlwZSDmoIfor4bmo4vlrZDnp43nsbvvvIwg57qi5qOL5Li6MO+8jCDpu5Hmo4vkuLoxXG4gKi9cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGd4OiAwLFxuICAgICAgICBneTogMCxcbiAgICB9LFxuICBcbiAgICAvKipcbiAgICAgKiAg5L2/5pS75Ye76IyD5Zu05YaF55qE57qi5qOL5aSx5pWIXG4gICAgICovXG4gICAgc2V0ZmxhZzogZnVuY3Rpb24oWCwgWSkge30sXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnR5cGUgPSAxO1xuXG4gICAgICAgIHRoaXMubm9kZS5neCA9IHRoaXMuZ3g7XG4gICAgICAgIHRoaXMubm9kZS5neSA9IHRoaXMuZ3k7XG4gICAgICAgIFxuICAgICAgICAvLyDlsIbpu5Hmo4vlm7rlrprliLDmoLzlrZDkuIpcbiAgICAgICAgaWYodGhpcy5ub2RlLmdyaWRzKSB7XG4gICAgICAgICAgICB2YXIgZ3JpZCA9IHRoaXMubm9kZS5ncmlkc1t0aGlzLmd4XVt0aGlzLmd5XTtcbiAgICAgICAgICAgIHZhciBzaXplID0gZ3JpZC5nZXRDb250ZW50U2l6ZSgpO1xuICAgICAgICAgICAgZ3JpZC5oYXNQaWVjZSA9IHRydWU7XG4gICAgICAgICAgICBncmlkLnBpZWNlID0gdGhpcy5ub2RlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLm5vZGUueCA9IGdyaWQueCArIHNpemUud2lkdGggLyAyO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSBncmlkLnkgLSBzaXplLmhlaWdodCAvIDI7XG4gICAgICAgIH1cbiAgICB9LFxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level10.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '546f1RVpJVOYYwmVNeN+QCi', 'Level10');
// scripts/levels/Level10.js

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
    this.index = 10; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.data[1] = new Array(0, 1, 1, 1, 1, 0, 1, 0, 1, 0);
    this.data[2] = new Array(0, 0, 1, 0, 1, 0, 1, 1, 1, 0);
    this.data[3] = new Array(0, 0, 1, 0, 0, 0, 1, 0, 1, 0);
    this.data[4] = new Array(0, 1, 1, 1, 1, 0, 0, 0, 1, 0);
    this.data[5] = new Array(0, 1, 0, 0, 1, 1, 1, 1, 1, 0);
    this.data[6] = new Array(0, 1, 0, 0, 0, 0, 1, 0, 0, 0);
    this.data[7] = new Array(0, 1, 1, 1, 0, 1, 1, 1, 1, 0);
    this.data[8] = new Array(0, 1, 0, 1, 1, 0, 0, 1, 0, 0);
    this.data[9] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[4] = new Array(0, 1, 1, 1, 1, 0, 0, 0, 1, 0);
    this.path[5] = new Array(0, 1, 0, 0, 1, 1, 1, 1, 1, 0);
    this.path[6] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[7] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[8] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[9] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDEwLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAxMDtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level11.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '059ca0SZp9Lq5w6w+uPd59E', 'Level11');
// scripts/levels/Level11.js

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
    this.index = 11; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.data[1] = new Array(1, 1, 1, 1, 1, 1, 1, 0, 1, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 1, 0);
    this.data[3] = new Array(0, 1, 1, 1, 1, 1, 0, 0, 1, 0);
    this.data[4] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 1, 0);
    this.data[5] = new Array(0, 1, 1, 1, 1, 1, 1, 0, 1, 0);
    this.data[6] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
    this.data[7] = new Array(0, 1, 0, 0, 0, 1, 1, 1, 1, 0);
    this.data[8] = new Array(0, 0, 1, 1, 0, 1, 0, 0, 1, 0);
    this.data[9] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[1] = new Array(1, 1, 1, 1, 1, 1, 0, 0, 1, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 1, 0);
    this.path[3] = new Array(0, 0, 1, 1, 1, 1, 0, 0, 1, 0);
    this.path[4] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 1, 0);
    this.path[5] = new Array(0, 0, 1, 1, 1, 1, 1, 0, 1, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
    this.path[7] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 1, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDExLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmLENBZEssQ0FnQkw7O0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAxMTtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level13.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8441tGCYdLyZQ8x/pl3tyL', 'Level13');
// scripts/levels/Level13.js

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
    this.index = 13; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[3] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    this.data[4] = new Array(0, 1, 0, 1, 0, 0, 1, 1, 1, 0);
    this.data[5] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    this.data[6] = new Array(0, 0, 1, 0, 0, 0, 1, 0, 1, 0);
    this.data[7] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[5] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDEzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAxMztcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEpO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUEr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QUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAxO1xuXG4gICAgICAgIC8vIOWcsOWbvlxuICAgICAgICB0aGlzLmRhdGFbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbM10gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG5cbiAgICAgICAgLy8g6Lev5b6EXG4gICAgICAgIHRoaXMucGF0aFswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFszXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs2XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICB9XG5cbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level16.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d5fajlz8dGhZEqGUNFnPYY', 'Level16');
// scripts/levels/Level16.js

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
    this.index = 16; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.data[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.data[4] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 0);
    this.data[5] = new Array(0, 0, 1, 1, 0, 0, 0, 0, 0, 0);
    this.data[6] = new Array(0, 1, 1, 0, 0, 0, 0, 0, 0, 0);
    this.data[7] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[4] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 0);
    this.path[5] = new Array(0, 0, 1, 1, 0, 0, 0, 0, 0, 0);
    this.path[6] = new Array(0, 1, 1, 0, 0, 0, 0, 0, 0, 0);
    this.path[7] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDE2LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAxNjtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level15.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '40b00F9kv1IbJm6mL/KyNQi', 'Level15');
// scripts/levels/Level15.js

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
    this.index = 15; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.data[1] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.data[3] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 0);
    this.data[4] = new Array(0, 0, 0, 1, 0, 0, 0, 1, 0, 0);
    this.data[5] = new Array(0, 0, 0, 1, 0, 0, 0, 1, 0, 0);
    this.data[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[3] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 0, 0);
    this.path[4] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[8] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDE1LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAxNTtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level21.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '815f2MhqTZElrSHyHhVrlU9', 'Level21');
// scripts/levels/Level21.js

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
    this.index = 21; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[4] = new Array(0, 0, 0, 0, 1, 1, 1, 1, 1, 1);
    this.data[5] = new Array(1, 1, 1, 1, 1, 0, 0, 0, 0, 0);
    this.data[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 1, 1, 1, 1, 1, 1);
    this.path[5] = new Array(1, 1, 1, 1, 1, 0, 0, 0, 0, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDIxLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAyMTtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level17.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47ca8a0uMRNWprtQ70z9By7', 'Level17');
// scripts/levels/Level17.js

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
    this.index = 17; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[3] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[4] = new Array(0, 0, 1, 0, 1, 1, 1, 1, 1, 1);
    this.data[5] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[6] = new Array(0, 0, 1, 1, 1, 0, 0, 0, 0, 0);
    this.data[7] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 1, 1, 1, 1, 1, 1);
    this.path[5] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[6] = new Array(0, 0, 1, 1, 1, 0, 0, 0, 0, 0);
    this.path[7] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    this.path[8] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    this.path[9] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDE3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAxNztcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMSk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level14.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26ea61V1F9IuZafIEVmaqLO', 'Level14');
// scripts/levels/Level14.js

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
    this.index = 14; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[3] = new Array(1, 1, 1, 1, 1, 1, 1, 0, 1, 0);
    this.data[4] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
    this.data[5] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
    this.data[6] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
    this.data[7] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 1, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(1, 1, 1, 1, 1, 1, 1, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[7] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[8] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[9] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDE0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAxNDtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '41b50zFL4xFPJ6BgiZ68UHK', 'Level2');
// scripts/levels/Level2.js

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
    this.index = 2; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[4] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[5] = new Array(1, 1, 0, 1, 0, 1, 0, 0, 1, 1);
    this.data[6] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.path[5] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 1, 1);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWYsQ0FkSyxDQWdCTDs7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBkYXRhIDogW10sXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxuXG4gICAgICAgIC8vIHBhdGg6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyDlhbPljaHlj7dcbiAgICAgICAgdGhpcy5pbmRleCA9IDI7XG5cbiAgICAgICAgLy8g5Zyw5Zu+XG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMSwgMSwgMCwgMSwgMCwgMSwgMCwgMCwgMSwgMSk7XG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcblxuICAgICAgICAvLyDot6/lvoRcbiAgICAgICAgdGhpcy5wYXRoWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxKTtcbiAgICAgICAgdGhpcy5wYXRoWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgIH1cblxufSk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level22.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1264bR3yNRI+4HBQN1kSIJa', 'Level22');
// scripts/levels/Level22.js

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
    this.index = 22; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 1, 1, 0, 0, 0);
    this.data[3] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 0, 0);
    this.data[4] = new Array(0, 0, 0, 0, 0, 1, 0, 1, 1, 0);
    this.data[5] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 1, 1);
    this.data[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 1, 1, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDIyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAyMjtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEpO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDE5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAxOTtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level24.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '31ad51EYXNMTa76TbR6Mr/l', 'Level24');
// scripts/levels/Level24.js

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
    this.index = 24; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
    this.data[2] = new Array(0, 0, 0, 0, 1, 0, 1, 0, 1, 0);
    this.data[3] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 0);
    this.data[4] = new Array(0, 0, 0, 0, 1, 1, 0, 1, 0, 0);
    this.data[5] = new Array(1, 1, 0, 0, 1, 0, 1, 1, 0, 0);
    this.data[6] = new Array(0, 1, 1, 0, 1, 0, 0, 0, 0, 0);
    this.data[7] = new Array(0, 0, 1, 1, 1, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 0);
    this.path[4] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.path[5] = new Array(1, 1, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[6] = new Array(0, 1, 1, 0, 1, 0, 0, 0, 0, 0);
    this.path[7] = new Array(0, 0, 1, 1, 1, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDI0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAyNDtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAwLCAxLCAwLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDEsIDEsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level20.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8644cCsjvZKi5qzyazdHcvX', 'Level20');
// scripts/levels/Level20.js

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
    this.index = 20; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    this.data[3] = new Array(0, 1, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[4] = new Array(0, 1, 1, 1, 1, 1, 0, 0, 0, 0);
    this.data[5] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
    this.data[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 1);
    this.path[3] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[8] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDIwLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAyMDtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEpO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level18.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd73951HxedAFI7QMcOND4DK', 'Level18');
// scripts/levels/Level18.js

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
    this.index = 18; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[3] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 1);
    this.data[4] = new Array(0, 1, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[6] = new Array(0, 1, 1, 1, 0, 0, 0, 0, 0, 0);
    this.data[7] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 1);
    this.path[4] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[6] = new Array(0, 1, 1, 1, 0, 0, 0, 0, 0, 0);
    this.path[7] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDE4LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAxODtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEpO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level23.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a7f6yvE2tLyoF9SagqQV65', 'Level23');
// scripts/levels/Level23.js

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
    this.index = 23; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 1, 0);
    this.data[2] = new Array(0, 0, 0, 0, 1, 1, 1, 0, 0, 0);
    this.data[3] = new Array(0, 0, 1, 0, 0, 0, 1, 0, 0, 0);
    this.data[4] = new Array(0, 0, 1, 0, 0, 0, 1, 0, 0, 0);
    this.data[5] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 0, 0);
    this.data[6] = new Array(0, 1, 1, 1, 0, 1, 1, 1, 0, 0);
    this.data[7] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[5] = new Array(1, 1, 1, 1, 1, 1, 1, 0, 0, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDIzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAyMztcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level27.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0f1e5GB3QNIf65saSCtAVJg', 'Level27');
// scripts/levels/Level27.js

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
    this.index = 27; // 地图

    this.data[0] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[3] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[4] = new Array(0, 1, 0, 1, 1, 1, 1, 0, 0, 0);
    this.data[5] = new Array(0, 1, 1, 1, 0, 0, 1, 0, 1, 0);
    this.data[6] = new Array(0, 1, 0, 1, 0, 0, 1, 1, 1, 0);
    this.data[7] = new Array(0, 0, 0, 1, 1, 1, 1, 0, 1, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0); // 路径

    this.path[0] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 1, 0, 1, 1, 1, 1, 0, 0, 0);
    this.path[5] = new Array(0, 1, 1, 1, 0, 0, 1, 0, 0, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 1, 0);
    this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDI3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAyNztcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level26.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '12e16117kZB9Iv1/1JRO8LV', 'Level26');
// scripts/levels/Level26.js

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
    this.index = 26; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 1, 0, 1, 0, 1, 0, 0, 0, 0);
    this.data[3] = new Array(1, 1, 1, 1, 1, 1, 0, 0, 0, 0);
    this.data[4] = new Array(0, 1, 0, 1, 0, 1, 1, 1, 1, 0);
    this.data[5] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 1);
    this.data[6] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 0);
    this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(1, 1, 1, 1, 1, 1, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDI2LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAyNjtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEpO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level30.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b6eecgG0vFGmIjPYEGiNd86', 'Level30');
// scripts/levels/Level30.js

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
    this.index = 30; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 1, 1, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.data[3] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
    this.data[4] = new Array(0, 0, 1, 1, 1, 1, 1, 0, 0, 0);
    this.data[5] = new Array(0, 1, 1, 0, 0, 1, 1, 1, 0, 0);
    this.data[6] = new Array(0, 0, 1, 1, 0, 0, 0, 0, 0, 0);
    this.data[7] = new Array(0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 1, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 1, 1, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 1, 1, 0, 0, 0, 0, 0, 0);
    this.path[5] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    this.path[6] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    this.path[7] = new Array(0, 1, 1, 0, 0, 0, 0, 0, 0, 0);
    this.path[8] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[9] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDMwLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmLENBZEssQ0FnQkw7O0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAzMDtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level25.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd864hhwbxIXqQprpayDwSy', 'Level25');
// scripts/levels/Level25.js

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
    this.index = 25; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 0);
    this.data[3] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[4] = new Array(0, 0, 0, 1, 1, 1, 1, 0, 0, 0);
    this.data[5] = new Array(0, 1, 1, 0, 1, 0, 1, 1, 0, 0);
    this.data[6] = new Array(0, 0, 1, 1, 0, 1, 0, 1, 0, 0);
    this.data[7] = new Array(0, 0, 1, 0, 0, 1, 1, 1, 0, 0);
    this.data[8] = new Array(0, 0, 1, 1, 1, 1, 0, 1, 1, 0);
    this.data[9] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 1, 1, 1, 1, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 0, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[7] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 0, 0);
    this.path[8] = new Array(0, 0, 1, 1, 1, 1, 0, 0, 0, 0);
    this.path[9] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDI1LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAyNTtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAwLCAxLCAwLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level31.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e7d97Qn6dNLi7aLJUyFF784', 'Level31');
// scripts/levels/Level31.js

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
    this.index = 31; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 1, 1, 1, 1, 1, 1, 0, 0, 0);
    this.data[3] = new Array(0, 1, 0, 1, 0, 0, 1, 1, 0, 0);
    this.data[4] = new Array(0, 1, 1, 1, 1, 1, 0, 1, 1, 0);
    this.data[5] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 1, 0);
    this.data[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 1, 1);
    this.data[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 1, 1, 1, 1, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 1, 0, 0, 1, 1, 0, 0);
    this.path[4] = new Array(0, 0, 0, 1, 0, 0, 0, 1, 1, 0);
    this.path[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 1, 0);
    this.path[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 1, 1);
    this.path[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[8] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDMxLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAzMTtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDEpO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMSk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level33.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a3bf3riam9CYZRpslJfOhXO', 'Level33');
// scripts/levels/Level33.js

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
    this.index = 33; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.data[1] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
    this.data[2] = new Array(0, 0, 0, 1, 0, 1, 0, 1, 0, 0);
    this.data[3] = new Array(0, 1, 0, 0, 1, 1, 1, 1, 1, 0);
    this.data[4] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 1, 0);
    this.data[5] = new Array(0, 0, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[6] = new Array(0, 1, 1, 0, 0, 1, 1, 0, 0, 0);
    this.data[7] = new Array(1, 1, 1, 1, 0, 0, 0, 0, 1, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 1, 0, 1, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
    this.path[5] = new Array(0, 0, 1, 1, 1, 1, 1, 1, 1, 0);
    this.path[6] = new Array(0, 1, 1, 0, 0, 0, 0, 0, 0, 0);
    this.path[7] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDMzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAzMztcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level28.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a04bdDLqBVBc5Mf4bGiIY4E', 'Level28');
// scripts/levels/Level28.js

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
    this.index = 28; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 1, 0, 1, 0, 0, 0);
    this.data[3] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 0, 0);
    this.data[4] = new Array(1, 1, 0, 0, 1, 1, 0, 1, 0, 0);
    this.data[5] = new Array(0, 1, 1, 0, 1, 0, 0, 1, 0, 0);
    this.data[6] = new Array(0, 0, 1, 1, 1, 0, 0, 1, 1, 0);
    this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 0, 0);
    this.path[4] = new Array(1, 1, 0, 0, 1, 1, 0, 1, 0, 0);
    this.path[5] = new Array(0, 1, 1, 0, 1, 0, 0, 1, 0, 0);
    this.path[6] = new Array(0, 0, 1, 1, 1, 0, 0, 1, 1, 0);
    this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDI4LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAyODtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMSwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDEsIDEsIDAsIDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level35.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c57109vrINAob3viMq1wgeo', 'Level35');
// scripts/levels/Level35.js

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
    this.index = 35; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 1, 1, 1, 1, 0, 0, 0);
    this.data[3] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[4] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[5] = new Array(0, 1, 0, 1, 0, 0, 1, 0, 1, 0);
    this.data[6] = new Array(0, 1, 0, 1, 1, 1, 0, 0, 1, 0);
    this.data[7] = new Array(0, 1, 0, 0, 1, 0, 0, 0, 1, 0);
    this.data[8] = new Array(0, 1, 0, 1, 1, 1, 0, 1, 1, 0);
    this.data[9] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[6] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
    this.path[7] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[8] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[9] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDM1LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAzNTtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level34.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b1a40NcMQlGMZECvh8tOgO2', 'Level34');
// scripts/levels/Level34.js

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
    this.index = 34; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[3] = new Array(0, 0, 0, 1, 0, 0, 1, 0, 0, 0);
    this.data[4] = new Array(0, 1, 1, 1, 0, 0, 1, 1, 0, 0);
    this.data[5] = new Array(0, 1, 0, 1, 1, 1, 1, 0, 0, 0);
    this.data[6] = new Array(0, 0, 1, 1, 0, 0, 1, 1, 0, 0);
    this.data[7] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 1, 0);
    this.data[8] = new Array(1, 1, 1, 0, 1, 1, 1, 1, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 1, 1, 1, 1, 0, 0, 0);
    this.path[6] = new Array(0, 0, 1, 1, 0, 0, 1, 1, 0, 0);
    this.path[7] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
    this.path[8] = new Array(1, 1, 1, 0, 0, 0, 0, 1, 0, 0);
    this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDM0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAzNDtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDEsIDEsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level37.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bfe75Pv9XxAsIwzVM0WHRx1', 'Level37');
// scripts/levels/Level37.js

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
    this.index = 37; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[3] = new Array(0, 1, 1, 1, 0, 1, 1, 1, 0, 0);
    this.data[4] = new Array(0, 1, 1, 1, 0, 1, 1, 1, 1, 0);
    this.data[5] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    this.data[6] = new Array(0, 0, 0, 0, 1, 1, 1, 0, 0, 0);
    this.data[7] = new Array(0, 0, 0, 0, 0, 1, 1, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[5] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDM3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAzNztcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEpO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level41.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '856b8/YAtFK97jp2Lbu5AIw', 'Level41');
// scripts/levels/Level41.js

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
    this.index = 41; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.data[1] = new Array(0, 1, 0, 0, 0, 0, 1, 1, 0, 0);
    this.data[2] = new Array(0, 0, 1, 0, 1, 1, 1, 1, 1, 0);
    this.data[3] = new Array(0, 0, 0, 1, 0, 0, 1, 0, 1, 0);
    this.data[4] = new Array(0, 0, 1, 0, 1, 1, 1, 1, 1, 0);
    this.data[5] = new Array(0, 1, 0, 0, 1, 0, 1, 0, 1, 0);
    this.data[6] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[7] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[6] = new Array(1, 1, 1, 1, 1, 1, 1, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDQxLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSA0MTtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAxLCAwLCAxLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level32.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2e220ryOLFBlprwc224eLr4', 'Level32');
// scripts/levels/Level32.js

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
    this.index = 32; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 0, 0);
    this.data[2] = new Array(0, 1, 1, 1, 0, 1, 1, 1, 0, 0);
    this.data[3] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 0, 0);
    this.data[4] = new Array(1, 1, 0, 1, 0, 1, 0, 1, 0, 0);
    this.data[5] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 1, 1);
    this.data[6] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 0, 0);
    this.data[7] = new Array(0, 1, 1, 1, 0, 1, 0, 1, 0, 0);
    this.data[8] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[5] = new Array(0, 1, 0, 0, 0, 0, 0, 1, 1, 1);
    this.path[6] = new Array(0, 1, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[7] = new Array(0, 1, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[8] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDMyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAzMjtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEpO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level36.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '780bcnqHTVPF5nHpOy39Wu5', 'Level36');
// scripts/levels/Level36.js

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
    this.index = 36; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 0, 0);
    this.data[2] = new Array(1, 1, 0, 0, 0, 1, 0, 0, 0, 0);
    this.data[3] = new Array(0, 0, 0, 1, 0, 1, 0, 0, 0, 0);
    this.data[4] = new Array(0, 0, 1, 1, 1, 1, 1, 0, 0, 0);
    this.data[5] = new Array(0, 0, 0, 1, 0, 1, 0, 0, 0, 0);
    this.data[6] = new Array(0, 0, 0, 1, 0, 1, 1, 1, 0, 0);
    this.data[7] = new Array(0, 0, 0, 1, 0, 1, 0, 1, 1, 1);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 1, 1, 1, 1, 1, 0, 0, 0, 0);
    this.path[2] = new Array(1, 1, 0, 0, 0, 1, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 0, 0);
    this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDM2LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAzNjtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgxLCAxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDEsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level38.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e365b7YLAZA7YXc2XxIGyfb', 'Level38');
// scripts/levels/Level38.js

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
    this.index = 38; // 地图

    this.data[0] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 1, 1, 1, 0, 1, 1, 1, 0);
    this.data[2] = new Array(0, 0, 1, 0, 1, 0, 1, 0, 1, 0);
    this.data[3] = new Array(0, 0, 1, 1, 1, 0, 0, 1, 0, 0);
    this.data[4] = new Array(0, 0, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[5] = new Array(0, 1, 0, 0, 0, 1, 0, 1, 1, 1);
    this.data[6] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 0);
    this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 1, 1, 1, 1, 1, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDM4LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAzODtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAxLCAwLCAxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEpO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level39.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ba735ZfwpDoak85yGFxGeP', 'Level39');
// scripts/levels/Level39.js

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
    this.index = 39; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 0, 0);
    this.data[2] = new Array(0, 1, 1, 1, 0, 1, 1, 1, 0, 0);
    this.data[3] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 0, 0);
    this.data[4] = new Array(1, 1, 0, 1, 0, 1, 0, 1, 0, 0);
    this.data[5] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 1, 1);
    this.data[6] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 0, 0);
    this.data[7] = new Array(0, 1, 1, 1, 0, 1, 0, 1, 0, 0);
    this.data[8] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 1, 1, 1, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 1, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(1, 1, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 1, 0, 0, 0, 1, 1, 1);
    this.path[6] = new Array(0, 0, 0, 1, 0, 0, 0, 1, 0, 0);
    this.path[7] = new Array(0, 0, 0, 1, 0, 0, 0, 1, 0, 0);
    this.path[8] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDM5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmLENBZEssQ0FnQkw7O0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSAzOTtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMSwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDEpO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level40.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c279J/ODlNk6AVTytkHDVZ', 'Level40');
// scripts/levels/Level40.js

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
    this.index = 40; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
    this.data[3] = new Array(0, 0, 0, 0, 1, 1, 0, 1, 1, 0);
    this.data[4] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 1);
    this.data[5] = new Array(0, 1, 1, 1, 1, 1, 0, 0, 0, 0);
    this.data[6] = new Array(0, 0, 1, 0, 1, 0, 0, 0, 0, 0);
    this.data[7] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 1);
    this.path[5] = new Array(0, 0, 1, 1, 0, 0, 0, 0, 0, 0);
    this.path[6] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    this.path[7] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    this.path[8] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    this.path[9] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDQwLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSA0MDtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level45.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8455bEIUoBG5qq7Du8JpIdm', 'Level45');
// scripts/levels/Level45.js

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
    this.index = 45; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(1, 1, 1, 1, 0, 1, 0, 0, 1, 0);
    this.data[2] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 0, 0);
    this.data[3] = new Array(0, 1, 0, 1, 1, 1, 1, 1, 0, 0);
    this.data[4] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
    this.data[5] = new Array(0, 0, 0, 0, 1, 1, 1, 1, 0, 0);
    this.data[6] = new Array(1, 1, 0, 1, 1, 0, 1, 0, 0, 0);
    this.data[7] = new Array(0, 1, 1, 1, 0, 1, 0, 1, 0, 0);
    this.data[8] = new Array(0, 0, 1, 0, 1, 1, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(1, 1, 1, 1, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[5] = new Array(0, 0, 0, 0, 1, 1, 1, 1, 0, 0);
    this.path[6] = new Array(1, 1, 0, 1, 1, 0, 0, 0, 0, 0);
    this.path[7] = new Array(0, 1, 1, 1, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDQ1LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSA0NTtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDEsIDEsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMCwgMSwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAxLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level43.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2522b3X67xJsLxp5DjIUZuE', 'Level43');
// scripts/levels/Level43.js

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
    this.index = 43; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 1, 0);
    this.data[2] = new Array(0, 1, 0, 1, 1, 1, 1, 1, 0, 0);
    this.data[3] = new Array(0, 0, 1, 1, 0, 1, 0, 1, 0, 0);
    this.data[4] = new Array(0, 1, 0, 1, 0, 1, 1, 1, 0, 0);
    this.data[5] = new Array(0, 0, 0, 1, 0, 1, 0, 1, 1, 0);
    this.data[6] = new Array(0, 1, 0, 1, 1, 1, 1, 1, 0, 0);
    this.data[7] = new Array(0, 0, 1, 0, 1, 1, 1, 0, 0, 0);
    this.data[8] = new Array(0, 1, 0, 0, 0, 1, 1, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 0, 0);
    this.path[7] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
    this.path[8] = new Array(0, 0, 0, 0, 0, 1, 1, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDQzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSA0MztcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAxLCAwLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMSwgMSwgMSwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level44.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32f17B2Wa1GlrmuqWjRRbMz', 'Level44');
// scripts/levels/Level44.js

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
    this.index = 44; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[2] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[3] = new Array(0, 1, 1, 1, 0, 0, 1, 1, 1, 0);
    this.data[4] = new Array(1, 1, 0, 1, 1, 1, 1, 0, 1, 1);
    this.data[5] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[6] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[7] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[8] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 1, 1);
    this.path[5] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDQ0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSA0NDtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMSk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3096qsvmBE2KN9RpsEs+yX', 'Level4');
// scripts/levels/Level4.js

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
    this.index = 4; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[3] = new Array(0, 1, 1, 0, 0, 1, 1, 0, 0, 0);
    this.data[4] = new Array(0, 1, 0, 0, 0, 1, 0, 0, 1, 1);
    this.data[5] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[6] = new Array(0, 0, 1, 0, 0, 0, 1, 0, 0, 0);
    this.data[7] = new Array(0, 1, 1, 0, 0, 1, 1, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
    this.path[5] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBkYXRhIDogW10sXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxuXG4gICAgICAgIC8vIHBhdGg6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyDlhbPljaHlj7dcbiAgICAgICAgdGhpcy5pbmRleCA9IDQ7XG5cbiAgICAgICAgLy8g5Zyw5Zu+XG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDEsIDEpO1xuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzddID0gbmV3IEFycmF5KDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcblxuICAgICAgICAvLyDot6/lvoRcbiAgICAgICAgdGhpcy5wYXRoWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSk7XG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgIH1cblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level7.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '099294td/VJZJ8x0KXgDIxW', 'Level7');
// scripts/levels/Level7.js

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
    this.index = 7; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.data[3] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[4] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.data[5] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.data[6] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.data[7] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.path[7] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
    this.path[8] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBkYXRhIDogW10sXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxuXG4gICAgICAgIC8vIHBhdGg6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyDlhbPljaHlj7dcbiAgICAgICAgdGhpcy5pbmRleCA9IDc7XG5cbiAgICAgICAgLy8g5Zyw5Zu+XG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcblxuICAgICAgICAvLyDot6/lvoRcbiAgICAgICAgdGhpcy5wYXRoWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xuICAgIH1cblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level8.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9ef76MwGlNL7LRC5cz/kB6s', 'Level8');
// scripts/levels/Level8.js

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
    this.index = 8; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[6] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[7] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
    this.data[8] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
    this.data[9] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[6] = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 0);
    this.path[7] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
    this.path[8] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
    this.path[9] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDguanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBkYXRhIDogW10sXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxuXG4gICAgICAgIC8vIHBhdGg6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyDlhbPljaHlj7dcbiAgICAgICAgdGhpcy5pbmRleCA9IDg7XG5cbiAgICAgICAgLy8g5Zyw5Zu+XG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzddID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcblxuICAgICAgICAvLyDot6/lvoRcbiAgICAgICAgdGhpcy5wYXRoWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbN10gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzldID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xuICAgIH1cblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39c93dYLu9DP4gyYqJD6oO6', 'Level5');
// scripts/levels/Level5.js

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
    this.index = 5; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
    this.data[3] = new Array(0, 1, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[4] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    this.data[5] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
    this.data[6] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
    this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
    this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBkYXRhIDogW10sXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxuXG4gICAgICAgIC8vIHBhdGg6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyDlhbPljaHlj7dcbiAgICAgICAgdGhpcy5pbmRleCA9IDU7XG5cbiAgICAgICAgLy8g5Zyw5Zu+XG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEpO1xuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcblxuICAgICAgICAvLyDot6/lvoRcbiAgICAgICAgdGhpcy5wYXRoWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNF0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSk7XG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgIH1cblxufSk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/LEvel6.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '38725Vu/kFAVboTNYwhAh56', 'LEvel6');
// scripts/levels/LEvel6.js

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
    this.index = 6; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[3] = new Array(0, 0, 1, 0, 0, 1, 0, 0, 0, 0);
    this.data[4] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.data[5] = new Array(0, 1, 0, 0, 0, 0, 1, 0, 1, 1);
    this.data[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMRXZlbDYuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBkYXRhIDogW10sXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxuXG4gICAgICAgIC8vIHBhdGg6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyDlhbPljaHlj7dcbiAgICAgICAgdGhpcy5pbmRleCA9IDY7XG5cbiAgICAgICAgLy8g5Zyw5Zu+XG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMSk7XG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcblxuICAgICAgICAvLyDot6/lvoRcbiAgICAgICAgdGhpcy5wYXRoWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNF0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxKTtcbiAgICAgICAgdGhpcy5wYXRoWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgIH1cblxufSk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/music/ButtonMusic.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b359ASVqJMzod+Qxu9Bf+J', 'ButtonMusic');
// scripts/music/ButtonMusic.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    buttonSound: {
      type: cc.AudioClip,
      "default": null
    }
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  Sound: function Sound() {
    cc.audioEngine.play(this.buttonSound, false, 0.4);
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbXVzaWNcXEJ1dHRvbk11c2ljLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYnV0dG9uU291bmQiLCJ0eXBlIiwiQXVkaW9DbGlwIiwic3RhcnQiLCJTb3VuZCIsImF1ZGlvRW5naW5lIiwicGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1RDLElBQUFBLFdBQVcsRUFBQztBQUNSQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sU0FEQTtBQUVSLGlCQUFRO0FBRkE7QUFESCxHQUhQO0FBVUw7QUFFQTtBQUVBQyxFQUFBQSxLQWRLLG1CQWNJLENBRVIsQ0FoQkk7QUFrQkxDLEVBQUFBLEtBbEJLLG1CQWtCRTtBQUNIUixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLTixXQUF6QixFQUFxQyxLQUFyQyxFQUEyQyxHQUEzQztBQUNILEdBcEJJLENBc0JMOztBQXRCSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgIGJ1dHRvblNvdW5kOntcbiAgICAgICAgICAgdHlwZTpjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgIGRlZmF1bHQ6bnVsbFxuICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgU291bmQoKXtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJ1dHRvblNvdW5kLGZhbHNlLDAuNCk7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level42.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7805/lMDpLMLZDNhBtyQat', 'Level42');
// scripts/levels/Level42.js

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
    this.index = 42; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 1, 0, 0, 1, 0, 1, 0, 0);
    this.data[2] = new Array(0, 0, 1, 0, 1, 1, 1, 1, 1, 0);
    this.data[3] = new Array(0, 1, 1, 1, 0, 1, 0, 1, 0, 0);
    this.data[4] = new Array(0, 0, 1, 0, 0, 1, 1, 1, 0, 0);
    this.data[5] = new Array(0, 1, 1, 1, 1, 1, 0, 1, 0, 0);
    this.data[6] = new Array(1, 1, 1, 0, 1, 1, 1, 1, 1, 1);
    this.data[7] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 1, 0, 0, 1, 0, 1, 0, 0);
    this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[5] = new Array(0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
    this.path[6] = new Array(1, 1, 0, 0, 1, 1, 1, 1, 1, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDQyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICAvLyBwYXRoOiBbXSxcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXG5cbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcbiAgICAgICAgfSxcblxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XG4gICAgICAgIHRoaXMuaW5kZXggPSA0MjtcblxuICAgICAgICAvLyDlnLDlm75cbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVsyXSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs1XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEpO1xuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs4XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuXG4gICAgICAgIC8vIOi3r+W+hFxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSk7XG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgfVxuXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/levels/Level9.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd22dbIr5uFGNreVoSyaF08w', 'Level9');
// scripts/levels/Level9.js

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
    this.index = 9; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
    this.data[3] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 1);
    this.data[4] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[8] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 1);
    this.path[4] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[8] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBkYXRhIDogW10sXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxuXG4gICAgICAgIC8vIHBhdGg6IFtdLFxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcblxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxuICAgICAgICB9LFxuXG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIH0sXG5cbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyDlhbPljaHlj7dcbiAgICAgICAgdGhpcy5pbmRleCA9IDk7XG5cbiAgICAgICAgLy8g5Zyw5Zu+XG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzFdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxKTtcbiAgICAgICAgdGhpcy5kYXRhWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5kYXRhWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcblxuICAgICAgICAvLyDot6/lvoRcbiAgICAgICAgdGhpcy5wYXRoWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEpO1xuICAgICAgICB0aGlzLnBhdGhbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgICAgICB0aGlzLnBhdGhbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcbiAgICAgICAgdGhpcy5wYXRoWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xuICAgIH1cblxufSk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/BlackPao.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4fc219oiMBB0rWaI24ZJnsX', 'BlackPao');
// scripts/piece/BlackPao.js

"use strict";

/**
 * 控制黑棋炮的组件
 */
cc.Class({
  "extends": require("BlackPiece"),
  setflag: function setflag(X, Y) {
    var x = X;
    var y = Y;
    var grids = this.node.grids; // ---------------向下----------------

    do {
      x++;
    } while (x >= 0 && x <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);

    x++;

    while (x <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) {
      x++;
    }

    if (x <= 9 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
      grids[x][y].piece.disable = true;
    }

    x = X; // ---------------向上----------------

    do {
      x--;
    } while (x >= 0 && x <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);

    x--;

    while (x >= 0 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) {
      x--;
    }

    if (x >= 0 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
      grids[x][y].piece.disable = true;
    }

    x = X; // ---------------向左----------------

    do {
      y--;
    } while (y >= 0 && y <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);

    y--;

    while (y >= 0 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) {
      y--;
    }

    if (y >= 0 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
      grids[x][y].piece.disable = true;
    }

    y = Y; // ---------------向右----------------

    do {
      y++;
    } while (y >= 0 && y <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);

    y++;

    while (y <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) {
      y++;
    }

    if (y <= 9 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
      grids[x][y].piece.disable = true;
    }
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrUGFvLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsIlgiLCJZIiwieCIsInkiLCJncmlkcyIsIm5vZGUiLCJmbGFnIiwiaGFzUGllY2UiLCJwaWVjZSIsImRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUlDQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNOLGFBQVNDLE9BQU8sQ0FBQyxZQUFELENBRFY7QUFHTkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNwQixRQUFJQyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QixDQUhvQixDQUtwQjs7QUFDQSxPQUFHO0FBQ0NGLE1BQUFBLENBQUM7QUFDSixLQUZELFFBRVNBLENBQUMsSUFBRyxDQUFKLElBQVNBLENBQUMsSUFBSSxDQUFkLElBQW1CRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBdkMsSUFBNEMsQ0FBQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUZsRTs7QUFHQUwsSUFBQUEsQ0FBQzs7QUFFRCxXQUFNQSxDQUFDLElBQUksQ0FBTCxJQUFVRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUMsQ0FBQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUF0RDtBQUFnRUwsTUFBQUEsQ0FBQztBQUFqRTs7QUFFQSxRQUFHQSxDQUFDLElBQUksQ0FBTCxJQUFVRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIs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Q0FBOUIsSUFBbUMsQ0FBQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUF0RDtBQUFnRUosTUFBQUEsQ0FBQztBQUFqRTs7QUFFQSxRQUFHQSxDQUFDLElBQUksQ0FBTCxJQUFVQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUNGLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBbEQsRUFBNEQ7QUFDeERILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsSUFBNUI7QUFDSDtBQUNKLEdBMURLLENBNEROOztBQTVETSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaOp+WItum7keaji+eCrueahOe7hOS7tlxuICovXG5cbiBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogcmVxdWlyZShcIkJsYWNrUGllY2VcIiksXG5cbiAgICBzZXRmbGFnOiBmdW5jdGlvbihYLCBZKSB7XG4gICAgICAgIHZhciB4ID0gWDtcbiAgICAgICAgdmFyIHkgPSBZO1xuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm5vZGUuZ3JpZHM7XG4gICAgICAgIFxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS3lkJHkuIstLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHgrKztcbiAgICAgICAgfSB3aGlsZSAoeCA+PTAgJiYgeCA8PSA5ICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpO1xuICAgICAgICB4Kys7XG5cbiAgICAgICAgd2hpbGUoeCA8PSA5ICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpIHgrKztcblxuICAgICAgICBpZih4IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmIGdyaWRzW3hdW3ldLmhhc1BpZWNlKSB7XG4gICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB4ID0gWDtcblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS3lkJHkuIotLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHgtLTtcbiAgICAgICAgfSB3aGlsZSAoeCA+PTAgJiYgeCA8PSA5ICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpO1xuICAgICAgICB4LS07XG5cbiAgICAgICAgd2hpbGUoeCA+PSAwICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpIHgtLTtcblxuICAgICAgICBpZih4ID49IDAgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmIGdyaWRzW3hdW3ldLmhhc1BpZWNlKSB7XG4gICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB4ID0gWDtcblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS3lkJHlt6YtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHktLTtcbiAgICAgICAgfSB3aGlsZSAoeSA+PTAgJiYgeSA8PSA5ICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpO1xuICAgICAgICB5LS07XG5cbiAgICAgICAgd2hpbGUoeSA+PSAwICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpIHktLTtcblxuICAgICAgICBpZih5ID49IDAgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmIGdyaWRzW3hdW3ldLmhhc1BpZWNlKSB7XG4gICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB5ID0gWTtcblxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS3lkJHlj7MtLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHkrKztcbiAgICAgICAgfSB3aGlsZSAoeSA+PTAgJiYgeSA8PSA5ICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpO1xuICAgICAgICB5Kys7XG5cbiAgICAgICAgd2hpbGUoeSA8PSA5ICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpIHkrKztcblxuICAgICAgICBpZih5IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmIGdyaWRzW3hdW3ldLmhhc1BpZWNlKSB7XG4gICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/music/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51288LLlEdIwJBI9hXzYryK', 'AudioManager');
// scripts/music/AudioManager.js

"use strict";

/**
 * 控制全局音乐播放
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    bgMusic: {
      "default": null,
      type: cc.AudioClip
    }
  },
  onLoad: function onLoad() {
    cc.game.addPersistRootNode(this.node);
  },
  click: function click() {
    this.flag ^= 1;

    if (this.flag == 1) {
      this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, true, 0.3);
    } else {
      cc.audioEngine.pause(this.bgMusicChannel);
    }
  },
  start: function start() {
    this.flag = 1;
    this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, true, 0.3);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbXVzaWNcXEF1ZGlvTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJnTXVzaWMiLCJ0eXBlIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiZ2FtZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJjbGljayIsImZsYWciLCJiZ011c2ljQ2hhbm5lbCIsImF1ZGlvRW5naW5lIiwicGxheSIsInBhdXNlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFDO0FBQ0osaUJBQVMsSUFETDtBQUVKQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTDtBQURBLEdBSFA7QUFVTEMsRUFBQUEsTUFWSyxvQkFVSTtBQUNMUCxJQUFBQSxFQUFFLENBQUNRLElBQUgsQ0FBUUMsa0JBQVIsQ0FBMkIsS0FBS0MsSUFBaEM7QUFDSCxHQVpJO0FBY0xDLEVBQUFBLEtBZEssbUJBY0c7QUFDSixTQUFLQyxJQUFMLElBQWEsQ0FBYjs7QUFDQSxRQUFHLEtBQUtBLElBQUwsSUFBYSxDQUFoQixFQUFtQjtBQUNmLFdBQUtDLGNBQUwsR0FBc0JiLEVBQUUsQ0FBQ2MsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtYLE9BQXpCLEVBQWtDLElBQWxDLEVBQXdDLEdBQXhDLENBQXRCO0FBQ0gsS0FGRCxNQUVNO0FBQ0ZKLE1BQUFBLEVBQUUsQ0FBQ2MsV0FBSCxDQUFlRSxLQUFmLENBQXFCLEtBQUtILGNBQTFCO0FBQ0g7QUFDSixHQXJCSTtBQXVCTEksRUFBQUEsS0F2QkssbUJBdUJHO0FBQ0osU0FBS0wsSUFBTCxHQUFZLENBQVo7QUFDQSxTQUFLQyxjQUFMLEdBQXNCYixFQUFFLENBQUNjLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLWCxPQUF6QixFQUFrQyxJQUFsQyxFQUF3QyxHQUF4QyxDQUF0QjtBQUNIO0FBMUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5o6n5Yi25YWo5bGA6Z+z5LmQ5pKt5pS+XG4gKi9cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGJnTXVzaWM6e1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBjYy5nYW1lLmFkZFBlcnNpc3RSb290Tm9kZSh0aGlzLm5vZGUpO1xuICAgIH0sXG5cbiAgICBjbGljaygpIHtcbiAgICAgICAgdGhpcy5mbGFnIF49IDE7XG4gICAgICAgIGlmKHRoaXMuZmxhZyA9PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmJnTXVzaWNDaGFubmVsID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJnTXVzaWMsIHRydWUsIDAuMyk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMuYmdNdXNpY0NoYW5uZWwpOyAgICAgICAgIFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLmZsYWcgPSAxO1xuICAgICAgICB0aGlzLmJnTXVzaWNDaGFubmVsID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJnTXVzaWMsIHRydWUsIDAuMyk7XG4gICAgfVxuXG59KTsiXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/BlackShi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9a95jKRz5MUJZQIFuzhzK4', 'BlackShi');
// scripts/piece/BlackShi.js

"use strict";

/**
 * 控制黑棋士的组件
 */
cc.Class({
  "extends": require("BlackPiece"),
  setflag: function setflag(X, Y) {
    var grids = this.node.grids;
    var dirx = Array(0, 1, -1, 1, -1);
    var diry = Array(0, -1, 1, 1, -1);

    for (var i = 0; i < 5; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrU2hpLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsIlgiLCJZIiwiZ3JpZHMiLCJub2RlIiwiZGlyeCIsIkFycmF5IiwiZGlyeSIsImkiLCJ4IiwieSIsImZsYWciLCJoYXNQaWVjZSIsInBpZWNlIiwidHlwZSIsImRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUlDQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNOLGFBQVNDLE9BQU8sQ0FBQyxZQUFELENBRFY7QUFHTkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNwQixRQUFJQyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QjtBQUNBLFFBQUlFLElBQUksR0FBR0MsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUFoQjs7QUFFQSxTQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxDQUFuQixFQUFzQkEsQ0FBQyxFQUF2QixFQUEyQjtBQUN2QixVQUFJQyxDQUFDLEdBQUdSLENBQUMsR0FBR0ksSUFBSSxDQUFDRyxDQUFELENBQWhCO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHUixDQUFDLEdBQUdLLElBQUksQ0FBQ0MsQ0FBRCxDQUFoQjtBQUVBLFVBQUdDLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBRyxDQUFiLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEIsSUFBMkJBLENBQUMsR0FBRyxDQUFsQyxFQUFxQztBQUNyQyxVQUFHUCxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlDLElBQVosSUFBb0IsQ0FBdkIsRUFBMEI7O0FBRTFCLFVBQUdSLEtBQUssQ0FBQ00sQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUUsUUFBWixJQUF3QlQsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxLQUFaLENBQWtCQyxJQUFsQixJQUEwQixDQUFyRCxFQUF3RDtBQUNwRFgsUUFBQUEsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxLQUFaLENBQWtCRSxPQUFsQixHQUE0QixJQUE1QjtBQUNIO0FBQ0o7QUFDSjtBQW5CSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaOp+WItum7keaji+Wjq+eahOe7hOS7tlxuICovXG5cbiBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogcmVxdWlyZShcIkJsYWNrUGllY2VcIiksXG5cbiAgICBzZXRmbGFnOiBmdW5jdGlvbihYLCBZKSB7XG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubm9kZS5ncmlkcztcbiAgICAgICAgdmFyIGRpcnggPSBBcnJheSgwLCAxLCAtMSwgMSwgLTEpO1xuICAgICAgICB2YXIgZGlyeSA9IEFycmF5KDAsIC0xLCAxLCAxLCAtMSk7XG5cbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBYICsgZGlyeFtpXTtcbiAgICAgICAgICAgIHZhciB5ID0gWSArIGRpcnlbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmKGdyaWRzW3hdW3ldLmZsYWcgPT0gMCkgY29udGludWU7XG5cbiAgICAgICAgICAgIGlmKGdyaWRzW3hdW3ldLmhhc1BpZWNlICYmIGdyaWRzW3hdW3ldLnBpZWNlLnR5cGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGdyaWRzW3hdW3ldLnBpZWNlLmRpc2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CheckerBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb8aa0QlV1B8r2v5UcFkv4Q', 'CheckerBoard');
// scripts/CheckerBoard.js

"use strict";

/**
 * 动态生成棋盘
 * @property {cc.Node} node 该脚本挂载的节点
 * 
 * @property {Number} upperLeftX 棋盘左上角横坐标
 * 
 * @property {Number} upperLeftY 棋盘左上角纵坐标
 * 
 * @property {Number} broadSize 棋盘边长
 * 
 * @property {cc.Prefab} gridWall 格子预制体资源-墙体
 * 
 * @property {cc.Prefab} gridPath 格子预制体资源-路径
 * 
 * @property {cc.Node[]} map 包含所有格子的数组
 * 
 * @property {Number} gridNum 每边格子数--固定为10
 * 
 * @property {Number} gridSize 格子大小
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    upperLeftX: 0,
    upperLeftY: 0,
    broadSize: 0,
    gridWall: {
      "default": null,
      type: cc.Prefab
    },
    gridPath: {
      "default": null,
      type: cc.Prefab
    }
  },

  /**
   * 动态生成格子并将其添加到场景中
   * 
   * @param {cc.V2} position 生成格子的位置
   * @param {Boolean} kind 格子的类型
   * @returns {Grid} 生成格子的引用
   */
  createGrid: function createGrid(position, kind) {
    var newGrid = null; // 根据格子种类生成节点

    switch (kind) {
      case 0:
        newGrid = cc.instantiate(this.gridWall);
        break;

      case 1:
        newGrid = cc.instantiate(this.gridPath);
        break;
    } // 0为墙, 1为路, 2为灯, 3为受攻击


    newGrid.flag = kind;
    newGrid.nums = 0;
    this.node.addChild(newGrid); // 设置格子层级

    newGrid.setSiblingIndex(2); // 使每个格子以左上角为锚点

    newGrid.anchorX = 0;
    newGrid.anchorY = 1; // 设置格子位置

    var newPosition = newGrid.parent.convertToNodeSpaceAR(position);
    newGrid.setPosition(newPosition);
    return newGrid;
  },

  /**
   * 创建棋盘
   */
  createMap: function createMap() {
    var flags = this.node.getComponents(cc.Component)[1]; // 关卡数据脚本一定需挂在第3位置

    for (var i = 0; i < 10; i++) {
      this.map[i] = new Array();
      var y = this.upperLeftY - i * this.gridSize;

      for (var j = 0; j < 10; j++) {
        var x = this.upperLeftX + j * this.gridSize;
        this.map[i][j] = this.createGrid(cc.v2(x, y), flags.data[i][j]);
      }
    }
  },
  start: function start() {
    this.map = new Array();
    this.gridNum = 10;
    this.gridSize = this.broadSize / this.gridNum;
    this.createMap();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ2hlY2tlckJvYXJkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidXBwZXJMZWZ0WCIsInVwcGVyTGVmdFkiLCJicm9hZFNpemUiLCJncmlkV2FsbCIsInR5cGUiLCJQcmVmYWIiLCJncmlkUGF0aCIsImNyZWF0ZUdyaWQiLCJwb3NpdGlvbiIsImtpbmQiLCJuZXdHcmlkIiwiaW5zdGFudGlhdGUiLCJmbGFnIiwibnVtcyIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFNpYmxpbmdJbmRleCIsImFuY2hvclgiLCJhbmNob3JZIiwibmV3UG9zaXRpb24iLCJwYXJlbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsInNldFBvc2l0aW9uIiwiY3JlYXRlTWFwIiwiZmxhZ3MiLCJnZXRDb21wb25lbnRzIiwiaSIsIm1hcCIsIkFycmF5IiwieSIsImdyaWRTaXplIiwiaiIsIngiLCJ2MiIsImRhdGEiLCJzdGFydCIsImdyaWROdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsVUFBVSxFQUFFLENBRko7QUFJUkMsSUFBQUEsVUFBVSxFQUFFLENBSko7QUFNUkMsSUFBQUEsU0FBUyxFQUFFLENBTkg7QUFRUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUVSLEVBQUUsQ0FBQ1M7QUFGSCxLQVJGO0FBYVJDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkYsTUFBQUEsSUFBSSxFQUFFUixFQUFFLENBQUNTO0FBRkg7QUFiRixHQUhQOztBQXNCTDs7Ozs7OztBQU9BRSxFQUFBQSxVQUFVLEVBQUUsb0JBQVNDLFFBQVQsRUFBbUJDLElBQW5CLEVBQXlCO0FBQ2pDLFFBQUlDLE9BQU8sR0FBRyxJQUFkLENBRGlDLENBR2pDOztBQUNBLFlBQVFELElBQVI7QUFDSSxXQUFLLENBQUw7QUFDSUMsUUFBQUEsT0FBTyxHQUFHZCxFQUFFLENBQUNlLFdBQUgsQ0FBZSxLQUFLUixRQUFwQixDQUFWO0FBQ0E7O0FBQ0osV0FBSyxDQUFMO0FBQ0lPLFFBQUFBLE9BQU8sR0FBR2QsRUFBRSxDQUFDZSxXQUFILENBQWUsS0FBS0wsUUFBcEIsQ0FBVjtBQUNBO0FBTlIsS0FKaUMsQ0FhakM7OztBQUNBSSxJQUFBQSxPQUFPLENBQUNFLElBQVIsR0FBZUgsSUFBZjtBQUNBQyxJQUFBQSxPQUFPLENBQUNHLElBQVIsR0FBZSxDQUFmO0FBRUEsU0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CTCxPQUFuQixFQWpCaUMsQ0FtQmpDOztBQUNBQSxJQUFBQSxPQUFPLENBQUNNLGVBQVIsQ0FBd0IsQ0FBeEIsRUFwQmlDLENBc0JqQzs7QUFDQU4sSUFBQUEsT0FBTyxDQUFDTyxPQUFSLEdBQWtCLENBQWxCO0FBQ0FQLElBQUFBLE9BQU8sQ0FBQ1EsT0FBUixHQUFrQixDQUFsQixDQXhCaUMsQ0EwQmpDOztBQUNBLFFBQUlDLFdBQVcsR0FBR1QsT0FBTyxDQUFDVSxNQUFSLENBQWVDLG9CQUFmLENBQW9DYixRQUFwQyxDQUFsQjtBQUNBRSxJQUFBQSxPQUFPLENBQUNZLFdBQVIsQ0FBb0JILFdBQXBCO0FBRUEsV0FBT1QsT0FBUDtBQUVILEdBN0RJOztBQWdFTDs7O0FBR0FhLEVBQUFBLFNBQVMsRUFBRSxxQkFBVztBQUNsQixRQUFJQyxLQUFLLEdBQUcsS0FBS1YsSUFBTCxDQUFVVyxhQUFWLENBQXdCN0IsRUFBRSxDQUFDRSxTQUEzQixFQUFzQyxDQUF0QyxDQUFaLENBRGtCLENBQ29DOztBQUV0RCxTQUFJLElBQUk0QixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsRUFBbkIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsV0FBS0MsR0FBTCxDQUFTRCxDQUFULElBQWMsSUFBSUUsS0FBSixFQUFkO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHLEtBQUs1QixVQUFMLEdBQWtCeUIsQ0FBQyxHQUFHLEtBQUtJLFFBQW5DOztBQUNBLFdBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLEVBQW5CLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLFlBQUlDLENBQUMsR0FBRyxLQUFLaEMsVUFBTCxHQUFrQitCLENBQUMsR0FBRyxLQUFLRCxRQUFuQztBQUNBLGFBQUtILEdBQUwsQ0FBU0QsQ0FBVCxFQUFZSyxDQUFaLElBQWlCLEtBQUt4QixVQUFMLENBQWdCWCxFQUFFLENBQUNxQyxFQUFILENBQU1ELENBQU4sRUFBU0gsQ0FBVCxDQUFoQixFQUE2QkwsS0FBSyxDQUFDVSxJQUFOLENBQVdSLENBQVgsRUFBY0ssQ0FBZCxDQUE3QixDQUFqQjtBQUNIO0FBQ0o7QUFFSixHQS9FSTtBQWlGTEksRUFBQUEsS0FqRkssbUJBaUZJO0FBRUwsU0FBS1IsR0FBTCxHQUFXLElBQUlDLEtBQUosRUFBWDtBQUVBLFNBQUtRLE9BQUwsR0FBZSxFQUFmO0FBRUEsU0FBS04sUUFBTCxHQUFnQixLQUFLNUIsU0FBTCxHQUFlLEtBQUtrQyxPQUFwQztBQUVBLFNBQUtiLFNBQUw7QUFDSDtBQTFGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOWKqOaAgeeUn+aIkOaji+ebmFxuICogQHByb3BlcnR5IHtjYy5Ob2RlfSBub2RlIOivpeiEmuacrOaMgui9veeahOiKgueCuVxuICogXG4gKiBAcHJvcGVydHkge051bWJlcn0gdXBwZXJMZWZ0WCDmo4vnm5jlt6bkuIrop5LmqKrlnZDmoIdcbiAqIFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IHVwcGVyTGVmdFkg5qOL55uY5bem5LiK6KeS57q15Z2Q5qCHXG4gKiBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBicm9hZFNpemUg5qOL55uY6L656ZW/XG4gKiBcbiAqIEBwcm9wZXJ0eSB7Y2MuUHJlZmFifSBncmlkV2FsbCDmoLzlrZDpooTliLbkvZPotYTmupAt5aKZ5L2TXG4gKiBcbiAqIEBwcm9wZXJ0eSB7Y2MuUHJlZmFifSBncmlkUGF0aCDmoLzlrZDpooTliLbkvZPotYTmupAt6Lev5b6EXG4gKiBcbiAqIEBwcm9wZXJ0eSB7Y2MuTm9kZVtdfSBtYXAg5YyF5ZCr5omA5pyJ5qC85a2Q55qE5pWw57uEXG4gKiBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBncmlkTnVtIOavj+i+ueagvOWtkOaVsC0t5Zu65a6a5Li6MTBcbiAqIFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IGdyaWRTaXplIOagvOWtkOWkp+Wwj1xuICovXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIHVwcGVyTGVmdFg6IDAsIFxuXG4gICAgICAgIHVwcGVyTGVmdFk6IDAsIFxuXG4gICAgICAgIGJyb2FkU2l6ZTogMCxcbiAgICAgICBcbiAgICAgICAgZ3JpZFdhbGw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcblxuICAgICAgICBncmlkUGF0aDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LCAgICAgICAgICAgICAgXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWKqOaAgeeUn+aIkOagvOWtkOW5tuWwhuWFtua3u+WKoOWIsOWcuuaZr+S4rVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Y2MuVjJ9IHBvc2l0aW9uIOeUn+aIkOagvOWtkOeahOS9jee9rlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0ga2luZCDmoLzlrZDnmoTnsbvlnotcbiAgICAgKiBAcmV0dXJucyB7R3JpZH0g55Sf5oiQ5qC85a2Q55qE5byV55SoXG4gICAgICovXG4gICAgY3JlYXRlR3JpZDogZnVuY3Rpb24ocG9zaXRpb24sIGtpbmQpIHtcbiAgICAgICAgdmFyIG5ld0dyaWQgPSBudWxsO1xuXG4gICAgICAgIC8vIOagueaNruagvOWtkOenjeexu+eUn+aIkOiKgueCuVxuICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBuZXdHcmlkID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmlkV2FsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbmV3R3JpZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JpZFBhdGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMOS4uuWimSwgMeS4uui3rywgMuS4uueBrywgM+S4uuWPl+aUu+WHu1xuICAgICAgICBuZXdHcmlkLmZsYWcgPSBraW5kO1xuICAgICAgICBuZXdHcmlkLm51bXMgPSAwO1xuXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdHcmlkKTtcblxuICAgICAgICAvLyDorr7nva7moLzlrZDlsYLnuqdcbiAgICAgICAgbmV3R3JpZC5zZXRTaWJsaW5nSW5kZXgoMik7IFxuXG4gICAgICAgIC8vIOS9v+avj+S4quagvOWtkOS7peW3puS4iuinkuS4uumUmueCuVxuICAgICAgICBuZXdHcmlkLmFuY2hvclggPSAwO1xuICAgICAgICBuZXdHcmlkLmFuY2hvclkgPSAxO1xuICAgICAgICBcbiAgICAgICAgLy8g6K6+572u5qC85a2Q5L2N572uXG4gICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IG5ld0dyaWQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc2l0aW9uKTtcbiAgICAgICAgbmV3R3JpZC5zZXRQb3NpdGlvbihuZXdQb3NpdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIG5ld0dyaWQ7XG5cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiDliJvlu7rmo4vnm5hcbiAgICAgKi9cbiAgICBjcmVhdGVNYXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZmxhZ3MgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpWzFdOyAvLyDlhbPljaHmlbDmja7ohJrmnKzkuIDlrprpnIDmjILlnKjnrKwz5L2N572uXG5cbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubWFwW2ldID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICB2YXIgeSA9IHRoaXMudXBwZXJMZWZ0WSAtIGkgKiB0aGlzLmdyaWRTaXplO1xuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXMudXBwZXJMZWZ0WCArIGogKiB0aGlzLmdyaWRTaXplO1xuICAgICAgICAgICAgICAgIHRoaXMubWFwW2ldW2pdID0gdGhpcy5jcmVhdGVHcmlkKGNjLnYyKHgsIHkpLCBmbGFncy5kYXRhW2ldW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIHRoaXMuZ3JpZE51bSA9IDEwO1xuIFxuICAgICAgICB0aGlzLmdyaWRTaXplID0gdGhpcy5icm9hZFNpemUvdGhpcy5ncmlkTnVtO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlTWFwKCk7XG4gICAgfSxcblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/BlackXiang.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '337cf02nLhPhqbb8D3E7Oro', 'BlackXiang');
// scripts/piece/BlackXiang.js

"use strict";

/**
 * 控制黑棋象的组件
 */
cc.Class({
  "extends": require("BlackPiece"),
  setflag: function setflag(X, Y) {
    var grids = this.node.grids;
    var dirx = Array(-2, 2, 2, -2);
    var diry = Array(2, 2, -2, -2); // 象眼

    var hinderx = Array(-1, 1, 1, -1);
    var hindery = Array(1, 1, -1, -1); // 周围格子

    for (var i = 0; i < 4; i++) {
      var x = X + dirx[i];
      var y = Y + diry[i];
      var hx = X + hinderx[i];
      var hy = Y + hindery[i];
      if (x < 0 || x > 9 || y < 0 || y > 9) continue;
      if (grids[x][y].flag == 0) continue; // 检查是否绊象眼

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrWGlhbmcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzZXRmbGFnIiwiWCIsIlkiLCJncmlkcyIsIm5vZGUiLCJkaXJ4IiwiQXJyYXkiLCJkaXJ5IiwiaGluZGVyeCIsImhpbmRlcnkiLCJpIiwieCIsInkiLCJoeCIsImh5IiwiZmxhZyIsImhhc1BpZWNlIiwicGllY2UiLCJ0eXBlIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUNBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ04sYUFBU0MsT0FBTyxDQUFDLFlBQUQsQ0FEVjtBQUdOQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ3BCLFFBQUlDLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVELEtBQXRCO0FBQ0EsUUFBSUUsSUFBSSxHQUFHQyxLQUFLLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFDLENBQVosQ0FBaEI7QUFDQSxRQUFJQyxJQUFJLEdBQUdELEtBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQUMsQ0FBUixFQUFXLENBQUMsQ0FBWixDQUFoQixDQUhvQixDQUtwQjs7QUFDQSxRQUFJRSxPQUFPLEdBQUdGLEtBQUssQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQUMsQ0FBWixDQUFuQjtBQUNBLFFBQUlHLE9BQU8sR0FBR0gsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBQyxDQUFaLENBQW5CLENBUG9CLENBU3BCOztBQUNBLFNBQUksSUFBSUksQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO0FBQ3ZCLFVBQUlDLENBQUMsR0FBR1YsQ0FBQyxHQUFHSSxJQUFJLENBQUNLLENBQUQsQ0FBaEI7QUFDQSxVQUFJRSxDQUFDLEdBQUdWLENBQUMsR0FBR0ssSUFBSSxDQUFDRyxDQUFELENBQWhCO0FBQ0EsVUFBSUcsRUFBRSxHQUFHWixDQUFDLEdBQUdPLE9BQU8sQ0FBQ0UsQ0FBRCxDQUFwQjtBQUNBLFVBQUlJLEVBQUUsR0FBR1osQ0FBQyxHQUFHTyxPQUFPLENBQUNDLENBQUQsQ0FBcEI7QUFFQSxVQUFHQyxDQUFDLEdBQUcsQ0FBSixJQUFTQSxDQUFDLEdBQUcsQ0FBYixJQUFrQkMsQ0FBQyxHQUFHLENBQXRCLElBQTJCQSxDQUFDLEdBQUcsQ0FBbEMsRUFBcUM7QUFDckMsVUFBR1QsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CLENBQXZCLEVBQTBCLFNBUEgsQ0FTdkI7O0FBQ0EsVUFBR0YsRUFBRSxJQUFJLENBQU4sSUFBV0EsRUFBRSxJQUFJLENBQWpCLElBQXNCQyxFQUFFLElBQUksQ0FBNUIsSUFBaUNBLEVBQUUsSUFBSSxDQUF2QyxLQUNFWCxLQUFLLENBQUNVLEVBQUQsQ0FBTCxDQUFVQyxFQUFWLEVBQWNDLElBQWQsSUFBc0IsQ0FBdEIsSUFBMkJaLEtBQUssQ0FBQ1UsRUFBRCxDQUFMLENBQVVDLEVBQVYsRUFBY0UsUUFEM0MsQ0FBSCxFQUN5RDs7QUFFekQsVUFBR2IsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUFaLElBQXdCYixLQUFLLENBQUNRLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLEtBQVosQ0FBa0JDLElBQWxCLElBQTBCLENBQXJELEVBQXdEO0FBQ3BEZixRQUFBQSxLQUFLLENBQUNRLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLEtBQVosQ0FBa0JFLE9BQWxCLEdBQTRCLElBQTVCO0FBQ0g7QUFFSjtBQUNKO0FBL0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5o6n5Yi26buR5qOL6LGh55qE57uE5Lu2XG4gKi9cblxuIGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiQmxhY2tQaWVjZVwiKSxcblxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKFgsIFkpIHtcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5ub2RlLmdyaWRzO1xuICAgICAgICB2YXIgZGlyeCA9IEFycmF5KC0yLCAyLCAyLCAtMik7XG4gICAgICAgIHZhciBkaXJ5ID0gQXJyYXkoMiwgMiwgLTIsIC0yKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOixoeecvFxuICAgICAgICB2YXIgaGluZGVyeCA9IEFycmF5KC0xLCAxLCAxLCAtMSk7XG4gICAgICAgIHZhciBoaW5kZXJ5ID0gQXJyYXkoMSwgMSwgLTEsIC0xKTtcblxuICAgICAgICAvLyDlkajlm7TmoLzlrZBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBYICsgZGlyeFtpXTtcbiAgICAgICAgICAgIHZhciB5ID0gWSArIGRpcnlbaV07XG4gICAgICAgICAgICB2YXIgaHggPSBYICsgaGluZGVyeFtpXTtcbiAgICAgICAgICAgIHZhciBoeSA9IFkgKyBoaW5kZXJ5W2ldO1xuXG4gICAgICAgICAgICBpZih4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkgY29udGludWU7XG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKbnu4rosaHnnLxcbiAgICAgICAgICAgIGlmKGh4ID49IDAgJiYgaHggPD0gOSAmJiBoeSA+PSAwICYmIGh5IDw9IDkgJiYgXG4gICAgICAgICAgICAgICAgKGdyaWRzW2h4XVtoeV0uZmxhZyA9PSAwIHx8IGdyaWRzW2h4XVtoeV0uaGFzUGllY2UpKSBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoZ3JpZHNbeF1beV0uaGFzUGllY2UgJiYgZ3JpZHNbeF1beV0ucGllY2UudHlwZSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgZ3JpZHNbeF1beV0ucGllY2UuZGlzYWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/BlackJiang.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26e5fyEjH9KIaHn4Lgawqky', 'BlackJiang');
// scripts/piece/BlackJiang.js

"use strict";

/**
 * 控制黑棋将的组件
 */
cc.Class({
  "extends": require("BlackPiece"),
  setflag: function setflag(X, Y) {
    var grids = this.node.grids;
    var dirx = Array(1, 0, 0, 0, -1);
    var diry = Array(0, 1, 0, -1, 0);

    for (var i = 0; i < 5; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrSmlhbmcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzZXRmbGFnIiwiWCIsIlkiLCJncmlkcyIsIm5vZGUiLCJkaXJ4IiwiQXJyYXkiLCJkaXJ5IiwiaSIsIngiLCJ5IiwiZmxhZyIsImhhc1BpZWNlIiwicGllY2UiLCJ0eXBlIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUNBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ04sYUFBU0MsT0FBTyxDQUFDLFlBQUQsQ0FEVjtBQUdOQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNyQixRQUFJQyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QjtBQUNBLFFBQUlFLElBQUksR0FBR0MsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQWQsQ0FBaEI7QUFDQSxRQUFJQyxJQUFJLEdBQUdELEtBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFDLENBQVgsRUFBYyxDQUFkLENBQWhCOztBQUVBLFNBQUksSUFBSUUsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO0FBQ3ZCLFVBQUlDLENBQUMsR0FBR1IsQ0FBQyxHQUFHSSxJQUFJLENBQUNHLENBQUQsQ0FBaEI7QUFDQSxVQUFJRSxDQUFDLEdBQUdSLENBQUMsR0FBR0ssSUFBSSxDQUFDQyxDQUFELENBQWhCO0FBRUEsVUFBR0MsQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxHQUFHLENBQWIsSUFBa0JDLENBQUMsR0FBRyxDQUF0QixJQUEyQkEsQ0FBQyxHQUFHLENBQWxDLEVBQXFDO0FBQ3JDLFVBQUdQLEtBQUssQ0FBQ00sQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUMsSUFBWixJQUFvQixDQUF2QixFQUEwQjs7QUFFMUIsVUFBR1IsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRSxRQUFaLElBQXdCVCxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLEtBQVosQ0FBa0JDLElBQWxCLElBQTBCLENBQXJELEVBQXdEO0FBQ3BEWCxRQUFBQSxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLEtBQVosQ0FBa0JFLE9BQWxCLEdBQTRCLElBQTVCO0FBQ0g7QUFDSjtBQUNKO0FBbkJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5o6n5Yi26buR5qOL5bCG55qE57uE5Lu2XG4gKi9cblxuIGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiQmxhY2tQaWVjZVwiKSxcblxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKCBYLCBZKSB7XG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubm9kZS5ncmlkcztcbiAgICAgICAgdmFyIGRpcnggPSBBcnJheSgxLCAwLCAwLCAwLCAtMSk7XG4gICAgICAgIHZhciBkaXJ5ID0gQXJyYXkoMCwgMSwgMCwgLTEsIDApO1xuXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIHZhciB4ID0gWCArIGRpcnhbaV07XG4gICAgICAgICAgICB2YXIgeSA9IFkgKyBkaXJ5W2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkgY29udGludWU7XG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5oYXNQaWVjZSAmJiBncmlkc1t4XVt5XS5waWVjZS50eXBlID09IDApIHtcbiAgICAgICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/Che.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67cfcg2fc9O9obTYzjFST4w', 'Che');
// scripts/piece/Che.js

"use strict";

/**
 * 控制棋子车的组件
 */
cc.Class({
  "extends": require("Piece"),
  setflag: function setflag(status, X, Y) {
    var x = X;
    var y = Y;
    var grids = this.node.grids; // 自身格子

    grids[X][Y].nums += status; // 向下

    do {
      x++;
      if (x > 9 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);

    x = X; // 向上

    do {
      x--;
      if (x < 0 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);

    x = X; // 向左

    do {
      y--;
      if (y < 0 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);

    y = Y; // 向右

    do {
      y++;
      if (y > 9 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXENoZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwicmVxdWlyZSIsInNldGZsYWciLCJzdGF0dXMiLCJYIiwiWSIsIngiLCJ5IiwiZ3JpZHMiLCJub2RlIiwibnVtcyIsImZsYWciLCJoYXNQaWVjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0MsT0FBTyxDQUFDLE9BQUQsQ0FEWDtBQUdMQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUM1QixRQUFJQyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QixDQUg0QixDQUs1Qjs7QUFDQUEsSUFBQUEsS0FBSyxDQUFDSixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxJQUFaLElBQW9CUCxNQUFwQixDQU40QixDQVE1Qjs7QUFDQSxPQUFHO0FBQ0NHLE1BQUFBLENBQUM7QUFDRCxVQUFHQSxDQUFDLEdBQUcsQ0FBSixJQUFTRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLElBQVosSUFBb0IsQ0FBaEMsRUFBbUM7QUFDbkNILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQlAsTUFBcEI7QUFFSCxLQUxELFFBS1MsQ0FBQ0ssS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxRQUx0Qjs7QUFNQU4sSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBZjRCLENBaUI1Qjs7QUFDQSxPQUFHO0FBQ0NFLE1BQUFBLENBQUM7QUFDRCxVQUFHQSxDQUFDLEdBQUcsQ0FBSixJQUFTRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLElBQVosSUFBb0IsQ0FBaEMsRUFBbUM7QUFDbkNILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQlAsTUFBcEI7QUFFSCxLQUxELFFBS1MsQ0FBQ0ssS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxRQUx0Qjs7QUFNQU4sSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBeEI0QixDQTBCNUI7O0FBQ0EsT0FBRztBQUNDRyxNQUFBQSxDQUFDO0FBQ0QsVUFBR0EsQ0FBQyxHQUFHLENBQUosSUFBU0MsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxJQUFaLElBQW9CLENBQWhDLEVBQW1DO0FBQ25DSCxNQUFBQSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0JQLE1BQXBCO0FBRUgsS0FMRCxRQUtTLENBQUNLLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssUUFMdEI7O0FBTUFMLElBQUFBLENBQUMsR0FBR0YsQ0FBSixDQWpDNEIsQ0FtQzVCOztBQUNBLE9BQUc7QUFDQ0UsTUFBQUEsQ0FBQztBQUNELFVBQUdBLENBQUMsR0FBRyxDQUFKLElBQVNDLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksSUFBWixJQUFvQixDQUFoQyxFQUFtQztBQUNuQ0gsTUFBQUEsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CUCxNQUFwQjtBQUVILEtBTEQsUUFLUyxDQUFDSyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLFFBTHRCO0FBTUgsR0E3Q0ksQ0ErQ0w7O0FBL0NLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5o6n5Yi25qOL5a2Q6L2m55qE57uE5Lu2XG4gKi9cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IHJlcXVpcmUoXCJQaWVjZVwiKSxcblxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKHN0YXR1cywgWCwgWSkge1xuICAgICAgICB2YXIgeCA9IFg7XG4gICAgICAgIHZhciB5ID0gWTtcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5ub2RlLmdyaWRzO1xuICAgXG4gICAgICAgIC8vIOiHqui6q+agvOWtkFxuICAgICAgICBncmlkc1tYXVtZXS5udW1zICs9IHN0YXR1cztcbiAgICAgICAgXG4gICAgICAgIC8vIOWQkeS4i1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICB4Kys7XG4gICAgICAgICAgICBpZih4ID4gOSB8fCBncmlkc1t4XVt5XS5mbGFnID09IDApIGJyZWFrO1xuICAgICAgICAgICAgZ3JpZHNbeF1beV0ubnVtcyArPSBzdGF0dXM7XG5cbiAgICAgICAgfSB3aGlsZSAoIWdyaWRzW3hdW3ldLmhhc1BpZWNlKTtcbiAgICAgICAgeCA9IFg7XG5cbiAgICAgICAgLy8g5ZCR5LiKXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIHgtLTtcbiAgICAgICAgICAgIGlmKHggPCAwIHx8IGdyaWRzW3hdW3ldLmZsYWcgPT0gMCkgYnJlYWs7XG4gICAgICAgICAgICBncmlkc1t4XVt5XS5udW1zICs9IHN0YXR1cztcblxuICAgICAgICB9IHdoaWxlICghZ3JpZHNbeF1beV0uaGFzUGllY2UpO1xuICAgICAgICB4ID0gWDtcblxuICAgICAgICAvLyDlkJHlt6ZcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgeS0tO1xuICAgICAgICAgICAgaWYoeSA8IDAgfHwgZ3JpZHNbeF1beV0uZmxhZyA9PSAwKSBicmVhaztcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xuXG4gICAgICAgIH0gd2hpbGUgKCFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XG4gICAgICAgIHkgPSBZO1xuXG4gICAgICAgIC8vIOWQkeWPs1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICB5Kys7XG4gICAgICAgICAgICBpZih5ID4gOSB8fCBncmlkc1t4XVt5XS5mbGFnID09IDApIGJyZWFrO1xuICAgICAgICAgICAgZ3JpZHNbeF1beV0ubnVtcyArPSBzdGF0dXM7XG5cbiAgICAgICAgfSB3aGlsZSAoIWdyaWRzW3hdW3ldLmhhc1BpZWNlKTtcbiAgICB9LFxuXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrWnUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzZXRmbGFnIiwiWCIsIlkiLCJncmlkcyIsIm5vZGUiLCJkaXJ4IiwiQXJyYXkiLCJkaXJ5IiwiaSIsIngiLCJ5IiwiZmxhZyIsImhhc1BpZWNlIiwicGllY2UiLCJ0eXBlIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUNBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ04sYUFBU0MsT0FBTyxDQUFDLFlBQUQsQ0FEVjtBQUdOQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ3BCLFFBQUlDLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVELEtBQXRCO0FBQ0EsUUFBSUUsSUFBSSxHQUFHQyxLQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBWCxDQUFoQjs7QUFFQSxTQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxDQUFuQixFQUFzQkEsQ0FBQyxFQUF2QixFQUEyQjtBQUN2QixVQUFJQyxDQUFDLEdBQUdSLENBQUMsR0FBR0ksSUFBSSxDQUFDRyxDQUFELENBQWhCO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHUixDQUFDLEdBQUdLLElBQUksQ0FBQ0MsQ0FBRCxDQUFoQjtBQUVBLFVBQUdDLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBRyxDQUFiLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEIsSUFBMkJBLENBQUMsR0FBRyxDQUFsQyxFQUFxQztBQUNyQyxVQUFHUCxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlDLElBQVosSUFBb0IsQ0FBdkIsRUFBMEI7O0FBRTFCLFVBQUdSLEtBQUssQ0FBQ00sQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUUsUUFBWixJQUF3QlQsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxLQUFaLENBQWtCQyxJQUFsQixJQUEwQixDQUFyRCxFQUF3RDtBQUNwRFgsUUFBQUEsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxLQUFaLENBQWtCRSxPQUFsQixHQUE0QixJQUE1QjtBQUNIO0FBQ0o7QUFDSjtBQW5CSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaOp+WItum7keaji+WNkueahOe7hOS7tlxuICovXG5cbiBjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogcmVxdWlyZShcIkJsYWNrUGllY2VcIiksXG5cbiAgICBzZXRmbGFnOiBmdW5jdGlvbihYLCBZKSB7XG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubm9kZS5ncmlkcztcbiAgICAgICAgdmFyIGRpcnggPSBBcnJheSgwLCAwLCAwLCAxKTtcbiAgICAgICAgdmFyIGRpcnkgPSBBcnJheSgxLCAwLCAtMSwgMCk7XG5cbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBYICsgZGlyeFtpXTtcbiAgICAgICAgICAgIHZhciB5ID0gWSArIGRpcnlbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmKGdyaWRzW3hdW3ldLmZsYWcgPT0gMCkgY29udGludWU7XG5cbiAgICAgICAgICAgIGlmKGdyaWRzW3hdW3ldLmhhc1BpZWNlICYmIGdyaWRzW3hdW3ldLnBpZWNlLnR5cGUgPT0gMCkge1xuICAgICAgICAgICAgICAgIGdyaWRzW3hdW3ldLnBpZWNlLmRpc2FibGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXFNoaS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwicmVxdWlyZSIsInNldGZsYWciLCJzdGF0dXMiLCJYIiwiWSIsImdyaWRzIiwibm9kZSIsImRpcngiLCJBcnJheSIsImRpcnkiLCJpIiwieCIsInkiLCJmbGFnIiwibnVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0MsT0FBTyxDQUFDLE9BQUQsQ0FEWDtBQUdMQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUM1QixRQUFJQyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QjtBQUNBLFFBQUlFLElBQUksR0FBR0MsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUFoQjs7QUFFQSxTQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxDQUFuQixFQUFzQkEsQ0FBQyxFQUF2QixFQUEyQjtBQUN2QixVQUFJQyxDQUFDLEdBQUdSLENBQUMsR0FBR0ksSUFBSSxDQUFDRyxDQUFELENBQWhCO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHUixDQUFDLEdBQUdLLElBQUksQ0FBQ0MsQ0FBRCxDQUFoQjtBQUVBLFVBQUdDLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBRyxDQUFiLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEIsSUFBMkJBLENBQUMsR0FBRyxDQUFsQyxFQUFxQztBQUNyQyxVQUFHUCxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlDLElBQVosSUFBb0IsQ0FBdkIsRUFBMEI7QUFFMUJSLE1BQUFBLEtBQUssQ0FBQ00sQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUUsSUFBWixJQUFvQlosTUFBcEI7QUFDSDtBQUNKO0FBakJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5o6n5Yi25qOL5a2Q5aOr55qE57uE5Lu2XG4gKi9cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IHJlcXVpcmUoXCJQaWVjZVwiKSxcblxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKHN0YXR1cywgWCwgWSkge1xuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm5vZGUuZ3JpZHM7XG4gICAgICAgIHZhciBkaXJ4ID0gQXJyYXkoMCwgMSwgLTEsIDEsIC0xKTtcbiAgICAgICAgdmFyIGRpcnkgPSBBcnJheSgwLCAtMSwgMSwgMSwgLTEpO1xuXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIHZhciB4ID0gWCArIGRpcnhbaV07XG4gICAgICAgICAgICB2YXIgeSA9IFkgKyBkaXJ5W2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkgY29udGludWU7XG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBncmlkc1t4XVt5XS5udW1zICs9IHN0YXR1cztcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/Ma.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8592bIi14BHJI0WtsZ0JmJa', 'Ma');
// scripts/piece/Ma.js

"use strict";

/**
 * 控制棋子马的组件
 * 
 */
cc.Class({
  "extends": require("Piece"),
  setflag: function setflag(status, X, Y) {
    var grids = this.node.grids;
    var dirx = Array(-2, -1, 1, 2, 2, 1, -1, -2);
    var diry = Array(1, 2, 2, 1, -1, -2, -2, -1); // 马脚

    var hinderx = Array(-1, 0, 0, 1, 1, 0, 0, -1);
    var hindery = Array(0, 1, 1, 0, 0, -1, -1, 0); // 自身格子

    grids[X][Y].nums += status; // 周围格子

    for (var i = 0; i < 8; i++) {
      var x = X + dirx[i];
      var y = Y + diry[i];
      var hx = X + hinderx[i];
      var hy = Y + hindery[i];
      if (x < 0 || x > 9 || y < 0 || y > 9) continue;
      if (grids[x][y].flag == 0) continue; // 检查是否绊马脚

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXE1hLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsInN0YXR1cyIsIlgiLCJZIiwiZ3JpZHMiLCJub2RlIiwiZGlyeCIsIkFycmF5IiwiZGlyeSIsImhpbmRlcngiLCJoaW5kZXJ5IiwibnVtcyIsImkiLCJ4IiwieSIsImh4IiwiaHkiLCJmbGFnIiwiaGFzUGllY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFLQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTQyxPQUFPLENBQUMsT0FBRCxDQURYO0FBR0xDLEVBQUFBLE9BQU8sRUFBRSxpQkFBU0MsTUFBVCxFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCO0FBQzVCLFFBQUlDLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVELEtBQXRCO0FBQ0EsUUFBSUUsSUFBSSxHQUFHQyxLQUFLLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBQyxDQUFOLEVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQUMsQ0FBdEIsRUFBeUIsQ0FBQyxDQUExQixDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQWQsRUFBaUIsQ0FBQyxDQUFsQixFQUFxQixDQUFDLENBQXRCLEVBQXlCLENBQUMsQ0FBMUIsQ0FBaEIsQ0FINEIsQ0FLNUI7O0FBQ0EsUUFBSUUsT0FBTyxHQUFHRixLQUFLLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUFDLENBQXhCLENBQW5CO0FBQ0EsUUFBSUcsT0FBTyxHQUFHSCxLQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBQyxDQUFqQixFQUFvQixDQUFDLENBQXJCLEVBQXdCLENBQXhCLENBQW5CLENBUDRCLENBUzVCOztBQUNBSCxJQUFBQSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlRLElBQVosSUFBb0JWLE1BQXBCLENBVjRCLENBWTVCOztBQUNBLFNBQUksSUFBSVcsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO0FBQ3ZCLFVBQUlDLENBQUMsR0FBR1gsQ0FBQyxHQUFHSSxJQUFJLENBQUNNLENBQUQsQ0FBaEI7QUFDQSxVQUFJRSxDQUFDLEdBQUdYLENBQUMsR0FBR0ssSUFBSSxDQUFDSSxDQUFELENBQWhCO0FBQ0EsVUFBSUcsRUFBRSxHQUFHYixDQUFDLEdBQUdPLE9BQU8sQ0FBQ0csQ0FBRCxDQUFwQjtBQUNBLFVBQUlJLEVBQUUsR0FBR2IsQ0FBQyxHQUFHTyxPQUFPLENBQUNFLENBQUQsQ0FBcEI7QUFFQSxVQUFHQyxDQUFDLEdBQUcsQ0FBSixJQUFTQSxDQUFDLEdBQUcsQ0FBYixJQUFrQkMsQ0FBQyxHQUFHLENBQXRCLElBQTJCQSxDQUFDLEdBQUcsQ0FBbEMsRUFBcUM7QUFDckMsVUFBR1YsS0FBSyxDQUFDUyxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CLENBQXZCLEVBQTBCLFNBUEgsQ0FTdkI7O0FBQ0EsVUFBR0YsRUFBRSxJQUFJLENBQU4sSUFBV0EsRUFBRSxJQUFJLENBQWpCLElBQXNCQyxFQUFFLElBQUksQ0FBNUIsSUFBaUNBLEVBQUUsSUFBSSxDQUF2QyxLQUNFWixLQUFLLENBQUNXLEVBQUQsQ0FBTCxDQUFVQyxFQUFWLEVBQWNDLElBQWQsSUFBc0IsQ0FBdEIsSUFBMkJiLEtBQUssQ0FBQ1csRUFBRCxDQUFMLENBQVVDLEVBQVYsRUFBY0UsUUFEM0MsQ0FBSCxFQUN5RDtBQUV6RGQsTUFBQUEsS0FBSyxDQUFDUyxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSCxJQUFaLElBQW9CVixNQUFwQjtBQUNIO0FBQ0o7QUEvQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmjqfliLbmo4vlrZDpqaznmoTnu4Tku7ZcbiAqIFxuICovXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiUGllY2VcIiksXG5cbiAgICBzZXRmbGFnOiBmdW5jdGlvbihzdGF0dXMsIFgsIFkpIHtcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5ub2RlLmdyaWRzO1xuICAgICAgICB2YXIgZGlyeCA9IEFycmF5KC0yLCAtMSwgMSwgMiwgMiwgMSwgLTEsIC0yKTtcbiAgICAgICAgdmFyIGRpcnkgPSBBcnJheSgxLCAyLCAyLCAxLCAtMSwgLTIsIC0yLCAtMSk7XG5cbiAgICAgICAgLy8g6ams6ISaXG4gICAgICAgIHZhciBoaW5kZXJ4ID0gQXJyYXkoLTEsIDAsIDAsIDEsIDEsIDAsIDAsIC0xKTtcbiAgICAgICAgdmFyIGhpbmRlcnkgPSBBcnJheSgwLCAxLCAxLCAwLCAwLCAtMSwgLTEsIDApO1xuXG4gICAgICAgIC8vIOiHqui6q+agvOWtkFxuICAgICAgICBncmlkc1tYXVtZXS5udW1zICs9IHN0YXR1cztcblxuICAgICAgICAvLyDlkajlm7TmoLzlrZBcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBYICsgZGlyeFtpXTtcbiAgICAgICAgICAgIHZhciB5ID0gWSArIGRpcnlbaV07XG4gICAgICAgICAgICB2YXIgaHggPSBYICsgaGluZGVyeFtpXTtcbiAgICAgICAgICAgIHZhciBoeSA9IFkgKyBoaW5kZXJ5W2ldO1xuXG4gICAgICAgICAgICBpZih4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkgY29udGludWU7XG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKbnu4rpqazohJpcbiAgICAgICAgICAgIGlmKGh4ID49IDAgJiYgaHggPD0gOSAmJiBoeSA+PSAwICYmIGh5IDw9IDkgJiYgXG4gICAgICAgICAgICAgICAgKGdyaWRzW2h4XVtoeV0uZmxhZyA9PSAwIHx8IGdyaWRzW2h4XVtoeV0uaGFzUGllY2UpKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXFNodWFpLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsInN0YXR1cyIsIlgiLCJZIiwiZ3JpZHMiLCJub2RlIiwiZGlyeCIsIkFycmF5IiwiZGlyeSIsImkiLCJ4IiwieSIsImZsYWciLCJudW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFJQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTQyxPQUFPLENBQUMsT0FBRCxDQURYO0FBR0xDLEVBQUFBLE9BQU8sRUFBRSxpQkFBU0MsTUFBVCxFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCO0FBQzVCLFFBQUlDLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVELEtBQXRCO0FBQ0EsUUFBSUUsSUFBSSxHQUFHQyxLQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQUMsQ0FBZCxDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQUMsQ0FBWCxFQUFjLENBQWQsQ0FBaEI7O0FBRUEsU0FBSSxJQUFJRSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsQ0FBbkIsRUFBc0JBLENBQUMsRUFBdkIsRUFBMkI7QUFDdkIsVUFBSUMsQ0FBQyxHQUFHUixDQUFDLEdBQUdJLElBQUksQ0FBQ0csQ0FBRCxDQUFoQjtBQUNBLFVBQUlFLENBQUMsR0FBR1IsQ0FBQyxHQUFHSyxJQUFJLENBQUNDLENBQUQsQ0FBaEI7QUFFQSxVQUFHQyxDQUFDLEdBQUcsQ0FBSixJQUFTQSxDQUFDLEdBQUcsQ0FBYixJQUFrQkMsQ0FBQyxHQUFHLENBQXRCLElBQTJCQSxDQUFDLEdBQUcsQ0FBbEMsRUFBcUM7QUFDckMsVUFBR1AsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZQyxJQUFaLElBQW9CLENBQXZCLEVBQTBCO0FBRTFCUixNQUFBQSxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlFLElBQVosSUFBb0JaLE1BQXBCO0FBQ0g7QUFDSjtBQWpCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaOp+WItuaji+WtkOW4heeahOe7hOS7tlxuICovXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiUGllY2VcIiksXG5cbiAgICBzZXRmbGFnOiBmdW5jdGlvbihzdGF0dXMsIFgsIFkpIHtcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5ub2RlLmdyaWRzO1xuICAgICAgICB2YXIgZGlyeCA9IEFycmF5KDEsIDAsIDAsIDAsIC0xKTtcbiAgICAgICAgdmFyIGRpcnkgPSBBcnJheSgwLCAxLCAwLCAtMSwgMCk7XG5cbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBYICsgZGlyeFtpXTtcbiAgICAgICAgICAgIHZhciB5ID0gWSArIGRpcnlbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmKGdyaWRzW3hdW3ldLmZsYWcgPT0gMCkgY29udGludWU7XG5cbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/Pao.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78cb6e05FRC17M1u5Qoseiy', 'Pao');
// scripts/piece/Pao.js

"use strict";

/**
 * 控制棋子炮的组件
 */
cc.Class({
  "extends": require("Piece"),
  setflag: function setflag(status, X, Y) {
    var x = X;
    var y = Y;
    var grids = this.node.grids; // 自身格子

    grids[X][Y].nums += status; // ---------------向下----------------

    do {
      x++;
    } while (x >= 0 && x <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);

    do {
      x++;
      if (x > 9 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);

    x = X; // ---------------向上----------------

    do {
      x--;
    } while (x >= 0 && x <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);

    do {
      x--;
      if (x < 0 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);

    x = X; // ---------------向左----------------

    do {
      y--;
    } while (y >= 0 && y <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);

    do {
      y--;
      if (y < 0 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);

    y = Y; // ---------------向右----------------

    do {
      y++;
    } while (y >= 0 && y <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);

    do {
      y++;
      if (y > 9 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXFBhby5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwicmVxdWlyZSIsInNldGZsYWciLCJzdGF0dXMiLCJYIiwiWSIsIngiLCJ5IiwiZ3JpZHMiLCJub2RlIiwibnVtcyIsImZsYWciLCJoYXNQaWVjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0MsT0FBTyxDQUFDLE9BQUQsQ0FEWDtBQUdMQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUM1QixRQUFJQyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QixDQUg0QixDQUs1Qjs7QUFDQUEsSUFBQUEsS0FBSyxDQUFDSixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxJQUFaLElBQW9CUCxNQUFwQixDQU40QixDQVE1Qjs7QUFDQSxPQUFHO0FBQ0NHLE1BQUFBLENBQUM7QUFDSixLQUZELFFBRVNBLENBQUMsSUFBRyxDQUFKLElBQVNBLENBQUMsSUFBSSxDQUFkLElBQW1CRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLElBQVosSUFBb0IsQ0FBdkMsSUFBNEMsQ0FBQ0gsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxRQUZsRTs7QUFJQSxPQUFHO0FBQ0NOLE1BQUFBLENBQUM7QUFDRCxVQUFHQSxDQUFDLEdBQUcsQ0FBSixJQUFTRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLElBQVosSUFBb0IsQ0FBaEMsRUFBbUM7QUFDbkNILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQlAsTUFBcEI7QUFFSCxLQUxELFFBS1MsQ0FBQ0ssS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxRQUx0Qjs7QUFNQU4sSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBbkI0QixDQXFCNUI7O0FBQ0EsT0FBRztBQUNDRSxNQUFBQSxDQUFDO0FBQ0osS0FGRCxRQUVTQSxDQUFDLElBQUcsQ0FBSixJQUFTQSxDQUFDLElBQUksQ0FBZCxJQUFtQkUsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxJQUFaLElBQW9CLENBQXZDLElBQTRDLENBQUNILEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssUUFGbEU7O0FBSUEsT0FBRztBQUNDTixNQUFBQSxDQUFDO0FBQ0QsVUFBR0EsQ0FBQyxHQUFHLENBQUosSUFBU0UsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxJQUFaLElBQW9CLENBQWhDLEVBQW1DO0FBQ25DSCxNQUFBQSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0JQLE1BQXBCO0FBRUgsS0FMRCxRQUtTLENBQUNLLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssUUFMdEI7O0FBTUFOLElBQUFBLENBQUMsR0FBR0YsQ0FBSixDQWhDNEIsQ0FrQzVCOztBQUNBLE9BQUc7QUFDQ0csTUFBQUEsQ0FBQztBQUNKLEtBRkQsUUFFU0EsQ0FBQyxJQUFHLENBQUosSUFBU0EsQ0FBQyxJQUFJLENBQWQsSUFBbUJDLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksSUFBWixJQUFvQixDQUF2QyxJQUE0QyxDQUFDSCxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLFFBRmxFOztBQUlBLE9BQUc7QUFDQ0wsTUFBQUEsQ0FBQztBQUNELFVBQUdBLENBQUMsR0FBRyxDQUFKLElBQVNDLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksSUFBWixJQUFvQixDQUFoQyxFQUFtQztBQUNuQ0gsTUFBQUEsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CUCxNQUFwQjtBQUVILEtBTEQsUUFLUyxDQUFDSyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLFFBTHRCOztBQU1BTCxJQUFBQSxDQUFDLEdBQUdGLENBQUosQ0E3QzRCLENBK0M1Qjs7QUFDQSxPQUFHO0FBQ0NFLE1BQUFBLENBQUM7QUFDSixLQUZELFFBRVNBLENBQUMsSUFBRyxDQUFKLElBQVNBLENBQUMsSUFBSSxDQUFkLElBQW1CQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLElBQVosSUFBb0IsQ0FBdkMsSUFBNEMsQ0FBQ0gsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxRQUZsRTs7QUFJQSxPQUFHO0FBQ0NMLE1BQUFBLENBQUM7QUFDRCxVQUFHQSxDQUFDLEdBQUcsQ0FBSixJQUFTQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLElBQVosSUFBb0IsQ0FBaEMsRUFBbUM7QUFDbkNILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQlAsTUFBcEI7QUFFSCxLQUxELFFBS1MsQ0FBQ0ssS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxRQUx0QjtBQU1IO0FBN0RJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5o6n5Yi25qOL5a2Q54Ku55qE57uE5Lu2XG4gKi9cblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IHJlcXVpcmUoXCJQaWVjZVwiKSxcblxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKHN0YXR1cywgWCwgWSkge1xuICAgICAgICB2YXIgeCA9IFg7XG4gICAgICAgIHZhciB5ID0gWTtcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5ub2RlLmdyaWRzO1xuXG4gICAgICAgIC8vIOiHqui6q+agvOWtkFxuICAgICAgICBncmlkc1tYXVtZXS5udW1zICs9IHN0YXR1cztcbiAgICAgICAgXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLeWQkeS4iy0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgeCsrO1xuICAgICAgICB9IHdoaWxlICh4ID49MCAmJiB4IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgaWYoeCA+IDkgfHwgZ3JpZHNbeF1beV0uZmxhZyA9PSAwKSBicmVhaztcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xuXG4gICAgICAgIH0gd2hpbGUgKCFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XG4gICAgICAgIHggPSBYO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLeWQkeS4ii0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgeC0tO1xuICAgICAgICB9IHdoaWxlICh4ID49MCAmJiB4IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgeC0tO1xuICAgICAgICAgICAgaWYoeCA8IDAgfHwgZ3JpZHNbeF1beV0uZmxhZyA9PSAwKSBicmVhaztcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xuXG4gICAgICAgIH0gd2hpbGUgKCFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XG4gICAgICAgIHggPSBYO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLeWQkeW3pi0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgeS0tO1xuICAgICAgICB9IHdoaWxlICh5ID49MCAmJiB5IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgeS0tO1xuICAgICAgICAgICAgaWYoeSA8IDAgfHwgZ3JpZHNbeF1beV0uZmxhZyA9PSAwKSBicmVhaztcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xuXG4gICAgICAgIH0gd2hpbGUgKCFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XG4gICAgICAgIHkgPSBZO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLeWQkeWPsy0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgeSsrO1xuICAgICAgICB9IHdoaWxlICh5ID49MCAmJiB5IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgeSsrO1xuICAgICAgICAgICAgaWYoeSA+IDkgfHwgZ3JpZHNbeF1beV0uZmxhZyA9PSAwKSBicmVhaztcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xuXG4gICAgICAgIH0gd2hpbGUgKCFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XG4gICAgfSxcblxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/Bing.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5a4b66W9PJForDh4hEJUJZ3', 'Bing');
// scripts/piece/Bing.js

"use strict";

/**
 * 控制棋子兵的组件
 */
cc.Class({
  "extends": require("Piece"),
  setflag: function setflag(status, X, Y) {
    var grids = this.node.grids;
    var dirx = Array(0, 0, 0, -1);
    var diry = Array(1, 0, -1, 0);

    for (var i = 0; i < 4; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJpbmcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzZXRmbGFnIiwic3RhdHVzIiwiWCIsIlkiLCJncmlkcyIsIm5vZGUiLCJkaXJ4IiwiQXJyYXkiLCJkaXJ5IiwiaSIsIngiLCJ5IiwiZmxhZyIsIm51bXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUlBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNDLE9BQU8sQ0FBQyxPQUFELENBRFg7QUFHTEMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxNQUFULEVBQWlCQyxDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUI7QUFDNUIsUUFBSUMsS0FBSyxHQUFHLEtBQUtDLElBQUwsQ0FBVUQsS0FBdEI7QUFDQSxRQUFJRSxJQUFJLEdBQUdDLEtBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFDLENBQVgsQ0FBaEI7QUFDQSxRQUFJQyxJQUFJLEdBQUdELEtBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQUMsQ0FBUixFQUFXLENBQVgsQ0FBaEI7O0FBRUEsU0FBSSxJQUFJRSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsQ0FBbkIsRUFBc0JBLENBQUMsRUFBdkIsRUFBMkI7QUFDdkIsVUFBSUMsQ0FBQyxHQUFHUixDQUFDLEdBQUdJLElBQUksQ0FBQ0csQ0FBRCxDQUFoQjtBQUNBLFVBQUlFLENBQUMsR0FBR1IsQ0FBQyxHQUFHSyxJQUFJLENBQUNDLENBQUQsQ0FBaEI7QUFFQSxVQUFHQyxDQUFDLEdBQUcsQ0FBSixJQUFTQSxDQUFDLEdBQUcsQ0FBYixJQUFrQkMsQ0FBQyxHQUFHLENBQXRCLElBQTJCQSxDQUFDLEdBQUcsQ0FBbEMsRUFBcUM7QUFDckMsVUFBR1AsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZQyxJQUFaLElBQW9CLENBQXZCLEVBQTBCO0FBRTFCUixNQUFBQSxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlFLElBQVosSUFBb0JaLE1BQXBCO0FBQ0g7QUFDSjtBQWpCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaOp+WItuaji+WtkOWFteeahOe7hOS7tlxuICovXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiUGllY2VcIiksXG5cbiAgICBzZXRmbGFnOiBmdW5jdGlvbihzdGF0dXMsIFgsIFkpIHtcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5ub2RlLmdyaWRzO1xuICAgICAgICB2YXIgZGlyeCA9IEFycmF5KDAsIDAsIDAsIC0xKTtcbiAgICAgICAgdmFyIGRpcnkgPSBBcnJheSgxLCAwLCAtMSwgMCk7XG5cbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIHggPSBYICsgZGlyeFtpXTtcbiAgICAgICAgICAgIHZhciB5ID0gWSArIGRpcnlbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmKGdyaWRzW3hdW3ldLmZsYWcgPT0gMCkgY29udGludWU7XG5cbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------
