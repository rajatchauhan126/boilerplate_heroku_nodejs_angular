(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{G6fN:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class o{constructor(){}ngOnInit(){}}class a{constructor(l,n,u){this.formBuilder=l,this.counterService=n,this._location=u,this.createPost=this.formBuilder.group({last_updated:new Date,bangalore_total_cases:"",bangalore_total_recoverd:"",bangalore_total_death:"",india_total_cases:"",india_total_recoverd:"",india_total_death:"",world_total_cases:"",world_total_recoverd:"",world_total_death:""})}ngOnInit(){}onSubmit(l){this.counterService.setCovidData(l).subscribe(l=>{this.posts=l})}backClicked(){this._location.back()}}class i{constructor(l,n,u){this.formBuilder=l,this.counterService=n,this._location=u,this.createGames=this.formBuilder.group({name:"",link:"",count:""})}ngOnInit(){}postGamesData(l){l.count=parseInt(l.count),this.counterService.setgamesData(l).subscribe(l=>{this.games=l})}backClicked(){this._location.back()}}class e{}var s=u("pMnS"),r=u("iInd"),b=u("SVse"),c=t.nb({encapsulation:0,styles:[[""]],data:{}});function d(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,20,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,19,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,18,"div",[["class","col-sm-12"],["style","margin-top: 5px;"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,17,"div",[["class","card text-center"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,16,"div",[["class","card-header"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,15,"ul",[["class","nav nav-tabs"],["role","tablist"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,3,"a",[["class","nav-link active"],["data-toggle","tab"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Ab(l,8).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o}),null,null)),t.ob(8,671744,null,0,r.m,[r.k,r.a,b.g],{routerLink:[0,"routerLink"]},null),t.Bb(9,1),(l()(),t.Eb(-1,null,["Covid"])),(l()(),t.pb(11,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(12,0,null,null,3,"a",[["class","nav-link"],["data-toggle","tab"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Ab(l,13).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o}),null,null)),t.ob(13,671744,null,0,r.m,[r.k,r.a,b.g],{routerLink:[0,"routerLink"]},null),t.Bb(14,1),(l()(),t.Eb(-1,null,["Games"])),(l()(),t.pb(16,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,3,"a",[["class","nav-link"],["data-toggle","tab"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Ab(l,18).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o}),null,null)),t.ob(18,671744,null,0,r.m,[r.k,r.a,b.g],{routerLink:[0,"routerLink"]},null),t.Bb(19,1),(l()(),t.Eb(-1,null,["World"]))],(function(l,n){var u=l(n,9,0,"/admin/covid");l(n,8,0,u);var t=l(n,14,0,"/admin/games");l(n,13,0,t);var o=l(n,19,0,"/admin");l(n,18,0,o)}),(function(l,n){l(n,7,0,t.Ab(n,8).target,t.Ab(n,8).href),l(n,12,0,t.Ab(n,13).target,t.Ab(n,13).href),l(n,17,0,t.Ab(n,18).target,t.Ab(n,18).href)}))}var g=t.lb("app-admin",o,(function(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-admin",[],null,null,null,d,c)),t.ob(1,114688,null,0,o,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),p=u("s7LF"),m=u("8sBF"),h=t.nb({encapsulation:0,styles:[[""]],data:{}});function v(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,87,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"div",[["class","row"],["style","height: 14px;"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,85,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,84,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,83,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,82,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,2,"h5",[["class","card-title"],["style","\n                    color: rgb(59, 47, 47);\n                    font-size: 18px;\n                    font-weight: 500;\n                    line-height: 22px;\n                     "]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Change Covid data"])),(l()(),t.pb(9,0,null,null,1,"button",[["class","btn btn-primary"],["style","float: right; margin-bottom: 10px;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.backClicked()&&t),t}),null,null)),(l()(),t.Eb(-1,null,["Go back"])),(l()(),t.pb(11,0,null,null,76,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,a=l.component;return"submit"===n&&(o=!1!==t.Ab(l,13).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.Ab(l,13).onReset()&&o),"ngSubmit"===n&&(o=!1!==a.onSubmit(a.createPost.value)&&o),o}),null,null)),t.ob(12,16384,null,0,p.s,[],null,null),t.ob(13,540672,null,0,p.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Cb(2048,null,p.b,null,[p.f]),t.ob(15,16384,null,0,p.k,[[4,p.b]],null,null),(l()(),t.pb(16,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,5,"input",[["class","form-control"],["formControlName","last_updated"],["id","last_updated"],["placeholder","last_updated"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,18)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,18).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,18)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,18)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(18,16384,null,0,p.c,[t.B,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.h,(function(l){return[l]}),[p.c]),t.ob(20,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.h],[2,p.q]],{name:[0,"name"]},null),t.Cb(2048,null,p.i,null,[p.e]),t.ob(22,16384,null,0,p.j,[[4,p.i]],null,null),(l()(),t.pb(23,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(24,0,null,null,5,"input",[["class","form-control"],["formControlName","bangalore_total_cases"],["id","bangalore_total_cases"],["placeholder","bangalore_total_cases"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,25)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,25).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,25)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,25)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(25,16384,null,0,p.c,[t.B,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.h,(function(l){return[l]}),[p.c]),t.ob(27,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.h],[2,p.q]],{name:[0,"name"]},null),t.Cb(2048,null,p.i,null,[p.e]),t.ob(29,16384,null,0,p.j,[[4,p.i]],null,null),(l()(),t.pb(30,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(31,0,null,null,5,"input",[["class","form-control"],["formControlName","bangalore_total_recoverd"],["id","bangalore_total_recoverd"],["placeholder","bangalore_total_recoverd"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,32)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,32).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,32)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,32)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(32,16384,null,0,p.c,[t.B,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.h,(function(l){return[l]}),[p.c]),t.ob(34,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.h],[2,p.q]],{name:[0,"name"]},null),t.Cb(2048,null,p.i,null,[p.e]),t.ob(36,16384,null,0,p.j,[[4,p.i]],null,null),(l()(),t.pb(37,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(38,0,null,null,5,"input",[["class","form-control"],["formControlName","bangalore_total_death"],["id","bangalore_total_death"],["placeholder","bangalore_total_death"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,39)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,39).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,39)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,39)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(39,16384,null,0,p.c,[t.B,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.h,(function(l){return[l]}),[p.c]),t.ob(41,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.h],[2,p.q]],{name:[0,"name"]},null),t.Cb(2048,null,p.i,null,[p.e]),t.ob(43,16384,null,0,p.j,[[4,p.i]],null,null),(l()(),t.pb(44,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(45,0,null,null,5,"input",[["class","form-control"],["formControlName","india_total_cases"],["id","india_total_cases"],["placeholder","india_total_cases"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,46)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,46).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,46)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,46)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(46,16384,null,0,p.c,[t.B,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.h,(function(l){return[l]}),[p.c]),t.ob(48,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.h],[2,p.q]],{name:[0,"name"]},null),t.Cb(2048,null,p.i,null,[p.e]),t.ob(50,16384,null,0,p.j,[[4,p.i]],null,null),(l()(),t.pb(51,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(52,0,null,null,5,"input",[["class","form-control"],["formControlName","india_total_recoverd"],["id","india_total_recoverd"],["placeholder","india_total_recoverd"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,53)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,53).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,53)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,53)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(53,16384,null,0,p.c,[t.B,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.h,(function(l){return[l]}),[p.c]),t.ob(55,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.h],[2,p.q]],{name:[0,"name"]},null),t.Cb(2048,null,p.i,null,[p.e]),t.ob(57,16384,null,0,p.j,[[4,p.i]],null,null),(l()(),t.pb(58,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(59,0,null,null,5,"input",[["class","form-control"],["formControlName","india_total_death"],["id","india_total_death"],["placeholder","india_total_death"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,60)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,60).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,60)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,60)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(60,16384,null,0,p.c,[t.B,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.h,(function(l){return[l]}),[p.c]),t.ob(62,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.h],[2,p.q]],{name:[0,"name"]},null),t.Cb(2048,null,p.i,null,[p.e]),t.ob(64,16384,null,0,p.j,[[4,p.i]],null,null),(l()(),t.pb(65,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(66,0,null,null,5,"input",[["class","form-control"],["formControlName","world_total_cases"],["id","world_total_cases"],["placeholder","world_total_cases"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,67)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,67).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,67)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,67)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(67,16384,null,0,p.c,[t.B,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.h,(function(l){return[l]}),[p.c]),t.ob(69,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.h],[2,p.q]],{name:[0,"name"]},null),t.Cb(2048,null,p.i,null,[p.e]),t.ob(71,16384,null,0,p.j,[[4,p.i]],null,null),(l()(),t.pb(72,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(73,0,null,null,5,"input",[["class","form-control"],["formControlName","world_total_recoverd"],["id","world_total_recoverd"],["placeholder","world_total_recoverd"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,74)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,74).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,74)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,74)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(74,16384,null,0,p.c,[t.B,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.h,(function(l){return[l]}),[p.c]),t.ob(76,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.h],[2,p.q]],{name:[0,"name"]},null),t.Cb(2048,null,p.i,null,[p.e]),t.ob(78,16384,null,0,p.j,[[4,p.i]],null,null),(l()(),t.pb(79,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(80,0,null,null,5,"input",[["class","form-control"],["formControlName","world_total_death"],["id","world_total_death"],["placeholder","world_total_death"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,81)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,81).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,81)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,81)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(81,16384,null,0,p.c,[t.B,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.h,(function(l){return[l]}),[p.c]),t.ob(83,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.h],[2,p.q]],{name:[0,"name"]},null),t.Cb(2048,null,p.i,null,[p.e]),t.ob(85,16384,null,0,p.j,[[4,p.i]],null,null),(l()(),t.pb(86,0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["style","float:right; min-width: 100px;"],["type","submit"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Post Covid data "]))],(function(l,n){l(n,13,0,n.component.createPost),l(n,20,0,"last_updated"),l(n,27,0,"bangalore_total_cases"),l(n,34,0,"bangalore_total_recoverd"),l(n,41,0,"bangalore_total_death"),l(n,48,0,"india_total_cases"),l(n,55,0,"india_total_recoverd"),l(n,62,0,"india_total_death"),l(n,69,0,"world_total_cases"),l(n,76,0,"world_total_recoverd"),l(n,83,0,"world_total_death")}),(function(l,n){l(n,11,0,t.Ab(n,15).ngClassUntouched,t.Ab(n,15).ngClassTouched,t.Ab(n,15).ngClassPristine,t.Ab(n,15).ngClassDirty,t.Ab(n,15).ngClassValid,t.Ab(n,15).ngClassInvalid,t.Ab(n,15).ngClassPending),l(n,17,0,t.Ab(n,22).ngClassUntouched,t.Ab(n,22).ngClassTouched,t.Ab(n,22).ngClassPristine,t.Ab(n,22).ngClassDirty,t.Ab(n,22).ngClassValid,t.Ab(n,22).ngClassInvalid,t.Ab(n,22).ngClassPending),l(n,24,0,t.Ab(n,29).ngClassUntouched,t.Ab(n,29).ngClassTouched,t.Ab(n,29).ngClassPristine,t.Ab(n,29).ngClassDirty,t.Ab(n,29).ngClassValid,t.Ab(n,29).ngClassInvalid,t.Ab(n,29).ngClassPending),l(n,31,0,t.Ab(n,36).ngClassUntouched,t.Ab(n,36).ngClassTouched,t.Ab(n,36).ngClassPristine,t.Ab(n,36).ngClassDirty,t.Ab(n,36).ngClassValid,t.Ab(n,36).ngClassInvalid,t.Ab(n,36).ngClassPending),l(n,38,0,t.Ab(n,43).ngClassUntouched,t.Ab(n,43).ngClassTouched,t.Ab(n,43).ngClassPristine,t.Ab(n,43).ngClassDirty,t.Ab(n,43).ngClassValid,t.Ab(n,43).ngClassInvalid,t.Ab(n,43).ngClassPending),l(n,45,0,t.Ab(n,50).ngClassUntouched,t.Ab(n,50).ngClassTouched,t.Ab(n,50).ngClassPristine,t.Ab(n,50).ngClassDirty,t.Ab(n,50).ngClassValid,t.Ab(n,50).ngClassInvalid,t.Ab(n,50).ngClassPending),l(n,52,0,t.Ab(n,57).ngClassUntouched,t.Ab(n,57).ngClassTouched,t.Ab(n,57).ngClassPristine,t.Ab(n,57).ngClassDirty,t.Ab(n,57).ngClassValid,t.Ab(n,57).ngClassInvalid,t.Ab(n,57).ngClassPending),l(n,59,0,t.Ab(n,64).ngClassUntouched,t.Ab(n,64).ngClassTouched,t.Ab(n,64).ngClassPristine,t.Ab(n,64).ngClassDirty,t.Ab(n,64).ngClassValid,t.Ab(n,64).ngClassInvalid,t.Ab(n,64).ngClassPending),l(n,66,0,t.Ab(n,71).ngClassUntouched,t.Ab(n,71).ngClassTouched,t.Ab(n,71).ngClassPristine,t.Ab(n,71).ngClassDirty,t.Ab(n,71).ngClassValid,t.Ab(n,71).ngClassInvalid,t.Ab(n,71).ngClassPending),l(n,73,0,t.Ab(n,78).ngClassUntouched,t.Ab(n,78).ngClassTouched,t.Ab(n,78).ngClassPristine,t.Ab(n,78).ngClassDirty,t.Ab(n,78).ngClassValid,t.Ab(n,78).ngClassInvalid,t.Ab(n,78).ngClassPending),l(n,80,0,t.Ab(n,85).ngClassUntouched,t.Ab(n,85).ngClassTouched,t.Ab(n,85).ngClassPristine,t.Ab(n,85).ngClassDirty,t.Ab(n,85).ngClassValid,t.Ab(n,85).ngClassInvalid,t.Ab(n,85).ngClassPending)}))}var A=t.lb("app-coviddata",a,(function(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-coviddata",[],null,null,null,v,h)),t.ob(1,114688,null,0,a,[p.d,m.a,b.f],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),C=t.nb({encapsulation:0,styles:[[""]],data:{}});function _(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,38,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,0,"div",[["class","row"],["style","height: 14px;"]],null,null,null,null,null)),(l()(),t.pb(2,0,null,null,36,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.pb(3,0,null,null,35,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),t.pb(4,0,null,null,34,"div",[["class","card"]],null,null,null,null,null)),(l()(),t.pb(5,0,null,null,33,"div",[["class","card-body"]],null,null,null,null,null)),(l()(),t.pb(6,0,null,null,2,"h5",[["class","card-title"],["style","\n                    color: rgb(59, 47, 47);\n                    font-size: 18px;\n                    font-weight: 500;\n                    line-height: 22px;\n                     "]],null,null,null,null,null)),(l()(),t.pb(7,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),t.Eb(-1,null,["Add games"])),(l()(),t.pb(9,0,null,null,1,"button",[["class","btn btn-primary"],["style","float: right; margin-bottom: 10px;"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.backClicked()&&t),t}),null,null)),(l()(),t.Eb(-1,null,["Go back"])),(l()(),t.pb(11,0,null,null,27,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,a=l.component;return"submit"===n&&(o=!1!==t.Ab(l,13).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.Ab(l,13).onReset()&&o),"ngSubmit"===n&&(o=!1!==a.postGamesData(a.createGames.value)&&o),o}),null,null)),t.ob(12,16384,null,0,p.s,[],null,null),t.ob(13,540672,null,0,p.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Cb(2048,null,p.b,null,[p.f]),t.ob(15,16384,null,0,p.k,[[4,p.b]],null,null),(l()(),t.pb(16,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(17,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","name"],["placeholder","name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,18)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,18).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,18)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,18)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(18,16384,null,0,p.c,[t.B,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.h,(function(l){return[l]}),[p.c]),t.ob(20,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.h],[2,p.q]],{name:[0,"name"]},null),t.Cb(2048,null,p.i,null,[p.e]),t.ob(22,16384,null,0,p.j,[[4,p.i]],null,null),(l()(),t.pb(23,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(24,0,null,null,5,"input",[["class","form-control"],["formControlName","link"],["id","link"],["placeholder","link"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,25)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,25).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,25)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,25)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(25,16384,null,0,p.c,[t.B,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.h,(function(l){return[l]}),[p.c]),t.ob(27,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.h],[2,p.q]],{name:[0,"name"]},null),t.Cb(2048,null,p.i,null,[p.e]),t.ob(29,16384,null,0,p.j,[[4,p.i]],null,null),(l()(),t.pb(30,0,null,null,6,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.pb(31,0,null,null,5,"input",[["class","form-control"],["formControlName","count"],["id","count"],["placeholder","count"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Ab(l,32)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Ab(l,32).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Ab(l,32)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Ab(l,32)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(32,16384,null,0,p.c,[t.B,t.k,[2,p.a]],null,null),t.Cb(1024,null,p.h,(function(l){return[l]}),[p.c]),t.ob(34,671744,null,0,p.e,[[3,p.b],[8,null],[8,null],[6,p.h],[2,p.q]],{name:[0,"name"]},null),t.Cb(2048,null,p.i,null,[p.e]),t.ob(36,16384,null,0,p.j,[[4,p.i]],null,null),(l()(),t.pb(37,0,null,null,1,"button",[["class","btn btn-primary btn-sm"],["style","float:right; min-width: 100px;"],["type","submit"]],null,null,null,null,null)),(l()(),t.Eb(-1,null,[" Post Covid data "]))],(function(l,n){l(n,13,0,n.component.createGames),l(n,20,0,"name"),l(n,27,0,"link"),l(n,34,0,"count")}),(function(l,n){l(n,11,0,t.Ab(n,15).ngClassUntouched,t.Ab(n,15).ngClassTouched,t.Ab(n,15).ngClassPristine,t.Ab(n,15).ngClassDirty,t.Ab(n,15).ngClassValid,t.Ab(n,15).ngClassInvalid,t.Ab(n,15).ngClassPending),l(n,17,0,t.Ab(n,22).ngClassUntouched,t.Ab(n,22).ngClassTouched,t.Ab(n,22).ngClassPristine,t.Ab(n,22).ngClassDirty,t.Ab(n,22).ngClassValid,t.Ab(n,22).ngClassInvalid,t.Ab(n,22).ngClassPending),l(n,24,0,t.Ab(n,29).ngClassUntouched,t.Ab(n,29).ngClassTouched,t.Ab(n,29).ngClassPristine,t.Ab(n,29).ngClassDirty,t.Ab(n,29).ngClassValid,t.Ab(n,29).ngClassInvalid,t.Ab(n,29).ngClassPending),l(n,31,0,t.Ab(n,36).ngClassUntouched,t.Ab(n,36).ngClassTouched,t.Ab(n,36).ngClassPristine,t.Ab(n,36).ngClassDirty,t.Ab(n,36).ngClassValid,t.Ab(n,36).ngClassInvalid,t.Ab(n,36).ngClassPending)}))}var f=t.lb("app-gamesddata",i,(function(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-gamesddata",[],null,null,null,_,C)),t.ob(1,114688,null,0,i,[p.d,m.a,b.f],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);u.d(n,"AdminModuleNgFactory",(function(){return y}));var y=t.mb(e,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[s.a,g,A,f]],[3,t.j],t.v]),t.zb(4608,b.k,b.j,[t.s,[2,b.q]]),t.zb(4608,p.p,p.p,[]),t.zb(4608,p.d,p.d,[]),t.zb(1073742336,b.b,b.b,[]),t.zb(1073742336,p.o,p.o,[]),t.zb(1073742336,p.g,p.g,[]),t.zb(1073742336,p.m,p.m,[]),t.zb(1073742336,r.n,r.n,[[2,r.s],[2,r.k]]),t.zb(1073742336,e,e,[]),t.zb(1024,r.i,(function(){return[[{path:"",component:o},{path:"covid",component:a},{path:"games",component:i}]]}),[])])}))}}]);