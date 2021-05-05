export class JwtHelper {
  public expired: boolean = true;
  public token: string = '';
  public isAuthenticated: boolean = false;

  constructor(jwtHelper?: Partial<JwtHelper>) {
    if (jwtHelper) {
      Object.assign(this, jwtHelper);
    } else {
      Object.create(this);
    }
  }
}
