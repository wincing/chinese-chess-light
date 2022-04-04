
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