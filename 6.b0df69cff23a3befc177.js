(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{zyTt:function(t,e,n){"use strict";n.r(e),n.d(e,"ApplicationModule",function(){return l});var o=n("ofXK"),r=n("pk6O"),i=n("tyNb"),a=n("fXoL"),c=n("aceb");const s=[{path:"",component:(()=>{class t{constructor(t){this.sidebarService=t}ngOnInit(){}toggle(){this.sidebarService.toggle(!1,"left")}toggleCompact(){this.sidebarService.toggle(!0,"right")}}return t.\u0275fac=function(e){return new(e||t)(a.Pb(c.G))},t.\u0275cmp=a.Jb({type:t,selectors:[["app-template"]],decls:12,vars:1,consts:[["fixed",""],["nbButton","","ghost","","status","primary","shape","round","size","small",3,"routerLink"],["icon","arrow-back"],["nbButton","","status","success","size","tiny",3,"click"],["nbButton","","status","info","size","tiny",3,"click"],["tag","left"],["right","","tag","right"]],template:function(t,e){1&t&&(a.Vb(0,"nb-layout"),a.Vb(1,"nb-layout-header",0),a.Vb(2,"button",1),a.Qb(3,"nb-icon",2),a.Ub(),a.Vb(4,"button",3),a.dc("click",function(){return e.toggle()}),a.Bc(5,"Toggle"),a.Ub(),a.Vb(6,"button",4),a.dc("click",function(){return e.toggleCompact()}),a.Bc(7,"Toggle Compact"),a.Ub(),a.Ub(),a.Qb(8,"nb-sidebar",5),a.Qb(9,"nb-sidebar",6),a.Vb(10,"nb-layout-column"),a.Qb(11,"router-outlet"),a.Ub(),a.Ub()),2&t&&(a.Db(2),a.nc("routerLink","/homepage"))},directives:[c.s,c.t,c.b,i.e,c.m,c.E,c.r,i.i],styles:[""]}),t})(),children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadChildren:()=>n.e(7).then(n.bind(null,"0P8I")).then(t=>t.DashboardModule)},{path:"agenda",loadChildren:()=>n.e(5).then(n.bind(null,"et8b")).then(t=>t.AgendaModule)},{path:"settings",loadChildren:()=>n.e(8).then(n.bind(null,"xdUr")).then(t=>t.SettingsModule)}]}];let b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({imports:[[i.h.forChild(s)],i.h]}),t})(),l=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.Nb({type:t}),t.\u0275inj=a.Mb({imports:[[o.c,r.a,b]]}),t})()}}]);