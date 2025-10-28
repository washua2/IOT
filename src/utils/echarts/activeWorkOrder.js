import * as echarts from 'echarts';
import { fontSizeRem } from '../fontSizeRem';

export function renderChart(chartElementId) {
  // 获取图表容器元素
  var chartDom = document.getElementById(chartElementId);
  var myChart = echarts.init(chartDom);

  // 图表配置
  var option = {
    grid: {
      top: "16%",
      left: '0%',
      right: '2%',
      bottom: '0%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      backgroundColor: 'rgba(51, 28, 70, 0.5)',
      borderColor: '#fff',
      borderWidth: 1,
      textStyle: {
        color: '#fff',
        fontSize: fontSizeRem(24),
        fontWeight: '400', // 设置字体粗细
        fontFamily: 'inter'  // 设置字体
      },
    },
    legend: {
      show: true,
      data: [
        {
          name: 'Urgent',
          textStyle: {
            color: '#fff',
            fontSize: fontSizeRem(24),
            fontWeight: 500,
            padding: [0, fontSizeRem(20)],
          },
        },
        {
          name: 'Normal',
          textStyle: {
            color: '#fff',
            fontSize: fontSizeRem(24),
            fontWeight: 500,
            padding: [0, fontSizeRem(20)],
          },
        },
      ],
      icon: 'roundRect',
      itemWidth: fontSizeRem(20),
      itemHeight: fontSizeRem(20),
      fontSize: fontSizeRem(24),
      orient: 'horizontal',
      left: '-1.5%',
      top: '0%',
      bottom: '5%',
      x: 'left',
      y: 'top',
      itemGap: fontSizeRem(250),
    },
    barWidth: fontSizeRem(10),
    xAxis: [
      {
        type: 'value',
        position: "bottom",
        splitNumber: 8, // 控制分隔段数（每 10 为一段）
        min: 0,        // 设置最小值
        max: 80,       // 设置最大值
        interval: 10,  // 每个刻度间隔为 10
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255, 0.40)',
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255, 0.40)',
            width: fontSizeRem(1),
          },
        },
        axisLabel: {
          show: true,
          align: 'left',
          position: '0',
          interval: 0,
          color: '#fff',
          fontSize: fontSizeRem(24),
          fontWeight: '500',
          fontFamily: 'Inter',
          padding: [0, 0, 0, fontSizeRem(-15)],
          margin: fontSizeRem(25),
        },
      },
      {
        type: 'value',
        position: "top",
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255, 0.40)',
          },
        },
        gridIndex: 0,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255, 0.40)',
            width: fontSizeRem(1),
          },
        },
        axisLabel: {
          show: true,
          align: 'left',
          position: '0',
          interval: 1,
          color: 'rgba(255, 255, 255, 0.40)',
          fontSize: fontSizeRem(24),
          fontWeight: '500',
          fontFamily: 'Inter',
          padding: [0, 0, 0, fontSizeRem(-35)],
          margin: fontSizeRem(25),
        },
        data: [0, 10, 20, 30, 40, 50, 60, 70, 80],
      },
    ],
    dataZoom: [
      {
        type: 'slider',
        startValue: 8,
        endValue: 1,
        start: 0,
        end: 100,
        show: false,
      },
      {
        type: 'inside',
        show: true,
        xAxisIndex: [0],
        start: 0,
        end: 100,
        moveOnMouseWheel: false,
        preventDefaultMouseMove: false,
      },
    ],
    yAxis: {
      type: 'category',
      data: ['NC', 'SC', 'EC', 'WC'],
      splitLine: {
        lineStyle: {
          type: 'dashed',
          width: fontSizeRem(1),
          color: 'rgba(255, 255, 255, 0.40)',
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.40)',
          width: fontSizeRem(1),
          type: 'dashed',
        },
      },
       // 设置刻度标签
       axisLabel: {
        show: true,
        color: "#fff",
        fontSize: fontSizeRem(24),
        fontWeight: "500",
        fontFamily: "Inter",
        margin: fontSizeRem(20), // 调整 Y 轴标签与柱条之间的间距
      },
    },
    series: [
      {
        type: 'bar',
        name: 'Urgent',
        barWidth: fontSizeRem(18),
        barCategoryGap: '100%', // 设置柱条之间的间距，避免紧贴边缘
        label: {
          show: true,
          position: 'right',
          textStyle: {
            color: '#fff',
            fontSize: fontSizeRem(24),
          },
        },
        itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0,
              color: '#F05252 ',
            },
            {
              offset: 1,
              color: 'rgba(240, 82, 82, 0.40)',
            },
          ]),
        },
        data: [
          { value: 75, name: 'NC' },
          { value: 50, name: 'SC' },
          { value: 60, name: 'EC' },
          { value: 40, name: 'WC' },
        ],
      },
      {
        type: 'bar',
        name: 'Normal',
        barGap: "0%",
        barWidth: fontSizeRem(18),
        barCategoryGap: '100%', // 设置柱条之间的间距，避免紧贴边缘
        label: {
          show: true,
          position: 'right',
          textStyle: {
            color: '#fff',
            fontSize: fontSizeRem(24),
          },
        },
        itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            {
              offset: 0,
              color: '#FACA15 ',
            },
            {
              offset: 1,
              color: 'rgba(250, 202, 21, 0.40)',
            },
          ]),
        },
        data: [
          { value: 20, name: 'NC' },
          { value: 30, name: 'SC' },
          { value: 40, name: 'EC' },
          { value: 50, name: 'WC' },
        ],
      },
    ],
  };

  // 使用指定的配置项和数据显示图表
  myChart.setOption(option);
  option && myChart.setOption(option);
  window.addEventListener('resize', function () {
    myChart.resize();
  });
}
