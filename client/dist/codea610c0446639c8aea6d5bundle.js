!function(e){function t(t){for(var a,l,c=t[0],i=t[1],u=t[2],m=0,p=[];m<c.length;m++)l=c[m],r[l]&&p.push(r[l][0]),r[l]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var i=n[c];0!==r[i]&&(a=!1)}a&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},r={0:0},o=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=i;o.push([14,1]),n()}({14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),l=n.n(o),c=n(1),i=n.n(c),u=function(e){var t=e.item;return t?r.a.createElement("div",{className:"peopleAlsoViewedItem"},r.a.createElement("img",{className:"imgReducedSize",src:t.imageURL,alt:"Product"}),r.a.createElement("div",null,r.a.createElement(i.a,{numberOfStars:5,rating:t.ranking,starRatedColor:"#BD5A0E",starDimension:"15px",starSpacing:"3px"}),r.a.createElement("span",{className:"review"},"(",t.reviews,")")),r.a.createElement("p",{className:"roboto-C"},t.title),r.a.createElement("p",{className:"roboto"},"$",t.price)):r.a.createElement("div",null,"please wait")},s=function(e){var t=e.item,n=e.linkText,a=function(e){var t=window.location.protocol,n=window.location.hostname,a=(window.location.pathname,window.location.port);return""!==a?"".concat(t,"//").concat(n,":").concat(a,"/product/").concat(e):"".concat(t,"//").concat(n,"/product/").concat(e)};return t?r.a.createElement("div",{className:"cag__item"},r.a.createElement("a",{href:a(t._id)},r.a.createElement("img",{className:"imgReducedSize",src:t.imageURL,alt:"Product"})),r.a.createElement("div",{className:"cag__item__main-info text-center"},r.a.createElement("p",{className:"roboto-C cag__item__main-info__name"},t.title),r.a.createElement("div",null,r.a.createElement(i.a,{numberOfStars:5,rating:t.ranking,starRatedColor:"#BD5A0E",starDimension:"15px",starSpacing:"3px"}),r.a.createElement("span",{className:"review"},"(",t.reviews,")")),r.a.createElement("p",{className:"roboto","data-price":"dt-price"},"$",t.price),r.a.createElement("a",{className:"cag__link",href:a(t._id)},n)),r.a.createElement("div",{className:"cag__info-group"},r.a.createElement("p",{className:"cag__info-group__title"},"Sleeping Capacity"),r.a.createElement("p",{className:"cag__info-group__info"},t.sleepingCapacity)),r.a.createElement("div",{className:"cag__info-group"},r.a.createElement("p",{className:"cag__info-group__title"},"Packaged Weight"),r.a.createElement("p",{className:"cag__info-group__info"},t.packagedWeight)),r.a.createElement("div",{className:"cag__info-group"},r.a.createElement("p",{className:"cag__info-group__title"},"Number of Doors"),r.a.createElement("p",{className:"cag__info-group__info"},t.numberOfDoors>1?"".concat(t.numberOfDoors," doors"):"".concat(t.numberOfDoors," door"))),r.a.createElement("div",{className:"cag__info-group"},r.a.createElement("p",{className:"cag__info-group__title"},"Best Use"),r.a.createElement("p",{className:"cag__info-group__info"},t.bestUse))):r.a.createElement("div",null,"please wait")},m=function(e){var t=e.tents,n=e.current,a=e.updateState;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"titleContainer"},r.a.createElement("h3",null,"People also viewed")),r.a.createElement("div",{className:"pplViewedContainer","data-test":"dt-comp-people"},t.slice(0,4).map(function(e){return r.a.createElement(u,{key:e._id,item:e})}))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"titleContainer"},r.a.createElement("h3",null,"Compare at a glance")),r.a.createElement("div",{className:"compare-at-glance__container"},r.a.createElement("div",{className:"compare-at-glance__current"},r.a.createElement(s,{linkText:"Buy Now",item:n[0]})),r.a.createElement("div",{className:"compare-at-glance__suggestions"},t.map(function(e){return r.a.createElement(s,{linkText:"View Now",key:e._id,item:e,updateState:a})})))))},p=function(e){var t=e.shirts;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"titleContainer"},r.a.createElement("h3",null,"People also viewed")),r.a.createElement("div",{className:"pplViewedContainer"},t.map(function(e){return r.a.createElement(u,{key:e._id,item:e})})))};n(15);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?_(e):t}(this,E(t).call(this))).state={currentItem:!1,tents:!1,shirts:!1},e.updateState=e.updateState.bind(_(_(e))),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,r.a.Component),function(e,t,n){t&&d(e.prototype,t),n&&d(e,n)}(t,[{key:"componentDidMount",value:function(){var e=window.location.href.split("/"),t=+e[e.length-1];!isNaN(t)&&t>0&&t<Math.pow(10,7)&&this.getCurrentItem(this.updateState,t),this.getTentData(this.updateState),this.getShirtData(this.updateState)}},{key:"getCurrentItem",value:function(e,t){fetch("".concat(window.location.origin,"/product/data/").concat(t)).then(function(e){return e.json()}).then(function(t){return e("currentItem",t)}).catch(function(e){return console.error(e)})}},{key:"getTentData",value:function(e){fetch("".concat(window.location.origin,"/data/tents")).then(function(e){return e.json()}).then(function(t){return e("tents",t)}).catch(function(e){return console.error(e)})}},{key:"getShirtData",value:function(e){fetch("".concat(window.location.origin,"/data/shirts")).then(function(e){return e.json()}).then(function(t){return e("shirts",t)}).catch(function(e){return console.error(e)})}},{key:"updateState",value:function(e,t){this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e,t))}},{key:"render",value:function(){var e,t=this.state,n=t.currentItem,a=t.tents,o=t.shirts;return e=n&&"Tent"===n[0].productType?r.a.createElement(m,{tents:a,current:n,updateState:this.updateState}):r.a.createElement(p,{shirts:o}),a&&o?r.a.createElement("div",null,e):r.a.createElement("div",{className:"centered"},"Loading...:D")}}]),t}();function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function w(e,t){return(w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var N=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=function(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?S(e):t}(this,y(t).call(this))).state={input:""},e.handleSubmit=e.handleSubmit.bind(S(S(e))),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&w(e,t)}(t,r.a.Component),function(e,t,n){t&&b(e.prototype,t),n&&b(e,n)}(t,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.input,n=window.location.protocol,a=window.location.hostname,r=(window.location.pathname,window.location.port);window.location.href=""!==r?"".concat(n,"//").concat(a,":").concat(r,"/product/").concat(t):"".concat(n,"//").concat(a,"/product/").concat(t)}},{key:"handleInputChange",value:function(e,t){this.setState(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},t,e.target.value))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"nav__container"},r.a.createElement("div",{className:"nav__navRefer-container"},r.a.createElement("div",{className:"nav__navRefer"},r.a.createElement("ul",null,r.a.createElement("li",null,"SHOP"),r.a.createElement("li",null,"OUTLET"),r.a.createElement("li",null,"USED GEAR"),r.a.createElement("li",null,"ADVENTURES"),r.a.createElement("li",null,"CLASSES & EVENTS"),r.a.createElement("li",null,"EXPERT ADVICE"),r.a.createElement("li",null,"CO-OP JOURNAL"),r.a.createElement("li",null,"GET OUTSIDE")))),r.a.createElement("div",{className:"nav__navShop-container"},r.a.createElement("div",{className:"nav__navShop"},r.a.createElement("div",{className:"nav__navShop-logo"},r.a.createElement("img",{src:"https://s3-us-west-2.amazonaws.com/fec-project/logo/TrailblazerLogo.png",alt:"Trailblazer logo"})),r.a.createElement("div",{className:"nav__navShop-data"},r.a.createElement("div",{className:"nav__navShop__top"},r.a.createElement("div",{className:"nav__navShop-search"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",placeholder:"Search for great gear & clothing",onChange:function(t){return e.handleInputChange(t,"input")}}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"fa fa-search"})))),r.a.createElement("div",{className:"nav__navShop-account"},r.a.createElement("ul",null,r.a.createElement("li",null,"SIGN IN",r.a.createElement("i",{className:"fa fa-user"})),r.a.createElement("li",null,"STORES",r.a.createElement("i",{className:"fa fa-map-marker"})),r.a.createElement("li",null,"CART",r.a.createElement("i",{className:"fa fa-shopping-cart"}))))),r.a.createElement("div",{className:"nav__navShop__middle"}),r.a.createElement("div",{className:"nav__navShop__bottom"},r.a.createElement("div",{className:"nav__navShop-links"},r.a.createElement("ul",{className:"roboto-C"},r.a.createElement("li",null,"Camp & Hike"),r.a.createElement("li",null,"Climb"),r.a.createElement("li",null,"Cycle"),r.a.createElement("li",null,"Paddle"),r.a.createElement("li",null,"Run"),r.a.createElement("li",null,"Snow"),r.a.createElement("li",null,"Travel"),r.a.createElement("li",null,"Men"),r.a.createElement("li",null,"Women"),r.a.createElement("li",null,"Kids"),r.a.createElement("li",null,"Gifts"),r.a.createElement("li",null,"Deals"),r.a.createElement("li",null,"More"),r.a.createElement("li",null,"OUTLET"))))))))}}]),t}();l.a.render(r.a.createElement(h,null),document.getElementById("productComparison")),l.a.render(r.a.createElement(N,null),document.getElementById("navbar"))}});