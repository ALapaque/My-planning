import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { AgendaContainerComponent } from './agenda-container.component';
import { AgendaComponent }          from './agenda-standard/agenda.component';

const routes: Routes = [
  {
    path: '',
    component: AgendaContainerComponent,
    children: [
      { path: '', component: AgendaComponent },
    ],
  },
];

@NgModule(
  {
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
  },
)
export class AgendaRouting {}
