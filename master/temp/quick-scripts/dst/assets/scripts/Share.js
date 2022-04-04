
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