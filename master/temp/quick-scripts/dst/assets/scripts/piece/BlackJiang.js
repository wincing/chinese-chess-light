
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/piece/BlackJiang.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26e5fyEjH9KIaHn4Lgawqky', 'BlackJiang');
// scripts/piece/BlackJiang.js

"use strict";

/**
 * 控制黑棋将的组件
 */
cc.Class({
  "extends": require("BlackPiece"),
  setflag: function setflag(X, Y) {
    var grids = this.node.grids;
    var dirx = Array(1, 0, 0, 0, -1);
    var diry = Array(0, 1, 0, -1, 0);

    for (var i = 0; i < 5; i++) {
      var x = X + dirx[i];
      var y = Y + diry[i];
      if (x < 0 || x > 9 || y < 0 || y > 9) continue;
      if (grids[x][y].flag == 0) continue;

      if (grids[x][y].hasPiece && grids[x][y].piece.type == 0) {
        grids[x][y].piece.disable = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGllY2VcXEJsYWNrSmlhbmcuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsInJlcXVpcmUiLCJzZXRmbGFnIiwiWCIsIlkiLCJncmlkcyIsIm5vZGUiLCJkaXJ4IiwiQXJyYXkiLCJkaXJ5IiwiaSIsIngiLCJ5IiwiZmxhZyIsImhhc1BpZWNlIiwicGllY2UiLCJ0eXBlIiwiZGlzYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBSUNBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ04sYUFBU0MsT0FBTyxDQUFDLFlBQUQsQ0FEVjtBQUdOQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNyQixRQUFJQyxLQUFLLEdBQUcsS0FBS0MsSUFBTCxDQUFVRCxLQUF0QjtBQUNBLFFBQUlFLElBQUksR0FBR0MsS0FBSyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFDLENBQWQsQ0FBaEI7QUFDQSxRQUFJQyxJQUFJLEdBQUdELEtBQUssQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFDLENBQVgsRUFBYyxDQUFkLENBQWhCOztBQUVBLFNBQUksSUFBSUUsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLENBQW5CLEVBQXNCQSxDQUFDLEVBQXZCLEVBQTJCO0FBQ3ZCLFVBQUlDLENBQUMsR0FBR1IsQ0FBQyxHQUFHSSxJQUFJLENBQUNHLENBQUQsQ0FBaEI7QUFDQSxVQUFJRSxDQUFDLEdBQUdSLENBQUMsR0FBR0ssSUFBSSxDQUFDQyxDQUFELENBQWhCO0FBRUEsVUFBR0MsQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxHQUFHLENBQWIsSUFBa0JDLENBQUMsR0FBRyxDQUF0QixJQUEyQkEsQ0FBQyxHQUFHLENBQWxDLEVBQXFDO0FBQ3JDLFVBQUdQLEtBQUssQ0FBQ00sQ0FBRCxDQUFMLENBQVNDLENBQVQsRUFBWUMsSUFBWixJQUFvQixDQUF2QixFQUEwQjs7QUFFMUIsVUFBR1IsS0FBSyxDQUFDTSxDQUFELENBQUwsQ0FBU0MsQ0FBVCxFQUFZRSxRQUFaLElBQXdCVCxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLEtBQVosQ0FBa0JDLElBQWxCLElBQTBCLENBQXJELEVBQXdEO0FBQ3BEWCxRQUFBQSxLQUFLLENBQUNNLENBQUQsQ0FBTCxDQUFTQyxDQUFULEVBQVlHLEtBQVosQ0FBa0JFLE9BQWxCLEdBQTRCLElBQTVCO0FBQ0g7QUFDSjtBQUNKO0FBbkJLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5o6n5Yi26buR5qOL5bCG55qE57uE5Lu2XG4gKi9cblxuIGNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiByZXF1aXJlKFwiQmxhY2tQaWVjZVwiKSxcblxuICAgIHNldGZsYWc6IGZ1bmN0aW9uKCBYLCBZKSB7XG4gICAgICAgIHZhciBncmlkcyA9IHRoaXMubm9kZS5ncmlkcztcbiAgICAgICAgdmFyIGRpcnggPSBBcnJheSgxLCAwLCAwLCAwLCAtMSk7XG4gICAgICAgIHZhciBkaXJ5ID0gQXJyYXkoMCwgMSwgMCwgLTEsIDApO1xuXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIHZhciB4ID0gWCArIGRpcnhbaV07XG4gICAgICAgICAgICB2YXIgeSA9IFkgKyBkaXJ5W2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih4IDwgMCB8fCB4ID4gOSB8fCB5IDwgMCB8fCB5ID4gOSkgY29udGludWU7XG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5mbGFnID09IDApIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBpZihncmlkc1t4XVt5XS5oYXNQaWVjZSAmJiBncmlkc1t4XVt5XS5waWVjZS50eXBlID09IDApIHtcbiAgICAgICAgICAgICAgICBncmlkc1t4XVt5XS5waWVjZS5kaXNhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==