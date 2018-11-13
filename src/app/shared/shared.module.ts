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
];
// endregion

// region: your componets & directives
const COMPONENTS = [ChartBarLineComponent, ChartCardComponent, ChartTrendComponent, ChartGaugeComponent, MachineSummaryComponent];
const DIRECTIVES = [];
// endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonABCModule,
    DelonChartModule,
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
