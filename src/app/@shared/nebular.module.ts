import {NgModule} from '@angular/core';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {
  NbAccordionModule,
  NbActionsModule, NbBadgeModule, NbButtonGroupModule,
  NbButtonModule,
  NbCardModule, NbChatModule,
  NbCheckboxModule,
  NbContextMenuModule, NbDatepickerModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbPopoverModule, NbRadioModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule, NbSpinnerModule, NbStepperModule,
  NbTabsetModule, NbTagModule, NbTimepickerModule,
  NbToastrModule,
  NbToggleModule, NbTooltipModule,
  NbUserModule,
  NbWindowModule,
  NbWindowState,
} from '@nebular/theme';
import { ColorPickerModule } from 'ngx-color-picker';
import {NbDialogCustomService} from './services/nb-dialog-custom.service';

const nebularModule: Array<any> = [
  NbSidebarModule,
  NbLayoutModule,
  NbButtonModule,
  NbLayoutModule,
  NbIconModule,
  NbEvaIconsModule,
  NbUserModule,
  NbPopoverModule,
  NbSearchModule,
  NbCardModule,
  NbListModule,
  NbMenuModule,
  NbContextMenuModule,
  NbInputModule,
  NbFormFieldModule,
  NbCheckboxModule,
  NbActionsModule,
  NbSelectModule,
  NbTabsetModule,
  NbToggleModule,
  NbRouteTabsetModule,
  NbDatepickerModule,
  NbSpinnerModule,
  NbStepperModule,
  NbTimepickerModule,
  NbDatepickerModule,
  NbRadioModule,
  NbButtonGroupModule,
  NbChatModule,
  NbAccordionModule,
  NbBadgeModule,
  NbTooltipModule,
  NbTagModule,
  ColorPickerModule
];

@NgModule({
  declarations: [],
  imports: [
    ...nebularModule,
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbWindowModule.forRoot(
      {
        hasBackdrop: true,
        closeOnBackdropClick: false,
        closeOnEsc: true,
        initialState: NbWindowState.FULL_SCREEN,
      },
    ),
    NbDialogModule.forRoot(
      {
        hasBackdrop: true,
        closeOnBackdropClick: false,
        closeOnEsc: false,
        dialogClass: 'nebular-dialog'
      },
    ),
    NbDatepickerModule.forRoot(),
    NbTimepickerModule.forRoot()
  ],
  exports: [
    ...nebularModule,
    NbToastrModule,
    NbWindowModule,
  ],
  providers: [
    NbDialogCustomService,
  ]
})
export class NebularModule {
}
