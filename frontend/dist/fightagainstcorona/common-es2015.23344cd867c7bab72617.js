(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8sBF":function(t,r,e){"use strict";e.d(r,"a",(function(){return a}));var s=e("IheW"),o=e("LRne"),p=e("vkgz"),i=e("JIr8"),n=e("8Y7J");let a=(()=>{class t{constructor(t){this.http=t,this.postUrl="api",this.httpOptions={headers:new s.g({"Content-Type":"application/json"})}}createPost(t){return this.http.post(this.postUrl+"/counter",t,this.httpOptions).pipe(Object(p.a)(t=>{}),Object(i.a)(this.handleError("errorpost")))}setgamesData(t){return this.http.post(this.postUrl+"/post-games",t,this.httpOptions).pipe(Object(p.a)(t=>{}),Object(i.a)(this.handleError("errorpost")))}getgamesData(t){return this.http.post(this.postUrl+"/get-games",t,this.httpOptions).pipe(Object(p.a)(t=>{}),Object(i.a)(this.handleError("errorpost")))}postgamesCountData(t){return this.http.post(this.postUrl+"/post-games-count",t,this.httpOptions).pipe(Object(p.a)(t=>{}),Object(i.a)(this.handleError("errorpost")))}setCovidData(t){return this.http.post(this.postUrl+"/admin/post-covid",t,this.httpOptions).pipe(Object(p.a)(t=>{}),Object(i.a)(this.handleError("errorpost")))}getCovidData(t){return this.http.post(this.postUrl+"/admin/get-covid",t,this.httpOptions).pipe(Object(p.a)(t=>{}),Object(i.a)(this.handleError("errorpost")))}handleError(t="operation",r){return e=>(console.error(e),console.error(`${t} failed: ${e.message}`),Object(o.a)(r))}}return t.ngInjectableDef=n.Jb({factory:function(){return new t(n.Kb(s.c))},token:t,providedIn:"root"}),t})()}}]);