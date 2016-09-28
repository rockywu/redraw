"use strict";
/**
 * Created by rocky on 16/9/22.
 */
export default function parser() {
    var doms = document.body.getElementsByTagName("*");
    console.log(doms)
    for(var i = 0; i< doms.length; i++) {
        getAttr(doms[i]);
    }
}

function getAttr(dom, name) {
    var exp = /^rw-(html)$/;
    var attrs = dom.attributes;
    for(var i = 0 ; attrs.length; i++) {
        if(exp.test(attrs[i].nodeName)) {
            console.log(RegExp.$1)
            console.log(222, attrs[i].nodeValue);
        }
    }
}

