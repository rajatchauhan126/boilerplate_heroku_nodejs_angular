(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{L6id:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{constructor(l){this.counterService=l,this.covid={last_updated:"",bangalore_total_cases:"",bangalore_total_recoverd:"",bangalore_total_death:"",india_total_cases:"",india_total_recoverd:"",india_total_death:"",world_total_cases:"",world_total_recoverd:"",world_total_death:""}}ngOnInit(){this.getCovidData(),this.getGamesData(),this.callAfterTimeout()}callAfterTimeout(){setTimeout(()=>{this.getCovidData(),this.getGamesData()},1e3)}getGamesData(){this.counterService.getgamesData({}).subscribe(l=>{this.games=0===Object.keys(l.games).length?[]:l.games})}getCovidData(){this.counterService.getCovidData({}).subscribe(l=>{this.covid=l.covid})}updateCount(){this.counterService.postgamesCountData(this.games).subscribe(l=>{this.games=l.games})}increaseCount(l){this.games[l].count=this.games[l].count+1,this.updateCount()}}class a{}var s=u("pMnS"),o=u("SVse"),i=u("iInd");class c{constructor(l,n){this.formBuilder=l,this.postService=n,this.createComment=this.formBuilder.group({postId:"",comment:""})}ngOnInit(){this.getAllPost(),this.callAfterTimeout()}callAfterTimeout(){setTimeout(()=>{this.getAllPost()},200)}getAllPost(){this.postService.getAllPost().subscribe(l=>{if(null===l)this.posts=[];else{let n=[];l.length>2&&n.push(l[l.length-3]),l.length>1&&n.push(l[l.length-2]),n.push(l[l.length-1]),this.posts=n}})}onSubmit(l){console.log(l),this.postService.createPost(l).subscribe(l=>this.posts=l),this.createComment.reset(),console.warn("Your order has been submitted",this.createComment)}}var r=u("s7LF"),b=u("fhD/"),p=t.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,9,"div",[["class","card text-center"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,8,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,7,"div",[["class","tab-content"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,6,"div",[["class","container tab-pane active text-muted medium mb-4 mb-lg-0"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,1,"strong",[["style","float: left;"]],null,null,null,null,null)),(l()(),t.Eb(7,null,["",""])),(l()(),t.pb(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,1,"p",[["style","text-align: left;"]],null,null,null,null,null)),(l()(),t.Eb(10,null,[" ",""]))],null,(function(l,n){l(n,7,0,n.context.$implicit.title),l(n,10,0,n.context.$implicit.optionaltext)}))}function m(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,d)),t.ob(2,278528,null,0,o.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(3,0,null,null,3,"button",[["class","btn btn-secondary btn-lg btn-block"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,4).onClick()&&e),e}),null,null)),t.ob(4,16384,null,0,i.l,[i.k,i.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Bb(5,1),(l()(),t.Eb(-1,null,[" Load more"]))],(function(l,n){l(n,2,0,n.component.posts.reverse());var u=l(n,5,0,"/shared/posts");l(n,4,0,u)}),null)}function g(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,9,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,6,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,5,"div",[["class","card-header"],["style","color:#495057"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Latest posts "])),(l()(),t.pb(5,0,null,null,3,"a",[["class","btn btn-primary btn-sm"],["style","float:right; min-width: 100px; margin-right: 10px;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,6).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(6,671744,null,0,i.m,[i.k,i.a,o.g],{routerLink:[0,"routerLink"]},null),t.Bb(7,1),(l()(),t.Eb(-1,null,["Create new post"])),(l()(),t.eb(16777216,null,null,1,null,m)),t.ob(10,16384,null,0,o.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component,t=l(n,7,0,"/shared/create-post");l(n,6,0,t),l(n,10,0,u.posts)}),(function(l,n){l(n,5,0,t.Ab(n,6).target,t.Ab(n,6).href)}))}class v{constructor(l){this.counterService=l}ngOnInit(){this.onSubmit()}onSubmit(){if(void 0===(l=parseInt(this.getCounter())))var l=1;this.counterService.createPost({count:l=l}).subscribe(l=>{this.local=l,this.setCounter(l)})}setCounter(l){localStorage.setItem("count",l.count)}getCounter(){return localStorage.getItem("count")}}var h=u("8sBF"),f=t.nb({encapsulation:0,styles:[[""]],data:{}});function _(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,3,"div",[["class","text-muted medium mb-4 mb-lg-0"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Visitor Count"])),(l()(),t.Eb(3,null,[" : "," "]))],null,(function(l,n){l(n,3,0,n.component.local.count)}))}function y(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,23,"footer",[["class","footer bg-light"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,22,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,0,"div",[["class","row"],["style","height: 14px;"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,19,"div",[["class","col-sm-12"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,18,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,1,"div",[["class","card-header heading_1"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Contact "])),(l()(),t.pb(8,0,null,null,15,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,14,"ul",[["class","list-group list-group-flush"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,4,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,3,"p",[["class","text-muted medium mb-4 mb-lg-0"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" You can email us data/content you want to share on our website on below email address. "])),(l()(),t.pb(13,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["fightac19@gmail.com"])),(l()(),t.pb(15,0,null,null,5,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,4,"a",[["class","text-muted medium mb-4 mb-lg-0"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,17).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(17,671744,null,0,i.m,[i.k,i.a,o.g],{routerLink:[0,"routerLink"]},null),t.Bb(18,1),(l()(),t.pb(19,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Disclaimer"])),(l()(),t.pb(21,0,null,null,2,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,_)),t.ob(23,16384,null,0,o.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component,t=l(n,18,0,"/disclaimer");l(n,17,0,t),l(n,23,0,u.local)}),(function(l,n){l(n,16,0,t.Ab(n,17).target,t.Ab(n,17).href)}))}var x=t.nb({encapsulation:0,styles:[[""]],data:{}});function w(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"div",[["class","card-body textAlignCenter text-muted medium mb-4 mb-lg-0"]],null,null,null,null,null)),(l()(),t.Eb(1,null,[" Last updated: "," "]))],null,(function(l,n){l(n,1,0,n.component.covid.last_updated)}))}function E(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,30,"div",[["class","tab-content"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,9,"div",[["class","container tab-pane active text-muted medium mb-4 mb-lg-0"],["id","bangalore"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,1,"h3",[["class","heading_2"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["COVID-19 cases in Bangalore"])),(l()(),t.pb(5,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(6,null,["Total cases : ",""])),(l()(),t.pb(7,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(8,null,["Total recoverd : ",""])),(l()(),t.pb(9,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(10,null,["Total death : ",""])),(l()(),t.pb(11,0,null,null,9,"div",[["class","container tab-pane fade text-muted medium mb-4 mb-lg-0"],["id","india"]],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(13,0,null,null,1,"h3",[["class","heading_2"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["COVID-19 cases in India"])),(l()(),t.pb(15,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(16,null,["Total cases : ",""])),(l()(),t.pb(17,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(18,null,["Total recoverd : ",""])),(l()(),t.pb(19,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(20,null,["Total death : ",""])),(l()(),t.pb(21,0,null,null,9,"div",[["class","container tab-pane fade text-muted medium mb-4 mb-lg-0"],["id","world"]],null,null,null,null,null)),(l()(),t.pb(22,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,1,"h3",[["class","heading_2"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["COVID-19 cases in the World"])),(l()(),t.pb(25,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(26,null,["Total cases : ",""])),(l()(),t.pb(27,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(28,null,["Total recoverd : ",""])),(l()(),t.pb(29,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(30,null,["Total death : ",""]))],null,(function(l,n){var u=n.component;l(n,6,0,u.covid.bangalore_total_cases),l(n,8,0,u.covid.bangalore_total_recoverd),l(n,10,0,u.covid.bangalore_total_death),l(n,16,0,u.covid.india_total_cases),l(n,18,0,u.covid.india_total_recoverd),l(n,20,0,u.covid.india_total_death),l(n,26,0,u.covid.world_total_cases),l(n,28,0,u.covid.world_total_recoverd),l(n,30,0,u.covid.world_total_death)}))}function k(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,6,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"span",[["style","padding-right:6px; color: #495057;"]],null,null,null,null,null)),(l()(),t.Eb(2,null,["","."])),(l()(),t.pb(3,0,null,null,1,"a",[["class","text-muted medium mb-4 mb-lg-0 badge_1"],["target","_blank"]],[[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.increaseCount(l.context.index)&&t),t}),null,null)),(l()(),t.Eb(4,null,["",""])),(l()(),t.pb(5,0,null,null,1,"span",[["class","medium badge badge-primary badge-pill"],["style","float: right;margin-top: 3px;"]],null,null,null,null,null)),(l()(),t.Eb(6,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.index+1),l(n,3,0,t.tb(1,"",n.context.$implicit.link,"")),l(n,4,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.count)}))}function C(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,2,"ol",[["class","list-group list-group-flush"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,k)),t.ob(2,278528,null,0,o.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.games)}),null)}function I(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,59,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"div",[["class","row"],["style","height: 14px;"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,5,"div",[["class","col-sm-12"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,4,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,1,"div",[["class","card-header textAlignCenter"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" COVID-19 CORONAVIRUS PANDEMIC "])),(l()(),t.eb(16777216,null,null,1,null,w)),t.ob(8,16384,null,0,o.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(9,0,null,null,23,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,null,4,"div",[["class","col-sm-4"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.pb(11,0,null,null,3,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.pb(13,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t.pb(14,0,null,null,0,"img",[["alt","logo"],["src","assets/img/fightagainstcorona_logo.png"],["style","width: 100%;"]],null,null,null,null,null)),(l()(),t.pb(15,0,null,null,14,"div",[["class","col-sm-4"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,13,"div",[["class","card text-center"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,12,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.pb(18,0,null,null,9,"ul",[["class","nav nav-tabs"],["role","tablist"]],null,null,null,null,null)),(l()(),t.pb(19,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(20,0,null,null,1,"a",[["class","nav-link active"],["data-toggle","tab"],["href","#bangalore"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Bangalore"])),(l()(),t.pb(22,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(23,0,null,null,1,"a",[["class","nav-link"],["data-toggle","tab"],["href","#india"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["India"])),(l()(),t.pb(25,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(26,0,null,null,1,"a",[["class","nav-link"],["data-toggle","tab"],["href","#world"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,["World"])),(l()(),t.eb(16777216,null,null,1,null,E)),t.ob(29,16384,null,0,o.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(30,0,null,null,2,"div",[["class","col-sm-4"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.pb(31,0,null,null,1,"app-post",[],null,null,null,g,p)),t.ob(32,114688,null,0,c,[r.d,b.a],null,null),(l()(),t.pb(33,0,null,null,1,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(34,0,null,null,0,"div",[["class","col-sm-12"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.pb(35,0,null,null,23,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(36,0,null,null,6,"div",[["class","col-sm-4"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.pb(37,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(38,0,null,null,1,"div",[["class","card-header heading_1"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Game "])),(l()(),t.pb(40,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,C)),t.ob(42,16384,null,0,o.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.pb(43,0,null,null,14,"div",[["class","col-sm-4"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.pb(44,0,null,null,13,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(45,0,null,null,1,"div",[["class","card-header heading_1"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Trending # "])),(l()(),t.pb(47,0,null,null,10,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.pb(48,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t.pb(49,0,null,null,0,"img",[["alt","logo"],["src","assets/img/covid-1.PNG"],["style","width: 100%;"]],null,null,null,null,null)),(l()(),t.pb(50,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t.pb(51,0,null,null,0,"img",[["alt","logo"],["src","assets/img/Ramayan.PNG"],["style","margin-top:5px; width: 100%;"]],null,null,null,null,null)),(l()(),t.pb(52,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t.pb(53,0,null,null,0,"img",[["alt","logo"],["src","assets/img/covid-19.PNG"],["style","margin-top:5px; width: 100%;"]],null,null,null,null,null)),(l()(),t.pb(54,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t.pb(55,0,null,null,0,"img",[["alt","logo"],["src","assets/img/crona4.jpeg"],["style","margin-top:5px; width: 100%;"]],null,null,null,null,null)),(l()(),t.pb(56,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t.pb(57,0,null,null,0,"img",[["alt","logo"],["src","assets/img/don'topenit.PNG"],["style","margin-top:5px; width: 100%;"]],null,null,null,null,null)),(l()(),t.pb(58,0,null,null,0,"div",[["class","col-sm-4"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.pb(59,0,null,null,0,"div",[["class","row"],["style","height: 14px;"]],null,null,null,null,null)),(l()(),t.pb(60,0,null,null,1,"app-footer",[],null,null,null,y,f)),t.ob(61,114688,null,0,v,[h.a],null,null)],(function(l,n){var u=n.component;l(n,8,0,u.covid),l(n,29,0,u.covid),l(n,32,0),l(n,42,0,u.games),l(n,61,0)}),null)}function A(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-home",[],null,null,null,I,x)),t.ob(1,114688,null,0,e,[h.a],null,null)],(function(l,n){l(n,1,0)}),null)}var F=t.lb("app-home",e,A,{},{},[]);u.d(n,"HomeModuleNgFactory",(function(){return S}));var S=t.mb(a,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[s.a,F]],[3,t.j],t.v]),t.zb(4608,r.p,r.p,[]),t.zb(4608,o.k,o.j,[t.s,[2,o.q]]),t.zb(4608,r.d,r.d,[]),t.zb(1073742336,r.o,r.o,[]),t.zb(1073742336,r.g,r.g,[]),t.zb(1073742336,o.b,o.b,[]),t.zb(1073742336,r.m,r.m,[]),t.zb(1073742336,i.n,i.n,[[2,i.s],[2,i.k]]),t.zb(1073742336,a,a,[]),t.zb(1024,i.i,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);