import { Component, OnInit } from '@angular/core';
import { Location }          from '@angular/common';

@Component({
             selector: 'app-login',
             templateUrl: './login.component.html',
             styleUrls: [ './login.component.scss' ],
           })
export class LoginComponent implements OnInit {

  constructor(
    private _location: Location,
  ) {
  }

  ngOnInit(): void {
  }

  public navigatePrevious(): void {
    this._location.back();
  }
}
