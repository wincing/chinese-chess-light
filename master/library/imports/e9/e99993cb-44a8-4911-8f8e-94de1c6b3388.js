"use strict";
cc._RF.push(module, 'e9999PLRKhJEY+OlN4cazOI', 'Xiang');
// scripts/piece/Xiang.js

"use strict";

/**
 * 控制棋子象的组件
 */
cc.Class({
  "extends": require("Piece"),
  setflag: function setflag(status, X, Y) {
    var grids = this.node.grids;
    var dirx = Array(-2, 2, 2, -2);
    var diry = Array(2, 2, -2, -2); // 象眼

    var hinderx = Array(-1, 1, 1, -1);
    var hindery = Array(1, 1, -1, -1); // 自身格子

    grids[X][Y].nums += status; // 周围格子

    for (var i = 0; i < 4; i++) {
      var x = X + dirx[i];
      var y = Y + diry[i];
      var hx = X + hinderx[i];
      var hy = Y + hindery[i];
      if (x < 0 || x > 9 || y < 0 || y > 9) continue;
      if (grids[x][y].flag == 0) continue; // 检查是否绊象眼

      if (hx >= 0 && hx <= 9 && hy >= 0 && hy <= 9 && (grids[hx][hy].flag == 0 || grids[hx][hy].hasPiece)) continue;
      grids[x][y].nums += status;
    }
  }
});

cc._RF.pop();