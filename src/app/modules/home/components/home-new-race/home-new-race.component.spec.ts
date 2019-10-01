import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewRaceComponent } from './home-new-race.component';

describe('HomeNewRaceComponent', () => {
  let component: HomeNewRaceComponent;
  let fixture: ComponentFixture<HomeNewRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeNewRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeNewRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
