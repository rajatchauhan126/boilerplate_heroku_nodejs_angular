(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"8sBF":function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var r=o("IheW"),s=o("LRne"),p=o("vkgz"),n=o("JIr8"),i=o("8Y7J");let a=(()=>{class t{constructor(t){this.http=t,this.postUrl="http://localhost:3000/api",this.httpOptions={headers:new r.g({"Content-Type":"application/json"})}}createPost(t){return this.http.post(this.postUrl+"/counter",t,this.httpOptions).pipe(Object(p.a)(t=>{}),Object(n.a)(this.handleError("errorpost")))}setgamesData(t){return this.http.post(this.postUrl+"/post-games",t,this.httpOptions).pipe(Object(p.a)(t=>{}),Object(n.a)(this.handleError("errorpost")))}getgamesData(t){return this.http.post(this.postUrl+"/get-games",t,this.httpOptions).pipe(Object(p.a)(t=>{}),Object(n.a)(this.handleError("errorpost")))}postgamesCountData(t){return this.http.post(this.postUrl+"/post-games-count",t,this.httpOptions).pipe(Object(p.a)(t=>{}),Object(n.a)(this.handleError("errorpost")))}setCovidData(t){return this.http.post(this.postUrl+"/admin/post-covid",t,this.httpOptions).pipe(Object(p.a)(t=>{}),Object(n.a)(this.handleError("errorpost")))}getCovidData(t){return this.http.post(this.postUrl+"/admin/get-covid",t,this.httpOptions).pipe(Object(p.a)(t=>{}),Object(n.a)(this.handleError("errorpost")))}handleError(t="operation",e){return o=>(console.error(o),console.error(`${t} failed: ${o.message}`),Object(s.a)(e))}}return t.ngInjectableDef=i.Jb({factory:function(){return new t(i.Kb(r.c))},token:t,providedIn:"root"}),t})()},"fhD/":function(t,e,o){"use strict";o.d(e,"a",(function(){return a}));var r=o("IheW"),s=o("LRne"),p=o("vkgz"),n=o("JIr8"),i=o("8Y7J");let a=(()=>{class t{constructor(t){this.http=t,this.postUrl="http://localhost:3000/api",this.httpOptions={headers:new r.g({"Content-Type":"application/json"})}}createPost(t){let e=this.postUrl+"/post/create-post";return console.log("url",e),this.http.post(e,t,this.httpOptions).pipe(Object(p.a)(t=>console.log("new post")),Object(n.a)(this.handleError("errorpost")))}getAllPost(){return this.http.get(this.postUrl+"/post/get-all-post").pipe(Object(p.a)(t=>console.log("fetched post")),Object(n.a)(this.handleError("posts",[])))}handleError(t="operation",e){return o=>(console.error(o),console.error(`${t} failed: ${o.message}`),Object(s.a)(e))}}return t.ngInjectableDef=i.Jb({factory:function(){return new t(i.Kb(r.c))},token:t,providedIn:"root"}),t})()}}]);