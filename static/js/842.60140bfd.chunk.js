"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[842],{7842:function(e,n,t){t.r(n);var r=t(5861),a=t(885),c=t(7757),u=t.n(c),s=t(2791),i=t(501),o=t(4299),p=t(8565),f=t(184);n.default=function(){var e=(0,s.useState)([]),n=(0,a.Z)(e,2),t=n[0],c=n[1],v=(0,s.useState)(!1),l=(0,a.Z)(v,2),d=l[0],h=l[1];return(0,s.useEffect)((function(){var e=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,(0,p.Df)();case 4:n=e.sent,c(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:return e.prev=11,h(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,f.jsxs)("main",{children:[d&&(0,f.jsx)(o.Z,{}),(0,f.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.title,r=e.name;return(0,f.jsx)("li",{children:(0,f.jsx)(i.rU,{to:"/movies/".concat(n),children:t||r})},n)}))})]})}},8565:function(e,n,t){t.d(n,{Df:function(){return o},E3:function(){return l},TP:function(){return p},tx:function(){return v},zv:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),u=t(4569),s=t.n(u),i="f954d1f327dcbc2e185dbd566025454c";s().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var e=(0,r.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/all/day?api_key=".concat(i));case 2:return n=e.sent,e.next=5,n.data.results;case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(n,"/reviews?api_key=").concat(i));case 2:return t=e.sent,e.next=5,t.data;case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("search/movie?api_key=".concat(i,"&page=").concat(t,"&language=en&query=").concat(n));case 2:return r=e.sent,e.next=5,r.data.results;case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=842.60140bfd.chunk.js.map