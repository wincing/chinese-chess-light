
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JpZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwibm9kZSIsIm9uIiwicmVwYWludCIsInNlbGYiLCJmbGFnIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzdGFydCIsImhhc1BpZWNlIiwibnVtIiwicGllY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBWUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQOztBQUdMOzs7QUFHQUMsRUFBQUEsTUFOSyxvQkFNSztBQUNOLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLGNBQWIsRUFBNkIsWUFBWTtBQUNyQyxXQUFLQyxPQUFMO0FBQ0gsS0FGRCxFQUVHLElBRkg7QUFHSCxHQVZJOztBQWFMOzs7QUFHQUEsRUFBQUEsT0FBTyxFQUFFLG1CQUFXO0FBQ2hCLFFBQUlDLElBQUksR0FBRyxJQUFYOztBQUVBLFlBQVEsS0FBS0gsSUFBTCxDQUFVSSxJQUFsQjtBQUNJLFdBQUssQ0FBTDtBQUNJUixRQUFBQSxFQUFFLENBQUNTLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixXQUFsQixFQUErQlYsRUFBRSxDQUFDVyxXQUFsQyxFQUErQyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7QUFDdkVOLFVBQUFBLElBQUksQ0FBQ0gsSUFBTCxDQUFVVSxZQUFWLENBQXVCZCxFQUFFLENBQUNlLE1BQTFCLEVBQWtDRixXQUFsQyxHQUFnREEsV0FBaEQ7QUFDSCxTQUZEO0FBR0E7O0FBQ0osV0FBSyxDQUFMO0FBQ0liLFFBQUFBLEVBQUUsQ0FBQ1MsTUFBSCxDQUFVQyxPQUFWLENBQWtCLFlBQWxCLEVBQWdDVixFQUFFLENBQUNXLFdBQW5DLEVBQWdELFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtBQUN4RU4sVUFBQUEsSUFBSSxDQUFDSCxJQUFMLENBQVVVLFlBQVYsQ0FBdUJkLEVBQUUsQ0FBQ2UsTUFBMUIsRUFBa0NGLFdBQWxDLEdBQWdEQSxXQUFoRDtBQUNILFNBRkQ7QUFHQTtBQVZSO0FBYUgsR0FoQ0k7QUFrQ0xHLEVBQUFBLEtBbENLLG1CQWtDSTtBQUNMLFNBQUtSLElBQUwsR0FBWSxJQUFaO0FBRUEsU0FBS1MsUUFBTCxHQUFnQixLQUFoQjtBQUVBLFNBQUtDLEdBQUwsR0FBVyxDQUFYO0FBRUEsU0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDSDtBQTFDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog57uE5oiQ5qOL55uY55qE5qC85a2QXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gZmxhZyAg5qCH6K+G5qOL5a2Q55qE54q25oCBLCAw5Li65aKZLCAx5Li66LevLCAy5Li654GvXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGhhc1BpZWNlIOagh+ivhuivpeagvOWtkOS4iuaYr+WQpuacieaji+WtkCwgMOS4uuaXoCwgMeS4uuaciVxyXG4gKiBcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IG51bSAg54Wn5Lqu6K+l5qC85a2Q55qE5qOL5a2Q55qE5Liq5pWwXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge1BpZWNlfSBwaWVjZSDkvY3kuo7moLzlrZDkuIrnmoTmo4vlrZAsIOayoeacieWImeS4um51bGxcclxuICovXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPmn5DkuKrmoLzlrZDmlLbliLDnirbmgIHmm7TmlLnkuovku7YsIOiHquWKqOiwg+eUqHJlcGFpbnTmlrnms5VcclxuICAgICAqL1xyXG4gICAgb25Mb2FkICgpIHsgICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImZsYWdfY2hhbmdlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwYWludCgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOabtOaNouaji+WtkOiDjOaZr1xyXG4gICAgICovXHJcbiAgICByZXBhaW50OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5ub2RlLmZsYWcpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJncmlkL3BhdGhcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImdyaWQvbGlnaHRcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmZsYWcgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmhhc1BpZWNlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMubnVtID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5waWVjZSA9IG51bGw7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcSW5pdENvbG9yLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJpbml0QnV0dG9uIiwibGV2ZWxzIiwibm9kZSIsImdldENoaWxkcmVuIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJpIiwia2V5IiwibmFtZSIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJnZXRDaGlsZEJ5TmFtZSIsImNvbG9yIiwiZ2V0Q29tcG9uZW50IiwiQnV0dG9uIiwibm9ybWFsU3ByaXRlIiwiaW5pdFRpdGxlIiwiaW5kZXgiLCJwYXJlbnQiLCJnZXRDb21wb25lbnRzIiwiaW5pdENoYXB0ZXIiLCJjYXBzIiwiQXJyYXkiLCJmbGFnIiwiaiIsImZpbmQiLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQOztBQUdMOzs7QUFHQUMsRUFBQUEsVUFOSyx3QkFNUTtBQUNULFFBQUlDLE1BQU0sR0FBRyxLQUFLQyxJQUFMLENBQVVDLFdBQVYsRUFBYjtBQUVBTixJQUFBQSxFQUFFLENBQUNPLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixxQkFBbEIsRUFBeUNSLEVBQUUsQ0FBQ1MsV0FBNUMsRUFBeUQsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO0FBQ2pGLFdBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO0FBRXZCLFlBQUlDLEdBQUcsR0FBR1QsTUFBTSxDQUFDUSxDQUFELENBQU4sQ0FBVUUsSUFBcEI7O0FBQ0EsWUFBR2QsRUFBRSxDQUFDZSxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCSixHQUE1QixDQUFILEVBQXFDO0FBQ2pDO0FBQ0FU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LEtBQUs1QixJQUFMLENBQVVTLElBQVYsSUFBa0IsUUFBckIsRUFBK0IsS0FBS1gsVUFBTCxHQUEvQixLQUNLLElBQUcsS0FBS0UsSUFBTCxDQUFVUyxJQUFWLElBQWtCLE9BQXJCLEVBQThCLEtBQUtTLFNBQUwsR0FBOUIsS0FDQSxLQUFLSSxXQUFMO0FBQ1I7QUF6RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOaUueWPmOi/h+WFs+WFs+WNoeminOiJslxyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5oyJ6ZKu6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIGluaXRCdXR0b24oKSB7XHJcbiAgICAgICAgdmFyIGxldmVscyA9IHRoaXMubm9kZS5nZXRDaGlsZHJlbigpO1xyXG4gXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJidXR0b24vc3RhZ2VfcGFzc2VkXCIsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGxldmVsc1tpXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgaWYoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmm7TmjaLlrZfkvZPpopzoibJcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbHNbaV0uZ2V0Q2hpbGRCeU5hbWUoJ0xhYmVsJykuY29sb3IgPSBuZXcgY2MuY29sb3IoMjU1LCAyMTcsIDEwMiwgMjU1KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmm7TmjaLmjInpkq7lm77niYdcclxuICAgICAgICAgICAgICAgICAgICBsZXZlbHNbaV0uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikubm9ybWFsU3ByaXRlID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5qCH6aKY6aKc6ImyXHJcbiAgICAgKi9cclxuICAgIGluaXRUaXRsZSgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudHMoY2MuQ29tcG9uZW50KVsxXS5pbmRleDtcclxuICAgICAgICBpZihjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0xldmVsJyArIGluZGV4KSkge1xyXG4gICAgICAgICAgICAvLyDmm7TmjaLmoIfpopjpopzoibJcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNvbG9yID0gbmV3IGNjLmNvbG9yKDI1NSwgMjE3LCAxMDIsIDI1NSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlueroOiKguminOiJsiwg55So5LiO5Zy65pmvQ2hvaWNlQ2FwXHJcbiAgICAgKi9cclxuICAgIGluaXRDaGFwdGVyKCkge1xyXG4gICAgICAgIC8vIOiOt+WPluWFqOmDqOmAmuWFs+eroOiKglxyXG4gICAgICAgIHZhciBjYXBzID0gbmV3IEFycmF5KCk7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8PSA1OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAoaS0xKSAqIDkgKyAxOyBqIDw9IDkgKiBpOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKCFjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0xldmVsJyArIGopKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgICAgIGlmKGZsYWcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBuYW1lID0gJ0NhbnZhcy9CYWNrR3JvdW5kL0NoYXB0ZXInICsgaTtcclxuICAgICAgICAgICAgICAgIGNhcHNbaV0gPSBjYy5maW5kKG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmm7TmlLnnq6DoioLmoLflvI9cclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImJ1dHRvbi9jaGFwX3Bhc3NlZFwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8PSA1OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmKGNhcHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDmm7TmjaLlrZfkvZPpopzoibJcclxuICAgICAgICAgICAgICAgICAgICBjYXBzW2ldLmdldENoaWxkQnlOYW1lKCdMYWJlbCcpLmNvbG9yID0gbmV3IGNjLmNvbG9yKDI1NSwgMjE3LCAxMDIsIDI1NSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5pu05o2i5oyJ6ZKu5Zu+54mHXHJcbiAgICAgICAgICAgICAgICAgICAgY2Fwc1tpXS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKS5ub3JtYWxTcHJpdGUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBpZih0aGlzLm5vZGUubmFtZSA9PSAnTGV2ZWxzJykgdGhpcy5pbml0QnV0dG9uKCk7XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLm5vZGUubmFtZSA9PSAnVGl0bGUnKSB0aGlzLmluaXRUaXRsZSgpO1xyXG4gICAgICAgIGVsc2UgdGhpcy5pbml0Q2hhcHRlcigpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcbWlncmF0aW9uXFx1c2VfdjIuMS0yLjIuMV9jYy5Ub2dnbGVfZXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJUb2dnbGUiLCJfdHJpZ2dlckV2ZW50SW5TY3JpcHRfaXNDaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7OztBQVlBLElBQUlBLEVBQUUsQ0FBQ0MsTUFBUCxFQUFlO0FBQ1g7QUFDQTtBQUNBRCxFQUFBQSxFQUFFLENBQUNDLE1BQUgsQ0FBVUMsK0JBQVYsR0FBNEMsSUFBNUM7QUFDSCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdGhlIHYyLjEuMCDvvZ4gMi4yLjEgdmVyc2lvbi5cclxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cclxuICogSWYgeW91IGRvbid0IHVzZSBjYy5Ub2dnbGUgaW4geW91ciBwcm9qZWN0LCB5b3UgY2FuIGRlbGV0ZSB0aGlzIHNjcmlwdCBkaXJlY3RseS5cclxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cclxuICpcclxuICog5q2k6ISa5pys55SxIENvY29zIENyZWF0b3Ig6Ieq5Yqo55Sf5oiQ77yM5LuF55So5LqO5YW85a65IHYyLjEuMCB+IDIuMi4xIOeJiOacrOeahOW3peeoi++8jFxyXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcclxuICog5aaC5p6c5L2g55qE6aG555uu5Lit5rKh55So5YiwIFRvZ2dsZe+8jOWPr+ebtOaOpeWIoOmZpOivpeiEmuacrOOAglxyXG4gKiDlpoLmnpzkvaDnmoTpobnnm67mnInmiZjnrqHkuo4gZ2l0IOetieeJiOacrOW6k++8jOivt+WwhuatpOiEmuacrOS4gOW5tuS4iuS8oOOAglxyXG4gKi9cclxuXHJcbmlmIChjYy5Ub2dnbGUpIHtcclxuICAgIC8vIFdoZXRoZXIgdG8gdHJpZ2dlciAndG9nZ2xlJyBhbmQgJ2NoZWNrRXZlbnRzJyBldmVudHMgd2hlbiBtb2RpZnlpbmcgJ3RvZ2dsZS5pc0NoZWNrZWQnIGluIHRoZSBjb2RlXHJcbiAgICAvLyDlnKjku6PnoIHkuK3kv67mlLkgJ3RvZ2dsZS5pc0NoZWNrZWQnIOaXtuaYr+WQpuinpuWPkSAndG9nZ2xlJyDkuI4gJ2NoZWNrRXZlbnRzJyDkuovku7ZcclxuICAgIGNjLlRvZ2dsZS5fdHJpZ2dlckV2ZW50SW5TY3JpcHRfaXNDaGVja2VkID0gdHJ1ZTtcclxufVxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDEwLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAxMDtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAwLCAxLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMSwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbXVzaWNcXEF1ZGlvTWFuYWdlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJnTXVzaWMiLCJ0eXBlIiwiQXVkaW9DbGlwIiwib25Mb2FkIiwiZ2FtZSIsImFkZFBlcnNpc3RSb290Tm9kZSIsIm5vZGUiLCJjbGljayIsImZsYWciLCJiZ011c2ljQ2hhbm5lbCIsImF1ZGlvRW5naW5lIiwicGxheSIsInBhdXNlIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFDO0FBQ0osaUJBQVMsSUFETDtBQUVKQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGTDtBQURBLEdBSFA7QUFVTEMsRUFBQUEsTUFWSyxvQkFVSTtBQUNMUCxJQUFBQSxFQUFFLENBQUNRLElBQUgsQ0FBUUMsa0JBQVIsQ0FBMkIsS0FBS0MsSUFBaEM7QUFDSCxHQVpJO0FBY0xDLEVBQUFBLEtBZEssbUJBY0c7QUFDSixTQUFLQyxJQUFMLElBQWEsQ0FBYjs7QUFDQSxRQUFHLEtBQUtBLElBQUwsSUFBYSxDQUFoQixFQUFtQjtBQUNmLFdBQUtDLGNBQUwsR0FBc0JiLEVBQUUsQ0FBQ2MsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtYLE9BQXpCLEVBQWtDLElBQWxDLEVBQXdDLEdBQXhDLENBQXRCO0FBQ0gsS0FGRCxNQUVNO0FBQ0ZKLE1BQUFBLEVBQUUsQ0FBQ2MsV0FBSCxDQUFlRSxLQUFmLENBQXFCLEtBQUtILGNBQTFCO0FBQ0g7QUFDSixHQXJCSTtBQXVCTEksRUFBQUEsS0F2QkssbUJBdUJHO0FBQ0osU0FBS0wsSUFBTCxHQUFZLENBQVo7QUFDQSxTQUFLQyxjQUFMLEdBQXNCYixFQUFFLENBQUNjLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLWCxPQUF6QixFQUFrQyxJQUFsQyxFQUF3QyxHQUF4QyxDQUF0QjtBQUNIO0FBMUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmjqfliLblhajlsYDpn7PkuZDmkq3mlL5cclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgYmdNdXNpYzp7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5mbGFnIF49IDE7XHJcbiAgICAgICAgaWYodGhpcy5mbGFnID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5iZ011c2ljQ2hhbm5lbCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5iZ011c2ljLCB0cnVlLCAwLjMpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5iZ011c2ljQ2hhbm5lbCk7ICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLmZsYWcgPSAxO1xyXG4gICAgICAgIHRoaXMuYmdNdXNpY0NoYW5uZWwgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYmdNdXNpYywgdHJ1ZSwgMC4zKTtcclxuICAgIH1cclxuXHJcbn0pOyJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrTWEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzZXRmbGFnIiwiWCIsIlkiLCJncmlkcyIsIm5vZGUiLCJkaXJ4IiwiQXJyYXkiLCJkaXJ5IiwiaGluZGVyeCIsImhpbmRlcnkiLCJpIiwieCIsInkiLCJoeCIsImh5IiwiZmxhZyIsImhhc1BpZWNlIiwicGllY2UiLCJ0eXBlIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUtDQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNOLGFBQVNDLE9BQU8sQ0FBQyxZQUFELENBRFY7QUFHTkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNwQixRQUFJQyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QjtBQUNBLFFBQUlFLElBQUksR0FBR0MsS0FBSyxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUMsQ0FBTixFQUFTLENBQVQsRUFBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFDLENBQXRCLEVBQXlCLENBQUMsQ0FBMUIsQ0FBaEI7QUFDQSxRQUFJQyxJQUFJLEdBQUdELEtBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBQyxDQUFkLEVBQWlCLENBQUMsQ0FBbEIsRUFBcUIsQ0FBQyxDQUF0QixFQUF5QixDQUFDLENBQTFCLENBQWhCLENBSG9CLENBS3BCOztBQUNBLFFBQUlFLE9BQU8sR0FBR0YsS0FBSyxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFBdUIsQ0FBQyxDQUF4QixDQUFuQjtBQUNBLFFBQUlHLE9BQU8sR0FBR0gsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQUMsQ0FBakIsRUFBb0IsQ0FBQyxDQUFyQixFQUF3QixDQUF4QixDQUFuQixDQVBvQixDQVVwQjs7QUFDQSxTQUFJLElBQUlJLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxDQUFuQixFQUFzQkEsQ0FBQyxFQUF2QixFQUEyQjtBQUN2QixVQUFJQyxDQUFDLEdBQUdWLENBQUMsR0FBR0ksSUFBSSxDQUFDSyxDQUFELENBQWhCO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHVixDQUFDLEdBQUdLLElBQUksQ0FBQ0csQ0FBRCxDQUFoQjtBQUNBLFVBQUlHLEVBQUUsR0FBR1osQ0FBQyxHQUFHTyxPQUFPLENBQUNFLENBQUQsQ0FBcEI7QUFDQSxVQUFJSSxFQUFFLEdBQUdaLENBQUMsR0FBR08sT0FBTyxDQUFDQyxDQUFELENBQXBCO0FBRUEsVUFBR0MsQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxHQUFHLENBQWIsSUFBa0JDLENBQUMsR0FBRyxDQUF0QixJQUEyQkEsQ0FBQyxHQUFHLENBQWxDLEVBQXFDO0FBQ3JDLFVBQUdULEtBQUssQ0FBQ1EsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQixDQUF2QixFQUEwQixTQVBILENBU3ZCOztBQUNBLFVBQUdGLEVBQUUsSUFBSSxDQUFOLElBQVdBLEVBQUUsSUFBSSxDQUFqQixJQUFzQkMsRUFBRSxJQUFJLENBQTVCLElBQWlDQSxFQUFFLElBQUksQ0FBdkMsS0FDRVgsS0FBSyxDQUFDVSxFQUFELENBQUwsQ0FBVUMsRUFBVixFQUFjQyxJQUFkLElBQXNCLENBQXRCLElBQTJCWixLQUFLLENBQUNVLEVBQUQsQ0FBTCxDQUFVQyxFQUFWLEVBQWNFLFFBRDNDLENBQUgsRUFDeUQ7O0FBRXpELFVBQUdiLEtBQUssQ0FBQ1EsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBWixJQUF3QmIsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxLQUFaLENBQWtCQyxJQUFsQixJQUEwQixDQUFyRCxFQUF3RDtBQUNwRGYsUUFBQUEsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxLQUFaLENBQWtCRSxPQUFsQixHQUE0QixJQUE1QjtBQUNIO0FBQ0o7QUFDSjtBQS9CSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o6n5Yi26buR5qOL6ams55qE57uE5Lu2XHJcbiAqIFxyXG4gKi9cclxuXHJcbiBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiQmxhY2tQaWVjZVwiKSxcclxuXHJcbiAgICBzZXRmbGFnOiBmdW5jdGlvbihYLCBZKSB7XHJcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5ub2RlLmdyaWRzO1xyXG4gICAgICAgIHZhciBkaXJ4ID0gQXJyYXkoLTIsIC0xLCAxLCAyLCAyLCAxLCAtMSwgLTIpO1xyXG4gICAgICAgIHZhciBkaXJ5ID0gQXJyYXkoMSwgMiwgMiwgMSwgLTEsIC0yLCAtMiwgLTEpO1xyXG5cclxuICAgICAgICAvLyDpqazohJpcclxuICAgICAgICB2YXIgaGluZGVyeCA9IEFycmF5KC0xLCAwLCAwLCAxLCAxLCAwLCAwLCAtMSk7XHJcbiAgICAgICAgdmFyIGhpbmRlcnkgPSBBcnJheSgwLCAxLCAxLCAwLCAwLCAtMSwgLTEsIDApO1xyXG5cclxuIFxyXG4gICAgICAgIC8vIOWRqOWbtOagvOWtkFxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHggPSBYICsgZGlyeFtpXTtcclxuICAgICAgICAgICAgdmFyIHkgPSBZICsgZGlyeVtpXTtcclxuICAgICAgICAgICAgdmFyIGh4ID0gWCArIGhpbmRlcnhbaV07XHJcbiAgICAgICAgICAgIHZhciBoeSA9IFkgKyBoaW5kZXJ5W2ldO1xyXG5cclxuICAgICAgICAgICAgaWYoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm57uK6ams6ISaXHJcbiAgICAgICAgICAgIGlmKGh4ID49IDAgJiYgaHggPD0gOSAmJiBoeSA+PSAwICYmIGh5IDw9IDkgJiYgXHJcbiAgICAgICAgICAgICAgICAoZ3JpZHNbaHhdW2h5XS5mbGFnID09IDAgfHwgZ3JpZHNbaHhdW2h5XS5oYXNQaWVjZSkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgaWYoZ3JpZHNbeF1beV0uaGFzUGllY2UgJiYgZ3JpZHNbeF1beV0ucGllY2UudHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmxhY2tQaWVjZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImd4IiwiZ3kiLCJzZXRmbGFnIiwiWCIsIlkiLCJzdGFydCIsIm5vZGUiLCJ0eXBlIiwiZ3JpZHMiLCJncmlkIiwic2l6ZSIsImdldENvbnRlbnRTaXplIiwiaGFzUGllY2UiLCJwaWVjZSIsIngiLCJ3aWR0aCIsInkiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsRUFBRSxFQUFFLENBREk7QUFFUkMsSUFBQUEsRUFBRSxFQUFFO0FBRkksR0FIUDs7QUFRTDs7O0FBR0FDLEVBQUFBLE9BQU8sRUFBRSxpQkFBU0MsQ0FBVCxFQUFZQyxDQUFaLEVBQWUsQ0FBRSxDQVhyQjtBQWFMQyxFQUFBQSxLQWJLLG1CQWFHO0FBQ0osU0FBS0MsSUFBTCxDQUFVQyxJQUFWLEdBQWlCLENBQWpCO0FBRUEsU0FBS0QsSUFBTCxDQUFVTixFQUFWLEdBQWUsS0FBS0EsRUFBcEI7QUFDQSxTQUFLTSxJQUFMLENBQVVMLEVBQVYsR0FBZSxLQUFLQSxFQUFwQixDQUpJLENBTUo7O0FBQ0EsUUFBRyxLQUFLSyxJQUFMLENBQVVFLEtBQWIsRUFBb0I7QUFDaEIsVUFBSUMsSUFBSSxHQUFHLEtBQUtILElBQUwsQ0FBVUUsS0FBVixDQUFnQixLQUFLUixFQUFyQixFQUF5QixLQUFLQyxFQUE5QixDQUFYO0FBQ0EsVUFBSVMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLGNBQUwsRUFBWDtBQUNBRixNQUFBQSxJQUFJLENBQUNHLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQUgsTUFBQUEsSUFBSSxDQUFDSSxLQUFMLEdBQWEsS0FBS1AsSUFBbEI7QUFFQSxXQUFLQSxJQUFMLENBQVVRLENBQVYsR0FBY0wsSUFBSSxDQUFDSyxDQUFMLEdBQVNKLElBQUksQ0FBQ0ssS0FBTCxHQUFhLENBQXBDO0FBQ0EsV0FBS1QsSUFBTCxDQUFVVSxDQUFWLEdBQWNQLElBQUksQ0FBQ08sQ0FBTCxHQUFTTixJQUFJLENBQUNPLE1BQUwsR0FBYyxDQUFyQztBQUNIO0FBQ0o7QUE3QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOWQhOenjem7keaji+eahOWfuuexu1xyXG4gKiBcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IG5vZGUuZ3gg6buR5qOL55qE5omA5Zyo5qC85a2Q55qE6KGM5Z2Q5qCHXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gbm9kZS5neSDpu5Hmo4vnmoTmiYDlnKjmoLzlrZDnmoTliJflnZDmoIdcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbm9kZS50eXBlIOagh+ivhuaji+WtkOenjeexu++8jCDnuqLmo4vkuLow77yMIOm7keaji+S4ujFcclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ3g6IDAsXHJcbiAgICAgICAgZ3k6IDAsXHJcbiAgICB9LFxyXG4gIFxyXG4gICAgLyoqXHJcbiAgICAgKiAg5L2/5pS75Ye76IyD5Zu05YaF55qE57qi5qOL5aSx5pWIXHJcbiAgICAgKi9cclxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKFgsIFkpIHt9LFxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS50eXBlID0gMTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmd4ID0gdGhpcy5neDtcclxuICAgICAgICB0aGlzLm5vZGUuZ3kgPSB0aGlzLmd5O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOWwhum7keaji+WbuuWumuWIsOagvOWtkOS4ilxyXG4gICAgICAgIGlmKHRoaXMubm9kZS5ncmlkcykge1xyXG4gICAgICAgICAgICB2YXIgZ3JpZCA9IHRoaXMubm9kZS5ncmlkc1t0aGlzLmd4XVt0aGlzLmd5XTtcclxuICAgICAgICAgICAgdmFyIHNpemUgPSBncmlkLmdldENvbnRlbnRTaXplKCk7XHJcbiAgICAgICAgICAgIGdyaWQuaGFzUGllY2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBncmlkLnBpZWNlID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnggPSBncmlkLnggKyBzaXplLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSBncmlkLnkgLSBzaXplLmhlaWdodCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbn0pO1xyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGllY2VNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJzdGFydCIsInBpZWNlcyIsIm5vZGUiLCJnZXRDaGlsZHJlbiIsIm1hcCIsInBhcmVudCIsImdldENvbXBvbmVudCIsImkiLCJncmlkcyIsImVubGlnaHRlbiIsImoiLCJncmlkIiwiZmxhZyIsIm51bXMiLCJlbWl0Iiwic3RvcEFjdGlvbiIsImdldENvbXBvbmVudHMiLCJkZXN0cm95IiwiY2hlY2tQYXNzIiwiY2FudmFzIiwiZmluZCIsInBhdGgiLCJzaG93IiwiYmVnaW4iLCJ2MiIsImRpcngiLCJBcnJheSIsImRpcnkiLCJ2aXN0IiwicGFpbnQiLCJueCIsIngiLCJueSIsInkiLCJwdXNoIiwidCIsImhhc093blByb3BlcnR5IiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJpbmRleCIsIm9iaiIsInBpYyIsInNjaGVkdWxlT25jZSIsIlNwcml0ZSIsInBhc3NlZEFjdGlvbiIsInNlbGYiLCJQcmVmYWIiLCJwcmVmYWIiLCJhbGVydCIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsIkF1ZGlvQ2xpcCIsImNsaXAiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJhY3RpdmUiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY250IiwiZ2V0SXRlbSIsInBhc3RDbnQiLCJ3aW5kb3ciLCJrdkRhdGFMaXN0Iiwia2V5IiwidmFsdWUiLCJTdHJpbmciLCJ3eCIsInNldFVzZXJDbG91ZFN0b3JhZ2UiLCJLVkRhdGFMaXN0Iiwic3VjY2VzcyIsImUiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsInVwZGF0ZUFsbCIsInBpZWNlIiwidHlwZSIsImlzSW5SYW5nZSIsImRpc2FibGUiLCJzZXRmbGFnIiwiZ3giLCJneSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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QmxCOzs7QUFDQSxTQUFJLElBQUkvRSxDQUFSLElBQWEsS0FBS04sTUFBbEIsRUFBMEI7QUFDdEIsVUFBSStFLEtBQUssR0FBRyxLQUFLL0UsTUFBTCxDQUFZTSxDQUFaLENBQVo7O0FBQ0EsVUFBR3lFLEtBQUssQ0FBQ0MsSUFBTixJQUFjLENBQWQsSUFBbUJELEtBQUssQ0FBQ0UsU0FBekIsSUFBc0NGLEtBQUssQ0FBQ0csT0FBTixJQUFpQixLQUExRCxFQUFpRTtBQUM3REgsUUFBQUEsS0FBSyxDQUFDaEUsYUFBTixDQUFvQm5CLEVBQUUsQ0FBQ0UsU0FBdkIsRUFBa0MsQ0FBbEMsRUFBcUNxRixPQUFyQyxDQUE2QyxDQUE3QyxFQUFnREosS0FBSyxDQUFDSyxFQUF0RCxFQUEwREwsS0FBSyxDQUFDTSxFQUFoRTtBQUNIO0FBQ0o7QUFDSjtBQXBQSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog566h55CG5omA5pyJ5qOL5a2Q55qE57G7XHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge2NjLk5vZGVbXX0gbWFwIOWtmOaJgOacieagvOWtkOW8leeUqOeahOaVsOe7hFxyXG4gKiBcclxuICogQHByb3BlcnR5IHtjYy5Ob2RlW119IHBpZWNlcyDlrZjmiYDmnInmo4vlrZDlvJXnlKjnmoTmlbDnu4RcclxuICovXHJcbmNjLkNsYXNzKHtcclxuXHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDliJ3lp4vljJZcclxuICAgICAqL1xyXG4gICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnBpZWNlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucGllY2VzID0gdGhpcy5ub2RlLmdldENoaWxkcmVuKCk7XHJcblxyXG4gICAgICAgIC8vIOiOt+WPluaJgOacieagvOWtkOWvueixoeeahOW8leeUqFxyXG4gICAgICAgIHRoaXMubWFwID0gdGhpcy5ub2RlLnBhcmVudC5nZXRDb21wb25lbnQoXCJDaGVja2VyQm9hcmRcIikubWFwO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOWwhuavj+S4quagvOWtkOeahOW8leeUqOS8oOmAkuWIsOaji+WtkOS4ilxyXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnBpZWNlcykge1xyXG4gICAgICAgICAgICB0aGlzLnBpZWNlc1tpXS5ncmlkcyA9IHRoaXMubWFwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qC55o2u5qC85a2Q55qE54q25oCB54K55Lqu5qC85a2QXHJcbiAgICAgKi9cclxuICAgIGVubGlnaHRlbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5tYXA7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IDEwOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIGdyaWQgPSBncmlkc1tpXVtqXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihncmlkLmZsYWcgPT0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoZ3JpZC5udW1zID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQuZmxhZyA9IDI7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyaWQuZmxhZyA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g5Y+R6YCB5LqL5Lu25L+h5oGv77yM6LCD55SocmVwYWludOaWueazlVxyXG4gICAgICAgICAgICAgICAgZ3JpZC5lbWl0KFwiZmxhZ19jaGFuZ2VkXCIpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAmuWFs+WQjuemgeatouaJgOacieaji+WtkOeahOiEmuacrFxyXG4gICAgICovXHJcbiAgICBzdG9wQWN0aW9uOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5waWVjZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5waWVjZXNbaV0uZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpWzFdLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgICAvKipcclxuICAgICAqIOajgOafpeaYr+WQpumAmuWFs1xyXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IOmAmuWFs+i/lOWbnnRydWUsIOWPjeS5i+i/lOWbnmZhbHNlXHJcbiAgICAgKi9cclxuICAgIGNoZWNrUGFzczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIHZhciBwYXRoID0gY2FudmFzLmdldENvbXBvbmVudHMoY2MuQ29tcG9uZW50KVsxXS5wYXRoO1xyXG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubWFwO1xyXG5cclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgMTA7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBpZihwYXRoW2ldW2pdID09IDEgJiYgZ3JpZHNbaV1bal0uZmxhZyAhPSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDov4flhbPliqjnlLvlkYjnjrBcclxuICAgICAqL1xyXG4gICAgc2hvdzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubWFwO1xyXG4gICAgICAgIHZhciBwYXRoID0gY2FudmFzLmdldENvbXBvbmVudHMoY2MuQ29tcG9uZW50KVsxXS5wYXRoO1xyXG5cclxuICAgICAgICAvLyDmn6Xmib7otbflp4vngrlcclxuICAgICAgICB2YXIgYmVnaW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDEwOyBpKysgKSB7XHJcbiAgICAgICAgICAgICAgICBpZihwYXRoWzldW2ldID09IDEpIHJldHVybiBjYy52Mig5LCBpKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yKHZhciBpID0gOTsgaSA+PSAwOyBpLS0gKSB7XHJcbiAgICAgICAgICAgICAgICBpZihwYXRoW2ldWzBdID09IDEpIHJldHVybiBjYy52MihpLCAwKTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAxMDsgaSsrICkge1xyXG4gICAgICAgICAgICAgICAgaWYocGF0aFswXVtpXSA9PSAxKSByZXR1cm4gY2MudjIoMCwgaSk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAxMDsgaSsrICkge1xyXG4gICAgICAgICAgICAgICAgaWYocGF0aFtpXVs5XSA9PSAxKSByZXR1cm4gY2MudjIoaSwgOSk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH0oKTtcclxuXHJcbiAgICAgICAgLy8g6aG65bqP6I635Y+W6Lev5b6E5LiK5q+P5qC8XHJcbiAgICAgICAgdmFyIGRpcnggPSBuZXcgQXJyYXkoMCwgMSwgMCwgLTEpO1xyXG4gICAgICAgIHZhciBkaXJ5ID0gbmV3IEFycmF5KDEsIDAsIC0xLCAwKTtcclxuICAgICAgICB2YXIgdmlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgIHZhciBwYWludCA9IG5ldyBBcnJheSgpO1xyXG5cclxuICAgICAgICB2aXN0W2JlZ2luXSA9IHRydWU7XHJcbiAgICAgICAgZm9yKHZhciBueCA9IGJlZ2luLngsIG55ID0gYmVnaW4ueTs7KSB7XHJcbiAgICAgICAgICAgIHBhaW50LnB1c2goZ3JpZHNbbnhdW255XSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9IG54ICsgZGlyeFtpXTtcclxuICAgICAgICAgICAgICAgIHZhciB5ID0gbnkgKyBkaXJ5W2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIHQgPSBjYy52Mih4LCB5KTtcclxuICAgICAgICAgICAgICAgIGlmKHggPCAxMCAmJiB4ID49IDAgJiYgeSA8IDEwICYmIHkgPj0gMCAmJiBcclxuICAgICAgICAgICAgICAgICAgICBwYXRoW3hdW3ldID09IDEgJiYgIXZpc3QuaGFzT3duUHJvcGVydHkodCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXN0W3RdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBueCA9IHgsIG55ID0geTtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDlvZPliY3lt7Lnu4/mmK/mnIDlkI7kuIDkuKrmoLzlrZBcclxuICAgICAgICAgICAgaWYoIWZsYWcpIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5pu05pS55qC85a2Q6IOM5pmvXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJncmlkL3Bhc3NcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGluZGV4IGluIHBhaW50KSB7XHJcbiAgICAgICAgICAgICAgICAoZnVuY3Rpb24oaW5kZXgsIG9iaiwgcGljKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6YCa6L+H5Zue6LCD5Ye95pWw6Ze06ZqU5pu05o2i6IOM5pmvXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmdldENvbXBvbmVudCgnR3JpZCcpLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHBpYztcclxuICAgICAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDAuMDE4KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9KShpbmRleCwgcGFpbnRbaW5kZXhdLCBzcHJpdGVGcmFtZSk7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrlhbPlkI7miafooYzooYzkuLpcclxuICAgICAqL1xyXG4gICAgcGFzc2VkQWN0aW9uOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyDnpoHmraLmo4vlrZDmi5bliqhcclxuICAgICAgICB0aGlzLnN0b3BBY3Rpb24oKTtcclxuXHJcbiAgICAgICAgLy8g6L+H5YWz5by556qXXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLm5vZGU7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJhbGVydFwiLCBjYy5QcmVmYWIsIGZ1bmN0aW9uKGVyciwgcHJlZmFiKSB7XHJcbiAgICAgICAgICAgIHZhciBhbGVydCA9ICBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgICAgICBzZWxmLnBhcmVudC5hZGRDaGlsZChhbGVydCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGFsZXJ0LnNldFBvc2l0aW9uKGNjLnYyKDAsIC00NTIuNSkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNob3coKTtcclxuXHJcbiAgICAgICAgLy8g6YCa5YWz6Z+z5pWIXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJtdXNpYy9wYXNzXCIsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KGNsaXAsIGZhbHNlLCAxKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8g56aB55So5biu5Yqp5oyJ6ZKuXHJcbiAgICAgICAgaWYoY2MuZmluZCgnQ2FudmFzL1RpcEJ1dHRvbicpKVxyXG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvVGlwQnV0dG9uJykuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIOiusOW9lemAmui/h+eahOWFs+WNoeWIsOe8k+WtmFxyXG4gICAgICAgIHZhciBjYW52YXMgPSBjYy5maW5kKCdDYW52YXMnKTtcclxuICAgICAgICB2YXIgaW5kZXggPSBjYW52YXMuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpWzFdLmluZGV4O1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTGV2ZWwnICsgaW5kZXgsIHRydWUpO1xyXG5cclxuICAgICAgICAvLyDmm7TmlrDnvJPlrZjpgJrlhbPmgLvmlbBcclxuICAgICAgICB2YXIgY250ID0gMDtcclxuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDw9IDQ1OyBpKyspIHtcclxuICAgICAgICAgICAgaWYoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdMZXZlbCcgKyBpKSkge1xyXG4gICAgICAgICAgICAgICAgY250Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHBhc3RDbnQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvdGFsUGFzc2VkJyk7XHJcbiAgICAgICAgaWYocGFzdENudCA9PSBudWxsICYmIHBhc3RDbnQgPCBjbnQpIHtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b3RhbFBhc3NlZCcsIGNudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUWOS6keWtmOWCqOW9k+WJjeeUqOaIt+eahOaAu+i/h+WFs+aVsFxyXG4gICAgICAgIGlmICh3aW5kb3dbJ3d4J10pe1xyXG4gICAgICAgICAgICB2YXIga3ZEYXRhTGlzdCA9IG5ldyBBcnJheSgpO1xyXG4gICAgICAgICAgICBrdkRhdGFMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgLy/moIfnrb4g5a2Y5YKo55qE5b2T5YmN5ri45oiP56eN57G755qE5qCH562+XHJcbiAgICAgICAgICAgICAgICBrZXk6ICd0b3RhbFBhc3NlZCcsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogU3RyaW5nKGNudCksXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgd3guc2V0VXNlckNsb3VkU3RvcmFnZSh7XHJcbiAgICAgICAgICAgICAgICBLVkRhdGFMaXN0Omt2RGF0YUxpc3QsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflkJF3eOWtmOWCqOeUqOaIt+aVsOaNruaIkOWKnycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGZhaWwoZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WQkXd45a2Y5YKo55So5oi35pWw5o2u5aSx6LSlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDmiYDmnInmo4vlrZBcclxuICAgICAqL1xyXG4gICAgdXBkYXRlQWxsOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgLy8g6YeN572u5pa55qC8XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFwW2ldW2pdLm51bXMgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAgIFxyXG5cclxuICAgICAgICAvLyDlsIbmo4vnm5jlhoXmiYDmnInnuqLmo4vorr7kuLrnlJ/mlYhcclxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5waWVjZXMpIHtcclxuICAgICAgICAgICAgdmFyIHBpZWNlID0gdGhpcy5waWVjZXNbaV07XHJcbiAgICAgICAgICAgIGlmKHBpZWNlLnR5cGUgPT0gMCAmJiBwaWVjZS5pc0luUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIHBpZWNlLmRpc2FibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5pu05paw6buR5qOL5Lul56aB55So5Y+X5pS75Ye755qE57qi5qOLXHJcbiAgICAgICAgZm9yKHZhciBpIGluIHRoaXMucGllY2VzKSB7XHJcbiAgICAgICAgICAgIHZhciBwaWVjZSA9IHRoaXMucGllY2VzW2ldO1xyXG4gICAgICAgICAgICBpZihwaWVjZS50eXBlID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHBpZWNlLmdldENvbXBvbmVudHMoY2MuQ29tcG9uZW50KVsxXS5zZXRmbGFnKHBpZWNlLmd4LCBwaWVjZS5neSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOabtOaWsOe6ouaji1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnBpZWNlcykge1xyXG4gICAgICAgICAgICB2YXIgcGllY2UgPSB0aGlzLnBpZWNlc1tpXTtcclxuICAgICAgICAgICAgaWYocGllY2UudHlwZSA9PSAwICYmIHBpZWNlLmlzSW5SYW5nZSAmJiBwaWVjZS5kaXNhYmxlID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBwaWVjZS5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudClbMV0uc2V0ZmxhZygxLCBwaWVjZS5neCwgcGllY2UuZ3kpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2tpcC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic2tpcFRvIiwiZXZlbnQiLCJjdXN0b21FdmVudERhdGEiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm5leHRQYXNzIiwiY2FudmFzIiwiZmluZCIsImxldmVsIiwiZ2V0Q29tcG9uZW50cyIsImluZGV4Iiwic3RvcEFsbEFjdGlvbnMiLCJsb2FkVHV0b3JpYWwiLCJzaG93IiwibmFtZSIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiaGlkZSIsImFjdGl2ZSIsImFwcGVhciIsInNoYXJlIiwiZGF0YSIsInd4Iiwic2hhcmVBcHBNZXNzYWdlIiwidGl0bGUiLCJpbWFnZVVybCIsInVybCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZmFpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBR0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQOztBQUdMOzs7OztBQUtBQyxFQUFBQSxNQVJLLGtCQVFFQyxLQVJGLEVBUVNDLGVBUlQsRUFRMEI7QUFDM0JMLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCRixlQUF0QjtBQUNILEdBVkk7O0FBWUw7OztBQUdBRyxFQUFBQSxRQWZLLHNCQWVNO0FBQ1AsUUFBSUMsTUFBTSxHQUFHVCxFQUFFLENBQUNVLElBQUgsQ0FBUSxRQUFSLENBQWI7QUFDQSxRQUFJQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csYUFBUCxDQUFxQlosRUFBRSxDQUFDRSxTQUF4QixFQUFtQyxDQUFuQyxFQUFzQ1csS0FBbEQ7QUFDQUosSUFBQUEsTUFBTSxDQUFDSyxjQUFQO0FBQ0FILElBQUFBLEtBQUssSUFBSSxDQUFUOztBQUNBLFFBQUdBLEtBQUssR0FBRyxFQUFYLEVBQWU7QUFDWFgsTUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFNBQVosQ0FBc0IsT0FBdEI7QUFDSCxLQUZELE1BRU87QUFDSFAsTUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFNBQVosQ0FBc0IsVUFBVUksS0FBaEM7QUFDSDtBQUNKLEdBekJJOztBQTJCTDs7Ozs7QUFLQUksRUFBQUEsWUFoQ0ssd0JBZ0NRWCxLQWhDUixFQWdDZUMsZUFoQ2YsRUFnQ2dDO0FBQ2pDLFFBQUlXLElBQUksR0FBR2hCLEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLGFBQVIsQ0FBWDtBQUNBLFFBQUlPLElBQUksR0FBRyxjQUFjWixlQUF6QjtBQUNBTCxJQUFBQSxFQUFFLENBQUNrQixNQUFILENBQVVDLE9BQVYsQ0FBa0JGLElBQWxCLEVBQXdCakIsRUFBRSxDQUFDb0IsV0FBM0IsRUFBd0MsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO0FBQ2hFTixNQUFBQSxJQUFJLENBQUNPLFlBQUwsQ0FBa0J2QixFQUFFLENBQUN3QixNQUFyQixFQUE2QkYsV0FBN0IsR0FBMkNBLFdBQTNDO0FBQ0gsS0FGRDtBQUdILEdBdENJOztBQXdDTDs7O0FBR0FHLEVBQUFBLElBM0NLLGtCQTJDRTtBQUNIekIsSUFBQUEsRUFBRSxDQUFDVSxJQUFILENBQVEsWUFBUixFQUFzQmdCLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0gsR0E3Q0k7O0FBK0NMOzs7QUFHQUMsRUFBQUEsTUFsREssb0JBa0RJO0FBQ0wzQixJQUFBQSxFQUFFLENBQUNVLElBQUgsQ0FBUSxZQUFSLEVBQXNCZ0IsTUFBdEIsR0FBK0IsSUFBL0I7QUFDSCxHQXBESTs7QUFzREw7OztBQUdBRSxFQUFBQSxLQXpESyxtQkF5REc7QUFDSjVCLElBQUFBLEVBQUUsQ0FBQ2tCLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixPQUFsQixFQUEyQixVQUFVRSxHQUFWLEVBQWVRLElBQWYsRUFBcUI7QUFDNUNDLE1BQUFBLEVBQUUsQ0FBQ0MsZUFBSCxDQUFtQjtBQUNmQyxRQUFBQSxLQUFLLEVBQUUsWUFEUTtBQUVmQyxRQUFBQSxRQUFRLEVBQUVKLElBQUksQ0FBQ0ssR0FGQTtBQUdmQyxRQUFBQSxPQUhlLG1CQUdQQyxHQUhPLEVBR0Y7QUFDVEMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDSCxTQUxjO0FBTWZHLFFBQUFBLElBTmUsZ0JBTVZILEdBTlUsRUFNTDtBQUNOQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNIO0FBUmMsT0FBbkI7QUFVSCxLQVhEO0FBWUg7QUF0RUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOaOp+WItuWcuuaZr+WIh+aNouS6i+S7tueahOexu1xyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Zy65pmv6Lez6L2sXHJcbiAgICAgKiBAcGFyYW0geyp9IGV2ZW50IFxyXG4gICAgICogQHBhcmFtIHtTdHJpbmd9IGN1c3RvbUV2ZW50RGF0YSDmiYDopoHot7Povazoh7PnmoTlnLrmma/lkI3np7BcclxuICAgICAqL1xyXG4gICAgc2tpcFRvKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoY3VzdG9tRXZlbnREYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDot7PovazliLDlvZPliY3lhbPljaHnmoTkuIvkuIDlhbNcclxuICAgICAqL1xyXG4gICAgbmV4dFBhc3MoKSB7XHJcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xyXG4gICAgICAgIHZhciBsZXZlbCA9IGNhbnZhcy5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudClbMV0uaW5kZXg7XHJcbiAgICAgICAgY2FudmFzLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgbGV2ZWwgKz0gMTtcclxuICAgICAgICBpZihsZXZlbCA+IDQ1KSB7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIlN0YXJ0XCIpOyBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMZXZlbFwiICsgbGV2ZWwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInpkq7mmL7npLrlr7nlupTnmoTmjIflvJVcclxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQgXHJcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY3VzdG9tRXZlbnREYXRhIOmcgOimgeWKoOi9veeahOaVmeeoi+i1hOa6kOWQjVxyXG4gICAgICovXHJcbiAgICBsb2FkVHV0b3JpYWwoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIHZhciBzaG93ID0gY2MuZmluZCgnQ2FudmFzL1Nob3cnKTtcclxuICAgICAgICB2YXIgbmFtZSA9ICd0dXRvcmlhbC8nICsgY3VzdG9tRXZlbnREYXRhO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKG5hbWUsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICBzaG93LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP5o+Q56S6XHJcbiAgICAgKi9cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL1RpcCcpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIOaYvuekuuaPkOekulxyXG4gICAgICovXHJcbiAgICBhcHBlYXIoKSB7XHJcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL1RpcCcpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Li75Yqo5YiG5LqrXHJcbiAgICAgKi9cclxuICAgIHNoYXJlKCkge1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hhcmVcIiwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xyXG4gICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwi55Sf5LqO6buR5pqX77yM5aeL6KeB5YWJ5piO44CCXCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVVybDogZGF0YS51cmwsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2hhcmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInN0YXJ0Iiwid3giLCJzaG93U2hhcmVNZW51Iiwid2l0aFNoYXJlVGlja2V0Iiwib25Mb2FkIiwibG9hZGVyIiwibG9hZFJlcyIsImVyciIsImRhdGEiLCJvblNoYXJlQXBwTWVzc2FnZSIsInJlcyIsInRpdGxlIiwiaW1hZ2VVcmwiLCJ1cmwiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsImZhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxLQUhLLG1CQUdHO0FBQ0pDLElBQUFBLEVBQUUsQ0FBQ0MsYUFBSCxDQUFpQjtBQUFFQyxNQUFBQSxlQUFlLEVBQUU7QUFBbkIsS0FBakIsRUFESSxDQUN3QztBQUMvQyxHQUxJOztBQU9MOzs7QUFHQUMsRUFBQUEsTUFWSyxvQkFVSTtBQUNMO0FBQ0FQLElBQUFBLEVBQUUsQ0FBQ1EsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE9BQWxCLEVBQTJCLFVBQVVDLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUN4Q1AsTUFBQUEsRUFBRSxDQUFDUSxpQkFBSCxDQUFxQixVQUFVQyxHQUFWLEVBQWU7QUFDaEMsZUFBTztBQUNIQyxVQUFBQSxLQUFLLEVBQUUsY0FESjtBQUNtQjtBQUN0QkMsVUFBQUEsUUFBUSxFQUFFSixJQUFJLENBQUNLLEdBRlo7QUFHSEMsVUFBQUEsT0FIRyxtQkFHS0osR0FITCxFQUdVO0FBQ1RLLFlBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTixHQUFaO0FBQ0gsV0FMRTtBQU1ITyxVQUFBQSxJQU5HLGdCQU1FUCxHQU5GLEVBTU87QUFDTkssWUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLEdBQVo7QUFDSDtBQVJFLFNBQVA7QUFVSCxPQVhEO0FBWVAsS0FiRDtBQWNIO0FBMUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDlvq7kv6HooqvliqjliIbkuqtcclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB3eC5zaG93U2hhcmVNZW51KHsgd2l0aFNoYXJlVGlja2V0OiB0cnVlIH0pOy8v5byA5ZCv5Y+z5LiK6KeS55qE5YiG5Lqr5oyJ6ZKuXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6KKr5Yqo5YiG5LqrXHJcbiAgICAgKi9cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAvL+WIhuS6q+aMiemSruS6i+S7tuebkeWQrFxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwic2hhcmVcIiwgZnVuY3Rpb24gKGVyciwgZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgd3gub25TaGFyZUFwcE1lc3NhZ2UoZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIuWkqem7keS6hu+8jOS9oOefpemBk+i3r+WcqOWTquS5iO+8n1wiLC8v5YiG5Lqr55qE5qCH6aKYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlVXJsOiBkYXRhLnVybCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGllY2UuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInNldGZsYWciLCJzdGF0dXMiLCJYIiwiWSIsImZpeEdyaWQiLCJ4IiwieSIsImdyaWQiLCJub2RlIiwiZ3JpZHMiLCJzaXplIiwiZ2V0Q29udGVudFNpemUiLCJyZWN0IiwiUmVjdCIsImhlaWdodCIsIndpZHRoIiwiY29udGFpbnMiLCJWZWMyIiwiZmxhZyIsImhhc1BpZWNlIiwibGFzdFgiLCJsYXN0WSIsImd4IiwiZ3kiLCJwaWVjZSIsImlzSW5SYW5nZSIsIm9uVG91Y2hTdGFydCIsImV2ZW50IiwiZGlzYWJsZSIsImdldENvbXBvbmVudHMiLCJtYW5nZXIiLCJlbmxpZ2h0ZW4iLCJvblRvdWNoTW92ZSIsImRlbHRhIiwidG91Y2giLCJnZXREZWx0YSIsIm9uVG91Y2hFbmQiLCJzZWxmIiwicHV0RG93bk11c2ljIiwibG9hZGVyIiwibG9hZFJlcyIsIkF1ZGlvQ2xpcCIsImVyciIsImNsaXAiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJpIiwiaiIsInJhbmdlIiwic3RhcnRYIiwic3RhcnRZIiwidW5kZWZpbmVkIiwidXBkYXRlQWxsIiwiY2hlY2tQYXNzIiwicGFzc2VkQWN0aW9uIiwib25Mb2FkIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJUT1VDSF9NT1ZFIiwiVE9VQ0hfRU5EIiwib25EZXN0cm95Iiwib2ZmIiwic3RhcnQiLCJ0eXBlIiwicGFyZW50IiwiZ2V0Q29tcG9uZW50IiwibGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZCQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7O0FBR0w7Ozs7OztBQU1BQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUJDLENBQWpCLEVB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UzhELEdBQTdCLEVBQWtDQSxHQUFHLEdBQUcsRUFBeEMsRUFBNENBLEdBQUcsR0FBRyxFQUFsRCxDQUFsQjtBQUVIO0FBdEpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDotJ/otKPmo4vlrZDnmoTkuovku7bkuI7kuqTkupLnmoTnsbtcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7Y2MuTm9kZX0gbm9kZSDor6XohJrmnKzmjILovb3nmoToioLngrlcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBub2RlLmxhc3RYIOS4iuS4gOasoeaji+WtkOeahHjlnZDmoIdcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBub2RlLmxhc3RZIOS4iuS4gOasoeaji+WtkOeahHjlnZDmoIdcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBub2RlLnN0YXJ0WCDmo4vlrZDnmoTliJ3lp4t45Z2Q5qCHXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gbm9kZS5zdGFydFkg5qOL5a2Q55qE5Yid5aeLeeWdkOagh1xyXG4gKiBcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IG5vZGUuZ3gg5qOL5a2Q5omA5aSE5Zyo5qC85a2Q55qE5LqM57u05pWw57uE55qE6KGM5LiL5qCHXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gbm9kZS5neSDmo4vlrZDmiYDlpITlnKjmoLzlrZDnmoTkuoznu7TmlbDnu4TnmoTliJfkuIvmoIdcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7R3JpZFtdfSBub2RlLmdyaWRzIOaJgOacieagvOWtkOeahOW8leeUqOaVsOe7hFxyXG4gKiBcclxuICogQHByb3BlcnR5IHtQaWVjZU1hbmFnZXJ9IG5vZGUubWFuZ2VyIOWvueaJgOacieaji+WtkOi/m+ihjOeuoeeQhlxyXG4gKiBcclxuICogQHByb3BlcnR5IHtjYy5SZWN0fSBub2RlLnJhbmdlIOaji+ebmOaJgOWbtOaIkOefqeW9olxyXG4gKiBcclxuICogQHByb3BlcnR5IHtCb29sZWFufSBub2RlLmlzSW5SYW5nZSDmoIfor4bmo4vlrZDmmK/lkKbkvY3kuo7mo4vnm5hcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbm9kZS5kaXNhYmxlIOagh+ivhuaji+WtkOaYr+WQpuWkseaViCBcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gbm9kZS50eXBlIOagh+ivhuaji+WtkOenjeexu++8jCDnuqLmo4vkuLow77yMIOm7keaji+S4ujFcclxuICovXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuIFxyXG4gICAgLyoqXHJcbiAgICAgKiDmoIforrDmo4vlrZDlr7nlkajlm7TmoLzlrZDnmoTlvbHlk43vvIzlsIblnKjlrZDnsbvkuK3lrp7njrBcclxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSBzdGF0dXMgMeihqOekuuaji+WtkOS4i+aUviwgLTHooajnpLrnprvlvIBcclxuICAgICAqIEBwYXJhbSB7Kn0gWCDmoLzlrZDooYzkuIvmoIdcclxuICAgICAqIEBwYXJhbSB7Kn0gWSDmoLzlrZDliJfkuIvmoIdcclxuICAgICAqL1xyXG4gICAgc2V0ZmxhZzogZnVuY3Rpb24oc3RhdHVzLCBYLCBZKSB7fSxcclxuIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog56Gu5a6a5qOL5a2Q5piv5ZCm5bGe5LqO5b2T5YmN5qC85a2QLCDoi6XlsZ7kuo4sIOWImeabtOaWsOaji+WtkOeKtuaAgVxyXG4gICAgICogQHBhcmFtIHsqfSB4IOagvOWtkOihjOS4i+agh1xyXG4gICAgICogQHBhcmFtIHsqfSB5IOagvOWtkOWIl+S4i+agh1xyXG4gICAgICogQHJldHVybnMg5bGe5LqO6L+U5ZuedHJ1ZSwg5LiN5bGe5LqO6L+U5ZueZmFsc2VcclxuICAgICAqL1xyXG4gICAgZml4R3JpZDogZnVuY3Rpb24oeCwgeSkge1xyXG4gICAgICAgIHZhciBncmlkID0gdGhpcy5ub2RlLmdyaWRzW3hdW3ldO1xyXG5cclxuICAgICAgICAvLyDor6XmoLzlrZDmiYDlnKjnmoTnn6nlvaJcclxuICAgICAgICB2YXIgc2l6ZSA9IGdyaWQuZ2V0Q29udGVudFNpemUoKTtcclxuICAgICAgICB2YXIgcmVjdCA9IG5ldyBjYy5SZWN0KGdyaWQueCwgZ3JpZC55IC0gc2l6ZS5oZWlnaHQsIHNpemUud2lkdGgsIHNpemUuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYocmVjdC5jb250YWlucyhuZXcgY2MuVmVjMih0aGlzLm5vZGUueCwgdGhpcy5ub2RlLnkpKSAmJiBncmlkLmZsYWcgJiYgIWdyaWQuaGFzUGllY2UpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS54ID0gdGhpcy5ub2RlLmxhc3RYID0gZ3JpZC54ICsgc2l6ZS53aWR0aCAvIDI7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5ub2RlLmxhc3RZID0gZ3JpZC55IC0gc2l6ZS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ub2RlLmd4ID0geDtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmd5ID0geTtcclxuXHJcbiAgICAgICAgICAgIGdyaWQuaGFzUGllY2UgPSB0cnVlOyBcclxuICAgICAgICAgICAgZ3JpZC5waWVjZSA9IHRoaXMubm9kZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5pc0luUmFuZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmo4vlrZDlvIDlp4vmi5bliqjop6blj5EsIOa2iOmZpOivpeaji+WtkOW9seWTjVxyXG4gICAgICovXHJcbiAgICBvblRvdWNoU3RhcnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgaWYodGhpcy5pc0luUmFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5ncmlkc1t0aGlzLmd4XVt0aGlzLmd5XS5oYXNQaWVjZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8g5riF6Zmk5pyq5aSx5pWI5qOL5a2Q55qE5b2x5ZONXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmRpc2FibGUpIHsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldENvbXBvbmVudHMoY2MuQ29tcG9uZW50KVsxXS5zZXRmbGFnKC0xLCB0aGlzLmd4LCB0aGlzLmd5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1hbmdlci5lbmxpZ2h0ZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5qOL5a2Q5ouW5Yqo5LitLCDmjIHnu63mm7TmlrDmo4vlrZDlnZDmoIdcclxuICAgICAqL1xyXG4gICAgb25Ub3VjaE1vdmU6IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgdmFyIGRlbHRhID0gZXZlbnQudG91Y2guZ2V0RGVsdGEoKTtcclxuICAgICAgICB0aGlzLnggKz0gZGVsdGEueDtcclxuICAgICAgICB0aGlzLnkgKz0gZGVsdGEueTtcclxuICAgIH0sXHJcbiAgICBcclxuXHJcbiAgICAvKipcclxuICAgICAqIOW9k+aji+WtkOS4i+aUvuaXtiwg6Kem5Y+R5LiL5pS+6Z+z5pWILCDliKTmlq3mo4vlrZDmmK/lkKbokL3kuo7mn5DkuKrmoLzlrZAsIOabtOaWsOaJgOacieagvOWtkOeKtuaAge+8jOWIpOaWreaYr+WQpumAmuWFs1xyXG4gICAgICovXHJcbiAgICBvblRvdWNoRW5kOiBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICAvLyDkuIvmlL7pn7PmlYhcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKCFzZWxmLnB1dERvd25NdXNpYykge1xyXG4gICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwibXVzaWMvcGllY2VEb3duXCIsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5wdXREb3duTXVzaWMgPSBjbGlwO1xyXG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBmYWxzZSwgMC41KTsvLyDpn7Pph49cclxuICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkoc2VsZi5wdXREb3duTXVzaWMsIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOajgOafpeaji+WtkOaYr+WQpuiiq+afkOS4quagvOWtkOWMheWQq1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCAxMDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmdldENvbXBvbmVudHMoY2MuQ29tcG9uZW50KVsxXS5maXhHcmlkKGksIGopKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmo4vlrZDokL3ngrnlnKjmo4vnm5jlpJbvvIzlm57liLDotbflp4vngrlcclxuICAgICAgICBpZighdGhpcy5yYW5nZS5jb250YWlucyhuZXcgY2MuVmVjMih0aGlzLngsIHRoaXMueSkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMueCA9IHRoaXMubGFzdFggPSB0aGlzLnN0YXJ0WDtcclxuICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5sYXN0WSA9IHRoaXMuc3RhcnRZO1xyXG4gICAgICAgICAgICB0aGlzLmd4ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLmlzSW5SYW5nZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7ICAgIC8v6L+U5Zue5LiK5LiA5Liq5L2N572uXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ3ggIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRzW3RoaXMuZ3hdW3RoaXMuZ3ldLmhhc1BpZWNlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnggPSB0aGlzLmxhc3RYO1xyXG4gICAgICAgICAgICB0aGlzLnkgPSB0aGlzLmxhc3RZO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5pu05paw5omA5pyJ5qC85a2Q54q25oCB5bm26L+b6KGM54K55LquXHJcbiAgICAgICAgdGhpcy5tYW5nZXIudXBkYXRlQWxsKCk7XHJcbiAgICAgICAgdGhpcy5tYW5nZXIuZW5saWdodGVuKCk7IFxyXG5cclxuICAgICAgICAvLyDliKTmlq3mmK/lkKbpgJrlhbNcclxuICAgICAgICBpZih0aGlzLm1hbmdlci5jaGVja1Bhc3MoKSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hbmdlci5wYXNzZWRBY3Rpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcy5ub2RlKTsgXHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzLm5vZGUpOyBcclxuICAgIH0sXHJcblxyXG4gICAgb25EZXN0cm95ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMubm9kZSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcy5ub2RlKTsgXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yid5aeL5YyWXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnR5cGUgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuZGlzYWJsZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm5vZGUuaXNJblJhbmdlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5zdGFydFggPSB0aGlzLm5vZGUubGFzdFggPSB0aGlzLm5vZGUueDtcclxuICAgICAgICB0aGlzLm5vZGUuc3RhcnRZID0gdGhpcy5ub2RlLmxhc3RZID0gdGhpcy5ub2RlLnk7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5tYW5nZXIgPSB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChcIlBpZWNlTWFuYWdlclwiKTtcclxuXHJcbiAgICAgICAgLy8g5qOL55uY5omA5Zyo55+p5b2iXHJcbiAgICAgICAgdmFyIGdyaWQgPSB0aGlzLm5vZGUuZ3JpZHNbOV1bMF07XHJcbiAgICAgICAgdmFyIGxlbiA9IGdyaWQuZ2V0Q29udGVudFNpemUoKS53aWR0aDtcclxuICAgICAgICB0aGlzLm5vZGUucmFuZ2UgPSBuZXcgY2MuUmVjdChncmlkLngsIGdyaWQueSAtIGxlbiwgbGVuICogMTAsIGxlbiAqIDEwKTtcclxuXHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUmFua2luZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIlN1YkNvbnRleHRWaWV3IiwidHlwZSIsIk5vZGUiLCJzZXJpYWxpemFibGUiLCJzdGFydCIsInJhbmtpbmdQYW5lbCIsInBhcmVudCIsImFjdGl2ZSIsInNob3ciLCJ3aW5kb3ciLCJvcGVuRGF0YUNvbnRleHQiLCJ3eCIsImdldE9wZW5EYXRhQ29udGV4dCIsInBvc3RNZXNzYWdlIiwidGV4dCIsImhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxjQUFjLEVBQUU7QUFDWixpQkFBUyxJQURHO0FBRVpDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQUZHO0FBR1pDLE1BQUFBLFlBQVksRUFBRTtBQUhGO0FBRFIsR0FIUDtBQVdMQyxFQUFBQSxLQVhLLG1CQVdHO0FBQ0osU0FBS0MsWUFBTCxHQUFvQixLQUFLTCxjQUFMLENBQW9CTSxNQUF4QztBQUNBLFNBQUtELFlBQUwsQ0FBa0JFLE1BQWxCLEdBQTJCLEtBQTNCO0FBQ0EsU0FBS1AsY0FBTCxDQUFvQk8sTUFBcEIsR0FBNkIsS0FBN0I7QUFDSCxHQWZJO0FBaUJMQyxFQUFBQSxJQWpCSyxrQkFpQkU7QUFDSCxTQUFLUixjQUFMLENBQW9CTyxNQUFwQixHQUE2QixJQUE3QjtBQUNBLFNBQUtGLFlBQUwsQ0FBa0JFLE1BQWxCLEdBQTJCLElBQTNCLENBRkcsQ0FHSDs7QUFDQSxRQUFHRSxNQUFNLENBQUMsSUFBRCxDQUFULEVBQWlCO0FBQ2I7QUFDQSxVQUFJQyxlQUFlLEdBQUdDLEVBQUUsQ0FBQ0Msa0JBQUgsRUFBdEI7QUFDQUYsTUFBQUEsZUFBZSxDQUFDRyxXQUFoQixDQUE0QjtBQUN4QkMsUUFBQUEsSUFBSSxFQUFDLFVBRG1CLENBQ1A7O0FBRE8sT0FBNUI7QUFHSDtBQUNKLEdBNUJJO0FBOEJMQyxFQUFBQSxJQTlCSyxrQkE4QkU7QUFDSCxTQUFLZixjQUFMLENBQW9CTyxNQUFwQixHQUE2QixLQUE3QjtBQUNBLFNBQUtGLFlBQUwsQ0FBa0JFLE1BQWxCLEdBQTJCLEtBQTNCLENBRkcsQ0FHSDs7QUFDQSxRQUFHRSxNQUFNLENBQUMsSUFBRCxDQUFULEVBQWlCO0FBQ2I7QUFDQSxVQUFJQyxlQUFlLEdBQUdDLEVBQUUsQ0FBQ0Msa0JBQUgsRUFBdEI7QUFDQUYsTUFBQUEsZUFBZSxDQUFDRyxXQUFoQixDQUE0QjtBQUN4QkMsUUFBQUEsSUFBSSxFQUFDLE9BRG1CLENBQ1Y7O0FBRFUsT0FBNUI7QUFHSDtBQUNKO0FBekNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgU3ViQ29udGV4dFZpZXc6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnJhbmtpbmdQYW5lbCA9IHRoaXMuU3ViQ29udGV4dFZpZXcucGFyZW50O1xyXG4gICAgICAgIHRoaXMucmFua2luZ1BhbmVsLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuU3ViQ29udGV4dFZpZXcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5TdWJDb250ZXh0Vmlldy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmFua2luZ1BhbmVsLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgLy8g5Yik5pat5piv5ZCm5piv5b6u5L+h5bmz5Y+wXHJcbiAgICAgICAgaWYod2luZG93Wyd3eCddKSB7XHJcbiAgICAgICAgICAgIC8vIOe7meWtkOWfn+WPkemAgea2iOaBr1xyXG4gICAgICAgICAgICB2YXIgb3BlbkRhdGFDb250ZXh0ID0gd3guZ2V0T3BlbkRhdGFDb250ZXh0KCk7XHJcbiAgICAgICAgICAgIG9wZW5EYXRhQ29udGV4dC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OidzaG93UmFuaycsIC8vIOWcqOWtkOWfn+S4reiwg+eUqOivpeWHveaVsFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5TdWJDb250ZXh0Vmlldy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJhbmtpbmdQYW5lbC5hY3RpdmUgPSBmYWxzZTsgIFxyXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpuaYr+W+ruS/oeW5s+WPsFxyXG4gICAgICAgIGlmKHdpbmRvd1snd3gnXSkge1xyXG4gICAgICAgICAgICAvLyDnu5nlrZDln5/lj5HpgIHmtojmga9cclxuICAgICAgICAgICAgdmFyIG9wZW5EYXRhQ29udGV4dCA9IHd4LmdldE9wZW5EYXRhQ29udGV4dCgpO1xyXG4gICAgICAgICAgICBvcGVuRGF0YUNvbnRleHQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDonY2xlYXInLCAvLyDmuIXnqbrmjpLooYzmppxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAgXHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ2hlY2tlckJvYXJkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidXBwZXJMZWZ0WCIsInVwcGVyTGVmdFkiLCJicm9hZFNpemUiLCJncmlkV2FsbCIsInR5cGUiLCJQcmVmYWIiLCJncmlkUGF0aCIsImNyZWF0ZUdyaWQiLCJwb3NpdGlvbiIsImtpbmQiLCJuZXdHcmlkIiwiaW5zdGFudGlhdGUiLCJmbGFnIiwibnVtcyIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFNpYmxpbmdJbmRleCIsImFuY2hvclgiLCJhbmNob3JZIiwibmV3UG9zaXRpb24iLCJwYXJlbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsInNldFBvc2l0aW9uIiwiY3JlYXRlTWFwIiwiZmxhZ3MiLCJnZXRDb21wb25lbnRzIiwiaSIsIm1hcCIsIkFycmF5IiwieSIsImdyaWRTaXplIiwiaiIsIngiLCJ2MiIsImRhdGEiLCJzdGFydCIsImdyaWROdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsVUFBVSxFQUFFLENBRko7QUFJUkMsSUFBQUEsVUFBVSxFQUFFLENBSko7QUFNUkMsSUFBQUEsU0FBUyxFQUFFLENBTkg7QUFRUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUVSLEVBQUUsQ0FBQ1M7QUFGSCxLQVJGO0FBYVJDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkYsTUFBQUEsSUFBSSxFQUFFUixFQUFFLENBQUNTO0FBRkg7QUFiRixHQUhQOztBQXNCTDs7Ozs7OztBQU9BRSxFQUFBQSxVQUFVLEVBQUUsb0JBQVNDLFFBQVQsRUFBbUJDLElBQW5CLEVBQXlCO0FBQ2pDLFFBQUlDLE9BQU8sR0FBRyxJQUFkLENBRGlDLENBR2pDOztBQUNBLFlBQVFELElBQVI7QUFDSSxXQUFLLENBQUw7QUFDSUMsUUFBQUEsT0FBTyxHQUFHZCxFQUFFLENBQUNlLFdBQUgsQ0FBZSxLQUFLUixRQUFwQixDQUFWO0FBQ0E7O0FBQ0osV0FBSyxDQUFMO0FBQ0lPLFFBQUFBLE9BQU8sR0FBR2QsRUFBRSxDQUFDZSxXQUFILENBQWUsS0FBS0wsUUFBcEIsQ0FBVjtBQUNBO0FBTlIsS0FKaUMsQ0FhakM7OztBQUNBSSxJQUFBQSxPQUFPLENBQUNFLElBQVIsR0FBZUgsSUFBZjtBQUNBQyxJQUFBQSxPQUFPLENBQUNHLElBQVIsR0FBZSxDQUFmO0FBRUEsU0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CTCxPQUFuQixFQWpCaUMsQ0FtQmpDOztBQUNBQSxJQUFBQSxPQUFPLENBQUNNLGVBQVIsQ0FBd0IsQ0FBeEIsRUFwQmlDLENBc0JqQzs7QUFDQU4sSUFBQUEsT0FBTyxDQUFDTyxPQUFSLEdBQWtCLENBQWxCO0FBQ0FQLElBQUFBLE9BQU8sQ0FBQ1EsT0FBUixHQUFrQixDQUFsQixDQXhCaUMsQ0EwQmpDOztBQUNBLFFBQUlDLFdBQVcsR0FBR1QsT0FBTyxDQUFDVSxNQUFSLENBQWVDLG9CQUFmLENBQW9DYixRQUFwQyxDQUFsQjtBQUNBRSxJQUFBQSxPQUFPLENBQUNZLFdBQVIsQ0FBb0JILFdBQXBCO0FBRUEsV0FBT1QsT0FBUDtBQUVILEdBN0RJOztBQWdFTDs7O0FBR0FhLEVBQUFBLFNBQVMsRUFBRSxxQkFBVztBQUNsQixRQUFJQyxLQUFLLEdBQUcsS0FBS1YsSUFBTCxDQUFVVyxhQUFWLENBQXdCN0IsRUFBRSxDQUFDRSxTQUEzQixFQUFzQyxDQUF0QyxDQUFaLENBRGtCLENBQ29DOztBQUV0RCxTQUFJLElBQUk0QixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsRUFBbkIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsV0FBS0MsR0FBTCxDQUFTRCxDQUFULElBQWMsSUFBSUUsS0FBSixFQUFkO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHLEtBQUs1QixVQUFMLEdBQWtCeUIsQ0FBQyxHQUFHLEtBQUtJLFFBQW5DOztBQUNBLFdBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLEVBQW5CLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLFlBQUlDLENBQUMsR0FBRyxLQUFLaEMsVUFBTCxHQUFrQitCLENBQUMsR0FBRyxLQUFLRCxRQUFuQztBQUNBLGFBQUtILEdBQUwsQ0FBU0QsQ0FBVCxFQUFZSyxDQUFaLElBQWlCLEtBQUt4QixVQUFMLENBQWdCWCxFQUFFLENBQUNxQyxFQUFILENBQU1ELENBQU4sRUFBU0gsQ0FBVCxDQUFoQixFQUE2QkwsS0FBSyxDQUFDVSxJQUFOLENBQVdSLENBQVgsRUFBY0ssQ0FBZCxDQUE3QixDQUFqQjtBQUNIO0FBQ0o7QUFFSixHQS9FSTtBQWlGTEksRUFBQUEsS0FqRkssbUJBaUZJO0FBRUwsU0FBS1IsR0FBTCxHQUFXLElBQUlDLEtBQUosRUFBWDtBQUVBLFNBQUtRLE9BQUwsR0FBZSxFQUFmO0FBRUEsU0FBS04sUUFBTCxHQUFnQixLQUFLNUIsU0FBTCxHQUFlLEtBQUtrQyxPQUFwQztBQUVBLFNBQUtiLFNBQUw7QUFDSDtBQTFGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5Yqo5oCB55Sf5oiQ5qOL55uYXHJcbiAqIEBwcm9wZXJ0eSB7Y2MuTm9kZX0gbm9kZSDor6XohJrmnKzmjILovb3nmoToioLngrlcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB1cHBlckxlZnRYIOaji+ebmOW3puS4iuinkuaoquWdkOagh1xyXG4gKiBcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IHVwcGVyTGVmdFkg5qOL55uY5bem5LiK6KeS57q15Z2Q5qCHXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gYnJvYWRTaXplIOaji+ebmOi+uemVv1xyXG4gKiBcclxuICogQHByb3BlcnR5IHtjYy5QcmVmYWJ9IGdyaWRXYWxsIOagvOWtkOmihOWItuS9k+i1hOa6kC3lopnkvZNcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7Y2MuUHJlZmFifSBncmlkUGF0aCDmoLzlrZDpooTliLbkvZPotYTmupAt6Lev5b6EXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge2NjLk5vZGVbXX0gbWFwIOWMheWQq+aJgOacieagvOWtkOeahOaVsOe7hFxyXG4gKiBcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IGdyaWROdW0g5q+P6L655qC85a2Q5pWwLS3lm7rlrprkuLoxMFxyXG4gKiBcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IGdyaWRTaXplIOagvOWtkOWkp+Wwj1xyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgdXBwZXJMZWZ0WDogMCwgXHJcblxyXG4gICAgICAgIHVwcGVyTGVmdFk6IDAsIFxyXG5cclxuICAgICAgICBicm9hZFNpemU6IDAsXHJcbiAgICAgICBcclxuICAgICAgICBncmlkV2FsbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBncmlkUGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LCAgICAgICAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqo5oCB55Sf5oiQ5qC85a2Q5bm25bCG5YW25re75Yqg5Yiw5Zy65pmv5LitXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7Y2MuVjJ9IHBvc2l0aW9uIOeUn+aIkOagvOWtkOeahOS9jee9rlxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBraW5kIOagvOWtkOeahOexu+Wei1xyXG4gICAgICogQHJldHVybnMge0dyaWR9IOeUn+aIkOagvOWtkOeahOW8leeUqFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVHcmlkOiBmdW5jdGlvbihwb3NpdGlvbiwga2luZCkge1xyXG4gICAgICAgIHZhciBuZXdHcmlkID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8g5qC55o2u5qC85a2Q56eN57G755Sf5oiQ6IqC54K5XHJcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIG5ld0dyaWQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyaWRXYWxsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBuZXdHcmlkID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmlkUGF0aCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDDkuLrlopksIDHkuLrot68sIDLkuLrnga8sIDPkuLrlj5fmlLvlh7tcclxuICAgICAgICBuZXdHcmlkLmZsYWcgPSBraW5kO1xyXG4gICAgICAgIG5ld0dyaWQubnVtcyA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdHcmlkKTtcclxuXHJcbiAgICAgICAgLy8g6K6+572u5qC85a2Q5bGC57qnXHJcbiAgICAgICAgbmV3R3JpZC5zZXRTaWJsaW5nSW5kZXgoMik7IFxyXG5cclxuICAgICAgICAvLyDkvb/mr4/kuKrmoLzlrZDku6Xlt6bkuIrop5LkuLrplJrngrlcclxuICAgICAgICBuZXdHcmlkLmFuY2hvclggPSAwO1xyXG4gICAgICAgIG5ld0dyaWQuYW5jaG9yWSA9IDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g6K6+572u5qC85a2Q5L2N572uXHJcbiAgICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gbmV3R3JpZC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zaXRpb24pO1xyXG4gICAgICAgIG5ld0dyaWQuc2V0UG9zaXRpb24obmV3UG9zaXRpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3R3JpZDtcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaji+ebmFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVNYXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBmbGFncyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudClbMV07IC8vIOWFs+WNoeaVsOaNruiEmuacrOS4gOWumumcgOaMguWcqOesrDPkvY3nva5cclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5tYXBbaV0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLnVwcGVyTGVmdFkgLSBpICogdGhpcy5ncmlkU2l6ZTtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gdGhpcy51cHBlckxlZnRYICsgaiAqIHRoaXMuZ3JpZFNpemU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFtpXVtqXSA9IHRoaXMuY3JlYXRlR3JpZChjYy52Mih4LCB5KSwgZmxhZ3MuZGF0YVtpXVtqXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZE51bSA9IDEwO1xyXG4gXHJcbiAgICAgICAgdGhpcy5ncmlkU2l6ZSA9IHRoaXMuYnJvYWRTaXplL3RoaXMuZ3JpZE51bTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVNYXAoKTtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDEzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAxMztcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDE0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAxNDtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDEyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAxMjtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMSwgMSwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDExLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAxMTtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDE5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAxOTtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMRXZlbDYuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxyXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxyXG5cclxuICAgICAgICAvLyBwYXRoOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDY7XHJcblxyXG4gICAgICAgIC8vIOWcsOWbvlxyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy8g6Lev5b6EXHJcbiAgICAgICAgdGhpcy5wYXRoWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxufSk7Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDE1LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAxNTtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDE2LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAxNjtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDE4LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAxODtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxyXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxyXG5cclxuICAgICAgICAvLyBwYXRoOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDI7XHJcblxyXG4gICAgICAgIC8vIOWcsOWbvlxyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gbmV3IEFycmF5KDEsIDEsIDAsIDEsIDAsIDEsIDAsIDAsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy8g6Lev5b6EXHJcbiAgICAgICAgdGhpcy5wYXRoWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNV0gPSBuZXcgQXJyYXkoMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxufSk7Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDIwLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAyMDtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDE3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmLENBZEssQ0FnQkw7O0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAxNztcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDIyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAyMjtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDI2LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAyNjtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDIxLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAyMTtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDIzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAyMztcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDI0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAyNDtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMSwgMSwgMCwgMCwgMSwgMCwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDI1LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmLENBZEssQ0FnQkw7O0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAyNTtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMCwgMSwgMCwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMSwgMCwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDI3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAyNztcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMCwgMCwgMSwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDEsIDEsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAwLCAwLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDI4LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAyODtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAwLCAxLCAxLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMCwgMSwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDEsIDEsIDAsIDAsIDEsIDEsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBRUg7QUFyREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxyXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxyXG5cclxuICAgICAgICAvLyBwYXRoOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDM7XHJcblxyXG4gICAgICAgIC8vIOWcsOWbvlxyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcclxuXHJcblxyXG4gICAgICAgIC8vIOi3r+W+hFxyXG4gICAgICAgIHRoaXMucGF0aFswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFszXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs2XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcclxuXHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDI5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAyOTtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDMxLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAzMTtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDAsIDAsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAwLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDMzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAzMztcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDMyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAzMjtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDMwLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAzMDtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMCwgMCwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDM0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAzNDtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDAsIDAsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDM1LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAzNTtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDM5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtQLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmLENBZEssQ0FnQkw7O0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAzOTtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDEsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDQyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSA0MjtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAxLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMSwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMSwgMSwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDM2LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAzNjtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMSwgMSwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAxLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAxLCAwLCAxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgxLCAxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDM4LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAzODtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMSwgMCwgMSwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDM3LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAzNztcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDQwLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSA0MDtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDguanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxyXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxyXG5cclxuICAgICAgICAvLyBwYXRoOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDg7XHJcblxyXG4gICAgICAgIC8vIOWcsOWbvlxyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy8g6Lev5b6EXHJcbiAgICAgICAgdGhpcy5wYXRoWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzldID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxyXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxyXG5cclxuICAgICAgICAvLyBwYXRoOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDQ7XHJcblxyXG4gICAgICAgIC8vIOWcsOWbvlxyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAwLCAwLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMSwgMCwgMCwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMCwgMCwgMSwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy8g6Lev5b6EXHJcbiAgICAgICAgdGhpcy5wYXRoWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxKTtcclxuICAgICAgICB0aGlzLnBhdGhbNV0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDQ0LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSA0NDtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDAsIDAsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgxLCAxLCAwLCAxLCAxLCAxLCAxLCAwLCAxLCAxKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDEsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDQzLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSA0MztcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAwLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMSwgMCwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAxLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxyXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxyXG5cclxuICAgICAgICAvLyBwYXRoOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDU7XHJcblxyXG4gICAgICAgIC8vIOWcsOWbvlxyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy8g6Lev5b6EXHJcbiAgICAgICAgdGhpcy5wYXRoWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLnBhdGhbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxufSk7Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDQxLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSA0MTtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMSwgMSwgMSwgMSwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAxLCAxLCAxLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMSwgMCwgMSwgMCwgMSwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAxLCAwLCAxLCAwLCAxLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDQ1LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZGF0YSIsInR5cGUiLCJJbnRlZ2VyIiwidmlzaWJsZSIsInBhdGgiLCJzdGFydCIsImluZGV4IiwiQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFFQTtBQUNBO0FBRUFDLElBQUFBLElBQUksRUFBRTtBQUNGLGlCQUFTLEVBRFA7QUFFRkMsTUFBQUEsSUFBSSxFQUFFLENBQUNMLEVBQUUsQ0FBQ00sT0FBSixDQUZKO0FBR0ZDLE1BQUFBLE9BQU8sRUFBRTtBQUhQLEtBUEU7QUFhUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGSCxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFA7QUFiRSxHQUhQO0FBd0JMRSxFQUFBQSxLQXhCSyxtQkF3Qkk7QUFDTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiLENBRkssQ0FJTDs7QUFDQSxTQUFLTixJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS1AsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJTyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIs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QWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0EsU0FBS0gsSUFBTCxDQUFVLENBQVYsSUFBZSxJQUFJRyxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsRUFBK0IsQ0FBL0IsRUFBa0MsQ0FBbEMsRUFBcUMsQ0FBckMsQ0FBZjtBQUNIO0FBbkRJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cHM6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGRhdGEgOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgLy8gcGF0aDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIOWFs+WNoeWPt1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSA0NTtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAwLCAxLCAwLCAwLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMSwgMCwgMSwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAxLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDEsIDEsIDAsIDEsIDEsIDAsIDEsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgwLCAxLCAxLCAxLCAwLCAxLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMSwgMSwgMCwgMSwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDAsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbXVzaWNcXE11c2ljRXZlbnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInN0YXJ0IiwiQXVkaW9QbGF5ZXIiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiYmciLCJtb25pdG9yIiwiU291bmQiLCJjbGljayIsImZsYWciLCJkaXJlY3RvciIsImdldFNjZW5lIiwiZ2V0Q2hpbGRCeU5hbWUiLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJTcHJpdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxLQUhLLG1CQUdJO0FBQ0wsU0FBS0MsV0FBTCxHQUFtQkosRUFBRSxDQUFDSyxJQUFILENBQVEsT0FBUixFQUFpQkMsWUFBakIsQ0FBOEIsY0FBOUIsQ0FBbkI7QUFDQSxTQUFLQyxFQUFMLEdBQVVQLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRLDBDQUFSLENBQVY7QUFDQSxTQUFLRyxPQUFMO0FBQ0gsR0FQSTtBQVNMQyxFQUFBQSxLQVRLLG1CQVNHO0FBQ0osU0FBS0wsV0FBTCxDQUFpQk0sS0FBakI7QUFDSCxHQVhJOztBQWFMOzs7QUFHQUYsRUFBQUEsT0FoQksscUJBZ0JLO0FBQ04sUUFBSUcsSUFBSSxHQUFHWCxFQUFFLENBQUNZLFFBQUgsQ0FBWUMsUUFBWixDQUFxQixPQUFyQixFQUE4QkMsY0FBOUIsQ0FBNkMsT0FBN0MsRUFBc0RSLFlBQXRELENBQW1FLGNBQW5FLEVBQW1GSyxJQUE5Rjs7QUFFQSxRQUFHQSxJQUFJLElBQUksQ0FBWCxFQUFjO0FBQ1YsVUFBSUksSUFBSSxHQUFHLElBQVg7QUFDQWYsTUFBQUEsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLGlCQUFsQixFQUFxQ2pCLEVBQUUsQ0FBQ2tCLFdBQXhDLEVBQXFELFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtBQUU3RUwsUUFBQUEsSUFBSSxDQUFDUixFQUFMLENBQVFELFlBQVIsQ0FBcUJOLEVBQUUsQ0FBQ3FCLE1BQXhCLEVBQWdDRCxXQUFoQyxHQUE4Q0EsV0FBOUM7QUFDSCxPQUhEO0FBSUgsS0FORCxNQU1PO0FBQ0gsVUFBSUwsSUFBSSxHQUFHLElBQVg7QUFFQWYsTUFBQUEsRUFBRSxDQUFDZ0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLGtCQUFsQixFQUFzQ2pCLEVBQUUsQ0FBQ2tCLFdBQXpDLEVBQXNELFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtBQUM5RUwsUUFBQUEsSUFBSSxDQUFDUixFQUFMLENBQVFELFlBQVIsQ0FBcUJOLEVBQUUsQ0FBQ3FCLE1BQXhCLEVBQWdDRCxXQUFoQyxHQUE4Q0EsV0FBOUM7QUFDSCxPQUZEO0FBR0g7QUFFSjtBQWpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5oyJ6ZKu5o6n5Yi26Z+z5LmQ5byA5YWzXHJcbiAqL1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuQXVkaW9QbGF5ZXIgPSBjYy5maW5kKFwiQXVkaW9cIikuZ2V0Q29tcG9uZW50KFwiQXVkaW9NYW5hZ2VyXCIpO1xyXG4gICAgICAgIHRoaXMuYmcgPSBjYy5maW5kKCdDYW52YXMvQmFja2dyb3VuZC9NdXNpY1BsYXllci9CYWNrZ3JvdW5kJyk7XHJcbiAgICAgICAgdGhpcy5tb25pdG9yKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIFNvdW5kKCkge1xyXG4gICAgICAgIHRoaXMuQXVkaW9QbGF5ZXIuY2xpY2soKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmjaLpn7PkuZDmjInpkq5cclxuICAgICAqL1xyXG4gICAgbW9uaXRvcigpIHtcclxuICAgICAgICB2YXIgZmxhZyA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCdTdGFydCcpLmdldENoaWxkQnlOYW1lKFwiQXVkaW9cIikuZ2V0Q29tcG9uZW50KCdBdWRpb01hbmFnZXInKS5mbGFnO1xyXG5cclxuICAgICAgICBpZihmbGFnID09IDEpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImJ1dHRvbi9zb3VuZF9vblwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxmLmJnLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiYnV0dG9uL3NvdW5kX29mZlwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuYmcuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICAgICAgfSkgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59KTsiXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxyXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxyXG5cclxuICAgICAgICAvLyBwYXRoOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDk7XHJcblxyXG4gICAgICAgIC8vIOWcsOWbvlxyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAxLCAxLCAxLCAxLCAxLCAxKTtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy8g6Lev5b6EXHJcbiAgICAgICAgdGhpcy5wYXRoWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEpO1xyXG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxufSk7Il19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUEr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QUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBkYXRhIDogW10sXHJcbiAgICAgICAgLy8gdHlwZGUgOiBbY2MuSW50ZWdlcl0sXHJcblxyXG4gICAgICAgIC8vIHBhdGg6IFtdLFxyXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxyXG5cclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHBhdGg6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IFtjYy5JbnRlZ2VyXSxcclxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICAvLyDlhbPljaHlj7dcclxuICAgICAgICB0aGlzLmluZGV4ID0gMTtcclxuXHJcbiAgICAgICAgLy8g5Zyw5Zu+XHJcbiAgICAgICAgdGhpcy5kYXRhWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMSwgMSwgMSwgMSwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzNdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs0XSA9IG5ldyBBcnJheSgwLCAwLCAxLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMSwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzZdID0gbmV3IEFycmF5KDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs3XSA9IG5ldyBBcnJheSgxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDApO1xyXG5cclxuICAgICAgICAvLyDot6/lvoRcclxuICAgICAgICB0aGlzLnBhdGhbMF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzFdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsyXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbM10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzRdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs1XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzddID0gbmV3IEFycmF5KDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs4XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrSmlhbmcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzZXRmbGFnIiwiWCIsIlkiLCJncmlkcyIsIm5vZGUiLCJkaXJ4IiwiQXJyYXkiLCJkaXJ5IiwiaSIsIngiLCJ5IiwiZmxhZyIsImhhc1BpZWNlIiwicGllY2UiLCJ0eXBlIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUNBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ04sYUFBU0MsT0FBTyxDQUFDLFlBQUQsQ0FEVjtBQUdOQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNyQixRQUFJQyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QjtBQUNBLFFBQUlFLElBQUksR0FBR0MsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQWQsQ0FBaEI7QUFDQSxRQUFJQyxJQUFJLEdBQUdELEtBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFDLENBQVgsRUFBYyxDQUFkLENBQWhCOztBQUVBLFNBQUksSUFBSUUsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO0FBQ3ZCLFVBQUlDLENBQUMsR0FBR1IsQ0FBQyxHQUFHSSxJQUFJLENBQUNHLENBQUQsQ0FBaEI7QUFDQSxVQUFJRSxDQUFDLEdBQUdSLENBQUMsR0FBR0ssSUFBSSxDQUFDQyxDQUFELENBQWhCO0FBRUEsVUFBR0MsQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxHQUFHLENBQWIsSUFBa0JDLENBQUMsR0FBRyxDQUF0QixJQUEyQkEsQ0FBQyxHQUFHLENBQWxDLEVBQXFDO0FBQ3JDLFVBQUdQLEtBQUssQ0FBQ00sQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUMsSUFBWixJQUFvQixDQUF2QixFQUEwQjs7QUFFMUIsVUFBR1IsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRSxRQUFaLElBQXdCVCxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLEtBQVosQ0FBa0JDLElBQWxCLElBQTBCLENBQXJELEVBQXdEO0FBQ3BEWCxRQUFBQSxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLEtBQVosQ0FBa0JFLE9BQWxCLEdBQTRCLElBQTVCO0FBQ0g7QUFDSjtBQUNKO0FBbkJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmjqfliLbpu5Hmo4vlsIbnmoTnu4Tku7ZcclxuICovXHJcblxyXG4gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogcmVxdWlyZShcIkJsYWNrUGllY2VcIiksXHJcblxyXG4gICAgc2V0ZmxhZzogZnVuY3Rpb24oIFgsIFkpIHtcclxuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm5vZGUuZ3JpZHM7XHJcbiAgICAgICAgdmFyIGRpcnggPSBBcnJheSgxLCAwLCAwLCAwLCAtMSk7XHJcbiAgICAgICAgdmFyIGRpcnkgPSBBcnJheSgwLCAxLCAwLCAtMSwgMCk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHggPSBYICsgZGlyeFtpXTtcclxuICAgICAgICAgICAgdmFyIHkgPSBZICsgZGlyeVtpXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYoZ3JpZHNbeF1beV0uZmxhZyA9PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKGdyaWRzW3hdW3ldLmhhc1BpZWNlICYmIGdyaWRzW3hdW3ldLnBpZWNlLnR5cGUgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgZ3JpZHNbeF1beV0ucGllY2UuZGlzYWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbXVzaWNcXEJ1dHRvbk11c2ljLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYnV0dG9uU291bmQiLCJ0eXBlIiwiQXVkaW9DbGlwIiwic3RhcnQiLCJTb3VuZCIsImF1ZGlvRW5naW5lIiwicGxheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1RDLElBQUFBLFdBQVcsRUFBQztBQUNSQyxNQUFBQSxJQUFJLEVBQUNMLEVBQUUsQ0FBQ00sU0FEQTtBQUVSLGlCQUFRO0FBRkE7QUFESCxHQUhQO0FBVUw7QUFFQTtBQUVBQyxFQUFBQSxLQWRLLG1CQWNJLENBRVIsQ0FoQkk7QUFrQkxDLEVBQUFBLEtBbEJLLG1CQWtCRTtBQUNIUixJQUFBQSxFQUFFLENBQUNTLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLTixXQUF6QixFQUFxQyxLQUFyQyxFQUEyQyxHQUEzQztBQUNILEdBcEJJLENBc0JMOztBQXRCSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgYnV0dG9uU291bmQ6e1xyXG4gICAgICAgICAgIHR5cGU6Y2MuQXVkaW9DbGlwLFxyXG4gICAgICAgICAgIGRlZmF1bHQ6bnVsbFxyXG4gICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgU291bmQoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYnV0dG9uU291bmQsZmFsc2UsMC40KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcblxyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGV2ZWxzXFxMZXZlbDcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJkYXRhIiwidHlwZSIsIkludGVnZXIiLCJ2aXNpYmxlIiwicGF0aCIsInN0YXJ0IiwiaW5kZXgiLCJBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUVBO0FBQ0E7QUFFQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsRUFEUDtBQUVGQyxNQUFBQSxJQUFJLEVBQUUsQ0FBQ0wsRUFBRSxDQUFDTSxPQUFKLENBRko7QUFHRkMsTUFBQUEsT0FBTyxFQUFFO0FBSFAsS0FQRTtBQWFSQyxJQUFBQSxJQUFJLEVBQUU7QUFDRixpQkFBUyxFQURQO0FBRUZILE1BQUFBLElBQUksRUFBRSxDQUFDTCxFQUFFLENBQUNNLE9BQUosQ0FGSjtBQUdGQyxNQUFBQSxPQUFPLEVBQUU7QUFIUDtBQWJFLEdBSFA7QUF3QkxFLEVBQUFBLEtBeEJLLG1CQXdCSTtBQUNMO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLENBQWIsQ0FGSyxDQUlMOztBQUNBLFNBQUtOLElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSU8sS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLUCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlPLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixD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ZjtBQUNBLFNBQUtILElBQUwsQ0FBVSxDQUFWLElBQWUsSUFBSUcsS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLENBQXpCLEVBQTRCLENBQTVCLEVBQStCLENBQS9CLEVBQWtDLENBQWxDLEVBQXFDLENBQXJDLENBQWY7QUFDQSxTQUFLSCxJQUFMLENBQVUsQ0FBVixJQUFlLElBQUlHLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixDQUF0QixFQUF5QixDQUF6QixFQUE0QixDQUE1QixFQUErQixDQUEvQixFQUFrQyxDQUFsQyxFQUFxQyxDQUFyQyxDQUFmO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vZG9jcy5jb2NvczJkLXgub3JnL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vICAtIFtFbmdsaXNoXSBodHRwczovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZGF0YSA6IFtdLFxyXG4gICAgICAgIC8vIHR5cGRlIDogW2NjLkludGVnZXJdLFxyXG5cclxuICAgICAgICAvLyBwYXRoOiBbXSxcclxuICAgICAgICAvLyB0eXBkZSA6IFtjYy5JbnRlZ2VyXSxcclxuXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogW2NjLkludGVnZXJdLFxyXG4gICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBwYXRoOiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiBbY2MuSW50ZWdlcl0sXHJcbiAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8g5YWz5Y2h5Y+3XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDc7XHJcblxyXG4gICAgICAgIC8vIOWcsOWbvlxyXG4gICAgICAgIHRoaXMuZGF0YVswXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbMV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzJdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVszXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbNF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzVdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs2XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLmRhdGFbN10gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5kYXRhWzhdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMuZGF0YVs5XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcclxuXHJcbiAgICAgICAgLy8g6Lev5b6EXHJcbiAgICAgICAgdGhpcy5wYXRoWzBdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFsxXSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbMl0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzNdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs0XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbNV0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzZdID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHRoaXMucGF0aFs3XSA9IG5ldyBBcnJheSgwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwKTtcclxuICAgICAgICB0aGlzLnBhdGhbOF0gPSBuZXcgQXJyYXkoMCwgMCwgMCwgMCwgMCwgMSwgMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5wYXRoWzldID0gbmV3IEFycmF5KDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrQ2hlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsIlgiLCJZIiwieCIsInkiLCJncmlkcyIsIm5vZGUiLCJmbGFnIiwiaGFzUGllY2UiLCJwaWVjZSIsImRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUlDQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNOLGFBQVNDLE9BQU8sQ0FBQyxZQUFELENBRFY7QUFHTkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNwQixRQUFJQyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QixDQUhvQixDQU1wQjs7QUFDQUYsSUFBQUEsQ0FBQzs7QUFDRCxXQUFNQSxDQUFDLElBQUksQ0FBTCxJQUFVRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUMsQ0FBQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUF0RDtBQUFnRUwsTUFBQUEsQ0FBQztBQUFqRTs7QUFFQSxRQUFHQSxDQUFDLElBQUksQ0FBTCxJQUFVRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUNGLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBbEQsRUFBNEQ7QUFDeERILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsSUFBNUI7QUFDSDs7QUFDRFAsSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBYm9CLENBZXBCOztBQUNBRSxJQUFBQSxDQUFDOztBQUNELFdBQU1BLENBQUMsSUFBSSxDQUFMLElBQVVFLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQixDQUE5QixJQUFtQyxDQUFDRixLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLFFBQXREO0FBQWdFTCxNQUFBQSxDQUFDO0FBQWpFOztBQUVBLFFBQUdBLENBQUMsSUFBSSxDQUFMLElBQVVFLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQixDQUE5QixJQUFtQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUFsRCxFQUE0RDtBQUN4REgsTUFBQUEsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxLQUFaLENBQWtCQyxPQUFsQixHQUE0QixJQUE1QjtBQUNIOztBQUNEUCxJQUFBQSxDQUFDLEdBQUdGLENBQUosQ0F0Qm9CLENBd0JwQjs7QUFDQUcsSUFBQUEsQ0FBQzs7QUFDRCxXQUFNQSxDQUFDLElBQUksQ0FBTCxJQUFVQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUMsQ0FBQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUF0RDtBQUFnRUosTUFBQUEsQ0FBQztBQUFqRTs7QUFFQSxRQUFHQSxDQUFDLElBQUksQ0FBTCxJQUFVQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUNGLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBbEQsRUFBNEQ7QUFDeERILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsSUFBNUI7QUFDSDs7QUFDRE4sSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBL0JvQixDQWlDcEI7O0FBQ0FFLElBQUFBLENBQUM7O0FBQ0QsV0FBTUEsQ0FBQyxJQUFJLENBQUwsSUFBVUMsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CLENBQTlCLElBQW1DLENBQUNGLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBdEQ7QUFBZ0VKLE1BQUFBLENBQUM7QUFBakU7O0FBRUEsUUFBR0EsQ0FBQyxJQUFJLENBQUwsSUFBVUMsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CLENBQTlCLElBQW1DRixLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLFFBQWxELEVBQTREO0FBQ3hESCxNQUFBQSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLElBQTVCO0FBQ0g7O0FBQ0ROLElBQUFBLENBQUMsR0FBR0YsQ0FBSjtBQUNILEdBNUNLLENBOENOOztBQTlDTSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o6n5Yi26buR5qOL6L2m55qE57uE5Lu2XHJcbiAqL1xyXG5cclxuIGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IHJlcXVpcmUoXCJCbGFja1BpZWNlXCIpLFxyXG5cclxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKFgsIFkpIHtcclxuICAgICAgICB2YXIgeCA9IFg7XHJcbiAgICAgICAgdmFyIHkgPSBZO1xyXG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubm9kZS5ncmlkcztcclxuICAgXHJcbiAgICAgIFxyXG4gICAgICAgIC8vIOWQkeS4i1xyXG4gICAgICAgIHgrKztcclxuICAgICAgICB3aGlsZSh4IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSkgeCsrO1xyXG5cclxuICAgICAgICBpZih4IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmIGdyaWRzW3hdW3ldLmhhc1BpZWNlKSB7XHJcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLnBpZWNlLmRpc2FibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB4ID0gWDtcclxuXHJcbiAgICAgICAgLy8g5ZCR5LiKXHJcbiAgICAgICAgeC0tO1xyXG4gICAgICAgIHdoaWxlKHggPj0gMCAmJiBncmlkc1t4XVt5XS5mbGFnICE9IDAgJiYgIWdyaWRzW3hdW3ldLmhhc1BpZWNlKSB4LS07XHJcblxyXG4gICAgICAgIGlmKHggPj0gMCAmJiBncmlkc1t4XVt5XS5mbGFnICE9IDAgJiYgZ3JpZHNbeF1beV0uaGFzUGllY2UpIHtcclxuICAgICAgICAgICAgZ3JpZHNbeF1beV0ucGllY2UuZGlzYWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHggPSBYO1xyXG5cclxuICAgICAgICAvLyDlkJHlt6ZcclxuICAgICAgICB5LS07XHJcbiAgICAgICAgd2hpbGUoeSA+PSAwICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpIHktLTtcclxuXHJcbiAgICAgICAgaWYoeSA+PSAwICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiBncmlkc1t4XVt5XS5oYXNQaWVjZSkge1xyXG4gICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgeSA9IFk7XHJcblxyXG4gICAgICAgIC8vIOWQkeWPs1xyXG4gICAgICAgIHkrKztcclxuICAgICAgICB3aGlsZSh5IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSkgeSsrO1xyXG5cclxuICAgICAgICBpZih5IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmIGdyaWRzW3hdW3ldLmhhc1BpZWNlKSB7XHJcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLnBpZWNlLmRpc2FibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB5ID0gWTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrUGFvLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsIlgiLCJZIiwieCIsInkiLCJncmlkcyIsIm5vZGUiLCJmbGFnIiwiaGFzUGllY2UiLCJwaWVjZSIsImRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUlDQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNOLGFBQVNDLE9BQU8sQ0FBQyxZQUFELENBRFY7QUFHTkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNwQixRQUFJQyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QixDQUhvQixDQUtwQjs7QUFDQSxPQUFHO0FBQ0NGLE1BQUFBLENBQUM7QUFDSixLQUZELFFBRVNBLENBQUMsSUFBRyxDQUFKLElBQVNBLENBQUMsSUFBSSxDQUFkLElBQW1CRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBdkMsSUFBNEMsQ0FBQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUZsRTs7QUFHQUwsSUFBQUEsQ0FBQzs7QUFFRCxXQUFNQSxDQUFDLElBQUksQ0FBTCxJQUFVRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUMsQ0FBQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUF0RDtBQUFnRUwsTUFBQUEsQ0FBQztBQUFqRTs7QUFFQSxRQUFHQSxDQUFDLElBQUksQ0FBTCxJQUFVRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIs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Q0FBOUIsSUFBbUMsQ0FBQ0YsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUF0RDtBQUFnRUosTUFBQUEsQ0FBQztBQUFqRTs7QUFFQSxRQUFHQSxDQUFDLElBQUksQ0FBTCxJQUFVQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBOUIsSUFBbUNGLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksUUFBbEQsRUFBNEQ7QUFDeERILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssS0FBWixDQUFrQkMsT0FBbEIsR0FBNEIsSUFBNUI7QUFDSDtBQUNKLEdBMURLLENBNEROOztBQTVETSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o6n5Yi26buR5qOL54Ku55qE57uE5Lu2XHJcbiAqL1xyXG5cclxuIGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IHJlcXVpcmUoXCJCbGFja1BpZWNlXCIpLFxyXG5cclxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKFgsIFkpIHtcclxuICAgICAgICB2YXIgeCA9IFg7XHJcbiAgICAgICAgdmFyIHkgPSBZO1xyXG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubm9kZS5ncmlkcztcclxuICAgICAgICBcclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS3lkJHkuIstLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB4Kys7XHJcbiAgICAgICAgfSB3aGlsZSAoeCA+PTAgJiYgeCA8PSA5ICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpO1xyXG4gICAgICAgIHgrKztcclxuXHJcbiAgICAgICAgd2hpbGUoeCA8PSA5ICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpIHgrKztcclxuXHJcbiAgICAgICAgaWYoeCA8PSA5ICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiBncmlkc1t4XVt5XS5oYXNQaWVjZSkge1xyXG4gICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgeCA9IFg7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLeWQkeS4ii0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHgtLTtcclxuICAgICAgICB9IHdoaWxlICh4ID49MCAmJiB4IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XHJcbiAgICAgICAgeC0tO1xyXG5cclxuICAgICAgICB3aGlsZSh4ID49IDAgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSkgeC0tO1xyXG5cclxuICAgICAgICBpZih4ID49IDAgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmIGdyaWRzW3hdW3ldLmhhc1BpZWNlKSB7XHJcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLnBpZWNlLmRpc2FibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB4ID0gWDtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0t5ZCR5bemLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeS0tO1xyXG4gICAgICAgIH0gd2hpbGUgKHkgPj0wICYmIHkgPD0gOSAmJiBncmlkc1t4XVt5XS5mbGFnICE9IDAgJiYgIWdyaWRzW3hdW3ldLmhhc1BpZWNlKTtcclxuICAgICAgICB5LS07XHJcblxyXG4gICAgICAgIHdoaWxlKHkgPj0gMCAmJiBncmlkc1t4XVt5XS5mbGFnICE9IDAgJiYgIWdyaWRzW3hdW3ldLmhhc1BpZWNlKSB5LS07XHJcblxyXG4gICAgICAgIGlmKHkgPj0gMCAmJiBncmlkc1t4XVt5XS5mbGFnICE9IDAgJiYgZ3JpZHNbeF1beV0uaGFzUGllY2UpIHtcclxuICAgICAgICAgICAgZ3JpZHNbeF1beV0ucGllY2UuZGlzYWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHkgPSBZO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS3lkJHlj7MtLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB5Kys7XHJcbiAgICAgICAgfSB3aGlsZSAoeSA+PTAgJiYgeSA8PSA5ICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpO1xyXG4gICAgICAgIHkrKztcclxuXHJcbiAgICAgICAgd2hpbGUoeSA8PSA5ICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpIHkrKztcclxuXHJcbiAgICAgICAgaWYoeSA8PSA5ICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiBncmlkc1t4XVt5XS5oYXNQaWVjZSkge1xyXG4gICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrWnUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzZXRmbGFnIiwiWCIsIlkiLCJncmlkcyIsIm5vZGUiLCJkaXJ4IiwiQXJyYXkiLCJkaXJ5IiwiaSIsIngiLCJ5IiwiZmxhZyIsImhhc1BpZWNlIiwicGllY2UiLCJ0eXBlIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUNBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ04sYUFBU0MsT0FBTyxDQUFDLFlBQUQsQ0FEVjtBQUdOQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ3BCLFFBQUlDLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVELEtBQXRCO0FBQ0EsUUFBSUUsSUFBSSxHQUFHQyxLQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBWCxDQUFoQjs7QUFFQSxTQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxDQUFuQixFQUFzQkEsQ0FBQyxFQUF2QixFQUEyQjtBQUN2QixVQUFJQyxDQUFDLEdBQUdSLENBQUMsR0FBR0ksSUFBSSxDQUFDRyxDQUFELENBQWhCO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHUixDQUFDLEdBQUdLLElBQUksQ0FBQ0MsQ0FBRCxDQUFoQjtBQUVBLFVBQUdDLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBRyxDQUFiLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEIsSUFBMkJBLENBQUMsR0FBRyxDQUFsQyxFQUFxQztBQUNyQyxVQUFHUCxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlDLElBQVosSUFBb0IsQ0FBdkIsRUFBMEI7O0FBRTFCLFVBQUdSLEtBQUssQ0FBQ00sQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUUsUUFBWixJQUF3QlQsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxLQUFaLENBQWtCQyxJQUFsQixJQUEwQixDQUFyRCxFQUF3RDtBQUNwRFgsUUFBQUEsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxLQUFaLENBQWtCRSxPQUFsQixHQUE0QixJQUE1QjtBQUNIO0FBQ0o7QUFDSjtBQW5CSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o6n5Yi26buR5qOL5Y2S55qE57uE5Lu2XHJcbiAqL1xyXG5cclxuIGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IHJlcXVpcmUoXCJCbGFja1BpZWNlXCIpLFxyXG5cclxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKFgsIFkpIHtcclxuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm5vZGUuZ3JpZHM7XHJcbiAgICAgICAgdmFyIGRpcnggPSBBcnJheSgwLCAwLCAwLCAxKTtcclxuICAgICAgICB2YXIgZGlyeSA9IEFycmF5KDEsIDAsIC0xLCAwKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgeCA9IFggKyBkaXJ4W2ldO1xyXG4gICAgICAgICAgICB2YXIgeSA9IFkgKyBkaXJ5W2ldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgaWYoZ3JpZHNbeF1beV0uaGFzUGllY2UgJiYgZ3JpZHNbeF1beV0ucGllY2UudHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXENoZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwicmVxdWlyZSIsInNldGZsYWciLCJzdGF0dXMiLCJYIiwiWSIsIngiLCJ5IiwiZ3JpZHMiLCJub2RlIiwibnVtcyIsImZsYWciLCJoYXNQaWVjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0MsT0FBTyxDQUFDLE9BQUQsQ0FEWDtBQUdMQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUM1QixRQUFJQyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QixDQUg0QixDQUs1Qjs7QUFDQUEsSUFBQUEsS0FBSyxDQUFDSixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxJQUFaLElBQW9CUCxNQUFwQixDQU40QixDQVE1Qjs7QUFDQSxPQUFHO0FBQ0NHLE1BQUFBLENBQUM7QUFDRCxVQUFHQSxDQUFDLEdBQUcsQ0FBSixJQUFTRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLElBQVosSUFBb0IsQ0FBaEMsRUFBbUM7QUFDbkNILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQlAsTUFBcEI7QUFFSCxLQUxELFFBS1MsQ0FBQ0ssS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxRQUx0Qjs7QUFNQU4sSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBZjRCLENBaUI1Qjs7QUFDQSxPQUFHO0FBQ0NFLE1BQUFBLENBQUM7QUFDRCxVQUFHQSxDQUFDLEdBQUcsQ0FBSixJQUFTRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLElBQVosSUFBb0IsQ0FBaEMsRUFBbUM7QUFDbkNILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQlAsTUFBcEI7QUFFSCxLQUxELFFBS1MsQ0FBQ0ssS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxRQUx0Qjs7QUFNQU4sSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBeEI0QixDQTBCNUI7O0FBQ0EsT0FBRztBQUNDRyxNQUFBQSxDQUFDO0FBQ0QsVUFBR0EsQ0FBQyxHQUFHLENBQUosSUFBU0MsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxJQUFaLElBQW9CLENBQWhDLEVBQW1DO0FBQ25DSCxNQUFBQSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0JQLE1BQXBCO0FBRUgsS0FMRCxRQUtTLENBQUNLLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssUUFMdEI7O0FBTUFMLElBQUFBLENBQUMsR0FBR0YsQ0FBSixDQWpDNEIsQ0FtQzVCOztBQUNBLE9BQUc7QUFDQ0UsTUFBQUEsQ0FBQztBQUNELFVBQUdBLENBQUMsR0FBRyxDQUFKLElBQVNDLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksSUFBWixJQUFvQixDQUFoQyxFQUFtQztBQUNuQ0gsTUFBQUEsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CUCxNQUFwQjtBQUVILEtBTEQsUUFLUyxDQUFDSyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLFFBTHRCO0FBTUgsR0E3Q0ksQ0ErQ0w7O0FBL0NLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmjqfliLbmo4vlrZDovabnmoTnu4Tku7ZcclxuICovXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiUGllY2VcIiksXHJcblxyXG4gICAgc2V0ZmxhZzogZnVuY3Rpb24oc3RhdHVzLCBYLCBZKSB7XHJcbiAgICAgICAgdmFyIHggPSBYO1xyXG4gICAgICAgIHZhciB5ID0gWTtcclxuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm5vZGUuZ3JpZHM7XHJcbiAgIFxyXG4gICAgICAgIC8vIOiHqui6q+agvOWtkFxyXG4gICAgICAgIGdyaWRzW1hdW1ldLm51bXMgKz0gc3RhdHVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOWQkeS4i1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeCsrO1xyXG4gICAgICAgICAgICBpZih4ID4gOSB8fCBncmlkc1t4XVt5XS5mbGFnID09IDApIGJyZWFrO1xyXG4gICAgICAgICAgICBncmlkc1t4XVt5XS5udW1zICs9IHN0YXR1cztcclxuXHJcbiAgICAgICAgfSB3aGlsZSAoIWdyaWRzW3hdW3ldLmhhc1BpZWNlKTtcclxuICAgICAgICB4ID0gWDtcclxuXHJcbiAgICAgICAgLy8g5ZCR5LiKXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB4LS07XHJcbiAgICAgICAgICAgIGlmKHggPCAwIHx8IGdyaWRzW3hdW3ldLmZsYWcgPT0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xyXG5cclxuICAgICAgICB9IHdoaWxlICghZ3JpZHNbeF1beV0uaGFzUGllY2UpO1xyXG4gICAgICAgIHggPSBYO1xyXG5cclxuICAgICAgICAvLyDlkJHlt6ZcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHktLTtcclxuICAgICAgICAgICAgaWYoeSA8IDAgfHwgZ3JpZHNbeF1beV0uZmxhZyA9PSAwKSBicmVhaztcclxuICAgICAgICAgICAgZ3JpZHNbeF1beV0ubnVtcyArPSBzdGF0dXM7XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKCFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XHJcbiAgICAgICAgeSA9IFk7XHJcblxyXG4gICAgICAgIC8vIOWQkeWPs1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeSsrO1xyXG4gICAgICAgICAgICBpZih5ID4gOSB8fCBncmlkc1t4XVt5XS5mbGFnID09IDApIGJyZWFrO1xyXG4gICAgICAgICAgICBncmlkc1t4XVt5XS5udW1zICs9IHN0YXR1cztcclxuXHJcbiAgICAgICAgfSB3aGlsZSAoIWdyaWRzW3hdW3ldLmhhc1BpZWNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXE1hLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsInN0YXR1cyIsIlgiLCJZIiwiZ3JpZHMiLCJub2RlIiwiZGlyeCIsIkFycmF5IiwiZGlyeSIsImhpbmRlcngiLCJoaW5kZXJ5IiwibnVtcyIsImkiLCJ4IiwieSIsImh4IiwiaHkiLCJmbGFnIiwiaGFzUGllY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFLQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTQyxPQUFPLENBQUMsT0FBRCxDQURYO0FBR0xDLEVBQUFBLE9BQU8sRUFBRSxpQkFBU0MsTUFBVCxFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCO0FBQzVCLFFBQUlDLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVELEtBQXRCO0FBQ0EsUUFBSUUsSUFBSSxHQUFHQyxLQUFLLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBQyxDQUFOLEVBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQUMsQ0FBdEIsRUFBeUIsQ0FBQyxDQUExQixDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQWQsRUFBaUIsQ0FBQyxDQUFsQixFQUFxQixDQUFDLENBQXRCLEVBQXlCLENBQUMsQ0FBMUIsQ0FBaEIsQ0FINEIsQ0FLNUI7O0FBQ0EsUUFBSUUsT0FBTyxHQUFHRixLQUFLLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixDQUFwQixFQUF1QixDQUFDLENBQXhCLENBQW5CO0FBQ0EsUUFBSUcsT0FBTyxHQUFHSCxLQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBQyxDQUFqQixFQUFvQixDQUFDLENBQXJCLEVBQXdCLENBQXhCLENBQW5CLENBUDRCLENBUzVCOztBQUNBSCxJQUFBQSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlRLElBQVosSUFBb0JWLE1BQXBCLENBVjRCLENBWTVCOztBQUNBLFNBQUksSUFBSVcsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO0FBQ3ZCLFVBQUlDLENBQUMsR0FBR1gsQ0FBQyxHQUFHSSxJQUFJLENBQUNNLENBQUQsQ0FBaEI7QUFDQSxVQUFJRSxDQUFDLEdBQUdYLENBQUMsR0FBR0ssSUFBSSxDQUFDSSxDQUFELENBQWhCO0FBQ0EsVUFBSUcsRUFBRSxHQUFHYixDQUFDLEdBQUdPLE9BQU8sQ0FBQ0csQ0FBRCxDQUFwQjtBQUNBLFVBQUlJLEVBQUUsR0FBR2IsQ0FBQyxHQUFHTyxPQUFPLENBQUNFLENBQUQsQ0FBcEI7QUFFQSxVQUFHQyxDQUFDLEdBQUcsQ0FBSixJQUFTQSxDQUFDLEdBQUcsQ0FBYixJQUFrQkMsQ0FBQyxHQUFHLENBQXRCLElBQTJCQSxDQUFDLEdBQUcsQ0FBbEMsRUFBcUM7QUFDckMsVUFBR1YsS0FBSyxDQUFDUyxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CLENBQXZCLEVBQTBCLFNBUEgsQ0FTdkI7O0FBQ0EsVUFBR0YsRUFBRSxJQUFJLENBQU4sSUFBV0EsRUFBRSxJQUFJLENBQWpCLElBQXNCQyxFQUFFLElBQUksQ0FBNUIsSUFBaUNBLEVBQUUsSUFBSSxDQUF2QyxLQUNFWixLQUFLLENBQUNXLEVBQUQsQ0FBTCxDQUFVQyxFQUFWLEVBQWNDLElBQWQsSUFBc0IsQ0FBdEIsSUFBMkJiLEtBQUssQ0FBQ1csRUFBRCxDQUFMLENBQVVDLEVBQVYsRUFBY0UsUUFEM0MsQ0FBSCxFQUN5RDtBQUV6RGQsTUFBQUEsS0FBSyxDQUFDUyxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSCxJQUFaLElBQW9CVixNQUFwQjtBQUNIO0FBQ0o7QUEvQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIOaOp+WItuaji+WtkOmprOeahOe7hOS7tlxyXG4gKiBcclxuICovXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiUGllY2VcIiksXHJcblxyXG4gICAgc2V0ZmxhZzogZnVuY3Rpb24oc3RhdHVzLCBYLCBZKSB7XHJcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5ub2RlLmdyaWRzO1xyXG4gICAgICAgIHZhciBkaXJ4ID0gQXJyYXkoLTIsIC0xLCAxLCAyLCAyLCAxLCAtMSwgLTIpO1xyXG4gICAgICAgIHZhciBkaXJ5ID0gQXJyYXkoMSwgMiwgMiwgMSwgLTEsIC0yLCAtMiwgLTEpO1xyXG5cclxuICAgICAgICAvLyDpqazohJpcclxuICAgICAgICB2YXIgaGluZGVyeCA9IEFycmF5KC0xLCAwLCAwLCAxLCAxLCAwLCAwLCAtMSk7XHJcbiAgICAgICAgdmFyIGhpbmRlcnkgPSBBcnJheSgwLCAxLCAxLCAwLCAwLCAtMSwgLTEsIDApO1xyXG5cclxuICAgICAgICAvLyDoh6rouqvmoLzlrZBcclxuICAgICAgICBncmlkc1tYXVtZXS5udW1zICs9IHN0YXR1cztcclxuXHJcbiAgICAgICAgLy8g5ZGo5Zu05qC85a2QXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgeCA9IFggKyBkaXJ4W2ldO1xyXG4gICAgICAgICAgICB2YXIgeSA9IFkgKyBkaXJ5W2ldO1xyXG4gICAgICAgICAgICB2YXIgaHggPSBYICsgaGluZGVyeFtpXTtcclxuICAgICAgICAgICAgdmFyIGh5ID0gWSArIGhpbmRlcnlbaV07XHJcblxyXG4gICAgICAgICAgICBpZih4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmKGdyaWRzW3hdW3ldLmZsYWcgPT0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAvLyDmo4Dmn6XmmK/lkKbnu4rpqazohJpcclxuICAgICAgICAgICAgaWYoaHggPj0gMCAmJiBoeCA8PSA5ICYmIGh5ID49IDAgJiYgaHkgPD0gOSAmJiBcclxuICAgICAgICAgICAgICAgIChncmlkc1toeF1baHldLmZsYWcgPT0gMCB8fCBncmlkc1toeF1baHldLmhhc1BpZWNlKSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgZ3JpZHNbeF1beV0ubnVtcyArPSBzdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrU2hpLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsIlgiLCJZIiwiZ3JpZHMiLCJub2RlIiwiZGlyeCIsIkFycmF5IiwiZGlyeSIsImkiLCJ4IiwieSIsImZsYWciLCJoYXNQaWVjZSIsInBpZWNlIiwidHlwZSIsImRpc2FibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUlDQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNOLGFBQVNDLE9BQU8sQ0FBQyxZQUFELENBRFY7QUFHTkMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNwQixRQUFJQyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QjtBQUNBLFFBQUlFLElBQUksR0FBR0MsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUFoQjs7QUFFQSxTQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxDQUFuQixFQUFzQkEsQ0FBQyxFQUF2QixFQUEyQjtBQUN2QixVQUFJQyxDQUFDLEdBQUdSLENBQUMsR0FBR0ksSUFBSSxDQUFDRyxDQUFELENBQWhCO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHUixDQUFDLEdBQUdLLElBQUksQ0FBQ0MsQ0FBRCxDQUFoQjtBQUVBLFVBQUdDLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBRyxDQUFiLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEIsSUFBMkJBLENBQUMsR0FBRyxDQUFsQyxFQUFxQztBQUNyQyxVQUFHUCxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlDLElBQVosSUFBb0IsQ0FBdkIsRUFBMEI7O0FBRTFCLFVBQUdSLEtBQUssQ0FBQ00sQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUUsUUFBWixJQUF3QlQsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxLQUFaLENBQWtCQyxJQUFsQixJQUEwQixDQUFyRCxFQUF3RDtBQUNwRFgsUUFBQUEsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxLQUFaLENBQWtCRSxPQUFsQixHQUE0QixJQUE1QjtBQUNIO0FBQ0o7QUFDSjtBQW5CSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o6n5Yi26buR5qOL5aOr55qE57uE5Lu2XHJcbiAqL1xyXG5cclxuIGNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IHJlcXVpcmUoXCJCbGFja1BpZWNlXCIpLFxyXG5cclxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKFgsIFkpIHtcclxuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm5vZGUuZ3JpZHM7XHJcbiAgICAgICAgdmFyIGRpcnggPSBBcnJheSgwLCAxLCAtMSwgMSwgLTEpO1xyXG4gICAgICAgIHZhciBkaXJ5ID0gQXJyYXkoMCwgLTEsIDEsIDEsIC0xKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgeCA9IFggKyBkaXJ4W2ldO1xyXG4gICAgICAgICAgICB2YXIgeSA9IFkgKyBkaXJ5W2ldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgaWYoZ3JpZHNbeF1beV0uaGFzUGllY2UgJiYgZ3JpZHNbeF1beV0ucGllY2UudHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXFhpYW5nLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsInN0YXR1cyIsIlgiLCJZIiwiZ3JpZHMiLCJub2RlIiwiZGlyeCIsIkFycmF5IiwiZGlyeSIsImhpbmRlcngiLCJoaW5kZXJ5IiwibnVtcyIsImkiLCJ4IiwieSIsImh4IiwiaHkiLCJmbGFnIiwiaGFzUGllY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUlBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNDLE9BQU8sQ0FBQyxPQUFELENBRFg7QUFHTEMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxNQUFULEVBQWlCQyxDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUI7QUFDNUIsUUFBSUMsS0FBSyxHQUFHLEtBQUtDLElBQUwsQ0FBVUQsS0FBdEI7QUFDQSxRQUFJRSxJQUFJLEdBQUdDLEtBQUssQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQUMsQ0FBWixDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBQyxDQUFaLENBQWhCLENBSDRCLENBSzVCOztBQUNBLFFBQUlFLE9BQU8sR0FBR0YsS0FBSyxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBQyxDQUFaLENBQW5CO0FBQ0EsUUFBSUcsT0FBTyxHQUFHSCxLQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFDLENBQVIsRUFBVyxDQUFDLENBQVosQ0FBbkIsQ0FQNEIsQ0FTNUI7O0FBQ0FILElBQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWVEsSUFBWixJQUFvQlYsTUFBcEIsQ0FWNEIsQ0FZNUI7O0FBQ0EsU0FBSSxJQUFJVyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsQ0FBbkIsRUFBc0JBLENBQUMsRUFBdkIsRUFBMkI7QUFDdkIsVUFBSUMsQ0FBQyxHQUFHWCxDQUFDLEdBQUdJLElBQUksQ0FBQ00sQ0FBRCxDQUFoQjtBQUNBLFVBQUlFLENBQUMsR0FBR1gsQ0FBQyxHQUFHSyxJQUFJLENBQUNJLENBQUQsQ0FBaEI7QUFDQSxVQUFJRyxFQUFFLEdBQUdiLENBQUMsR0FBR08sT0FBTyxDQUFDRyxDQUFELENBQXBCO0FBQ0EsVUFBSUksRUFBRSxHQUFHYixDQUFDLEdBQUdPLE9BQU8sQ0FBQ0UsQ0FBRCxDQUFwQjtBQUVBLFVBQUdDLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBRyxDQUFiLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEIsSUFBMkJBLENBQUMsR0FBRyxDQUFsQyxFQUFxQztBQUNyQyxVQUFHVixLQUFLLENBQUNTLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0IsQ0FBdkIsRUFBMEIsU0FQSCxDQVN2Qjs7QUFDQSxVQUFHRixFQUFFLElBQUksQ0FBTixJQUFXQSxFQUFFLElBQUksQ0FBakIsSUFBc0JDLEVBQUUsSUFBSSxDQUE1QixJQUFpQ0EsRUFBRSxJQUFJLENBQXZDLEtBQ0VaLEtBQUssQ0FBQ1csRUFBRCxDQUFMLENBQVVDLEVBQVYsRUFBY0MsSUFBZCxJQUFzQixDQUF0QixJQUEyQmIsS0FBSyxDQUFDVyxFQUFELENBQUwsQ0FBVUMsRUFBVixFQUFjRSxRQUQzQyxDQUFILEVBQ3lEO0FBRXpEZCxNQUFBQSxLQUFLLENBQUNTLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlILElBQVosSUFBb0JWLE1BQXBCO0FBQ0g7QUFDSjtBQS9CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o6n5Yi25qOL5a2Q6LGh55qE57uE5Lu2XHJcbiAqL1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogcmVxdWlyZShcIlBpZWNlXCIpLFxyXG5cclxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKHN0YXR1cywgWCwgWSkge1xyXG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubm9kZS5ncmlkcztcclxuICAgICAgICB2YXIgZGlyeCA9IEFycmF5KC0yLCAyLCAyLCAtMik7XHJcbiAgICAgICAgdmFyIGRpcnkgPSBBcnJheSgyLCAyLCAtMiwgLTIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOixoeecvFxyXG4gICAgICAgIHZhciBoaW5kZXJ4ID0gQXJyYXkoLTEsIDEsIDEsIC0xKTtcclxuICAgICAgICB2YXIgaGluZGVyeSA9IEFycmF5KDEsIDEsIC0xLCAtMSk7XHJcblxyXG4gICAgICAgIC8vIOiHqui6q+agvOWtkFxyXG4gICAgICAgIGdyaWRzW1hdW1ldLm51bXMgKz0gc3RhdHVzO1xyXG5cclxuICAgICAgICAvLyDlkajlm7TmoLzlrZBcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciB4ID0gWCArIGRpcnhbaV07XHJcbiAgICAgICAgICAgIHZhciB5ID0gWSArIGRpcnlbaV07XHJcbiAgICAgICAgICAgIHZhciBoeCA9IFggKyBoaW5kZXJ4W2ldO1xyXG4gICAgICAgICAgICB2YXIgaHkgPSBZICsgaGluZGVyeVtpXTtcclxuXHJcbiAgICAgICAgICAgIGlmKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYoZ3JpZHNbeF1beV0uZmxhZyA9PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIOajgOafpeaYr+WQpue7iuixoeecvFxyXG4gICAgICAgICAgICBpZihoeCA+PSAwICYmIGh4IDw9IDkgJiYgaHkgPj0gMCAmJiBoeSA8PSA5ICYmIFxyXG4gICAgICAgICAgICAgICAgKGdyaWRzW2h4XVtoeV0uZmxhZyA9PSAwIHx8IGdyaWRzW2h4XVtoeV0uaGFzUGllY2UpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrWGlhbmcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzZXRmbGFnIiwiWCIsIlkiLCJncmlkcyIsIm5vZGUiLCJkaXJ4IiwiQXJyYXkiLCJkaXJ5IiwiaGluZGVyeCIsImhpbmRlcnkiLCJpIiwieCIsInkiLCJoeCIsImh5IiwiZmxhZyIsImhhc1BpZWNlIiwicGllY2UiLCJ0eXBlIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUNBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ04sYUFBU0MsT0FBTyxDQUFDLFlBQUQsQ0FEVjtBQUdOQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ3BCLFFBQUlDLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVELEtBQXRCO0FBQ0EsUUFBSUUsSUFBSSxHQUFHQyxLQUFLLENBQUMsQ0FBQyxDQUFGLEVBQUssQ0FBTCxFQUFRLENBQVIsRUFBVyxDQUFDLENBQVosQ0FBaEI7QUFDQSxRQUFJQyxJQUFJLEdBQUdELEtBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQUMsQ0FBUixFQUFXLENBQUMsQ0FBWixDQUFoQixDQUhvQixDQUtwQjs7QUFDQSxRQUFJRSxPQUFPLEdBQUdGLEtBQUssQ0FBQyxDQUFDLENBQUYsRUFBSyxDQUFMLEVBQVEsQ0FBUixFQUFXLENBQUMsQ0FBWixDQUFuQjtBQUNBLFFBQUlHLE9BQU8sR0FBR0gsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBQyxDQUFaLENBQW5CLENBUG9CLENBU3BCOztBQUNBLFNBQUksSUFBSUksQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO0FBQ3ZCLFVBQUlDLENBQUMsR0FBR1YsQ0FBQyxHQUFHSSxJQUFJLENBQUNLLENBQUQsQ0FBaEI7QUFDQSxVQUFJRSxDQUFDLEdBQUdWLENBQUMsR0FBR0ssSUFBSSxDQUFDRyxDQUFELENBQWhCO0FBQ0EsVUFBSUcsRUFBRSxHQUFHWixDQUFDLEdBQUdPLE9BQU8sQ0FBQ0UsQ0FBRCxDQUFwQjtBQUNBLFVBQUlJLEVBQUUsR0FBR1osQ0FBQyxHQUFHTyxPQUFPLENBQUNDLENBQUQsQ0FBcEI7QUFFQSxVQUFHQyxDQUFDLEdBQUcsQ0FBSixJQUFTQSxDQUFDLEdBQUcsQ0FBYixJQUFrQkMsQ0FBQyxHQUFHLENBQXRCLElBQTJCQSxDQUFDLEdBQUcsQ0FBbEMsRUFBcUM7QUFDckMsVUFBR1QsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CLENBQXZCLEVBQTBCLFNBUEgsQ0FTdkI7O0FBQ0EsVUFBR0YsRUFBRSxJQUFJLENBQU4sSUFBV0EsRUFBRSxJQUFJLENBQWpCLElBQXNCQyxFQUFFLElBQUksQ0FBNUIsSUFBaUNBLEVBQUUsSUFBSSxDQUF2QyxLQUNFWCxLQUFLLENBQUNVLEVBQUQsQ0FBTCxDQUFVQyxFQUFWLEVBQWNDLElBQWQsSUFBc0IsQ0FBdEIsSUFBMkJaLEtBQUssQ0FBQ1UsRUFBRCxDQUFMLENBQVVDLEVBQVYsRUFBY0UsUUFEM0MsQ0FBSCxFQUN5RDs7QUFFekQsVUFBR2IsS0FBSyxDQUFDUSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxRQUFaLElBQXdCYixLQUFLLENBQUNRLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLEtBQVosQ0FBa0JDLElBQWxCLElBQTBCLENBQXJELEVBQXdEO0FBQ3BEZixRQUFBQSxLQUFLLENBQUNRLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLEtBQVosQ0FBa0JFLE9BQWxCLEdBQTRCLElBQTVCO0FBQ0g7QUFFSjtBQUNKO0FBL0JLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmjqfliLbpu5Hmo4vosaHnmoTnu4Tku7ZcclxuICovXHJcblxyXG4gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogcmVxdWlyZShcIkJsYWNrUGllY2VcIiksXHJcblxyXG4gICAgc2V0ZmxhZzogZnVuY3Rpb24oWCwgWSkge1xyXG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubm9kZS5ncmlkcztcclxuICAgICAgICB2YXIgZGlyeCA9IEFycmF5KC0yLCAyLCAyLCAtMik7XHJcbiAgICAgICAgdmFyIGRpcnkgPSBBcnJheSgyLCAyLCAtMiwgLTIpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOixoeecvFxyXG4gICAgICAgIHZhciBoaW5kZXJ4ID0gQXJyYXkoLTEsIDEsIDEsIC0xKTtcclxuICAgICAgICB2YXIgaGluZGVyeSA9IEFycmF5KDEsIDEsIC0xLCAtMSk7XHJcblxyXG4gICAgICAgIC8vIOWRqOWbtOagvOWtkFxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHggPSBYICsgZGlyeFtpXTtcclxuICAgICAgICAgICAgdmFyIHkgPSBZICsgZGlyeVtpXTtcclxuICAgICAgICAgICAgdmFyIGh4ID0gWCArIGhpbmRlcnhbaV07XHJcbiAgICAgICAgICAgIHZhciBoeSA9IFkgKyBoaW5kZXJ5W2ldO1xyXG5cclxuICAgICAgICAgICAgaWYoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgLy8g5qOA5p+l5piv5ZCm57uK6LGh55y8XHJcbiAgICAgICAgICAgIGlmKGh4ID49IDAgJiYgaHggPD0gOSAmJiBoeSA+PSAwICYmIGh5IDw9IDkgJiYgXHJcbiAgICAgICAgICAgICAgICAoZ3JpZHNbaHhdW2h5XS5mbGFnID09IDAgfHwgZ3JpZHNbaHhdW2h5XS5oYXNQaWVjZSkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoZ3JpZHNbeF1beV0uaGFzUGllY2UgJiYgZ3JpZHNbeF1beV0ucGllY2UudHlwZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXFNodWFpLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJyZXF1aXJlIiwic2V0ZmxhZyIsInN0YXR1cyIsIlgiLCJZIiwiZ3JpZHMiLCJub2RlIiwiZGlyeCIsIkFycmF5IiwiZGlyeSIsImkiLCJ4IiwieSIsImZsYWciLCJudW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFJQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTQyxPQUFPLENBQUMsT0FBRCxDQURYO0FBR0xDLEVBQUFBLE9BQU8sRUFBRSxpQkFBU0MsTUFBVCxFQUFpQkMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCO0FBQzVCLFFBQUlDLEtBQUssR0FBRyxLQUFLQyxJQUFMLENBQVVELEtBQXRCO0FBQ0EsUUFBSUUsSUFBSSxHQUFHQyxLQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQUMsQ0FBZCxDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQUMsQ0FBWCxFQUFjLENBQWQsQ0FBaEI7O0FBRUEsU0FBSSxJQUFJRSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsQ0FBbkIsRUFBc0JBLENBQUMsRUFBdkIsRUFBMkI7QUFDdkIsVUFBSUMsQ0FBQyxHQUFHUixDQUFDLEdBQUdJLElBQUksQ0FBQ0csQ0FBRCxDQUFoQjtBQUNBLFVBQUlFLENBQUMsR0FBR1IsQ0FBQyxHQUFHSyxJQUFJLENBQUNDLENBQUQsQ0FBaEI7QUFFQSxVQUFHQyxDQUFDLEdBQUcsQ0FBSixJQUFTQSxDQUFDLEdBQUcsQ0FBYixJQUFrQkMsQ0FBQyxHQUFHLENBQXRCLElBQTJCQSxDQUFDLEdBQUcsQ0FBbEMsRUFBcUM7QUFDckMsVUFBR1AsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZQyxJQUFaLElBQW9CLENBQXZCLEVBQTBCO0FBRTFCUixNQUFBQSxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlFLElBQVosSUFBb0JaLE1BQXBCO0FBQ0g7QUFDSjtBQWpCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o6n5Yi25qOL5a2Q5biF55qE57uE5Lu2XHJcbiAqL1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogcmVxdWlyZShcIlBpZWNlXCIpLFxyXG5cclxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKHN0YXR1cywgWCwgWSkge1xyXG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubm9kZS5ncmlkcztcclxuICAgICAgICB2YXIgZGlyeCA9IEFycmF5KDEsIDAsIDAsIDAsIC0xKTtcclxuICAgICAgICB2YXIgZGlyeSA9IEFycmF5KDAsIDEsIDAsIC0xLCAwKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDU7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgeCA9IFggKyBkaXJ4W2ldO1xyXG4gICAgICAgICAgICB2YXIgeSA9IFkgKyBkaXJ5W2ldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZ3JpZHNbeF1beV0ubnVtcyArPSBzdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXFBhby5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwicmVxdWlyZSIsInNldGZsYWciLCJzdGF0dXMiLCJYIiwiWSIsIngiLCJ5IiwiZ3JpZHMiLCJub2RlIiwibnVtcyIsImZsYWciLCJoYXNQaWVjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0MsT0FBTyxDQUFDLE9BQUQsQ0FEWDtBQUdMQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUM1QixRQUFJQyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxDQUFDLEdBQUdGLENBQVI7QUFDQSxRQUFJRyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QixDQUg0QixDQUs1Qjs7QUFDQUEsSUFBQUEsS0FBSyxDQUFDSixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxJQUFaLElBQW9CUCxNQUFwQixDQU40QixDQVE1Qjs7QUFDQSxPQUFHO0FBQ0NHLE1BQUFBLENBQUM7QUFDSixLQUZELFFBRVNBLENBQUMsSUFBRyxDQUFKLElBQVNBLENBQUMsSUFBSSxDQUFkLElBQW1CRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLElBQVosSUFBb0IsQ0FBdkMsSUFBNEMsQ0FBQ0gsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxRQUZsRTs7QUFJQSxPQUFHO0FBQ0NOLE1BQUFBLENBQUM7QUFDRCxVQUFHQSxDQUFDLEdBQUcsQ0FBSixJQUFTRSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLElBQVosSUFBb0IsQ0FBaEMsRUFBbUM7QUFDbkNILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQlAsTUFBcEI7QUFFSCxLQUxELFFBS1MsQ0FBQ0ssS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxRQUx0Qjs7QUFNQU4sSUFBQUEsQ0FBQyxHQUFHRixDQUFKLENBbkI0QixDQXFCNUI7O0FBQ0EsT0FBRztBQUNDRSxNQUFBQSxDQUFDO0FBQ0osS0FGRCxRQUVTQSxDQUFDLElBQUcsQ0FBSixJQUFTQSxDQUFDLElBQUksQ0FBZCxJQUFtQkUsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxJQUFaLElBQW9CLENBQXZDLElBQTRDLENBQUNILEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssUUFGbEU7O0FBSUEsT0FBRztBQUNDTixNQUFBQSxDQUFDO0FBQ0QsVUFBR0EsQ0FBQyxHQUFHLENBQUosSUFBU0UsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSSxJQUFaLElBQW9CLENBQWhDLEVBQW1DO0FBQ25DSCxNQUFBQSxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLElBQVosSUFBb0JQLE1BQXBCO0FBRUgsS0FMRCxRQUtTLENBQUNLLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUssUUFMdEI7O0FBTUFOLElBQUFBLENBQUMsR0FBR0YsQ0FBSixDQWhDNEIsQ0FrQzVCOztBQUNBLE9BQUc7QUFDQ0csTUFBQUEsQ0FBQztBQUNKLEtBRkQsUUFFU0EsQ0FBQyxJQUFHLENBQUosSUFBU0EsQ0FBQyxJQUFJLENBQWQsSUFBbUJDLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksSUFBWixJQUFvQixDQUF2QyxJQUE0QyxDQUFDSCxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLFFBRmxFOztBQUlBLE9BQUc7QUFDQ0wsTUFBQUEsQ0FBQztBQUNELFVBQUdBLENBQUMsR0FBRyxDQUFKLElBQVNDLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUksSUFBWixJQUFvQixDQUFoQyxFQUFtQztBQUNuQ0gsTUFBQUEsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRyxJQUFaLElBQW9CUCxNQUFwQjtBQUVILEtBTEQsUUFLUyxDQUFDSyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlLLFFBTHRCOztBQU1BTCxJQUFBQSxDQUFDLEdBQUdGLENBQUosQ0E3QzRCLENBK0M1Qjs7QUFDQSxPQUFHO0FBQ0NFLE1BQUFBLENBQUM7QUFDSixLQUZELFFBRVNBLENBQUMsSUFBRyxDQUFKLElBQVNBLENBQUMsSUFBSSxDQUFkLElBQW1CQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLElBQVosSUFBb0IsQ0FBdkMsSUFBNEMsQ0FBQ0gsS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxRQUZsRTs7QUFJQSxPQUFHO0FBQ0NMLE1BQUFBLENBQUM7QUFDRCxVQUFHQSxDQUFDLEdBQUcsQ0FBSixJQUFTQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlJLElBQVosSUFBb0IsQ0FBaEMsRUFBbUM7QUFDbkNILE1BQUFBLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUcsSUFBWixJQUFvQlAsTUFBcEI7QUFFSCxLQUxELFFBS1MsQ0FBQ0ssS0FBSyxDQUFDRixDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZSyxRQUx0QjtBQU1IO0FBN0RJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmjqfliLbmo4vlrZDngq7nmoTnu4Tku7ZcclxuICovXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiUGllY2VcIiksXHJcblxyXG4gICAgc2V0ZmxhZzogZnVuY3Rpb24oc3RhdHVzLCBYLCBZKSB7XHJcbiAgICAgICAgdmFyIHggPSBYO1xyXG4gICAgICAgIHZhciB5ID0gWTtcclxuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm5vZGUuZ3JpZHM7XHJcblxyXG4gICAgICAgIC8vIOiHqui6q+agvOWtkFxyXG4gICAgICAgIGdyaWRzW1hdW1ldLm51bXMgKz0gc3RhdHVzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLeWQkeS4iy0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHgrKztcclxuICAgICAgICB9IHdoaWxlICh4ID49MCAmJiB4IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XHJcblxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeCsrO1xyXG4gICAgICAgICAgICBpZih4ID4gOSB8fCBncmlkc1t4XVt5XS5mbGFnID09IDApIGJyZWFrO1xyXG4gICAgICAgICAgICBncmlkc1t4XVt5XS5udW1zICs9IHN0YXR1cztcclxuXHJcbiAgICAgICAgfSB3aGlsZSAoIWdyaWRzW3hdW3ldLmhhc1BpZWNlKTtcclxuICAgICAgICB4ID0gWDtcclxuXHJcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0t5ZCR5LiKLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeC0tO1xyXG4gICAgICAgIH0gd2hpbGUgKHggPj0wICYmIHggPD0gOSAmJiBncmlkc1t4XVt5XS5mbGFnICE9IDAgJiYgIWdyaWRzW3hdW3ldLmhhc1BpZWNlKTtcclxuXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB4LS07XHJcbiAgICAgICAgICAgIGlmKHggPCAwIHx8IGdyaWRzW3hdW3ldLmZsYWcgPT0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xyXG5cclxuICAgICAgICB9IHdoaWxlICghZ3JpZHNbeF1beV0uaGFzUGllY2UpO1xyXG4gICAgICAgIHggPSBYO1xyXG5cclxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS3lkJHlt6YtLS0tLS0tLS0tLS0tLS0tXHJcbiAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICB5LS07XHJcbiAgICAgICAgfSB3aGlsZSAoeSA+PTAgJiYgeSA8PSA5ICYmIGdyaWRzW3hdW3ldLmZsYWcgIT0gMCAmJiAhZ3JpZHNbeF1beV0uaGFzUGllY2UpO1xyXG5cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHktLTtcclxuICAgICAgICAgICAgaWYoeSA8IDAgfHwgZ3JpZHNbeF1beV0uZmxhZyA9PSAwKSBicmVhaztcclxuICAgICAgICAgICAgZ3JpZHNbeF1beV0ubnVtcyArPSBzdGF0dXM7XHJcblxyXG4gICAgICAgIH0gd2hpbGUgKCFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XHJcbiAgICAgICAgeSA9IFk7XHJcblxyXG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLeWQkeWPsy0tLS0tLS0tLS0tLS0tLS1cclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHkrKztcclxuICAgICAgICB9IHdoaWxlICh5ID49MCAmJiB5IDw9IDkgJiYgZ3JpZHNbeF1beV0uZmxhZyAhPSAwICYmICFncmlkc1t4XVt5XS5oYXNQaWVjZSk7XHJcblxyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgeSsrO1xyXG4gICAgICAgICAgICBpZih5ID4gOSB8fCBncmlkc1t4XVt5XS5mbGFnID09IDApIGJyZWFrO1xyXG4gICAgICAgICAgICBncmlkc1t4XVt5XS5udW1zICs9IHN0YXR1cztcclxuXHJcbiAgICAgICAgfSB3aGlsZSAoIWdyaWRzW3hdW3ldLmhhc1BpZWNlKTtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXFNoaS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwicmVxdWlyZSIsInNldGZsYWciLCJzdGF0dXMiLCJYIiwiWSIsImdyaWRzIiwibm9kZSIsImRpcngiLCJBcnJheSIsImRpcnkiLCJpIiwieCIsInkiLCJmbGFnIiwibnVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0MsT0FBTyxDQUFDLE9BQUQsQ0FEWDtBQUdMQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNDLE1BQVQsRUFBaUJDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUM1QixRQUFJQyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QjtBQUNBLFFBQUlFLElBQUksR0FBR0MsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBR0QsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFDLENBQUwsRUFBUSxDQUFSLEVBQVcsQ0FBWCxFQUFjLENBQUMsQ0FBZixDQUFoQjs7QUFFQSxTQUFJLElBQUlFLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxDQUFuQixFQUFzQkEsQ0FBQyxFQUF2QixFQUEyQjtBQUN2QixVQUFJQyxDQUFDLEdBQUdSLENBQUMsR0FBR0ksSUFBSSxDQUFDRyxDQUFELENBQWhCO0FBQ0EsVUFBSUUsQ0FBQyxHQUFHUixDQUFDLEdBQUdLLElBQUksQ0FBQ0MsQ0FBRCxDQUFoQjtBQUVBLFVBQUdDLENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsR0FBRyxDQUFiLElBQWtCQyxDQUFDLEdBQUcsQ0FBdEIsSUFBMkJBLENBQUMsR0FBRyxDQUFsQyxFQUFxQztBQUNyQyxVQUFHUCxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlDLElBQVosSUFBb0IsQ0FBdkIsRUFBMEI7QUFFMUJSLE1BQUFBLEtBQUssQ0FBQ00sQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUUsSUFBWixJQUFvQlosTUFBcEI7QUFDSDtBQUNKO0FBakJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiDmjqfliLbmo4vlrZDlo6vnmoTnu4Tku7ZcclxuICovXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiUGllY2VcIiksXHJcblxyXG4gICAgc2V0ZmxhZzogZnVuY3Rpb24oc3RhdHVzLCBYLCBZKSB7XHJcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5ub2RlLmdyaWRzO1xyXG4gICAgICAgIHZhciBkaXJ4ID0gQXJyYXkoMCwgMSwgLTEsIDEsIC0xKTtcclxuICAgICAgICB2YXIgZGlyeSA9IEFycmF5KDAsIC0xLCAxLCAxLCAtMSk7XHJcblxyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIHggPSBYICsgZGlyeFtpXTtcclxuICAgICAgICAgICAgdmFyIHkgPSBZICsgZGlyeVtpXTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKHggPCAwIHx8IHggPiA5IHx8IHkgPCAwIHx8IHkgPiA5KSBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYoZ3JpZHNbeF1beV0uZmxhZyA9PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGdyaWRzW3hdW3ldLm51bXMgKz0gc3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJpbmcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzZXRmbGFnIiwic3RhdHVzIiwiWCIsIlkiLCJncmlkcyIsIm5vZGUiLCJkaXJ4IiwiQXJyYXkiLCJkaXJ5IiwiaSIsIngiLCJ5IiwiZmxhZyIsIm51bXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUlBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNDLE9BQU8sQ0FBQyxPQUFELENBRFg7QUFHTEMsRUFBQUEsT0FBTyxFQUFFLGlCQUFTQyxNQUFULEVBQWlCQyxDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUI7QUFDNUIsUUFBSUMsS0FBSyxHQUFHLEtBQUtDLElBQUwsQ0FBVUQsS0FBdEI7QUFDQSxRQUFJRSxJQUFJLEdBQUdDLEtBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFDLENBQVgsQ0FBaEI7QUFDQSxRQUFJQyxJQUFJLEdBQUdELEtBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQUMsQ0FBUixFQUFXLENBQVgsQ0FBaEI7O0FBRUEsU0FBSSxJQUFJRSxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsQ0FBbkIsRUFBc0JBLENBQUMsRUFBdkIsRUFBMkI7QUFDdkIsVUFBSUMsQ0FBQyxHQUFHUixDQUFDLEdBQUdJLElBQUksQ0FBQ0csQ0FBRCxDQUFoQjtBQUNBLFVBQUlFLENBQUMsR0FBR1IsQ0FBQyxHQUFHSyxJQUFJLENBQUNDLENBQUQsQ0FBaEI7QUFFQSxVQUFHQyxDQUFDLEdBQUcsQ0FBSixJQUFTQSxDQUFDLEdBQUcsQ0FBYixJQUFrQkMsQ0FBQyxHQUFHLENBQXRCLElBQTJCQSxDQUFDLEdBQUcsQ0FBbEMsRUFBcUM7QUFDckMsVUFBR1AsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZQyxJQUFaLElBQW9CLENBQXZCLEVBQTBCO0FBRTFCUixNQUFBQSxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlFLElBQVosSUFBb0JaLE1BQXBCO0FBQ0g7QUFDSjtBQWpCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5o6n5Yi25qOL5a2Q5YW155qE57uE5Lu2XHJcbiAqL1xyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogcmVxdWlyZShcIlBpZWNlXCIpLFxyXG5cclxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKHN0YXR1cywgWCwgWSkge1xyXG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubm9kZS5ncmlkcztcclxuICAgICAgICB2YXIgZGlyeCA9IEFycmF5KDAsIDAsIDAsIC0xKTtcclxuICAgICAgICB2YXIgZGlyeSA9IEFycmF5KDEsIDAsIC0xLCAwKTtcclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgeCA9IFggKyBkaXJ4W2ldO1xyXG4gICAgICAgICAgICB2YXIgeSA9IFkgKyBkaXJ5W2ldO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoeCA8IDAgfHwgeCA+IDkgfHwgeSA8IDAgfHwgeSA+IDkpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZ3JpZHNbeF1beV0ubnVtcyArPSBzdGF0dXM7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
