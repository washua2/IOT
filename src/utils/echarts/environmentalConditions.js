import * as echarts from 'echarts';
import { fontSizeRem } from '../fontSizeRem';

export function renderChart(chartElementId) {
  const chartDom = document.getElementById(chartElementId);
  const myChart = echarts.init(chartDom);

  const colors = {
    temp:  '#19FFEC', // 温度线
    hum:   '#3B82F6', // 湿度线
    aq:    '#10B981', // 空气质量
    noise: '#F59E0B', // 噪音
    grid:  'rgba(255,255,255,0.35)'
  };

  const option = {
    backgroundColor: 'transparent',
    grid: {
      top: fontSizeRem(72),
      left: '0%',
      right: '6%',
      bottom: 0,
      containLabel: true
    },
    title: {
      show: false
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'line' },
      backgroundColor: 'rgba(27, 126, 242, 0.21)',
      borderColor: '#fff',
      borderWidth: 1,
    //   padding: [fontSizeRem(10), fontSizeRem(14)],
      textStyle: { color: '#fff', fontSize: fontSizeRem(28), fontFamily: 'Roboto' },
      formatter(params) {
        const t = (params && params[0] && params[0].axisValueLabel) || '';
        const lines = params
          .map(p => `${p.marker} ${p.seriesName}: ${p.value}`)
          .join('<br/>');
        return `<div style="margin-bottom:0.375rem">${t}</div>${lines}`;
      },

    },
    legend: {
  top: fontSizeRem(-7),
  left: '-1%',
  icon: 'circle',
  itemWidth: fontSizeRem(18),
  itemHeight: fontSizeRem(18),
  itemGap: fontSizeRem(26),

  // ✅ 核心：设置 align 与 padding
  align: 'auto',
  itemStyle: {
    borderWidth: 1
  },
  textStyle: {
    color: '#FFFFFF99',
    fontSize: fontSizeRem(28),
    fontFamily: '29LT Azer',
    verticalAlign: 'middle',   // 让文字垂直居中
    lineHeight: fontSizeRem(28) // 与 icon 大小匹配
  },
  data: [
    {
      name: 'Temp.(℃)',
      icon: 'image://data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><circle cx="9" cy="9" r="8" stroke="%2319FFEC" stroke-width="2" fill="%2319FFEC"/></svg>'
    },
    {
      name: 'Hum.(%)',
      icon: 'image://data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><circle cx="9" cy="9" r="8" stroke="%233B82F6" stroke-width="2" fill="%233B82F6"/></svg>'
    },
    {
      name: 'AQ',
      icon: 'image://data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><circle cx="9" cy="9" r="8" stroke="%2310B981" stroke-width="2" fill="%2310B981"/></svg>'
    },
    {
      name: 'Noise Lvl.(dB)',
      icon: 'image://data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><circle cx="9" cy="9" r="8" stroke="%23F59E0B" stroke-width="2" fill="%23F59E0B"/></svg>'
    }
  ]
},

    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['09:00', '10:00', '11:00', '12:00', '13:00'],
      axisTick: { show: false },
      axisLine: {
        show: true,
        lineStyle: { color: colors.grid, width: 1, type: 'dashed' }
      },
      axisLabel: { color: '#fff', fontSize: fontSizeRem(24), margin: fontSizeRem(16) },
      splitLine: { show: false }
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      interval: 25,
      axisLine: {
        show: true,
        lineStyle: { color: colors.grid, width: 1, type: 'dashed' }
      },
      axisTick: { show: false },
      axisLabel: { color: '#fff', fontSize: fontSizeRem(24), formatter: '{value}' },
      splitLine: { show: true, lineStyle: { color: colors.grid, width: 1, type: 'dashed' } }
    },
    series: [
      {
        name: 'Temp.(℃)',
        type: 'line',
        data: [12, 55, 80, 95, 98],
        smooth: 0,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: fontSizeRem(10),
        lineStyle: { width: 2, color: colors.temp },
        itemStyle: {
          color: '#ffffff', // 空心内部白色
          borderColor: colors.temp, // 外圈为折线颜色
          borderWidth: 2
        }
      },
      {
        name: 'Hum.(%)',
        type: 'line',
        data: [6, 22, 75, 68, 92],
        smooth: 0,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: fontSizeRem(10),
        lineStyle: { width: 2, color: colors.hum },
        itemStyle: {
          color: '#ffffff',
          borderColor: colors.hum,
          borderWidth: 2
        }
      },
      {
        name: 'AQ',
        type: 'line',
        data: [28, 56, 58, 42, 60],
        smooth: 0,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: fontSizeRem(10),
        lineStyle: { width: 2, color: colors.aq },
        itemStyle: {
          color: '#ffffff',
          borderColor: colors.aq,
          borderWidth: 2
        }
      },
      {
        name: 'Noise Lvl.(dB)',
        type: 'line',
        data: [10, 12, 35, 20, 33],
        smooth: 0,
        showSymbol: true,
        symbol: 'circle',
        symbolSize: fontSizeRem(10),
        lineStyle: { width: 2, color: colors.noise },
        itemStyle: {
          color: '#ffffff',
          borderColor: colors.noise,
          borderWidth: 2
        }
      }
    ]
  };

  myChart.setOption(option);
  window.addEventListener('resize', () => myChart.resize());
}
