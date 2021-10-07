import {Component} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

export interface ConfirmDialogResult {
  confirmed: boolean;
}

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {

  constructor(
    public dialogRef: NbDialogRef<ConfirmDialogComponent>
  ) {
  }

  cancel(): void {
    this.dialogRef.close();
  }

  submit(): void {
    this.dialogRef.close({confirmed: true});
  }
}
