import {Component, OnInit} from '@angular/core';
import {User} from '../../../../@shared/models/user.model';
import {Observable} from 'rxjs';
import {UserService} from '../../../@shared/services/user.service';

@Component({
  selector: 'app-user-configuration-toolbar',
  templateUrl: './user-configuration-toolbar.component.html',
  styleUrls: ['./user-configuration-toolbar.component.scss']
})
export class UserConfigurationToolbarComponent implements OnInit {
  users$: Observable<Array<User>>;

  constructor(
    private _userService: UserService,
  ) {
  }

  ngOnInit(): void {
    this.users$ = this._userService.getUsers();
  }

}
