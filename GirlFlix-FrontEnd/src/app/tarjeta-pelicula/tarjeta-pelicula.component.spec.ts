import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TarjetaPeliculaComponent } from './tarjeta-pelicula.component';
import { Router } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('TarjetaPeliculaComponent', () => {
  let component: TarjetaPeliculaComponent;
  let fixture: ComponentFixture<TarjetaPeliculaComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [TarjetaPeliculaComponent], 
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaPeliculaComponent);
    component = fixture.componentInstance;

    // Simula una película válida
    component.pelicula = {
      id: 1,
      titulo: "Taylor Swift: The Eras Tour",
      imagen: "assets/images/taylor.jpg",
      descripcion: "Concierto de la gira Eras Tour",
      like: false,
      favorito: false
    };

    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería mostrar el título de la película', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Taylor Swift: The Eras Tour');
  });

  it('debería renderizar la imagen', () => {
    const img = fixture.debugElement.query(By.css('img')).nativeElement as HTMLImageElement;
    expect(img.src).toContain('taylor.jpg');
    expect(img.alt).toContain('Taylor Swift: The Eras Tour');
  });

});
