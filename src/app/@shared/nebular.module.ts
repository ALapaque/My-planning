import { NgModule }         from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
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
  NbSidebarModule,
  NbTabsetModule,
  NbToastrModule,
  NbToggleModule,
  NbUserModule,
  NbWindowModule,
  NbWindowState,
} from '@nebular/theme';

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
  NbDatepickerModule
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
                },
              ),
              NbDatepickerModule.forRoot()
            ],
            exports: [
              ...nebularModule,
              NbToastrModule,
              NbWindowModule,
            ],
          })
export class NebularModule {
}
