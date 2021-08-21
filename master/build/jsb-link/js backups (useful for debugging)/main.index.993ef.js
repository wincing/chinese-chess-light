window.__require = function t(a, e, r) {
function i(s, h) {
if (!e[s]) {
if (!a[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!a[c]) {
var p = "function" == typeof __require && __require;
if (!h && p) return p(c, !0);
if (n) return n(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var y = e[s] = {
exports: {}
};
a[s][0].call(y.exports, function(t) {
return i(a[s][1][t] || t);
}, y, y.exports, t, a, e, r);
}
return e[s].exports;
}
for (var n = "function" == typeof __require && __require, s = 0; s < r.length; s++) i(r[s]);
return i;
}({
AudioManager: [ function(t, a) {
"use strict";
cc._RF.push(a, "51288LLlEdIwJBI9hXzYryK", "AudioManager");
cc.Class({
extends: cc.Component,
properties: {
bgMusic: {
default: null,
type: cc.AudioClip
}
},
onLoad: function() {
cc.game.addPersistRootNode(this.node);
},
click: function() {
this.flag ^= 1;
1 == this.flag ? this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, !0, .06) : cc.audioEngine.pause(this.bgMusicChannel);
},
start: function() {
this.flag = 1;
this.bgMusicChannel = cc.audioEngine.play(this.bgMusic, !0, .06);
}
});
cc._RF.pop();
}, {} ],
Bing: [ function(t, a) {
"use strict";
cc._RF.push(a, "5a4b66W9PJForDh4hEJUJZ3", "Bing");
cc.Class({
extends: t("Piece"),
setflag: function(t, a, e) {
for (var r = this.node.grids, i = Array(0, 0, 0, -1), n = Array(1, 0, -1, 0), s = 0; s < 4; s++) {
var h = a + i[s], c = e + n[s];
h < 0 || h > 9 || c < 0 || c > 9 || 0 != r[h][c].flag && (r[h][c].nums += t);
}
}
});
cc._RF.pop();
}, {
Piece: "Piece"
} ],
BlackChe: [ function(t, a) {
"use strict";
cc._RF.push(a, "00581o/TGBAnbfjvi5VVeJW", "BlackChe");
cc.Class({
extends: t("BlackPiece"),
setflag: function(t, a) {
var e = t, r = a, i = this.node.grids;
e++;
for (;e <= 9 && 0 != i[e][r].flag && !i[e][r].hasPiece; ) e++;
e <= 9 && 0 != i[e][r].flag && i[e][r].hasPiece && (i[e][r].piece.disable = !0);
e = t;
e--;
for (;e >= 0 && 0 != i[e][r].flag && !i[e][r].hasPiece; ) e--;
e >= 0 && 0 != i[e][r].flag && i[e][r].hasPiece && (i[e][r].piece.disable = !0);
e = t;
r--;
for (;r >= 0 && 0 != i[e][r].flag && !i[e][r].hasPiece; ) r--;
r >= 0 && 0 != i[e][r].flag && i[e][r].hasPiece && (i[e][r].piece.disable = !0);
r = a;
r++;
for (;r <= 9 && 0 != i[e][r].flag && !i[e][r].hasPiece; ) r++;
r <= 9 && 0 != i[e][r].flag && i[e][r].hasPiece && (i[e][r].piece.disable = !0);
r = a;
}
});
cc._RF.pop();
}, {
BlackPiece: "BlackPiece"
} ],
BlackJiang: [ function(t, a) {
"use strict";
cc._RF.push(a, "26e5fyEjH9KIaHn4Lgawqky", "BlackJiang");
cc.Class({
extends: t("BlackPiece"),
setflag: function(t, a) {
for (var e = this.node.grids, r = Array(1, 0, 0, 0, -1), i = Array(0, 1, 0, -1, 0), n = 0; n < 5; n++) {
var s = t + r[n], h = a + i[n];
s < 0 || s > 9 || h < 0 || h > 9 || 0 != e[s][h].flag && e[s][h].hasPiece && 0 == e[s][h].piece.type && (e[s][h].piece.disable = !0);
}
}
});
cc._RF.pop();
}, {
BlackPiece: "BlackPiece"
} ],
BlackMa: [ function(t, a) {
"use strict";
cc._RF.push(a, "32100opUblCFY2lX4TyLism", "BlackMa");
cc.Class({
extends: t("BlackPiece"),
setflag: function(t, a) {
for (var e = this.node.grids, r = Array(-2, -1, 1, 2, 2, 1, -1, -2), i = Array(1, 2, 2, 1, -1, -2, -2, -1), n = Array(-1, 0, 0, 1, 1, 0, 0, -1), s = Array(0, 1, 1, 0, 0, -1, -1, 0), h = 0; h < 8; h++) {
var c = t + r[h], p = a + i[h], y = t + n[h], d = a + s[h];
c < 0 || c > 9 || p < 0 || p > 9 || 0 != e[c][p].flag && (y >= 0 && y <= 9 && d >= 0 && d <= 9 && (0 == e[y][d].flag || e[y][d].hasPiece) || e[c][p].hasPiece && 0 == e[c][p].piece.type && (e[c][p].piece.disable = !0));
}
}
});
cc._RF.pop();
}, {
BlackPiece: "BlackPiece"
} ],
BlackPao: [ function(t, a) {
"use strict";
cc._RF.push(a, "4fc219oiMBB0rWaI24ZJnsX", "BlackPao");
cc.Class({
extends: t("BlackPiece"),
setflag: function(t, a) {
var e = t, r = a, i = this.node.grids;
do {
e++;
} while (e >= 0 && e <= 9 && 0 != i[e][r].flag && !i[e][r].hasPiece);
e++;
for (;e <= 9 && 0 != i[e][r].flag && !i[e][r].hasPiece; ) e++;
e <= 9 && 0 != i[e][r].flag && i[e][r].hasPiece && (i[e][r].piece.disable = !0);
e = t;
do {
e--;
} while (e >= 0 && e <= 9 && 0 != i[e][r].flag && !i[e][r].hasPiece);
e--;
for (;e >= 0 && 0 != i[e][r].flag && !i[e][r].hasPiece; ) e--;
e >= 0 && 0 != i[e][r].flag && i[e][r].hasPiece && (i[e][r].piece.disable = !0);
e = t;
do {
r--;
} while (r >= 0 && r <= 9 && 0 != i[e][r].flag && !i[e][r].hasPiece);
r--;
for (;r >= 0 && 0 != i[e][r].flag && !i[e][r].hasPiece; ) r--;
r >= 0 && 0 != i[e][r].flag && i[e][r].hasPiece && (i[e][r].piece.disable = !0);
r = a;
do {
r++;
} while (r >= 0 && r <= 9 && 0 != i[e][r].flag && !i[e][r].hasPiece);
r++;
for (;r <= 9 && 0 != i[e][r].flag && !i[e][r].hasPiece; ) r++;
r <= 9 && 0 != i[e][r].flag && i[e][r].hasPiece && (i[e][r].piece.disable = !0);
}
});
cc._RF.pop();
}, {
BlackPiece: "BlackPiece"
} ],
BlackPiece: [ function(t, a) {
"use strict";
cc._RF.push(a, "73550kheWRAf4ekXzYBsm/u", "BlackPiece");
cc.Class({
extends: cc.Component,
properties: {
gx: 0,
gy: 0
},
setflag: function() {},
start: function() {
this.node.type = 1;
this.node.gx = this.gx;
this.node.gy = this.gy;
if (this.node.grids) {
var t = this.node.grids[this.gx][this.gy], a = t.getContentSize();
t.hasPiece = !0;
t.piece = this.node;
this.node.x = t.x + a.width / 2;
this.node.y = t.y - a.height / 2;
}
}
});
cc._RF.pop();
}, {} ],
BlackShi: [ function(t, a) {
"use strict";
cc._RF.push(a, "f9a95jKRz5MUJZQIFuzhzK4", "BlackShi");
cc.Class({
extends: t("BlackPiece"),
setflag: function(t, a) {
for (var e = this.node.grids, r = Array(0, 1, -1, 1, -1), i = Array(0, -1, 1, 1, -1), n = 0; n < 5; n++) {
var s = t + r[n], h = a + i[n];
s < 0 || s > 9 || h < 0 || h > 9 || 0 != e[s][h].flag && e[s][h].hasPiece && 0 == e[s][h].piece.type && (e[s][h].piece.disable = !0);
}
}
});
cc._RF.pop();
}, {
BlackPiece: "BlackPiece"
} ],
BlackXiang: [ function(t, a) {
"use strict";
cc._RF.push(a, "337cf02nLhPhqbb8D3E7Oro", "BlackXiang");
cc.Class({
extends: t("BlackPiece"),
setflag: function(t, a) {
for (var e = this.node.grids, r = Array(-2, 2, 2, -2), i = Array(2, 2, -2, -2), n = Array(-1, 1, 1, -1), s = Array(1, 1, -1, -1), h = 0; h < 4; h++) {
var c = t + r[h], p = a + i[h], y = t + n[h], d = a + s[h];
c < 0 || c > 9 || p < 0 || p > 9 || 0 != e[c][p].flag && (y >= 0 && y <= 9 && d >= 0 && d <= 9 && (0 == e[y][d].flag || e[y][d].hasPiece) || e[c][p].hasPiece && 0 == e[c][p].piece.type && (e[c][p].piece.disable = !0));
}
}
});
cc._RF.pop();
}, {
BlackPiece: "BlackPiece"
} ],
BlackZu: [ function(t, a) {
"use strict";
cc._RF.push(a, "316aebOFeBEbaSQVzVlveLA", "BlackZu");
cc.Class({
extends: t("BlackPiece"),
setflag: function(t, a) {
for (var e = this.node.grids, r = Array(0, 0, 0, 1), i = Array(1, 0, -1, 0), n = 0; n < 4; n++) {
var s = t + r[n], h = a + i[n];
s < 0 || s > 9 || h < 0 || h > 9 || 0 != e[s][h].flag && e[s][h].hasPiece && 0 == e[s][h].piece.type && (e[s][h].piece.disable = !0);
}
}
});
cc._RF.pop();
}, {
BlackPiece: "BlackPiece"
} ],
ButtonMusic: [ function(t, a) {
"use strict";
cc._RF.push(a, "4b359ASVqJMzod+Qxu9Bf+J", "ButtonMusic");
cc.Class({
extends: cc.Component,
properties: {
buttonSound: {
type: cc.AudioClip,
default: null
}
},
start: function() {},
Sound: function() {
cc.audioEngine.play(this.buttonSound, !1, .4);
}
});
cc._RF.pop();
}, {} ],
CheckerBoard: [ function(t, a) {
"use strict";
cc._RF.push(a, "cb8aa0QlV1B8r2v5UcFkv4Q", "CheckerBoard");
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
}
},
createGrid: function(t, a) {
var e = null;
switch (a) {
case 0:
e = cc.instantiate(this.gridWall);
break;

case 1:
e = cc.instantiate(this.gridPath);
}
e.flag = a;
e.nums = 0;
this.node.addChild(e);
e.setSiblingIndex(2);
e.anchorX = 0;
e.anchorY = 1;
var r = e.parent.convertToNodeSpaceAR(t);
e.setPosition(r);
return e;
},
createMap: function() {
for (var t = this.node.getComponents(cc.Component)[1], a = 0; a < 10; a++) {
this.map[a] = new Array();
for (var e = this.upperLeftY - a * this.gridSize, r = 0; r < 10; r++) {
var i = this.upperLeftX + r * this.gridSize;
this.map[a][r] = this.createGrid(cc.v2(i, e), t.data[a][r]);
}
}
},
start: function() {
this.map = new Array();
this.gridNum = 10;
this.gridSize = this.broadSize / this.gridNum;
this.createMap();
}
});
cc._RF.pop();
}, {} ],
Che: [ function(t, a) {
"use strict";
cc._RF.push(a, "67cfcg2fc9O9obTYzjFST4w", "Che");
cc.Class({
extends: t("Piece"),
setflag: function(t, a, e) {
var r = a, i = e, n = this.node.grids;
n[a][e].nums += t;
do {
if (++r > 9 || 0 == n[r][i].flag) break;
n[r][i].nums += t;
} while (!n[r][i].hasPiece);
r = a;
do {
if (--r < 0 || 0 == n[r][i].flag) break;
n[r][i].nums += t;
} while (!n[r][i].hasPiece);
r = a;
do {
if (--i < 0 || 0 == n[r][i].flag) break;
n[r][i].nums += t;
} while (!n[r][i].hasPiece);
i = e;
do {
if (++i > 9 || 0 == n[r][i].flag) break;
n[r][i].nums += t;
} while (!n[r][i].hasPiece);
}
});
cc._RF.pop();
}, {
Piece: "Piece"
} ],
Clear: [ function(t, a) {
"use strict";
cc._RF.push(a, "d4d96OWm9tN55NaTCWZRFtj", "Clear");
cc.Class({
extends: cc.Component,
initButton: function() {
var t = this.node.getChildren();
cc.loader.loadRes("button/stage_passed", cc.SpriteFrame, function(a, e) {
for (var r = 0; r < 9; r++) {
var i = t[r].name;
if (cc.sys.localStorage.getItem(i)) {
t[r].getChildByName("Label").color = new cc.color(255, 217, 102, 255);
t[r].getComponent(cc.Button).normalSprite = e;
}
}
});
},
initTitle: function() {
var t = this.node.parent.getComponents(cc.Component)[1].index;
cc.sys.localStorage.getItem("Level" + t) && (this.node.color = new cc.color(255, 217, 102, 255));
},
initChapter: function() {
for (var t = new Array(), a = 1; a <= 5; a++) {
for (var e = !0, r = 9 * (a - 1) + 1; r <= 9 * a; r++) if (!cc.sys.localStorage.getItem("Level" + r)) {
e = !1;
break;
}
if (e) {
var i = "Canvas/BackGround/Chapter" + a;
t[a] = cc.find(i);
}
}
cc.loader.loadRes("button/chap_passed", cc.SpriteFrame, function(a, e) {
for (var r = 1; r <= 5; r++) if (t[r]) {
t[r].getChildByName("Label").color = new cc.color(255, 217, 102, 255);
t[r].getComponent(cc.Button).normalSprite = e;
}
});
},
start: function() {
"Levels" == this.node.name ? this.initButton() : "Title" == this.node.name ? this.initTitle() : this.initChapter();
}
});
cc._RF.pop();
}, {} ],
Grid: [ function(t, a) {
"use strict";
cc._RF.push(a, "299a92UlGZLEYk+Sgvg7yu+", "Grid");
cc.Class({
extends: cc.Component,
onLoad: function() {
this.node.on("flag_changed", function() {
this.repaint();
}, this);
},
repaint: function() {
var t = this;
switch (this.node.flag) {
case 1:
cc.loader.loadRes("grid/path", cc.SpriteFrame, function(a, e) {
t.node.getComponent(cc.Sprite).spriteFrame = e;
});
break;

case 2:
cc.loader.loadRes("grid/light", cc.SpriteFrame, function(a, e) {
t.node.getComponent(cc.Sprite).spriteFrame = e;
});
}
},
start: function() {
this.flag = null;
this.hasPiece = !1;
this.num = 0;
this.piece = null;
}
});
cc._RF.pop();
}, {} ],
LEvel6: [ function(t, a) {
"use strict";
cc._RF.push(a, "38725Vu/kFAVboTNYwhAh56", "LEvel6");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 6;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[3] = new Array(0, 0, 1, 0, 0, 1, 0, 0, 0, 0);
this.data[4] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[5] = new Array(0, 1, 0, 0, 0, 0, 1, 0, 1, 1);
this.data[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level10: [ function(t, a) {
"use strict";
cc._RF.push(a, "546f1RVpJVOYYwmVNeN+QCi", "Level10");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 10;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.data[1] = new Array(0, 1, 1, 1, 1, 0, 1, 0, 1, 0);
this.data[2] = new Array(0, 0, 1, 0, 1, 0, 1, 1, 1, 0);
this.data[3] = new Array(0, 0, 1, 0, 0, 0, 1, 0, 1, 0);
this.data[4] = new Array(0, 1, 1, 1, 1, 0, 0, 0, 1, 0);
this.data[5] = new Array(0, 1, 0, 0, 1, 1, 1, 1, 1, 0);
this.data[6] = new Array(0, 1, 0, 0, 0, 0, 1, 0, 0, 0);
this.data[7] = new Array(0, 1, 1, 1, 0, 1, 1, 1, 1, 0);
this.data[8] = new Array(0, 1, 0, 1, 1, 0, 0, 1, 0, 0);
this.data[9] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[4] = new Array(0, 1, 1, 1, 1, 0, 0, 0, 1, 0);
this.path[5] = new Array(0, 1, 0, 0, 1, 1, 1, 1, 1, 0);
this.path[6] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level11: [ function(t, a) {
"use strict";
cc._RF.push(a, "059ca0SZp9Lq5w6w+uPd59E", "Level11");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 11;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.data[1] = new Array(1, 1, 1, 1, 1, 1, 1, 0, 1, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 1, 0);
this.data[3] = new Array(0, 1, 1, 1, 1, 1, 0, 0, 1, 0);
this.data[4] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 1, 0);
this.data[5] = new Array(0, 1, 1, 1, 1, 1, 1, 0, 1, 0);
this.data[6] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
this.data[7] = new Array(0, 1, 0, 0, 0, 1, 1, 1, 1, 0);
this.data[8] = new Array(0, 0, 1, 1, 0, 1, 0, 0, 1, 0);
this.data[9] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[1] = new Array(1, 1, 1, 1, 1, 1, 0, 0, 1, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 1, 0);
this.path[3] = new Array(0, 0, 1, 1, 1, 1, 0, 0, 1, 0);
this.path[4] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 1, 0);
this.path[5] = new Array(0, 0, 1, 1, 1, 1, 1, 0, 1, 0);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 1, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level12: [ function(t, a) {
"use strict";
cc._RF.push(a, "50d1dpquING5aHJPPf8Jb9/", "Level12");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 12;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.data[1] = new Array(0, 1, 1, 1, 1, 1, 0, 0, 1, 0);
this.data[2] = new Array(0, 0, 1, 0, 0, 1, 1, 0, 1, 0);
this.data[3] = new Array(0, 0, 1, 0, 0, 0, 1, 1, 1, 0);
this.data[4] = new Array(0, 1, 1, 1, 1, 0, 0, 0, 1, 0);
this.data[5] = new Array(0, 1, 0, 0, 1, 0, 0, 0, 1, 0);
this.data[6] = new Array(0, 1, 0, 0, 1, 0, 0, 1, 1, 0);
this.data[7] = new Array(0, 1, 0, 0, 1, 1, 1, 1, 0, 0);
this.data[8] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[4] = new Array(0, 1, 1, 1, 1, 0, 0, 0, 1, 0);
this.path[5] = new Array(0, 1, 0, 0, 1, 0, 0, 0, 1, 0);
this.path[6] = new Array(0, 1, 0, 0, 1, 0, 0, 1, 1, 0);
this.path[7] = new Array(0, 1, 0, 0, 1, 1, 1, 1, 0, 0);
this.path[8] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level13: [ function(t, a) {
"use strict";
cc._RF.push(a, "c8441tGCYdLyZQ8x/pl3tyL", "Level13");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 13;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[3] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.data[4] = new Array(0, 1, 0, 1, 0, 0, 1, 1, 1, 0);
this.data[5] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
this.data[6] = new Array(0, 0, 1, 0, 0, 0, 1, 0, 1, 0);
this.data[7] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[5] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level14: [ function(t, a) {
"use strict";
cc._RF.push(a, "26ea61V1F9IuZafIEVmaqLO", "Level14");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 14;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[3] = new Array(1, 1, 1, 1, 1, 1, 1, 0, 1, 0);
this.data[4] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
this.data[5] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
this.data[6] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
this.data[7] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 1, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(1, 1, 1, 1, 1, 1, 1, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[5] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level15: [ function(t, a) {
"use strict";
cc._RF.push(a, "40b00F9kv1IbJm6mL/KyNQi", "Level15");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 15;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.data[1] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.data[3] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 0);
this.data[4] = new Array(0, 0, 0, 1, 0, 0, 0, 1, 0, 0);
this.data[5] = new Array(0, 0, 0, 1, 0, 0, 0, 1, 0, 0);
this.data[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[3] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 0, 0);
this.path[4] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level16: [ function(t, a) {
"use strict";
cc._RF.push(a, "4d5fajlz8dGhZEqGUNFnPYY", "Level16");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 16;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.data[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.data[4] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 0);
this.data[5] = new Array(0, 0, 1, 1, 0, 0, 0, 0, 0, 0);
this.data[6] = new Array(0, 1, 1, 0, 0, 0, 0, 0, 0, 0);
this.data[7] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[4] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 0);
this.path[5] = new Array(0, 0, 1, 1, 0, 0, 0, 0, 0, 0);
this.path[6] = new Array(0, 1, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level17: [ function(t, a) {
"use strict";
cc._RF.push(a, "47ca8a0uMRNWprtQ70z9By7", "Level17");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 17;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[3] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[4] = new Array(0, 0, 1, 0, 1, 1, 1, 1, 1, 1);
this.data[5] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.data[6] = new Array(0, 0, 1, 1, 1, 0, 0, 0, 0, 0);
this.data[7] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 1, 1, 1, 1, 1, 1);
this.path[5] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[6] = new Array(0, 0, 1, 1, 1, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level18: [ function(t, a) {
"use strict";
cc._RF.push(a, "d73951HxedAFI7QMcOND4DK", "Level18");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 18;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[3] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 1);
this.data[4] = new Array(0, 1, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[6] = new Array(0, 1, 1, 1, 0, 0, 0, 0, 0, 0);
this.data[7] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 1);
this.path[4] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[6] = new Array(0, 1, 1, 1, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level19: [ function(t, a) {
"use strict";
cc._RF.push(a, "36283YvzQJJ/KdtGNibCWZb", "Level19");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 19;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 1);
this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.data[3] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.data[4] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 0, 0);
this.data[5] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
this.data[6] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 0, 0);
this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 1);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level1: [ function(t, a) {
"use strict";
cc._RF.push(a, "b9c22aBMh9GlJx2dksk799v", "Level1");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 1;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.data[2] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 0, 0);
this.data[3] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
this.data[4] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
this.data[5] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
this.data[6] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
this.data[7] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[7] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level20: [ function(t, a) {
"use strict";
cc._RF.push(a, "8644cCsjvZKi5qzyazdHcvX", "Level20");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 20;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 1);
this.data[3] = new Array(0, 1, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[4] = new Array(0, 1, 1, 1, 1, 1, 0, 0, 0, 0);
this.data[5] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
this.data[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 1);
this.path[3] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level21: [ function(t, a) {
"use strict";
cc._RF.push(a, "815f2MhqTZElrSHyHhVrlU9", "Level21");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 21;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[4] = new Array(0, 0, 0, 0, 1, 1, 1, 1, 1, 1);
this.data[5] = new Array(1, 1, 1, 1, 1, 0, 0, 0, 0, 0);
this.data[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 1, 1, 1, 1, 1, 1);
this.path[5] = new Array(1, 1, 1, 1, 1, 0, 0, 0, 0, 0);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level22: [ function(t, a) {
"use strict";
cc._RF.push(a, "1264bR3yNRI+4HBQN1kSIJa", "Level22");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 22;
this.data[0] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 1, 1, 0, 0, 0);
this.data[3] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 0, 0);
this.data[4] = new Array(0, 0, 0, 0, 0, 1, 0, 1, 1, 0);
this.data[5] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 1, 1);
this.data[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 1, 1, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level23: [ function(t, a) {
"use strict";
cc._RF.push(a, "2a7f6yvE2tLyoF9SagqQV65", "Level23");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 23;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 1, 0);
this.data[2] = new Array(0, 0, 0, 0, 1, 1, 1, 0, 0, 0);
this.data[3] = new Array(0, 0, 1, 0, 0, 0, 1, 0, 0, 0);
this.data[4] = new Array(0, 0, 1, 0, 0, 0, 1, 0, 0, 0);
this.data[5] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 0, 0);
this.data[6] = new Array(0, 1, 1, 1, 0, 1, 1, 1, 0, 0);
this.data[7] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[5] = new Array(1, 1, 1, 1, 1, 1, 1, 0, 0, 0);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level24: [ function(t, a) {
"use strict";
cc._RF.push(a, "31ad51EYXNMTa76TbR6Mr/l", "Level24");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 24;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
this.data[2] = new Array(0, 0, 0, 0, 1, 0, 1, 0, 1, 0);
this.data[3] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 0);
this.data[4] = new Array(0, 0, 0, 0, 1, 1, 0, 1, 0, 0);
this.data[5] = new Array(1, 1, 0, 0, 1, 0, 1, 1, 0, 0);
this.data[6] = new Array(0, 1, 1, 0, 1, 0, 0, 0, 0, 0);
this.data[7] = new Array(0, 0, 1, 1, 1, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 0);
this.path[4] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.path[5] = new Array(1, 1, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[6] = new Array(0, 1, 1, 0, 1, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 1, 1, 1, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level25: [ function(t, a) {
"use strict";
cc._RF.push(a, "dd864hhwbxIXqQprpayDwSy", "Level25");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 25;
this.data[0] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 0);
this.data[3] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[4] = new Array(0, 0, 0, 1, 1, 1, 1, 0, 0, 0);
this.data[5] = new Array(0, 1, 1, 0, 1, 0, 1, 1, 0, 0);
this.data[6] = new Array(0, 0, 1, 1, 0, 1, 0, 1, 0, 0);
this.data[7] = new Array(0, 0, 1, 0, 0, 1, 1, 1, 0, 0);
this.data[8] = new Array(0, 0, 1, 1, 1, 1, 0, 1, 1, 0);
this.data[9] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
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
}, {} ],
Level26: [ function(t, a) {
"use strict";
cc._RF.push(a, "12e16117kZB9Iv1/1JRO8LV", "Level26");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 26;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 1, 0, 1, 0, 1, 0, 0, 0, 0);
this.data[3] = new Array(1, 1, 1, 1, 1, 1, 0, 0, 0, 0);
this.data[4] = new Array(0, 1, 0, 1, 0, 1, 1, 1, 1, 0);
this.data[5] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 1);
this.data[6] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 0);
this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(1, 1, 1, 1, 1, 1, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 0);
this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level27: [ function(t, a) {
"use strict";
cc._RF.push(a, "0f1e5GB3QNIf65saSCtAVJg", "Level27");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 27;
this.data[0] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[3] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[4] = new Array(0, 1, 0, 1, 1, 1, 1, 0, 0, 0);
this.data[5] = new Array(0, 1, 1, 1, 0, 0, 1, 0, 1, 0);
this.data[6] = new Array(0, 1, 0, 1, 0, 0, 1, 1, 1, 0);
this.data[7] = new Array(0, 0, 0, 1, 1, 1, 1, 0, 1, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[0] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 1, 0, 1, 1, 1, 1, 0, 0, 0);
this.path[5] = new Array(0, 1, 1, 1, 0, 0, 1, 0, 0, 0);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 1, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
}
});
cc._RF.pop();
}, {} ],
Level28: [ function(t, a) {
"use strict";
cc._RF.push(a, "a04bdDLqBVBc5Mf4bGiIY4E", "Level28");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 28;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 1, 0, 1, 0, 0, 0);
this.data[3] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 0, 0);
this.data[4] = new Array(1, 1, 0, 0, 1, 1, 0, 1, 0, 0);
this.data[5] = new Array(0, 1, 1, 0, 1, 0, 0, 1, 0, 0);
this.data[6] = new Array(0, 0, 1, 1, 1, 0, 0, 1, 1, 0);
this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 0, 0);
this.path[4] = new Array(1, 1, 0, 0, 1, 1, 0, 1, 0, 0);
this.path[5] = new Array(0, 1, 1, 0, 1, 0, 0, 1, 0, 0);
this.path[6] = new Array(0, 0, 1, 1, 1, 0, 0, 1, 1, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level29: [ function(t, a) {
"use strict";
cc._RF.push(a, "9cc36o71+NP/4VUo9O+GynO", "Level29");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 29;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 1, 1, 1, 1, 1, 0, 0, 0);
this.data[3] = new Array(0, 1, 1, 0, 0, 0, 1, 0, 0, 0);
this.data[4] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[5] = new Array(0, 0, 1, 0, 1, 0, 1, 1, 1, 0);
this.data[6] = new Array(0, 0, 0, 1, 1, 1, 0, 0, 1, 1);
this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level2: [ function(t, a) {
"use strict";
cc._RF.push(a, "41b50zFL4xFPJ6BgiZ68UHK", "Level2");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 2;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[4] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[5] = new Array(1, 1, 0, 1, 0, 1, 0, 0, 1, 1);
this.data[6] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.path[5] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 1, 1);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level30: [ function(t, a) {
"use strict";
cc._RF.push(a, "b6eecgG0vFGmIjPYEGiNd86", "Level30");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 30;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 1, 1, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.data[3] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
this.data[4] = new Array(0, 0, 1, 1, 1, 1, 1, 0, 0, 0);
this.data[5] = new Array(0, 1, 1, 0, 0, 1, 1, 1, 0, 0);
this.data[6] = new Array(0, 0, 1, 1, 0, 0, 0, 0, 0, 0);
this.data[7] = new Array(0, 1, 1, 1, 1, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 1, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 1, 1, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 1, 1, 0, 0, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[6] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 1, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level31: [ function(t, a) {
"use strict";
cc._RF.push(a, "e7d97Qn6dNLi7aLJUyFF784", "Level31");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 31;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 1, 1, 1, 1, 1, 1, 0, 0, 0);
this.data[3] = new Array(0, 1, 0, 1, 0, 0, 1, 1, 0, 0);
this.data[4] = new Array(0, 1, 1, 1, 1, 1, 0, 1, 1, 0);
this.data[5] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 1, 0);
this.data[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 1, 1);
this.data[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 1, 1, 1, 1, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 1, 0, 0, 1, 1, 0, 0);
this.path[4] = new Array(0, 0, 0, 1, 0, 0, 0, 1, 1, 0);
this.path[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 1, 0);
this.path[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 1, 1);
this.path[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level32: [ function(t, a) {
"use strict";
cc._RF.push(a, "2e220ryOLFBlprwc224eLr4", "Level32");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 32;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 0, 0);
this.data[2] = new Array(0, 1, 1, 1, 0, 1, 1, 1, 0, 0);
this.data[3] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 0, 0);
this.data[4] = new Array(1, 1, 0, 1, 0, 1, 0, 1, 0, 0);
this.data[5] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 1, 1);
this.data[6] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 0, 0);
this.data[7] = new Array(0, 1, 1, 1, 0, 1, 0, 1, 0, 0);
this.data[8] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[5] = new Array(0, 1, 0, 0, 0, 0, 0, 1, 1, 1);
this.path[6] = new Array(0, 1, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[7] = new Array(0, 1, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[8] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level33: [ function(t, a) {
"use strict";
cc._RF.push(a, "a3bf3riam9CYZRpslJfOhXO", "Level33");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 33;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.data[1] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
this.data[2] = new Array(0, 0, 0, 1, 0, 1, 0, 1, 0, 0);
this.data[3] = new Array(0, 1, 0, 0, 1, 1, 1, 1, 1, 0);
this.data[4] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 1, 0);
this.data[5] = new Array(0, 0, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[6] = new Array(0, 1, 1, 0, 0, 1, 1, 0, 0, 0);
this.data[7] = new Array(1, 1, 1, 1, 0, 0, 0, 0, 1, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 1, 0, 1, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 0);
this.path[5] = new Array(0, 0, 1, 1, 1, 1, 1, 1, 1, 0);
this.path[6] = new Array(0, 1, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level34: [ function(t, a) {
"use strict";
cc._RF.push(a, "b1a40NcMQlGMZECvh8tOgO2", "Level34");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 34;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[3] = new Array(0, 0, 0, 1, 0, 0, 1, 0, 0, 0);
this.data[4] = new Array(0, 1, 1, 1, 0, 0, 1, 1, 0, 0);
this.data[5] = new Array(0, 1, 0, 1, 1, 1, 1, 0, 0, 0);
this.data[6] = new Array(0, 0, 1, 1, 0, 0, 1, 1, 0, 0);
this.data[7] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 1, 0);
this.data[8] = new Array(1, 1, 1, 0, 1, 1, 1, 1, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 0, 1, 1, 1, 1, 0, 0, 0);
this.path[6] = new Array(0, 0, 1, 1, 0, 0, 1, 1, 0, 0);
this.path[7] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
this.path[8] = new Array(1, 1, 1, 0, 0, 0, 0, 1, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level35: [ function(t, a) {
"use strict";
cc._RF.push(a, "c57109vrINAob3viMq1wgeo", "Level35");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 35;
this.data[0] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 1, 1, 1, 1, 0, 0, 0);
this.data[3] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.data[4] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[5] = new Array(0, 1, 0, 1, 0, 0, 1, 0, 1, 0);
this.data[6] = new Array(0, 1, 0, 1, 1, 1, 0, 0, 1, 0);
this.data[7] = new Array(0, 1, 0, 0, 1, 0, 0, 0, 1, 0);
this.data[8] = new Array(0, 1, 0, 1, 1, 1, 0, 1, 1, 0);
this.data[9] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[6] = new Array(0, 0, 0, 1, 1, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level36: [ function(t, a) {
"use strict";
cc._RF.push(a, "780bcnqHTVPF5nHpOy39Wu5", "Level36");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 36;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 0, 0);
this.data[2] = new Array(1, 1, 0, 0, 0, 1, 0, 0, 0, 0);
this.data[3] = new Array(0, 0, 0, 1, 0, 1, 0, 0, 0, 0);
this.data[4] = new Array(0, 0, 1, 1, 1, 1, 1, 0, 0, 0);
this.data[5] = new Array(0, 0, 0, 1, 0, 1, 0, 0, 0, 0);
this.data[6] = new Array(0, 0, 0, 1, 0, 1, 1, 1, 0, 0);
this.data[7] = new Array(0, 0, 0, 1, 0, 1, 0, 1, 1, 1);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 1, 1, 1, 1, 1, 0, 0, 0, 0);
this.path[2] = new Array(1, 1, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[6] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 1, 1);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level37: [ function(t, a) {
"use strict";
cc._RF.push(a, "bfe75Pv9XxAsIwzVM0WHRx1", "Level37");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 37;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[3] = new Array(0, 1, 1, 1, 0, 1, 1, 1, 0, 0);
this.data[4] = new Array(0, 1, 1, 1, 0, 1, 1, 1, 1, 0);
this.data[5] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
this.data[6] = new Array(0, 0, 0, 0, 1, 1, 1, 0, 0, 0);
this.data[7] = new Array(0, 0, 0, 0, 0, 1, 1, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[5] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level38: [ function(t, a) {
"use strict";
cc._RF.push(a, "e365b7YLAZA7YXc2XxIGyfb", "Level38");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 38;
this.data[0] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 1, 1, 1, 0, 1, 1, 1, 0);
this.data[2] = new Array(0, 0, 1, 0, 1, 0, 1, 0, 1, 0);
this.data[3] = new Array(0, 0, 1, 1, 1, 0, 0, 1, 0, 0);
this.data[4] = new Array(0, 0, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[5] = new Array(0, 1, 0, 0, 0, 1, 0, 1, 1, 1);
this.data[6] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 0);
this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 1, 1, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 1, 1, 1, 1, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 1, 1);
this.path[6] = new Array(0, 0, 0, 0, 0, 1, 1, 1, 1, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level39: [ function(t, a) {
"use strict";
cc._RF.push(a, "7ba735ZfwpDoak85yGFxGeP", "Level39");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 39;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 0, 0);
this.data[2] = new Array(0, 1, 1, 1, 0, 1, 1, 1, 0, 0);
this.data[3] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 0, 0);
this.data[4] = new Array(1, 1, 0, 1, 0, 1, 0, 1, 0, 0);
this.data[5] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 1, 1);
this.data[6] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 0, 0);
this.data[7] = new Array(0, 1, 1, 1, 0, 1, 0, 1, 0, 0);
this.data[8] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 1, 1, 1, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 1, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(1, 1, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 0, 1, 0, 0, 0, 1, 1, 1);
this.path[6] = new Array(0, 0, 0, 1, 0, 0, 0, 1, 0, 0);
this.path[7] = new Array(0, 0, 0, 1, 0, 0, 0, 1, 0, 0);
this.path[8] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level3: [ function(t, a) {
"use strict";
cc._RF.push(a, "4ebf3ZcUG9CqJYsdjJBDhJV", "Level3");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 3;
this.data[0] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.data[3] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.data[4] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.data[5] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.data[6] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.data[7] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[6] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level40: [ function(t, a) {
"use strict";
cc._RF.push(a, "2c279J/ODlNk6AVTytkHDVZ", "Level40");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 40;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
this.data[3] = new Array(0, 0, 0, 0, 1, 1, 0, 1, 1, 0);
this.data[4] = new Array(0, 0, 1, 1, 1, 1, 1, 1, 1, 1);
this.data[5] = new Array(0, 1, 1, 1, 1, 1, 0, 0, 0, 0);
this.data[6] = new Array(0, 0, 1, 0, 1, 0, 0, 0, 0, 0);
this.data[7] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 1, 1, 1, 1, 1, 1, 1, 1);
this.path[5] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[6] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level41: [ function(t, a) {
"use strict";
cc._RF.push(a, "856b8/YAtFK97jp2Lbu5AIw", "Level41");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 41;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.data[1] = new Array(0, 1, 0, 0, 0, 0, 1, 1, 0, 0);
this.data[2] = new Array(0, 0, 1, 0, 1, 1, 1, 1, 1, 0);
this.data[3] = new Array(0, 0, 0, 1, 1, 0, 1, 0, 1, 0);
this.data[4] = new Array(0, 0, 1, 0, 1, 0, 1, 1, 1, 0);
this.data[5] = new Array(0, 1, 0, 0, 1, 0, 1, 0, 1, 0);
this.data[6] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[7] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 1, 1, 1, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[6] = new Array(1, 1, 1, 1, 1, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level42: [ function(t, a) {
"use strict";
cc._RF.push(a, "b7805/lMDpLMLZDNhBtyQat", "Level42");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 42;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 1, 0, 0, 1, 0, 1, 0, 0);
this.data[2] = new Array(0, 0, 1, 0, 1, 1, 1, 1, 1, 0);
this.data[3] = new Array(0, 1, 1, 1, 0, 1, 0, 1, 0, 0);
this.data[4] = new Array(0, 0, 1, 0, 0, 1, 1, 1, 0, 0);
this.data[5] = new Array(0, 1, 1, 1, 1, 1, 0, 1, 0, 0);
this.data[6] = new Array(1, 1, 1, 0, 1, 1, 1, 1, 1, 1);
this.data[7] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 1, 0, 0, 1, 0, 1, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 1, 1, 1, 0, 0, 0, 0, 0);
this.path[6] = new Array(1, 1, 1, 0, 1, 1, 1, 1, 1, 1);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level43: [ function(t, a) {
"use strict";
cc._RF.push(a, "2522b3X67xJsLxp5DjIUZuE", "Level43");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 43;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 1, 0);
this.data[2] = new Array(0, 1, 0, 1, 1, 1, 1, 1, 0, 0);
this.data[3] = new Array(0, 0, 1, 1, 0, 1, 0, 1, 0, 0);
this.data[4] = new Array(0, 1, 0, 1, 0, 1, 1, 1, 0, 0);
this.data[5] = new Array(0, 0, 0, 1, 0, 1, 0, 1, 1, 0);
this.data[6] = new Array(0, 1, 0, 1, 1, 1, 1, 1, 0, 0);
this.data[7] = new Array(0, 0, 1, 0, 1, 1, 1, 0, 0, 0);
this.data[8] = new Array(0, 1, 0, 0, 0, 1, 1, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 1, 1, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 1, 1, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level44: [ function(t, a) {
"use strict";
cc._RF.push(a, "32f17B2Wa1GlrmuqWjRRbMz", "Level44");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 44;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[2] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[3] = new Array(0, 1, 1, 1, 0, 0, 1, 1, 1, 0);
this.data[4] = new Array(1, 1, 0, 1, 1, 1, 1, 0, 1, 1);
this.data[5] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[6] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[7] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[8] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(1, 1, 0, 0, 0, 0, 0, 0, 1, 1);
this.path[5] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level45: [ function(t, a) {
"use strict";
cc._RF.push(a, "8455bEIUoBG5qq7Du8JpIdm", "Level45");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 45;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(1, 1, 1, 1, 0, 1, 0, 0, 1, 0);
this.data[2] = new Array(0, 1, 0, 1, 0, 1, 0, 1, 0, 0);
this.data[3] = new Array(0, 1, 0, 1, 1, 1, 1, 1, 0, 0);
this.data[4] = new Array(0, 0, 0, 0, 0, 1, 0, 1, 1, 0);
this.data[5] = new Array(0, 0, 0, 0, 1, 1, 1, 1, 0, 0);
this.data[6] = new Array(1, 1, 0, 1, 1, 0, 1, 0, 0, 0);
this.data[7] = new Array(0, 1, 1, 1, 0, 1, 0, 1, 0, 0);
this.data[8] = new Array(0, 0, 1, 0, 1, 1, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(1, 1, 1, 1, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 1, 0, 0);
this.path[5] = new Array(0, 0, 0, 0, 1, 1, 1, 1, 0, 0);
this.path[6] = new Array(1, 1, 0, 1, 1, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 1, 1, 1, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level4: [ function(t, a) {
"use strict";
cc._RF.push(a, "e3096qsvmBE2KN9RpsEs+yX", "Level4");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 4;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[3] = new Array(0, 1, 1, 0, 0, 1, 1, 0, 0, 0);
this.data[4] = new Array(0, 1, 0, 0, 0, 1, 0, 0, 1, 1);
this.data[5] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[6] = new Array(0, 0, 1, 0, 0, 0, 1, 0, 0, 0);
this.data[7] = new Array(0, 1, 1, 0, 0, 1, 1, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 1, 1);
this.path[5] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level5: [ function(t, a) {
"use strict";
cc._RF.push(a, "39c93dYLu9DP4gyYqJD6oO6", "Level5");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 5;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
this.data[3] = new Array(0, 1, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[4] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
this.data[5] = new Array(0, 0, 0, 0, 0, 0, 1, 0, 1, 0);
this.data[6] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
this.data[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[6] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level7: [ function(t, a) {
"use strict";
cc._RF.push(a, "099294td/VJZJ8x0KXgDIxW", "Level7");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 7;
this.data[0] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.data[3] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.data[4] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.data[5] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.data[6] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.data[7] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 1, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 1, 1, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[6] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 0, 0, 1, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level8: [ function(t, a) {
"use strict";
cc._RF.push(a, "9ef76MwGlNL7LRC5cz/kB6s", "Level8");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 8;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[6] = new Array(0, 1, 1, 1, 1, 1, 1, 1, 1, 0);
this.data[7] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
this.data[8] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
this.data[9] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[4] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[6] = new Array(0, 0, 1, 1, 1, 1, 1, 1, 0, 0);
this.path[7] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
this.path[8] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
this.path[9] = new Array(0, 0, 1, 0, 0, 0, 0, 1, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Level9: [ function(t, a) {
"use strict";
cc._RF.push(a, "d22dbIr5uFGNreVoSyaF08w", "Level9");
cc.Class({
extends: cc.Component,
properties: {
data: {
default: [],
type: [ cc.Integer ],
visible: !1
},
path: {
default: [],
type: [ cc.Integer ],
visible: !1
}
},
start: function() {
this.index = 9;
this.data[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[1] = new Array(0, 1, 0, 0, 0, 0, 0, 0, 0, 0);
this.data[2] = new Array(0, 0, 1, 0, 0, 0, 0, 0, 0, 0);
this.data[3] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 1);
this.data[4] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[8] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.data[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[0] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[1] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[2] = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
this.path[3] = new Array(0, 0, 0, 1, 1, 1, 1, 1, 1, 1);
this.path[4] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[5] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[6] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[7] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[8] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
this.path[9] = new Array(0, 0, 0, 1, 0, 0, 0, 0, 0, 0);
}
});
cc._RF.pop();
}, {} ],
Ma: [ function(t, a) {
"use strict";
cc._RF.push(a, "8592bIi14BHJI0WtsZ0JmJa", "Ma");
cc.Class({
extends: t("Piece"),
setflag: function(t, a, e) {
var r = this.node.grids, i = Array(-2, -1, 1, 2, 2, 1, -1, -2), n = Array(1, 2, 2, 1, -1, -2, -2, -1), s = Array(-1, 0, 0, 1, 1, 0, 0, -1), h = Array(0, 1, 1, 0, 0, -1, -1, 0);
r[a][e].nums += t;
for (var c = 0; c < 8; c++) {
var p = a + i[c], y = e + n[c], d = a + s[c], A = e + h[c];
p < 0 || p > 9 || y < 0 || y > 9 || 0 != r[p][y].flag && (d >= 0 && d <= 9 && A >= 0 && A <= 9 && (0 == r[d][A].flag || r[d][A].hasPiece) || (r[p][y].nums += t));
}
}
});
cc._RF.pop();
}, {
Piece: "Piece"
} ],
MusicEvent: [ function(t, a) {
"use strict";
cc._RF.push(a, "ae20fKjqZ9EGbqmfIm2H4Kq", "MusicEvent");
cc.Class({
extends: cc.Component,
start: function() {
this.AudioPlayer = cc.find("Audio").getComponent("AudioManager");
this.bg = cc.find("Canvas/Background/MusicPlayer/Background");
},
Sound: function() {
this.AudioPlayer.click();
},
monitor: function() {
var t = cc.director.getScene("Start").getChildByName("Audio").getComponent("AudioManager").flag;
cc.warn(t);
if (1 == t) {
var a = this;
cc.loader.loadRes("button/sound_on", cc.SpriteFrame, function(t, e) {
a.bg.getComponent(cc.Sprite).spriteFrame = e;
});
} else {
a = this;
cc.loader.loadRes("button/sound_off", cc.SpriteFrame, function(t, e) {
a.bg.getComponent(cc.Sprite).spriteFrame = e;
});
}
}
});
cc._RF.pop();
}, {} ],
Pao: [ function(t, a) {
"use strict";
cc._RF.push(a, "78cb6e05FRC17M1u5Qoseiy", "Pao");
cc.Class({
extends: t("Piece"),
setflag: function(t, a, e) {
var r = a, i = e, n = this.node.grids;
n[a][e].nums += t;
do {
r++;
} while (r >= 0 && r <= 9 && 0 != n[r][i].flag && !n[r][i].hasPiece);
do {
if (++r > 9 || 0 == n[r][i].flag) break;
n[r][i].nums += t;
} while (!n[r][i].hasPiece);
r = a;
do {
r--;
} while (r >= 0 && r <= 9 && 0 != n[r][i].flag && !n[r][i].hasPiece);
do {
if (--r < 0 || 0 == n[r][i].flag) break;
n[r][i].nums += t;
} while (!n[r][i].hasPiece);
r = a;
do {
i--;
} while (i >= 0 && i <= 9 && 0 != n[r][i].flag && !n[r][i].hasPiece);
do {
if (--i < 0 || 0 == n[r][i].flag) break;
n[r][i].nums += t;
} while (!n[r][i].hasPiece);
i = e;
do {
i++;
} while (i >= 0 && i <= 9 && 0 != n[r][i].flag && !n[r][i].hasPiece);
do {
if (++i > 9 || 0 == n[r][i].flag) break;
n[r][i].nums += t;
} while (!n[r][i].hasPiece);
}
});
cc._RF.pop();
}, {
Piece: "Piece"
} ],
PieceManager: [ function(t, a) {
"use strict";
cc._RF.push(a, "b4b07vA7axPm7uuiHi3YyxC", "PieceManager");
cc.Class({
extends: cc.Component,
start: function() {
this.pieces = [];
this.pieces = this.node.getChildren();
this.map = this.node.parent.getComponent("CheckerBoard").map;
for (var t in this.pieces) this.pieces[t].grids = this.map;
},
enlighten: function() {
for (var t = this.map, a = 0; a < 10; a++) for (var e = 0; e < 10; e++) {
var r = t[a][e];
if (0 != r.flag) {
r.nums > 0 ? r.flag = 2 : r.flag = 1;
r.emit("flag_changed");
}
}
},
stopAction: function() {
for (var t in this.pieces) this.pieces[t].getComponents(cc.Component)[1].destroy();
},
checkPass: function() {
for (var t = cc.find("Canvas").getComponents(cc.Component)[1].path, a = this.map, e = 0; e < 10; e++) for (var r = 0; r < 10; r++) if (1 == t[e][r] && 2 != a[e][r].flag) return !1;
return !0;
},
show: function() {
var t = cc.find("Canvas"), a = this.map, e = t.getComponents(cc.Component)[1].path, r = function() {
for (var t = 0; t < 10; t++) if (1 == e[9][t]) return cc.v2(9, t);
for (t = 9; t >= 0; t--) if (1 == e[t][0]) return cc.v2(t, 0);
for (t = 0; t < 10; t++) if (1 == e[0][t]) return cc.v2(0, t);
for (t = 0; t < 10; t++) if (1 == e[t][9]) return cc.v2(t, 9);
return null;
}(), i = new Array(0, 1, 0, -1), n = new Array(1, 0, -1, 0), s = new Array(), h = new Array();
s[r] = !0;
for (var c = r.x, p = r.y; ;) {
h.push(a[c][p]);
for (var y = !1, d = 0; d < 4; d++) {
var A = c + i[d], w = p + n[d], o = cc.v2(A, w);
if (A < 10 && A >= 0 && w < 10 && w >= 0 && 1 == e[A][w] && !s.hasOwnProperty(o)) {
s[o] = !0;
c = A, p = w;
y = !0;
break;
}
}
if (!y) break;
}
cc.loader.loadRes("grid/pass", cc.SpriteFrame, function(t, a) {
for (var e in h) (function(t, a, e) {
a.getComponent("Grid").scheduleOnce(function() {
a.getComponent(cc.Sprite).spriteFrame = e;
}, .018 * t);
})(e, h[e], a);
});
},
updateAll: function() {
for (var t = 0; t < 10; t++) for (var a = 0; a < 10; a++) this.map[t][a].nums = 0;
for (var t in this.pieces) 0 == (e = this.pieces[t]).type && e.isInRange && (e.disable = !1);
for (var t in this.pieces) 1 == (e = this.pieces[t]).type && e.getComponents(cc.Component)[1].setflag(e.gx, e.gy);
for (var t in this.pieces) {
var e;
0 == (e = this.pieces[t]).type && e.isInRange && 0 == e.disable && e.getComponents(cc.Component)[1].setflag(1, e.gx, e.gy);
}
}
});
cc._RF.pop();
}, {} ],
Piece: [ function(t, a) {
"use strict";
cc._RF.push(a, "af29a5C4CdNTpoesp3udiW/", "Piece");
cc.Class({
extends: cc.Component,
setflag: function() {},
fixGrid: function(t, a) {
var e = this.node.grids[t][a], r = e.getContentSize();
if (new cc.Rect(e.x, e.y - r.height, r.width, r.height).contains(new cc.Vec2(this.node.x, this.node.y)) && e.flag && !e.hasPiece) {
this.node.x = this.node.lastX = e.x + r.width / 2;
this.node.y = this.node.lastY = e.y - r.height / 2;
this.node.gx = t;
this.node.gy = a;
e.hasPiece = !0;
e.piece = this.node;
this.node.isInRange = !0;
return !0;
}
return !1;
},
onTouchStart: function() {
if (this.isInRange) {
this.grids[this.gx][this.gy].hasPiece = !1;
this.disable || this.getComponents(cc.Component)[1].setflag(-1, this.gx, this.gy);
this.manger.enlighten();
}
},
onTouchMove: function(t) {
var a = t.touch.getDelta();
this.x += a.x;
this.y += a.y;
},
onTouchEnd: function() {
(e = this).putDownMusic ? cc.audioEngine.play(e.putDownMusic, !1, 1) : cc.loader.loadRes("music/pieceDown", cc.AudioClip, function(t, a) {
e.putDownMusic = a;
cc.audioEngine.play(a, !1, .4);
});
for (var t = 0; t < 10; t++) for (var a = 0; a < 10 && !this.getComponents(cc.Component)[1].fixGrid(t, a); a++) ;
if (this.range.contains(new cc.Vec2(this.x, this.y))) {
null != this.gx && (this.grids[this.gx][this.gy].hasPiece = !0);
this.x = this.lastX;
this.y = this.lastY;
} else {
this.x = this.lastX = this.startX;
this.y = this.lastY = this.startY;
this.gx = void 0;
this.isInRange = !1;
}
this.manger.updateAll();
this.manger.enlighten();
if (this.manger.checkPass()) {
this.manger.stopAction();
var e = this;
cc.loader.loadRes("alert", cc.Prefab, function(t, a) {
var r = cc.instantiate(a);
e.parent.parent.addChild(r);
r.setPosition(cc.v2(0, -452.5));
});
this.manger.show();
cc.loader.loadRes("music/pass", cc.AudioClip, function(t, a) {
cc.audioEngine.play(a, !1, 2);
});
cc.find("Canvas/TipButton") && (cc.find("Canvas/TipButton").active = !1);
var r = cc.find("Canvas").getComponents(cc.Component)[1].index;
cc.sys.localStorage.setItem("Level" + r, !0);
}
},
onLoad: function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this.node);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this.node);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this.node);
},
onDestroy: function() {
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this.node);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this.node);
this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this.node);
},
start: function() {
this.node.type = 0;
this.node.disable = !1;
this.node.isInRange = !1;
this.node.startX = this.node.lastX = this.node.x;
this.node.startY = this.node.lastY = this.node.y;
this.node.manger = this.node.parent.getComponent("PieceManager");
var t = this.node.grids[9][0], a = t.getContentSize().width;
this.node.range = new cc.Rect(t.x, t.y - a, 10 * a, 10 * a);
}
});
cc._RF.pop();
}, {} ],
Shi: [ function(t, a) {
"use strict";
cc._RF.push(a, "90503qU9RJEdYC5n2gW3Wq4", "Shi");
cc.Class({
extends: t("Piece"),
setflag: function(t, a, e) {
for (var r = this.node.grids, i = Array(0, 1, -1, 1, -1), n = Array(0, -1, 1, 1, -1), s = 0; s < 5; s++) {
var h = a + i[s], c = e + n[s];
h < 0 || h > 9 || c < 0 || c > 9 || 0 != r[h][c].flag && (r[h][c].nums += t);
}
}
});
cc._RF.pop();
}, {
Piece: "Piece"
} ],
Shuai: [ function(t, a) {
"use strict";
cc._RF.push(a, "63a30TpacxENphTQn5oR3DH", "Shuai");
cc.Class({
extends: t("Piece"),
setflag: function(t, a, e) {
for (var r = this.node.grids, i = Array(1, 0, 0, 0, -1), n = Array(0, 1, 0, -1, 0), s = 0; s < 5; s++) {
var h = a + i[s], c = e + n[s];
h < 0 || h > 9 || c < 0 || c > 9 || 0 != r[h][c].flag && (r[h][c].nums += t);
}
}
});
cc._RF.pop();
}, {
Piece: "Piece"
} ],
Skip: [ function(t, a) {
"use strict";
cc._RF.push(a, "2f3d8nqyv5Be70FCiwFyrmy", "Skip");
cc.Class({
extends: cc.Component,
skipTo: function(t, a) {
cc.director.loadScene(a);
},
nextPass: function() {
var t = cc.find("Canvas"), a = t.getComponents(cc.Component)[1].index;
t.stopAllActions();
(a += 1) > 45 ? cc.director.loadScene("Start") : cc.director.loadScene("Level" + a);
},
loadTutorial: function(t, a) {
var e = cc.find("Canvas/Show"), r = "tutorial/" + a;
cc.loader.loadRes(r, cc.SpriteFrame, function(t, a) {
e.getComponent(cc.Sprite).spriteFrame = a;
cc.warn(a);
});
},
hide: function() {
cc.find("Canvas/Tip").active = !1;
},
appear: function() {
cc.find("Canvas/Tip").active = !0;
}
});
cc._RF.pop();
}, {} ],
Xiang: [ function(t, a) {
"use strict";
cc._RF.push(a, "e9999PLRKhJEY+OlN4cazOI", "Xiang");
cc.Class({
extends: t("Piece"),
setflag: function(t, a, e) {
var r = this.node.grids, i = Array(-2, 2, 2, -2), n = Array(2, 2, -2, -2), s = Array(-1, 1, 1, -1), h = Array(1, 1, -1, -1);
r[a][e].nums += t;
for (var c = 0; c < 4; c++) {
var p = a + i[c], y = e + n[c], d = a + s[c], A = e + h[c];
p < 0 || p > 9 || y < 0 || y > 9 || 0 != r[p][y].flag && (d >= 0 && d <= 9 && A >= 0 && A <= 9 && (0 == r[d][A].flag || r[d][A].hasPiece) || (r[p][y].nums += t));
}
}
});
cc._RF.pop();
}, {
Piece: "Piece"
} ],
"use_v2.1-2.2.1_cc.Toggle_event": [ function(t, a) {
"use strict";
cc._RF.push(a, "be585mg+RNPZrle6rFKG5po", "use_v2.1-2.2.1_cc.Toggle_event");
cc.Toggle && (cc.Toggle._triggerEventInScript_isChecked = !0);
cc._RF.pop();
}, {} ]
}, {}, [ "use_v2.1-2.2.1_cc.Toggle_event", "BlackPiece", "CheckerBoard", "Clear", "Grid", "Piece", "PieceManager", "Skip", "LEvel6", "Level1", "Level10", "Level11", "Level12", "Level13", "Level14", "Level15", "Level16", "Level17", "Level18", "Level19", "Level2", "Level20", "Level21", "Level22", "Level23", "Level24", "Level25", "Level26", "Level27", "Level28", "Level29", "Level3", "Level30", "Level31", "Level32", "Level33", "Level34", "Level35", "Level36", "Level37", "Level38", "Level39", "Level4", "Level40", "Level41", "Level42", "Level43", "Level44", "Level45", "Level5", "Level7", "Level8", "Level9", "AudioManager", "ButtonMusic", "MusicEvent", "Bing", "BlackChe", "BlackJiang", "BlackMa", "BlackPao", "BlackShi", "BlackXiang", "BlackZu", "Che", "Ma", "Pao", "Shi", "Shuai", "Xiang" ]);