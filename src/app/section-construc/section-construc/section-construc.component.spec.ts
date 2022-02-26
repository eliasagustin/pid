import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionConstrucComponent } from './section-construc.component';

describe('SectionConstrucComponent', () => {
  let component: SectionConstrucComponent;
  let fixture: ComponentFixture<SectionConstrucComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionConstrucComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionConstrucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
