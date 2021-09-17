import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompareStateMatcher } from '../../../../../../../@shared/helpers/matchers/compare-state-matcher';
import { ErrorStateMatcher } from '../../../../../../../@shared/helpers/matchers/error-state-matcher';
import { Role } from '../../../../../../../@shared/models/role.model';
import { Team } from '../../../../../../../@shared/models/team.model';
import { User } from '../../../../../../../@shared/models/user.model';
import { RoleService } from '../../../../../../@shared/services/role.service';
import { TeamService } from '../../../../../../@shared/services/team.service';

@Component({
  selector: 'app-user-form-content',
  templateUrl: './user-form-content.component.html',
  styleUrls: [ './user-form-content.component.scss' ]
})
export class UserFormContentComponent implements OnInit {
  @Input() user!: User;
  @Input() form!: FormGroup;

  roles$: Observable<Array<Role>>;
  teams$: Observable<Array<Team>>;

  compareFn = (o1: any, o2: any) => CompareStateMatcher.compareWith(o1, o2);

  constructor(
    private _roleService: RoleService,
    private _teamService: TeamService,
  ) {
  }

  ngOnInit(): void {
    this.roles$ = this._roleService.getRoles();
    this.teams$ = this._teamService.getUsersTeams();
  }

  checkFieldForError(fieldName: string): boolean | undefined {
    return ErrorStateMatcher.checkField(fieldName, this.form);
  }

}
