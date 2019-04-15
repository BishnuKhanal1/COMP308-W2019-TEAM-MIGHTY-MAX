import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSurveylistComponent } from './user-surveylist.component';

describe('UserSurveylistComponent', () => {
  let component: UserSurveylistComponent;
  let fixture: ComponentFixture<UserSurveylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSurveylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSurveylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
