// tslint:disable
import { format } from 'date-fns';
import { deepCopy } from '@delon/util';

// region: mock data

const visitData = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: format(new Date(beginDay - 1000 * 60 * 60 * i), 'YYYY-MM-DD HH:00'),
    y: fakeY[i],
  });
}

const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: format(new Date(beginDay - 1000 * 60 * 60 * i), 'YYYY-MM-DD HH:00'),
    y: fakeY2[i],
  });
}

const salesData = [];
for (let i = 12; i > 0; i -= 1) {
  salesData.push({
    x: format(new Date(beginDay - 1000 * 60 * 60 * i), 'MM-DD HH:00'),
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
const prepareData = [];

prepareData.push({
  name: '模具准备',
  desc: `模具准备`,
  finished: 1,
}, {
    name: '物料准备',
    desc: `物料准备`,
    finished: 2,
  }, {
    name: 'WI准备',
    desc: `WI准备`,
    finished: 5,
  }, {
    name: '线长确认',
    desc: `线长确认`,
    finished: 3,
  });

const materialData = [];

materialData.push({
  batch: '3S123456789012',
  material: `9-242943-1`,
  qty: 1203,
  percentage: 80,
  loaded: 1
}, {
    batch: '',
    material: `533983-1`,
    qty: 0,
    percentage: 60,
    loaded: 2
  }, {
    batch: '3S998921234012',
    material: `9-242943-2`,
    qty: 20,
    percentage: 5,
    loaded: 3
  }, {
    batch: '3S712921234012',
    material: `9-242943-3`,
    qty: 989,
    percentage: 90,
    loaded: 1
  });

const salesTypeData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

const salesTypeDataOnline = [
  {
    x: '家用电器',
    y: 244,
  },
  {
    x: '食用酒水',
    y: 321,
  },
  {
    x: '个护健康',
    y: 311,
  },
  {
    x: '服饰箱包',
    y: 41,
  },
  {
    x: '母婴产品',
    y: 121,
  },
  {
    x: '其他',
    y: 111,
  },
];

const salesTypeDataOffline = [
  {
    x: '家用电器',
    y: 99,
  },
  {
    x: '个护健康',
    y: 188,
  },
  {
    x: '服饰箱包',
    y: 344,
  },
  {
    x: '母婴产品',
    y: 255,
  },
  {
    x: '其他',
    y: 65,
  },
];

const offlineData = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `门店${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
const offlineChartData = [];
for (let i = 0; i < 20; i += 1) {
  offlineChartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 10,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}

const radarOriginData = [
  {
    name: '个人',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: '团队',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: '部门',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

//
const radarData = [];
const radarTitleMap = {
  ref: '引用',
  koubei: '口碑',
  output: '产量',
  contribute: '贡献',
  hot: '热度',
};
radarOriginData.forEach(item => {
  Object.keys(item).forEach(key => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});

// endregion

export const CHARTS = {
  '/chart': deepCopy({
    visitData,
    visitData2,
    prepareData,
    materialData,
    salesData,
    searchData,
    offlineData,
    offlineChartData,
    salesTypeData,
    salesTypeDataOnline,
    salesTypeDataOffline,
    radarData,
  }),
  '/chart/visit': deepCopy(visitData),
};
