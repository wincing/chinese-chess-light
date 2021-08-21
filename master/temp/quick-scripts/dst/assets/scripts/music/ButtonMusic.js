
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