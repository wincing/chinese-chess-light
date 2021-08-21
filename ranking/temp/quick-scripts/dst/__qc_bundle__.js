
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/openData');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/openData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e8559eL9JK948ZDGtZWeK8', 'openData');
// openData.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    content: {
      "default": null,
      type: cc.Node
    },
    item: {
      "default": null,
      type: cc.Prefab
    }
  },

  /**
   * 接受主域消息
   */
  onLoad: function onLoad() {
    var self = this;
    wx.onMessage(function (data) {
      console.log('子域收到信息：');
      console.log(data);

      if (data.text == 'showRank') {
        self.getFriendInfo(); // 获取好友信息
      } else if (data.text == 'clear') {
        self.content.removeAllChildren(); // 清空排行榜
      }
    });
  },

  /**
   * 获取好友信息
   */
  getFriendInfo: function getFriendInfo() {
    this.friendList = new Array();
    var self = this;
    wx.getFriendCloudStorage({
      keyList: ['totalPassed'],
      success: function success(res) {
        for (var i = 0; i < res.data.length; i++) {
          // 获取玩家微信名，头像url和通关数
          var nickName = res.data[i].nickname;
          var avatarUrl = res.data[i].avatarUrl;
          var score = 0;
          if (res.data[i].KVDataList.length) score = res.data[i].KVDataList[0]['value']; // 加入到数组中

          self.friendList.push({
            nickName: nickName,
            avatarUrl: avatarUrl,
            score: score
          });
        }

        self.createRank(); // 创建列表

        console.log('获得好友微信数据成功（数组）');
        console.log(res);
      },
      fail: function fail(res) {
        console.log('获得好友微信数据失败');
        console.log(res);
      }
    });
  },

  /**
   * 创建好友列表
   */
  createRank: function createRank() {
    // 将friendList内部元素进行排序，根据分数来降序排列
    this.friendList.sort(function (a, b) {
      return b['score'] - a['score'];
    }); // 创建item元素

    for (var i = 0; i < this.friendList.length; i++) {
      var nickName = this.friendList[i]['nickName'];
      var avatarUrl = this.friendList[i]['avatarUrl'];
      var score = this.friendList[i]['score'];
      this.createItem(i + 1, nickName, avatarUrl, score);
    }
  },
  createItem: function createItem(index, nickName, avatarUrl, score) {
    var item = cc.instantiate(this.item); // 排名

    item.children[0].getComponent(cc.Label).string = String(index); // 微信名

    item.children[1].getComponent(cc.Label).string = nickName; // 分数

    item.children[2].getComponent(cc.Label).string = score; // 头像

    cc.loader.load({
      url: avatarUrl,
      type: 'png'
    }, function (err, texture) {
      if (err) {
        console.error(err);
      }

      item.children[3].children[0].getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    }); // 添加到content中

    this.content.addChild(item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcb3BlbkRhdGEuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwidHlwZSIsIk5vZGUiLCJpdGVtIiwiUHJlZmFiIiwib25Mb2FkIiwic2VsZiIsInd4Iiwib25NZXNzYWdlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZ2V0RnJpZW5kSW5mbyIsInJlbW92ZUFsbENoaWxkcmVuIiwiZnJpZW5kTGlzdCIsIkFycmF5IiwiZ2V0RnJpZW5kQ2xvdWRTdG9yYWdlIiwia2V5TGlzdCIsInN1Y2Nlc3MiLCJyZXMiLCJpIiwibGVuZ3RoIiwibmlja05hbWUiLCJuaWNrbmFtZSIsImF2YXRhclVybCIsInNjb3JlIiwiS1ZEYXRhTGlzdCIsInB1c2giLCJjcmVhdGVSYW5rIiwiZmFpbCIsInNvcnQiLCJhIiwiYiIsImNyZWF0ZUl0ZW0iLCJpbmRleCIsImluc3RhbnRpYXRlIiwiY2hpbGRyZW4iLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsIlN0cmluZyIsImxvYWRlciIsImxvYWQiLCJ1cmwiLCJlcnIiLCJ0ZXh0dXJlIiwiZXJyb3IiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIlNwcml0ZUZyYW1lIiwiYWRkQ2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUU7QUFDTCxpQkFBUyxJQURKO0FBRUxDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZKLEtBREQ7QUFNUkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0YsaUJBQVMsSUFEUDtBQUVGRixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1E7QUFGUDtBQU5FLEdBSFA7O0FBZ0JMOzs7QUFHQUMsRUFBQUEsTUFuQkssb0JB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T0FBTyxDQUFDcUMsS0FBUixDQUFjRixHQUFkO0FBQ0g7O0FBQ0QxQyxNQUFBQSxJQUFJLENBQUNrQyxRQUFMLENBQWMsQ0FBZCxFQUFpQkEsUUFBakIsQ0FBMEIsQ0FBMUIsRUFBNkJDLFlBQTdCLENBQTBDMUMsRUFBRSxDQUFDb0QsTUFBN0MsRUFBcURDLFdBQXJELEdBQW1FLElBQUlyRCxFQUFFLENBQUNzRCxXQUFQLENBQW1CSixPQUFuQixDQUFuRTtBQUNILEtBTEQsRUFUMEMsQ0FnQjFDOztBQUNBLFNBQUs5QyxPQUFMLENBQWFtRCxRQUFiLENBQXNCaEQsSUFBdEI7QUFFSDtBQTlHSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjqXlj5fkuLvln5/mtojmga9cclxuICAgICAqL1xyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB3eC5vbk1lc3NhZ2UoZnVuY3Rpb24gKGRhdGEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5a2Q5Z+f5pS25Yiw5L+h5oGv77yaJyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgICAgICAgICAgaWYoZGF0YS50ZXh0ID09ICdzaG93UmFuaycpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZ2V0RnJpZW5kSW5mbygpOyAvLyDojrflj5blpb3lj4vkv6Hmga9cclxuICAgICAgICAgICAgfSBlbHNlIGlmKGRhdGEudGV4dCA9PSAnY2xlYXInKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTsgLy8g5riF56m65o6S6KGM5qacXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDojrflj5blpb3lj4vkv6Hmga9cclxuICAgICAqL1xyXG4gICAgZ2V0RnJpZW5kSW5mbygpIHtcclxuICAgICAgICB0aGlzLmZyaWVuZExpc3QgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHd4LmdldEZyaWVuZENsb3VkU3RvcmFnZSh7XHJcbiAgICAgICAgICAgIGtleUxpc3Q6IFsndG90YWxQYXNzZWQnXSxcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPlueOqeWutuW+ruS/oeWQje+8jOWktOWDj3VybOWSjOmAmuWFs+aVsFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuaWNrTmFtZSA9IHJlcy5kYXRhW2ldLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdmF0YXJVcmwgPSByZXMuZGF0YVtpXS5hdmF0YXJVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjb3JlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGFbaV0uS1ZEYXRhTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlID0gcmVzLmRhdGFbaV0uS1ZEYXRhTGlzdFswXVsndmFsdWUnXTtcclxuICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyDliqDlhaXliLDmlbDnu4TkuK1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmZyaWVuZExpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lOiBuaWNrTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyVXJsOiBhdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlOiBzY29yZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYuY3JlYXRlUmFuaygpOyAvLyDliJvlu7rliJfooahcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635b6X5aW95Y+L5b6u5L+h5pWw5o2u5oiQ5Yqf77yI5pWw57uE77yJJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgIFxyXG4gICAgICAgICAgICBmYWlsOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635b6X5aW95Y+L5b6u5L+h5pWw5o2u5aSx6LSlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgIFxyXG4gICAgLyoqXHJcbiAgICAgKiDliJvlu7rlpb3lj4vliJfooahcclxuICAgICAqL1xyXG4gICAgY3JlYXRlUmFuaygpIHtcclxuICAgICAgICAvLyDlsIZmcmllbmRMaXN05YaF6YOo5YWD57Sg6L+b6KGM5o6S5bqP77yM5qC55o2u5YiG5pWw5p2l6ZmN5bqP5o6S5YiXXHJcbiAgICAgICAgdGhpcy5mcmllbmRMaXN0LnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJbJ3Njb3JlJ10gLSBhWydzY29yZSddO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDliJvlu7ppdGVt5YWD57SgXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuZnJpZW5kTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgbmlja05hbWUgPSB0aGlzLmZyaWVuZExpc3RbaV1bJ25pY2tOYW1lJ107XHJcbiAgICAgICAgICAgIHZhciBhdmF0YXJVcmwgPSB0aGlzLmZyaWVuZExpc3RbaV1bJ2F2YXRhclVybCddO1xyXG4gICAgICAgICAgICB2YXIgc2NvcmUgPSB0aGlzLmZyaWVuZExpc3RbaV1bJ3Njb3JlJ107XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlSXRlbShpKzEsIG5pY2tOYW1lLCBhdmF0YXJVcmwsIHNjb3JlKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZUl0ZW0oaW5kZXgsIG5pY2tOYW1lLCBhdmF0YXJVcmwsIHNjb3JlKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW0pOyAgXHJcbiAgICAgICAgLy8g5o6S5ZCNXHJcbiAgICAgICAgaXRlbS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFN0cmluZyhpbmRleCk7XHJcbiAgICAgICAgLy8g5b6u5L+h5ZCNXHJcbiAgICAgICAgaXRlbS5jaGlsZHJlblsxXS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG5pY2tOYW1lO1xyXG4gICAgICAgIC8vIOWIhuaVsFxyXG4gICAgICAgIGl0ZW0uY2hpbGRyZW5bMl0uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzY29yZTtcclxuICAgICAgICAvLyDlpLTlg49cclxuICAgICAgICBjYy5sb2FkZXIubG9hZCh7dXJsOiBhdmF0YXJVcmwsIHR5cGU6ICdwbmcnfSwgKGVyciwgdGV4dHVyZSkgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtLmNoaWxkcmVuWzNdLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgLy8g5re75Yqg5YiwY29udGVudOS4rVxyXG4gICAgICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
