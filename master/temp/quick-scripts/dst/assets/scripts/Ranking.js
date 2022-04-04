
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Ranking.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '715e7T4PmlNoonpDiDaXUaO', 'Ranking');
// scripts/Ranking.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    SubContextView: {
      "default": null,
      type: cc.Node,
      serializable: true
    }
  },
  start: function start() {
    this.rankingPanel = this.SubContextView.parent;
    this.rankingPanel.active = false;
    this.SubContextView.active = false;
  },
  show: function show() {
    this.SubContextView.active = true;
    this.rankingPanel.active = true; // 判断是否是微信平台

    if (window['wx']) {
      // 给子域发送消息
      var openDataContext = wx.getOpenDataContext();
      openDataContext.postMessage({
        text: 'showRank' // 在子域中调用该函数

      });
    }
  },
  hide: function hide() {
    this.SubContextView.active = false;
    this.rankingPanel.active = false; // 判断是否是微信平台

    if (window['wx']) {
      // 给子域发送消息
      var openDataContext = wx.getOpenDataContext();
      openDataContext.postMessage({
        text: 'clear' // 清空排行榜

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUmFua2luZy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIlN1YkNvbnRleHRWaWV3IiwidHlwZSIsIk5vZGUiLCJzZXJpYWxpemFibGUiLCJzdGFydCIsInJhbmtpbmdQYW5lbCIsInBhcmVudCIsImFjdGl2ZSIsInNob3ciLCJ3aW5kb3ciLCJvcGVuRGF0YUNvbnRleHQiLCJ3eCIsImdldE9wZW5EYXRhQ29udGV4dCIsInBvc3RNZXNzYWdlIiwidGV4dCIsImhpZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxjQUFjLEVBQUU7QUFDWixpQkFBUyxJQURHO0FBRVpDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQUZHO0FBR1pDLE1BQUFBLFlBQVksRUFBRTtBQUhGO0FBRFIsR0FIUDtBQVdMQyxFQUFBQSxLQVhLLG1CQVdHO0FBQ0osU0FBS0MsWUFBTCxHQUFvQixLQUFLTCxjQUFMLENBQW9CTSxNQUF4QztBQUNBLFNBQUtELFlBQUwsQ0FBa0JFLE1BQWxCLEdBQTJCLEtBQTNCO0FBQ0EsU0FBS1AsY0FBTCxDQUFvQk8sTUFBcEIsR0FBNkIsS0FBN0I7QUFDSCxHQWZJO0FBaUJMQyxFQUFBQSxJQWpCSyxrQkFpQkU7QUFDSCxTQUFLUixjQUFMLENBQW9CTyxNQUFwQixHQUE2QixJQUE3QjtBQUNBLFNBQUtGLFlBQUwsQ0FBa0JFLE1BQWxCLEdBQTJCLElBQTNCLENBRkcsQ0FHSDs7QUFDQSxRQUFHRSxNQUFNLENBQUMsSUFBRCxDQUFULEVBQWlCO0FBQ2I7QUFDQSxVQUFJQyxlQUFlLEdBQUdDLEVBQUUsQ0FBQ0Msa0JBQUgsRUFBdEI7QUFDQUYsTUFBQUEsZUFBZSxDQUFDRyxXQUFoQixDQUE0QjtBQUN4QkMsUUFBQUEsSUFBSSxFQUFDLFVBRG1CLENBQ1A7O0FBRE8sT0FBNUI7QUFHSDtBQUNKLEdBNUJJO0FBOEJMQyxFQUFBQSxJQTlCSyxrQkE4QkU7QUFDSCxTQUFLZixjQUFMLENBQW9CTyxNQUFwQixHQUE2QixLQUE3QjtBQUNBLFNBQUtGLFlBQUwsQ0FBa0JFLE1BQWxCLEdBQTJCLEtBQTNCLENBRkcsQ0FHSDs7QUFDQSxRQUFHRSxNQUFNLENBQUMsSUFBRCxDQUFULEVBQWlCO0FBQ2I7QUFDQSxVQUFJQyxlQUFlLEdBQUdDLEVBQUUsQ0FBQ0Msa0JBQUgsRUFBdEI7QUFDQUYsTUFBQUEsZUFBZSxDQUFDRyxXQUFoQixDQUE0QjtBQUN4QkMsUUFBQUEsSUFBSSxFQUFDLE9BRG1CLENBQ1Y7O0FBRFUsT0FBNUI7QUFHSDtBQUNKO0FBekNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIFN1YkNvbnRleHRWaWV3OiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnJhbmtpbmdQYW5lbCA9IHRoaXMuU3ViQ29udGV4dFZpZXcucGFyZW50O1xuICAgICAgICB0aGlzLnJhbmtpbmdQYW5lbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5TdWJDb250ZXh0Vmlldy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5TdWJDb250ZXh0Vmlldy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnJhbmtpbmdQYW5lbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyDliKTmlq3mmK/lkKbmmK/lvq7kv6HlubPlj7BcbiAgICAgICAgaWYod2luZG93Wyd3eCddKSB7XG4gICAgICAgICAgICAvLyDnu5nlrZDln5/lj5HpgIHmtojmga9cbiAgICAgICAgICAgIHZhciBvcGVuRGF0YUNvbnRleHQgPSB3eC5nZXRPcGVuRGF0YUNvbnRleHQoKTtcbiAgICAgICAgICAgIG9wZW5EYXRhQ29udGV4dC5wb3N0TWVzc2FnZSh7XG4gICAgICAgICAgICAgICAgdGV4dDonc2hvd1JhbmsnLCAvLyDlnKjlrZDln5/kuK3osIPnlKjor6Xlh73mlbBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuU3ViQ29udGV4dFZpZXcuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucmFua2luZ1BhbmVsLmFjdGl2ZSA9IGZhbHNlOyAgXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpuaYr+W+ruS/oeW5s+WPsFxuICAgICAgICBpZih3aW5kb3dbJ3d4J10pIHtcbiAgICAgICAgICAgIC8vIOe7meWtkOWfn+WPkemAgea2iOaBr1xuICAgICAgICAgICAgdmFyIG9wZW5EYXRhQ29udGV4dCA9IHd4LmdldE9wZW5EYXRhQ29udGV4dCgpO1xuICAgICAgICAgICAgb3BlbkRhdGFDb250ZXh0LnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OidjbGVhcicsIC8vIOa4heepuuaOkuihjOamnFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gIFxuICAgIH1cblxufSk7XG4iXX0=