import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { User } from '../../../../@shared/models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() user!: User;

  constructor(
    public dialogRef: NbDialogRef<UserDetailsComponent>,
  ) { }

  ngOnInit(): void {
  }

}
