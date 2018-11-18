<<<<<<< HEAD
import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { APP_BASE_HREF } from '@angular/common';
import { setUpTestBed } from '@testing/common.spec';

import { AppComponent } from './app.component';

describe('Component: App', () => {
  setUpTestBed(<TestModuleMetadata>{
    declarations: [AppComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const comp = fixture.debugElement.componentInstance;
    expect(comp).toBeTruthy();
  });
=======
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to hydra-web!');
  }));
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
});
