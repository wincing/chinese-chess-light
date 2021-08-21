cc.Class({
    extends: cc.Component,

    properties: {
        SubContextView: {
            default: null,
            type: cc.Node,
            serializable: true
        }
    },

    start() {
        this.rankingPanel = this.SubContextView.parent;
        this.rankingPanel.active = false;
        this.SubContextView.active = false;
    },

    show() {
        this.SubContextView.active = true;
        this.rankingPanel.active = true;
        // 判断是否是微信平台
        if(window['wx']) {
            // 给子域发送消息
            var openDataContext = wx.getOpenDataContext();
            openDataContext.postMessage({
                text:'showRank', // 在子域中调用该函数
            });
        }
    },

    hide() {
        this.SubContextView.active = false;
        this.rankingPanel.active = false;  
        // 判断是否是微信平台
        if(window['wx']) {
            // 给子域发送消息
            var openDataContext = wx.getOpenDataContext();
            openDataContext.postMessage({
                text:'clear', // 清空排行榜
            });
        }  
    }

});
