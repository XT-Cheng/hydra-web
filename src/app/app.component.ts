<<<<<<< HEAD
import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TitleService } from '@delon/theme';
import { VERSION as VERSION_ALAIN } from '@delon/theme';
import { VERSION as VERSION_ZORRO, NzModalService } from 'ng-zorro-antd';
=======
import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { SettingsService, TitleService } from '@delon/theme';
import { filter } from 'rxjs/operators';
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
<<<<<<< HEAD
  constructor(
    el: ElementRef,
    renderer: Renderer2,
    private router: Router,
    private titleSrv: TitleService,
    private modalSrv: NzModalService,
  ) {
    renderer.setAttribute(
      el.nativeElement,
      'ng-alain-version',
      VERSION_ALAIN.full,
    );
    renderer.setAttribute(
      el.nativeElement,
      'ng-zorro-version',
      VERSION_ZORRO.full,
    );
  }
=======
  @HostBinding('class.layout-fixed')
  get isFixed() {
    return this.settings.layout.fixed;
  }
  @HostBinding('class.layout-boxed')
  get isBoxed() {
    return this.settings.layout.boxed;
  }
  @HostBinding('class.aside-collapsed')
  get isCollapsed() {
    return this.settings.layout.collapsed;
  }

  constructor(
    private settings: SettingsService,
    private router: Router,
    private titleSrv: TitleService,
  ) {}
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b

  ngOnInit() {
    this.router.events
      .pipe(filter(evt => evt instanceof NavigationEnd))
<<<<<<< HEAD
      .subscribe(() => {
        this.titleSrv.setTitle();
        this.modalSrv.closeAll();
      });
=======
      .subscribe(() => this.titleSrv.setTitle());
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
  }
}
