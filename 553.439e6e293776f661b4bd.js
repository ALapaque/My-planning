(self.webpackChunkMy_planning=self.webpackChunkMy_planning||[]).push([[553],{9553:(t,n,e)=>{"use strict";e.r(n),e.d(n,{DashboardModule:()=>Y});var r=e(1116),i=e(3917),a=e(2693),o=e(8125),c=e(205),g=e(9996),s=e(529),p=e(7597);class m{constructor(t){var n;this.id=0,this.type=null,this.recap=!1,this.size=null,this.users=null,t?(Object.assign(this,t),(null===(n=null==t?void 0:t.users)||void 0===n?void 0:n.length)&&(this.users=t.users.map(t=>new p.n(t)))):Object.create(this)}}var d=e(8498),l=e(5366),f=e(3973);let u=(()=>{class t{constructor(t,n){this._http=t,this._authService=n,this._baseUrl=(0,s.U)()+"/card"}getCards(){return this._http.get(`${this._baseUrl}`).pipe((0,g.U)(t=>t.map(t=>new m(t))))}getUserCards(){return this._http.get(`${this._baseUrl}/user/${this._authService.user.id.toString(10)}`).pipe((0,g.U)(t=>t.map(t=>new m(t))))}getRecapIncoming(t){const n=(new a.LE).set("userId",this._authService.user.id.toString(10)).set("type",t).set("start",(new Date).toISOString()).set("end",(0,o.Z)(new Date).toISOString());return this._getEventsIncoming(n)}getNormalIncoming(t){const n=(new a.LE).set("userId",this._authService.user.id.toString(10)).set("type",t).set("start",(0,c.Z)(new Date).toISOString()).set("end",(0,o.Z)(new Date).toISOString());return this._getEventsIncoming(n)}_getEventsIncoming(t){return this._http.get(`${this._baseUrl}/incoming`,{params:t}).pipe((0,g.U)(t=>t.map(t=>new d.j(t))))}}return t.\u0275fac=function(n){return new(n||t)(l.LFG(a.eN),l.LFG(f.e))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac}),t})();var h=e(3337),_=e(1419),O=e(8512),C=e(878),P=e(4019),M=e(7727),x=e(5216),b=e(5965),v=e(649);let y=(()=>{class t{constructor(t){this._cardService=t,this.contentLoading$=new O.X(!0)}ngOnInit(){this.content$=this._cardService.getRecapIncoming(this.card.type).pipe((0,g.U)(t=>t.length)).pipe((0,P.b)(()=>this.contentLoading$.next(!1)),(0,M.K)(t=>(this.contentLoading$.next(!1),(0,C.of)(null))))}}return t.\u0275fac=function(n){return new(n||t)(l.Y36(u))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-recap-card"]],inputs:{card:"card"},decls:9,vars:14,consts:[["fxLayout","row","fxLayoutAlign","space-between center",1,"card",3,"nbSpinner","nbSpinnerStatus"],[1,"title"],[1,"content"]],template:function(t,n){1&t&&(l.TgZ(0,"nb-card",0),l.ALo(1,"async"),l.ALo(2,"async"),l.TgZ(3,"p",1),l._uU(4),l.ALo(5,"translate"),l.qZA(),l.TgZ(6,"span",2),l._uU(7),l.ALo(8,"async"),l.qZA(),l.qZA()),2&t&&(l.ekj("success",0===l.lcZ(1,6,n.content$)),l.Q6J("nbSpinner",l.lcZ(2,8,n.contentLoading$))("nbSpinnerStatus","info"),l.xp6(4),l.Oqu(l.lcZ(5,10,"APP.DASHBOARD.RECAP."+n.card.type)),l.xp6(3),l.Oqu(l.lcZ(8,12,n.content$)))},directives:[x.Asz,b.xw,b.Wh,x.Q7R],pipes:[r.Ov,v.X$],styles:['@import url("https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Manrope:wght@200;300;400;500;600;700;800&family=Train+One&display=swap");@import url("https://fonts.googleapis.com/css2?family=Zilla+Slab+Highlight:wght@700&display=swap");.font.--caveat[_ngcontent-%COMP%]{font-family:Caveat,cursive!important}.font.--man-rope[_ngcontent-%COMP%]{font-family:Manrope,sans-serif!important}.font.--train-one[_ngcontent-%COMP%]{font-family:Train One,cursive!important}.font.--zilla-slab[_ngcontent-%COMP%]{font-family:Zilla Slab Highlight,cursive}.font.--kg-happy[_ngcontent-%COMP%]{font-family:kg-happy,serif}.text-center[_ngcontent-%COMP%]{text-align:center!important}.text-left[_ngcontent-%COMP%]{text-align:left!important}.text-right[_ngcontent-%COMP%]{text-align:right!important}.float-left[_ngcontent-%COMP%]{float:left}.float-right[_ngcontent-%COMP%]{float:right}.full-width[_ngcontent-%COMP%], [_nghost-%COMP%]     .card{width:100%!important}.margin[_ngcontent-%COMP%]{margin:1rem!important}.margin-xs[_ngcontent-%COMP%]{margin:.5rem!important}.margin-xl[_ngcontent-%COMP%]{margin:2rem!important}.margin-side[_ngcontent-%COMP%]{margin-left:1rem!important;margin-right:1rem!important}.margin-side-xs[_ngcontent-%COMP%]{margin-left:.5rem!important;margin-right:.5rem!important}.margin-side-xl[_ngcontent-%COMP%]{margin-left:2rem!important;margin-right:2rem!important}.margin-vertical[_ngcontent-%COMP%]{margin-top:1rem!important;margin-bottom:1rem!important}.margin-vertical-xs[_ngcontent-%COMP%]{margin-top:.5rem!important;margin-bottom:.5rem!important}.margin-vertical-xl[_ngcontent-%COMP%]{margin-top:2rem!important;margin-bottom:2rem!important}.margin-left[_ngcontent-%COMP%]{margin-left:1rem!important}.margin-left-xs[_ngcontent-%COMP%]{margin-left:.5rem!important}.margin-left-xl[_ngcontent-%COMP%]{margin-left:2rem!important}.margin-right[_ngcontent-%COMP%]{margin-right:1rem!important}.margin-right-xs[_ngcontent-%COMP%]{margin-right:.5rem!important}.margin-right-xl[_ngcontent-%COMP%]{margin-right:2rem!important}.margin-top[_ngcontent-%COMP%]{margin-top:1rem!important}.margin-top-xs[_ngcontent-%COMP%]{margin-top:.5rem!important}.margin-top-xl[_ngcontent-%COMP%]{margin-top:2rem!important}.margin-bottom[_ngcontent-%COMP%]{margin-bottom:1rem!important}.margin-bottom-xs[_ngcontent-%COMP%]{margin-bottom:.5rem!important}.margin-bottom-xl[_ngcontent-%COMP%]{margin-bottom:2rem!important}.no-margin[_ngcontent-%COMP%]{margin:0!important}.padding[_ngcontent-%COMP%]{padding:1rem!important}.padding-xs[_ngcontent-%COMP%]{padding:.5rem!important}.padding-xl[_ngcontent-%COMP%]{padding:2rem!important}.padding-side[_ngcontent-%COMP%]{padding-left:1rem!important;padding-right:1rem!important}.padding-side-xs[_ngcontent-%COMP%]{padding-left:.5rem!important;padding-right:.5rem!important}.padding-side-xl[_ngcontent-%COMP%]{padding-left:2rem!important;padding-right:2rem!important}.padding-left[_ngcontent-%COMP%]{padding-left:1rem!important}.padding-left-xs[_ngcontent-%COMP%]{padding-left:.5rem!important}.padding-left-xl[_ngcontent-%COMP%]{padding-left:2rem!important}.padding-right[_ngcontent-%COMP%]{padding-right:1rem!important}.padding-right-xs[_ngcontent-%COMP%]{padding-right:.5rem!important}.padding-right-xl[_ngcontent-%COMP%]{padding-right:2rem!important}.padding-top[_ngcontent-%COMP%]{padding-top:1rem!important}.padding-top-xs[_ngcontent-%COMP%]{padding-top:.5rem!important}.padding-top-xl[_ngcontent-%COMP%]{padding-top:2rem!important}.padding-bottom[_ngcontent-%COMP%]{padding-bottom:1rem!important}.padding-bottom-xs[_ngcontent-%COMP%]{padding-bottom:.5rem!important}.padding-bottom-xl[_ngcontent-%COMP%]{padding-bottom:2rem!important}.no-padding[_ngcontent-%COMP%]{padding:0!important}.rotate-90[_ngcontent-%COMP%]{transform:rotate(90deg)}.rotate-180[_ngcontent-%COMP%]{transform:rotate(180deg)}.rotate-270[_ngcontent-%COMP%]{transform:rotate(-90deg)}.rotate-animation[_ngcontent-%COMP%]{transition:transform 175ms cubic-bezier(0,0,.2,1)}.not-selectable[_ngcontent-%COMP%]{-webkit-touch-callout:none;-webkit-user-select:none;user-select:none}.spinning[_ngcontent-%COMP%]{animation-name:rotate;animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:linear}@keyframes rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.clickable[_ngcontent-%COMP%]{cursor:pointer}.clickable[_ngcontent-%COMP%]:hover.clickable--underline{text-decoration:underline}.loading-background[_ngcontent-%COMP%]{animation-duration:1s;animation-fill-mode:forwards;animation-iteration-count:infinite;animation-name:placeHolderShimmer;animation-timing-function:linear;background:#f6f7f8;background:linear-gradient(90deg,#eee 100px,#ddd 250px,#eee 400px);background-position:0 0;background-size:500px 100px;position:relative}@keyframes placeHolderShimmer{0%{background-position-x:0}to{background-position-x:500px}}.contrast-bg[_ngcontent-%COMP%]{background:rgba(0,0,0,.2)!important}.ellipsis[_ngcontent-%COMP%]{text-overflow:ellipsis;overflow:hidden}[_nghost-%COMP%]     .card{padding:12px 30px;border-radius:25px;height:auto;color:#252547}[_nghost-%COMP%]     .card.success{background:#b3e814}[_nghost-%COMP%]     .card:not(.success){background:#36f}[_nghost-%COMP%]     .card .title{color:inherit;font-size:1.5em}[_nghost-%COMP%]     .card .content{font-family:Dancing Script,cursive!important;font-size:3.5em;color:inherit}']}),t})();var Z=e(5090),w=e(6280),A=e(2814);function S(t,n){if(1&t&&(l.TgZ(0,"nb-list-item"),l.TgZ(1,"span",3),l._UZ(2,"app-date-label",4),l._uU(3),l.qZA(),l.qZA()),2&t){const t=n.$implicit,e=l.oxw(2);l.xp6(1),l.ekj("in-progress",e.isInProgress(t)),l.xp6(1),l.Q6J("startDate",t.startDate)("endDate",t.endDate),l.xp6(1),l.hij(" ",t.name," ")}}function I(t,n){if(1&t&&(l.TgZ(0,"nb-list"),l.YNc(1,S,4,5,"nb-list-item",2),l.ALo(2,"async"),l.qZA()),2&t){const t=l.oxw();l.xp6(1),l.Q6J("ngForOf",l.lcZ(2,1,t.content$))}}function k(t,n){1&t&&(l.TgZ(0,"div",5),l.TgZ(1,"i"),l._uU(2),l.ALo(3,"translate"),l.qZA(),l.qZA()),2&t&&(l.xp6(2),l.Oqu(l.lcZ(3,1,"GLOBAL.EMPTY")))}let L=(()=>{class t{constructor(t){this._cardService=t,this.contentLoading$=new O.X(!0)}ngOnInit(){this.content$=this._cardService.getNormalIncoming(this.type).pipe((0,P.b)(()=>this.contentLoading$.next(!1)),(0,M.K)(t=>(this.contentLoading$.next(!1),(0,C.of)([]))))}isInProgress(t){return function(t,n){(0,w.Z)(2,arguments);var e=(0,Z.Z)(t),r=(0,Z.Z)(n);return e.getTime()<r.getTime()}(new Date(t.startDate),new Date)}}return t.\u0275fac=function(n){return new(n||t)(l.Y36(u))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-event-card-content"]],inputs:{type:"type"},decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["noEvents",""],[4,"ngFor","ngForOf"],[1,"ellipsis"],[3,"startDate","endDate"],["fxLayoutAlign","center center"]],template:function(t,n){if(1&t&&(l.YNc(0,I,3,3,"nb-list",0),l.ALo(1,"async"),l.YNc(2,k,4,3,"ng-template",null,1,l.W1O)),2&t){const t=l.MAs(3);let e;l.Q6J("ngIf",null==(e=l.lcZ(1,2,n.content$))?null:e.length)("ngIfElse",t)}},directives:[r.O5,x.zP_,r.sg,x.qBV,A.Q,b.Wh],pipes:[r.Ov,v.X$],styles:["[_nghost-%COMP%]     nb-list nb-list-item span.in-progress{color:#ff3835;font-weight:700}"]}),t})(),$=(()=>{class t{constructor(){}ngOnInit(){}get cardSize(){return this.card.size.toLowerCase()}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-card"]],inputs:{card:"card"},decls:6,vars:5,consts:[["status","info",3,"size"],[3,"type"]],template:function(t,n){1&t&&(l.TgZ(0,"nb-card",0),l.TgZ(1,"nb-card-header"),l._uU(2),l.ALo(3,"translate"),l.qZA(),l.TgZ(4,"nb-card-body"),l._UZ(5,"app-event-card-content",1),l.qZA(),l.qZA()),2&t&&(l.Q6J("size",n.cardSize),l.xp6(2),l.Oqu(l.lcZ(3,3,"APP.DASHBOARD.CARD."+n.card.type)),l.xp6(3),l.Q6J("type",n.card.type))},directives:[x.Asz,x.ndF,x.yKW,L],pipes:[v.X$],styles:[""]}),t})();function D(t,n){1&t&&l._UZ(0,"app-recap-card",5),2&t&&l.Q6J("card",n.$implicit)}function U(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div",3),l.YNc(2,D,1,1,"app-recap-card",4),l.qZA(),l.BQk()),2&t){const t=n.ngIf;l.xp6(2),l.Q6J("ngForOf",t)}}function q(t,n){1&t&&l._UZ(0,"app-card",5),2&t&&l.Q6J("card",n.$implicit)}function z(t,n){if(1&t&&(l.ynx(0),l.TgZ(1,"div",6),l.YNc(2,q,1,1,"app-card",4),l.qZA(),l.BQk()),2&t){const t=n.ngIf;l.xp6(2),l.Q6J("ngForOf",t)}}function T(t,n){if(1&t&&(l.TgZ(0,"div",1),l.YNc(1,U,3,1,"ng-container",2),l.YNc(2,z,3,1,"ng-container",2),l.qZA()),2&t){const t=n.ngIf,e=l.oxw();l.xp6(1),l.Q6J("ngIf",e.getRecapCards(t)),l.xp6(1),l.Q6J("ngIf",e.getGiantCards(t))}}const Q=[{path:"",component:(()=>{class t{constructor(t){this._cardService=t}ngOnInit(){this.cards$=this._cardService.getUserCards()}getRecapCards(t){return t.filter(t=>t.recap)}getGiantCards(t){return t.filter(t=>!t.recap&&"giant"===t.size)}}return t.\u0275fac=function(n){return new(n||t)(l.Y36(u))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-dashboard"]],decls:2,vars:3,consts:[["class","dashboard-container",4,"ngIf"],[1,"dashboard-container"],[4,"ngIf"],["gdColumns","repeat(auto-fill, minmax(550px, 1fr))","gdColumns.lt-sm","1fr","gdGap","12px",1,"recap-card-container",2,"margin-bottom","12px"],[3,"card",4,"ngFor","ngForOf"],[3,"card"],["gdColumns","repeat(auto-fill, minmax(550px, 1fr))","gdColumns.lt-sm","1fr","gdGap","12px",1,"normal-card-container"]],template:function(t,n){1&t&&(l.YNc(0,T,3,2,"div",0),l.ALo(1,"async")),2&t&&l.Q6J("ngIf",l.lcZ(1,1,n.cards$))},directives:[r.O5,_.OY,_.O7,r.sg,y,$],pipes:[r.Ov],styles:["[_nghost-%COMP%]{display:block;overflow-x:hidden;overflow-y:auto}[_nghost-%COMP%]   .dashboard-container[_ngcontent-%COMP%]{height:calc(100vh - 126px)}[_nghost-%COMP%]   .dashboard-container[_ngcontent-%COMP%]   .normal-card-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .dashboard-container[_ngcontent-%COMP%]   .recap-card-container[_ngcontent-%COMP%]{padding:0 12px}"]}),t})()}];let J=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[h.Bz.forChild(Q)],h.Bz]}),t})(),Y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({providers:[u],imports:[[r.ez,J,i.m]]}),t})()}}]);