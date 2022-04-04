/**
 * 管理所有棋子的类
 * 
 * @property {cc.Node[]} map 存所有格子引用的数组
 * 
 * @property {cc.Node[]} pieces 存所有棋子引用的数组
 */
cc.Class({

    extends: cc.Component,

    /**
     * 初始化
     */
    start: function () {
        this.pieces = [];
        this.pieces = this.node.getChildren();

        // 获取所有格子对象的引用
        this.map = this.node.parent.getComponent("CheckerBoard").map;
        
        // 将每个格子的引用传递到棋子上
        for(var i in this.pieces) {
            this.pieces[i].grids = this.map;
        }

    },

    /**
     * 根据格子的状态点亮格子
     */
    enlighten: function() {
        var grids = this.map;
        for(var i = 0; i < 10; i++) {
            for(var j = 0; j < 10; j++){
                var grid = grids[i][j];
            
                if(grid.flag == 0) continue;

                if(grid.nums > 0) {
                    grid.flag = 2;
                } else {
                    grid.flag = 1;
                }

                // 发送事件信息，调用repaint方法
                grid.emit("flag_changed"); 
            }
        }
    },
    

    /**
     * 通关后禁止所有棋子的脚本
     */
    stopAction: function() {
        for(var i in this.pieces) {
            this.pieces[i].getComponents(cc.Component)[1].destroy();
        }
    },

     /**
     * 检查是否通关
     * @returns {Boolean} 通关返回true, 反之返回false
     */
    checkPass: function() {
        var canvas = cc.find('Canvas');
        var path = canvas.getComponents(cc.Component)[1].path;
        var grids = this.map;

        for(var i = 0; i < 10; i++) {
            for(var j = 0; j < 10; j++){
                if(path[i][j] == 1 && grids[i][j].flag != 2) {
                    return false;
                }
            }
        }
        return true;
    },
    
    /**
     * 过关动画呈现
     */
    show: function() {
        var canvas = cc.find('Canvas');
        var grids = this.map;
        var path = canvas.getComponents(cc.Component)[1].path;

        // 查找起始点
        var begin = function() {
            for(var i = 0; i < 10; i++ ) {
                if(path[9][i] == 1) return cc.v2(9, i); 
            }
            for(var i = 9; i >= 0; i-- ) {
                if(path[i][0] == 1) return cc.v2(i, 0); 
            }

            for(var i = 0; i < 10; i++ ) {
                if(path[0][i] == 1) return cc.v2(0, i); 
            }
            for(var i = 0; i < 10; i++ ) {
                if(path[i][9] == 1) return cc.v2(i, 9); 
            }
            return null;
        }();

        // 顺序获取路径上每格
        var dirx = new Array(0, 1, 0, -1);
        var diry = new Array(1, 0, -1, 0);
        var vist = new Array();
        var paint = new Array();

        vist[begin] = true;
        for(var nx = begin.x, ny = begin.y;;) {
            paint.push(grids[nx][ny]);

            var flag = false;
            for(var i = 0; i < 4; i++) {
                var x = nx + dirx[i];
                var y = ny + diry[i];
                var t = cc.v2(x, y);
                if(x < 10 && x >= 0 && y < 10 && y >= 0 && 
                    path[x][y] == 1 && !vist.hasOwnProperty(t)) {
                    vist[t] = true;
                    nx = x, ny = y;
                    flag = true;
                    break;
                }
            }
            // 当前已经是最后一个格子
            if(!flag) break;
        }

        // 更改格子背景
        cc.loader.loadRes("grid/pass", cc.SpriteFrame, function (err, spriteFrame) {

            for(var index in paint) {
                (function(index, obj, pic) {
                    // 通过回调函数间隔更换背景
                    obj.getComponent('Grid').scheduleOnce(() => {
                        obj.getComponent(cc.Sprite).spriteFrame = pic;
                    }, index * 0.018);

                })(index, paint[index], spriteFrame); 
                
            }
        });
    },

    /**
     * 通关后执行行为
     */
    passedAction: function() {
        // 禁止棋子拖动
        this.stopAction();

        // 过关弹窗
        var self = this.node;
        cc.loader.loadRes("alert", cc.Prefab, function(err, prefab) {
            var alert =  cc.instantiate(prefab);
            self.parent.addChild(alert);
        
            alert.setPosition(cc.v2(0, -452.5));
        });

        this.show();

        // 通关音效
        cc.loader.loadRes("music/pass", cc.AudioClip, function (err, clip) {
            cc.audioEngine.play(clip, false, 1);
        });

        // 加载文字科普
        cc.loader.loadRes("describe/1", cc.Prefab, function(err, prefab) {
            var alert =  cc.instantiate(prefab);
            // 设置节点层级在最上层
            alert.zIndex = 100;
            self.parent.addChild(alert);
            alert.setPosition(cc.v2(100, -100));
        });

        // 禁用帮助按钮
        if(cc.find('Canvas/TipButton'))
            cc.find('Canvas/TipButton').active = false;

        // 记录通过的关卡到缓存
        var canvas = cc.find('Canvas');
        var index = canvas.getComponents(cc.Component)[1].index;
        cc.sys.localStorage.setItem('Level' + index, true);

        // 更新缓存通关总数
        var cnt = 0;
        for(var i = 1; i <= 45; i++) {
            if(cc.sys.localStorage.getItem('Level' + i)) {
                cnt++;
            }
        }
        var pastCnt = cc.sys.localStorage.getItem('totalPassed');
        if(pastCnt == null && pastCnt < cnt) {
            cc.sys.localStorage.setItem('totalPassed', cnt);
        }

        // TX云存储当前用户的总过关数
        if (window['wx']){
            var kvDataList = new Array();
            kvDataList.push({
                //标签 存储的当前游戏种类的标签
                key: 'totalPassed',
                value: String(cnt),
            });

            wx.setUserCloudStorage({
                KVDataList:kvDataList,
                success(e){
                    console.log('向wx存储用户数据成功');
                    console.log(e);
                },
                fail(e){
                    console.log('向wx存储用户数据失败');
                    console.log(e);
                }
            });
        }
    },

    /**
     * 更新所有棋子
     */
    updateAll: function() {

        // 重置方格
        for(var i = 0; i < 10; i++) {
            for(var j = 0; j < 10; j++) {
                this.map[i][j].nums = 0;
            }
        }   

        // 将棋盘内所有红棋设为生效
        for(var i in this.pieces) {
            var piece = this.pieces[i];
            if(piece.type == 0 && piece.isInRange) {
                piece.disable = false;
            }
        }

        // 更新黑棋以禁用受攻击的红棋
        for(var i in this.pieces) {
            var piece = this.pieces[i];
            if(piece.type == 1) {
                piece.getComponents(cc.Component)[1].setflag(piece.gx, piece.gy);
            }
        }

        // 更新红棋
        for(var i in this.pieces) {
            var piece = this.pieces[i];
            if(piece.type == 0 && piece.isInRange && piece.disable == false) {
                piece.getComponents(cc.Component)[1].setflag(1, piece.gx, piece.gy);
            }
        }
    },
});
