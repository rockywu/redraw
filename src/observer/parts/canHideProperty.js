"use strict";
/**
 * Created by rocky on 16/9/27.
 */
var canHideProperty = true;
try {
    Object.defineProperty({}, '_', {
        value: 'x'
    })
} catch (e) {
    /* istanbul ignore next*/
    canHideProperty = false
}
export default canHideProperty;
