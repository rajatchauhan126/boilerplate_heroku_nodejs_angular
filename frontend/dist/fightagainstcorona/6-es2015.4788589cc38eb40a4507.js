(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{L6id:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class a{constructor(l){this.counterService=l,this.games=[{name:"Want to draw",link:"https://quickdraw.withgoogle.com/",count:10},{name:"Tic tac toe",link:"https://playtictactoe.org/",count:5},{name:"Snake Game",link:"https://playsnake.org/",count:3},{name:"Your birthday special",link:"https://dmarie.com/timecap/",count:7}]}ngOnInit(){this.onLoad()}increaseCount(l){this.games[l].count=this.games[l].count+1,this.onSubmit()}onLoad(){var l=localStorage.getItem("games");this.games=null!==l?JSON.parse(l):this.games,this.counterService.gamesData(this.games).subscribe(l=>{this.games=l.games,this.setCounter(this.games)})}onSubmit(){this.counterService.gamesData(this.games).subscribe(l=>{this.games=l.games,this.setCounter(this.games)})}setCounter(l){localStorage.setItem("games",JSON.stringify(l))}}class s{}var e=u("pMnS"),i=u("SVse"),o=u("iInd");class c{constructor(l){this.counterService=l}ngOnInit(){this.onSubmit()}onSubmit(){if(void 0===(l=parseInt(this.getCounter())))var l=1;this.counterService.createPost({count:l=l}).subscribe(l=>{this.local=l,this.setCounter(l)})}setCounter(l){localStorage.setItem("count",l.count)}getCounter(){return localStorage.getItem("count")}}var b=u("8sBF"),r=t.lb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Cb(0,[(l()(),t.nb(0,0,null,null,3,"div",[["class","text-muted medium mb-4 mb-lg-0"]],null,null,null,null,null)),(l()(),t.nb(1,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" Visitor Count"])),(l()(),t.Bb(3,null,[" : "," "]))],null,(function(l,n){l(n,3,0,n.component.local.count)}))}function m(l){return t.Cb(0,[(l()(),t.nb(0,0,null,null,23,"footer",[["class","footer bg-light"]],null,null,null,null,null)),(l()(),t.nb(1,0,null,null,22,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.nb(2,0,null,null,0,"div",[["class","row"],["style","height: 14px;"]],null,null,null,null,null)),(l()(),t.nb(3,0,null,null,20,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.nb(4,0,null,null,19,"div",[["class","col-sm-12"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.nb(5,0,null,null,18,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.nb(6,0,null,null,1,"div",[["class","card-header heading_1"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" Contact "])),(l()(),t.nb(8,0,null,null,15,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.nb(9,0,null,null,14,"ul",[["class","list-group list-group-flush"]],null,null,null,null,null)),(l()(),t.nb(10,0,null,null,4,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.nb(11,0,null,null,3,"p",[["class","text-muted medium mb-4 mb-lg-0"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" You can email us data/content you want to share on our website on below email address. "])),(l()(),t.nb(13,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["fightac19@gmail.com"])),(l()(),t.nb(15,0,null,null,5,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.nb(16,0,null,null,4,"a",[["class","text-muted medium mb-4 mb-lg-0"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==t.yb(l,17).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&a),a}),null,null)),t.mb(17,671744,null,0,o.l,[o.k,o.a,i.g],{routerLink:[0,"routerLink"]},null),t.zb(18,1),(l()(),t.nb(19,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Disclaimer"])),(l()(),t.nb(21,0,null,null,2,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.cb(16777216,null,null,1,null,d)),t.mb(23,16384,null,0,i.i,[t.K,t.H],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component,t=l(n,18,0,"/disclaimer");l(n,17,0,t),l(n,23,0,u.local)}),(function(l,n){l(n,16,0,t.yb(n,17).target,t.yb(n,17).href)}))}var g=t.lb({encapsulation:0,styles:[[""]],data:{}});function p(l){return t.Cb(0,[(l()(),t.nb(0,0,null,null,6,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.nb(1,0,null,null,1,"span",[["style","padding-right:6px; color: #495057;"]],null,null,null,null,null)),(l()(),t.Bb(2,null,["","."])),(l()(),t.nb(3,0,null,null,1,"a",[["class","text-muted medium mb-4 mb-lg-0 badge_1"],["target","_blank"]],[[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.increaseCount(l.context.index)&&t),t}),null,null)),(l()(),t.Bb(4,null,["",""])),(l()(),t.nb(5,0,null,null,1,"span",[["class","medium badge badge-primary badge-pill"],["style","float: right;margin-top: 3px;"]],null,null,null,null,null)),(l()(),t.Bb(6,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.index+1),l(n,3,0,t.rb(1,"",n.context.$implicit.link,"")),l(n,4,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.count)}))}function h(l){return t.Cb(0,[(l()(),t.nb(0,0,null,null,2,"ol",[["class","list-group list-group-flush"]],null,null,null,null,null)),(l()(),t.cb(16777216,null,null,1,null,p)),t.mb(2,278528,null,0,i.h,[t.K,t.H,t.p],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.games)}),null)}function v(l){return t.Cb(0,[(l()(),t.nb(0,0,null,null,84,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.nb(1,0,null,null,0,"div",[["class","row"],["style","height: 14px;"]],null,null,null,null,null)),(l()(),t.nb(2,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.nb(3,0,null,null,5,"div",[["class","col-sm-12"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.nb(4,0,null,null,4,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.nb(5,0,null,null,1,"div",[["class","card-header textAlignCenter"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" COVID-19 CORONAVIRUS PANDEMIC "])),(l()(),t.nb(7,0,null,null,1,"div",[["class","card-body textAlignCenter text-muted medium mb-4 mb-lg-0"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" Last updated: March 29, 2020, 07:35 PM "])),(l()(),t.nb(9,0,null,null,56,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.nb(10,0,null,null,4,"div",[["class","col-sm-4"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.nb(11,0,null,null,3,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.nb(12,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.nb(13,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t.nb(14,0,null,null,0,"img",[["alt","logo"],["src","assets/img/fightagainstcorona_logo.png"],["style","width: 100%;"]],null,null,null,null,null)),(l()(),t.nb(15,0,null,null,43,"div",[["class","col-sm-4"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.nb(16,0,null,null,42,"div",[["class","card text-center"]],null,null,null,null,null)),(l()(),t.nb(17,0,null,null,41,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.nb(18,0,null,null,9,"ul",[["class","nav nav-tabs"],["role","tablist"]],null,null,null,null,null)),(l()(),t.nb(19,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.nb(20,0,null,null,1,"a",[["class","nav-link active"],["data-toggle","tab"],["href","#bangalore"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Bangalore"])),(l()(),t.nb(22,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.nb(23,0,null,null,1,"a",[["class","nav-link"],["data-toggle","tab"],["href","#india"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["India"])),(l()(),t.nb(25,0,null,null,2,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.nb(26,0,null,null,1,"a",[["class","nav-link"],["data-toggle","tab"],["href","#world"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["World"])),(l()(),t.nb(28,0,null,null,30,"div",[["class","tab-content"]],null,null,null,null,null)),(l()(),t.nb(29,0,null,null,9,"div",[["class","container tab-pane active text-muted medium mb-4 mb-lg-0"],["id","bangalore"]],null,null,null,null,null)),(l()(),t.nb(30,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.nb(31,0,null,null,1,"h3",[["class","heading_2"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["COVID-19 cases in Bangalore"])),(l()(),t.nb(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Total cases : 39"])),(l()(),t.nb(35,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Total recoverd : 5"])),(l()(),t.nb(37,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Total death : 0"])),(l()(),t.nb(39,0,null,null,9,"div",[["class","container tab-pane fade text-muted medium mb-4 mb-lg-0"],["id","india"]],null,null,null,null,null)),(l()(),t.nb(40,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.nb(41,0,null,null,1,"h3",[["class","heading_2"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["COVID-19 cases in India"])),(l()(),t.nb(43,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Total cases : 1085"])),(l()(),t.nb(45,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Total recoverd : 90"])),(l()(),t.nb(47,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Total death : 26"])),(l()(),t.nb(49,0,null,null,9,"div",[["class","container tab-pane fade text-muted medium mb-4 mb-lg-0"],["id","world"]],null,null,null,null,null)),(l()(),t.nb(50,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.nb(51,0,null,null,1,"h3",[["class","heading_2"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,["COVID-19 cases in the World"])),(l()(),t.nb(53,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Total cases : 683,694"])),(l()(),t.nb(55,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Total recoverd : 146,396"])),(l()(),t.nb(57,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Bb(-1,null,["Total death : 32,155"])),(l()(),t.nb(59,0,null,null,6,"div",[["class","col-sm-4"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.nb(60,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.nb(61,0,null,null,1,"div",[["class","card-header heading_1"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" Game "])),(l()(),t.nb(63,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.cb(16777216,null,null,1,null,h)),t.mb(65,16384,null,0,i.i,[t.K,t.H],{ngIf:[0,"ngIf"]},null),(l()(),t.nb(66,0,null,null,17,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.nb(67,0,null,null,14,"div",[["class","col-sm-4"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.nb(68,0,null,null,13,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.nb(69,0,null,null,1,"div",[["class","card-header heading_1"]],null,null,null,null,null)),(l()(),t.Bb(-1,null,[" Trending # "])),(l()(),t.nb(71,0,null,null,10,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.nb(72,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t.nb(73,0,null,null,0,"img",[["alt","logo"],["src","assets/img/covid-1.PNG"],["style","width: 100%;"]],null,null,null,null,null)),(l()(),t.nb(74,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t.nb(75,0,null,null,0,"img",[["alt","logo"],["src","assets/img/Ramayan.PNG"],["style","margin-top:5px; width: 100%;"]],null,null,null,null,null)),(l()(),t.nb(76,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t.nb(77,0,null,null,0,"img",[["alt","logo"],["src","assets/img/covid-19.PNG"],["style","margin-top:5px; width: 100%;"]],null,null,null,null,null)),(l()(),t.nb(78,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t.nb(79,0,null,null,0,"img",[["alt","logo"],["src","assets/img/crona4.jpeg"],["style","margin-top:5px; width: 100%;"]],null,null,null,null,null)),(l()(),t.nb(80,0,null,null,1,"a",[],null,null,null,null,null)),(l()(),t.nb(81,0,null,null,0,"img",[["alt","logo"],["src","assets/img/don'topenit.PNG"],["style","margin-top:5px; width: 100%;"]],null,null,null,null,null)),(l()(),t.nb(82,0,null,null,0,"div",[["class","col-sm-4"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.nb(83,0,null,null,0,"div",[["class","col-sm-4"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.nb(84,0,null,null,0,"div",[["class","row"],["style","height: 14px;"]],null,null,null,null,null)),(l()(),t.nb(85,0,null,null,1,"app-footer",[],null,null,null,m,r)),t.mb(86,114688,null,0,c,[b.a],null,null)],(function(l,n){l(n,65,0,n.component.games),l(n,86,0)}),null)}function f(l){return t.Cb(0,[(l()(),t.nb(0,0,null,null,1,"app-home",[],null,null,null,v,g)),t.mb(1,114688,null,0,a,[b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=t.jb("app-home",a,f,{},{},[]),y=u("s7LF");u.d(n,"HomeModuleNgFactory",(function(){return B}));var B=t.kb(s,[],(function(l){return t.wb([t.xb(512,t.j,t.V,[[8,[e.a,x]],[3,t.j],t.u]),t.xb(4608,y.e,y.e,[]),t.xb(4608,i.k,i.j,[t.r,[2,i.q]]),t.xb(1073742336,y.d,y.d,[]),t.xb(1073742336,y.b,y.b,[]),t.xb(1073742336,i.b,i.b,[]),t.xb(1073742336,o.m,o.m,[[2,o.r],[2,o.k]]),t.xb(1073742336,s,s,[]),t.xb(1024,o.i,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);