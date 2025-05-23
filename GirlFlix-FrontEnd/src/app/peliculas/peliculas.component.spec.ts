import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PeliculasComponent } from './peliculas.component';

describe('PeliculasComponent', () => {
  let component: PeliculasComponent;
  let fixture: ComponentFixture<PeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeliculasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar todas las tarjetas de películas', () => {
    const tarjetas = fixture.debugElement.queryAll(By.css('.mock-tarjeta'));
    expect(tarjetas.length).toBe(component.peliculas.length);
  });
});
