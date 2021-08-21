"use strict";
cc._RF.push(module, '78cb6e05FRC17M1u5Qoseiy', 'Pao');
// scripts/piece/Pao.js

"use strict";

/**
 * 控制棋子炮的组件
 */
cc.Class({
  "extends": require("Piece"),
  setflag: function setflag(status, X, Y) {
    var x = X;
    var y = Y;
    var grids = this.node.grids; // 自身格子

    grids[X][Y].nums += status; // ---------------向下----------------

    do {
      x++;
    } while (x >= 0 && x <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);

    do {
      x++;
      if (x > 9 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);

    x = X; // ---------------向上----------------

    do {
      x--;
    } while (x >= 0 && x <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);

    do {
      x--;
      if (x < 0 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);

    x = X; // ---------------向左----------------

    do {
      y--;
    } while (y >= 0 && y <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);

    do {
      y--;
      if (y < 0 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);

    y = Y; // ---------------向右----------------

    do {
      y++;
    } while (y >= 0 && y <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);

    do {
      y++;
      if (y > 9 || grids[x][y].flag == 0) break;
      grids[x][y].nums += status;
    } while (!grids[x][y].hasPiece);
  }
});

cc._RF.pop();