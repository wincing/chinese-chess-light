/**
 * 动态生成棋盘
 * @property {cc.Node} node 该脚本挂载的节点
 * 
 * @property {Number} upperLeftX 棋盘左上角横坐标
 * 
 * @property {Number} upperLeftY 棋盘左上角纵坐标
 * 
 * @property {Number} broadSize 棋盘边长
 * 
 * @property {cc.Prefab} gridWall 格子预制体资源-墙体
 * 
 * @property {cc.Prefab} gridPath 格子预制体资源-路径
 * 
 * @property {cc.Node[]} map 包含所有格子的数组
 * 
 * @property {Number} gridNum 每边格子数--固定为10
 * 
 * @property {Number} gridSize 格子大小
 */
cc.Class({
    extends: cc.Component,

    properties: {

        upperLeftX: 0, 

        upperLeftY: 0, 

        broadSize: 0,
       
        gridWall: {
            default: null,
            type: cc.Prefab
        },

        gridPath: {
            default: null,
            type: cc.Prefab
        },              
    },

    /**
     * 动态生成格子并将其添加到场景中
     * 
     * @param {cc.V2} position 生成格子的位置
     * @param {Boolean} kind 格子的类型
     * @returns {Grid} 生成格子的引用
     */
    createGrid: function(position, kind) {
        var newGrid = null;

        // 根据格子种类生成节点
        switch (kind) {
            case 0:
                newGrid = cc.instantiate(this.gridWall);
                break;
            case 1:
                newGrid = cc.instantiate(this.gridPath);
                break;
        }

        // 0为墙, 1为路, 2为灯, 3为受攻击
        newGrid.flag = kind;
        newGrid.nums = 0;

        this.node.addChild(newGrid);

        // 设置格子层级
        newGrid.setSiblingIndex(2); 

        // 使每个格子以左上角为锚点
        newGrid.anchorX = 0;
        newGrid.anchorY = 1;
        
        // 设置格子位置
        var newPosition = newGrid.parent.convertToNodeSpaceAR(position);
        newGrid.setPosition(newPosition);

        return newGrid;

    },


    /**
     * 创建棋盘
     */
    createMap: function() {
        var flags = this.node.getComponents(cc.Component)[1]; // 关卡数据脚本一定需挂在第3位置

        for(var i = 0; i < 10; i++) {
            this.map[i] = new Array();
            var y = this.upperLeftY - i * this.gridSize;
            for(var j = 0; j < 10; j++) {
                var x = this.upperLeftX + j * this.gridSize;
                this.map[i][j] = this.createGrid(cc.v2(x, y), flags.data[i][j]);
            }
        }

    },

    start () {

        this.map = new Array();

        this.gridNum = 10;
 
        this.gridSize = this.broadSize/this.gridNum;

        this.createMap();
    },

});
