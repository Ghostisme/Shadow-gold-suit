import F2 from '../f2-canvas/lib/f2';
// import jquery from '../../jquery-1.11.3.min.js';
let chart = null;

function initChart(canvas, width, height) { // 使用 F2 绘制图表
  // const data = [
  //   { year: '1951 年', sales: 38 },
  //   { year: '1952 年', sales: 52 },
  //   { year: '1956 年', sales: 61 },
  //   { year: '1957 年', sales: 145 },
  //   { year: '1958 年', sales: 48 },
  //   { year: '1959 年', sales: 38 },
  //   { year: '1960 年', sales: 38 },
  //   { year: '1962 年', sales: 38 },
  // ];
  

  const data = [{
    name: '标准版',
    日期: '10-05',
    查询数量: 280
  }, {
    name: '标准版',
    日期: '10-06',
    查询数量: 300
  }, {
    name: '标准版',
    日期: '10-07',
    查询数量: 280
  }, {
    name: '标准版',
    日期: '10-08',
    查询数量: 310
  }, {
    name: '标准版',
    日期: '10-09',
    查询数量: 280
  }, {
    name: '专业版',
    日期: '10-05',
    查询数量: 300
  }, {
    name: '专业版',
    日期: '10-06',
    查询数量: 250
  }, {
    name: '专业版',
    日期: '10-07',
    查询数量: 190
  }, {
    name: '专业版',
    日期: '10-08',
    查询数量: 200
  }, {
    name: '专业版',
    日期: '10-09',
    查询数量: 210
  }];
  chart = new F2.Chart({
    // id: 'mountNode',
    // id: 'column-dom',
    // pixelRatio: window.devicePixelRatio
    // pixelRatio: document.getElementById("box").devicePixelRatio
    el: canvas,
    width,
    height
  });
  chart.source(data, {
    '查询数量': {
      tickCount: 4
    }
  });
  chart.tooltip({
    custom: true, // 自定义 tooltip 内容框
    onChange: function onChange(obj) {
      var legend = chart.get('legendController').legends.top[0];
      var tooltipItems = obj.items;
      var legendItems = legend.items;
      var map = {};
      legendItems.map(function(item) {
        map[item.name] = _.clone(item);
      });
      tooltipItems.map(function(item) {
        var name = item.name;
        var value = item.value;
        if (map[name]) {
          map[name].value = value;
        }
      });
      legend.setItems(_.values(map));
    },
    onHide: function onHide() {
      var legend = chart.get('legendController').legends.top[0];
      legend.setItems(chart.getLegendItems().country);
    }
  });
  chart.interval().position('日期*查询数量').color('name').adjust('stack');
  chart.render();



}

Page({
  data: {
    opts: {
      onInit: initChart
    }
  },

  onReady() {}
});