import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../@shared/models/user.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: [ './user-card.component.scss' ]
})
export class UserCardComponent {
  @Input() user!: User;
  @Input() selectedUsers!: Array<User>;

  @Output() checkOnChange: EventEmitter<{ checked: boolean, data: User }> = new EventEmitter<{ checked: boolean; data: User }>();

  constructor() {
  }


  isChecked(): boolean {
    return this.selectedUsers.findIndex((u: User) => u.id === this.user.id) !== -1;
  }

  onCheckedChanged($event: boolean): void {
    this.checkOnChange.emit({ checked: $event, data: this.user });
  }
}
