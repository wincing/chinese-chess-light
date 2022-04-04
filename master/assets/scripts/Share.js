/**
 * 微信被动分享
 */
cc.Class({
    extends: cc.Component,

    start() {
        wx.showShareMenu({ withShareTicket: true });//开启右上角的分享按钮
    },

    /**
     * 被动分享
     */
    onLoad() {
        //分享按钮事件监听
        cc.loader.loadRes("share", function (err, data) {
                wx.onShareAppMessage(function (res) {
                    return {
                        title: "天黑了，你知道路在哪么？",//分享的标题
                        imageUrl: data.url,
                        success(res) {
                            console.log(res)
                        },
                        fail(res) {
                            console.log(res)
                        }
                    }
                })
        });
    },

});
