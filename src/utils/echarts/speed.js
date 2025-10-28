import * as echarts from 'echarts';
import { fontSizeRem } from '../fontSizeRem'; // 保持原有引用，假设用于字体大小

export function renderChart(chartElementId, value,title) {
  // 获取图表容器元素
  var chartDom = document.getElementById(chartElementId);
  var myChart = echarts.init(chartDom);

  let data = [{ value, hour: 14.5 }];
  
  let option = {
    title: {
      text:title, // 标题文本
      left: 'center', // 水平居中
      top: '70%', // 标题位置
      z: -10, // 设置标题层级，确保其在其他元素之上
      textStyle: {
        color: 'rgba(255, 255, 255, 0.90)', // 白色文本
        fontSize: fontSizeRem(36), // 动态字体大小
        fontWeight: '500', // 字体��细
        fontFamily: 'Roboto' // 字体
      }
    },
    series: [
      {
        z: 5, // 确保压力仪表盘的层级
        name: 'Pressure',
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        radius: "125%", // 调整圆形的大小
        center: ["50%", "93%"],
        min: 0,
        max: 100,
        detail: {
          formatter: '{value}'
        },
        pointer: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        axisLine: {
          lineStyle: {
            color: [
              [1, 'rgba(255, 255, 255, 0.20)']
            ],
            width: fontSizeRem(2)
          }
        },
        axisTick: {
          show: false,
          distance: -10,
          length: 1,
          lineStyle: { color: 'auto' }
        },
        detail: { show: false },
      },
      {
        type: "gauge",
        radius: "145%", // 调整外部仪表盘的大小
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "92%"],
        min: 0,
        max: 80,
        splitNumber: 4,
        axisLine: {
          lineStyle: {
            width: fontSizeRem(20),
            color: [
              [0.24, "rgba(255, 45, 59, 0.6)"], // Red with transparency
              [0.25, "rgba(255, 45, 59, 0)"],
              [0.50, "rgba(255, 197, 111, 0.6)"], // Yellow with transparency
              [0.51, "rgba(255, 197, 111, 0)"],
              [0.74, "rgba(255, 237, 140, 0.6)"], // Yellow light with transparency
              [0.75, "rgba(255, 237, 140, 0)"],
              [1, "rgba(141, 255, 173, 0.6)"], // Green with transparency
            ],
          },
        },
        pointer: {
          shadowColor: 'auto',
          shadowBlur: 10,
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
          size: fontSizeRem(20),
          itemStyle: {
            borderWidth: 0,
            borderColor: 'rgba(129, 201, 38, 1)',
          },
        },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        title: {
          offsetCenter: [0, "-10%"],
          fontSize: fontSizeRem(20),
        },
        axisLabel: {
          distance: fontSizeRem(-80),
          show: true,
          color: "#fff",
          fontSize: fontSizeRem(24),
          formatter: function(value) {
            return value.toFixed(0);
          },
        },
        detail: { show: false },
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
