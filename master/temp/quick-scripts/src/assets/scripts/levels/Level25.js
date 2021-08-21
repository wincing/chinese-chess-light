"use strict";
cc._RF.push(module, 'dd864hhwbxIXqQprpayDwSy', 'Level25');
// scripts/levels/Level25.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // data : [],
    // typde : [cc.Integer],
    // path: [],
    // typde : [cc.Integer],
    data: {
      "default": [],
      type: [cc.Integer],
      visible: false
    },
    path: {
      "default": [],
      type: [cc.Integer],
      visible: false
    }
  },
  start: function start() {
    // 关卡号
    this.index = 25; // 地图

    this.data[0] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.data[1] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
    this.data[2] = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 0);
    this.data[3] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.data[4] = new Array(0, 0, 0, 1, 1, 1, 1, 0, 0, 0);
    this.data[5] = new Array(0, 1, 1, 0, 1, 0, 1, 1, 0, 0);
    this.data[6] = new Array(0, 0, 1, 1, 0, 1, 0, 1, 0, 0);
    this.data[7] = new Array(0, 0, 1, 0, 0, 1, 1, 1, 0, 0);
    this.data[8] = new Array(0, 0, 1, 1, 1, 1, 0, 1, 1, 0);
    this.data[9] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0); // 路径

    this.path[0] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[1] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
    this.path[2] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
    this.path[3] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
    this.path[4] = new Array(0, 0, 0, 1, 1, 1, 1, 0, 0, 0);
    this.path[5] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 0, 0);
    this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
    this.path[7] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 0, 0);
    this.path[8] = new Array(0, 0, 1, 1, 1, 1, 0, 0, 0, 0);
    this.path[9] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
  }
});

cc._RF.pop();