import { Component, ViewChild, AfterViewInit, AfterContentInit, ContentChild, Type } from '@angular/core';
import {
  Router,
  NavigationEnd,
  RouteConfigLoadStart,
  NavigationError,
  ActivationEnd,
} from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { ScrollService, MenuService, SettingsService } from '@delon/theme';
import { EntityListComponent } from '../../routes/features/entity.list.component';
import { ComponentType } from '../../routes/features/entity.form.component';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'layout-default',
  templateUrl: './default.component.html',
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

  constructor(
    router: Router,
    scroll: ScrollService,
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
    // scroll to top in change page
    router.events.subscribe(evt => {
      if (!this.isFetching && evt instanceof RouteConfigLoadStart) {
        this.isFetching = true;
      }
      if (evt instanceof NavigationError) {
        this.isFetching = false;
        this._message.error(`无法加载${evt.url}路由`, { nzDuration: 1000 * 3 });
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
}
