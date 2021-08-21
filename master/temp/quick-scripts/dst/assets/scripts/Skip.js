
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