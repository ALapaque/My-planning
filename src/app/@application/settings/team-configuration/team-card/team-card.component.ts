import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Team } from '../../../../@shared/models/team.model';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: [ './team-card.component.scss' ]
})
export class TeamCardComponent {
  @Input() team!: Team;
  @Input() selectedTeams!: Array<Team>;

  @Output() checkOnChange: EventEmitter<{ checked: boolean, data: Team }> = new EventEmitter<{ checked: boolean; data: Team }>();

  constructor() {
  }

  isChecked(): boolean {
    return this.selectedTeams.findIndex((t: Team) => t.id === this.team.id) !== -1;
  }

  onCheckedChanged($event: boolean): void {
    this.checkOnChange.emit({ checked: $event, data: this.team });
  }
}
