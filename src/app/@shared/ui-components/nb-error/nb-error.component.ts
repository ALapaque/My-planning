import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'nb-error',
  templateUrl: './nb-error.component.html',
  styleUrls: ['./nb-error.component.scss']
})
export class NbErrorComponent implements OnInit {

  @Input() control: AbstractControl | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
