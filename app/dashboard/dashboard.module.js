System.register(['./../tabs/tabs.module', './../widget/widget.module', '@angular/core', './dashboard.component'], function(exports_1, context_1) {
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
    var tabs_module_1, widget_module_1, core_1, dashboard_component_1;
    var DashboardModule;
    return {
        setters:[
            function (tabs_module_1_1) {
                tabs_module_1 = tabs_module_1_1;
            },
            function (widget_module_1_1) {
                widget_module_1 = widget_module_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            DashboardModule = (function () {
                function DashboardModule() {
                }
                DashboardModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            widget_module_1.WidgetModule,
                            tabs_module_1.TabsModule
                        ],
                        declarations: [dashboard_component_1.DashboardComponent],
                        exports: [dashboard_component_1.DashboardComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DashboardModule);
                return DashboardModule;
            }());
            exports_1("DashboardModule", DashboardModule);
        }
    }
});
//# sourceMappingURL=dashboard.module.js.map