import {Component, Input, OnInit} from '@angular/core';
import {Agenda} from '../../../../../@shared/models/agenda.model';

@Component({
    selector: 'app-agenda-label',
    templateUrl: './agenda-label.component.html',
    styleUrls: ['./agenda-label.component.scss']
})
export class AgendaLabelComponent implements OnInit {

    @Input() agenda: Agenda;
    @Input() displayColor: boolean = true;

    constructor() {
    }

    ngOnInit(): void {
    }

}
