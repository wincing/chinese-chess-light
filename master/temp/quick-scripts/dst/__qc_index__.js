
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_v2.1-2.2.1_cc.Toggle_event');
require('./assets/scripts/BlackPiece');
require('./assets/scripts/CheckerBoard');
require('./assets/scripts/Grid');
require('./assets/scripts/InitColor');
require('./assets/scripts/Piece');
require('./assets/scripts/PieceManager');
require('./assets/scripts/Ranking');
require('./assets/scripts/Share');
require('./assets/scripts/Skip');
require('./assets/scripts/levels/LEvel6');
require('./assets/scripts/levels/Level1');
require('./assets/scripts/levels/Level10');
require('./assets/scripts/levels/Level11');
require('./assets/scripts/levels/Level12');
require('./assets/scripts/levels/Level13');
require('./assets/scripts/levels/Level14');
require('./assets/scripts/levels/Level15');
require('./assets/scripts/levels/Level16');
require('./assets/scripts/levels/Level17');
require('./assets/scripts/levels/Level18');
require('./assets/scripts/levels/Level19');
require('./assets/scripts/levels/Level2');
require('./assets/scripts/levels/Level20');
require('./assets/scripts/levels/Level21');
require('./assets/scripts/levels/Level22');
require('./assets/scripts/levels/Level23');
require('./assets/scripts/levels/Level24');
require('./assets/scripts/levels/Level25');
require('./assets/scripts/levels/Level26');
require('./assets/scripts/levels/Level27');
require('./assets/scripts/levels/Level28');
require('./assets/scripts/levels/Level29');
require('./assets/scripts/levels/Level3');
require('./assets/scripts/levels/Level30');
require('./assets/scripts/levels/Level31');
require('./assets/scripts/levels/Level32');
require('./assets/scripts/levels/Level33');
require('./assets/scripts/levels/Level34');
require('./assets/scripts/levels/Level35');
require('./assets/scripts/levels/Level36');
require('./assets/scripts/levels/Level37');
require('./assets/scripts/levels/Level38');
require('./assets/scripts/levels/Level39');
require('./assets/scripts/levels/Level4');
require('./assets/scripts/levels/Level40');
require('./assets/scripts/levels/Level41');
require('./assets/scripts/levels/Level42');
require('./assets/scripts/levels/Level43');
require('./assets/scripts/levels/Level44');
require('./assets/scripts/levels/Level45');
require('./assets/scripts/levels/Level5');
require('./assets/scripts/levels/Level7');
require('./assets/scripts/levels/Level8');
require('./assets/scripts/levels/Level9');
require('./assets/scripts/music/AudioManager');
require('./assets/scripts/music/ButtonMusic');
require('./assets/scripts/music/MusicEvent');
require('./assets/scripts/piece/Bing');
require('./assets/scripts/piece/BlackChe');
require('./assets/scripts/piece/BlackJiang');
require('./assets/scripts/piece/BlackMa');
require('./assets/scripts/piece/BlackPao');
require('./assets/scripts/piece/BlackShi');
require('./assets/scripts/piece/BlackXiang');
require('./assets/scripts/piece/BlackZu');
require('./assets/scripts/piece/Che');
require('./assets/scripts/piece/Ma');
require('./assets/scripts/piece/Pao');
require('./assets/scripts/piece/Shi');
require('./assets/scripts/piece/Shuai');
require('./assets/scripts/piece/Xiang');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();