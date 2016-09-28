"use strict";
/**
 * Created by rocky on 16/9/27.
 */
import canHideProperty from "./parts/canHideProperty";
import win from "../var/window";
var defineProperties = Object.defineProperties, defineProperty;
if (!canHideProperty) {
    if ('__defineGetter__' in win) {
        defineProperty = function (obj, prop, desc) {
            if ('value' in desc) {
                obj[prop] = desc.value;
            }
            if ('get' in desc) {
                obj.__defineGetter__(prop, desc.get);
            }
            if ('set' in desc) {
                obj.__defineSetter__(prop, desc.set);
            }
            return obj;
        }
        defineProperties = function (obj, descs) {
            for (var prop in descs) {
                if (descs.hasOwnProperty(prop)) {
                    defineProperty(obj, prop, descs[prop]);
                }
            }
            return obj;
        }
    } else if(false) {
        //低版本暂时参考

    }
}
