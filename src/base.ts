"use strict";
const Tween = {
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
            if ((t /= d / 2) < 1) return c / 2 * t * t + b;
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
            if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
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
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
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
            if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
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
            if (t == 0) return b;
            if (t == d) return b + c;
            if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
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
            if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
            return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function (t, b, c, d, a, p) {
            let s;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
                s = p / 4;
                a = c;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        },
        easeOut: function (t, b, c, d, a, p) {
            let s;
            if (t == 0) return b;
            if ((t /= d) == 1) return b + c;
            if (typeof p == "undefined") p = d * .3;
            if (!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            return (a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b);
        },
        easeInOut: function (t, b, c, d, a, p) {
            let s;
            if (t == 0) return b;
            if ((t /= d / 2) == 2) return b + c;
            if (typeof p == "undefined") p = d * (.3 * 1.5);
            if (!a || a < Math.abs(c)) {
                a = c;
                s = p / 4;
            } else {
                s = p / (2 * Math.PI) * Math.asin(c / a);
            }
            if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1 )) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
            return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
        }
    },
    Back: {
        easeIn: function (t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * (t /= d) * t * ((s + 1) * t - s) + b;
        },
        easeOut: function (t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
        },
        easeInOut: function (t, b, c, d, s) {
            if (typeof s == "undefined") s = 1.70158;
            if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
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
            } else if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
            } else if (t < (2.5 / 2.75)) {
                return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
            } else {
                return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
            }
        },
        easeInOut: function (t, b, c, d) {
            if (t < d / 2) {
                return Tween.Bounce.easeIn(t * 2, 0, c, d) * .5 + b;
            } else {
                return Tween.Bounce.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
            }
        }
    }
};

class Utils {
    public static variableType = {
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
     * 获取URL参数
     * @param name
     * @returns {any}
     */
    public static getQueryString(name: string) {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        let r = window.location.search.substr(1).match(reg);
        if (r !== null) {
            return decodeURIComponent(r[2]);
        }
        return null;
    }

    /**
     * 删除数组重复元素
     * @param array
     * @returns {Array}
     */
    public static uniqueArray(array: Array<string>) {
        let n = {}, r = [], len = array.length, val, type;
        for (let i = 0; i < array.length; i++) {
            val = array[i];
            type = typeof val;
            if (!n[val]) {
                n[val] = [type];
                r.push(val);
            } else if (n[val].indexOf(type) < 0) {
                n[val].push(type);
                r.push(val);
            }
        }
        return r;
    }

    /**
     * 货币格式化
     * @param num
     * @returns {string}
     */
    public static toThousands(num: any): string {
        const r1 = RegExp(/((^[-]?([1-9]\d*))|^0)(\.\d{1,2})?$|(^[-]0\.\d{1,2}$)/g);
        const str: string = num.toString();
        if (r1.test(str)) {
            let arr: Array<string> = str.split(".");
            let s1 = arr[0].replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
            let s2 = arr[1] ? (arr[1].length === 1 ? arr[1] + "0" : arr[1]) : null || "00";
            return s1 + "." + s2;
        } else {
            return "0.00";
        }
    }

    /**
     * 对象转换urlcode
     * @param param
     * @param {string} key
     * @param encode
     * @returns {any}
     */
    public static urlEncode(param: any, key?: string, encode?: any) {
        if (param == null) return '';
        let paramStr = '';
        let t = typeof (param);
        if (t == 'string' || t == 'number' || t == 'boolean') {
            paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
        } else {
            for (let i in param) {
                let k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
                paramStr += Utils.urlEncode(param[i], k, encode);
            }
        }
        return paramStr;
    }

    /**
     * 随机数
     * @type {{range: ((min: number, max: number) => number); color: (() => string)}}
     */
    public static Random = {
        range: function (min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        color: function () {
            return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
        }
    };

    public static Check = {
        mobile: function (str: string) {
            let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
            return reg.test(str);
        },
        email: function (str: string) {
            let reg = /^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i;
            return reg.test(str);
        },
        idCard: function (str: string) {
            let Wi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1]; // 加权因子
            let ValideCode = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; // 身份证验证位值.10代表X

            let idCard = str.trim();
            if (idCard.length == 15) {
                return isValidityBrithBy15IdCard(idCard);
            } else if (idCard.length == 18) {
                let a_idCard = idCard.split(""); // 得到身份证数组
                return isValidityBrithBy18IdCard(idCard) && isTrueValidateCodeBy18IdCard(a_idCard);
            } else {
                return false;
            }

            /**
             * 判断身份证号码为18位时最后的验证位是否正确
             * @param a_idCard 身份证号码数组
             * @return
             */
            function isTrueValidateCodeBy18IdCard(a_idCard: any) {
                let sum = 0; // 声明加权求和变量
                if (a_idCard[17].toLowerCase() == 'x') {
                    a_idCard[17] = 10; // 将最后位为x的验证码替换为10方便后续操作
                }
                for (let i = 0; i < 17; i++) {
                    sum += Wi[i] * a_idCard[i]; // 加权求和
                }
                let valCodePosition = sum % 11; // 得到验证码所位置
                return a_idCard[17] == ValideCode[valCodePosition];
            }

            /**
             * 验证18位数身份证号码中的生日是否是有效生日
             * @param idCard 18位书身份证字符串
             * @return
             */
            function isValidityBrithBy18IdCard(idCard18: string) {
                let year = idCard18.substring(6, 10);
                let month = idCard18.substring(10, 12);
                let day = idCard18.substring(12, 14);
                let temp_date = new Date(parseFloat(year), parseFloat(month) - 1, parseFloat(day));
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
            function isValidityBrithBy15IdCard(idCard15: string) {
                let year = idCard15.substring(6, 8);
                let month = idCard15.substring(8, 10);
                let day = idCard15.substring(10, 12);
                let temp_date = new Date(parseFloat(year), parseFloat(month) - 1, parseFloat(day));
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
        maleOrFemalByIdCard: function (idCard: any) {
            idCard = idCard.trim();
            if (Utils.Check.idCard(idCard)) {
                if (idCard.length == 15) {
                    if (idCard.substring(14, 15) % 2 == 0) {
                        return 'female';
                    } else {
                        return 'male';
                    }
                } else if (idCard.length == 18) {
                    if (idCard.substring(14, 17) % 2 == 0) {
                        return 'female';
                    } else {
                        return 'male';
                    }
                } else {
                    return null;
                }
            } else {
                alert('请输入有效的身份证号码！');
            }
        }
    };
}

class PreLoad {
    private Nodes: any;
    private container: any;
    private bar: any;

    /**
     *
     * @param {boolean} progress
     * @param {string} element
     */
    protected constructor(element: string = "body", progress: boolean = true) {
        this.container = document.querySelector(element);
        this.Nodes = this.container.querySelectorAll("img");
        console.log(this.Nodes)
        let loaded = 0;
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
            let obj = e["detail"];
            let percent: number = Number((loaded / obj.Nodes.length).toFixed(2));
            PreLoad.progressBar(percent);
            loaded++;
            if (loaded === obj.Nodes.length) {
                if (obj.bar) {
                    obj.bar.style.display = "none";
                }
                for (let img of obj.Nodes) {
                    img.src = img.dataset.src;
                    img.removeAttribute("data-src");
                    PreLoad.fadeIn(img);
                }
            }
        });
    }

    protected load(): void {
        for (let img of this.Nodes) {
            this.preloadImage(img)
        }
    }

    private preloadImage(img: any) {
        let myImage = new Image();
        myImage.src = img.dataset.src;
        myImage["parent"] = this;
        myImage.addEventListener("load", this.preloadImageLoaded);
    }

    private preloadImageLoaded() {
        let parent: any = this["parent"];
        document.dispatchEvent(new CustomEvent("IMAGE_LOADED", {detail: parent}));
    }

    private static fadeIn(img: any) {
        img.style.opacity = 1;
    }

    private static progressBar(val: number) {
        if (document.querySelector("progress")) {
            document.querySelector("progress").value = val;
        }
    }
}

class LazyLoad {
    private Nodes: any;
    private container: any;

    /**
     * 滚动加载图片
     * @param element
     * @param img
     * @param cssStyle
     */
    protected constructor(element: string, img: string, cssStyle?: object) {
        this.container = document.querySelector(element);
        this.Nodes = this.container.querySelectorAll(img);
        if (cssStyle) {
            this.setNodeStyle(cssStyle);
        }
        this.bindEvent();
    }

    protected load(node: any) {
        let n = node;
        if (n.querySelector("img")) {
            if (n.querySelector("img").src === "") {
                let url = n.querySelector("img").dataset.src;
                let img = new Image();
                img.src = url;
                img.addEventListener("load", function () {
                    n.style.opacity = 1;
                    n.querySelector("img").src = this.src;
                    n.querySelector("img").removeAttribute("data-src");
                });
                console.log(img)
            }
        }
    }

    private bindEvent() {
        this.container.addEventListener("scroll", this.scrolling);
        this.container.Nodes = this.Nodes;
        this.container.load = this.load;

        this.scrolling(this.container)
    }

    private scrolling(e: any) {
        let el = e instanceof Event ? e.currentTarget : e;
        let s = Number((el.scrollTop + el.offsetTop + el.offsetHeight).toFixed(0));
        for (let node of this.Nodes) {
            if (s >= node.offsetTop) {
                this.load(node)
            }
        }
    }

    private setNodeStyle(cssStyle: object) {
        let str: string = "";
        for (let css in cssStyle) {
            str += css + ":" + cssStyle[css] + ";";
        }
        for (let node of this.Nodes) {
            node.style.cssText = str;
        }
    }
}

class FramePlay {
    private frames: Array<HTMLElement> = [];
    private container: any;
    private currentFrame: number = 1;
    private totalFrame: number;
    private path: string;
    private ctx: any;
    private column: number = 5;
    private row: number = 0;
    private fps: number;
    private loop: number;
    private render: any;
    public paused: boolean = true;

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
    protected constructor(el: string, framePath: string, frameTotal: number, fps: number = 30, w: number = 100, h: number = 100, loop: number = -1) {
        this.container = document.querySelector(el);
        this.path = framePath;
        this.totalFrame = frameTotal;
        this.fps = fps;
        this.loop = loop;
        this.init(w, h);
    }

    private init(w: number, h: number): void {
        let canvas = document.createElement("canvas");
        canvas.id = "canvas";
        canvas.width = w;
        canvas.height = h;
        canvas.style.width = this.container.offsetWidth + "px";
        this.container.appendChild(canvas);
        this.ctx = canvas.getContext('2d');
        this.getFrames();
    }

    private getFrames(): void {
        if (this.currentFrame <= this.totalFrame) {
            let img = new Image();
            img.src = this.path + this.currentFrame + ".jpg";
            img["parent"] = this;
            img.addEventListener("load", this.loadFrames);
        }
    }

    private loadFrames(e): void {
        e.currentTarget.removeEventListener("load", this.loadFrames);
        //this["parent"].draw(e.currentTarget);
        this["parent"].currentFrame++;
        this["parent"].frames.push(e.currentTarget);
        this["parent"].getFrames();

        if (this["parent"].currentFrame === this["parent"].totalFrame) {
            let currentFrame = 0;
            let totalFrame = this["parent"].totalFrame - 1;
            let loop = this["parent"].loop;
            let frames = this["parent"].frames;
            let fps = this["parent"].fps;
            let ctx = this["parent"].ctx;

            this["parent"].render = new RequestAnimationFrameC(function () {
                ctx.drawImage(frames[currentFrame], 0, 0);
                if (currentFrame < totalFrame) {
                    currentFrame++
                } else {
                    if (loop === 0) {
                        this["parent"].render.pause();
                    } else if (loop > 0) {
                        currentFrame = 0;
                        loop--
                    } else {
                        currentFrame = 0;
                    }
                }
            }, 1000 / fps);
            this["parent"].play()
        }
    }


    private draw(img: any) {
        let m = this.currentFrame - 1;
        this.ctx.drawImage(img, m % this.column * img.width, this.row * img.height);
        if (m % this.column === this.column - 1) {
            this.row++
        }
    }

    public pause() {
        if (this.render) {
            this.render.pause();
            this.paused = true;
        }
    }

    public play() {
        if (this.render) {
            this.render.start();
            this.paused = false;
        }
    }

}

class RequestAnimationFrameC {
    private interval: number;
    private isPlaying: boolean = false;
    private func: any;
    private req;

    constructor(func: any, interval: number = 1000 / 30) {
        this.interval = interval;
        this.func = func;
    }

    private init() {
        let now;
        let then = Date.now();
        let delta;
        let self = this;

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
    }

    public start() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.init();
        }
    }

    public pause() {
        if (this.isPlaying) {
            window.cancelAnimationFrame(this.req);
            this.isPlaying = false;
        }
    }
}

class Amination {
    private easing: any;
    private duration: number;
    private from: number;
    private to: number;
    private func: any;

    private constructor(f: number, t: number, d: any = 500, e: any = "Linear", func?: any) {
        this.easing = this.getEasing(e);
        this.duration = this.toMillisecond(d);
        this.from = f;
        this.to = t;
        this.func = func;

        this.init()
    }

    private init() {
        let start = 0;
        let easing = this.easing;
        let from = this.from;
        let to = this.to;
        let during = Math.ceil(this.duration / 17);
        let req = null;
        let func = this.func;
        let step = function () {
            let value = easing(start, from, to - from, during);
            start++;
            if (start <= during) {
                req = window.requestAnimationFrame(step);
            } else {
                window.cancelAnimationFrame(req);
                if (func) {
                    func();
                }
            }
        };
        step();
    };

    private toMillisecond(num) {
        if (Utils.variableType.isNumber(num)) {
            return num;
        } else if (Utils.variableType.isString(num)) {
            if (/\d+m?s$/.test(num)) {
                if (/ms/.test(num)) {
                    return 1 * num.replace('ms', '');
                }
                return 1000 * num.replace('s', '');
            } else if (/^\d+$/.test(num)) {
                return +num;
            }
        }
        return -1;
    };

    private getEasing(e: string): any {
        let tween = Tween[e];
        if (!Utils.variableType.isFunction(tween)) {
            let arr = e.split('.');
            tween = Tween[arr[0]][arr[1]];
        }
        return tween;
    }

    private pause() {

    }
}

class Slide {
    private index: number;
    private continuous: boolean;
    private length: number;
    private autoSwipe: boolean;
    private autoSlide: any;
    private autoSpeed: number;
    private axisX: boolean;
    private distance: number = 50;
    public container: any;
    private transitionType: string = 'ease';
    private slideDistance: number;
    private slideEnabled: boolean = true;
    private duration: number = 0;

    /**
     *
     * @param {string} container
     * @param {number} index
     * @param {boolean} axisX
     * @param {boolean} continuous
     * @param {boolean} autoSwipe
     * @param {number} autoSpeed
     */
    private constructor(container: string,
                        index: number = 0,
                        axisX: boolean = true,
                        continuous: boolean = false,
                        autoSwipe: boolean = false,
                        autoSpeed: number = 5000) {

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
        } else {
            this.container.style.flexFlow = "column nowrap";
        }

        if (this.autoSwipe) {
            let obj = this;
            this.autoSlide = new RequestAnimationFrameC(function () {
                if (!obj.continuous) {
                    if (obj.index === obj.length - 1) {
                        obj.index = -1
                    }
                }
                obj.fnSlide('next', .5);
            }, this.autoSpeed);
            this.autoSlide.start();
        }

        if (this.continuous) {
            let lastChild = this.container.lastElementChild.cloneNode(true);
            let firstChild = this.container.firstElementChild.cloneNode(true);
            this.container.prepend(lastChild);
            this.container.append(firstChild);
            this.index = this.index + 1;
            this.length = this.container.childElementCount;
        }

        this.bindEvent();
        Slide.fnScroll(this, 0);
    }

    private bindEvent() {
        this.container.parentNode.addEventListener('touchstart', this.fnTouchstart);
        this.container.parentNode.addEventListener('touchmove', this.fnTouchmove);
        this.container.parentNode.addEventListener('touchend', this.fnTouchend);
        this.container.parentNode["options"] = this;
    }

    private fnTouchstart(e: any) {
        this["isScrolling"] = undefined;
        this["moveDistance"] = 0;
        this["options"].slideDistance = this["options"].axisX ? this["options"].container.clientWidth : this["options"].container.clientHeight;
        // 按下时的坐标
        this["startX"] = e.touches[0].pageX;
        this["startY"] = e.touches[0].pageY;

        if (this["options"].autoSwipe) {
            this["options"].autoSlide.pause();
        }
    }

    private fnTouchmove(e: any) {
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
                } else {
                    this["isScrolling"] = (Math.abs(this["moveY"]) >= Math.abs(this["moveX"]));
                }
            }

            // 距离
            if (this["isScrolling"]) {
                if (e.preventDefault) e.preventDefault();
                else e.returnValue = false;
                // 触摸时跟手
                Slide.fnTransition(this["options"], 0);
                this["moveDistance"] = this["options"].axisX ? this["moveX"] : this["moveY"];
            }
            Slide.fnTranslate(this["options"], -(this["options"].slideDistance * this["options"].index - this["moveDistance"]));
        }
    }

    private fnTouchend() {
        // 移动距离大于 distance 滚动，否则回弹
        if (Math.abs(this["moveDistance"]) <= this["options"].distance) {
            this["options"].fnSlide('', .5);
        } else {
            // 手指触摸上一屏滚动
            if (this["moveDistance"] > this["options"].distance) {
                this["options"].fnSlide('prev', .5);
                // 手指触摸下一屏滚动
            } else if (Math.abs(this["moveDistance"]) > this["options"].distance) {
                this["options"].fnSlide('next', .5);
            }
        }
        this["moveDistance"] = 0;
        this["options"].slideEnabled = true;

        //console.log(this.dispatchEvent)
        this["options"].container.dispatchEvent(new CustomEvent("MOVE_END", {detail: this["options"]}));

        if (this["options"].autoSwipe) {
            this["options"].autoSlide.start();
        }
    }


    public fnSlide(page: string, n: number) {
        this.slideDistance = this.axisX ? this.container.clientWidth : this.container.clientHeight;
        if (typeof page === 'number') {
            this.index = page;
        } else if (page == 'next') {
            this.index++;
        } else if (page == 'prev') {
            this.index--
        }
        // 连续滚动
        if (this.continuous) {
            let obj = this;
            Slide.fnScroll(this, .5);
            if (this.index < 1) {
                this.index = this.length - 2;
                setTimeout(function () {
                    Slide.fnScroll(obj, 0);
                    return;
                }, 600);
            } else if (this.index > this.length - 2) {
                this.index = 1;
                setTimeout(function () {
                    Slide.fnScroll(obj, 0);
                    return;
                }, 600);
            }
        } else {
            if (this.index >= this.length) {
                this.index = this.length - 1;
            } else if (this.index < 0) {
                this.index = 0
            }
            Slide.fnScroll(this, .5);
        }
        this.container.dispatchEvent(new CustomEvent("MOVE_END", {detail: this}));
    }

    private static fnScroll(obj: any, n: number) {
        Slide.fnTransition(obj, n);
        Slide.fnTranslate(obj, -( obj.index * obj.slideDistance ));
    }

    private static fnTransition(obj: any, n: number) {
        obj.container.style.transition = 'all ' + n + 's ' + obj.transitionType;
    }

    private static fnTranslate(obj: any, distance: number) {
        let result = obj.axisX ? distance + 'px,0,0' : '0,' + distance + 'px,0';
        obj.container.style.transform = 'translate3d(' + result + ')';
    }
}

class FixedLayer {
    private layer: any;
    private element: string;
    private bg:any;

    constructor(element:string) {
        this.element = element;
        this.createLayer();
    }

    private createLayer() {
        let fixedLayer = document.querySelector(this.element);
        this.layer = fixedLayer;

        this.bg = document.createElement("div");
        this.bg.classList.add("bg");
        fixedLayer.appendChild(this.bg);

        this.bg.root = this;
        this.bg.addEventListener("click", this.layerClickHandler);
    }

    private layerClickHandler(e) {
        this['root'].hidden();
    }

    private layerWheelHandler(e) {
        e.stopPropagation();
        e.preventDefault();
    }

    public display() {
        let layer = this.layer;
        layer.style.display = "flex";
        window.requestAnimationFrame(function () {
            layer.classList.add("active");
        });
        //window.addEventListener('mousewheel', this.layerWheelHandler);
    }

    public hidden() {
        let layer = this.layer;
        layer.classList.remove("active");
        setTimeout(function () {
            layer.style.display = "none";
        }, 600);
        //window.removeEventListener('mousewheel', this.layerWheelHandler);
    }

    public destory() {
        this.bg.removeEventListener("click", this.layerClickHandler);
        this.hidden();
        document.body.removeChild(this.layer);
    }
}

class GetPageData {
    private url: string;
    private param: any;
    private func: any;

    constructor(u: string, func?: any, obj?: object) {
        this.url = u;
        if (obj) {
            this.param = Utils.urlEncode(obj);
            this.param = this.param.substr(1, this.param.length - 1);
        }
        if (func) {
            this.func = func;
        }
        if (this.url || this.url !== "") {
            let xhr: any = new XMLHttpRequest();
            xhr.addEventListener("progress", this.updateProgress, false);
            xhr.addEventListener("load", this.transferComplete, false);
            xhr.addEventListener("error", this.transferFailed, false);
            xhr.addEventListener("abort", this.transferCanceled, false);
            xhr.open("POST", this.url);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.send(this.param);
            let str = this.url.split("/");
            xhr.name = str[str.length - 1];
            if (this.func) {
                xhr.func = this.func;
            }
        }
    }

    private updateProgress(e) {
        console.log(e.target.name + ":::loading=>" + e.loaded);
    }

    private transferComplete(e) {
        console.log(e.target.name + ":::complete");
        e.target.removeEventListener("progress", this.updateProgress, false);
        e.target.removeEventListener("load", this.transferComplete, false);
        e.target.removeEventListener("error", this.transferFailed, false);
        e.target.removeEventListener("abort", this.transferCanceled, false);
        e.target.func();
    }

    private transferFailed(e) {
        e.target.removeEventListener("error", this.transferFailed, false);
        console.log(e.target.name + ":::" + e.type)
    }

    private transferCanceled(e) {
        e.target.removeEventListener("abort", this.transferCanceled, false);
        console.log(e.target.name + ":::" + e)
    }
}