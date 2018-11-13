import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd';
import { getTimeDistance } from '@delon/util';
import { STColumn, STColumnTag } from '@delon/abc';

const TAG: STColumnTag = {
  1: { text: '成功', color: 'green' },
  2: { text: '错误', color: 'red' },
  3: { text: '进行中', color: 'blue' },
  4: { text: '默认', color: '' },
  5: { text: '警告', color: 'orange' },
};

const MAT_TAG: STColumnTag = {
  1: { text: '使用中', color: 'green' },
  2: { text: '未上载', color: 'red' },
  3: { text: '续料', color: 'blue' },
};

@Component({
  selector: 'dashboard-machine-summary',
  templateUrl: './machine.summary.component.html',
  styleUrls: ['./machine.summary.component.less']
})
export class MachineSummaryComponent implements OnInit {
  constructor(
    private http: _HttpClient,
    public msg: NzMessageService,
  ) { }

  prepareCols: STColumn[] = [
    { title: '名称', index: 'name' },
    {
      title: '描述',
      index: 'desc',
    },
    { title: '状态', index: 'finished', type: 'tag', tag: TAG },
  ];

  materialCols: STColumn[] = [
    { title: '批号', index: 'batch' },
    {
      title: '料号',
      index: 'material',
    },
    { title: '数量', index: 'qty' },
    { title: '存量', render: 'percentages' },
    { title: '状态', index: 'loaded', type: 'tag', tag: MAT_TAG },
  ];
  salesType = 'all';
  salesPieData: any;
  salesTotal = 0;
  data: any = {
    salesData: [],
    offlineData: [],
    visitData: []
  };
  rankingListData: any[] = Array(7)
    .fill({})
    .map((item, i) => {
      return {
        title: '测试',
        total: 323234,
      };
    });

  date_range: Date[] = [];
  setDate(type: any) {
    this.date_range = getTimeDistance(type);
  }

  changeSaleType() {
    this.salesPieData =
      this.salesType === 'all'
        ? this.data.salesTypeData
        : this.salesType === 'online'
          ? this.data.salesTypeDataOnline
          : this.data.salesTypeDataOffline;
    if (this.salesPieData)
      this.salesTotal = this.salesPieData.reduce((pre, now) => now.y + pre, 0);
  }

  ngOnInit() {
    this.http.get('/chart').subscribe((res: any) => {
      res.offlineData.forEach((item: any) => {
        item.chart = Object.assign([], res.offlineChartData);
      });
      this.data = res;
      this.changeSaleType();
    });
  }
}
