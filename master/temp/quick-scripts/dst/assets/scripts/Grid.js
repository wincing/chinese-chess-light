
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Grid.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '299a92UlGZLEYk+Sgvg7yu+', 'Grid');
// scripts/Grid.js

"use strict";

/**
 * 组成棋盘的格子
 * 
 * @property {Number} flag  标识棋子的状态, 0为墙, 1为路, 2为灯
 * 
 * @property {Boolean} hasPiece 标识该格子上是否有棋子, 0为无, 1为有
 * 
 * @property {Number} num  照亮该格子的棋子的个数
 * 
 * @property {Piece} piece 位于格子上的棋子, 没有则为null
 */
cc.Class({
  "extends": cc.Component,

  /**
   * 当某个格子收到状态更改事件, 自动调用repaint方法
   */
  onLoad: function onLoad() {
    this.node.on("flag_changed", function () {
      this.repaint();
    }, this);
  },

  /**
   * 更换棋子背景
   */
  repaint: function repaint() {
    var self = this;

    switch (this.node.flag) {
      case 1:
        cc.loader.loadRes("grid/path", cc.SpriteFrame, function (err, spriteFrame) {
          self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        break;

      case 2:
        cc.loader.loadRes("grid/light", cc.SpriteFrame, function (err, spriteFrame) {
          self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });
        break;
    }
  },
  start: function start() {
    this.flag = null;
    this.hasPiece = false;
    this.num = 0;
    this.piece = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JpZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwibm9kZSIsIm9uIiwicmVwYWludCIsInNlbGYiLCJmbGFnIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzdGFydCIsImhhc1BpZWNlIiwibnVtIiwicGllY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBWUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQOztBQUdMOzs7QUFHQUMsRUFBQUEsTUFOSyxvQkFNSztBQUNOLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLGNBQWIsRUFBNkIsWUFBWTtBQUNyQyxXQUFLQyxPQUFMO0FBQ0gsS0FGRCxFQUVHLElBRkg7QUFHSCxHQVZJOztBQWFMOzs7QUFHQUEsRUFBQUEsT0FBTyxFQUFFLG1CQUFXO0FBQ2hCLFFBQUlDLElBQUksR0FBRyxJQUFYOztBQUVBLFlBQVEsS0FBS0gsSUFBTCxDQUFVSSxJQUFsQjtBQUNJLFdBQUssQ0FBTDtBQUNJUixRQUFBQSxFQUFFLENBQUNTLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixXQUFsQixFQUErQlYsRUFBRSxDQUFDVyxXQUFsQyxFQUErQyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7QUFDdkVOLFVBQUFBLElBQUksQ0FBQ0gsSUFBTCxDQUFVVSxZQUFWLENBQXVCZCxFQUFFLENBQUNlLE1BQTFCLEVBQWtDRixXQUFsQyxHQUFnREEsV0FBaEQ7QUFDSCxTQUZEO0FBR0E7O0FBQ0osV0FBSyxDQUFMO0FBQ0liLFFBQUFBLEVBQUUsQ0FBQ1MsTUFBSCxDQUFVQyxPQUFWLENBQWtCLFlBQWxCLEVBQWdDVixFQUFFLENBQUNXLFdBQW5DLEVBQWdELFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtBQUN4RU4sVUFBQUEsSUFBSSxDQUFDSCxJQUFMLENBQVVVLFlBQVYsQ0FBdUJkLEVBQUUsQ0FBQ2UsTUFBMUIsRUFBa0NGLFdBQWxDLEdBQWdEQSxXQUFoRDtBQUNILFNBRkQ7QUFHQTtBQVZSO0FBYUgsR0FoQ0k7QUFrQ0xHLEVBQUFBLEtBbENLLG1CQWtDSTtBQUNMLFNBQUtSLElBQUwsR0FBWSxJQUFaO0FBRUEsU0FBS1MsUUFBTCxHQUFnQixLQUFoQjtBQUVBLFNBQUtDLEdBQUwsR0FBVyxDQUFYO0FBRUEsU0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDSDtBQTFDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICog57uE5oiQ5qOL55uY55qE5qC85a2QXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge051bWJlcn0gZmxhZyAg5qCH6K+G5qOL5a2Q55qE54q25oCBLCAw5Li65aKZLCAx5Li66LevLCAy5Li654GvXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge0Jvb2xlYW59IGhhc1BpZWNlIOagh+ivhuivpeagvOWtkOS4iuaYr+WQpuacieaji+WtkCwgMOS4uuaXoCwgMeS4uuaciVxyXG4gKiBcclxuICogQHByb3BlcnR5IHtOdW1iZXJ9IG51bSAg54Wn5Lqu6K+l5qC85a2Q55qE5qOL5a2Q55qE5Liq5pWwXHJcbiAqIFxyXG4gKiBAcHJvcGVydHkge1BpZWNlfSBwaWVjZSDkvY3kuo7moLzlrZDkuIrnmoTmo4vlrZAsIOayoeacieWImeS4um51bGxcclxuICovXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlvZPmn5DkuKrmoLzlrZDmlLbliLDnirbmgIHmm7TmlLnkuovku7YsIOiHquWKqOiwg+eUqHJlcGFpbnTmlrnms5VcclxuICAgICAqL1xyXG4gICAgb25Mb2FkICgpIHsgICAgICAgIFxyXG4gICAgICAgIHRoaXMubm9kZS5vbihcImZsYWdfY2hhbmdlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVwYWludCgpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gICAgXHJcbiAgICAvKipcclxuICAgICAqIOabtOaNouaji+WtkOiDjOaZr1xyXG4gICAgICovXHJcbiAgICByZXBhaW50OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5ub2RlLmZsYWcpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJncmlkL3BhdGhcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhcImdyaWQvbGlnaHRcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLmZsYWcgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmhhc1BpZWNlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMubnVtID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5waWVjZSA9IG51bGw7XHJcbiAgICB9LFxyXG5cclxufSk7XHJcbiJdfQ==