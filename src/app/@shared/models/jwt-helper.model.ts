export class JwtHelper {
  private _expired: boolean = true;
  private _token: string = '';
  private _isAuthenticated: boolean = false;

  constructor(jwtHelper?: Partial<JwtHelper>) {
    if (jwtHelper) {
      Object.assign(this, jwtHelper);
    } else {
      Object.create(this);
    }
  }

  public get expired(): boolean {
    return this._expired;
  }

  public set expired(value: boolean) {
    this._expired = value;
  }

  public get token(): string {
    return this._token;
  }

  public set token(value: string) {
    this._token = value;
  }

  public get isAuthenticated(): boolean {
    return this._isAuthenticated;
  }

  public set isAuthenticated(value: boolean) {
    this._isAuthenticated = value;
  }
}
