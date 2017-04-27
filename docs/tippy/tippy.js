!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Tippy=t()}(this,function(){"use strict";function e(e){var t=!1,n=0,i=document.createElement("span");return new MutationObserver(function(){e(),t=!1}).observe(i,{attributes:!0}),function(){t||(t=!0,i.setAttribute("x-index",n),n+=1)}}function t(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},ge))}}function n(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function i(e,t){Object.keys(t).forEach(function(i){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(i)&&n(t[i])&&(r="px"),e.style[i]=t[i]+r})}function r(e){for(var t=[!1,"ms","webkit","moz","o"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length-1;i++){var r=t[i],o=r?""+r+n:e;if(void 0!==window.document.body.style[o])return o}return null}function o(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||e.firstElementChild.offsetParent===e)}function s(e){return null!==e.parentNode?s(e.parentNode):e}function a(e){var t=e&&e.offsetParent,n=t&&t.nodeName;return n&&"BODY"!==n&&"HTML"!==n?t:window.document.documentElement}function p(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return window.document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?e:t,r=n?t:e,l=document.createRange();l.setStart(i,0),l.setEnd(r,0);var f=l.commonAncestorContainer;if(e!==f&&t!==f)return o(f)?f:a(f);var d=s(e);return d.host?p(d.host,t):p(e,s(t).host)}function l(e,t){if(1!==e.nodeType)return[];var n=window.getComputedStyle(e,null);return t?n[t]:n}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===t?"scrollTop":"scrollLeft",i=e.nodeName;if("BODY"===i||"HTML"===i){var r=window.document.documentElement;return(window.document.scrollingElement||r)[n]}return e[n]}function d(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=f(t,"top"),r=f(t,"left"),o=n?-1:1;return e.top+=i*o,e.bottom+=i*o,e.left+=r*o,e.right+=r*o,e}function u(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function c(e){if(!e||-1!==["HTML","BODY","#document"].indexOf(e.nodeName))return window.document.body;var t=l(e),n=t.overflow,i=t.overflowX;return/(auto|scroll)/.test(n+t.overflowY+i)?e:c(u(e))}function h(e,t){var n="x"===t?"Left":"Top",i="Left"===n?"Right":"Bottom";return+e["border"+n+"Width"].split("px")[0]+ +e["border"+i+"Width"].split("px")[0]}function m(){var e=window.document.body,t=window.document.documentElement;return{height:Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight),width:Math.max(e.scrollWidth,e.offsetWidth,t.clientWidth,t.scrollWidth,t.offsetWidth)}}function v(e){return Le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var t={};if(Ae())try{t=e.getBoundingClientRect();var n=f(e,"top"),i=f(e,"left");t.top+=n,t.left+=i,t.bottom+=n,t.right+=i}catch(e){}else t=e.getBoundingClientRect();var r={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},o="HTML"===e.nodeName?m():{},s=o.width||e.clientWidth||r.right-r.left,a=o.height||e.clientHeight||r.bottom-r.top,p=e.offsetWidth-s,d=e.offsetHeight-a;if(p||d){var u=l(e);p-=h(u,"x"),d-=h(u,"y"),r.width-=p,r.height-=d}return v(r)}function b(e,t){var n=Ae(),i="HTML"===t.nodeName,r=g(e),o=g(t),s=c(e),a=v({top:r.top-o.top,left:r.left-o.left,width:r.width,height:r.height});if(i||"BODY"===t.nodeName){var p=l(t),f=n&&i?0:+p.borderTopWidth.split("px")[0],u=n&&i?0:+p.borderLeftWidth.split("px")[0],h=n&&i?0:+p.marginTop.split("px")[0],m=n&&i?0:+p.marginLeft.split("px")[0];a.top-=f-h,a.bottom-=f-h,a.left-=u-m,a.right-=u-m,a.marginTop=h,a.marginLeft=m}return t.contains(s)&&(n||"BODY"!==s.nodeName)&&(a=d(a,t)),a}function y(e,t,n){return b(n,p(t,n))}function w(e){var t=window.getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+i,height:e.offsetHeight+n}}function E(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function O(e,t,n,i){i=i.split("-")[0];var r=w(t),o={position:e,width:r.width,height:r.height},s=-1!==["right","left"].indexOf(i),a=s?"top":"left",p=s?"left":"top",l=s?"height":"width",f=s?"width":"height";return o[a]=n[a]+n[l]/2-r[l]/2,o[p]=i===p?n[p]-r[f]:n[E(p)],o}function x(e){var t={};return e&&"[object Function]"===t.toString.call(e)}function L(e,t,n,i){var r="BODY"===e.nodeName,o=r?window:e;o.addEventListener(t,n,{passive:!0}),r||L(c(o.parentNode),t,n,i),i.push(o)}function T(e,t,n,i){n.updateBound=i,window.addEventListener("resize",n.updateBound,{passive:!0});var r=c(e);return L(r,"scroll",n.updateBound,n.scrollParents),n.scrollElement=r,n.eventsEnabled=!0,n}function A(e,t){return window.removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function k(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function C(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var i=k(e,function(e){return e[t]===n});return e.indexOf(i)}function M(e,t,n){return(void 0===n?e:e.slice(0,C(e,"name",n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&x(n)&&(t=n(t,e))}),t}function S(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function H(e){var t=window.document.documentElement,n=b(e,t),i=Math.max(t.clientWidth,window.innerWidth||0),r=Math.max(t.clientHeight,window.innerHeight||0),o=f(t),s=f(t,"left");return v({top:o-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r})}function D(e){var t=e.nodeName;return"BODY"!==t&&"HTML"!==t&&("fixed"===l(e,"position")||D(u(e)))}function I(e,t,n,i){var r={top:0,left:0},o=p(e,t);if("viewport"===i)r=H(o);else{var s=void 0;"scrollParent"===i?(s=c(u(e)),"BODY"===s.nodeName&&(s=window.document.documentElement)):s="window"===i?window.document.documentElement:i;var a=b(s,o);if("HTML"!==s.nodeName||D(o))r=a;else{var l=m(),f=l.height,d=l.width;r.top+=a.top-a.marginTop,r.bottom=f+a.top,r.left+=a.left-a.marginLeft,r.right=d+a.left}}return r.left+=n,r.top+=n,r.right-=n,r.bottom-=n,r}function N(e,t,n,i,r){if(-1===e.indexOf("auto"))return e;var o=I(n,i,0,r),s={top:t.top-o.top,right:o.right-t.right,bottom:o.bottom-t.bottom,left:t.left-o.left},a=Object.keys(s).sort(function(e,t){return s[t]-s[e]})[0],p=e.split("-")[1];return a+(p?"-"+p:"")}function F(e,t){Object.keys(t).forEach(function(n){!1!==t[n]?e.setAttribute(n,t[n]):e.removeAttribute(n)})}function W(e,t){var n={position:e.offsets.popper.position},o={"x-placement":e.placement},s=Math.round(e.offsets.popper.left),a=Math.round(e.offsets.popper.top),p=r("transform");return t.gpuAcceleration&&p?(n[p]="translate3d("+s+"px, "+a+"px, 0)",n.top=0,n.left=0,n.willChange="transform"):(n.left=s,n.top=a,n.willChange="top, left"),i(e.instance.popper,Le({},n,e.styles)),F(e.instance.popper,Le({},o,e.attributes)),e.offsets.arrow&&i(e.arrowElement,e.offsets.arrow),e}function B(e,t,n,i,r){var o=y(r,t,e),s=N(n.placement,o,t,e,n.modifiers.flip.boundariesElement);return t.setAttribute("x-placement",s),n}function P(e,t,n){var i=k(e,function(e){return e.name===t}),r=!!i&&e.some(function(e){return e.name===n&&e.enabled&&e.order<i.order});if(!r){var o="`"+t+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+o+" modifier in order to work, be sure to include it before "+o+"!")}return r}function U(e,t){if(!P(e.instance.modifiers,"arrow","keepTogether"))return e;var n=t.element;if("string"==typeof n){if(!(n=e.instance.popper.querySelector(n)))return e}else if(!e.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var i=e.placement.split("-")[0],r=v(e.offsets.popper),o=e.offsets.reference,s=-1!==["left","right"].indexOf(i),a=s?"height":"width",p=s?"top":"left",l=s?"left":"top",f=s?"bottom":"right",d=w(n)[a];o[f]-d<r[p]&&(e.offsets.popper[p]-=r[p]-(o[f]-d)),o[p]+d>r[f]&&(e.offsets.popper[p]+=o[p]+d-r[f]);var u=o[p]+o[a]/2-d/2,c=u-v(e.offsets.popper)[p];return c=Math.max(Math.min(r[a]-d,c),0),e.arrowElement=n,e.offsets.arrow={},e.offsets.arrow[p]=c,e.offsets.arrow[l]="",e}function j(e){return"end"===e?"start":"start"===e?"end":e}function q(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Ce.indexOf(e),i=Ce.slice(n+1).concat(Ce.slice(0,n));return t?i.reverse():i}function Y(e,t){if(S(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=I(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split("-")[0],r=E(i),o=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case Me.FLIP:s=[i,r];break;case Me.CLOCKWISE:s=q(i);break;case Me.COUNTERCLOCKWISE:s=q(i,!0);break;default:s=t.behavior}return s.forEach(function(a,p){if(i!==a||s.length===p+1)return e;i=e.placement.split("-")[0],r=E(i);var l=v(e.offsets.popper),f=e.offsets.reference,d=Math.floor,u="left"===i&&d(l.right)>d(f.left)||"right"===i&&d(l.left)<d(f.right)||"top"===i&&d(l.bottom)>d(f.top)||"bottom"===i&&d(l.top)<d(f.bottom),c=d(l.left)<d(n.left),h=d(l.right)>d(n.right),m=d(l.top)<d(n.top),g=d(l.bottom)>d(n.bottom),b="left"===i&&c||"right"===i&&h||"top"===i&&m||"bottom"===i&&g,y=-1!==["top","bottom"].indexOf(i),w=!!t.flipVariations&&(y&&"start"===o&&c||y&&"end"===o&&h||!y&&"start"===o&&m||!y&&"end"===o&&g);(u||b||w)&&(e.flipped=!0,(u||b)&&(i=s[p+1]),w&&(o=j(o)),e.placement=i+(o?"-"+o:""),e.offsets.popper=O(e.instance.state.position,e.instance.popper,e.offsets.reference,e.placement),e=M(e.instance.modifiers,e,"flip"))}),e}function R(e){var t=v(e.offsets.popper),n=e.offsets.reference,i=e.placement.split("-")[0],r=Math.floor,o=-1!==["top","bottom"].indexOf(i),s=o?"right":"bottom",a=o?"left":"top",p=o?"width":"height";return t[s]<r(n[a])&&(e.offsets.popper[a]=r(n[a])-t[p]),t[a]>r(n[s])&&(e.offsets.popper[a]=r(n[s])),e}function z(e,t){var i=e.placement,r=e.offsets.popper,o=void 0;return n(t.offset)?o=[t.offset,0]:(o=t.offset.split(" "),o=o.map(function(t,n){var r=t.match(/(\-?\d*\.?\d*)(.*)/),o=+r[1],s=r[2],a=-1!==i.indexOf("right")||-1!==i.indexOf("left");1===n&&(a=!a);var p=a?"height":"width";if(0===s.indexOf("%")){var l=void 0;switch(s){case"%p":l=e.offsets.popper;break;case"%":case"$r":default:l=e.offsets.reference}return v(l)[p]/100*o}if("vh"===s||"vw"===s){return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*o}return"px"===s?+o:+t})),-1!==e.placement.indexOf("left")?(r.top+=o[0],r.left-=o[1]||0):-1!==e.placement.indexOf("right")?(r.top+=o[0],r.left+=o[1]||0):-1!==e.placement.indexOf("top")?(r.left+=o[0],r.top-=o[1]||0):-1!==e.placement.indexOf("bottom")&&(r.left+=o[0],r.top+=o[1]||0),e}function _(e,t){var n=t.boundariesElement||a(e.instance.popper),i=I(e.instance.popper,e.instance.reference,t.padding,n);t.boundaries=i;var r=t.priority,o=v(e.offsets.popper),s={primary:function(e){var n=o[e];return o[e]<i[e]&&!t.escapeWithReference&&(n=Math.max(o[e],i[e])),xe({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=o[n];return o[e]>i[e]&&!t.escapeWithReference&&(r=Math.min(o[n],i[e]-("right"===e?o.width:o.height))),xe({},n,r)}};return r.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";o=Le({},o,s[t](e))}),e.offsets.popper=o,e}function K(e){var t=e.placement,n=t.split("-")[0],i=t.split("-")[1];if(i){var r=e.offsets.reference,o=v(e.offsets.popper),s=-1!==["bottom","top"].indexOf(n),a=s?"left":"top",p=s?"width":"height",l={start:xe({},a,r[a]),end:xe({},a,r[a]+r[p]-o[p])};e.offsets.popper=Le({},o,l[i])}return e}function X(e){if(!P(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=k(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}function G(e){var t=e.placement,n=t.split("-")[0],i=v(e.offsets.popper),r=v(e.offsets.reference),o=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n);return i[o?"left":"top"]=r[t]-(s?i[o?"width":"height"]:0),e.placement=E(t),e.offsets.popper=v(i),e}function J(){We.touchUser=!0,document.body.classList.add("tippy-touch"),document.removeEventListener("touchstart",J)}function V(e){var t=Z(e.target,je.el),n=Z(e.target,je.popper);if(n){if(Be.refs[Be.poppers.indexOf(n)].settings.interactive)return}if(t){var i=Be.refs[Be.els.indexOf(t)];if(!i.settings.multiple&&We.touchUser||!i.settings.multiple&&-1!==i.settings.trigger.indexOf("click"))return ce(i);if(!0!==i.settings.hideOnClick||-1!==i.settings.trigger.indexOf("click"))return}!Z(e.target,je.controller)&&document.body.querySelector(je.popper)&&ce()}function $(e){for(var t=[!1,"webkit"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var r=t[i],o=r?""+r+n:e;if(void 0!==window.document.body.style[o])return o}return null}function Q(e){return e.replace(/-.+/,"")}function Z(e,t){return Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1}),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}}),e.closest(t)}function ee(e){var t=e.settings,n=e.popper.querySelector(je.tooltip),i=Fe({placement:t.position},t.popperOptions||{},{modifiers:Fe({},t.popperOptions?t.popperOptions.modifiers:{},{flip:Fe({padding:parseInt(t.distance)+3},t.popperOptions&&t.popperOptions.modifiers?t.popperOptions.modifiers.flip:{}),offset:Fe({offset:parseInt(t.offset)},t.popperOptions&&t.popperOptions.modifiers?t.popperOptions.modifiers.offset:{})}),onUpdate:function(){n.style.top="",n.style.bottom="",n.style.left="",n.style.right="",n.style[Q(e.popper.getAttribute("x-placement"))]=-(t.distance-10)+"px"}});return new De(e.el,e.popper,i)}function te(e,t,n){var i=document.createElement("div");i.setAttribute("class","tippy-popper"),i.setAttribute("role","tooltip"),i.setAttribute("aria-hidden","true"),i.setAttribute("id","tippy-tooltip-"+e);var r=document.createElement("div");if(r.setAttribute("class","tippy-tooltip tippy-tooltip--"+n.size+" "+n.theme+"-theme leave"),r.setAttribute("data-animation",n.animation),n.arrow){var o=document.createElement("div");o.setAttribute("class","arrow-"+n.arrowSize),o.setAttribute("x-arrow",""),r.appendChild(o)}if(n.animateFill){r.setAttribute("data-animatefill","");var s=document.createElement("div");s.setAttribute("class","leave"),s.setAttribute("x-circle",""),r.appendChild(s)}n.inertia&&r.setAttribute("data-inertia","");var a=document.createElement("div");if(a.setAttribute("class","tippy-tooltip-content"),n.html){var p=void 0;n.html instanceof Element?(a.innerHTML=n.html.innerHTML,p=n.html.id||"tippy-html-template"):(a.innerHTML=document.getElementById(n.html.replace("#","")).innerHTML,p=n.html),i.classList.add("html-template"),i.setAttribute("tabindex","0"),r.setAttribute("data-template-id",p)}else a.innerHTML=t;return r.style[n.position]=-(n.distance-10)+"px",r.appendChild(a),i.appendChild(r),i}function ne(e,t,n){var i=[];return"manual"===e?i:(t.addEventListener(e,n.handleTrigger),i.push({event:e,handler:n.handleTrigger}),"mouseenter"===e&&(t.addEventListener("mouseleave",n.handleMouseleave),i.push({event:"mouseleave",handler:n.handleMouseleave})),"focus"===e&&(t.addEventListener("blur",n.handleBlur),i.push({event:"blur",handler:n.handleBlur})),i)}function ie(e){Be.refs.push(e),Be.els.push(e.el),Be.poppers.push(e.popper)}function re(e){var t=e.getAttribute("title");e.setAttribute("data-original-title",t||"html"),e.removeAttribute("title")}function oe(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function se(e){var t=Be.refs[Be.els.indexOf(this)],n=Q(t.popper.getAttribute("x-placement")),i=Math.round(t.popper.offsetWidth/2),r=Math.round(t.popper.offsetHeight/2),o=e.pageX-i,s=e.pageY-2.5*r;"left"===n?(o=e.pageX-2*i-15,s=e.pageY-r):"right"===n?(o=e.pageX+r,s=e.pageY-r):"bottom"===n&&(s=e.pageY+r/1.5),t.popper.style[$("transform")]="translate3d("+o+"px, "+s+"px, 0)"}function ae(e,t){t?window.getComputedStyle(t)[$("transform")]:window.getComputedStyle(e).opacity}function pe(e,t){e.forEach(function(e){e&&t(e.classList)})}function le(e,t){e.forEach(function(e){e&&(e.hasAttribute("x-circle")&&(t=Math.round(t/1.25)),e.style[$("transitionDuration")]=t+"ms")})}function fe(e,t){setTimeout(function(){e.settings.position!==e.popper.getAttribute("x-placement")?(e.flipped=!0,t()):e.flipped&&e.settings.position===e.popper.getAttribute("x-placement")&&(e.flipped=!1,t())},0)}function de(e,t){var n=e.popper.querySelector(je.tooltip),i=function e(){n.removeEventListener("webkitTransitionEnd",e),n.removeEventListener("transitionend",e),t()};n.addEventListener("webkitTransitionEnd",i),n.addEventListener("transitionend",i)}function ue(e){document.body.appendChild(e.popper),!e.settings.followCursor||e.hasFollowCursorListener||We.touchUser||(e.hasFollowCursorListener=!0,e.el.addEventListener("mousemove",se)),e.popperInstance?(e.popperInstance.update(),e.settings.followCursor||e.popperInstance.enableEventListeners()):(e.popperInstance=ee(e),e.settings.followCursor&&!We.touchUser&&e.popperInstance.disableEventListeners())}function ce(e){Be.refs.forEach(function(t){document.body.contains(t.popper)&&(!0!==t.settings.hideOnClick||e&&t.popper===e.popper||t.tippyInstance.hide(t.popper,t.settings.hideDuration))})}for(var he=["native code","[object MutationObserverConstructor]"],me="undefined"!=typeof window,ve=["Edge","Trident","Firefox"],ge=0,be=0;be<ve.length;be+=1)if(me&&navigator.userAgent.indexOf(ve[be])>=0){ge=1;break}var ye=me&&function(e){return he.some(function(t){return(e||"").toString().indexOf(t)>-1})}(window.MutationObserver),we=ye?e:t,Ee=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Oe=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),xe=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},Le=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Te=void 0,Ae=function(){return void 0===Te&&(Te=-1!==navigator.appVersion.indexOf("MSIE 10")),Te},ke=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Ce=ke.slice(3),Me={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"},Se={shift:{order:100,enabled:!0,fn:K},offset:{order:200,enabled:!0,fn:z,offset:0},preventOverflow:{order:300,enabled:!0,fn:_,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:R},arrow:{order:500,enabled:!0,fn:U,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:Y,behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:G},hide:{order:800,enabled:!0,fn:X},applyStyle:{order:900,enabled:!0,fn:W,onLoad:B,gpuAcceleration:!0}},He={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Se},De=function(){function e(t,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Ee(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=we(this.update.bind(this)),this.options=Le({},e.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t.jquery?t[0]:t,this.popper=n.jquery?n[0]:n,i(this.popper,{position:"absolute"}),this.modifiers=Object.keys(e.Defaults.modifiers).map(function(t){return Le({name:t},e.Defaults.modifiers[t])}),this.modifiers=this.modifiers.map(function(e){var t=o.modifiers&&o.modifiers[e.name]||{};return Le({},e,t)}),o.modifiers&&(this.options.modifiers=Le({},e.Defaults.modifiers,o.modifiers),Object.keys(o.modifiers).forEach(function(t){if(void 0===e.Defaults.modifiers[t]){var n=o.modifiers[t];n.name=t,r.modifiers.push(n)}})),this.modifiers=this.modifiers.sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&x(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)}),this.update();var s=this.options.eventsEnabled;s&&this.enableEventListeners(),this.state.eventsEnabled=s}return Oe(e,[{key:"update",value:function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=y(this.state,this.popper,this.reference),e.placement=N(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement),e.originalPlacement=e.placement,e.offsets.popper=O(this.state,this.popper,e.offsets.reference,e.placement),e=M(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}},{key:"destroy",value:function(){return this.state.isDestroyed=!0,S(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[r("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}},{key:"enableEventListeners",value:function(){this.state.eventsEnabled||(this.state=T(this.reference,this.options,this.state,this.scheduleUpdate))}},{key:"disableEventListeners",value:function(){this.state.eventsEnabled&&(window.cancelAnimationFrame(this.scheduleUpdate),this.state=A(this.reference,this.state))}}]),e}();De.Utils=("undefined"!=typeof window?window:global).PopperUtils,De.placements=ke,De.Defaults=He;var Ie=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Ne=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},We={touchUser:!1,idCounter:0},Be={refs:[],els:[],poppers:[]},Pe={html:!1,position:"top",animation:"shift",animateFill:!0,arrow:!1,arrowSize:"regular",delay:0,hideDelay:0,trigger:"mouseenter focus",duration:375,hideDuration:375,interactive:!1,theme:"dark",size:"regular",distance:10,offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,transitionFlip:!0,popperOptions:{}},Ue=Object.keys(Pe),je={popper:".tippy-popper",tooltip:".tippy-tooltip",content:".tippy-tooltip-content",circle:"[x-circle]",arrow:"[x-arrow]",el:"[data-tooltipped]",controller:"[data-tippy-controller]"};return document.addEventListener("click",V),document.addEventListener("touchstart",J),function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(Ie(this,e),"addEventListener"in window&&!/MSIE 9/i.test(navigator.userAgent)&&!window.operamini){this.settings=Fe(JSON.parse(JSON.stringify(Pe)),n),this.callbacks={wait:n.wait,beforeShown:n.beforeShown||new Function,shown:n.shown||new Function,beforeHidden:n.beforeHidden||new Function,hidden:n.hidden||new Function};var i=t instanceof Element?[t]:[].slice.call(document.querySelectorAll(t));this._createTooltips(i)}}return Ne(e,[{key:"_applyIndividualSettings",value:function(e){var t=this,n={};return Ue.forEach(function(i){var r=e.getAttribute("data-"+i.toLowerCase())||t.settings[i];"false"===r&&(r=!1),n[i]=r}),n.arrow&&(n.animateFill=!1),Fe(Fe({},this.settings),n)}},{key:"_getEventListenerHandlers",value:function(e,t,n){var i=this,r=function(){if(clearTimeout(t.getAttribute("data-delay")),clearTimeout(t.getAttribute("data-hidedelay")),"visible"!==t.style.visibility)if(n.delay){var e=setTimeout(function(){return i.show(t,n.duration)},n.delay);t.setAttribute("data-delay",e)}else i.show(t,n.duration)},o=function(){return i.callbacks.wait?i.callbacks.wait(r):r()},s=function(){if(clearTimeout(t.getAttribute("data-hidedelay")),clearTimeout(t.getAttribute("data-delay")),n.hideDelay){var e=setTimeout(function(){return i.hide(t,n.hideDuration)},n.hideDelay);t.setAttribute("data-hidedelay",e)}else i.hide(t,n.hideDuration)};return{handleTrigger:function(e){if("click"===e.type&&"visible"===t.style.visibility&&"persistent"!==n.hideOnClick)return s();o()},handleMouseleave:function(i){if(n.interactive){var r=function i(r){Z(r.target,je.popper)!==t&&Z(r.target,je.el)!==e&&-1===n.trigger.indexOf("click")&&(document.removeEventListener("mousemove",i),s())};return document.addEventListener("mousemove",r)}s()},handleBlur:function(e){!We.touchUser&&e.relatedTarget&&(Z(e.relatedTarget,je.popper)||s())}}}},{key:"_createTooltips",value:function(t){var n=this;t.forEach(function(e){var t=n._applyIndividualSettings(e),i=e.getAttribute("title");if(i||t.html){var r=We.idCounter;e.setAttribute("data-tooltipped",""),e.setAttribute("aria-describedby","tippy-tooltip-"+r),re(e);var o=te(r,i,t),s=n._getEventListenerHandlers(e,o,t),a=[];t.trigger.trim().split(" ").forEach(function(t){return a=a.concat(ne(t,e,s))}),ie({id:r,el:e,popper:o,settings:t,listeners:a,tippyInstance:n}),We.idCounter++}}),e.store=Be}},{key:"getPopperElement",value:function(e){try{return Be.refs[Be.els.indexOf(e)].popper}catch(e){throw new Error("[Tippy error]: Element does not exist in any Tippy instances")}}},{key:"getTooltippedElement",value:function(e){try{return Be.refs[Be.poppers.indexOf(e)].el}catch(e){throw new Error("[Tippy error]: Popper does not exist in any Tippy instances")}}},{key:"show",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.duration,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=Be.refs[Be.poppers.indexOf(e)],o=e.querySelector(je.tooltip),s=e.querySelector(je.circle);i&&(this.callbacks.beforeShown(),n>=20&&fe(r,function(){t.hide(e,0,!1),setTimeout(function(){r.hidden||t.show(e,n,!1)},0)})),document.body.contains(e)||ue(r),r.settings.interactive&&r.el.classList.add("active"),r.hidden=!1,r.popper.style.visibility="visible",r.popper.setAttribute("aria-hidden","false"),ae(o,s),pe([o,s],function(e){e.remove("leave"),e.add("enter")}),le([o,s],n);var a=!1,p=function(){a=!0,"hidden"===e.style.visibility||r.onShownFired||(r.settings.transitionFlip||o.classList.add("tippy-notransition"),r.settings.interactive&&e.focus(),r.onShownFired=!0,i&&t.callbacks.shown())};de(r,p),clearTimeout(r.transitionendTimeout),r.transitionendTimeout=setTimeout(function(){a||p()},n)}},{key:"hide",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.duration,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=Be.refs[Be.poppers.indexOf(e)],o=e.querySelector(je.tooltip),s=e.querySelector(je.circle);e.querySelector(je.content);i&&(this.callbacks.beforeHidden(),r.hidden=!0,r.el.classList.remove("active"),r.onShownFired=!1,r.settings.transitionFlip||o.classList.remove("tippy-notransition"),r.flipped=r.settings.position!==e.getAttribute("x-placement")),e.style.visibility="hidden",e.setAttribute("aria-hidden","true"),n===Pe.hideDuration?n=parseInt(o.style[$("transitionDuration")]):le([o,s],n),pe([o,s],function(e){e.remove("enter"),e.add("leave")}),r.settings.html&&-1!==r.settings.trigger.indexOf("click")&&oe(r.el)&&r.el.focus();var a=!1,p=function(){a=!0,"visible"!==e.style.visibility&&document.body.contains(e)&&(r.popperInstance.disableEventListeners(),document.body.removeChild(e),i&&t.callbacks.hidden())};de(r,p),clearTimeout(r.transitionendTimeout),r.transitionendTimeout=setTimeout(function(){a||p()},n)}},{key:"destroy",value:function(e){var t=Be.poppers.indexOf(e),n=Be.refs[t];n.listeners.forEach(function(e){return n.el.removeEventListener(e.event,e.handler)}),n.el.removeAttribute("data-tooltipped"),n.el.removeAttribute("aria-describedby"),n.popperInstance&&n.popperInstance.destroy(),Be.refs.splice(t,1),Be.els.splice(t,1),Be.poppers.splice(t,1)}},{key:"update",value:function(e){var t=Be.refs[Be.poppers.indexOf(e)],n=e.querySelector(je.content),i=t.settings.html;i?n.innerHTML=i instanceof Element?i.innerHTML:document.getElementById(i.replace("#","")).innerHTML:(n.innerHTML=t.el.getAttribute("title")||t.el.getAttribute("data-original-title"),re(t.el))}}]),e}()});
