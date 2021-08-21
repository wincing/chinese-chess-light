"use strict";
cc._RF.push(module, '32100opUblCFY2lX4TyLism', 'BlackMa');
// scripts/piece/BlackMa.js

"use strict";

/**
 * 控制黑棋马的组件
 * 
 */
cc.Class({
  "extends": require("BlackPiece"),
  setflag: function setflag(X, Y) {
    var grids = this.node.grids;
    var dirx = Array(-2, -1, 1, 2, 2, 1, -1, -2);
    var diry = Array(1, 2, 2, 1, -1, -2, -2, -1); // 马脚

    var hinderx = Array(-1, 0, 0, 1, 1, 0, 0, -1);
    var hindery = Array(0, 1, 1, 0, 0, -1, -1, 0); // 周围格子

    for (var i = 0; i < 8; i++) {
      var x = X + dirx[i];
      var y = Y + diry[i];
      var hx = X + hinderx[i];
      var hy = Y + hindery[i];
      if (x < 0 || x > 9 || y < 0 || y > 9) continue;
      if (grids[x][y].flag == 0) continue; // 检查是否绊马脚

      if (hx >= 0 && hx <= 9 && hy >= 0 && hy <= 9 && (grids[hx][hy].flag == 0 || grids[hx][hy].hasPiece)) continue;

      if (grids[x][y].hasPiece && grids[x][y].piece.type == 0) {
        grids[x][y].piece.disable = true;
      }
    }
  }
});

cc._RF.pop();