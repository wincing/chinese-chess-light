
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CheckerBoard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb8aa0QlV1B8r2v5UcFkv4Q', 'CheckerBoard');
// scripts/CheckerBoard.js

"use strict";

/**
 * 动态生成棋盘
 * @property {cc.Node} node 该脚本挂载的节点
 * 
 * @property {Number} upperLeftX 棋盘左上角横坐标
 * 
 * @property {Number} upperLeftY 棋盘左上角纵坐标
 * 
 * @property {Number} broadSize 棋盘边长
 * 
 * @property {cc.Prefab} gridWall 格子预制体资源-墙体
 * 
 * @property {cc.Prefab} gridPath 格子预制体资源-路径
 * 
 * @property {cc.Node[]} map 包含所有格子的数组
 * 
 * @property {Number} gridNum 每边格子数--固定为10
 * 
 * @property {Number} gridSize 格子大小
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    upperLeftX: 0,
    upperLeftY: 0,
    broadSize: 0,
    gridWall: {
      "default": null,
      type: cc.Prefab
    },
    gridPath: {
      "default": null,
      type: cc.Prefab
    }
  },

  /**
   * 动态生成格子并将其添加到场景中
   * 
   * @param {cc.V2} position 生成格子的位置
   * @param {Boolean} kind 格子的类型
   * @returns {Grid} 生成格子的引用
   */
  createGrid: function createGrid(position, kind) {
    var newGrid = null; // 根据格子种类生成节点

    switch (kind) {
      case 0:
        newGrid = cc.instantiate(this.gridWall);
        break;

      case 1:
        newGrid = cc.instantiate(this.gridPath);
        break;
    } // 0为墙, 1为路, 2为灯, 3为受攻击


    newGrid.flag = kind;
    newGrid.nums = 0;
    this.node.addChild(newGrid); // 设置格子层级

    newGrid.setSiblingIndex(2); // 使每个格子以左上角为锚点

    newGrid.anchorX = 0;
    newGrid.anchorY = 1; // 设置格子位置

    var newPosition = newGrid.parent.convertToNodeSpaceAR(position);
    newGrid.setPosition(newPosition);
    return newGrid;
  },

  /**
   * 创建棋盘
   */
  createMap: function createMap() {
    var flags = this.node.getComponents(cc.Component)[1]; // 关卡数据脚本一定需挂在第3位置

    for (var i = 0; i < 10; i++) {
      this.map[i] = new Array();
      var y = this.upperLeftY - i * this.gridSize;

      for (var j = 0; j < 10; j++) {
        var x = this.upperLeftX + j * this.gridSize;
        this.map[i][j] = this.createGrid(cc.v2(x, y), flags.data[i][j]);
      }
    }
  },
  start: function start() {
    this.map = new Array();
    this.gridNum = 10;
    this.gridSize = this.broadSize / this.gridNum;
    this.createMap();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ2hlY2tlckJvYXJkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidXBwZXJMZWZ0WCIsInVwcGVyTGVmdFkiLCJicm9hZFNpemUiLCJncmlkV2FsbCIsInR5cGUiLCJQcmVmYWIiLCJncmlkUGF0aCIsImNyZWF0ZUdyaWQiLCJwb3NpdGlvbiIsImtpbmQiLCJuZXdHcmlkIiwiaW5zdGFudGlhdGUiLCJmbGFnIiwibnVtcyIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFNpYmxpbmdJbmRleCIsImFuY2hvclgiLCJhbmNob3JZIiwibmV3UG9zaXRpb24iLCJwYXJlbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsInNldFBvc2l0aW9uIiwiY3JlYXRlTWFwIiwiZmxhZ3MiLCJnZXRDb21wb25lbnRzIiwiaSIsIm1hcCIsIkFycmF5IiwieSIsImdyaWRTaXplIiwiaiIsIngiLCJ2MiIsImRhdGEiLCJzdGFydCIsImdyaWROdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsVUFBVSxFQUFFLENBRko7QUFJUkMsSUFBQUEsVUFBVSxFQUFFLENBSko7QUFNUkMsSUFBQUEsU0FBUyxFQUFFLENBTkg7QUFRUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUVSLEVBQUUsQ0FBQ1M7QUFGSCxLQVJGO0FBYVJDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkYsTUFBQUEsSUFBSSxFQUFFUixFQUFFLENBQUNTO0FBRkg7QUFiRixHQUhQOztBQXNCTDs7Ozs7OztBQU9BRSxFQUFBQSxVQUFVLEVBQUUsb0JBQVNDLFFBQVQsRUFBbUJDLElBQW5CLEVBQXlCO0FBQ2pDLFFBQUlDLE9BQU8sR0FBRyxJQUFkLENBRGlDLENBR2pDOztBQUNBLFlBQVFELElBQVI7QUFDSSxXQUFLLENBQUw7QUFDSUMsUUFBQUEsT0FBTyxHQUFHZCxFQUFFLENBQUNlLFdBQUgsQ0FBZSxLQUFLUixRQUFwQixDQUFWO0FBQ0E7O0FBQ0osV0FBSyxDQUFMO0FBQ0lPLFFBQUFBLE9BQU8sR0FBR2QsRUFBRSxDQUFDZSxXQUFILENBQWUsS0FBS0wsUUFBcEIsQ0FBVjtBQUNBO0FBTlIsS0FKaUMsQ0FhakM7OztBQUNBSSxJQUFBQSxPQUFPLENBQUNFLElBQVIsR0FBZUgsSUFBZjtBQUNBQyxJQUFBQSxPQUFPLENBQUNHLElBQVIsR0FBZSxDQUFmO0FBRUEsU0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CTCxPQUFuQixFQWpCaUMsQ0FtQmpDOztBQUNBQSxJQUFBQSxPQUFPLENBQUNNLGVBQVIsQ0FBd0IsQ0FBeEIsRUFwQmlDLENBc0JqQzs7QUFDQU4sSUFBQUEsT0FBTyxDQUFDTyxPQUFSLEdBQWtCLENBQWxCO0FBQ0FQLElBQUFBLE9BQU8sQ0FBQ1EsT0FBUixHQUFrQixDQUFsQixDQXhCaUMsQ0EwQmpDOztBQUNBLFFBQUlDLFdBQVcsR0FBR1QsT0FBTyxDQUFDVSxNQUFSLENBQWVDLG9CQUFmLENBQW9DYixRQUFwQyxDQUFsQjtBQUNBRSxJQUFBQSxPQUFPLENBQUNZLFdBQVIsQ0FBb0JILFdBQXBCO0FBRUEsV0FBT1QsT0FBUDtBQUVILEdBN0RJOztBQWdFTDs7O0FBR0FhLEVBQUFBLFNBQVMsRUFBRSxxQkFBVztBQUNsQixRQUFJQyxLQUFLLEdBQUcsS0FBS1YsSUFBTCxDQUFVVyxhQUFWLENBQXdCN0IsRUFBRSxDQUFDRSxTQUEzQixFQUFzQyxDQUF0QyxDQUFaLENBRGtCLENBQ29DOztBQUV0RCxTQUFJLElBQUk0QixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsRUFBbkIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsV0FBS0MsR0FBTCxDQUFTRCxDQUFULElBQWMsSUFBSUUsS0FBSixFQUFkO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHLEtBQUs1QixVQUFMLEdBQWtCeUIsQ0FBQyxHQUFHLEtBQUtJLFFBQW5DOztBQUNBLFdBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLEVBQW5CLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLFlBQUlDLENBQUMsR0FBRyxLQUFLaEMsVUFBTCxHQUFrQitCLENBQUMsR0FBRyxLQUFLRCxRQUFuQztBQUNBLGFBQUtILEdBQUwsQ0FBU0QsQ0FBVCxFQUFZSyxDQUFaLElBQWlCLEtBQUt4QixVQUFMLENBQWdCWCxFQUFFLENBQUNxQyxFQUFILENBQU1ELENBQU4sRUFBU0gsQ0FBVCxDQUFoQixFQUE2QkwsS0FBSyxDQUFDVSxJQUFOLENBQVdSLENBQVgsRUFBY0ssQ0FBZCxDQUE3QixDQUFqQjtBQUNIO0FBQ0o7QUFFSixHQS9FSTtBQWlGTEksRUFBQUEsS0FqRkssbUJBaUZJO0FBRUwsU0FBS1IsR0FBTCxHQUFXLElBQUlDLEtBQUosRUFBWDtBQUVBLFNBQUtRLE9BQUwsR0FBZSxFQUFmO0FBRUEsU0FBS04sUUFBTCxHQUFnQixLQUFLNUIsU0FBTCxHQUFlLEtBQUtrQyxPQUFwQztBQUVBLFNBQUtiLFNBQUw7QUFDSDtBQTFGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOWKqOaAgeeUn+aIkOaji+ebmFxuICogQHByb3BlcnR5IHtjYy5Ob2RlfSBub2RlIOivpeiEmuacrOaMgui9veeahOiKgueCuVxuICogXG4gKiBAcHJvcGVydHkge051bWJlcn0gdXBwZXJMZWZ0WCDmo4vnm5jlt6bkuIrop5LmqKrlnZDmoIdcbiAqIFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IHVwcGVyTGVmdFkg5qOL55uY5bem5LiK6KeS57q15Z2Q5qCHXG4gKiBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBicm9hZFNpemUg5qOL55uY6L656ZW/XG4gKiBcbiAqIEBwcm9wZXJ0eSB7Y2MuUHJlZmFifSBncmlkV2FsbCDmoLzlrZDpooTliLbkvZPotYTmupAt5aKZ5L2TXG4gKiBcbiAqIEBwcm9wZXJ0eSB7Y2MuUHJlZmFifSBncmlkUGF0aCDmoLzlrZDpooTliLbkvZPotYTmupAt6Lev5b6EXG4gKiBcbiAqIEBwcm9wZXJ0eSB7Y2MuTm9kZVtdfSBtYXAg5YyF5ZCr5omA5pyJ5qC85a2Q55qE5pWw57uEXG4gKiBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBncmlkTnVtIOavj+i+ueagvOWtkOaVsC0t5Zu65a6a5Li6MTBcbiAqIFxuICogQHByb3BlcnR5IHtOdW1iZXJ9IGdyaWRTaXplIOagvOWtkOWkp+Wwj1xuICovXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgICAgIHVwcGVyTGVmdFg6IDAsIFxuXG4gICAgICAgIHVwcGVyTGVmdFk6IDAsIFxuXG4gICAgICAgIGJyb2FkU2l6ZTogMCxcbiAgICAgICBcbiAgICAgICAgZ3JpZFdhbGw6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcblxuICAgICAgICBncmlkUGF0aDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LCAgICAgICAgICAgICAgXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWKqOaAgeeUn+aIkOagvOWtkOW5tuWwhuWFtua3u+WKoOWIsOWcuuaZr+S4rVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Y2MuVjJ9IHBvc2l0aW9uIOeUn+aIkOagvOWtkOeahOS9jee9rlxuICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0ga2luZCDmoLzlrZDnmoTnsbvlnotcbiAgICAgKiBAcmV0dXJucyB7R3JpZH0g55Sf5oiQ5qC85a2Q55qE5byV55SoXG4gICAgICovXG4gICAgY3JlYXRlR3JpZDogZnVuY3Rpb24ocG9zaXRpb24sIGtpbmQpIHtcbiAgICAgICAgdmFyIG5ld0dyaWQgPSBudWxsO1xuXG4gICAgICAgIC8vIOagueaNruagvOWtkOenjeexu+eUn+aIkOiKgueCuVxuICAgICAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICBuZXdHcmlkID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmlkV2FsbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgbmV3R3JpZCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuZ3JpZFBhdGgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gMOS4uuWimSwgMeS4uui3rywgMuS4uueBrywgM+S4uuWPl+aUu+WHu1xuICAgICAgICBuZXdHcmlkLmZsYWcgPSBraW5kO1xuICAgICAgICBuZXdHcmlkLm51bXMgPSAwO1xuXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdHcmlkKTtcblxuICAgICAgICAvLyDorr7nva7moLzlrZDlsYLnuqdcbiAgICAgICAgbmV3R3JpZC5zZXRTaWJsaW5nSW5kZXgoMik7IFxuXG4gICAgICAgIC8vIOS9v+avj+S4quagvOWtkOS7peW3puS4iuinkuS4uumUmueCuVxuICAgICAgICBuZXdHcmlkLmFuY2hvclggPSAwO1xuICAgICAgICBuZXdHcmlkLmFuY2hvclkgPSAxO1xuICAgICAgICBcbiAgICAgICAgLy8g6K6+572u5qC85a2Q5L2N572uXG4gICAgICAgIHZhciBuZXdQb3NpdGlvbiA9IG5ld0dyaWQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc2l0aW9uKTtcbiAgICAgICAgbmV3R3JpZC5zZXRQb3NpdGlvbihuZXdQb3NpdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIG5ld0dyaWQ7XG5cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiDliJvlu7rmo4vnm5hcbiAgICAgKi9cbiAgICBjcmVhdGVNYXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZmxhZ3MgPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50cyhjYy5Db21wb25lbnQpWzFdOyAvLyDlhbPljaHmlbDmja7ohJrmnKzkuIDlrprpnIDmjILlnKjnrKwz5L2N572uXG5cbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMubWFwW2ldID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICB2YXIgeSA9IHRoaXMudXBwZXJMZWZ0WSAtIGkgKiB0aGlzLmdyaWRTaXplO1xuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgeCA9IHRoaXMudXBwZXJMZWZ0WCArIGogKiB0aGlzLmdyaWRTaXplO1xuICAgICAgICAgICAgICAgIHRoaXMubWFwW2ldW2pdID0gdGhpcy5jcmVhdGVHcmlkKGNjLnYyKHgsIHkpLCBmbGFncy5kYXRhW2ldW2pdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcblxuICAgICAgICB0aGlzLm1hcCA9IG5ldyBBcnJheSgpO1xuXG4gICAgICAgIHRoaXMuZ3JpZE51bSA9IDEwO1xuIFxuICAgICAgICB0aGlzLmdyaWRTaXplID0gdGhpcy5icm9hZFNpemUvdGhpcy5ncmlkTnVtO1xuXG4gICAgICAgIHRoaXMuY3JlYXRlTWFwKCk7XG4gICAgfSxcblxufSk7XG4iXX0=