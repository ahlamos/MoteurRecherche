import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdzComponent } from './adz.component';

describe('AdzComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AdzComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AdzComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'moteurRecherche'`, () => {
    const fixture = TestBed.createComponent(AdzComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('moteurRecherche');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AdzComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to moteurRecherche!');
  });
});
