import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Team } from '../../../@shared/models/team.model';
import { User } from '../../../@shared/models/user.model';
import { AuthService } from '../../../@shared/services/auth.service';
import { NbDialogCustomService } from '../../../@shared/services/nb-dialog-custom.service';
import { ConfirmDialogComponent } from '../../../@shared/ui-components/confirm-dialog/confirm-dialog.component';
import { UserDetailsComponent } from '../../@shared/components/user-details/user-details.component';
import { TeamService } from '../../@shared/services/team.service';
import { UserService } from '../../@shared/services/user.service';

@Component({
  selector: 'app-team-configuration',
  templateUrl: './team-configuration.component.html',
  styleUrls: [ './team-configuration.component.scss' ]
})
export class TeamConfigurationComponent implements OnInit {
  teams$: Observable<Array<Team>>;
  selectedTeams: Array<Team> = new Array<Team>();

  constructor(
    private _teamService: TeamService,
    private _nbDialogService: NbDialogService,
    private _nbDialogCustomService: NbDialogCustomService,
    private _toastrService: ToastrService,
    private _translateService: TranslateService,
    private _authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    this._refreshTeams();
  }

  details(): void {
    this._teamService
      .getTeam(this.selectedTeams[0].id)
      .pipe(
        tap((teamComplete: Team) => {
          this._nbDialogService
            .open(UserDetailsComponent,
              {
                context: {
                  // @ts-ignore
                  team: teamComplete,
                },
                dialogClass: this._nbDialogCustomService.isFullscreen,
                closeOnEsc: true,
                closeOnBackdropClick: true
              });
        })
      )
      .subscribe();

  }

  addOrEdit(): void {

  }

  delete(): void {
    this._nbDialogService
      .open(ConfirmDialogComponent,
        { dialogClass: this._nbDialogCustomService.isFullscreen })
      .onClose
      .subscribe((result: { confirmed: boolean }) => {
        if (!result.confirmed) return;
        this._teamService
          .delete(this.selectedTeams[0])
          .subscribe(
            (deleted: boolean) => {
              if (deleted) {
                this._toastrService.success(this._translateService.instant('APP.CONFIGURATION.TOASTR.SUCCESS.DELETE'));
              }
              this._refreshTeams();
            },
            () => this._toastrService.error(this._translateService.instant('APP.CONFIGURATION.TOASTR.ERROR.DELETE'))
          );
      });
  }

  onCheckedChange($event: { checked: boolean; data: Team }): void {
    const index: number = this.selectedTeams.findIndex((t: Team) => t.id === $event.data.id);

    if (index !== -1 && !$event.checked) {
      this.selectedTeams.splice(index, 1);
    } else {
      this.selectedTeams.push($event.data);
    }
  }


  private _refreshTeams(): void {
    this.teams$ = this._teamService.getUsersTeams();
  }
}
