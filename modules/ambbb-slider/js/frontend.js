!function(){"use strict";var t=function(t,o,e){return t(e={path:o,exports:{},require:function(t,o){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==o&&e.path)}},e.exports),e.exports}((function(t,o){t.exports={polyfill:function(){var t=window,o=document;if(!("scrollBehavior"in o.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var e,l=t.HTMLElement||t.Element,r={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:l.prototype.scroll||s,scrollIntoView:l.prototype.scrollIntoView},i=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,n=(e=t.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(e)?1:0);t.scroll=t.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?u.call(t,o.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset):r.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset))},t.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?r.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):u.call(t,o.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset)))},l.prototype.scroll=l.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var t=arguments[0].left,o=arguments[0].top;u.call(this,this,void 0===t?this.scrollLeft:~~t,void 0===o?this.scrollTop:~~o)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},l.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):r.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},l.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var e=v(this),l=e.getBoundingClientRect(),i=this.getBoundingClientRect();e!==o.body?(u.call(this,e,e.scrollLeft+i.left-l.left,e.scrollTop+i.top-l.top),"fixed"!==t.getComputedStyle(e).position&&t.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):t.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else r.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function s(t,o){this.scrollLeft=t,this.scrollTop=o}function c(t){if(null===t||"object"!=typeof t||void 0===t.behavior||"auto"===t.behavior||"instant"===t.behavior)return!0;if("object"==typeof t&&"smooth"===t.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+t.behavior+" is not a valid value for enumeration ScrollBehavior.")}function a(t,o){return"Y"===o?t.clientHeight+n<t.scrollHeight:"X"===o?t.clientWidth+n<t.scrollWidth:void 0}function f(o,e){var l=t.getComputedStyle(o,null)["overflow"+e];return"auto"===l||"scroll"===l}function p(t){var o=a(t,"Y")&&f(t,"Y"),e=a(t,"X")&&f(t,"X");return o||e}function v(t){for(;t!==o.body&&!1===p(t);)t=t.parentNode||t.host;return t}function d(o){var e,l,r,n,s=(i()-o.startTime)/468;n=s=s>1?1:s,e=.5*(1-Math.cos(Math.PI*n)),l=o.startX+(o.x-o.startX)*e,r=o.startY+(o.y-o.startY)*e,o.method.call(o.scrollable,l,r),l===o.x&&r===o.y||t.requestAnimationFrame(d.bind(t,o))}function u(e,l,n){var c,a,f,p,v=i();e===o.body?(c=t,a=t.scrollX||t.pageXOffset,f=t.scrollY||t.pageYOffset,p=r.scroll):(c=e,a=e.scrollLeft,f=e.scrollTop,p=s),d({scrollable:c,method:p,startTime:v,startX:a,startY:f,x:l,y:n})}}}})),o=document.querySelectorAll(".ambbb-slider"),e=[];function l(t){var o,e,l=t,r=t.querySelector(".ambbb-slider__viewport"),i=t.querySelectorAll(".ambbb-slider__slide");function n(e){void 0!==o&&i[o].classList.remove("active"),o=e,t.dataset.active=e,t.style.setProperty("--active",e),i[e].classList.add("active")}function s(o){if(!(o<0||o>i.length)){var e=new CustomEvent("slider:goto",{detail:{i:o,slide:i[o]}});t.dispatchEvent(e),n(o)}}function c(t){var e=o+t;e<0&&(e=i.length-1),e>=i.length&&(e=0),s(e)}function a(){var o=new CustomEvent("slider:play");t.dispatchEvent(o),e=setInterval((function(){c(1)}),3e3)}function f(){if(void 0!==e){var o=new CustomEvent("slider:stop");t.dispatchEvent(o),clearInterval(e)}}function p(){c(-1)}function v(){c(1)}return n(0),a(),t.addEventListener("click",(function(t){if(t.target.matches(".ambbb-slider__prev"))f(),p();else if(t.target.matches(".ambbb-slider__next"))f(),v();else{if(!t.target.matches(".ambbb-slider__goto"))return;f(),s(parseInt(t.target.dataset.goto))}})),{element:l,viewport:r,set:n,goTo:s,play:a,stop:f,prev:p,next:v}}var r=function(t){var o=!1,e=0;t.element.addEventListener("slider:goto",(function(e){o=!0;var l=e.detail.i*t.viewport.offsetWidth;t.viewport.addEventListener("scroll",(function e(){l===t.viewport.scrollLeft&&(t.viewport.removeEventListener("scroll",e),o=!1)})),t.viewport.scrollTo({top:0,left:l,behavior:"smooth"})})),t.viewport.addEventListener("scroll",(function(l){o||(t.stop(),Math.abs(t.viewport.scrollLeft-e)<5?(e=0,i()):e=t.viewport.scrollLeft)}))},i=function(){var t=viewport.scrollLeft,o=viewport.offsetWidth,e=Math.round(t/o);set(e)};t.polyfill();for(var n=0;n<o.length;n++)e.push(l(o[n]));for(var s=0;s<e.length;s++)r(e[s])}();
