"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{1247:function(A,t,n){n.r(t);var e=n(5861),r=n(885),a=n(7757),u=n.n(a),c=n(2791),s=n(6871),p=n(8565),i=n(5878),o=n(184);t.default=function(){var A=(0,s.UO)().itemId,t=(0,c.useState)(null),n=(0,r.Z)(t,2),a=n[0],l=n[1];(0,c.useEffect)((function(){function t(){return(t=(0,e.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.zv)(A);case 3:n=t.sent,l(n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[A]);return(0,o.jsx)("div",{children:a&&(0,o.jsx)("ul",{children:a.cast.length>0?a.cast.map((function(A){var t=A.id,n=A.profile_path,e=A.name,r=A.character;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w200"+n:i,alt:e}),(0,o.jsx)("p",{children:e}),(0,o.jsxs)("p",{children:["Character: ",r||"Without character"]})]},t)})):(0,o.jsx)("p",{children:"Information not found"})})})}},8565:function(A,t,n){n.d(t,{Df:function(){return p},E3:function(){return k},TP:function(){return i},tx:function(){return l},zv:function(){return o}});var e=n(5861),r=n(7757),a=n.n(r),u=n(4569),c=n.n(u),s="f954d1f327dcbc2e185dbd566025454c";c().defaults.baseURL="https://api.themoviedb.org/3";var p=function(){var A=(0,e.Z)(a().mark((function A(){var t,n;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("/trending/all/day?api_key=".concat(s));case 2:return t=A.sent,A.next=5,t.data.results;case 5:return n=A.sent,A.abrupt("return",n);case 7:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),i=function(){var A=(0,e.Z)(a().mark((function A(t){var n,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("/movie/".concat(t,"?api_key=").concat(s,"&language=en-US"));case 2:return n=A.sent,A.next=5,n.data;case 5:return e=A.sent,A.abrupt("return",e);case 7:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),o=function(){var A=(0,e.Z)(a().mark((function A(t){var n,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return n=A.sent,A.next=5,n.data;case 5:return e=A.sent,A.abrupt("return",e);case 7:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),l=function(){var A=(0,e.Z)(a().mark((function A(t){var n,e;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("/movie/".concat(t,"/reviews?api_key=").concat(s));case 2:return n=A.sent,A.next=5,n.data;case 5:return e=A.sent,A.abrupt("return",e);case 7:case"end":return A.stop()}}),A)})));return function(t){return A.apply(this,arguments)}}(),k=function(){var A=(0,e.Z)(a().mark((function A(t,n){var e,r;return a().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,c().get("search/movie?api_key=".concat(s,"&page=").concat(n,"&language=en&query=").concat(t));case 2:return e=A.sent,A.next=5,e.data.results;case 5:return r=A.sent,A.abrupt("return",r);case 7:case"end":return A.stop()}}),A)})));return function(t,n){return A.apply(this,arguments)}}()},5878:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wCEAAQEBAQEBAUFBQUHBwYHBwoJCAgJCg8KCwoLCg8WDhAODhAOFhQYExITGBQjHBgYHCMpIiAiKTEsLDE+Oz5RUW0BBAQEBAQEBQUFBQcHBgcHCgkICAkKDwoLCgsKDxYOEA4OEA4WFBgTEhMYFCMcGBgcIykiICIpMSwsMT47PlFRbf/CABEIAQcBAwMBIgACEQEDEQH/xAAwAAEAAgMBAQEAAAAAAAAAAAAABQYBBAcDAggBAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAAA/TC7CkrsKSuwpK7CkrsKSuwpK7CkrsKSuwpK7CkrsKSuwpK7CkrsKSuwpK7CkrsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAERL8xLAo5m8KOOiWLjXYV9AoAAAAAAAAAAwVqq+OgzKxeBjFqt68ndbr6USUjvklZSq5OyZ0d5oAAAAAAAABjI5Po72iz9TkHfCQ51JwZm8Ub7LtRus8mAOsb2jvNAAAAAAAAAMZwco0d7RZ+rvSN8laz1inLWNyUuKffK7JWwDrG9o7zQAAAAAAAADGRyuN6lAJTFyJW7X4ZXZrs18pTVzLTFzkyW2sZUxkAAAAAAAAjPnx9T2zGaxOYjPlJ/Xx4L7Yj988vb50UlvOL319o349idAAAAAAAABjIPP0GrtAAxkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATAAAAAAAAAAAAAAAAAP/xABGEAABAgMBCwYNAgMJAAAAAAABAgMABBEFBxIVFyFSVpGV0dIGEzFBUWEQFiAjNUBUZHFzorHhIpMyQoAUJGJygYKSocH/2gAIAQEAAT8AxaXONDLA2dL8EYtLnGhlgbOl+CMWlzjQywNnS/BGLS5xoZYGzpfgjFpc40MsDZ0vwRi0ucaGWBs6X4IxaXONDLA2dL8EYtLnGhlgbOl+CMWlzjQywNnS/BGLS5xoZYGzpfgjFpc40MsDZ0vwRi0ucaGWBs6X4IxaXONDLA2dL8EYtLnGhlgbOl+CMWlzjQywNnS/BGLS5xoZYGzpfgjFpc40MsDZ0vwRi0ucaGWBs6X4IxaXONDLA2dL8EYtLnGhlgbOl+CMWlzjQywNnS/BGLS5xoZYGzpfgjFpc40MsDZ0vwRi0ucaGWBs6X4IxaXONDLA2dL8EYtLnGhlgbOl+CMWlzjQywNnS/BGLS5xoZYGzpfgjFpc40MsDZ0vwRi0ucaGWBs6X4IxaXONDLA2dL8EYtLnGhlgbOl+CMWlzjQywNnS/B/RvadsS1mXgWlS3FZQhJpk7STHjax7G5+4I8bWfY3P3BHjaz7G5+4I8bWfY3P3BElyllJt9LC21MlZokkhQJPVUeuW89ztrTHYghA/2jyQSkgjpBqIYXzrDTmegK1ivrFtW6uRWZeXSC7QFSlZQmsYdtb2o6k7ow7a3tStSd0OLW64txaiVKUSSesnwV8hu2bTYaQ0iaUEoTQCiTkEYdtb2tX/ABTuiz+UsyhxKJxQW0eldKFO8QPVbUqbSnPnKikUikWTycXMpS/NVQ2ehHQpW4QzZ8hKJqiXaSB/MRl1mFMSUwKFplwfAKi0OTDDiVLkyULzCapO6FoW0tSFpKVpNCDkIMHwdIMWeSZGUPayj7eqGLT9JTvz1/fw2BIJnpwqcFWmgCRnE9Ai17URZjAIop5dQhJ6PiYmpyZnFlT7qlk6h8BDa3GVX7ailQ60mhiw7dXMLEtNK850Nrzu498cpbPDrAnECi0UC+9J3eRZno6T+Sj7eqGLT9JTvz1/fw8lkBMg651rdNf9AI5RuKctVwHobSlI1V8Lbi2XEOINChQUPiInEpfkZlJGRTKvtXyLM9GyfyUfb1QxafpKd+ev7+Hkq+DLvy9RfIXf07lD8RyolVNTqZi9/Q6kZf8AEnwyEqudm2mEit8oX3cnrMWs+JWzpleQebKU/FWQeRZno2T+Sj7eqGLT9JTvz1/fw2bPKs+cQ/0p6FjtSemCiStaTykONLFQev8ABETXJecbWTLrS4jvN6qGuTVprVRYQgdZKgftFl2TL2Y2Qk3zisq3D3fYRyhtVM64lhlVWUGpUP5lbvIsz0dJ/JR9vVDFsMrYtSbSsUq4VjvCso8iRtGbs9d8wugPSg5Uq+IhnlZLlAD8utKuu8IUP+4c5VyQT5th1R76JEWjb05PpLeRpo9KUnp+JgeGhOQCpMSTS2JOXaWKKQ2kH4geq2lZUraYSHQUrT0OJ/iG8QeSI6pz6PzHil759H5jxS98+j8x4pe+fR+Y8UffPo/MeKPvn0fmPFH3z6PzA5Ie+fR+Y8UPfPo/MeKHvn0fmLP5Oykk4HlLLricqb4UCe8CB6mucLc/MIWfMtSyXcgy1qawLYkyQAHf1Crfmz5z/J2xhKVLCXv1ZV82E3pv7/Np2wm0pUtPOLKkczTnErSQpNejJ3wzaEu88GaOIcKFLvXEFJvU9eWGrTlXloSm/AcJDa1IISv4Ew++3LMrecqEIFVGGLRl33ebF+lRSVJv0lIWkdaaw3akq6tCU3964aNuFBCFnsBiRnVTa5lKm1J5t1SU/pIqB/7E3Nvi0GJVtS20lBWtQbv60I7egdphFqSi1oSCu8Wq9Q4UkIUewKgzzAZmHaqvWCoLyZnTDtpSzKy3RxSwhKylCCo3quvJCrSlbxlaL9znhVsISVKIHSaQbRmFy7jzahknktJqmn6CQKEdvqU3Kvuvz60NkhyR5tB7V5ckGXe5+zFhBo00sLOaSgCFMzrfO3iXQhU64pwt05zmyBQpr3wZN/8AvrhStAUqXW2X11Ky0qtCo9BMPF6cn0tKZWzfyj6Rf0rVVOpPVEvKukyjSpeZvm1JK79080m8605cvcItVlx+zpltsXylIoE9piclXZialr3+ENPoUrNv0gCObmXpWWkjLLbU2Wr9ZoEANHpSeutIkEOtOzyFtKSFzCnEqyUIVSJmXcdn2l0IR/Z3kFfYVkUjmppyRYkDLLQtBaCnDS8AbIN8D11pD7U2mXtKWRKuLL63FIWCLyiwOk1yGJRl1E++4UFKVMspB7SitREpLzUiJN5bC13rC2XEpoVJqu+BAhmXeUy+XZZaSueDoQKEhNUmp1ZfUqDwutNPNqbcQlaFChSegiGJGUllLU00AVdKiSTQdVT5AyRQRQHyKD+jTAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazujAk1ntazuj//xAAUEQEAAAAAAAAAAAAAAAAAAACA/9oACAECAQE/ABD/AP/EABwRAQABBAMAAAAAAAAAAAAAABEAEDAxYAFAUP/aAAgBAwEBPwDXGJG9mF/nPhFCp0Hbv//Z"}}]);
//# sourceMappingURL=247.d61f8c73.chunk.js.map