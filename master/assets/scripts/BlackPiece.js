/**
 * 各种黑棋的基类
 * 
 * @property {Number} node.gx 黑棋的所在格子的行坐标
 * 
 * @property {Number} node.gy 黑棋的所在格子的列坐标
 * 
 * @property {Boolean} node.type 标识棋子种类， 红棋为0， 黑棋为1
 */
cc.Class({
    extends: cc.Component,

    properties: {
        gx: 0,
        gy: 0,
    },
  
    /**
     *  使攻击范围内的红棋失效
     */
    setflag: function(X, Y) {},

    start() {
        this.node.type = 1;

        this.node.gx = this.gx;
        this.node.gy = this.gy;
        
        // 将黑棋固定到格子上
        if(this.node.grids) {
            var grid = this.node.grids[this.gx][this.gy];
            var size = grid.getContentSize();
            grid.hasPiece = true;
            grid.piece = this.node;
            
            this.node.x = grid.x + size.width / 2;
            this.node.y = grid.y - size.height / 2;
        }
    },

});
