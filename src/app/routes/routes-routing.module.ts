import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';
import { environment } from '@env/environment';
// layout
import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutFullScreenComponent } from '../layout/fullscreen/fullscreen.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
// dashboard pages
import { DashboardComponent } from './dashboard/dashboard.component';
// passport pages
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
// single pages
import { CallbackComponent } from './callback/callback.component';
import { UserLockComponent } from './passport/lock/lock.component';
import { Exception403Component } from './exception/403.component';
import { Exception404Component } from './exception/404.component';
import { Exception500Component } from './exception/500.component';

=======
import { RouterModule, Routes } from '@angular/router';
import { environment } from '@env/environment';

import { LayoutDefaultComponent } from '../layout/default/default.component';
import { LayoutPassportComponent } from '../layout/passport/passport.component';
import { CallbackComponent } from './callback/callback.component';
import { Exception403Component } from './exception/403.component';
import { Exception404Component } from './exception/404.component';
import { Exception500Component } from './exception/500.component';
import { UserLockComponent } from './passport/lock/lock.component';
import { UserLoginComponent } from './passport/login/login.component';
import { UserRegisterResultComponent } from './passport/register-result/register-result.component';
import { UserRegisterComponent } from './passport/register/register.component';
import { RoutingGuard } from './routing-guard';

// layout
// dashboard pages
// passport pages
// single pages
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
<<<<<<< HEAD
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { title: '仪表盘', titleI18n: 'dashboard' } },
=======
    canActivate: [RoutingGuard],
    children: [
      { path: '', redirectTo: 'city', pathMatch: 'full' },
      { path: 'city', loadChildren: 'app/routes/features/city/city.module#CityModule' },
      { path: 'viewPoint', loadChildren: 'app/routes/features/viewPoint/viewPoint.module#ViewPointModule' },
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
      // 业务子模块
      // { path: 'widgets', loadChildren: './widgets/widgets.module#WidgetsModule' }
    ]
  },
  // 全屏布局
  // {
  //     path: 'fullscreen',
  //     component: LayoutFullScreenComponent,
  //     children: [
  //     ]
  // },
  // passport
  {
    path: 'passport',
    component: LayoutPassportComponent,
    children: [
      { path: 'login', component: UserLoginComponent, data: { title: '登录', titleI18n: 'pro-login' } },
      { path: 'register', component: UserRegisterComponent, data: { title: '注册', titleI18n: 'pro-register' } },
      { path: 'register-result', component: UserRegisterResultComponent, data: { title: '注册结果', titleI18n: 'pro-register-result' } }
    ]
  },
  // 单页不包裹Layout
  { path: 'callback/:type', component: CallbackComponent },
  { path: 'lock', component: UserLockComponent, data: { title: '锁屏', titleI18n: 'lock' } },
  { path: '403', component: Exception403Component },
  { path: '404', component: Exception404Component },
  { path: '500', component: Exception500Component },
<<<<<<< HEAD
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: environment.useHash })],
  exports: [RouterModule]
=======
  { path: '**', redirectTo: 'city' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: environment.useHash })],
  exports: [RouterModule],
  providers: [RoutingGuard]
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
})
export class RouteRoutingModule { }
