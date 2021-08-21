
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