import {Component} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';

export type ConfirmDialogResult = {
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

  public cancel(): void {
    this.dialogRef.close();
  }

  public submit(): void {
    this.dialogRef.close({confirmed: true});
  }
}
