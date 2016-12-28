System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent() {
                }
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard',
                        template: "\n    <div class=\"mdl-grid demo-content\">\n        <div class=\"demo-charts mdl-color--white mdl-shadow--2dp mdl-cell mdl-cell--12-col mdl-grid\">\n            <svg fill=\"currentColor\" width=\"200px\" height=\"200px\" viewBox=\"0 0 1 1\" class=\"demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop\">\n                <use xlink:href=\"#piechart\" mask=\"url(#piemask)\" />\n                <text x=\"0.5\" y=\"0.5\" font-family=\"Roboto\" font-size=\"0.3\" fill=\"#888\" text-anchor=\"middle\" dy=\"0.1\">82\n                    <tspan font-size=\"0.2\" dy=\"-0.07\">%</tspan>\n                </text>\n            </svg>\n            <svg fill=\"currentColor\" width=\"200px\" height=\"200px\" viewBox=\"0 0 1 1\" class=\"demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop\">\n                <use xlink:href=\"#piechart\" mask=\"url(#piemask)\" />\n                <text x=\"0.5\" y=\"0.5\" font-family=\"Roboto\" font-size=\"0.3\" fill=\"#888\" text-anchor=\"middle\" dy=\"0.1\">82\n                    <tspan dy=\"-0.07\" font-size=\"0.2\">%</tspan>\n                </text>\n            </svg>\n            <svg fill=\"currentColor\" width=\"200px\" height=\"200px\" viewBox=\"0 0 1 1\" class=\"demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop\">\n                <use xlink:href=\"#piechart\" mask=\"url(#piemask)\" />\n                <text x=\"0.5\" y=\"0.5\" font-family=\"Roboto\" font-size=\"0.3\" fill=\"#888\" text-anchor=\"middle\" dy=\"0.1\">82\n                    <tspan dy=\"-0.07\" font-size=\"0.2\">%</tspan>\n                </text>\n            </svg>\n            <svg fill=\"currentColor\" width=\"200px\" height=\"200px\" viewBox=\"0 0 1 1\" class=\"demo-chart mdl-cell mdl-cell--4-col mdl-cell--3-col-desktop\">\n                <use xlink:href=\"#piechart\" mask=\"url(#piemask)\" />\n                <text x=\"0.5\" y=\"0.5\" font-family=\"Roboto\" font-size=\"0.3\" fill=\"#888\" text-anchor=\"middle\" dy=\"0.1\">82\n                    <tspan dy=\"-0.07\" font-size=\"0.2\">%</tspan>\n                </text>\n            </svg>\n        </div>\n        <div class=\"demo-graphs mdl-shadow--2dp mdl-color--white mdl-cell mdl-cell--8-col\">\n            <svg fill=\"currentColor\" viewBox=\"0 0 500 250\" class=\"demo-graph\">\n                <use xlink:href=\"#chart\" />\n            </svg>\n            <svg fill=\"currentColor\" viewBox=\"0 0 500 250\" class=\"demo-graph\">\n                <use xlink:href=\"#chart\" />\n            </svg>\n        </div>\n        <div class=\"demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing\">\n            <div class=\"demo-updates mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-tablet mdl-cell--12-col-desktop\">\n                <div class=\"mdl-card__title mdl-card--expand mdl-color--teal-300\">\n                    <h2 class=\"mdl-card__title-text\">Updates</h2>\n                </div>\n                <div class=\"mdl-card__supporting-text mdl-color-text--grey-600\">\n                    Non dolore elit adipisicing ea reprehenderit consectetur culpa.\n                </div>\n                <div class=\"mdl-card__actions mdl-card--border\">\n                    <a href=\"#\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect\">Read More</a>\n                </div>\n            </div>\n            <div class=\"demo-separator mdl-cell--1-col\"></div>\n            <div class=\"demo-options mdl-card mdl-color--deep-purple-500 mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--12-col-desktop\">\n                <div class=\"mdl-card__supporting-text mdl-color-text--blue-grey-50\">\n                    <h3>View options</h3>\n                    <ul>\n                        <li>\n                            <label for=\"chkbox1\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                                <input type=\"checkbox\" id=\"chkbox1\" class=\"mdl-checkbox__input\">\n                                <span class=\"mdl-checkbox__label\">Click per object</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label for=\"chkbox2\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                                <input type=\"checkbox\" id=\"chkbox2\" class=\"mdl-checkbox__input\">\n                                <span class=\"mdl-checkbox__label\">Views per object</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label for=\"chkbox3\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                                <input type=\"checkbox\" id=\"chkbox3\" class=\"mdl-checkbox__input\">\n                                <span class=\"mdl-checkbox__label\">Objects selected</span>\n                            </label>\n                        </li>\n                        <li>\n                            <label for=\"chkbox4\" class=\"mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect\">\n                                <input type=\"checkbox\" id=\"chkbox4\" class=\"mdl-checkbox__input\">\n                                <span class=\"mdl-checkbox__label\">Objects viewed</span>\n                            </label>\n                        </li>\n                    </ul>\n                </div>\n                <div class=\"mdl-card__actions mdl-card--border\">\n                    <a href=\"#\" class=\"mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--blue-grey-50\">Change location</a>\n                    <div class=\"mdl-layout-spacer\"></div>\n                    <i class=\"material-icons\">location_on</i>\n                </div>\n            </div>\n        </div>\n    </div>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" version=\"1.1\" style=\"position: fixed; left: -1000px; height: -1000px;\">\n        <defs>\n            <mask id=\"piemask\" maskContentUnits=\"objectBoundingBox\">\n                <circle cx=0.5 cy=0.5 r=0.49 fill=\"white\" />\n                <circle cx=0.5 cy=0.5 r=0.40 fill=\"black\" />\n            </mask>\n            <g id=\"piechart\">\n                <circle cx=0.5 cy=0.5 r=0.5 />\n                <path d=\"M 0.5 0.5 0.5 0 A 0.5 0.5 0 0 1 0.95 0.28 z\" stroke=\"none\" fill=\"rgba(255, 255, 255, 0.75)\" />\n            </g>\n        </defs>\n    </svg>\n    <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 500 250\" style=\"position: fixed; left: -1000px; height: -1000px;\">\n        <defs>\n            <g id=\"chart\">\n                <g id=\"Gridlines\">\n                    <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"27.3\" x2=\"468.3\" y2=\"27.3\" />\n                    <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"66.7\" x2=\"468.3\" y2=\"66.7\" />\n                    <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"105.3\" x2=\"468.3\" y2=\"105.3\" />\n                    <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"144.7\" x2=\"468.3\" y2=\"144.7\" />\n                    <line fill=\"#888888\" stroke=\"#888888\" stroke-miterlimit=\"10\" x1=\"0\" y1=\"184.3\" x2=\"468.3\" y2=\"184.3\" />\n                </g>\n                <g id=\"Numbers\">\n                    <text transform=\"matrix(1 0 0 1 485 29.3333)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">500</text>\n                    <text transform=\"matrix(1 0 0 1 485 69)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">400</text>\n                    <text transform=\"matrix(1 0 0 1 485 109.3333)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">300</text>\n                    <text transform=\"matrix(1 0 0 1 485 149)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">200</text>\n                    <text transform=\"matrix(1 0 0 1 485 188.3333)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">100</text>\n                    <text transform=\"matrix(1 0 0 1 0 249.0003)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">1</text>\n                    <text transform=\"matrix(1 0 0 1 78 249.0003)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">2</text>\n                    <text transform=\"matrix(1 0 0 1 154.6667 249.0003)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">3</text>\n                    <text transform=\"matrix(1 0 0 1 232.1667 249.0003)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">4</text>\n                    <text transform=\"matrix(1 0 0 1 309 249.0003)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">5</text>\n                    <text transform=\"matrix(1 0 0 1 386.6667 249.0003)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">6</text>\n                    <text transform=\"matrix(1 0 0 1 464.3333 249.0003)\" fill=\"#888888\" font-family=\"'Roboto'\" font-size=\"9\">7</text>\n                </g>\n                <g id=\"Layer_5\">\n                    <polygon opacity=\"0.36\" stroke-miterlimit=\"10\" points=\"0,223.3 48,138.5 154.7,169 211,88.5, 294.5,80.5 380,165.2 437,75.5 469.5,223.3\" />\n                </g>\n                <g id=\"Layer_4\">\n                    <polygon stroke-miterlimit=\"10\" points=\"469.3,222.7 1,222.7 48.7,166.7 155.7,188.3 212,132.7, 296.7,128 380.7,184.3 436.7,125\" />\n                </g>\n            </g>\n        </defs>\n    </svg>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map