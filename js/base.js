"use strict";
var Tween = {
    Linear: function (t, b, c, d) {
        return c * t / d + b;
    },
    Quad: {
        easeIn: function (t, b, c, d) {
            return c * (t /= d) * t + b;
        },
        easeOut: function (t, b, c, d) {
            return -c * (t /= d) * (t - 2) + b;
        },
        easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t + b;
            return -c / 2 * ((--t) * (t - 2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function (t, b, c, d) {
            return c * (t /= d) * t * t + b;
        },
        easeOut: function (t, b, c, d) {
            return c * ((t = t / d - 1) * t * t + 1) + b;
        },
        easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t + 2) + b;
        }
    },
    Quart: {
        easeIn: function (t, b, c, d) {
            return c * (t /= d) * t * t * t + b;
        },
        easeOut: function (t, b, c, d) {
            return -c * ((t = t / d - 1) * t * t * t - 1) + b;
        },
        easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t * t + b;
            return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
        }
    },
    Quint: {
        easeIn: function (t, b, c, d) {
            return c * (t /= d) * t * t * t * t + b;
        },
        easeOut: function (t, b, c, d) {
            return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
        },
        easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1)
                return c / 2 * t * t * t * t * t + b;
            return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
        }
    },
    Sine: {
        easeIn: function (t, b, c, d) {
            return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
        },
        easeOut: function (t, b, c, d) {
            return c * Math.sin(t / d * (Math.PI / 2)) + b;
        },
        easeInOut: function (t, b, c, d) {
            return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function (t, b, c, d) {
            return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
        easeOut: function (t, b, c, d) {
            return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
        },
        easeInOut: function (t, b, c, d) {
            if (t == 0)
                return b;
            if (t == d)
                return b + c;
            if ((t /= d / 2) < 1)
                return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
            return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function (t, b, c, d) {
            return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
        },
        easeOut: function (t, b, c, d) {
            return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
        },
        easeInOut: function (t, b, c, d) {
            if ((t /= d / 2) < 1)
                return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function (t, b, c, d, a, p) {
            var s;
            if (t == 0)
                return b;
            if ((t /= d) == 1)
                return b + c;
            if (typeof p == "undefined")
                p = d * .3;
            if (!a || a < Math.abs(c)) {
                s = p / 4;
                a = c;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOut: function (t, b, c, d, a, p) {
            var s;
            if (t == 0)
                return b;
            if ((t /= d) == 1)
                return b + c;
            if (typeof p == "undefined")
                p = d * .3;
            if (!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
        },
        easeInOut: function (t, b, c, d, a, p) {
            var s;
            if (t == 0)
                return b;
            if ((t /= d / 2) == 2)
                return b + c;
            if (typeof p == "undefined")
                p = d * (.3 * 1.5);
            if (!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            }
            else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            if (t < 1)
                return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        }
    },
    Back: {
        easeIn: function (t, b, c, d, s) {
            if (typeof s == "undefined")
                s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOut: function (t, b, c, d, s) {
            if (typeof s == "undefined")
                s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOut: function (t, b, c, d, s) {
            if (typeof s == "undefined")
                s = 1.70158;
            if ((t /= d / 2) < 1)
                return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
            return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function (t, b, c, d) {
            return c - Tween.Bounce.easeOut(d - t, 0, c, d) + b;
        },
        easeOut: function (t, b, c, d) {
            if ((t /= d) < (1 / 2.75)) {
                return c * (7.5625 * t * t) + b;
            }
            else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            }
            else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            }
            else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOut: function (t, b, c, d) {
            if (t < d / 2) {
                return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
            }
            else {
                return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        }
    }
};
var Utils = (function () {
    function Utils() {
    }
    /**
     * 获取URL参数
     * @param name
     * @returns {any}
     */
    Utils.getQueryString = function (name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r !== null) {
            return decodeURIComponent(r[2]);
        }
        return null;
    };
    /**
     * 删除数组重复元素
     * @param array
     * @returns {Array}
     */
    Utils.uniqueArray = function (array) {
        var n = {}, r = [], len = array.length, val, type;
        for (var i = 0; i < array.length; i++) {
            val = array[i];
            type = typeof val;
            if (!n[val]) {
                n[val] = [type];
                r.push(val);
            }
            else if (n[val].indexOf(type) < 0) {
                n[val].push(type);
                r.push(val);
            }
        }
        return r;
    };
    /**
     * 货币格式化
     * @param num
     * @returns {string}
     */
    Utils.toThousands = function (num) {
        var r1 = RegExp(/((^[-]?([1-9]\d*))|^0)(\.\d{1,2})?$|(^[-]0\.\d{1,2}$)/g);
        var str = num.toString();
        if (r1.test(str)) {
            var arr = str.split(".");
            var s1 = arr[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
            var s2 = arr[1] ? (arr[1].length === 1 ? arr[1] + "0" : arr[1]) : null || "00";
            return s1 + "." + s2;
        }
        else {
            return "0.00";
        }
    };
    /**
     * 对象转换urlcode
     * @param param
     * @param {string} key
     * @param encode
     * @returns {any}
     */
    Utils.urlEncode = function (param, key, encode) {
        if (param == null)
            return '';
        var paramStr = '';
        var t = typeof (param);
        if (t == 'string' || t == 'number' || t == 'boolean') {
            paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
        }
        else {
            for (var i in param) {
                var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
                paramStr += Utils.urlEncode(param[i], k, encode);
            }
        }
        return paramStr;
    };
    Utils.variableType = {
        isUndefined: function (obj) {
            return typeof obj == 'undefined';
        },
        isFunction: function (obj) {
            return typeof obj == 'function';
        },
        isNumber: function (obj) {
            return typeof obj == 'number';
        },
        isString: function (obj) {
            return typeof obj == 'string';
        }
    };
    /**
     * 随机数
     * @type {{range: ((min: number, max: number) => number); color: (() => string)}}
     */
    Utils.Random = {
        range: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        color: function () {
            return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
        }
    };
    Utils.Check = {
        mobile: function (str) {
            var reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            return reg.test(str);
        },
        email: function (str) {
            var reg = /^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i;
            return reg.test(str);
        },
        idCard: function (str) {
            var Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子
            var ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值.10代表X
            var idCard = str.trim();
            if (idCard.length == 15) {
                return isValidityBrithBy15IdCard(idCard);
            }
            else if (idCard.length == 18) {
                var a_idCard = idCard.split(""); // 得到身份证数组
                return isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard);
            }
            else {
                return false;
            }
            /**
             * 判断身份证号码为18位时最后的验证位是否正确
             * @param a_idCard 身份证号码数组
             * @return
             */
            function isTrueValidateCodeBy18IdCard(a_idCard) {
                var sum = 0; // 声明加权求和变量
                if (a_idCard[17].toLowerCase() == 'x') {
                    a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
                }
                for (var i = 0; i < 17; i++) {
                    sum += Wi[i] * a_idCard[i]; // 加权求和
                }
                var valCodePosition = sum % 11; // 得到验证码所位置
                return a_idCard[17] == ValideCode[valCodePosition];
            }
            /**
             * 验证18位数身份证号码中的生日是否是有效生日
             * @param idCard 18位书身份证字符串
             * @return
             */
            function isValidityBrithBy18IdCard(idCard18) {
                var year = idCard18.substring(6, 10);
                var month = idCard18.substring(10, 12);
                var day = idCard18.substring(12, 14);
                var temp_date = new Date(parseFloat(year), parseFloat(month) - 1, parseFloat(day));
                // 这里用getFullYear()获取年份，避免千年虫问题
                return temp_date.getFullYear() == parseFloat(year)
                    || temp_date.getMonth() == parseFloat(month) - 1
                    || temp_date.getDate() == parseFloat(day);
            }
            /**
             * 验证15位数身份证号码中的生日是否是有效生日
             * @param idCard15 15位书身份证字符串
             * @return
             */
            function isValidityBrithBy15IdCard(idCard15) {
                var year = idCard15.substring(6, 8);
                var month = idCard15.substring(8, 10);
                var day = idCard15.substring(10, 12);
                var temp_date = new Date(parseFloat(year), parseFloat(month) - 1, parseFloat(day));
                // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
                return temp_date.getFullYear() == parseFloat(year)
                    || temp_date.getMonth() == parseFloat(month) - 1
                    || temp_date.getDate() == parseFloat(day);
            }
        },
        /**
         * 通过身份证判断是男是女
         * @param idCard 15/18位身份证号码
         * @return 'female'-女、'male'-男
         */
        maleOrFemalByIdCard: function (idCard) {
            idCard = idCard.trim();
            if (Utils.Check.idCard(idCard)) {
                if (idCard.length == 15) {
                    if (idCard.substring(14, 15) % 2 == 0) {
                        return 'female';
                    }
                    else {
                        return 'male';
                    }
                }
                else if (idCard.length == 18) {
                    if (idCard.substring(14, 17) % 2 == 0) {
                        return 'female';
                    }
                    else {
                        return 'male';
                    }
                }
                else {
                    return null;
                }
            }
            else {
                alert('请输入有效的身份证号码！');
            }
        }
    };
    return Utils;
}());
var PreLoad = (function () {
    /**
     *
     * @param {boolean} progress
     * @param {string} element
     */
    function PreLoad(element, progress) {
        if (element === void 0) { element = "body"; }
        if (progress === void 0) { progress = true; }
        this.container = document.querySelector(element);
        this.Nodes = this.container.querySelectorAll("img");
        console.log(this.Nodes);
        var loaded = 0;
        /**
         * 显示进度条
         */
        if (progress) {
            this.bar = document.createElement("progress");
            document.body.appendChild(this.bar);
            this.bar.value = 0;
            this.bar.style.display = "block";
        }
        /**
         * 图片载入进度
         */
        document.addEventListener("IMAGE_LOADED", function (e) {
            var obj = e["detail"];
            var percent = Number((loaded / obj.Nodes.length).toFixed(2));
            PreLoad.progressBar(percent);
            loaded++;
            if (loaded === obj.Nodes.length) {
                if (obj.bar) {
                    obj.bar.style.display = "none";
                }
                for (var _i = 0, _a = obj.Nodes; _i < _a.length; _i++) {
                    var img = _a[_i];
                    img.src = img.dataset.src;
                    img.removeAttribute("data-src");
                    PreLoad.fadeIn(img);
                }
            }
        });
    }
    PreLoad.prototype.load = function () {
        for (var _i = 0, _a = this.Nodes; _i < _a.length; _i++) {
            var img = _a[_i];
            this.preloadImage(img);
        }
    };
    PreLoad.prototype.preloadImage = function (img) {
        var myImage = new Image();
        myImage.src = img.dataset.src;
        myImage["parent"] = this;
        myImage.addEventListener("load", this.preloadImageLoaded);
    };
    PreLoad.prototype.preloadImageLoaded = function () {
        var parent = this["parent"];
        document.dispatchEvent(new CustomEvent("IMAGE_LOADED", { detail: parent }));
    };
    PreLoad.fadeIn = function (img) {
        img.style.opacity = 1;
    };
    PreLoad.progressBar = function (val) {
        if (document.querySelector("progress")) {
            document.querySelector("progress").value = val;
        }
    };
    return PreLoad;
}());
var LazyLoad = (function () {
    /**
     * 滚动加载图片
     * @param element
     * @param img
     * @param cssStyle
     */
    function LazyLoad(element, img, cssStyle) {
        this.container = document.querySelector(element);
        this.Nodes = this.container.querySelectorAll(img);
        if (cssStyle) {
            this.setNodeStyle(cssStyle);
        }
        this.bindEvent();
    }
    LazyLoad.prototype.load = function (node) {
        var n = node;
        if (n.querySelector("img")) {
            if (n.querySelector("img").src === "") {
                var url = n.querySelector("img").dataset.src;
                var img = new Image();
                img.src = url;
                img.addEventListener("load", function () {
                    n.style.opacity = 1;
                    n.querySelector("img").src = this.src;
                    n.querySelector("img").removeAttribute("data-src");
                });
                console.log(img);
            }
        }
    };
    LazyLoad.prototype.bindEvent = function () {
        this.container.addEventListener("scroll", this.scrolling);
        this.container.Nodes = this.Nodes;
        this.container.load = this.load;
        this.scrolling(this.container);
    };
    LazyLoad.prototype.scrolling = function (e) {
        var el = e instanceof Event ? e.currentTarget : e;
        var s = Number((el.scrollTop + el.offsetTop + el.offsetHeight).toFixed(0));
        for (var _i = 0, _a = this.Nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            if (s >= node.offsetTop) {
                this.load(node);
            }
        }
    };
    LazyLoad.prototype.setNodeStyle = function (cssStyle) {
        var str = "";
        for (var css in cssStyle) {
            str += css + ":" + cssStyle[css] + ";";
        }
        for (var _i = 0, _a = this.Nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            node.style.cssText = str;
        }
    };
    return LazyLoad;
}());
var FramePlay = (function () {
    /**
     *
     * @param {string} el
     * @param {string} framePath
     * @param {number} frameTotal
     * @param {number} fps
     * @param {number} w
     * @param {number} h
     * @param {number} loop
     */
    function FramePlay(el, framePath, frameTotal, fps, w, h, loop) {
        if (fps === void 0) { fps = 30; }
        if (w === void 0) { w = 100; }
        if (h === void 0) { h = 100; }
        if (loop === void 0) { loop = -1; }
        this.frames = [];
        this.currentFrame = 1;
        this.column = 5;
        this.row = 0;
        this.paused = true;
        this.container = document.querySelector(el);
        this.path = framePath;
        this.totalFrame = frameTotal;
        this.fps = fps;
        this.loop = loop;
        this.init(w, h);
    }
    FramePlay.prototype.init = function (w, h) {
        var canvas = document.createElement("canvas");
        canvas.id = "canvas";
        canvas.width = w;
        canvas.height = h;
        canvas.style.width = this.container.offsetWidth + "px";
        this.container.appendChild(canvas);
        this.ctx = canvas.getContext('2d');
        this.getFrames();
    };
    FramePlay.prototype.getFrames = function () {
        if (this.currentFrame <= this.totalFrame) {
            var img = new Image();
            img.src = this.path + this.currentFrame + ".jpg";
            img["parent"] = this;
            img.addEventListener("load", this.loadFrames);
        }
    };
    FramePlay.prototype.loadFrames = function (e) {
        e.currentTarget.removeEventListener("load", this.loadFrames);
        //this["parent"].draw(e.currentTarget);
        this["parent"].currentFrame++;
        this["parent"].frames.push(e.currentTarget);
        this["parent"].getFrames();
        if (this["parent"].currentFrame === this["parent"].totalFrame) {
            var currentFrame_1 = 0;
            var totalFrame_1 = this["parent"].totalFrame - 1;
            var loop_1 = this["parent"].loop;
            var frames_1 = this["parent"].frames;
            var fps = this["parent"].fps;
            var ctx_1 = this["parent"].ctx;
            this["parent"].render = new RequestAnimationFrameC(function () {
                ctx_1.drawImage(frames_1[currentFrame_1], 0, 0);
                if (currentFrame_1 < totalFrame_1) {
                    currentFrame_1++;
                }
                else {
                    if (loop_1 === 0) {
                        this["parent"].render.pause();
                    }
                    else if (loop_1 > 0) {
                        currentFrame_1 = 0;
                        loop_1--;
                    }
                    else {
                        currentFrame_1 = 0;
                    }
                }
            }, 1000 / fps);
            this["parent"].play();
        }
    };
    FramePlay.prototype.draw = function (img) {
        var m = this.currentFrame - 1;
        this.ctx.drawImage(img, m % this.column * img.width, this.row * img.height);
        if (m % this.column === this.column - 1) {
            this.row++;
        }
    };
    FramePlay.prototype.pause = function () {
        if (this.render) {
            this.render.pause();
            this.paused = true;
        }
    };
    FramePlay.prototype.play = function () {
        if (this.render) {
            this.render.start();
            this.paused = false;
        }
    };
    return FramePlay;
}());
var RequestAnimationFrameC = (function () {
    function RequestAnimationFrameC(func, interval) {
        if (interval === void 0) { interval = 1000 / 30; }
        this.isPlaying = false;
        this.interval = interval;
        this.func = func;
    }
    RequestAnimationFrameC.prototype.init = function () {
        var now;
        var then = Date.now();
        var delta;
        var self = this;
        function step(timestamp) {
            self.req = window.requestAnimationFrame(step);
            now = Date.now();
            delta = now - then;
            if (delta > self.interval) {
                then = now - (delta % self.interval);
                self.func();
            }
        }
        self.req = requestAnimationFrame(step);
    };
    RequestAnimationFrameC.prototype.start = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.init();
        }
    };
    RequestAnimationFrameC.prototype.pause = function () {
        if (this.isPlaying) {
            window.cancelAnimationFrame(this.req);
            this.isPlaying = false;
        }
    };
    return RequestAnimationFrameC;
}());
var Amination = (function () {
    function Amination(f, t, d, e, func) {
        if (d === void 0) { d = 500; }
        if (e === void 0) { e = "Linear"; }
        this.easing = this.getEasing(e);
        this.duration = this.toMillisecond(d);
        this.from = f;
        this.to = t;
        this.func = func;
        this.init();
    }
    Amination.prototype.init = function () {
        var start = 0;
        var easing = this.easing;
        var from = this.from;
        var to = this.to;
        var during = Math.ceil(this.duration / 17);
        var req = null;
        var func = this.func;
        var step = function () {
            var value = easing(start, from, to - from, during);
            start++;
            if (start <= during) {
                req = window.requestAnimationFrame(step);
            }
            else {
                window.cancelAnimationFrame(req);
                if (func) {
                    func();
                }
            }
        };
        step();
    };
    ;
    Amination.prototype.toMillisecond = function (num) {
        if (Utils.variableType.isNumber(num)) {
            return num;
        }
        else if (Utils.variableType.isString(num)) {
            if (/\d+m?s$/.test(num)) {
                if (/ms/.test(num)) {
                    return 1 * num.replace('ms', '');
                }
                return 1000 * num.replace('s', '');
            }
            else if (/^\d+$/.test(num)) {
                return +num;
            }
        }
        return -1;
    };
    ;
    Amination.prototype.getEasing = function (e) {
        var tween = Tween[e];
        if (!Utils.variableType.isFunction(tween)) {
            var arr = e.split('.');
            tween = Tween[arr[0]][arr[1]];
        }
        return tween;
    };
    Amination.prototype.pause = function () {
    };
    return Amination;
}());
var Slide = (function () {
    /**
     *
     * @param {string} container
     * @param {number} index
     * @param {boolean} axisX
     * @param {boolean} continuous
     * @param {boolean} autoSwipe
     * @param {number} autoSpeed
     */
    function Slide(container, index, axisX, continuous, autoSwipe, autoSpeed) {
        if (index === void 0) { index = 0; }
        if (axisX === void 0) { axisX = true; }
        if (continuous === void 0) { continuous = false; }
        if (autoSwipe === void 0) { autoSwipe = false; }
        if (autoSpeed === void 0) { autoSpeed = 5000; }
        this.distance = 50;
        this.transitionType = 'ease';
        this.slideEnabled = true;
        this.duration = 0;
        this.index = index;
        this.axisX = axisX;
        this.continuous = continuous;
        this.container = document.querySelector(container);
        this.length = this.container.childElementCount;
        this.slideDistance = this.axisX ? this.container.clientWidth : this.container.clientHeight;
        this.autoSwipe = autoSwipe;
        this.autoSpeed = autoSpeed;
        /*window.onresize = function(){
            this.slideDistance = this.axisX ? this.container.offsetWidth : this.container.offsetHeight;
        }*/
        if (this.axisX) {
            this.container.style.flexFlow = "row nowrap";
        }
        else {
            this.container.style.flexFlow = "column nowrap";
        }
        if (this.autoSwipe) {
            var obj_1 = this;
            this.autoSlide = new RequestAnimationFrameC(function () {
                if (!obj_1.continuous) {
                    if (obj_1.index === obj_1.length - 1) {
                        obj_1.index = -1;
                    }
                }
                obj_1.fnSlide('next', .5);
            }, this.autoSpeed);
            this.autoSlide.start();
        }
        if (this.continuous) {
            var lastChild = this.container.lastElementChild.cloneNode(true);
            var firstChild = this.container.firstElementChild.cloneNode(true);
            this.container.prepend(lastChild);
            this.container.append(firstChild);
            this.index = this.index + 1;
            this.length = this.container.childElementCount;
        }
        this.bindEvent();
        Slide.fnScroll(this, 0);
    }
    Slide.prototype.bindEvent = function () {
        this.container.parentNode.addEventListener('touchstart', this.fnTouchstart);
        this.container.parentNode.addEventListener('touchmove', this.fnTouchmove);
        this.container.parentNode.addEventListener('touchend', this.fnTouchend);
        this.container.parentNode["options"] = this;
    };
    Slide.prototype.fnTouchstart = function (e) {
        this["isScrolling"] = undefined;
        this["moveDistance"] = 0;
        this["options"].slideDistance = this["options"].axisX ? this["options"].container.clientWidth : this["options"].container.clientHeight;
        // 按下时的坐标
        this["startX"] = e.touches[0].pageX;
        this["startY"] = e.touches[0].pageY;
        if (this["options"].autoSwipe) {
            this["options"].autoSlide.pause();
        }
    };
    Slide.prototype.fnTouchmove = function (e) {
        if (this["options"].slideEnabled) {
            // 触摸时的坐标
            this["curX"] = e.touches[0].pageX;
            this["curY"] = e.touches[0].pageY;
            // 触摸时的距离
            this["moveX"] = this["curX"] - this["startX"];
            this["moveY"] = this["curY"] - this["startY"];
            // 优化触摸禁止事件
            if (typeof this["isScrolling"] == 'undefined') {
                if (this["options"].axisX) {
                    this["isScrolling"] = (Math.abs(this["moveX"]) >= Math.abs(this["moveY"]));
                }
                else {
                    this["isScrolling"] = (Math.abs(this["moveY"]) >= Math.abs(this["moveX"]));
                }
            }
            // 距离
            if (this["isScrolling"]) {
                if (e.preventDefault)
                    e.preventDefault();
                else
                    e.returnValue = false;
                // 触摸时跟手
                Slide.fnTransition(this["options"], 0);
                this["moveDistance"] = this["options"].axisX ? this["moveX"] : this["moveY"];
            }
            Slide.fnTranslate(this["options"], -(this["options"].slideDistance * this["options"].index - this["moveDistance"]));
        }
    };
    Slide.prototype.fnTouchend = function () {
        // 移动距离大于 distance 滚动，否则回弹
        if (Math.abs(this["moveDistance"]) <= this["options"].distance) {
            this["options"].fnSlide('', .5);
        }
        else {
            // 手指触摸上一屏滚动
            if (this["moveDistance"] > this["options"].distance) {
                this["options"].fnSlide('prev', .5);
                // 手指触摸下一屏滚动
            }
            else if (Math.abs(this["moveDistance"]) > this["options"].distance) {
                this["options"].fnSlide('next', .5);
            }
        }
        this["moveDistance"] = 0;
        this["options"].slideEnabled = true;
        //console.log(this.dispatchEvent)
        this["options"].container.dispatchEvent(new CustomEvent("MOVE_END", { detail: this["options"] }));
        if (this["options"].autoSwipe) {
            this["options"].autoSlide.start();
        }
    };
    Slide.prototype.fnSlide = function (page, n) {
        this.slideDistance = this.axisX ? this.container.clientWidth : this.container.clientHeight;
        if (typeof page === 'number') {
            this.index = page;
        }
        else if (page == 'next') {
            this.index++;
        }
        else if (page == 'prev') {
            this.index--;
        }
        // 连续滚动
        if (this.continuous) {
            var obj_2 = this;
            Slide.fnScroll(this, .5);
            if (this.index < 1) {
                this.index = this.length - 2;
                setTimeout(function () {
                    Slide.fnScroll(obj_2, 0);
                    return;
                }, 600);
            }
            else if (this.index > this.length - 2) {
                this.index = 1;
                setTimeout(function () {
                    Slide.fnScroll(obj_2, 0);
                    return;
                }, 600);
            }
        }
        else {
            if (this.index >= this.length) {
                this.index = this.length - 1;
            }
            else if (this.index < 0) {
                this.index = 0;
            }
            Slide.fnScroll(this, .5);
        }
        this.container.dispatchEvent(new CustomEvent("MOVE_END", { detail: this }));
    };
    Slide.fnScroll = function (obj, n) {
        Slide.fnTransition(obj, n);
        Slide.fnTranslate(obj, -(obj.index * obj.slideDistance));
    };
    Slide.fnTransition = function (obj, n) {
        obj.container.style.transition = 'all ' + n + 's ' + obj.transitionType;
    };
    Slide.fnTranslate = function (obj, distance) {
        var result = obj.axisX ? distance + 'px,0,0' : '0,' + distance + 'px,0';
        obj.container.style.transform = 'translate3d(' + result + ')';
    };
    return Slide;
}());
var FixedLayer = (function () {
    function FixedLayer(element) {
        this.element = element;
        this.createLayer();
    }
    FixedLayer.prototype.createLayer = function () {
        var fixedLayer = document.querySelector(this.element);
        this.layer = fixedLayer;
        this.bg = document.createElement("div");
        this.bg.classList.add("bg");
        fixedLayer.appendChild(this.bg);
        this.bg.root = this;
        this.bg.addEventListener("click", this.layerClickHandler);
    };
    FixedLayer.prototype.layerClickHandler = function (e) {
        this['root'].hidden();
    };
    FixedLayer.prototype.layerWheelHandler = function (e) {
        e.stopPropagation();
        e.preventDefault();
    };
    FixedLayer.prototype.display = function () {
        var layer = this.layer;
        layer.style.display = "flex";
        window.requestAnimationFrame(function () {
            layer.classList.add("active");
        });
        //window.addEventListener('mousewheel', this.layerWheelHandler);
    };
    FixedLayer.prototype.hidden = function () {
        var layer = this.layer;
        layer.classList.remove("active");
        setTimeout(function () {
            layer.style.display = "none";
        }, 600);
        //window.removeEventListener('mousewheel', this.layerWheelHandler);
    };
    FixedLayer.prototype.destory = function () {
        this.bg.removeEventListener("click", this.layerClickHandler);
        this.hidden();
        document.body.removeChild(this.layer);
    };
    return FixedLayer;
}());
var GetPageData = (function () {
    function GetPageData(u, func, obj) {
        this.url = u;
        if (obj) {
            this.param = Utils.urlEncode(obj);
            this.param = this.param.substr(1, this.param.length - 1);
        }
        if (func) {
            this.func = func;
        }
        if (this.url || this.url !== "") {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("progress", this.updateProgress, false);
            xhr.addEventListener("load", this.transferComplete, false);
            xhr.addEventListener("error", this.transferFailed, false);
            xhr.addEventListener("abort", this.transferCanceled, false);
            xhr.open("POST", this.url);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(this.param);
            var str = this.url.split("/");
            xhr.name = str[str.length - 1];
            if (this.func) {
                xhr.func = this.func;
            }
        }
    }
    GetPageData.prototype.updateProgress = function (e) {
        console.log(e.target.name + ":::loading=>" + e.loaded);
    };
    GetPageData.prototype.transferComplete = function (e) {
        console.log(e.target.name + ":::complete");
        e.target.removeEventListener("progress", this.updateProgress, false);
        e.target.removeEventListener("load", this.transferComplete, false);
        e.target.removeEventListener("error", this.transferFailed, false);
        e.target.removeEventListener("abort", this.transferCanceled, false);
        e.target.func();
    };
    GetPageData.prototype.transferFailed = function (e) {
        e.target.removeEventListener("error", this.transferFailed, false);
        console.log(e.target.name + ":::" + e.type);
    };
    GetPageData.prototype.transferCanceled = function (e) {
        e.target.removeEventListener("abort", this.transferCanceled, false);
        console.log(e.target.name + ":::" + e);
    };
    return GetPageData;
}());
//# sourceMappingURL=base.js.map