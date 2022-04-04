/**
 * 控制棋子士的组件
 */

cc.Class({
    extends: require("Piece"),

    setflag: function(status, X, Y) {
        var grids = this.node.grids;
        var dirx = Array(0, 1, -1, 1, -1);
        var diry = Array(0, -1, 1, 1, -1);

        for(var i = 0; i < 5; i++) {
            var x = X + dirx[i];
            var y = Y + diry[i];
            
            if(x < 0 || x > 9 || y < 0 || y > 9) continue;
            if(grids[x][y].flag == 0) continue;

            grids[x][y].nums += status;
        }
    },
});
