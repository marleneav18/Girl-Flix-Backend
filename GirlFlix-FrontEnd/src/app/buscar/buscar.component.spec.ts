import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { By } from '@angular/platform-browser';
import { BuscarComponent } from './buscar.component';

@Component({
  selector: 'app-tarjeta-pelicula',
  template: '<div class="mock-tarjeta">{{ pelicula?.titulo }}</div>',
  standalone: true
})
class MockTarjetaPeliculaComponent {
  @Input() pelicula: any;
}

describe('BuscarComponent', () => {
  let component: BuscarComponent;
  let fixture: ComponentFixture<BuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarComponent, FormsModule, MockTarjetaPeliculaComponent] 
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crearse correctamente', () => {
    expect(component).toBeTruthy();
  });

// Test para verificar que el componente busque correctamente
it('debería filtrar películas que contengan "Taylor"', () => {
  component.terminoBusqueda = 'Taylor'; 
  fixture.detectChanges();

  const tarjetas = fixture.debugElement.queryAll(By.css('.mock-tarjeta'));
  expect(tarjetas.length).toBe(1);
  expect(tarjetas[0].nativeElement.textContent).toContain('Taylor Swift');
});

});
