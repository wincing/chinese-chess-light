
cc.Class({
    extends: cc.Component,

    properties: {
        content: {
            default: null,
            type: cc.Node,
        },

        item: {
            default: null,
            type: cc.Prefab,
        }
    },


    /**
     * 接受主域消息
     */
    onLoad() {
        var self = this;
        wx.onMessage(function (data){
            console.log('子域收到信息：');
            console.log(data);

            if(data.text == 'showRank') {
                self.getFriendInfo(); // 获取好友信息
            } else if(data.text == 'clear') {
                self.content.removeAllChildren(); // 清空排行榜
            }
        });
    },

    /**
     * 获取好友信息
     */
    getFriendInfo() {
        this.friendList = new Array();
        var self = this;

        wx.getFriendCloudStorage({
            keyList: ['totalPassed'],
            success: (res) => {
                for (var i = 0; i < res.data.length; i++) {
                    // 获取玩家微信名，头像url和通关数
                    var nickName = res.data[i].nickname;
                    var avatarUrl = res.data[i].avatarUrl;
                    var score = 0;
                    if (res.data[i].KVDataList.length)
                        score = res.data[i].KVDataList[0]['value'];
     
                    // 加入到数组中
                    self.friendList.push({
                        nickName: nickName,
                        avatarUrl: avatarUrl,
                        score: score
                    });
                }

                self.createRank(); // 创建列表

                console.log('获得好友微信数据成功（数组）');
                console.log(res);
            },
     
            fail: (res) => {
                console.log('获得好友微信数据失败');
                console.log(res);
            }
    
        });
    },
   
    /**
     * 创建好友列表
     */
    createRank() {
        // 将friendList内部元素进行排序，根据分数来降序排列
        this.friendList.sort((a, b) => {
            return b['score'] - a['score'];
        });

        // 创建item元素
        for(var i = 0; i < this.friendList.length; i++) {
            var nickName = this.friendList[i]['nickName'];
            var avatarUrl = this.friendList[i]['avatarUrl'];
            var score = this.friendList[i]['score'];
            this.createItem(i+1, nickName, avatarUrl, score);
        }
    },

    createItem(index, nickName, avatarUrl, score) {
        var item = cc.instantiate(this.item);  
        // 排名
        item.children[0].getComponent(cc.Label).string = String(index);
        // 微信名
        item.children[1].getComponent(cc.Label).string = nickName;
        // 分数
        item.children[2].getComponent(cc.Label).string = score;
        // 头像
        cc.loader.load({url: avatarUrl, type: 'png'}, (err, texture) => {
            if(err) {
                console.error(err);
            }
            item.children[3].children[0].getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        });
    
        // 添加到content中
        this.content.addChild(item);

    }


});
