import {NgModule} from '@angular/core';
import {NbEvaIconsModule} from '@nebular/eva-icons';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule, NbDatepickerModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbPopoverModule,
  NbRouteTabsetModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule, NbSpinnerModule, NbStepperModule,
  NbTabsetModule, NbTimepickerModule,
  NbToastrModule,
  NbToggleModule,
  NbUserModule,
  NbWindowModule,
  NbWindowState,
} from '@nebular/theme';
import {NbDialogCustomService} from './services/nb-dialog-custom.service';

const nebularModule = [
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
