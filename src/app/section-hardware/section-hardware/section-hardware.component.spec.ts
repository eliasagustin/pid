import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHardwareComponent } from './section-hardware.component';

describe('SectionHardwareComponent', () => {
  let component: SectionHardwareComponent;
  let fixture: ComponentFixture<SectionHardwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionHardwareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHardwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
