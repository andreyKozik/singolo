!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=59)}([function(t,e,r){(function(e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e&&e)||Function("return this")()}).call(this,r(62))},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e,r){var n=r(0),o=r(24),i=r(1),c=r(25),u=r(31),a=r(45),s=o("wks"),f=n.Symbol,l=a?f:f&&f.withoutSetter||c;t.exports=function(t){return i(s,t)||(u&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){var n=r(7),o=r(5),i=r(11);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(7),o=r(37),i=r(6),c=r(14),u=Object.defineProperty;e.f=n?u:function(t,e,r){if(i(t),e=c(e,!0),i(r),o)try{return u(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){var n=r(8);t.exports=function(t){if(!n(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e,r){var n=r(3);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,r){var n=r(36),o=r(22);t.exports=function(t){return n(o(t))}},function(t,e,r){var n=r(0),o=r(20).f,i=r(4),c=r(12),u=r(23),a=r(41),s=r(67);t.exports=function(t,e){var r,f,l,p,d,y=t.target,v=t.global,m=t.stat;if(r=v?n:m?n[y]||u(y,{}):(n[y]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=o(r,f))&&d.value:r[f],!s(v?f:y+(m?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(r,f,p,t)}}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,r){var n=r(0),o=r(4),i=r(1),c=r(23),u=r(39),a=r(15),s=a.get,f=a.enforce,l=String(String).split("String");(t.exports=function(t,e,r,u){var a=!!u&&!!u.unsafe,s=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof e||i(r,"name")||o(r,"name",e),f(r).source=l.join("string"==typeof e?e:"")),t!==n?(a?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=r:o(t,e,r)):s?t[e]=r:c(e,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||u(this)}))},function(t,e){t.exports={}},function(t,e,r){var n=r(8);t.exports=function(t,e){if(!n(t))return t;var r,o;if(e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!n(o=r.call(t)))return o;if(!e&&"function"==typeof(r=t.toString)&&!n(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){var n,o,i,c=r(63),u=r(0),a=r(8),s=r(4),f=r(1),l=r(16),p=r(18),d=u.WeakMap;if(c){var y=new d,v=y.get,m=y.has,g=y.set;n=function(t,e){return g.call(y,t,e),e},o=function(t){return v.call(y,t)||{}},i=function(t){return m.call(y,t)}}else{var h=l("state");p[h]=!0,n=function(t,e){return s(t,h,e),e},o=function(t){return f(t,h)?t[h]:{}},i=function(t){return f(t,h)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!a(e)||(r=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},function(t,e,r){var n=r(24),o=r(25),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports=!1},function(t,e){t.exports={}},function(t,e,r){var n=r(22);t.exports=function(t){return Object(n(t))}},function(t,e,r){var n=r(7),o=r(35),i=r(11),c=r(9),u=r(14),a=r(1),s=r(37),f=Object.getOwnPropertyDescriptor;e.f=n?f:function(t,e){if(t=c(t),e=u(e,!0),s)try{return f(t,e)}catch(t){}if(a(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,r){var n=r(0),o=r(4);t.exports=function(t,e){try{o(n,t,e)}catch(r){n[t]=e}return e}},function(t,e,r){var n=r(17),o=r(40);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.4",mode:n?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+n).toString(36)}},function(t,e,r){var n=r(42),o=r(0),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t])||i(o[t]):n[t]&&n[t][e]||o[t]&&o[t][e]}},function(t,e,r){var n=r(43),o=r(30).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},function(t,e,r){var n=r(29),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,r){var n=r(3);t.exports=!!Object.getOwnPropertySymbols&&!n((function(){return!String(Symbol())}))},function(t,e,r){var n,o=r(6),i=r(68),c=r(30),u=r(18),a=r(69),s=r(38),f=r(16),l=f("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},y=function(){try{n=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;y=n?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(n):((e=s("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var r=c.length;r--;)delete y.prototype[c[r]];return y()};u[l]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=y(),void 0===e?r:i(r,e)}},function(t,e,r){var n=r(5).f,o=r(1),i=r(2)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},function(t,e,r){var n={};n[r(2)("toStringTag")]="z",t.exports="[object z]"===String(n)},function(t,e,r){"use strict";var n={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!n.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:n},function(t,e,r){var n=r(3),o=r(21),i="".split;t.exports=n((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,r){var n=r(7),o=r(3),i=r(38);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,r){var n=r(0),o=r(8),i=n.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,e,r){var n=r(40),o=Function.toString;"function"!=typeof n.inspectSource&&(n.inspectSource=function(t){return o.call(t)}),t.exports=n.inspectSource},function(t,e,r){var n=r(0),o=r(23),i=n["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,r){var n=r(1),o=r(64),i=r(20),c=r(5);t.exports=function(t,e){for(var r=o(e),u=c.f,a=i.f,s=0;s<r.length;s++){var f=r[s];n(t,f)||u(t,f,a(e,f))}}},function(t,e,r){var n=r(0);t.exports=n},function(t,e,r){var n=r(1),o=r(9),i=r(65).indexOf,c=r(18);t.exports=function(t,e){var r,u=o(t),a=0,s=[];for(r in u)!n(c,r)&&n(u,r)&&s.push(r);for(;e.length>a;)n(u,r=e[a++])&&(~i(s,r)||s.push(r));return s}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,r){var n=r(31);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e,r){var n=r(21);t.exports=Array.isArray||function(t){return"Array"==n(t)}},function(t,e,r){var n=r(43),o=r(30);t.exports=Object.keys||function(t){return n(t,o)}},function(t,e,r){var n=r(2);e.f=n},function(t,e,r){var n=r(42),o=r(1),i=r(48),c=r(5).f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});o(e,t)||c(e,t,{value:i.f(t)})}},function(t,e,r){var n=r(51),o=r(36),i=r(19),c=r(28),u=r(72),a=[].push,s=function(t){var e=1==t,r=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,y,v,m){for(var g,h,b=i(d),S=o(b),x=n(y,v,3),O=c(S.length),w=0,L=m||u,E=e?L(d,O):r?L(d,0):void 0;O>w;w++)if((p||w in S)&&(h=x(g=S[w],w,b),t))if(e)E[w]=h;else if(h)switch(t){case 3:return!0;case 5:return g;case 6:return w;case 2:a.call(E,g)}else if(f)return!1;return l?-1:s||f?f:E}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,r){var n=r(71);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,r){"use strict";var n=r(50).forEach,o=r(76),i=r(77),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,r){var n=r(34),o=r(21),i=r(2)("toStringTag"),c="Arguments"==o(function(){return arguments}());t.exports=n?o:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:c?o(e):"Object"==(n=o(e))&&"function"==typeof e.callee?"Arguments":n}},function(t,e,r){"use strict";var n=r(9),o=r(85),i=r(13),c=r(15),u=r(55),a=c.set,s=c.getterFor("Array Iterator");t.exports=u(Array,"Array",(function(t,e){a(this,{type:"Array Iterator",target:n(t),index:0,kind:e})}),(function(){var t=s(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e,r){"use strict";var n=r(10),o=r(86),i=r(57),c=r(88),u=r(33),a=r(4),s=r(12),f=r(2),l=r(17),p=r(13),d=r(56),y=d.IteratorPrototype,v=d.BUGGY_SAFARI_ITERATORS,m=f("iterator"),g=function(){return this};t.exports=function(t,e,r,f,d,h,b){o(r,e,f);var S,x,O,w=function(t){if(t===d&&q)return q;if(!v&&t in j)return j[t];switch(t){case"keys":case"values":case"entries":return function(){return new r(this,t)}}return function(){return new r(this)}},L=e+" Iterator",E=!1,j=t.prototype,A=j[m]||j["@@iterator"]||d&&j[d],q=!v&&A||w(d),T="Array"==e&&j.entries||A;if(T&&(S=i(T.call(new t)),y!==Object.prototype&&S.next&&(l||i(S)===y||(c?c(S,y):"function"!=typeof S[m]&&a(S,m,g)),u(S,L,!0,!0),l&&(p[L]=g))),"values"==d&&A&&"values"!==A.name&&(E=!0,q=function(){return A.call(this)}),l&&!b||j[m]===q||a(j,m,q),p[e]=q,d)if(x={values:w("values"),keys:h?q:w("keys"),entries:w("entries")},b)for(O in x)!v&&!E&&O in j||s(j,O,x[O]);else n({target:e,proto:!0,forced:v||E},x);return x}},function(t,e,r){"use strict";var n,o,i,c=r(57),u=r(4),a=r(1),s=r(2),f=r(17),l=s("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=c(c(i)))!==Object.prototype&&(n=o):p=!0),null==n&&(n={}),f||a(n,l)||u(n,l,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:p}},function(t,e,r){var n=r(1),o=r(19),i=r(16),c=r(87),u=i("IE_PROTO"),a=Object.prototype;t.exports=c?Object.getPrototypeOf:function(t){return t=o(t),n(t,u)?t[u]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,r){r(60),t.exports=r(98)},function(t,e,r){"use strict";r.r(e);r(61),r(73),r(74),r(75),r(78),r(54),r(90),r(92),r(94),r(96),r(97);function n(t){return function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var o=document.querySelectorAll("main>section");document.querySelector(".navigation").addEventListener("click",(function(t){document.querySelector(".navigation").querySelectorAll("li a").forEach((function(t){return t.classList.remove("active")})),t.target.classList.add("active"),document.querySelector(".header-navigation").style.display="none",document.querySelector(".burger-menu").style.transform="rotate(180deg)",document.querySelector("h1").classList.remove("h1-767px")})),document.addEventListener("scroll",(function(){var t=window.scrollY,e=document.querySelectorAll(".navigation a"),r=document.documentElement.scrollHeight-document.documentElement.clientHeight,n=Math.round(window.pageYOffset);o.forEach((function(o){r===n?(e.forEach((function(t){return t.classList.remove("active")})),document.querySelector(".contact-form").classList.add("active")):o.offsetTop<=t+96&&o.offsetTop+o.offsetHeight>=t&&e.forEach((function(t){t.classList.remove("active"),o.getAttribute("id")===t.getAttribute("href").substring(1)&&t.classList.add("active")}))}))}));var i=document.querySelectorAll(".slider .item"),c=0,u=!0;function a(t){c=(t+i.length)%i.length}function s(t){u=!1,i[c].classList.add(t),i[c].addEventListener("animationend",(function(){this.classList.remove("active",t)}))}function f(t){u=!0,"slide-2"===i[c].classList[0]&&(document.querySelector(".slider_background-color").style.backgroundColor="#648BF0",document.querySelector(".slider_background-color").style.boxShadow="inset 0px -6px #6d81d8ec"),"slide-1"===i[c].classList[0]&&(document.querySelector(".slider_background-color").style.backgroundColor="#f06c64",document.querySelector(".slider_background-color").style.boxShadow="inset 0px -6px #ea676b"),i[c].classList.add("next",t),document.querySelector(".left").classList.add("turn-off"),document.querySelector(".right").classList.add("turn-off"),i[c].addEventListener("animationend",(function(){this.classList.remove("next",t),this.classList.add("active"),document.querySelector(".left").classList.remove("turn-off"),document.querySelector(".right").classList.remove("turn-off")}))}document.querySelector(".control.left").addEventListener("click",(function(){var t;u&&(t=c,s("to-right"),a(t-1),f("from-left"))})),document.querySelector(".control.right").addEventListener("click",(function(){var t;u&&(t=c,s("to-left"),a(t+1),f("from-right"))}));var l,p=document.querySelector(".home-phone-vertical img"),d=document.querySelector(".home-phone-horizontal img"),y=document.querySelector(".home-vertical-slide2 img"),v=document.querySelector(".vertical-black-screen"),m=document.querySelector(".horizontal-black-screen"),g=document.querySelector(".vertical-black-screen-slide2");function h(t,e){t.addEventListener("mousedown",(function(r){"1"===e.style.opacity?e.style.opacity="0":e.style.opacity="1",t.width="4.3vw",t.classList.add("button-home")})),t.addEventListener("mouseup",(function(e){t.width="4.3vw",t.classList.remove("button-home")}))}h(p,v),h(d,m),h(y,g);var b=document.querySelector(".tabs"),S=document.querySelector(".work-examples ul");b.addEventListener("click",(function(t){if(l===t.target)return!1;l=t.target,b.querySelectorAll("button").forEach((function(t){return t.classList.remove("button-active")})),"tabs"!==t.target.classList[0]&&t.target.classList.add("button-active"),S.querySelectorAll("img").forEach((function(t){t.classList.remove("border")}));for(var e=S.querySelectorAll("li"),r=n(e),o=r.length-1;o>0;o--){var i=r[o-1];r[o]=i}e.forEach((function(t,e){S.append(r[e])}))})),S.addEventListener("click",(function(t){S.querySelectorAll("img").forEach((function(t){t.classList.remove("border")})),console.log(5),t.toElement!==document.querySelector(".work-examples")&&t.target.classList.add("border")})),document.querySelector(".submit-button").addEventListener("click",(function(){!0===document.getElementById("email").validity.valid&&!0===document.getElementById("name").validity.valid&&(document.getElementById("emailSent").classList.remove("none"),document.getElementById("emailSent").classList.add("flex"),document.body.style.pointerEvents="none",document.getElementById("subject").value?document.querySelector(".subjectSent").innerText=document.getElementById("subject").value:document.querySelector(".subjectSent").innerText="Without subject",document.getElementById("describe").value?document.querySelector(".descriptionSent").innerText=document.getElementById("describe").value:document.querySelector(".descriptionSent").innerText="Without description",document.body.classList.add("stopScroll"))})),document.querySelector(".confirm").addEventListener("click",(function(){document.getElementById("emailSent").classList.remove("flex"),document.getElementById("emailSent").classList.add("none"),document.body.classList.remove("stopScroll"),document.body.style.pointerEvents="auto",document.getElementById("data").reset()})),document.querySelector(".burger-menu").addEventListener("click",(function(){"block"!==document.querySelector(".header-navigation").style.display?(document.querySelector(".header-navigation").style.display="block",document.querySelector(".burger-menu").style.transform="rotate(90deg)",document.querySelector("h1").classList.add("h1-767px")):(document.querySelector(".header-navigation").style.display="none",document.querySelector(".burger-menu").style.transform="rotate(180deg)",document.querySelector("h1").classList.remove("h1-767px"))}))},function(t,e,r){"use strict";var n=r(10),o=r(0),i=r(26),c=r(17),u=r(7),a=r(31),s=r(45),f=r(3),l=r(1),p=r(46),d=r(8),y=r(6),v=r(19),m=r(9),g=r(14),h=r(11),b=r(32),S=r(47),x=r(27),O=r(70),w=r(44),L=r(20),E=r(5),j=r(35),A=r(4),q=r(12),T=r(24),P=r(16),k=r(18),_=r(25),I=r(2),M=r(48),C=r(49),R=r(33),F=r(15),B=r(50).forEach,N=P("hidden"),G=I("toPrimitive"),D=F.set,V=F.getterFor("Symbol"),z=Object.prototype,H=o.Symbol,W=i("JSON","stringify"),Y=L.f,U=E.f,J=O.f,$=j.f,K=T("symbols"),Q=T("op-symbols"),X=T("string-to-symbol-registry"),Z=T("symbol-to-string-registry"),tt=T("wks"),et=o.QObject,rt=!et||!et.prototype||!et.prototype.findChild,nt=u&&f((function(){return 7!=b(U({},"a",{get:function(){return U(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=Y(z,e);n&&delete z[e],U(t,e,r),n&&t!==z&&U(z,e,n)}:U,ot=function(t,e){var r=K[t]=b(H.prototype);return D(r,{type:"Symbol",tag:t,description:e}),u||(r.description=e),r},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ct=function(t,e,r){t===z&&ct(Q,e,r),y(t);var n=g(e,!0);return y(r),l(K,n)?(r.enumerable?(l(t,N)&&t[N][n]&&(t[N][n]=!1),r=b(r,{enumerable:h(0,!1)})):(l(t,N)||U(t,N,h(1,{})),t[N][n]=!0),nt(t,n,r)):U(t,n,r)},ut=function(t,e){y(t);var r=m(e),n=S(r).concat(lt(r));return B(n,(function(e){u&&!at.call(r,e)||ct(t,e,r[e])})),t},at=function(t){var e=g(t,!0),r=$.call(this,e);return!(this===z&&l(K,e)&&!l(Q,e))&&(!(r||!l(this,e)||!l(K,e)||l(this,N)&&this[N][e])||r)},st=function(t,e){var r=m(t),n=g(e,!0);if(r!==z||!l(K,n)||l(Q,n)){var o=Y(r,n);return!o||!l(K,n)||l(r,N)&&r[N][n]||(o.enumerable=!0),o}},ft=function(t){var e=J(m(t)),r=[];return B(e,(function(t){l(K,t)||l(k,t)||r.push(t)})),r},lt=function(t){var e=t===z,r=J(e?Q:m(t)),n=[];return B(r,(function(t){!l(K,t)||e&&!l(z,t)||n.push(K[t])})),n};(a||(q((H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=_(t),r=function(t){this===z&&r.call(Q,t),l(this,N)&&l(this[N],e)&&(this[N][e]=!1),nt(this,e,h(1,t))};return u&&rt&&nt(z,e,{configurable:!0,set:r}),ot(e,t)}).prototype,"toString",(function(){return V(this).tag})),q(H,"withoutSetter",(function(t){return ot(_(t),t)})),j.f=at,E.f=ct,L.f=st,x.f=O.f=ft,w.f=lt,M.f=function(t){return ot(I(t),t)},u&&(U(H.prototype,"description",{configurable:!0,get:function(){return V(this).description}}),c||q(z,"propertyIsEnumerable",at,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!a,sham:!a},{Symbol:H}),B(S(tt),(function(t){C(t)})),n({target:"Symbol",stat:!0,forced:!a},{for:function(t){var e=String(t);if(l(X,e))return X[e];var r=H(e);return X[e]=r,Z[r]=e,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){rt=!0},useSimple:function(){rt=!1}}),n({target:"Object",stat:!0,forced:!a,sham:!u},{create:function(t,e){return void 0===e?b(t):ut(b(t),e)},defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:st}),n({target:"Object",stat:!0,forced:!a},{getOwnPropertyNames:ft,getOwnPropertySymbols:lt}),n({target:"Object",stat:!0,forced:f((function(){w.f(1)}))},{getOwnPropertySymbols:function(t){return w.f(v(t))}}),W)&&n({target:"JSON",stat:!0,forced:!a||f((function(){var t=H();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}))},{stringify:function(t,e,r){for(var n,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(n=e,(d(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!it(e))return e}),o[1]=e,W.apply(null,o)}});H.prototype[G]||A(H.prototype,G,H.prototype.valueOf),R(H,"Symbol"),k[N]=!0},function(t,e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"==typeof window&&(r=window)}t.exports=r},function(t,e,r){var n=r(0),o=r(39),i=n.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,r){var n=r(26),o=r(27),i=r(44),c=r(6);t.exports=n("Reflect","ownKeys")||function(t){var e=o.f(c(t)),r=i.f;return r?e.concat(r(t)):e}},function(t,e,r){var n=r(9),o=r(28),i=r(66),c=function(t){return function(e,r,c){var u,a=n(e),s=o(a.length),f=i(c,s);if(t&&r!=r){for(;s>f;)if((u=a[f++])!=u)return!0}else for(;s>f;f++)if((t||f in a)&&a[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,e,r){var n=r(29),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},function(t,e,r){var n=r(3),o=/#|\.prototype\./,i=function(t,e){var r=u[c(t)];return r==s||r!=a&&("function"==typeof e?n(e):!!e)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,r){var n=r(7),o=r(5),i=r(6),c=r(47);t.exports=n?Object.defineProperties:function(t,e){i(t);for(var r,n=c(e),u=n.length,a=0;u>a;)o.f(t,r=n[a++],e[r]);return t}},function(t,e,r){var n=r(26);t.exports=n("document","documentElement")},function(t,e,r){var n=r(9),o=r(27).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return c.slice()}}(t):o(n(t))}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,r){var n=r(8),o=r(46),i=r(2)("species");t.exports=function(t,e){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?n(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},function(t,e,r){"use strict";var n=r(10),o=r(7),i=r(0),c=r(1),u=r(8),a=r(5).f,s=r(41),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};s(p,f);var d=p.prototype=f.prototype;d.constructor=p;var y=d.toString,v="Symbol(test)"==String(f("test")),m=/^Symbol\((.*)\)[^)]+$/;a(d,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,e=y.call(t);if(c(l,t))return"";var r=v?e.slice(7,-1):e.replace(m,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:p})}},function(t,e,r){r(49)("iterator")},function(t,e,r){"use strict";var n=r(10),o=r(52);n({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},function(t,e,r){"use strict";var n=r(3);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},function(t,e,r){var n=r(7),o=r(3),i=r(1),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,e){if(i(u,t))return u[t];e||(e={});var r=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:a,l=i(e,1)?e[1]:void 0;return u[t]=!!r&&!o((function(){if(s&&!n)return!0;var t={length:-1};s?c(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,f,l)}))}},function(t,e,r){var n=r(10),o=r(79);n({target:"Array",stat:!0,forced:!r(84)((function(t){Array.from(t)}))},{from:o})},function(t,e,r){"use strict";var n=r(51),o=r(19),i=r(80),c=r(81),u=r(28),a=r(82),s=r(83);t.exports=function(t){var e,r,f,l,p,d,y=o(t),v="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,h=void 0!==g,b=s(y),S=0;if(h&&(g=n(g,m>2?arguments[2]:void 0,2)),null==b||v==Array&&c(b))for(r=new v(e=u(y.length));e>S;S++)d=h?g(y[S],S):y[S],a(r,S,d);else for(p=(l=b.call(y)).next,r=new v;!(f=p.call(l)).done;S++)d=h?i(l,g,[f.value,S],!0):f.value,a(r,S,d);return r.length=S,r}},function(t,e,r){var n=r(6);t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(e){var i=t.return;throw void 0!==i&&n(i.call(t)),e}}},function(t,e,r){var n=r(2),o=r(13),i=n("iterator"),c=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||c[i]===t)}},function(t,e,r){"use strict";var n=r(14),o=r(5),i=r(11);t.exports=function(t,e,r){var c=n(e);c in t?o.f(t,c,i(0,r)):t[c]=r}},function(t,e,r){var n=r(53),o=r(13),i=r(2)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[n(t)]}},function(t,e,r){var n=r(2)("iterator"),o=!1;try{var i=0,c={next:function(){return{done:!!i++}},return:function(){o=!0}};c[n]=function(){return this},Array.from(c,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i={};i[n]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},function(t,e,r){var n=r(2),o=r(32),i=r(5),c=n("unscopables"),u=Array.prototype;null==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},function(t,e,r){"use strict";var n=r(56).IteratorPrototype,o=r(32),i=r(11),c=r(33),u=r(13),a=function(){return this};t.exports=function(t,e,r){var s=e+" Iterator";return t.prototype=o(n,{next:i(1,r)}),c(t,s,!1,!0),u[s]=a,t}},function(t,e,r){var n=r(3);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,r){var n=r(6),o=r(89);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(r,[]),e=r instanceof Array}catch(t){}return function(r,i){return n(r),o(i),e?t.call(r,i):r.__proto__=i,r}}():void 0)},function(t,e,r){var n=r(8);t.exports=function(t){if(!n(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,r){var n=r(34),o=r(12),i=r(91);n||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,r){"use strict";var n=r(34),o=r(53);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,r){"use strict";var n=r(12),o=r(6),i=r(3),c=r(93),u=RegExp.prototype,a=u.toString,s=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),f="toString"!=a.name;(s||f)&&n(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),r=t.flags;return"/"+e+"/"+String(void 0===r&&t instanceof RegExp&&!("flags"in u)?c.call(t):r)}),{unsafe:!0})},function(t,e,r){"use strict";var n=r(6);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,r){"use strict";var n=r(95).charAt,o=r(15),i=r(55),c=o.set,u=o.getterFor("String Iterator");i(String,"String",(function(t){c(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=u(this),r=e.string,o=e.index;return o>=r.length?{value:void 0,done:!0}:(t=n(r,o),e.index+=t.length,{value:t,done:!1})}))},function(t,e,r){var n=r(29),o=r(22),i=function(t){return function(e,r){var i,c,u=String(o(e)),a=n(r),s=u.length;return a<0||a>=s?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===s||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,r){var n=r(0),o=r(58),i=r(52),c=r(4);for(var u in o){var a=n[u],s=a&&a.prototype;if(s&&s.forEach!==i)try{c(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e,r){var n=r(0),o=r(58),i=r(54),c=r(4),u=r(2),a=u("iterator"),s=u("toStringTag"),f=i.values;for(var l in o){var p=n[l],d=p&&p.prototype;if(d){if(d[a]!==f)try{c(d,a,f)}catch(t){d[a]=f}if(d[s]||c(d,s,l),o[l])for(var y in i)if(d[y]!==i[y])try{c(d,y,i[y])}catch(t){d[y]=i[y]}}}},function(t,e,r){}]);