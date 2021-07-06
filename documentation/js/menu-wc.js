'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">
                        <img alt="" class="img-responsive" data-type="compodoc-logo" data-src=images/logo.png> 
                    </a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Saisissez un texte"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Démarrage</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Vue d&#x27;ensemble
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dépendances
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AgendaModule.html" data-type="entity-link">AgendaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AgendaModule-c12fd2a335d73239d50bac1dcea018e9"' : 'data-target="#xs-components-links-module-AgendaModule-c12fd2a335d73239d50bac1dcea018e9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AgendaModule-c12fd2a335d73239d50bac1dcea018e9"' :
                                            'id="xs-components-links-module-AgendaModule-c12fd2a335d73239d50bac1dcea018e9"' }>
                                            <li class="link">
                                                <a href="components/AgendaComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AgendaComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AgendaContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AgendaContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AgendaToolbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AgendaToolbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AgendaModule-c12fd2a335d73239d50bac1dcea018e9"' : 'data-target="#xs-injectables-links-module-AgendaModule-c12fd2a335d73239d50bac1dcea018e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AgendaModule-c12fd2a335d73239d50bac1dcea018e9"' :
                                        'id="xs-injectables-links-module-AgendaModule-c12fd2a335d73239d50bac1dcea018e9"' }>
                                        <li class="link">
                                            <a href="injectables/AgendaHelperService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AgendaHelperService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/AgendaService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AgendaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AgendaRouting.html" data-type="entity-link">AgendaRouting</a>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationModule.html" data-type="entity-link">ApplicationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ApplicationModule-fe2728dab37d52e1da86419c4d3bee5c"' : 'data-target="#xs-components-links-module-ApplicationModule-fe2728dab37d52e1da86419c4d3bee5c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ApplicationModule-fe2728dab37d52e1da86419c4d3bee5c"' :
                                            'id="xs-components-links-module-ApplicationModule-fe2728dab37d52e1da86419c4d3bee5c"' }>
                                            <li class="link">
                                                <a href="components/LeftMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LeftMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TemplateComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ApplicationRouting.html" data-type="entity-link">ApplicationRouting</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-afac944e02b5603bd20e5c8207fd501b"' : 'data-target="#xs-components-links-module-AppModule-afac944e02b5603bd20e5c8207fd501b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-afac944e02b5603bd20e5c8207fd501b"' :
                                            'id="xs-components-links-module-AppModule-afac944e02b5603bd20e5c8207fd501b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRouting.html" data-type="entity-link">AppRouting</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link">AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthModule-075b6afd34206d9ea7c1e5407c46938a"' : 'data-target="#xs-components-links-module-AuthModule-075b6afd34206d9ea7c1e5407c46938a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthModule-075b6afd34206d9ea7c1e5407c46938a"' :
                                            'id="xs-components-links-module-AuthModule-075b6afd34206d9ea7c1e5407c46938a"' }>
                                            <li class="link">
                                                <a href="components/AuthComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegisterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RegisterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResetPasswordComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResetPasswordComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthRouting.html" data-type="entity-link">AuthRouting</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardModule.html" data-type="entity-link">DashboardModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardModule-9441a56de331233ef356f52cbfce4c21"' : 'data-target="#xs-components-links-module-DashboardModule-9441a56de331233ef356f52cbfce4c21"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardModule-9441a56de331233ef356f52cbfce4c21"' :
                                            'id="xs-components-links-module-DashboardModule-9441a56de331233ef356f52cbfce4c21"' }>
                                            <li class="link">
                                                <a href="components/DashboardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DashboardComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardRouting.html" data-type="entity-link">DashboardRouting</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomepageModule.html" data-type="entity-link">HomepageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomepageModule-8883c1647971ce77866e401e3f370b82"' : 'data-target="#xs-components-links-module-HomepageModule-8883c1647971ce77866e401e3f370b82"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomepageModule-8883c1647971ce77866e401e3f370b82"' :
                                            'id="xs-components-links-module-HomepageModule-8883c1647971ce77866e401e3f370b82"' }>
                                            <li class="link">
                                                <a href="components/FeaturesCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeaturesCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FeaturesContentComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FeaturesContentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderAppNameComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderAppNameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderGoToAppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderGoToAppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeroBannerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeroBannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomepageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomepageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SectionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SectionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HomepageModule-8883c1647971ce77866e401e3f370b82"' : 'data-target="#xs-injectables-links-module-HomepageModule-8883c1647971ce77866e401e3f370b82"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomepageModule-8883c1647971ce77866e401e3f370b82"' :
                                        'id="xs-injectables-links-module-HomepageModule-8883c1647971ce77866e401e3f370b82"' }>
                                        <li class="link">
                                            <a href="injectables/SectionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SectionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomepageRouting.html" data-type="entity-link">HomepageRouting</a>
                            </li>
                            <li class="link">
                                <a href="modules/NebularModule.html" data-type="entity-link">NebularModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsModule.html" data-type="entity-link">SettingsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SettingsModule-987a44823e48e4aa598963684545387d"' : 'data-target="#xs-components-links-module-SettingsModule-987a44823e48e4aa598963684545387d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SettingsModule-987a44823e48e4aa598963684545387d"' :
                                            'id="xs-components-links-module-SettingsModule-987a44823e48e4aa598963684545387d"' }>
                                            <li class="link">
                                                <a href="components/SettingsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SettingsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SettingsRouting.html" data-type="entity-link">SettingsRouting</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-4337c46ceab2301a213d184c30c03e6a"' : 'data-target="#xs-components-links-module-SharedModule-4337c46ceab2301a213d184c30c03e6a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Composants</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-4337c46ceab2301a213d184c30c03e6a"' :
                                            'id="xs-components-links-module-SharedModule-4337c46ceab2301a213d184c30c03e6a"' }>
                                            <li class="link">
                                                <a href="components/ConfirmDialogComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ConfirmDialogComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScrollToTopComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScrollToTopComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtHelper.html" data-type="entity-link">JwtHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/Section.html" data-type="entity-link">Section</a>
                            </li>
                            <li class="link">
                                <a href="classes/SectionCard.html" data-type="entity-link">SectionCard</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AgendaHelperService.html" data-type="entity-link">AgendaHelperService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AgendaService.html" data-type="entity-link">AgendaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link">AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SectionService.html" data-type="entity-link">SectionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Gardes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthenticatedGuardGuard.html" data-type="entity-link">AuthenticatedGuardGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Divers</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Alias de type</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Couverture de documentation</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});