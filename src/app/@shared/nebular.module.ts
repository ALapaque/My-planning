import { NgModule }         from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NB_SELECT_INJECTION_TOKEN,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbContextMenuModule, NbDialogModule,
  NbFormFieldModule,
  NbGlobalLogicalPosition,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbPopoverModule, NbRouteTabsetModule,
  NbSearchModule, NbSelectModule,
  NbSidebarModule, NbTabsetModule,
  NbToastrModule,
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
  NbRouteTabsetModule,
];

@NgModule({
            declarations: [],
            imports: [
              ...nebularModule,
              NbMenuModule.forRoot(),
              NbSidebarModule.forRoot(),
              NbToastrModule.forRoot(
                {
                  destroyByClick: true,
                  status: 'primary',
                  position: NbGlobalLogicalPosition.BOTTOM_START,
                  limit: 5,
                  preventDuplicates: true,
                },
              ),
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
            ],
            exports: [
              ...nebularModule,
              NbToastrModule,
              NbWindowModule,
            ],
          })
export class NebularModule {
}
