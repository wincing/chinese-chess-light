
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQ2hlY2tlckJvYXJkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidXBwZXJMZWZ0WCIsInVwcGVyTGVmdFkiLCJicm9hZFNpemUiLCJncmlkV2FsbCIsInR5cGUiLCJQcmVmYWIiLCJncmlkUGF0aCIsImNyZWF0ZUdyaWQiLCJwb3NpdGlvbiIsImtpbmQiLCJuZXdHcmlkIiwiaW5zdGFudGlhdGUiLCJmbGFnIiwibnVtcyIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFNpYmxpbmdJbmRleCIsImFuY2hvclgiLCJhbmNob3JZIiwibmV3UG9zaXRpb24iLCJwYXJlbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsInNldFBvc2l0aW9uIiwiY3JlYXRlTWFwIiwiZmxhZ3MiLCJnZXRDb21wb25lbnRzIiwiaSIsIm1hcCIsIkFycmF5IiwieSIsImdyaWRTaXplIiwiaiIsIngiLCJ2MiIsImRhdGEiLCJzdGFydCIsImdyaWROdW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsVUFBVSxFQUFFLENBRko7QUFJUkMsSUFBQUEsVUFBVSxFQUFFLENBSko7QUFNUkMsSUFBQUEsU0FBUyxFQUFFLENBTkg7QUFRUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ04saUJBQVMsSUFESDtBQUVOQyxNQUFBQSxJQUFJLEVBQUVSLEVBQUUsQ0FBQ1M7QUFGSCxLQVJGO0FBYVJDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTLElBREg7QUFFTkYsTUFBQUEsSUFBSSxFQUFFUixFQUFFLENBQUNTO0FBRkg7QUFiRixHQUhQOztBQXNCTDs7Ozs7OztBQU9BRSxFQUFBQSxVQUFVLEVBQUUsb0JBQVNDLFFBQVQsRUFBbUJDLElBQW5CLEVBQXlCO0FBQ2pDLFFBQUlDLE9BQU8sR0FBRyxJQUFkLENBRGlDLENBR2pDOztBQUNBLFlBQVFELElBQVI7QUFDSSxXQUFLLENBQUw7QUFDSUMsUUFBQUEsT0FBTyxHQUFHZCxFQUFFLENBQUNlLFdBQUgsQ0FBZSxLQUFLUixRQUFwQixDQUFWO0FBQ0E7O0FBQ0osV0FBSyxDQUFMO0FBQ0lPLFFBQUFBLE9BQU8sR0FBR2QsRUFBRSxDQUFDZSxXQUFILENBQWUsS0FBS0wsUUFBcEIsQ0FBVjtBQUNBO0FBTlIsS0FKaUMsQ0FhakM7OztBQUNBSSxJQUFBQSxPQUFPLENBQUNFLElBQVIsR0FBZUgsSUFBZjtBQUNBQyxJQUFBQSxPQUFPLENBQUNHLElBQVIsR0FBZSxDQUFmO0FBRUEsU0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CTCxPQUFuQixFQWpCaUMsQ0FtQmpDOztBQUNBQSxJQUFBQSxPQUFPLENBQUNNLGVBQVIsQ0FBd0IsQ0FBeEIsRUFwQmlDLENBc0JqQzs7QUFDQU4sSUFBQUEsT0FBTyxDQUFDTyxPQUFSLEdBQWtCLENBQWxCO0FBQ0FQLElBQUFBLE9BQU8sQ0FBQ1EsT0FBUixHQUFrQixDQUFsQixDQXhCaUMsQ0EwQmpDOztBQUNBLFFBQUlDLFdBQVcsR0FBR1QsT0FBTyxDQUFDVSxNQUFSLENBQWVDLG9CQUFmLENBQW9DYixRQUFwQyxDQUFsQjtBQUNBRSxJQUFBQSxPQUFPLENBQUNZLFdBQVIsQ0FBb0JILFdBQXBCO0FBRUEsV0FBT1QsT0FBUDtBQUVILEdBN0RJOztBQWdFTDs7O0FBR0FhLEVBQUFBLFNBQVMsRUFBRSxxQkFBVztBQUNsQixRQUFJQyxLQUFLLEdBQUcsS0FBS1YsSUFBTCxDQUFVVyxhQUFWLENBQXdCN0IsRUFBRSxDQUFDRSxTQUEzQixFQUFzQyxDQUF0QyxDQUFaLENBRGtCLENBQ29DOztBQUV0RCxTQUFJLElBQUk0QixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcsRUFBbkIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsV0FBS0MsR0FBTCxDQUFTRCxDQUFULElBQWMsSUFBSUUsS0FBSixFQUFkO0FBQ0EsVUFBSUMsQ0FBQyxHQUFHLEtBQUs1QixVQUFMLEdBQWtCeUIsQ0FBQyxHQUFHLEtBQUtJLFFBQW5DOztBQUNBLFdBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLEVBQW5CLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBQ3hCLFlBQUlDLENBQUMsR0FBRyxLQUFLaEMsVUFBTCxHQUFrQitCLENBQUMsR0FBRyxLQUFLRCxRQUFuQztBQUNBLGFBQUtILEdBQUwsQ0FBU0QsQ0FBVCxFQUFZSyxDQUFaLElBQWlCLEtBQUt4QixVQUFMLENBQWdCWCxFQUFFLENBQUNxQyxFQUFILENBQU1ELENBQU4sRUFBU0gsQ0FBVCxDQUFoQixFQUE2QkwsS0FBSyxDQUFDVSxJQUFOLENBQVdSLENBQVgsRUFBY0ssQ0FBZCxDQUE3QixDQUFqQjtBQUNIO0FBQ0o7QUFFSixHQS9FSTtBQWlGTEksRUFBQUEsS0FqRkssbUJBaUZJO0FBRUwsU0FBS1IsR0FBTCxHQUFXLElBQUlDLEtBQUosRUFBWDtBQUVBLFNBQUtRLE9BQUwsR0FBZSxFQUFmO0FBRUEsU0FBS04sUUFBTCxHQUFnQixLQUFLNUIsU0FBTCxHQUFlLEtBQUtrQyxPQUFwQztBQUVBLFNBQUtiLFNBQUw7QUFDSDtBQTFGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog5Yqo5oCB55Sf5oiQ5qOL55uYXHJcbiAqIEBwcm9wZXJ0eSB7Y2MuTm9kZX0gbm9kZSDor6XohJrmnKzmjILovb3nmoToioLngrlcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSB1cHBlckxlZnRYIOaji+ebmOW3puS4iuinkuaoquWdkOagh1xyXG4gKiBcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IHVwcGVyTGVmdFkg5qOL55uY5bem5LiK6KeS57q15Z2Q5qCHXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gYnJvYWRTaXplIOaji+ebmOi+uemVv1xyXG4gKiBcclxuICogQHByb3BlcnR5IHtjYy5QcmVmYWJ9IGdyaWRXYWxsIOagvOWtkOmihOWItuS9k+i1hOa6kC3lopnkvZNcclxuICogXHJcbiAqIEBwcm9wZXJ0eSB7Y2MuUHJlZmFifSBncmlkUGF0aCDmoLzlrZDpooTliLbkvZPotYTmupAt6Lev5b6EXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge2NjLk5vZGVbXX0gbWFwIOWMheWQq+aJgOacieagvOWtkOeahOaVsOe7hFxyXG4gKiBcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IGdyaWROdW0g5q+P6L655qC85a2Q5pWwLS3lm7rlrprkuLoxMFxyXG4gKiBcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IGdyaWRTaXplIOagvOWtkOWkp+Wwj1xyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICAgICAgdXBwZXJMZWZ0WDogMCwgXHJcblxyXG4gICAgICAgIHVwcGVyTGVmdFk6IDAsIFxyXG5cclxuICAgICAgICBicm9hZFNpemU6IDAsXHJcbiAgICAgICBcclxuICAgICAgICBncmlkV2FsbDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBncmlkUGF0aDoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgICB9LCAgICAgICAgICAgICAgXHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yqo5oCB55Sf5oiQ5qC85a2Q5bm25bCG5YW25re75Yqg5Yiw5Zy65pmv5LitXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7Y2MuVjJ9IHBvc2l0aW9uIOeUn+aIkOagvOWtkOeahOS9jee9rlxyXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBraW5kIOagvOWtkOeahOexu+Wei1xyXG4gICAgICogQHJldHVybnMge0dyaWR9IOeUn+aIkOagvOWtkOeahOW8leeUqFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVHcmlkOiBmdW5jdGlvbihwb3NpdGlvbiwga2luZCkge1xyXG4gICAgICAgIHZhciBuZXdHcmlkID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8g5qC55o2u5qC85a2Q56eN57G755Sf5oiQ6IqC54K5XHJcbiAgICAgICAgc3dpdGNoIChraW5kKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIG5ld0dyaWQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmdyaWRXYWxsKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICBuZXdHcmlkID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmlkUGF0aCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIDDkuLrlopksIDHkuLrot68sIDLkuLrnga8sIDPkuLrlj5fmlLvlh7tcclxuICAgICAgICBuZXdHcmlkLmZsYWcgPSBraW5kO1xyXG4gICAgICAgIG5ld0dyaWQubnVtcyA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChuZXdHcmlkKTtcclxuXHJcbiAgICAgICAgLy8g6K6+572u5qC85a2Q5bGC57qnXHJcbiAgICAgICAgbmV3R3JpZC5zZXRTaWJsaW5nSW5kZXgoMik7IFxyXG5cclxuICAgICAgICAvLyDkvb/mr4/kuKrmoLzlrZDku6Xlt6bkuIrop5LkuLrplJrngrlcclxuICAgICAgICBuZXdHcmlkLmFuY2hvclggPSAwO1xyXG4gICAgICAgIG5ld0dyaWQuYW5jaG9yWSA9IDE7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g6K6+572u5qC85a2Q5L2N572uXHJcbiAgICAgICAgdmFyIG5ld1Bvc2l0aW9uID0gbmV3R3JpZC5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIocG9zaXRpb24pO1xyXG4gICAgICAgIG5ld0dyaWQuc2V0UG9zaXRpb24obmV3UG9zaXRpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3R3JpZDtcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIm+W7uuaji+ebmFxyXG4gICAgICovXHJcbiAgICBjcmVhdGVNYXA6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBmbGFncyA9IHRoaXMubm9kZS5nZXRDb21wb25lbnRzKGNjLkNvbXBvbmVudClbMV07IC8vIOWFs+WNoeaVsOaNruiEmuacrOS4gOWumumcgOaMguWcqOesrDPkvY3nva5cclxuXHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5tYXBbaV0gPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICAgICAgdmFyIHkgPSB0aGlzLnVwcGVyTGVmdFkgLSBpICogdGhpcy5ncmlkU2l6ZTtcclxuICAgICAgICAgICAgZm9yKHZhciBqID0gMDsgaiA8IDEwOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gdGhpcy51cHBlckxlZnRYICsgaiAqIHRoaXMuZ3JpZFNpemU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFtpXVtqXSA9IHRoaXMuY3JlYXRlR3JpZChjYy52Mih4LCB5KSwgZmxhZ3MuZGF0YVtpXVtqXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMubWFwID0gbmV3IEFycmF5KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZ3JpZE51bSA9IDEwO1xyXG4gXHJcbiAgICAgICAgdGhpcy5ncmlkU2l6ZSA9IHRoaXMuYnJvYWRTaXplL3RoaXMuZ3JpZE51bTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVNYXAoKTtcclxuICAgIH0sXHJcblxyXG59KTtcclxuIl19