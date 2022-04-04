
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
   * 隐藏科普文字
   */
  hideDescribe: function hideDescribe() {
    this.node.parent.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU2tpcC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwic2tpcFRvIiwiZXZlbnQiLCJjdXN0b21FdmVudERhdGEiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm5leHRQYXNzIiwiY2FudmFzIiwiZmluZCIsImxldmVsIiwiZ2V0Q29tcG9uZW50cyIsImluZGV4Iiwic3RvcEFsbEFjdGlvbnMiLCJsb2FkVHV0b3JpYWwiLCJzaG93IiwibmFtZSIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiaGlkZSIsImFjdGl2ZSIsImFwcGVhciIsImhpZGVEZXNjcmliZSIsIm5vZGUiLCJwYXJlbnQiLCJzaGFyZSIsImRhdGEiLCJ3eCIsInNoYXJlQXBwTWVzc2FnZSIsInRpdGxlIiwiaW1hZ2VVcmwiLCJ1cmwiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImZhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDs7QUFHTDs7Ozs7QUFLQUMsRUFBQUEsTUFSSyxrQkFRRUMsS0FSRixFQVFTQyxlQVJULEVBUTBCO0FBQzNCTCxJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUMsU0FBWixDQUFzQkYsZUFBdEI7QUFDSCxHQVZJOztBQVlMOzs7QUFHQUcsRUFBQUEsUUFmSyxzQkFlTTtBQUNQLFFBQUlDLE1BQU0sR0FBR1QsRUFBRSxDQUFDVSxJQUFILENBQVEsUUFBUixDQUFiO0FBQ0EsUUFBSUMsS0FBSyxHQUFHRixNQUFNLENBQUNHLGFBQVAsQ0FBcUJaLEVBQUUsQ0FBQ0UsU0FBeEIsRUFBbUMsQ0FBbkMsRUFBc0NXLEtBQWxEO0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ0ssY0FBUDtBQUNBSCxJQUFBQSxLQUFLLElBQUksQ0FBVDs7QUFDQSxRQUFHQSxLQUFLLEdBQUcsRUFBWCxFQUFlO0FBQ1hYLE1BQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLE9BQXRCO0FBQ0gsS0FGRCxNQUVPO0FBQ0hQLE1BQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZQyxTQUFaLENBQXNCLFVBQVVJLEtBQWhDO0FBQ0g7QUFDSixHQXpCSTs7QUEyQkw7Ozs7O0FBS0FJLEVBQUFBLFlBaENLLHdCQWdDUVgsS0FoQ1IsRUFnQ2VDLGVBaENmLEVBZ0NnQztBQUNqQyxRQUFJVyxJQUFJLEdBQUdoQixFQUFFLENBQUNVLElBQUgsQ0FBUSxhQUFSLENBQVg7QUFDQSxRQUFJTyxJQUFJLEdBQUcsY0FBY1osZUFBekI7QUFDQUwsSUFBQUEsRUFBRSxDQUFDa0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCRixJQUFsQixFQUF3QmpCLEVBQUUsQ0FBQ29CLFdBQTNCLEVBQXdDLFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtBQUNoRU4sTUFBQUEsSUFBSSxDQUFDTyxZQUFMLENBQWtCdkIsRUFBRSxDQUFDd0IsTUFBckIsRUFBNkJGLFdBQTdCLEdBQTJDQSxXQUEzQztBQUNILEtBRkQ7QUFHSCxHQXRDSTs7QUF3Q0w7OztBQUdBRyxFQUFBQSxJQTNDSyxrQkEyQ0U7QUFDSHpCLElBQUFBLEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLFlBQVIsRUFBc0JnQixNQUF0QixHQUErQixLQUEvQjtBQUNILEdBN0NJOztBQStDTDs7O0FBR0FDLEVBQUFBLE1BbERLLG9CQWtESTtBQUNMM0IsSUFBQUEsRUFBRSxDQUFDVSxJQUFILENBQVEsWUFBUixFQUFzQmdCLE1BQXRCLEdBQStCLElBQS9CO0FBQ0gsR0FwREk7O0FBc0RMOzs7QUFHQUUsRUFBQUEsWUF6REssMEJBeURVO0FBQ1gsU0FBS0MsSUFBTCxDQUFVQyxNQUFWLENBQWlCSixNQUFqQixHQUEwQixLQUExQjtBQUNILEdBM0RJOztBQTZETDs7O0FBR0FLLEVBQUFBLEtBaEVLLG1CQWdFRztBQUNKL0IsSUFBQUEsRUFBRSxDQUFDa0IsTUFBSCxDQUFVQyxPQUFWLENBQWtCLE9BQWxCLEVBQTJCLFVBQVVFLEdBQVYsRUFBZVcsSUFBZixFQUFxQjtBQUM1Q0MsTUFBQUEsRUFBRSxDQUFDQyxlQUFILENBQW1CO0FBQ2ZDLFFBQUFBLEtBQUssRUFBRSxZQURRO0FBRWZDLFFBQUFBLFFBQVEsRUFBRUosSUFBSSxDQUFDSyxHQUZBO0FBR2ZDLFFBQUFBLE9BSGUsbUJBR1BDLEdBSE8sRUFHRjtBQUNUQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNILFNBTGM7QUFNZkcsUUFBQUEsSUFOZSxnQkFNVkgsR0FOVSxFQU1MO0FBQ05DLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0g7QUFSYyxPQUFuQjtBQVVILEtBWEQ7QUFZSDtBQTdFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaOp+WItuWcuuaZr+WIh+aNouS6i+S7tueahOexu1xuICovXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgLyoqXG4gICAgICog5Zy65pmv6Lez6L2sXG4gICAgICogQHBhcmFtIHsqfSBldmVudCBcbiAgICAgKiBAcGFyYW0ge1N0cmluZ30gY3VzdG9tRXZlbnREYXRhIOaJgOimgei3s+i9rOiHs+eahOWcuuaZr+WQjeensFxuICAgICAqL1xuICAgIHNraXBUbyhldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShjdXN0b21FdmVudERhdGEpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDot7PovazliLDlvZPliY3lhbPljaHnmoTkuIvkuIDlhbNcbiAgICAgKi9cbiAgICBuZXh0UGFzcygpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICB2YXIgbGV2ZWwgPSBjYW52YXMuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpWzFdLmluZGV4O1xuICAgICAgICBjYW52YXMuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgbGV2ZWwgKz0gMTtcbiAgICAgICAgaWYobGV2ZWwgPiA0NSkge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiU3RhcnRcIik7IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTGV2ZWxcIiArIGxldmVsKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmjInpkq7mmL7npLrlr7nlupTnmoTmjIflvJVcbiAgICAgKiBAcGFyYW0geyp9IGV2ZW50IFxuICAgICAqIEBwYXJhbSB7U3RyaW5nfSBjdXN0b21FdmVudERhdGEg6ZyA6KaB5Yqg6L2955qE5pWZ56iL6LWE5rqQ5ZCNXG4gICAgICovXG4gICAgbG9hZFR1dG9yaWFsKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcbiAgICAgICAgdmFyIHNob3cgPSBjYy5maW5kKCdDYW52YXMvU2hvdycpO1xuICAgICAgICB2YXIgbmFtZSA9ICd0dXRvcmlhbC8nICsgY3VzdG9tRXZlbnREYXRhO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhuYW1lLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgIHNob3cuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmakOiXj+aPkOekulxuICAgICAqL1xuICAgIGhpZGUoKSB7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9UaXAnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pi+56S65o+Q56S6XG4gICAgICovXG4gICAgYXBwZWFyKCkge1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvVGlwJykuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6ZqQ6JeP56eR5pmu5paH5a2XXG4gICAgICovXG4gICAgaGlkZURlc2NyaWJlKCkge1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDkuLvliqjliIbkuqtcbiAgICAgKi9cbiAgICBzaGFyZSgpIHtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJzaGFyZVwiLCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XG4gICAgICAgICAgICB3eC5zaGFyZUFwcE1lc3NhZ2Uoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBcIueUn+S6jum7keaal++8jOWni+ingeWFieaYjuOAglwiLFxuICAgICAgICAgICAgICAgIGltYWdlVXJsOiBkYXRhLnVybCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfSxcblxufSk7XG4iXX0=