(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"CVn+":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{constructor(){}ngOnInit(){}}class e{constructor(l){this.counterService=l}ngOnInit(){this.getGamesData(),this.callAfterTimeout()}callAfterTimeout(){setTimeout(()=>{this.getGamesData()},1e3)}getGamesData(){this.counterService.getgamesData({}).subscribe(l=>{this.games=0===Object.keys(l.games).length?[]:l.games})}updateCount(){this.counterService.postgamesCountData(this.games).subscribe(l=>{this.games=l.games})}increaseCount(l){this.games[l].count=this.games[l].count+1,this.updateCount()}}class s{constructor(l,n){this.formBuilder=l,this.postService=n,this.createPost=this.formBuilder.group({community:"",title:"",optionaltext:""})}ngOnInit(){}onSubmit(l){l.userId="Edgymnerch",l.image="temp",this.postService.createPost(l).subscribe(l=>this.posts=l),this.createPost.reset(),console.warn("Your order has been submitted",l)}}class i{}var a=u("pMnS"),r=t.nb({encapsulation:0,styles:[[""]],data:{}});function b(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["shared works!"]))],null,null)}var c=t.lb("app-shared",o,(function(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-shared",[],null,null,null,b,r)),t.ob(1,114688,null,0,o,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),p=u("SVse"),g=u("8sBF"),d=t.nb({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,6,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"span",[["style","padding-right:6px; color: #495057;"]],null,null,null,null,null)),(l()(),t.Eb(2,null,["","."])),(l()(),t.pb(3,0,null,null,1,"a",[["class","text-muted medium mb-4 mb-lg-0 badge_1"],["target","_blank"]],[[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.increaseCount(l.context.index)&&t),t}),null,null)),(l()(),t.Eb(4,null,["",""])),(l()(),t.pb(5,0,null,null,1,"span",[["class","medium badge badge-primary badge-pill"],["style","float: right;margin-top: 3px;"]],null,null,null,null,null)),(l()(),t.Eb(6,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.index+1),l(n,3,0,t.tb(1,"",n.context.$implicit.link,"")),l(n,4,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.count)}))}function h(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,2,"ol",[["class","list-group list-group-flush"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,m)),t.ob(2,278528,null,0,p.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.games)}),null)}function f(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,8,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,6,"div",[["class","col-sm-12"],["style","margin-top: 10px;"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"div",[["class","card-header heading_1"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Game "])),(l()(),t.pb(6,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,h)),t.ob(8,16384,null,0,p.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.Eb(-1,null,[">"]))],(function(l,n){l(n,8,0,n.component.games)}),null)}var v=t.lb("app-games",e,(function(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-games",[],null,null,null,f,d)),t.ob(1,114688,null,0,e,[g.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),C=u("s7LF"),A=u("IheW"),y=u("LRne"),k=u("vkgz"),x=u("JIr8");let E=(()=>{class l{constructor(l){this.http=l,this.postUrl="http://localhost:3000/api",this.httpOptions={headers:new A.g({"Content-Type":"application/json"})}}createPost(l){let n=this.postUrl+"/create-post";return console.log("url",n),this.http.post(n,l,this.httpOptions).pipe(Object(k.a)(l=>console.log("new post")),Object(x.a)(this.handleError("errorpost")))}getAllPost(){return this.http.get(this.postUrl+"/get-all-post").pipe(Object(k.a)(l=>console.log("fetched post")),Object(x.a)(this.handleError("posts",[])))}handleError(l="operation",n){return u=>(console.error(u),console.error("".concat(l," failed: ").concat(u.message)),Object(y.a)(n))}}return l.ngInjectableDef=t.Jb({factory:function(){return new l(t.Kb(A.c))},token:l,providedIn:"root"}),l})();var B=t.nb({encapsulation:0,styles:[[""]],data:{}});function S(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,62,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"div",[["class","row"],["style","height: 14px;"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,60,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,0,"div",[["class","col-sm-2"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,57,"div",[["class","col-sm-8"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,56,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,55,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,2,"h5",[["class","card-title"],["style","\n                    color: rgb(59, 47, 47);\n                    font-size: 18px;\n                    font-weight: 500;\n                    line-height: 22px;\n                     "]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Create a post"])),(l()(),t.pb(10,0,null,null,51,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,e=l.component;return"submit"===n&&(o=!1!==t.Ab(l,12).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.Ab(l,12).onReset()&&o),"ngSubmit"===n&&(o=!1!==e.onSubmit(e.createPost.value)&&o),o}),null,null)),t.ob(11,16384,null,0,C.s,[],null,null),t.ob(12,540672,null,0,C.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Cb(2048,null,C.b,null,[C.f]),t.ob(14,16384,null,0,C.k,[[4,C.b]],null,null),(l()(),t.pb(15,0,null,null,30,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,29,"select",[["class","form-control"],["formControlName","community"],["id","community"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],(function(l,n,u){var o=!0;return"change"===n&&(o=!1!==t.Ab(l,17).onChange(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,17).onTouched()&&o),o}),null,null)),t.ob(17,16384,null,0,C.n,[t.B,t.k],null,null),t.Cb(1024,null,C.h,(function(l){return[l]}),[C.n]),t.ob(19,671744,null,0,C.e,[[3,C.b],[8,null],[8,null],[6,C.h],[2,C.q]],{name:[0,"name"]},null),t.Cb(2048,null,C.i,null,[C.e]),t.ob(21,16384,null,0,C.j,[[4,C.i]],null,null),(l()(),t.pb(22,0,null,null,3,"option",[["selected",""]],null,null,null,null,null)),t.ob(23,147456,null,0,C.l,[t.k,t.B,[2,C.n]],null,null),t.ob(24,147456,null,0,C.r,[t.k,t.B,[8,null]],null,null),(l()(),t.Eb(-1,null,["Choose a community"])),(l()(),t.pb(26,0,null,null,3,"option",[],null,null,null,null,null)),t.ob(27,147456,null,0,C.l,[t.k,t.B,[2,C.n]],null,null),t.ob(28,147456,null,0,C.r,[t.k,t.B,[8,null]],null,null),(l()(),t.Eb(-1,null,["Music and dance"])),(l()(),t.pb(30,0,null,null,3,"option",[],null,null,null,null,null)),t.ob(31,147456,null,0,C.l,[t.k,t.B,[2,C.n]],null,null),t.ob(32,147456,null,0,C.r,[t.k,t.B,[8,null]],null,null),(l()(),t.Eb(-1,null,["Art and craft"])),(l()(),t.pb(34,0,null,null,3,"option",[],null,null,null,null,null)),t.ob(35,147456,null,0,C.l,[t.k,t.B,[2,C.n]],null,null),t.ob(36,147456,null,0,C.r,[t.k,t.B,[8,null]],null,null),(l()(),t.Eb(-1,null,["Education and training"])),(l()(),t.pb(38,0,null,null,3,"option",[],null,null,null,null,null)),t.ob(39,147456,null,0,C.l,[t.k,t.B,[2,C.n]],null,null),t.ob(40,147456,null,0,C.r,[t.k,t.B,[8,null]],null,null),(l()(),t.Eb(-1,null,["Politics and religion"])),(l()(),t.pb(42,0,null,null,3,"option",[],null,null,null,null,null)),t.ob(43,147456,null,0,C.l,[t.k,t.B,[2,C.n]],null,null),t.ob(44,147456,null,0,C.r,[t.k,t.B,[8,null]],null,null),(l()(),t.Eb(-1,null,["Space and gravity"])),(l()(),t.pb(46,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(47,0,null,null,5,"input",[["class","form-control"],["formControlName","title"],["id","title"],["placeholder","Title"],["type","title"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,48)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,48).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,48)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,48)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(48,16384,null,0,C.c,[t.B,t.k,[2,C.a]],null,null),t.Cb(1024,null,C.h,(function(l){return[l]}),[C.c]),t.ob(50,671744,null,0,C.e,[[3,C.b],[8,null],[8,null],[6,C.h],[2,C.q]],{name:[0,"name"]},null),t.Cb(2048,null,C.i,null,[C.e]),t.ob(52,16384,null,0,C.j,[[4,C.i]],null,null),(l()(),t.pb(53,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(54,0,null,null,5,"textarea",[["class","form-control"],["formControlName","optionaltext"],["id","optionaltext"],["placeholder","Text (Optional)"],["rows","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,55)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,55).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,55)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,55)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(55,16384,null,0,C.c,[t.B,t.k,[2,C.a]],null,null),t.Cb(1024,null,C.h,(function(l){return[l]}),[C.c]),t.ob(57,671744,null,0,C.e,[[3,C.b],[8,null],[8,null],[6,C.h],[2,C.q]],{name:[0,"name"]},null),t.Cb(2048,null,C.i,null,[C.e]),t.ob(59,16384,null,0,C.j,[[4,C.i]],null,null),(l()(),t.pb(60,0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["style","float:right; min-width: 100px;"],["type","submit"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Post "])),(l()(),t.pb(62,0,null,null,0,"div",[["class","col-sm-2"]],null,null,null,null,null))],(function(l,n){l(n,12,0,n.component.createPost),l(n,19,0,"community"),l(n,50,0,"title"),l(n,57,0,"optionaltext")}),(function(l,n){l(n,10,0,t.Ab(n,14).ngClassUntouched,t.Ab(n,14).ngClassTouched,t.Ab(n,14).ngClassPristine,t.Ab(n,14).ngClassDirty,t.Ab(n,14).ngClassValid,t.Ab(n,14).ngClassInvalid,t.Ab(n,14).ngClassPending),l(n,16,0,t.Ab(n,21).ngClassUntouched,t.Ab(n,21).ngClassTouched,t.Ab(n,21).ngClassPristine,t.Ab(n,21).ngClassDirty,t.Ab(n,21).ngClassValid,t.Ab(n,21).ngClassInvalid,t.Ab(n,21).ngClassPending),l(n,47,0,t.Ab(n,52).ngClassUntouched,t.Ab(n,52).ngClassTouched,t.Ab(n,52).ngClassPristine,t.Ab(n,52).ngClassDirty,t.Ab(n,52).ngClassValid,t.Ab(n,52).ngClassInvalid,t.Ab(n,52).ngClassPending),l(n,54,0,t.Ab(n,59).ngClassUntouched,t.Ab(n,59).ngClassTouched,t.Ab(n,59).ngClassPristine,t.Ab(n,59).ngClassDirty,t.Ab(n,59).ngClassValid,t.Ab(n,59).ngClassInvalid,t.Ab(n,59).ngClassPending)}))}var w=t.lb("app-createpost",s,(function(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-createpost",[],null,null,null,S,B)),t.ob(1,114688,null,0,s,[C.d,E],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),I=u("iInd");u.d(n,"SharedModuleNgFactory",(function(){return P}));var P=t.mb(i,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[a.a,c,v,w]],[3,t.j],t.v]),t.zb(4608,p.k,p.j,[t.s,[2,p.q]]),t.zb(4608,C.p,C.p,[]),t.zb(4608,C.d,C.d,[]),t.zb(1073742336,p.b,p.b,[]),t.zb(1073742336,C.o,C.o,[]),t.zb(1073742336,C.g,C.g,[]),t.zb(1073742336,C.m,C.m,[]),t.zb(1073742336,I.m,I.m,[[2,I.r],[2,I.k]]),t.zb(1073742336,i,i,[]),t.zb(1024,I.i,(function(){return[[{path:"",component:o},{path:"games",component:e},{path:"create-post",component:s}]]}),[])])}))}}]);