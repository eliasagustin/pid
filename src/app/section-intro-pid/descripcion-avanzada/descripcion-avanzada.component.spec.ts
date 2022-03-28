import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescripcionAvanzadaComponent } from './descripcion-avanzada.component';

describe('DescripcionAvanzadaComponent', () => {
  let component: DescripcionAvanzadaComponent;
  let fixture: ComponentFixture<DescripcionAvanzadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescripcionAvanzadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescripcionAvanzadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
