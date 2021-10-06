import { AfterViewInit, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Team } from '../../../../../../@shared/models/team.model';
import { TeamService } from '../../../../../@shared/services/team.service';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: [ './team-form.component.scss' ]
})
export class TeamFormComponent implements AfterViewInit {
  @Input() team!: Team;
  form: FormGroup = new FormGroup({
    name: new FormControl(null, [ Validators.required ]),
    users: new FormControl([], [ Validators.minLength(1) ]),
  });

  constructor(
    public dialogRef: NbDialogRef<TeamFormComponent>,
    private _teamService: TeamService,
    private _toastrService: ToastrService,
    private _translateService: TranslateService,
  ) {
  }

  ngAfterViewInit(): void {
    this._initForm();
  }

  submit(): void {
    this._teamService.save(new Team({
      ...this.team,
      name: this.form.value.name,
      users: this.form.value.users,
    })).subscribe(
      (team: Team) => {
        if (!team) return this.dialogRef.close();
        this._toastrService.success(this._translateService.instant('APP.CONFIGURATION.TOASTR.SUCCESS.SAVE'));
        this.dialogRef.close(team);
      },
      () => this._toastrService.success(this._translateService.instant('APP.CONFIGURATION.TOASTR.ERRORS.SAVE')));
  }

  private _initForm(): void {
    this.form.patchValue({
      name: this.team.name,
      users: this.team.users
    });
  }

}
