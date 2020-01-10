import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackHouseComponent } from './feedback-house.component';

describe('FeedbackHouseComponent', () => {
  let component: FeedbackHouseComponent;
  let fixture: ComponentFixture<FeedbackHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
