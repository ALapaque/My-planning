import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaFormContentComponent } from './agenda-form-content.component';

describe('AgendaFormContentComponent', () => {
  let component: AgendaFormContentComponent;
  let fixture: ComponentFixture<AgendaFormContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaFormContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
