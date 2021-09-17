import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Team } from '../../../../../@shared/models/team.model';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})
export class TeamDetailsComponent implements OnInit {

  @Input() team!: Team;

  constructor(
    public dialogRef: NbDialogRef<TeamDetailsComponent>
  ) { }

  ngOnInit(): void {
  }

}
