System.register(["aurelia-framework"],function(r){"use strict";function e(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var t,n,o,i=function(){function r(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();return{setters:[function(r){t=r.ObserverLocator,n=r.inject}],execute:function(){o=function(){function r(r){e(this,o),this.observer=r}i(r,[{key:"observe",value:function(r,e,t){t||"function"!=typeof e||(t=e,e=r,r=null);var n=!0,o=!1,i=void 0;try{for(var a,u=e[Symbol.iterator]();!(n=(a=u.next()).done);n=!0){var s=a.value,c=r?s:s[1],f=r||s[0];f[c]instanceof Array?this.observer.getArrayObserver(f[c]).subscribe(t):this.observer.getObserver(f,c).subscribe(t)}}catch(l){o=!0,i=l}finally{try{!n&&u["return"]&&u["return"]()}finally{if(o)throw i}}}}]);var o=r;return r=n(t)(r)||r}(),r("MultiObserver",o)}}});