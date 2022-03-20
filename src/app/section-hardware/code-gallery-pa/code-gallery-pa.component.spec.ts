import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeGalleryPaComponent } from './code-gallery-pa.component';

describe('CodeGalleryPaComponent', () => {
  let component: CodeGalleryPaComponent;
  let fixture: ComponentFixture<CodeGalleryPaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeGalleryPaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeGalleryPaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
