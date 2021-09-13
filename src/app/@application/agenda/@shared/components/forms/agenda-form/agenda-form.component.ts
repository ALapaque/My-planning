import { AfterViewInit, Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { AuthService } from '../../../../../../@shared/services/auth.service';
import { AgendaService } from '../../../../../@shared/services/agenda.service';
import { SchedulerEvent } from '../../../models/scheduler-event.model';
import { Agenda } from '../../../../../../@shared/models/agenda.model';

@Component({
  selector: 'app-agenda-form',
  templateUrl: './agenda-form.component.html',
  styleUrls: [ './agenda-form.component.scss' ]
})
export class AgendaFormComponent implements AfterViewInit {
  @Input() public agenda!: Agenda | undefined;
  public form: FormGroup = new FormGroup({
    name: new FormControl('', [ Validators.required ]),
    color: new FormControl('#de5c08', [ Validators.required, Validators.pattern('^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$') ]),
    user: new FormControl(null, [ Validators.required ]),
    sharedUsers: new FormControl([]),
    sharedTeams: new FormControl([])
  });

  constructor(
    public dialogRef: NbDialogRef<AgendaFormComponent>,
    private _agendaService: AgendaService,
    private _authService: AuthService,
  ) {
  }

  ngAfterViewInit(): void {
    this._initForm();
  }

  submit(): void {
    this._agendaService.save(
      new Agenda({
        ...this.agenda,
        name: this.form.value.name,
        color: this.form.value.color,
        user: this.form.value.user,
        sharedUsers: this.form.value.sharedUsers,
        sharedTeams: this.form.value.sharedTeams
      })).subscribe(
      (agenda: Agenda) => this.dialogRef.close(agenda)
    );
  }

  private _initForm(): void {
    this.form.patchValue({
      name: this.agenda?.name ?? '',
      color: this.agenda?.color ?? '#de5c08',
      user: this._authService.user,
      sharedUsers: this.agenda?.sharedUsers ?? [],
      sharedTeams: this.agenda?.sharedTeams ?? []
    });
  }

}
