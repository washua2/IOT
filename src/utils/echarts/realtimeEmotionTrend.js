import * as echarts from 'echarts';
import { fontSizeRem } from '../fontSizeRem'; // 你的字体适配函数，可用固定值替代

export function renderEmotionChart(chartElementId) {
  const chartDom = document.getElementById(chartElementId);
  const myChart = echarts.init(chartDom);

  const colors = {
    happiness: 'rgba(10, 169, 77, 0.40)', // 绿色
    focus: 'rgba(240, 194, 62, 0.40)',     // 黄色
    anger: 'rgba(221, 34, 41, 0.40)',     // 红色
    grid: 'rgba(255,255,255,0.3)',
  };

  const option = {
    backgroundColor: 'transparent',
    grid: {
      top: fontSizeRem(80),
      left: '2%',
      right: '4%',
      bottom: fontSizeRem(40),
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'line' },
      backgroundColor: 'rgba(0,0,0,0.6)',
      borderColor: '#fff',
      borderWidth: 1,
      textStyle: { color: '#fff', fontSize: fontSizeRem(24) },
      formatter(params) {
        const t = (params && params[0] && params[0].axisValueLabel) || '';
        const lines = params
          .map(p => `${p.marker} ${p.seriesName}: ${p.value}%`)
          .join('<br/>');
        return `<div style="margin-bottom:0.25rem">${t}</div>${lines}`;
      },
    },
    legend: {
      top: fontSizeRem(-5),
      left: 'center',
      icon: 'circle',
      itemWidth: fontSizeRem(18),
      itemHeight: fontSizeRem(18),
      itemGap: fontSizeRem(40),
      textStyle: {
        color: '#FFFFFFCC',
        fontSize: fontSizeRem(24),
        fontFamily: 'light',
      },
      data: [
        { name: 'Happiness' },
        { name: 'FoCus' },
        { name: 'Anger' },
      ],
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Pre-match', '15min', '30min', '45min', 'Halftime'],
      axisTick: { show: false },
      axisLine: {
        show: true,
        lineStyle: { color: colors.grid, width: 1, type: 'dashed' },
      },
      axisLabel: {
        color: '#FFFFFFCC',
        fontSize: fontSizeRem(24),
        fontFamily: 'light',
        margin: fontSizeRem(16),
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 100,
      interval: 25,
      axisLine: {
        show: true,
        lineStyle: { color: colors.grid, width: 1, type: 'dashed' },
      },
      axisTick: { show: false },
      axisLabel: {
        color: '#FFFFFFCC',
        fontSize: fontSizeRem(24),
        fontFamily: 'light',
        formatter: '{value}%',
      },
      splitLine: {
        show: true,
        lineStyle: { color: colors.grid, width: 1, type: 'dashed' },
      },
    },
    series: [
      {
        name: 'Happiness',
        type: 'line',
        smooth: true,
        data: [30, 75, 55, 80, 65],
        lineStyle: { width: 3, color: colors.happiness },
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(0,255,127,0.6)' },
            { offset: 1, color: 'rgba(0,255,127,0.1)' },
          ]),
        },
      },
      {
        name: 'FoCus',
        type: 'line',
        smooth: true,
        data: [20, 55, 45, 50, 40],
        lineStyle: { width: 3, color: colors.focus },
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(255,215,0,0.6)' },
            { offset: 1, color: 'rgba(255,215,0,0.1)' },
          ]),
        },
      },
      {
        name: 'Anger',
        type: 'line',
        smooth: true,
        data: [5, 10, 12, 8, 15],
        lineStyle: { width: 3, color: colors.anger },
        showSymbol: false,
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(255,48,48,0.6)' },
            { offset: 1, color: 'rgba(255,48,48,0.1)' },
          ]),
        },
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener('resize', () => myChart.resize());
}
