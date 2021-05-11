(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["agenda-agenda-module"],{

/***/ "HyB/":
/*!*********************************************************!*\
  !*** ./src/app/@application/agenda/agenda.component.ts ***!
  \*********************************************************/
/*! exports provided: AgendaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaComponent", function() { return AgendaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AgendaComponent {
    constructor() { }
    ngOnInit() {
    }
}
AgendaComponent.ɵfac = function AgendaComponent_Factory(t) { return new (t || AgendaComponent)(); };
AgendaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AgendaComponent, selectors: [["app-agenda"]], decls: 2, vars: 0, template: function AgendaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "agenda works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZ2VuZGEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "et8b":
/*!******************************************************!*\
  !*** ./src/app/@application/agenda/agenda.module.ts ***!
  \******************************************************/
/*! exports provided: AgendaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgendaModule", function() { return AgendaModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _agenda_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./agenda.component */ "HyB/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class AgendaModule {
}
AgendaModule.ɵfac = function AgendaModule_Factory(t) { return new (t || AgendaModule)(); };
AgendaModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AgendaModule });
AgendaModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AgendaModule, { declarations: [_agenda_component__WEBPACK_IMPORTED_MODULE_1__["AgendaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=agenda-agenda-module.js.map