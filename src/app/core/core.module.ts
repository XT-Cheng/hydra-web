<<<<<<< HEAD
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { throwIfAlreadyLoaded } from './module-import-guard';


@NgModule({
  providers: [
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
=======
import { NgReduxModule } from '@angular-redux/store';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { ErrorInterceptorService } from '@core/interceptor/error.interceptor.service';
import { IonicStorageModule } from '@ionic/storage';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { I18NService } from '@core/i18n/i18n.service';

const PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptorService,
    multi: true
},
I18NService
];

@NgModule({
  imports: [NgReduxModule, IonicStorageModule],
  providers: PROVIDERS
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
