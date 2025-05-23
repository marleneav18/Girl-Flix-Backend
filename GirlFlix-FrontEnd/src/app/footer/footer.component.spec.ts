import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //Verifica que el footer contenga la imagen del logo
  it('debería mostrar el logo con imagen en el footer', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.querySelector('p img');
    expect(img).toBeTruthy();
    expect(img?.getAttribute('src')).toBe('assets/images/logo.png');
    expect(img?.getAttribute('alt')).toBe('Logo');
  });
});
