"use strict";
cc._RF.push(module, '63a30TpacxENphTQn5oR3DH', 'Shuai');
// scripts/piece/Shuai.js

"use strict";

/**
 * 控制棋子帅的组件
 */
cc.Class({
  "extends": require("Piece"),
  setflag: function setflag(status, X, Y) {
    var grids = this.node.grids;
    var dirx = Array(1, 0, 0, 0, -1);
    var diry = Array(0, 1, 0, -1, 0);

    for (var i = 0; i < 5; i++) {
      var x = X + dirx[i];
      var y = Y + diry[i];
      if (x < 0 || x > 9 || y < 0 || y > 9) continue;
      if (grids[x][y].flag == 0) continue;
      grids[x][y].nums += status;
    }
  }
});

cc._RF.pop();