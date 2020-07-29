(this["webpackJsonpryqndev.github.io"]=this["webpackJsonpryqndev.github.io"]||[]).push([[0],{131:function(e,t,a){},132:function(e,t,a){},133:function(e,t,a){},134:function(e,t,a){},135:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(26),l=a.n(r),o=(a(36),a(3)),i=a(27),s=a.n(i),u=(a(43),function(e){var t=e.cur,a=e.set;return c.a.createElement("label",{className:"t-w"},c.a.createElement(s.a,{checked:t,icons:!1,onChange:a.bind(null,!t)}))}),m=(a(44),a(7)),f=a.n(m),d=a(8),b=a.n(d),p=a(9),v=a.n(p);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var E=c.a.createElement("path",{d:"M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h5c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-6c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55-.45 1-1 1zM14 4c0 .55.45 1 1 1h2.59l-9.13 9.13c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L19 6.41V9c0 .55.45 1 1 1s1-.45 1-1V4c0-.55-.45-1-1-1h-5c-.55 0-1 .45-1 1z"}),w=function(e){var t=e.svgRef,a=e.title,n=h(e,["svgRef","title"]);return c.a.createElement("svg",g({height:24,viewBox:"0 0 24 24",width:24,ref:t},n),a?c.a.createElement("title",null,a):null,E)},y=c.a.forwardRef((function(e,t){return c.a.createElement(w,g({svgRef:t},e))})),N=(a.p,[{img:v.a,type:"github",link:"https://github.com/ryqndev"},{img:b.a,type:"twitter",link:"https://twitter.com/ryqndev"},{img:f.a,type:"gmail",link:"mailto:rqyang@uci.edu"}]),O=function(e){var t=e.data;return c.a.createElement("div",{className:"icon-holder"},c.a.createElement("a",{className:"icon",style:{backgroundImage:"url('".concat(t.img,"')")},"aria-label":t.type,href:t.link,target:"_blank",rel:"noopener noreferrer"}))},j=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1];return c.a.createElement("div",{className:"social-trigger ".concat(a?"open":""),onClick:function(){r(!a)}},c.a.createElement(y,null),c.a.createElement("aside",{className:"social-popup"},N.map((function(e){return c.a.createElement(O,{data:e})}))))},k=(a(45),a(46),function(e){var t=e.scroll;return Object(n.useEffect)((function(){document.documentElement.style.setProperty("--scroll-small",t/300),document.documentElement.style.setProperty("--scroll-big",t/-20+"deg")}),[t]),c.a.createElement("header",{className:"h-w"},c.a.createElement("div",{className:"special-square"},c.a.createElement("div",{className:"special-square-inner"},c.a.createElement("div",{className:"h-name front"},"RYAN YANG"))),c.a.createElement("div",{className:"h-name behind"},"RYAN YANG"),c.a.createElement("div",{className:"icon-scroll"},c.a.createElement("div",{className:"mouse"},c.a.createElement("div",{className:"wheel"})),c.a.createElement("div",{className:"icon-arrows"},c.a.createElement("span",null))))}),x=(a(47),a(48),function(e){e.id;var t=e.name,a=e.type,n=e.year,r=e.image;return c.a.createElement("figure",{className:"p-w"},c.a.createElement("div",{className:"p-img-w"},c.a.createElement("div",{className:"item"},c.a.createElement("img",{className:"img",src:r,alt:t+" banner"}),c.a.createElement("img",{className:"img-large",src:r,alt:t+" banner"}))),c.a.createElement("span",null,a," \u29bf ",n),c.a.createElement("h3",null,t))}),q=(a(49),a(10)),R=a.n(q),P=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("https://raw.githubusercontent.com/ryqndev/boba-watch/master/README.md").then((function(e){return e.text()})).then((function(e){r(e)}))}),[]),c.a.createElement("div",null,c.a.createElement(R.a,{source:a,className:"bwatch-w"}))},S=(a(131),function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){fetch("https://raw.githubusercontent.com/ryqndev/Intro-To-Web-Dev/master/readme.md").then((function(e){return e.text()})).then((function(e){r(e)}))}),[]),c.a.createElement("div",null,c.a.createElement(R.a,{source:a,className:"learn-ryqn-dev-w"}))}),A=a(28),I=a.n(A),W=a(29),B=a.n(W),C=[{id:"boba-watch",name:"Boba Watch",type:"Progressive Web App",year:2018,image:I.a,content:c.a.createElement(P,null)},{id:"intro-to-web-dev",name:"Intro to Web Dev",type:"Coding Tutorials",year:2019,image:B.a,content:c.a.createElement(S,null)}],M=(C.length,a(132),function(){return c.a.createElement("section",null,c.a.createElement("div",{className:"ps-w"},c.a.createElement("div",{className:"ps-h"},c.a.createElement("h2",null,"Projects")),c.a.createElement("div",{id:"ps-project"},C.map((function(e){return c.a.createElement(x,Object.assign({expand:!1,key:e.id},e))})))))}),Y=(a(133),a(30)),D=a.n(Y),L=(v.a,b.a,f.a,D.a,a(134),a(135),function(){return c.a.createElement("footer",{className:"f-w"},c.a.createElement("div",{className:"f-bg"},"ryan yang"),c.a.createElement("div",{className:"made-with"},"Made with ",c.a.createElement("span",{role:"img","aria-label":"love"},"\u2764\ufe0f")," at UCI on sbux ",c.a.createElement("span",{role:"img","aria-label":"coffee"},"\u2615")," & boba"))}),T=function(e,t){document.documentElement.style.setProperty(e,t)},V=function(e){e?(T("--dark-mode","1"),T("--background-color","#151515"),T("--background-color-alt","#ffffff"),T("--background-emphasis","#000000"),T("--text-color","#ffffff"),T("--text-color-alt","#000000"),T("--emphasis-text","#ffffff"),T("--accent-color","#ff00ff"),T("--accent-color-alt","#00ffff"),T("--emphasis-shadow","#ff00ff")):(T("--dark-mode","0"),T("--background-color","#ffeeee"),T("--background-color-alt","#151515"),T("--background-emphasis","#ffbbbb"),T("--text-color","#000000"),T("--text-color-alt","#ffeeee"),T("--emphasis-text","#ff9999"),T("--accent-color","#ff00ff"),T("--accent-color-alt","#00ffff"),T("--emphasis-shadow","#000000"))},z=(a(136),function(){var e=Object(n.useState)(!0),t=Object(o.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(0),i=Object(o.a)(l,2),s=i[0],m=i[1],f=Object(n.useRef)(m),d=Object(n.useRef)(null);return Object(n.useEffect)((function(){V(a)}),[a]),Object(n.useEffect)((function(){var e=d.current,t=function(){f.current(e.scrollTop)};return t(),e.addEventListener("scroll",t),function(){e.removeEventListener("scroll",t)}}),[]),c.a.createElement("div",{id:"w",ref:d},c.a.createElement(u,{cur:a,set:r}),c.a.createElement(j,null),c.a.createElement(k,{scroll:s}),c.a.createElement(M,null),c.a.createElement(L,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},28:function(e,t,a){e.exports=a.p+"static/media/boba_watch.86dab07c.png"},29:function(e,t,a){e.exports=a.p+"static/media/webdev.3dc93cf7.jpeg"},30:function(e,t,a){e.exports=a.p+"static/media/instagram.ce41af6a.svg"},31:function(e,t,a){e.exports=a(137)},36:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},7:function(e,t,a){e.exports=a.p+"static/media/gmail.2382b9b0.svg"},8:function(e,t,a){e.exports=a.p+"static/media/twitter.912b7273.svg"},9:function(e,t,a){e.exports=a.p+"static/media/github.d8e2822a.svg"}},[[31,1,2]]]);
//# sourceMappingURL=main.78d34444.chunk.js.map