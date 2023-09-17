import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallePhotoPage } from './detalle-photo.page';

describe('DetallePhotoPage', () => {
  let component: DetallePhotoPage;
  let fixture: ComponentFixture<DetallePhotoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallePhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
