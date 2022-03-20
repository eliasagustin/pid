import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjViewerComponent } from './obj-viewer.component';

describe('ObjViewerComponent', () => {
  let component: ObjViewerComponent;
  let fixture: ComponentFixture<ObjViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
