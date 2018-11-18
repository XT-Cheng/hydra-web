<<<<<<< HEAD
import {
  Component,
  ViewChild,
  ComponentFactoryResolver,
  ViewContainerRef,
  AfterViewInit,
  OnInit,
  OnDestroy,
  ElementRef,
  Renderer2,
  Inject,
} from '@angular/core';
=======
import { Component, ViewChild, AfterViewInit, AfterContentInit, ContentChild, Type } from '@angular/core';
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
import {
  Router,
  NavigationEnd,
  RouteConfigLoadStart,
  NavigationError,
<<<<<<< HEAD
  NavigationCancel,
} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { ScrollService, MenuService, SettingsService } from '@delon/theme';

import { environment } from '@env/environment';
import { SettingDrawerComponent } from './setting-drawer/setting-drawer.component';
import { Subscription } from 'rxjs';
import { updateHostClass } from '@delon/util';
import { DOCUMENT } from '@angular/common';
=======
  ActivationEnd,
} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { ScrollService, MenuService, SettingsService } from '@delon/theme';
import { EntityListComponent } from '../../routes/features/entity.list.component';
import { ComponentType } from '../../routes/features/entity.form.component';
import { filter, map } from 'rxjs/operators';
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b

@Component({
  selector: 'layout-default',
  templateUrl: './default.component.html',
<<<<<<< HEAD
  preserveWhitespaces: false,
  host: {
    '[class.alain-default]': 'true',
  },
})
export class LayoutDefaultComponent
  implements OnInit, AfterViewInit, OnDestroy {
  private notify$: Subscription;
  isFetching = false;
  @ViewChild('settingHost', { read: ViewContainerRef })
  settingHost: ViewContainerRef;
=======
})
export class LayoutDefaultComponent {
  entityListComp: ComponentType;

  onActivate(componentRef): void {
    if (componentRef instanceof EntityListComponent) {
      this.entityListComp = componentRef;
      this.entityListComp.layoutComp = this;
    }
  }

  newEntity() {
    if (this.entityListComp)
      this.entityListComp.createEntity();
  }

  isFetching = false;
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b

  constructor(
    router: Router,
    scroll: ScrollService,
<<<<<<< HEAD
    _message: NzMessageService,
    private resolver: ComponentFactoryResolver,
    public menuSrv: MenuService,
    public settings: SettingsService,
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private doc: any,
  ) {
=======
    private _message: NzMessageService,
    public menuSrv: MenuService,
    public settings: SettingsService,
  ) {
    // router.events.pipe(
    //   filter(evt => evt instanceof ActivationEnd),
    //   filter(evt => (<ActivationEnd>evt).snapshot.component instanceof EntityListComponent),
    //   map(evt => {
    //     return <Type<any>>(<ActivationEnd>evt).snapshot.component;
    //   })
    // ).subscribe(cmpType => this.entityListComp  = new cmpType());
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
    // scroll to top in change page
    router.events.subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
      }
<<<<<<< HEAD
      if (evt instanceof NavigationError || evt instanceof NavigationCancel) {
        this.isFetching = false;
        if (evt instanceof NavigationError) {
          _message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
        }
=======
      if (evt instanceof NavigationError) {
        this.isFetching = false;
        this._message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
        return;
      }
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      setTimeout(() => {
        scroll.scrollToTop();
        this.isFetching = false;
      }, 100);
    });
  }
<<<<<<< HEAD

  private setClass() {
    const { el, renderer, settings } = this;
    const layout = settings.layout;
    updateHostClass(
      el.nativeElement,
      renderer,
      {
        ['alain-default']: true,
        [`alain-default__fixed`]: layout.fixed,
        [`alain-default__boxed`]: layout.boxed,
        [`alain-default__collapsed`]: layout.collapsed,
      },
      true,
    );

    this.doc.body.classList[layout.colorWeak ? 'add' : 'remove']('color-weak');
  }

  ngAfterViewInit(): void {
    // Setting componet for only developer
    if (!environment.production) {
      setTimeout(() => {
        const settingFactory = this.resolver.resolveComponentFactory(
          SettingDrawerComponent,
        );
        this.settingHost.createComponent(settingFactory);
      }, 22);
    }
  }

  ngOnInit() {
    this.notify$ = this.settings.notify.subscribe(() => this.setClass());
    this.setClass();
  }

  ngOnDestroy() {
    this.notify$.unsubscribe();
  }
=======
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
}
