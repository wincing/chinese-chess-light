"use strict";
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