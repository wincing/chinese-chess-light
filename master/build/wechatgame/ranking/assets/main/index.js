window.__require=function e(t,n,r){function o(a,c){if(!n[a]){if(!t[a]){var s=a.split("/");if(s=s[s.length-1],!t[s]){var l="function"==typeof __require&&__require;if(!c&&l)return l(s,!0);if(i)return i(s,!0);throw new Error("Cannot find module '"+a+"'")}a=s}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){return o(t[a][1][e]||e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var i="function"==typeof __require&&__require,a=0;a<r.length;a++)o(r[a]);return o}({openData:[function(e,t){"use strict";cc._RF.push(t,"9e8559eL9JK948ZDGtZWeK8","openData"),cc.Class({extends:cc.Component,properties:{content:{default:null,type:cc.Node},item:{default:null,type:cc.Prefab}},onLoad:function(){var e=this;wx.onMessage(function(t){console.log("\u5b50\u57df\u6536\u5230\u4fe1\u606f\uff1a"),console.log(t),"showRank"==t.text?e.getFriendInfo():"clear"==t.text&&e.content.removeAllChildren()})},getFriendInfo:function(){this.friendList=new Array;var e=this;wx.getFriendCloudStorage({keyList:["totalPassed"],success:function(t){for(var n=0;n<t.data.length;n++){var r=t.data[n].nickname,o=t.data[n].avatarUrl,i=0;t.data[n].KVDataList.length&&(i=t.data[n].KVDataList[0].value),e.friendList.push({nickName:r,avatarUrl:o,score:i})}e.createRank(),console.log("\u83b7\u5f97\u597d\u53cb\u5fae\u4fe1\u6570\u636e\u6210\u529f\uff08\u6570\u7ec4\uff09"),console.log(t)},fail:function(e){console.log("\u83b7\u5f97\u597d\u53cb\u5fae\u4fe1\u6570\u636e\u5931\u8d25"),console.log(e)}})},createRank:function(){this.friendList.sort(function(e,t){return t.score-e.score});for(var e=0;e<this.friendList.length;e++){var t=this.friendList[e].nickName,n=this.friendList[e].avatarUrl,r=this.friendList[e].score;this.createItem(e+1,t,n,r)}},createItem:function(e,t,n,r){var o=cc.instantiate(this.item);o.children[0].getComponent(cc.Label).string=String(e),o.children[1].getComponent(cc.Label).string=t,o.children[2].getComponent(cc.Label).string=r,cc.loader.load({url:n,type:"png"},function(e,t){e&&console.error(e),o.children[3].children[0].getComponent(cc.Sprite).spriteFrame=new cc.SpriteFrame(t)}),this.content.addChild(o)}}),cc._RF.pop()},{}]},{},["openData"]);