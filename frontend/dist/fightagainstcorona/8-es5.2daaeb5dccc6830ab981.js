(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"CVn+":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{constructor(){}ngOnInit(){}}class o{constructor(l){this.counterService=l}ngOnInit(){this.getGamesData(),this.callAfterTimeout()}callAfterTimeout(){setTimeout(()=>{this.getGamesData()},1e3)}getGamesData(){this.counterService.getgamesData({}).subscribe(l=>{this.games=0===Object.keys(l.games).length?[]:l.games})}updateCount(){this.counterService.postgamesCountData(this.games).subscribe(l=>{this.games=l.games})}increaseCount(l){this.games[l].count=this.games[l].count+1,this.updateCount()}}class s{constructor(l,n,u){this.router=l,this.formBuilder=n,this.postService=u,this.createPost=this.formBuilder.group({community:"",title:"",optionaltext:"",image:""})}ngOnInit(){}onSubmit(l){l.userId="Edgymnerch",l.image="temp",this.postService.createPost(l).subscribe(l=>this.posts=l),this.createPost.reset(),this.router.navigateByUrl("shared/posts")}}class i{constructor(l,n){this.formBuilder=l,this.postService=n,this.createComment=this.formBuilder.group({postId:"",comment:""})}ngOnInit(){this.getAllPost(),this.callAfterTimeout()}callAfterTimeout(){setTimeout(()=>{},0)}getAllPost(){this.postService.getAllPost().subscribe(l=>{this.posts=null===l?[]:l})}}class a{}var r=u("pMnS"),b=t.nb({encapsulation:0,styles:[[""]],data:{}});function c(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["shared works!"]))],null,null)}var p=t.lb("app-shared",e,(function(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-shared",[],null,null,null,c,b)),t.ob(1,114688,null,0,e,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),g=u("SVse"),d=u("8sBF"),m=t.nb({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,6,"li",[["class","list-group-item"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,1,"span",[["style","padding-right:6px; color: #495057;"]],null,null,null,null,null)),(l()(),t.Eb(2,null,["","."])),(l()(),t.pb(3,0,null,null,1,"a",[["class","text-muted medium mb-4 mb-lg-0 badge_1"],["target","_blank"]],[[8,"href",4]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.increaseCount(l.context.index)&&t),t}),null,null)),(l()(),t.Eb(4,null,["",""])),(l()(),t.pb(5,0,null,null,1,"span",[["class","medium badge badge-primary badge-pill"],["style","float: right;margin-top: 3px;"]],null,null,null,null,null)),(l()(),t.Eb(6,null,["",""]))],null,(function(l,n){l(n,2,0,n.context.index+1),l(n,3,0,t.tb(1,"",n.context.$implicit.link,"")),l(n,4,0,n.context.$implicit.name),l(n,6,0,n.context.$implicit.count)}))}function f(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,2,"ol",[["class","list-group list-group-flush"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,h)),t.ob(2,278528,null,0,g.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.games)}),null)}function v(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,8,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,6,"div",[["class","col-sm-12"],["style","margin-top: 10px;"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,1,"div",[["class","card-header heading_1"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Game "])),(l()(),t.pb(6,0,null,null,2,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,f)),t.ob(8,16384,null,0,g.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.Eb(-1,null,[">"]))],(function(l,n){l(n,8,0,n.component.games)}),null)}var A=t.lb("app-games",o,(function(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-games",[],null,null,null,v,m)),t.ob(1,114688,null,0,o,[d.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),C=u("s7LF"),y=u("iInd"),k=u("fhD/"),x=t.nb({encapsulation:0,styles:[[""]],data:{}});function B(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,62,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"div",[["class","row"],["style","height: 14px;"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,60,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,0,"div",[["class","col-sm-2"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,57,"div",[["class","col-sm-8"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,56,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,55,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,2,"h5",[["class","card-title"],["style","\n                    color: rgb(59, 47, 47);\n                    font-size: 18px;\n                    font-weight: 500;\n                    line-height: 22px;\n                     "]],null,null,null,null,null)),(l()(),t.pb(8,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Create a post"])),(l()(),t.pb(10,0,null,null,51,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var e=!0,o=l.component;return"submit"===n&&(e=!1!==t.Ab(l,12).onSubmit(u)&&e),"reset"===n&&(e=!1!==t.Ab(l,12).onReset()&&e),"ngSubmit"===n&&(e=!1!==o.onSubmit(o.createPost.value)&&e),e}),null,null)),t.ob(11,16384,null,0,C.s,[],null,null),t.ob(12,540672,null,0,C.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Cb(2048,null,C.b,null,[C.f]),t.ob(14,16384,null,0,C.k,[[4,C.b]],null,null),(l()(),t.pb(15,0,null,null,30,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(16,0,null,null,29,"select",[["class","form-control"],["formControlName","community"],["id","community"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"change"],[null,"blur"]],(function(l,n,u){var e=!0;return"change"===n&&(e=!1!==t.Ab(l,17).onChange(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,17).onTouched()&&e),e}),null,null)),t.ob(17,16384,null,0,C.n,[t.B,t.k],null,null),t.Cb(1024,null,C.h,(function(l){return[l]}),[C.n]),t.ob(19,671744,null,0,C.e,[[3,C.b],[8,null],[8,null],[6,C.h],[2,C.q]],{name:[0,"name"]},null),t.Cb(2048,null,C.i,null,[C.e]),t.ob(21,16384,null,0,C.j,[[4,C.i]],null,null),(l()(),t.pb(22,0,null,null,3,"option",[["selected",""]],null,null,null,null,null)),t.ob(23,147456,null,0,C.l,[t.k,t.B,[2,C.n]],null,null),t.ob(24,147456,null,0,C.r,[t.k,t.B,[8,null]],null,null),(l()(),t.Eb(-1,null,["Choose a community"])),(l()(),t.pb(26,0,null,null,3,"option",[],null,null,null,null,null)),t.ob(27,147456,null,0,C.l,[t.k,t.B,[2,C.n]],null,null),t.ob(28,147456,null,0,C.r,[t.k,t.B,[8,null]],null,null),(l()(),t.Eb(-1,null,["Music and dance"])),(l()(),t.pb(30,0,null,null,3,"option",[],null,null,null,null,null)),t.ob(31,147456,null,0,C.l,[t.k,t.B,[2,C.n]],null,null),t.ob(32,147456,null,0,C.r,[t.k,t.B,[8,null]],null,null),(l()(),t.Eb(-1,null,["Art and craft"])),(l()(),t.pb(34,0,null,null,3,"option",[],null,null,null,null,null)),t.ob(35,147456,null,0,C.l,[t.k,t.B,[2,C.n]],null,null),t.ob(36,147456,null,0,C.r,[t.k,t.B,[8,null]],null,null),(l()(),t.Eb(-1,null,["Education and training"])),(l()(),t.pb(38,0,null,null,3,"option",[],null,null,null,null,null)),t.ob(39,147456,null,0,C.l,[t.k,t.B,[2,C.n]],null,null),t.ob(40,147456,null,0,C.r,[t.k,t.B,[8,null]],null,null),(l()(),t.Eb(-1,null,["Politics and religion"])),(l()(),t.pb(42,0,null,null,3,"option",[],null,null,null,null,null)),t.ob(43,147456,null,0,C.l,[t.k,t.B,[2,C.n]],null,null),t.ob(44,147456,null,0,C.r,[t.k,t.B,[8,null]],null,null),(l()(),t.Eb(-1,null,["Space and gravity"])),(l()(),t.pb(46,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(47,0,null,null,5,"input",[["class","form-control"],["formControlName","title"],["id","title"],["placeholder","Title"],["type","title"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Ab(l,48)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,48).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,48)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,48)._compositionEnd(u.target.value)&&e),e}),null,null)),t.ob(48,16384,null,0,C.c,[t.B,t.k,[2,C.a]],null,null),t.Cb(1024,null,C.h,(function(l){return[l]}),[C.c]),t.ob(50,671744,null,0,C.e,[[3,C.b],[8,null],[8,null],[6,C.h],[2,C.q]],{name:[0,"name"]},null),t.Cb(2048,null,C.i,null,[C.e]),t.ob(52,16384,null,0,C.j,[[4,C.i]],null,null),(l()(),t.pb(53,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(54,0,null,null,5,"textarea",[["class","form-control"],["formControlName","optionaltext"],["id","optionaltext"],["placeholder","Text (Optional)"],["rows","3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var e=!0;return"input"===n&&(e=!1!==t.Ab(l,55)._handleInput(u.target.value)&&e),"blur"===n&&(e=!1!==t.Ab(l,55).onTouched()&&e),"compositionstart"===n&&(e=!1!==t.Ab(l,55)._compositionStart()&&e),"compositionend"===n&&(e=!1!==t.Ab(l,55)._compositionEnd(u.target.value)&&e),e}),null,null)),t.ob(55,16384,null,0,C.c,[t.B,t.k,[2,C.a]],null,null),t.Cb(1024,null,C.h,(function(l){return[l]}),[C.c]),t.ob(57,671744,null,0,C.e,[[3,C.b],[8,null],[8,null],[6,C.h],[2,C.q]],{name:[0,"name"]},null),t.Cb(2048,null,C.i,null,[C.e]),t.ob(59,16384,null,0,C.j,[[4,C.i]],null,null),(l()(),t.pb(60,0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["style","float:right; min-width: 100px;"],["type","submit"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Post "])),(l()(),t.pb(62,0,null,null,0,"div",[["class","col-sm-2"]],null,null,null,null,null))],(function(l,n){l(n,12,0,n.component.createPost),l(n,19,0,"community"),l(n,50,0,"title"),l(n,57,0,"optionaltext")}),(function(l,n){l(n,10,0,t.Ab(n,14).ngClassUntouched,t.Ab(n,14).ngClassTouched,t.Ab(n,14).ngClassPristine,t.Ab(n,14).ngClassDirty,t.Ab(n,14).ngClassValid,t.Ab(n,14).ngClassInvalid,t.Ab(n,14).ngClassPending),l(n,16,0,t.Ab(n,21).ngClassUntouched,t.Ab(n,21).ngClassTouched,t.Ab(n,21).ngClassPristine,t.Ab(n,21).ngClassDirty,t.Ab(n,21).ngClassValid,t.Ab(n,21).ngClassInvalid,t.Ab(n,21).ngClassPending),l(n,47,0,t.Ab(n,52).ngClassUntouched,t.Ab(n,52).ngClassTouched,t.Ab(n,52).ngClassPristine,t.Ab(n,52).ngClassDirty,t.Ab(n,52).ngClassValid,t.Ab(n,52).ngClassInvalid,t.Ab(n,52).ngClassPending),l(n,54,0,t.Ab(n,59).ngClassUntouched,t.Ab(n,59).ngClassTouched,t.Ab(n,59).ngClassPristine,t.Ab(n,59).ngClassDirty,t.Ab(n,59).ngClassValid,t.Ab(n,59).ngClassInvalid,t.Ab(n,59).ngClassPending)}))}var E=t.lb("app-createpost",s,(function(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-createpost",[],null,null,null,B,x)),t.ob(1,114688,null,0,s,[y.k,C.d,k.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),S=t.nb({encapsulation:0,styles:[[""]],data:{}});function F(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,10,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,9,"div",[["class","card text-center"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,8,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,7,"div",[["class","tab-content"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,6,"div",[["class","container tab-pane active text-muted medium mb-4 mb-lg-0"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,1,"strong",[["style","float: left;"]],null,null,null,null,null)),(l()(),t.Eb(7,null,["",""])),(l()(),t.pb(8,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(9,0,null,null,1,"p",[["style","text-align: left;"]],null,null,null,null,null)),(l()(),t.Eb(10,null,[" ",""]))],null,(function(l,n){l(n,7,0,n.context.$implicit.title),l(n,10,0,n.context.$implicit.optionaltext)}))}function P(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),t.eb(16777216,null,null,1,null,F)),t.ob(2,278528,null,0,g.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.component.posts.reverse())}),null)}function w(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,11,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"div",[["class","row"],["style","height: 14px;"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,9,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,8,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,5,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,4,"div",[["class","form-group"],["style","margin-bottom: 0.5rem; margin-top: 0.5rem;"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,3,"a",[["class","btn btn-primary btn-sm"],["style","float: left; min-width: 100px; margin-left: .5rem;"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Ab(l,7).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.ob(7,671744,null,0,y.m,[y.k,y.a,g.g],{routerLink:[0,"routerLink"]},null),t.Bb(8,1),(l()(),t.Eb(-1,null,["Create new post"])),(l()(),t.eb(16777216,null,null,1,null,P)),t.ob(11,16384,null,0,g.i,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component,t=l(n,8,0,"/shared/create-post");l(n,7,0,t),l(n,11,0,u.posts)}),(function(l,n){l(n,6,0,t.Ab(n,7).target,t.Ab(n,7).href)}))}var I=t.lb("app-posts",i,(function(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-posts",[],null,null,null,w,S)),t.ob(1,114688,null,0,i,[C.d,k.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);u.d(n,"SharedModuleNgFactory",(function(){return T}));var T=t.mb(a,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[r.a,p,A,E,I]],[3,t.j],t.v]),t.zb(4608,g.k,g.j,[t.s,[2,g.q]]),t.zb(4608,C.p,C.p,[]),t.zb(4608,C.d,C.d,[]),t.zb(1073742336,g.b,g.b,[]),t.zb(1073742336,C.o,C.o,[]),t.zb(1073742336,C.g,C.g,[]),t.zb(1073742336,C.m,C.m,[]),t.zb(1073742336,y.n,y.n,[[2,y.s],[2,y.k]]),t.zb(1073742336,a,a,[]),t.zb(1024,y.i,(function(){return[[{path:"",component:e},{path:"games",component:o},{path:"create-post",component:s},{path:"posts",component:i}]]}),[])])}))}}]);