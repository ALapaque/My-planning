import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  AgendaService,
  DayService,
  MonthAgendaService,
  MonthService,
  ScheduleAllModule,
  TimelineMonthService,
  TimelineViewsService,
  WeekService,
  WorkWeekService,
} from '@syncfusion/ej2-angular-schedule';
import { loadCldr, L10n, setCulture } from '@syncfusion/ej2-base';
import * as gregorian from 'cldr-data/main/fr-BE/ca-gregorian.json';
import * as numbers from 'cldr-data/main/fr-BE/numbers.json';
import * as timeZoneNames from 'cldr-data/main/fr-BE/timeZoneNames.json';
import * as numberingSystems from 'cldr-data/supplemental/numberingSystems.json';
import { SharedModule } from '../../@shared/shared.module';
import { AgendaToolbarComponent } from './@shared/components/agenda-toolbar/agenda-toolbar.component';
import { AgendaContainerComponent } from './agenda-container.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaRouting } from './agenda.routing';
import { EventFormComponent } from './@shared/components/forms/event-form/event-form.component';
import { AgendaSettingsComponent } from './@shared/components/agenda-settings/agenda-settings.component';
import { AgendaSettingsContentComponent } from './@shared/components/agenda-settings/agenda-settings-content/agenda-settings-content.component';
import { EventFormContentComponent } from './@shared/components/forms/event-form/event-form-content/event-form-content.component';
import { EventTemplateComponent } from './@shared/components/event-template/event-template.component';
import { EventDetailsComponent } from './@shared/components/event-details/event-details.component';
import { EventDetailsContentComponent } from './@shared/components/event-details/event-details-content/event-details-content.component';
import { EventDetailsHeaderComponent } from './@shared/components/event-details/event-details-header/event-details-header.component';
import { AgendaLabelComponent } from './@shared/components/agenda-label/agenda-label.component';
import { DocumentEditorComponent } from './@shared/components/document-editor/document-editor.component';
import {
  DocumentEditorAllModule,
  DocumentEditorContainerAllModule,
} from '@syncfusion/ej2-angular-documenteditor';
import { EventChatComponent } from './@shared/components/event-chat/event-chat.component';
import { AgendaSidebarComponent } from './@shared/components/agenda-sidebar/agenda-sidebar.component';
import { AgendaCalendarSelectorComponent } from './@shared/components/agenda-calendar-selector/agenda-calendar-selector.component';
import { AgendaCalendarBtnComponent } from './@shared/components/agenda-calendar-selector/agenda-calendar-btn/agenda-calendar-btn.component';
import { AgendaFormComponent } from './@shared/components/forms/agenda-form/agenda-form.component';
import { AgendaFormContentComponent } from './@shared/components/forms/agenda-form/agenda-form-content/agenda-form-content.component';
// @ts-ignore
import frVersion from '@syncfusion/ej2-locale/src/fr.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
L10n.load({
  'fr-FR': frVersion.fr,
  'fr-BE': frVersion.fr,
});
setCulture('fr-BE');

@NgModule({
  declarations: [
    AgendaContainerComponent,
    AgendaComponent,
    AgendaToolbarComponent,
    EventFormComponent,
    AgendaSettingsComponent,
    AgendaSettingsContentComponent,
    EventFormContentComponent,
    EventTemplateComponent,
    EventDetailsComponent,
    EventDetailsContentComponent,
    EventDetailsHeaderComponent,
    AgendaLabelComponent,
    DocumentEditorComponent,
    EventChatComponent,
    AgendaSidebarComponent,
    AgendaCalendarSelectorComponent,
    AgendaCalendarBtnComponent,
    AgendaFormComponent,
    AgendaFormContentComponent,
  ],
  imports: [
    CommonModule,
    AgendaRouting,
    ScheduleAllModule,
    SharedModule,
    DocumentEditorAllModule,
    DocumentEditorContainerAllModule,
  ],
  providers: [
    DayService,
    WeekService,
    WorkWeekService,
    MonthService,
    AgendaService,
    MonthAgendaService,
    TimelineViewsService,
    TimelineMonthService,
  ],
  exports: [
    AgendaLabelComponent,
    AgendaSidebarComponent
  ]
})
export class AgendaModule {
}
