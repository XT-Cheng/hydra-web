<<<<<<< HEAD
import { NgModule, LOCALE_ID, APP_INITIALIZER, Injector } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// #region default language
// 参考：https://ng-alain.com/docs/i18n
import { default as ngLang } from '@angular/common/locales/en';
import { NZ_I18N, en_US as zorroLang } from 'ng-zorro-antd';
import { DELON_LOCALE, en_US as delonLang } from '@delon/theme';
const LANG = {
  abbr: 'en',
  ng: ngLang,
  zorro: zorroLang,
  delon: delonLang,
};
// register angular
import { registerLocaleData } from '@angular/common';
registerLocaleData(LANG.ng, LANG.abbr);
const LANG_PROVIDES = [
  { provide: LOCALE_ID, useValue: LANG.abbr },
  { provide: NZ_I18N, useValue: LANG.zorro },
  { provide: DELON_LOCALE, useValue: LANG.delon },
];
// #endregion

// #region i18n services
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ALAIN_I18N_TOKEN } from '@delon/theme';
import { I18NService } from '@core/i18n/i18n.service';

// 加载i18n语言文件
export function I18nHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/tmp/i18n/`, '.json');
}

const I18NSERVICE_MODULES = [
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: I18nHttpLoaderFactory,
      deps: [HttpClient],
    },
  }),
];

const I18NSERVICE_PROVIDES = [
  { provide: ALAIN_I18N_TOKEN, useClass: I18NService, multi: false },
];

// #endregion


// #region JSON Schema form (using @delon/form)
import { JsonSchemaModule } from '@shared/json-schema/json-schema.module';
const FORM_MODULES = [JsonSchemaModule];
// #endregion


// #region Http Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SimpleInterceptor } from '@delon/auth';
import { DefaultInterceptor } from '@core/net/default.interceptor';
const INTERCEPTOR_PROVIDES = [
  // { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
];
// #endregion

// #region global third module
const GLOBAL_THIRD_MDOULES = [
];
// #endregion

// #region Startup Service
import { StartupService } from '@core/startup/startup.service';
export function StartupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}
const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true
  }
];
// #endregion

import { DelonModule } from './delon.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';
import { FetchService } from '@core/hydra/fetch.service';
=======
import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import localeZhHans from '@angular/common/locales/zh-Hans';
import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from '@core/auth/auth.module';
import { StartupService } from '@core/startup/startup.service';
import { StoreModule } from '@core/store/store.module';
import { IonicStorageModule } from '@ionic/storage';
import { JsonSchemaModule } from '@shared/json-schema/json-schema.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { DelonModule } from './delon.module';
import { LayoutModule } from './layout/layout.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// angular i18n
registerLocaleData(localeZhHans);

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, `assets/tmp/i18n/`, '.json');
}

// @delon/form: JSON Schema form
export function StartupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    DelonModule.forRoot(),
    CoreModule,
    SharedModule,
    LayoutModule,
    RoutesModule,
<<<<<<< HEAD
    ...I18NSERVICE_MODULES,
    ...FORM_MODULES,
    ...GLOBAL_THIRD_MDOULES
  ],
  providers: [
    ...LANG_PROVIDES,
    ...INTERCEPTOR_PROVIDES,
    ...I18NSERVICE_PROVIDES,
    ...APPINIT_PROVIDES,
    FetchService
=======
    // JSON-Schema form
    JsonSchemaModule,
    // Brick Travel Modules
    StoreModule.forRoot(),
    AuthModule.forRoot(),
    IonicStorageModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'zh-Hans' },
    // { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
    // { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true },
    StartupService,
    {
      provide: APP_INITIALIZER,
      useFactory: StartupServiceFactory,
      deps: [StartupService],
      multi: true
    }
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
