"use strict";
/**
 * Created by rocky on 16/9/30.
 * 数据观察者
 */

/**
 * 需要实现统一API，用于监听页面对象
 * IE 6，7，8使用懒加载,其他游览器使用数据监听
 * @class observer
 * @controcutor observer
 *
 */

class observer {
    constructor(obj, name) {
    }

    /**
     * 对象属性监听
     * @param newVal
     * @param oldVal
     */
    setter(newVal, oldVal) {

    }

    getter() {
    }
}

new observer({}, "name", {});



