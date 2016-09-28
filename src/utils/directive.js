"use strict";
/**
 * Created by rocky on 16/9/23.
 */
import parser from "./parser";

/**
 * 指令器对象
 */
class directive {
    /**
     * 初始化指令
     */
    constructor() {
        this.directives = {};
    }

    /**
     * 注册指令
     */
    register(name, configures) {
        var ds = this.directives;
        if(!name || ds[name]) {
            return;
        }
        ds[name] = configures;
    }

    /**
     * 初始化所有指令
     */
    bootstrap(name) {
        if(name) {
            if(this.directives[name]) {
                //初始化写入指令
            }
        } else {
            //初始化全部指令
        }
    }
}

var ds = new directive;
export default ds;

