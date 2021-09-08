import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCalendarSelectorComponent } from './agenda-calendar-selector.component';

describe('AgendaCalendarSelectorComponent', () => {
  let component: AgendaCalendarSelectorComponent;
  let fixture: ComponentFixture<AgendaCalendarSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaCalendarSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaCalendarSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
