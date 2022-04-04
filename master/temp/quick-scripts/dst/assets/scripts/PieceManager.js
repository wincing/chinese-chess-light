
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/PieceManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4b07vA7axPm7uuiHi3YyxC', 'PieceManager');
// scripts/PieceManager.js

"use strict";

/**
 * 管理所有棋子的类
 * 
 * @property {cc.Node[]} map 存所有格子引用的数组
 * 
 * @property {cc.Node[]} pieces 存所有棋子引用的数组
 */
cc.Class({
  "extends": cc.Component,

  /**
   * 初始化
   */
  start: function start() {
    this.pieces = [];
    this.pieces = this.node.getChildren(); // 获取所有格子对象的引用

    this.map = this.node.parent.getComponent("CheckerBoard").map; // 将每个格子的引用传递到棋子上

    for (var i in this.pieces) {
      this.pieces[i].grids = this.map;
    }
  },

  /**
   * 根据格子的状态点亮格子
   */
  enlighten: function enlighten() {
    var grids = this.map;

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        var grid = grids[i][j];
        if (grid.flag == 0) continue;

        if (grid.nums > 0) {
          grid.flag = 2;
        } else {
          grid.flag = 1;
        } // 发送事件信息，调用repaint方法


        grid.emit("flag_changed");
      }
    }
  },

  /**
   * 通关后禁止所有棋子的脚本
   */
  stopAction: function stopAction() {
    for (var i in this.pieces) {
      this.pieces[i].getComponents(cc.Component)[1].destroy();
    }
  },

  /**
  * 检查是否通关
  * @returns {Boolean} 通关返回true, 反之返回false
  */
  checkPass: function checkPass() {
    var canvas = cc.find('Canvas');
    var path = canvas.getComponents(cc.Component)[1].path;
    var grids = this.map;

    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        if (path[i][j] == 1 && grids[i][j].flag != 2) {
          return false;
        }
      }
    }

    return true;
  },

  /**
   * 过关动画呈现
   */
  show: function show() {
    var canvas = cc.find('Canvas');
    var grids = this.map;
    var path = canvas.getComponents(cc.Component)[1].path; // 查找起始点

    var begin = function () {
      for (var i = 0; i < 10; i++) {
        if (path[9][i] == 1) return cc.v2(9, i);
      }

      for (var i = 9; i >= 0; i--) {
        if (path[i][0] == 1) return cc.v2(i, 0);
      }

      for (var i = 0; i < 10; i++) {
        if (path[0][i] == 1) return cc.v2(0, i);
      }

      for (var i = 0; i < 10; i++) {
        if (path[i][9] == 1) return cc.v2(i, 9);
      }

      return null;
    }(); // 顺序获取路径上每格


    var dirx = new Array(0, 1, 0, -1);
    var diry = new Array(1, 0, -1, 0);
    var vist = new Array();
    var paint = new Array();
    vist[begin] = true;

    for (var nx = begin.x, ny = begin.y;;) {
      paint.push(grids[nx][ny]);
      var flag = false;

      for (var i = 0; i < 4; i++) {
        var x = nx + dirx[i];
        var y = ny + diry[i];
        var t = cc.v2(x, y);

        if (x < 10 && x >= 0 && y < 10 && y >= 0 && path[x][y] == 1 && !vist.hasOwnProperty(t)) {
          vist[t] = true;
          nx = x, ny = y;
          flag = true;
          break;
        }
      } // 当前已经是最后一个格子


      if (!flag) break;
    } // 更改格子背景


    cc.loader.loadRes("grid/pass", cc.SpriteFrame, function (err, spriteFrame) {
      for (var index in paint) {
        (function (index, obj, pic) {
          // 通过回调函数间隔更换背景
          obj.getComponent('Grid').scheduleOnce(function () {
            obj.getComponent(cc.Sprite).spriteFrame = pic;
          }, index * 0.018);
        })(index, paint[index], spriteFrame);
      }
    });
  },

  /**
   * 通关后执行行为
   */
  passedAction: function passedAction() {
    // 禁止棋子拖动
    this.stopAction(); // 过关弹窗

    var self = this.node;
    cc.loader.loadRes("alert", cc.Prefab, function (err, prefab) {
      var alert = cc.instantiate(prefab);
      self.parent.addChild(alert);
      alert.setPosition(cc.v2(0, -452.5));
    });
    this.show(); // 通关音效

    cc.loader.loadRes("music/pass", cc.AudioClip, function (err, clip) {
      cc.audioEngine.play(clip, false, 1);
    }); // 加载文字科普

    cc.loader.loadRes("describe/1", cc.Prefab, function (err, prefab) {
      var alert = cc.instantiate(prefab); // 设置节点层级在最上层

      alert.zIndex = 100;
      self.parent.addChild(alert);
      alert.setPosition(cc.v2(100, -100));
    }); // 禁用帮助按钮

    if (cc.find('Canvas/TipButton')) cc.find('Canvas/TipButton').active = false; // 记录通过的关卡到缓存

    var canvas = cc.find('Canvas');
    var index = canvas.getComponents(cc.Component)[1].index;
    cc.sys.localStorage.setItem('Level' + index, true); // 更新缓存通关总数

    var cnt = 0;

    for (var i = 1; i <= 45; i++) {
      if (cc.sys.localStorage.getItem('Level' + i)) {
        cnt++;
      }
    }

    var pastCnt = cc.sys.localStorage.getItem('totalPassed');

    if (pastCnt == null && pastCnt < cnt) {
      cc.sys.localStorage.setItem('totalPassed', cnt);
    } // TX云存储当前用户的总过关数


    if (window['wx']) {
      var kvDataList = new Array();
      kvDataList.push({
        //标签 存储的当前游戏种类的标签
        key: 'totalPassed',
        value: String(cnt)
      });
      wx.setUserCloudStorage({
        KVDataList: kvDataList,
        success: function success(e) {
          console.log('向wx存储用户数据成功');
          console.log(e);
        },
        fail: function fail(e) {
          console.log('向wx存储用户数据失败');
          console.log(e);
        }
      });
    }
  },

  /**
   * 更新所有棋子
   */
  updateAll: function updateAll() {
    // 重置方格
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        this.map[i][j].nums = 0;
      }
    } // 将棋盘内所有红棋设为生效


    for (var i in this.pieces) {
      var piece = this.pieces[i];

      if (piece.type == 0 && piece.isInRange) {
        piece.disable = false;
      }
    } // 更新黑棋以禁用受攻击的红棋


    for (var i in this.pieces) {
      var piece = this.pieces[i];

      if (piece.type == 1) {
        piece.getComponents(cc.Component)[1].setflag(piece.gx, piece.gy);
      }
    } // 更新红棋


    for (var i in this.pieces) {
      var piece = this.pieces[i];

      if (piece.type == 0 && piece.isInRange && piece.disable == false) {
        piece.getComponents(cc.Component)[1].setflag(1, piece.gx, piece.gy);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGllY2VNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJzdGFydCIsInBpZWNlcyIsIm5vZGUiLCJnZXRDaGlsZHJlbiIsIm1hcCIsInBhcmVudCIsImdldENvbXBvbmVudCIsImkiLCJncmlkcyIsImVubGlnaHRlbiIsImoiLCJncmlkIiwiZmxhZyIsIm51bXMiLCJlbWl0Iiwic3RvcEFjdGlvbiIsImdldENvbXBvbmVudHMiLCJkZXN0cm95IiwiY2hlY2tQYXNzIiwiY2FudmFzIiwiZmluZCIsInBhdGgiLCJzaG93IiwiYmVnaW4iLCJ2MiIsImRpcngiLCJBcnJheSIsImRpcnkiLCJ2aXN0IiwicGFpbnQiLCJueCIsIngiLCJueSIsInkiLCJwdXNoIiwidCIsImhhc093blByb3BlcnR5IiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJpbmRleCIsIm9iaiIsInBpYyIsInNjaGVkdWxlT25jZSIsIlNwcml0ZSIsInBhc3NlZEFjdGlvbiIsInNlbGYiLCJQcmVmYWIiLCJwcmVmYWIiLCJhbGVydCIsImluc3RhbnRpYXRlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsIkF1ZGlvQ2xpcCIsImNsaXAiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJ6SW5kZXgiLCJhY3RpdmUiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiY250IiwiZ2V0SXRlbSIsInBhc3RDbnQiLCJ3aW5kb3ciLCJrdkRhdGFMaXN0Iiwia2V5IiwidmFsdWUiLCJTdHJpbmciLCJ3eCIsInNldFVzZXJDbG91ZFN0b3JhZ2UiLCJLVkRhdGFMaXN0Iiwic3VjY2VzcyIsImUiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsInVwZGF0ZUFsbCIsInBpZWNlIiwidHlwZSIsImlzSW5SYW5nZSIsImRpc2FibGUiLCJzZXRmbGFnIiwiZ3giLCJneSJdLCJtYXBwaW5ncyI6Ijs7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LENBQWQsSUFBbUJELEtBQUssQ0FBQ0UsU0FBNUIsRUFBdUM7QUFDbkNGLFFBQUFBLEtBQUssQ0FBQ0csT0FBTixHQUFnQixLQUFoQjtBQUNIO0FBQ0osS0FmaUIsQ0FpQmxCOzs7QUFDQSxTQUFJLElBQUk3RSxDQUFSLElBQWEsS0FBS04sTUFBbEIsRUFBMEI7QUFDdEIsVUFBSWdGLEtBQUssR0FBRyxLQUFLaEYsTUFBTCxDQUFZTSxDQUFaLENBQVo7O0FBQ0EsVUFBRzBFLEtBQUssQ0FBQ0MsSUFBTixJQUFjLENBQWpCLEVBQW9CO0FBQ2hCRCxRQUFBQSxLQUFLLENBQUNqRSxhQUFOLENBQW9CbkIsRUFBRSxDQUFDRSxTQUF2QixFQUFrQyxDQUFsQyxFQUFxQ3NGLE9BQXJDLENBQTZDSixLQUFLLENBQUNLLEVBQW5ELEVBQXVETCxLQUFLLENBQUNNLEVBQTdEO0FBQ0g7QUFDSixLQXZCaUIsQ0F5QmxCOzs7QUFDQSxTQUFJLElBQUloRixDQUFSLElBQWEsS0FBS04sTUFBbEIsRUFBMEI7QUFDdEIsVUFBSWdGLEtBQUssR0FBRyxLQUFLaEYsTUFBTCxDQUFZTSxDQUFaLENBQVo7O0FBQ0EsVUFBRzBFLEtBQUssQ0FBQ0MsSUFBTixJQUFjLENBQWQsSUFBbUJELEtBQUssQ0FBQ0UsU0FBekIsSUFBc0NGLEtBQUssQ0FBQ0csT0FBTixJQUFpQixLQUExRCxFQUFpRTtBQUM3REgsUUFBQUEsS0FBSyxDQUFDakUsYUFBTixDQUFvQm5CLEVBQUUsQ0FBQ0UsU0FBdkIsRUFBa0MsQ0FBbEMsRUFBcUNzRixPQUFyQyxDQUE2QyxDQUE3QyxFQUFnREosS0FBSyxDQUFDSyxFQUF0RCxFQUEwREwsS0FBSyxDQUFDTSxFQUFoRTtBQUNIO0FBQ0o7QUFDSjtBQTdQSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOeuoeeQhuaJgOacieaji+WtkOeahOexu1xuICogXG4gKiBAcHJvcGVydHkge2NjLk5vZGVbXX0gbWFwIOWtmOaJgOacieagvOWtkOW8leeUqOeahOaVsOe7hFxuICogXG4gKiBAcHJvcGVydHkge2NjLk5vZGVbXX0gcGllY2VzIOWtmOaJgOacieaji+WtkOW8leeUqOeahOaVsOe7hFxuICovXG5jYy5DbGFzcyh7XG5cbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICAvKipcbiAgICAgKiDliJ3lp4vljJZcbiAgICAgKi9cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBpZWNlcyA9IFtdO1xuICAgICAgICB0aGlzLnBpZWNlcyA9IHRoaXMubm9kZS5nZXRDaGlsZHJlbigpO1xuXG4gICAgICAgIC8vIOiOt+WPluaJgOacieagvOWtkOWvueixoeeahOW8leeUqFxuICAgICAgICB0aGlzLm1hcCA9IHRoaXMubm9kZS5wYXJlbnQuZ2V0Q29tcG9uZW50KFwiQ2hlY2tlckJvYXJkXCIpLm1hcDtcbiAgICAgICAgXG4gICAgICAgIC8vIOWwhuavj+S4quagvOWtkOeahOW8leeUqOS8oOmAkuWIsOaji+WtkOS4ilxuICAgICAgICBmb3IodmFyIGkgaW4gdGhpcy5waWVjZXMpIHtcbiAgICAgICAgICAgIHRoaXMucGllY2VzW2ldLmdyaWRzID0gdGhpcy5tYXA7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDmoLnmja7moLzlrZDnmoTnirbmgIHngrnkuq7moLzlrZBcbiAgICAgKi9cbiAgICBlbmxpZ2h0ZW46IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm1hcDtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCAxMDsgaisrKXtcbiAgICAgICAgICAgICAgICB2YXIgZ3JpZCA9IGdyaWRzW2ldW2pdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoZ3JpZC5mbGFnID09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgaWYoZ3JpZC5udW1zID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBncmlkLmZsYWcgPSAyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGdyaWQuZmxhZyA9IDE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8g5Y+R6YCB5LqL5Lu25L+h5oGv77yM6LCD55SocmVwYWludOaWueazlVxuICAgICAgICAgICAgICAgIGdyaWQuZW1pdChcImZsYWdfY2hhbmdlZFwiKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFxuXG4gICAgLyoqXG4gICAgICog6YCa5YWz5ZCO56aB5q2i5omA5pyJ5qOL5a2Q55qE6ISa5pysXG4gICAgICovXG4gICAgc3RvcEFjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnBpZWNlcykge1xuICAgICAgICAgICAgdGhpcy5waWVjZXNbaV0uZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpWzFdLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAgLyoqXG4gICAgICog5qOA5p+l5piv5ZCm6YCa5YWzXG4gICAgICogQHJldHVybnMge0Jvb2xlYW59IOmAmuWFs+i/lOWbnnRydWUsIOWPjeS5i+i/lOWbnmZhbHNlXG4gICAgICovXG4gICAgY2hlY2tQYXNzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICB2YXIgcGF0aCA9IGNhbnZhcy5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudClbMV0ucGF0aDtcbiAgICAgICAgdmFyIGdyaWRzID0gdGhpcy5tYXA7XG5cbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZvcih2YXIgaiA9IDA7IGogPCAxMDsgaisrKXtcbiAgICAgICAgICAgICAgICBpZihwYXRoW2ldW2pdID09IDEgJiYgZ3JpZHNbaV1bal0uZmxhZyAhPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBcbiAgICAvKipcbiAgICAgKiDov4flhbPliqjnlLvlkYjnjrBcbiAgICAgKi9cbiAgICBzaG93OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNhbnZhcyA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICB2YXIgZ3JpZHMgPSB0aGlzLm1hcDtcbiAgICAgICAgdmFyIHBhdGggPSBjYW52YXMuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpWzFdLnBhdGg7XG5cbiAgICAgICAgLy8g5p+l5om+6LW35aeL54K5XG4gICAgICAgIHZhciBiZWdpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDEwOyBpKysgKSB7XG4gICAgICAgICAgICAgICAgaWYocGF0aFs5XVtpXSA9PSAxKSByZXR1cm4gY2MudjIoOSwgaSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yKHZhciBpID0gOTsgaSA+PSAwOyBpLS0gKSB7XG4gICAgICAgICAgICAgICAgaWYocGF0aFtpXVswXSA9PSAxKSByZXR1cm4gY2MudjIoaSwgMCk7IFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgMTA7IGkrKyApIHtcbiAgICAgICAgICAgICAgICBpZihwYXRoWzBdW2ldID09IDEpIHJldHVybiBjYy52MigwLCBpKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgMTA7IGkrKyApIHtcbiAgICAgICAgICAgICAgICBpZihwYXRoW2ldWzldID09IDEpIHJldHVybiBjYy52MihpLCA5KTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSgpO1xuXG4gICAgICAgIC8vIOmhuuW6j+iOt+WPlui3r+W+hOS4iuavj+agvFxuICAgICAgICB2YXIgZGlyeCA9IG5ldyBBcnJheSgwLCAxLCAwLCAtMSk7XG4gICAgICAgIHZhciBkaXJ5ID0gbmV3IEFycmF5KDEsIDAsIC0xLCAwKTtcbiAgICAgICAgdmFyIHZpc3QgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgdmFyIHBhaW50ID0gbmV3IEFycmF5KCk7XG5cbiAgICAgICAgdmlzdFtiZWdpbl0gPSB0cnVlO1xuICAgICAgICBmb3IodmFyIG54ID0gYmVnaW4ueCwgbnkgPSBiZWdpbi55OzspIHtcbiAgICAgICAgICAgIHBhaW50LnB1c2goZ3JpZHNbbnhdW255XSk7XG5cbiAgICAgICAgICAgIHZhciBmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHggPSBueCArIGRpcnhbaV07XG4gICAgICAgICAgICAgICAgdmFyIHkgPSBueSArIGRpcnlbaV07XG4gICAgICAgICAgICAgICAgdmFyIHQgPSBjYy52Mih4LCB5KTtcbiAgICAgICAgICAgICAgICBpZih4IDwgMTAgJiYgeCA+PSAwICYmIHkgPCAxMCAmJiB5ID49IDAgJiYgXG4gICAgICAgICAgICAgICAgICAgIHBhdGhbeF1beV0gPT0gMSAmJiAhdmlzdC5oYXNPd25Qcm9wZXJ0eSh0KSkge1xuICAgICAgICAgICAgICAgICAgICB2aXN0W3RdID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgbnggPSB4LCBueSA9IHk7XG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlvZPliY3lt7Lnu4/mmK/mnIDlkI7kuIDkuKrmoLzlrZBcbiAgICAgICAgICAgIGlmKCFmbGFnKSBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOabtOaUueagvOWtkOiDjOaZr1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImdyaWQvcGFzc1wiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcblxuICAgICAgICAgICAgZm9yKHZhciBpbmRleCBpbiBwYWludCkge1xuICAgICAgICAgICAgICAgIChmdW5jdGlvbihpbmRleCwgb2JqLCBwaWMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6YCa6L+H5Zue6LCD5Ye95pWw6Ze06ZqU5pu05o2i6IOM5pmvXG4gICAgICAgICAgICAgICAgICAgIG9iai5nZXRDb21wb25lbnQoJ0dyaWQnKS5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gcGljO1xuICAgICAgICAgICAgICAgICAgICB9LCBpbmRleCAqIDAuMDE4KTtcblxuICAgICAgICAgICAgICAgIH0pKGluZGV4LCBwYWludFtpbmRleF0sIHNwcml0ZUZyYW1lKTsgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDpgJrlhbPlkI7miafooYzooYzkuLpcbiAgICAgKi9cbiAgICBwYXNzZWRBY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyDnpoHmraLmo4vlrZDmi5bliqhcbiAgICAgICAgdGhpcy5zdG9wQWN0aW9uKCk7XG5cbiAgICAgICAgLy8g6L+H5YWz5by556qXXG4gICAgICAgIHZhciBzZWxmID0gdGhpcy5ub2RlO1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImFsZXJ0XCIsIGNjLlByZWZhYiwgZnVuY3Rpb24oZXJyLCBwcmVmYWIpIHtcbiAgICAgICAgICAgIHZhciBhbGVydCA9ICBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgc2VsZi5wYXJlbnQuYWRkQ2hpbGQoYWxlcnQpO1xuICAgICAgICBcbiAgICAgICAgICAgIGFsZXJ0LnNldFBvc2l0aW9uKGNjLnYyKDAsIC00NTIuNSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNob3coKTtcblxuICAgICAgICAvLyDpgJrlhbPpn7PmlYhcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJtdXNpYy9wYXNzXCIsIGNjLkF1ZGlvQ2xpcCwgZnVuY3Rpb24gKGVyciwgY2xpcCkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBmYWxzZSwgMSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIOWKoOi9veaWh+Wtl+enkeaZrlxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImRlc2NyaWJlLzFcIiwgY2MuUHJlZmFiLCBmdW5jdGlvbihlcnIsIHByZWZhYikge1xuICAgICAgICAgICAgdmFyIGFsZXJ0ID0gIGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAvLyDorr7nva7oioLngrnlsYLnuqflnKjmnIDkuIrlsYJcbiAgICAgICAgICAgIGFsZXJ0LnpJbmRleCA9IDEwMDtcbiAgICAgICAgICAgIHNlbGYucGFyZW50LmFkZENoaWxkKGFsZXJ0KTtcbiAgICAgICAgICAgIGFsZXJ0LnNldFBvc2l0aW9uKGNjLnYyKDEwMCwgLTEwMCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyDnpoHnlKjluK7liqnmjInpkq5cbiAgICAgICAgaWYoY2MuZmluZCgnQ2FudmFzL1RpcEJ1dHRvbicpKVxuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL1RpcEJ1dHRvbicpLmFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIOiusOW9lemAmui/h+eahOWFs+WNoeWIsOe8k+WtmFxuICAgICAgICB2YXIgY2FudmFzID0gY2MuZmluZCgnQ2FudmFzJyk7XG4gICAgICAgIHZhciBpbmRleCA9IGNhbnZhcy5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudClbMV0uaW5kZXg7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnTGV2ZWwnICsgaW5kZXgsIHRydWUpO1xuXG4gICAgICAgIC8vIOabtOaWsOe8k+WtmOmAmuWFs+aAu+aVsFxuICAgICAgICB2YXIgY250ID0gMDtcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8PSA0NTsgaSsrKSB7XG4gICAgICAgICAgICBpZihjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0xldmVsJyArIGkpKSB7XG4gICAgICAgICAgICAgICAgY250Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhc3RDbnQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvdGFsUGFzc2VkJyk7XG4gICAgICAgIGlmKHBhc3RDbnQgPT0gbnVsbCAmJiBwYXN0Q250IDwgY250KSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvdGFsUGFzc2VkJywgY250KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRY5LqR5a2Y5YKo5b2T5YmN55So5oi355qE5oC76L+H5YWz5pWwXG4gICAgICAgIGlmICh3aW5kb3dbJ3d4J10pe1xuICAgICAgICAgICAgdmFyIGt2RGF0YUxpc3QgPSBuZXcgQXJyYXkoKTtcbiAgICAgICAgICAgIGt2RGF0YUxpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgLy/moIfnrb4g5a2Y5YKo55qE5b2T5YmN5ri45oiP56eN57G755qE5qCH562+XG4gICAgICAgICAgICAgICAga2V5OiAndG90YWxQYXNzZWQnLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBTdHJpbmcoY250KSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB3eC5zZXRVc2VyQ2xvdWRTdG9yYWdlKHtcbiAgICAgICAgICAgICAgICBLVkRhdGFMaXN0Omt2RGF0YUxpc3QsXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhlKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WQkXd45a2Y5YKo55So5oi35pWw5o2u5oiQ5YqfJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbChlKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+WQkXd45a2Y5YKo55So5oi35pWw5o2u5aSx6LSlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOabtOaWsOaJgOacieaji+WtkFxuICAgICAqL1xuICAgIHVwZGF0ZUFsbDogZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgLy8g6YeN572u5pa55qC8XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IodmFyIGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwW2ldW2pdLm51bXMgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ICAgXG5cbiAgICAgICAgLy8g5bCG5qOL55uY5YaF5omA5pyJ57qi5qOL6K6+5Li655Sf5pWIXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnBpZWNlcykge1xuICAgICAgICAgICAgdmFyIHBpZWNlID0gdGhpcy5waWVjZXNbaV07XG4gICAgICAgICAgICBpZihwaWVjZS50eXBlID09IDAgJiYgcGllY2UuaXNJblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgcGllY2UuZGlzYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pu05paw6buR5qOL5Lul56aB55So5Y+X5pS75Ye755qE57qi5qOLXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnBpZWNlcykge1xuICAgICAgICAgICAgdmFyIHBpZWNlID0gdGhpcy5waWVjZXNbaV07XG4gICAgICAgICAgICBpZihwaWVjZS50eXBlID09IDEpIHtcbiAgICAgICAgICAgICAgICBwaWVjZS5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudClbMV0uc2V0ZmxhZyhwaWVjZS5neCwgcGllY2UuZ3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g5pu05paw57qi5qOLXG4gICAgICAgIGZvcih2YXIgaSBpbiB0aGlzLnBpZWNlcykge1xuICAgICAgICAgICAgdmFyIHBpZWNlID0gdGhpcy5waWVjZXNbaV07XG4gICAgICAgICAgICBpZihwaWVjZS50eXBlID09IDAgJiYgcGllY2UuaXNJblJhbmdlICYmIHBpZWNlLmRpc2FibGUgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBwaWVjZS5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudClbMV0uc2V0ZmxhZygxLCBwaWVjZS5neCwgcGllY2UuZ3kpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbn0pO1xuIl19