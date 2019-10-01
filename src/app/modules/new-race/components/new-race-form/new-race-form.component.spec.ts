import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRaceFormComponent } from './new-race-form.component';

describe('NewRaceFormComponent', () => {
  let component: NewRaceFormComponent;
  let fixture: ComponentFixture<NewRaceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewRaceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRaceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
