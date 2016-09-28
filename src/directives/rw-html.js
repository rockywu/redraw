"use strict";
/**
 * Created by rocky on 16/9/28.
 */
import directive from "../utils/directive";
directive.register('rw-html', {
    link(scope, attr) {
        console.log(scope, attr);
    }
});
