
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR3JpZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50Iiwib25Mb2FkIiwibm9kZSIsIm9uIiwicmVwYWludCIsInNlbGYiLCJmbGFnIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzdGFydCIsImhhc1BpZWNlIiwibnVtIiwicGllY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FBWUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQOztBQUdMOzs7QUFHQUMsRUFBQUEsTUFOSyxvQkFNSztBQUNOLFNBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhLGNBQWIsRUFBNkIsWUFBWTtBQUNyQyxXQUFLQyxPQUFMO0FBQ0gsS0FGRCxFQUVHLElBRkg7QUFHSCxHQVZJOztBQWFMOzs7QUFHQUEsRUFBQUEsT0FBTyxFQUFFLG1CQUFXO0FBQ2hCLFFBQUlDLElBQUksR0FBRyxJQUFYOztBQUVBLFlBQVEsS0FBS0gsSUFBTCxDQUFVSSxJQUFsQjtBQUNJLFdBQUssQ0FBTDtBQUNJUixRQUFBQSxFQUFFLENBQUNTLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixXQUFsQixFQUErQlYsRUFBRSxDQUFDVyxXQUFsQyxFQUErQyxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7QUFDdkVOLFVBQUFBLElBQUksQ0FBQ0gsSUFBTCxDQUFVVSxZQUFWLENBQXVCZCxFQUFFLENBQUNlLE1BQTFCLEVBQWtDRixXQUFsQyxHQUFnREEsV0FBaEQ7QUFDSCxTQUZEO0FBR0E7O0FBQ0osV0FBSyxDQUFMO0FBQ0liLFFBQUFBLEVBQUUsQ0FBQ1MsTUFBSCxDQUFVQyxPQUFWLENBQWtCLFlBQWxCLEVBQWdDVixFQUFFLENBQUNXLFdBQW5DLEVBQWdELFVBQVVDLEdBQVYsRUFBZUMsV0FBZixFQUE0QjtBQUN4RU4sVUFBQUEsSUFBSSxDQUFDSCxJQUFMLENBQVVVLFlBQVYsQ0FBdUJkLEVBQUUsQ0FBQ2UsTUFBMUIsRUFBa0NGLFdBQWxDLEdBQWdEQSxXQUFoRDtBQUNILFNBRkQ7QUFHQTtBQVZSO0FBYUgsR0FoQ0k7QUFrQ0xHLEVBQUFBLEtBbENLLG1CQWtDSTtBQUNMLFNBQUtSLElBQUwsR0FBWSxJQUFaO0FBRUEsU0FBS1MsUUFBTCxHQUFnQixLQUFoQjtBQUVBLFNBQUtDLEdBQUwsR0FBVyxDQUFYO0FBRUEsU0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDSDtBQTFDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOe7hOaIkOaji+ebmOeahOagvOWtkFxuICogXG4gKiBAcHJvcGVydHkge051bWJlcn0gZmxhZyAg5qCH6K+G5qOL5a2Q55qE54q25oCBLCAw5Li65aKZLCAx5Li66LevLCAy5Li654GvXG4gKiBcbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gaGFzUGllY2Ug5qCH6K+G6K+l5qC85a2Q5LiK5piv5ZCm5pyJ5qOL5a2QLCAw5Li65pegLCAx5Li65pyJXG4gKiBcbiAqIEBwcm9wZXJ0eSB7TnVtYmVyfSBudW0gIOeFp+S6ruivpeagvOWtkOeahOaji+WtkOeahOS4quaVsFxuICogXG4gKiBAcHJvcGVydHkge1BpZWNlfSBwaWVjZSDkvY3kuo7moLzlrZDkuIrnmoTmo4vlrZAsIOayoeacieWImeS4um51bGxcbiAqL1xuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgLyoqXG4gICAgICog5b2T5p+Q5Liq5qC85a2Q5pS25Yiw54q25oCB5pu05pS55LqL5Lu2LCDoh6rliqjosIPnlKhyZXBhaW505pa55rOVXG4gICAgICovXG4gICAgb25Mb2FkICgpIHsgICAgICAgIFxuICAgICAgICB0aGlzLm5vZGUub24oXCJmbGFnX2NoYW5nZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yZXBhaW50KCk7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgIH0sXG4gICAgXG4gICAgXG4gICAgLyoqXG4gICAgICog5pu05o2i5qOL5a2Q6IOM5pmvXG4gICAgICovXG4gICAgcmVwYWludDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBzd2l0Y2ggKHRoaXMubm9kZS5mbGFnKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJncmlkL3BhdGhcIiwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKFwiZ3JpZC9saWdodFwiLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgIHRoaXMuZmxhZyA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5oYXNQaWVjZSA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMubnVtID0gMDtcblxuICAgICAgICB0aGlzLnBpZWNlID0gbnVsbDtcbiAgICB9LFxuXG59KTtcbiJdfQ==