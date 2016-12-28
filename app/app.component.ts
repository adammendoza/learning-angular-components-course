import {Component} from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <div class="demo-layout mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <app-header class="demo-header mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
        </app-header>
        <app-sidebar class="demo-drawer mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
        </app-sidebar>
        <main class="mdl-layout__content mdl-color--grey-100">
            <router-outlet></router-outlet>
        </main>
    </div>
  `
})
export class AppComponent {}
