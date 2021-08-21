
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