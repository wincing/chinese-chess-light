/**
 * 控制棋子车的组件
 */

cc.Class({
    extends: require("Piece"),

    setflag: function(status, X, Y) {
        var x = X;
        var y = Y;
        var grids = this.node.grids;
   
        // 自身格子
        grids[X][Y].nums += status;
        
        // 向下
        do {
            x++;
            if(x > 9 || grids[x][y].flag == 0) break;
            grids[x][y].nums += status;

        } while (!grids[x][y].hasPiece);
        x = X;

        // 向上
        do {
            x--;
            if(x < 0 || grids[x][y].flag == 0) break;
            grids[x][y].nums += status;

        } while (!grids[x][y].hasPiece);
        x = X;

        // 向左
        do {
            y--;
            if(y < 0 || grids[x][y].flag == 0) break;
            grids[x][y].nums += status;

        } while (!grids[x][y].hasPiece);
        y = Y;

        // 向右
        do {
            y++;
            if(y > 9 || grids[x][y].flag == 0) break;
            grids[x][y].nums += status;

        } while (!grids[x][y].hasPiece);
    },

    // update (dt) {},
});
