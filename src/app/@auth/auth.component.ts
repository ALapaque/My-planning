import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: '' +
    '<nb-layout>' +
    '  <nb-layout-column>' +
    '    <router-outlet></router-outlet>' +
    '  </nb-layout-column>' +
    '</nb-layout>',
  styleUrls: [ './auth.component.scss']
})
export class AuthComponent {
}
