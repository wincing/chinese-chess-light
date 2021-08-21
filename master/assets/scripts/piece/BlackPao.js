/**
 * 控制黑棋炮的组件
 */

 cc.Class({
    extends: require("BlackPiece"),

    setflag: function(X, Y) {
        var x = X;
        var y = Y;
        var grids = this.node.grids;
        
        // ---------------向下----------------
        do {
            x++;
        } while (x >=0 && x <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);
        x++;

        while(x <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) x++;

        if(x <= 9 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
            grids[x][y].piece.disable = true;
        }
        x = X;

        // ---------------向上----------------
        do {
            x--;
        } while (x >=0 && x <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);
        x--;

        while(x >= 0 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) x--;

        if(x >= 0 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
            grids[x][y].piece.disable = true;
        }
        x = X;

        // ---------------向左----------------
        do {
            y--;
        } while (y >=0 && y <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);
        y--;

        while(y >= 0 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) y--;

        if(y >= 0 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
            grids[x][y].piece.disable = true;
        }
        y = Y;

        // ---------------向右----------------
        do {
            y++;
        } while (y >=0 && y <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece);
        y++;

        while(y <= 9 && grids[x][y].flag != 0 && !grids[x][y].hasPiece) y++;

        if(y <= 9 && grids[x][y].flag != 0 && grids[x][y].hasPiece) {
            grids[x][y].piece.disable = true;
        }
    },

    // update (dt) {},
});
