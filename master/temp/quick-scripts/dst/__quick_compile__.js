
(function () {
var scripts = [{"deps":{"./assets/scripts/BlackPiece":12,"./assets/scripts/InitColor":7,"./assets/scripts/Ranking":6,"./assets/scripts/Piece":9,"./assets/scripts/PieceManager":8,"./assets/scripts/Skip":11,"./assets/scripts/Share":10,"./assets/scripts/CheckerBoard":62,"./assets/migration/use_v2.1-2.2.1_cc.Toggle_event":3,"./assets/scripts/levels/Level10":13,"./assets/scripts/levels/Level11":14,"./assets/scripts/levels/Level12":1,"./assets/scripts/levels/Level17":20,"./assets/scripts/levels/Level14":21,"./assets/scripts/levels/Level13":15,"./assets/scripts/levels/Level1":16,"./assets/scripts/levels/Level2":22,"./assets/scripts/levels/Level19":24,"./assets/scripts/levels/Level18":27,"./assets/scripts/levels/Level16":17,"./assets/scripts/levels/Level20":26,"./assets/scripts/levels/Level23":28,"./assets/scripts/levels/Level21":19,"./assets/scripts/levels/Level15":18,"./assets/scripts/levels/Level24":25,"./assets/scripts/levels/Level25":34,"./assets/scripts/levels/Level22":23,"./assets/scripts/levels/Level3":32,"./assets/scripts/levels/Level29":31,"./assets/scripts/levels/Level27":29,"./assets/scripts/levels/Level26":30,"./assets/scripts/levels/Level31":35,"./assets/scripts/levels/Level32":42,"./assets/scripts/levels/Level30":33,"./assets/scripts/levels/Level28":37,"./assets/scripts/levels/Level36":43,"./assets/scripts/levels/Level35":38,"./assets/scripts/levels/Level33":36,"./assets/scripts/levels/Level38":44,"./assets/scripts/levels/Level34":39,"./assets/scripts/levels/Level4":50,"./assets/scripts/levels/Level39":45,"./assets/scripts/levels/Level37":40,"./assets/scripts/levels/Level45":47,"./assets/scripts/levels/Level41":41,"./assets/scripts/levels/Level5":53,"./assets/scripts/levels/Level43":48,"./assets/scripts/levels/Level44":49,"./assets/scripts/levels/Level8":52,"./assets/scripts/levels/Level42":56,"./assets/scripts/levels/Level7":51,"./assets/scripts/levels/Level40":46,"./assets/scripts/levels/Level9":57,"./assets/scripts/levels/LEvel6":54,"./assets/scripts/music/ButtonMusic":55,"./assets/scripts/music/MusicEvent":4,"./assets/scripts/music/AudioManager":60,"./assets/scripts/piece/BlackChe":5,"./assets/scripts/piece/BlackMa":59,"./assets/scripts/piece/BlackShi":61,"./assets/scripts/piece/BlackJiang":64,"./assets/scripts/piece/BlackPao":58,"./assets/scripts/piece/BlackXiang":63,"./assets/scripts/piece/Ma":68,"./assets/scripts/piece/Che":65,"./assets/scripts/piece/BlackZu":66,"./assets/scripts/piece/Pao":70,"./assets/scripts/piece/Shuai":69,"./assets/scripts/piece/Xiang":71,"./assets/scripts/piece/Shi":67,"./assets/scripts/piece/Bing":72,"./assets/scripts/Grid":2},"path":"preview-scripts/__qc_index__.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level12.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Grid.js"},{"deps":{},"path":"preview-scripts/assets/migration/use_v2.1-2.2.1_cc.Toggle_event.js"},{"deps":{},"path":"preview-scripts/assets/scripts/music/MusicEvent.js"},{"deps":{"BlackPiece":12},"path":"preview-scripts/assets/scripts/piece/BlackChe.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Ranking.js"},{"deps":{},"path":"preview-scripts/assets/scripts/InitColor.js"},{"deps":{},"path":"preview-scripts/assets/scripts/PieceManager.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Piece.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Share.js"},{"deps":{},"path":"preview-scripts/assets/scripts/Skip.js"},{"deps":{},"path":"preview-scripts/assets/scripts/BlackPiece.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level10.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level11.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level13.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level1.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level16.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level15.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level21.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level17.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level14.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level2.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level22.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level19.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level24.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level20.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level18.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level23.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level27.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level26.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level29.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level3.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level30.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level25.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level31.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level33.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level28.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level35.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level34.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level37.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level41.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level32.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level36.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level38.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level39.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level40.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level45.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level43.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level44.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level4.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level7.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level8.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level5.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/LEvel6.js"},{"deps":{},"path":"preview-scripts/assets/scripts/music/ButtonMusic.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level42.js"},{"deps":{},"path":"preview-scripts/assets/scripts/levels/Level9.js"},{"deps":{"BlackPiece":12},"path":"preview-scripts/assets/scripts/piece/BlackPao.js"},{"deps":{"BlackPiece":12},"path":"preview-scripts/assets/scripts/piece/BlackMa.js"},{"deps":{},"path":"preview-scripts/assets/scripts/music/AudioManager.js"},{"deps":{"BlackPiece":12},"path":"preview-scripts/assets/scripts/piece/BlackShi.js"},{"deps":{},"path":"preview-scripts/assets/scripts/CheckerBoard.js"},{"deps":{"BlackPiece":12},"path":"preview-scripts/assets/scripts/piece/BlackXiang.js"},{"deps":{"BlackPiece":12},"path":"preview-scripts/assets/scripts/piece/BlackJiang.js"},{"deps":{"Piece":9},"path":"preview-scripts/assets/scripts/piece/Che.js"},{"deps":{"BlackPiece":12},"path":"preview-scripts/assets/scripts/piece/BlackZu.js"},{"deps":{"Piece":9},"path":"preview-scripts/assets/scripts/piece/Shi.js"},{"deps":{"Piece":9},"path":"preview-scripts/assets/scripts/piece/Ma.js"},{"deps":{"Piece":9},"path":"preview-scripts/assets/scripts/piece/Shuai.js"},{"deps":{"Piece":9},"path":"preview-scripts/assets/scripts/piece/Pao.js"},{"deps":{"Piece":9},"path":"preview-scripts/assets/scripts/piece/Xiang.js"},{"deps":{"Piece":9},"path":"preview-scripts/assets/scripts/piece/Bing.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    