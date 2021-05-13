import { NgModule }                from '@angular/core';
import { RouterModule, Routes }    from '@angular/router';
import { AgendaStandardComponent } from './agenda-standard/agenda-standard.component';
import { AgendaTimelineComponent } from './agenda-timeline/agenda-timeline.component';
import { AgendaComponent }         from './agenda.component';

const routes: Routes = [
  {
    path: '',
    component: AgendaComponent,
    children: [
      { path: '', redirectTo: 'standard', pathMatch: 'full' },
      { path: 'standard', component: AgendaStandardComponent },
      { path: 'timeline', component: AgendaTimelineComponent },
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
