(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"CVn+":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{constructor(){}ngOnInit(){}}class a{constructor(l){this.counterService=l}ngOnInit(){this.getGamesData(),this.callAfterTimeout()}callAfterTimeout(){setTimeout(()=>{this.getGamesData()},1e3)}getGamesData(){this.counterService.getgamesData({}).subscribe(l=>{this.games=0===Object.keys(l.games).length?[]:l.games})}updateCount(){this.counterService.postgamesCountData(this.games).subscribe(l=>{this.games=l.games})}increaseCount(l){this.games[l].count=this.games[l].count+1,this.updateCount()}}class s{}var i=u("pMnS"),c=t.nb({encapsulation:0,styles:[[""]],data:{}});function o(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["shared works!"]))],null,null)}function r(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-shared",[],null,null,null,o,c)),t.ob(1,114688,null,0,e,[],null,null)],(function(l,n){l(n,1,0)}),null)}var b=t.lb("app-shared",e,r,{},{},[]),p=u("SVse"),m=u("8sBF"),g=t.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,6,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"span",[["style","padding-right:6px; color: #495057;"]],null,null,null,null,null)),(l()(),t.Eb(2,null,["","."])),(l()(),t.pb(3,0,null,null,1,"a",[["class","text-muted medium mb-4 mb-lg-0 badge_1"],["target","_blank"]],[[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.increaseCount(l.context.index)&&t),t}),null,null)),(l()(),t.Eb(4,null,["",""])),(l()(),t.pb(5,0,null,null,1,"span",[["class","medium badge badge-primary badge-pill"],["style","float: right;margin-top: 3px;"]],null,null,null,null,null)),(l()(),t.Eb(6,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.index+1),l(n,3,0,t.tb(1,"",n.context.$implicit.link,"")),l(n,4,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.count)}))}function h(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,2,"ol",[["class","list-group list-group-flush"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,d)),t.ob(2,278528,null,0,p.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.games)}),null)}function f(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,8,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,6,"div",[["class","col-sm-12"],["style","margin-top: 10px;"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"div",[["class","card-header heading_1"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Game "])),(l()(),t.pb(6,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,h)),t.ob(8,16384,null,0,p.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.Eb(-1,null,[">"]))],(function(l,n){l(n,8,0,n.component.games)}),null)}function v(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-games",[],null,null,null,f,g)),t.ob(1,114688,null,0,a,[m.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=t.lb("app-games",a,v,{},{},[]),k=u("iInd");u.d(n,"SharedModuleNgFactory",(function(){return y}));var y=t.mb(s,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[i.a,b,x]],[3,t.j],t.v]),t.zb(4608,p.k,p.j,[t.s,[2,p.q]]),t.zb(1073742336,p.b,p.b,[]),t.zb(1073742336,k.m,k.m,[[2,k.r],[2,k.k]]),t.zb(1073742336,s,s,[]),t.zb(1024,k.i,(function(){return[[{path:"",component:e},{path:"games",component:a}]]}),[])])}))}}]);