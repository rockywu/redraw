"use strict";
/**
 * Created by rocky on 16/9/22.
 */
require("./compact")
import parser from "./utils/parser";
import directive from "./utils/directive";
import win from "./var/window";
import toS from "./var/toString";
import hasOwn from "./var/hasOwn";

/**
 * redraw标准interface
 * 参照avalon编写
 */
function redraw(elem, options) {
    return new redraw.init(elem, options);
}
/**
 * 初始化对象
 * @param {document} elem 监听节点
 * @param {object} options
 */
redraw.init = function(elem, options) {
    this.element = elem;
    this.options = options;
}

/**
 * 捆绑
 * @type {Object|Function|*}
 */
redraw.fn = redraw.prototype = redraw.init.prototype;

var rWord = /[^, ]+/g,
    rWindow = /^\[object (?:Window|DOMWindow|global)\]$/,
    rArraylike = /(Array|List|Collection|Map|Arguments)\]$/,
    class2type = {},
    isFunStr = 'Boolean Number String Function Array Date RegExp Object Error Undefined Null';
/**
 * is函数构造 Boolean Number String Function Array Date RegExp Object Error Undefined Null
 */
isFunStr.replace(rWord, function (name) {
    var lower = name.toLowerCase();
    class2type['[object ' + name + ']'] = lower;
    redraw['is' + name] = function(obj) {
        return redraw.type(obj) == lower;
    }
});

/**
 * 是否是window对象
 * @param obj
 * @return {boolean|*}
 */
redraw.isWindow = function (obj) {
    return rWindow.test(tos.call(obj))
}

/**
 * 取得目标的类型
 * @param {object} obj
 * @return {string} 目标类型
 */
redraw.type = function type(obj) {
    if (obj == null) {
        return String(obj)
    }
    // 早期的webkit内核浏览器实现了已废弃的ecma262v4标准，可以将正则字面量当作函数使用，因此typeof在判定正则时会返回function
    return typeof obj === 'object' || typeof obj === 'function' ?
        class2type[toS.call(obj)] || 'object' : typeof obj;
}

/**
 * 判定是否是一个朴素的javascript对象（Object），不是DOM对象，不是BOM对象，不是自定义类的实例
 * @param {object} obj 需要检查的对象
 * @return {boolean} 是否是简单对象
 */
redraw.isPlainObject = function (obj) {
    // 简单的 typeof obj === 'object'检测，会致使用isPlainObject(window)在opera下通不过
    return tos.call(obj) === '[object Object]' &&
        Object.getPrototypeOf(obj) === Object.prototype
}

/**
 * 判定是否类数组，如节点集合，纯数组，arguments与拥有非负整数的length属性的纯JS对象
 * @param {object} obj
 * @return {boolean} 是否是类数组对象
 */
function isArrayLike(obj) {
    /* istanbul ignore if*/
    if (obj && typeof obj == 'object') {
        var n = obj.length,
            str = toS.call(obj)
        if (rArraylike.test(str)) {
            return true
        } else if (str === '[object Object]' && n === (n >>> 0)) {
            //由于ecma262v5能修改对象属性的enumerable，因此不能用propertyIsEnumerable来判定了
            return true
        }
    }
    return false
}

/**
 * forEach 函数用于便利数据
 * @param {object} obj
 * @param {function} fn
 * @param {array} arr
 * @return {undefined}
 */
redraw.forEach = function (obj, fn, arr) {
    arr = redraw.isArray(arr) ? arr : [];
    //排除null, undefined
    if (obj) {
        var i = 0;
        if (isArrayLike(obj)) {
            for (var n = obj.length; i < n; i++) {
                if (fn.call(arr, obj[i], i) === false)
                    break
            }
        } else {
            for (i in obj) {
                if (obj.hasOwnProperty(i) && fn.call(arr, obj[i], i) === false) {
                    break
                }
            }
        }
    }
}

export default redraw;
win.redraw = redraw;

