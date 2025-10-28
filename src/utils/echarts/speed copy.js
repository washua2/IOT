import * as echarts from 'echarts';
import { fontSizeRem } from '../fontSizeRem'; // 保持原有引用，假设用于字体大小

export function renderChart(chartElementId) {
  // 获取图表容器元素
  var chartDom = document.getElementById(chartElementId);
  var myChart = echarts.init(chartDom);

  let data = [{ value: 5, hour: 14.5 }];
  
  let option = {
    series: [
      {
        type: "gauge",
        radius: "170%",
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "95%"],
        min: 0,
        max: 8,
        splitNumber: 2,
        axisLine: {
          lineStyle: {
            width: fontSizeRem(20),
            color: [
              [0.25, "rgba(255, 45, 59, 0.6)"], // Red with transparency
              [0.5, "rgba(255, 197, 111, 0.6)"], // Yellow with transparency
              [0.75, "rgba(255, 237, 140, 0.6)"], // Yellow light with transparency
              [1, "rgba(141, 255, 173, 0.6)"], // Green with transparency
            ],
          },
        },
        pointer: {
          shadowColor: 'auto',
          shadowBlur: 20,
          length: '70%',
          width: fontSizeRem(2),
        },
        itemStyle: {
          color: '#e12b38',
          borderColor: '#e12b38',
          borderWidth: fontSizeRem(2),
        },
        anchor: {
          show: true,
          showAbove: true,
          size: fontSizeRem(35),
          itemStyle: {
            borderWidth: 0,
            borderColor: 'rgba(129, 201, 38, 1)',
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        title: {
          offsetCenter: [0, "-10%"],
          fontSize: fontSizeRem(20),
        },
        detail: {
          show: false,
        },
        data: data,
      },
    ],
  };

  // 使用指定的配置项和数据显示图表
  myChart.setOption(option);

  // 监听窗口大小变化，重新调整图表尺寸
  window.addEventListener('resize', function () {
    myChart.resize();
  });
}
