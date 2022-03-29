import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDownloadsComponent } from './section-downloads.component';

describe('SectionDownloadsComponent', () => {
  let component: SectionDownloadsComponent;
  let fixture: ComponentFixture<SectionDownloadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDownloadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionDownloadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
