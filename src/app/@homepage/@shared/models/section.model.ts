export class Section {
  public id: number = 0;
  public title: string = '';
  public anchor: string = '';
  public component: any;

  constructor(section?: Partial<Section>) {
    if (section) {
      Object.assign(this, section);
    } else {
      Object.create(this);
    }
  }
}
