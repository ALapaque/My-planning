import {Component, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AgendaHelperService} from '../../services/agenda-helper.service';

@Component({
  selector: 'app-agenda-settings',
  templateUrl: './agenda-settings.component.html',
  styleUrls: ['./agenda-settings.component.scss']
})
export class AgendaSettingsComponent implements OnInit {

  public form: FormGroup = new FormGroup({});

  constructor(
    public dialogRef: NbDialogRef<AgendaSettingsComponent>,
    private _agendaHelperService: AgendaHelperService,
  ) {
    this._initForm();
  }

  ngOnInit(): void {
  }

  submit(): void {
    this._agendaHelperService.startTime = this.form.value.viewSettings.startTime;
    this._agendaHelperService.endTime = this.form.value.viewSettings.endTime;
    this._agendaHelperService.timeSlotDisplayed = this.form.value.viewSettings.timeSlotDisplayed;
    this._agendaHelperService.firstDayDisplayed = this.form.value.viewSettings.firstDayDisplayed;

    this._agendaHelperService.ejsSchedule.refresh();
    this.dialogRef.close();
  }

  private _initForm(): void {
    this.form = new FormGroup({
      calendarsDisplayed: new FormGroup({
        calendars: new FormControl(null)
      }),
      viewSettings: new FormGroup({
        timeSlotDisplayed: new FormControl(this._agendaHelperService.timeSlotDisplayed, [Validators.required]),
        firstDayDisplayed: new FormControl(this._agendaHelperService.firstDayDisplayed, [Validators.required]),
        startTime: new FormControl(this._agendaHelperService.startTime, [Validators.required]),
        endTime: new FormControl(this._agendaHelperService.endTime, [Validators.required])
      })
    });
  }
}
