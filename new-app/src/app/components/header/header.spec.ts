import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render logo and navigation links', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.logo')?.textContent).toContain('Bakery');
    expect(compiled.querySelectorAll('nav a').length).toBe(4);
    expect(compiled.querySelector('nav a')?.textContent).toContain('Home');
  });
});
