<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// delon
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';

// region: third libs
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';
import { TranslateModule } from '@ngx-translate/core';
import { MachineSummaryComponent } from './copmonents/charts/machine.summary.component';
import { DelonChartModule } from '@delon/chart';
import { ChartCardComponent } from './copmonents/card.component';
import { ChartGaugeComponent } from './copmonents/gauge.component';
import { ChartTrendComponent } from './copmonents/trend.component';
import { ChartBarLineComponent } from './copmonents/barLine.component';
const THIRDMODULES = [
  NgZorroAntdModule,
  CountdownModule,
  TranslateModule
=======
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { AlainThemeModule } from '@delon/theme';
import { AMapComponent } from '@shared/components/a-map/a-map.component';
import { InformationWindowComponent } from '@shared/components/a-map/information-window/information-window.component';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { AutofocusDirective } from '@shared/directives/autofocus.directive';
import { DragulaDirective } from '@shared/directives/dragula.directive';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CountdownModule } from 'ngx-countdown';
import { RateComponent } from '@shared/components/a-map/rate/rate.component';
import { ViewPointMarkerComponent } from '@shared/components/a-map/viewpoint-marker/viewpoint-marker.component';
import { QuickMenuComponent } from '@shared/components/quick-menu.component';

// delon
// region: third libs
const THIRDMODULES = [
  NgZorroAntdModule,
  CountdownModule
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
];
// endregion

// region: your componets & directives
<<<<<<< HEAD
const COMPONENTS = [ChartBarLineComponent, ChartCardComponent, ChartTrendComponent, ChartGaugeComponent, MachineSummaryComponent];
const DIRECTIVES = [];
=======
const COMPONENTS = [
  ModalComponent,
  InformationWindowComponent,
  AMapComponent,
  RateComponent,
  ViewPointMarkerComponent,
  QuickMenuComponent
];
const DIRECTIVES = [AutofocusDirective, DragulaDirective];
const ENTRIES = [InformationWindowComponent, ViewPointMarkerComponent, ModalComponent];
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
// endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonABCModule,
<<<<<<< HEAD
    DelonChartModule,
=======
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
    DelonACLModule,
    DelonFormModule,
    // third libs
    ...THIRDMODULES
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES
  ],
<<<<<<< HEAD
=======
  entryComponents: [
    ...ENTRIES
  ],
>>>>>>> 8592e4e65730903d79297a1a874d06e6a8365b7b
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonABCModule,
    DelonACLModule,
    DelonFormModule,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class SharedModule { }
