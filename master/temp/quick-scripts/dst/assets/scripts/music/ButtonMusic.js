
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