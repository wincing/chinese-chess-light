
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