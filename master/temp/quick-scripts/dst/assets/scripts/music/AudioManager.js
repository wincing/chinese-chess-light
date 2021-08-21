
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