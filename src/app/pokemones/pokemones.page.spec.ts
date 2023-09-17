import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonesPage } from './pokemones.page';

describe('PokemonesPage', () => {
  let component: PokemonesPage;
  let fixture: ComponentFixture<PokemonesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PokemonesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
