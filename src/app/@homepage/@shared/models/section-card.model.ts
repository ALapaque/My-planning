export class SectionCard {
  private _img: string = '';
  private _title: string = '';
  private _description: string = '';

  constructor(sectionCard?: Partial<SectionCard>) {
    if (sectionCard) {
      Object.assign(this, sectionCard);
    } else {
      Object.create(this);
    }
  }

  public get img(): string {
    return this._img;
  }

  public set img(value: string) {
    this._img = value;
  }

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = value;
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
  }
}
