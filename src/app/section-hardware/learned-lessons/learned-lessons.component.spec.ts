import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnedLessonsComponent } from './learned-lessons.component';

describe('LearnedLessonsComponent', () => {
  let component: LearnedLessonsComponent;
  let fixture: ComponentFixture<LearnedLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnedLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnedLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
