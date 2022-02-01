import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDocComponent } from './section-doc.component';

describe('SectionDocComponent', () => {
  let component: SectionDocComponent;
  let fixture: ComponentFixture<SectionDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
