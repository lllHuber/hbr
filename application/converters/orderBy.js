System.register([],function(r){"use strict";function e(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var t,n=function(){function r(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}();return{setters:[],execute:function(){t=function(){function r(){e(this,r)}return n(r,[{key:"toView",value:function(r,e){return $.isArray(r)?e.property?r.sort(function(r,t){var n=r,o=t;return"asc"!==e.direction.toLowerCase()&&(n=t,o=r),n[e.property]<o[e.property]?-1:n[e.property]>o[e.property]?1:0}):r:[]}}]),r}(),r("OrderByValueConverter",t)}}});