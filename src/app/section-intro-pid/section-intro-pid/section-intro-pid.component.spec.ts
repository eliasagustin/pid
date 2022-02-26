import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionIntroPidComponent } from './section-intro-pid.component';

describe('SectionIntroPidComponent', () => {
  let component: SectionIntroPidComponent;
  let fixture: ComponentFixture<SectionIntroPidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionIntroPidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionIntroPidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
