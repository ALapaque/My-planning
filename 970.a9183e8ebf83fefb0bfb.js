(self.webpackChunkMy_planning=self.webpackChunkMy_planning||[]).push([[970],{6970:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ApplicationModule:()=>g});var i=n(1116),a=n(763),o=n(8467),r=n(5366),l=n(9110),s=n(3973),c=n(5965),u=n(4762),p=n(649);let h=(()=>{class t{constructor(t){this._translateService=t,this._initItems()}ngOnInit(){}_initItems(){return(0,u.mG)(this,void 0,void 0,function*(){yield this._translateService.get("APPNAME").toPromise(),this.items=[{title:this._translateService.instant("APP.LEFT_MENU.DASHBOARD"),icon:"grid-outline",link:"/app/dashboard",pathMatch:"full"},{title:yield this._translateService.instant("APP.LEFT_MENU.AGENDA"),icon:"calendar-outline",link:"/app/agenda",pathMatch:"full"}]})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(p.sK))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-left-menu"]],decls:1,vars:1,consts:[["tag","left-menu",3,"items"]],template:function(t,e){1&t&&r._UZ(0,"nb-menu",0),2&t&&r.Q6J("items",e.items)},directives:[l.mBz],styles:[""]}),t})();const d=[{path:"",component:(()=>{class t{constructor(t,e){this._sidebarService=t,this._authService=e}ngOnInit(){}toggle(){this._sidebarService.toggle(!0,"left")}logout(){this._authService.logout()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(l.lzT),r.Y36(s.e))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-template"]],decls:15,vars:12,consts:[["fixed",""],["nbButton","","ghost","","status","primary","shape","semi-round","size","large",3,"click"],[3,"icon"],[3,"type","hint","placeholder","tag"],[3,"fxFlex"],["nbButton","","ghost","","status","primary","shape","semi-round","size","large",3,"routerLink","click"],["icon","power-outline"],["tag","left",3,"responsive"],["nbSidebarComponent",""]],template:function(t,e){if(1&t&&(r.TgZ(0,"nb-layout"),r.TgZ(1,"nb-layout-header",0),r.TgZ(2,"button",1),r.NdJ("click",function(){return e.toggle()}),r._UZ(3,"nb-icon",2),r.qZA(),r._UZ(4,"nb-search",3),r.ALo(5,"translate"),r.ALo(6,"translate"),r._UZ(7,"span",4),r.TgZ(8,"button",5),r.NdJ("click",function(){return e.logout()}),r._UZ(9,"nb-icon",6),r.qZA(),r.qZA(),r.TgZ(10,"nb-sidebar",7,8),r._UZ(12,"app-left-menu"),r.qZA(),r.TgZ(13,"nb-layout-column"),r._UZ(14,"router-outlet"),r.qZA(),r.qZA()),2&t){const t=r.MAs(11);r.xp6(3),r.Q6J("icon",t.compacted?"menu-outline":"menu-arrow-outline"),r.xp6(1),r.Q6J("type","modal-zoomin")("hint",r.lcZ(5,8,"APP.SEARCH.HINT"))("placeholder",r.lcZ(6,10,"APP.SEARCH.PLACEHOLDER"))("tag","topbar-search"),r.xp6(3),r.Q6J("fxFlex","auto"),r.xp6(1),r.Q6J("routerLink","/homepage"),r.xp6(2),r.Q6J("responsive",!0)}},directives:[l.Aqw,l.dmS,l.DPz,l.fMN,l.G$7,c.yH,o.rH,l.nZR,h,l.dP_,o.lC],pipes:[p.X$],styles:["[_nghost-%COMP%]     nb-layout nb-layout-column{padding:2.25rem!important}[_nghost-%COMP%]     nb-layout nb-layout-footer nav{justify-content:flex-end!important}[_nghost-%COMP%]     nb-layout nb-sidebar.compacted nb-icon{margin:0!important}[_nghost-%COMP%]     .nebular-dialog{display:flex;align-items:center;place-content:center;min-width:20vw!important;max-width:80vw!important;max-height:80vh!important}[_nghost-%COMP%]     .nebular-dialog nb-card{height:100%!important}[_nghost-%COMP%]     .nebular-dialog-fullscreen{width:100vw!important;height:100vh!important}[_nghost-%COMP%]     .nebular-dialog-fullscreen nb-card{height:100%!important}"]}),t})(),children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadChildren:()=>n.e(103).then(n.bind(n,7103)).then(t=>t.DashboardModule)},{path:"agenda",loadChildren:()=>n.e(866).then(n.bind(n,8866)).then(t=>t.AgendaModule)},{path:"settings",loadChildren:()=>n.e(133).then(n.bind(n,133)).then(t=>t.SettingsModule)}]}];let m=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[o.Bz.forChild(d)],o.Bz]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[i.ez,a.m,m]]}),t})()}}]);