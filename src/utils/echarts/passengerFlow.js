import * as echarts from 'echarts';
import { fontSizeRem } from '../fontSizeRem';

export function renderChart(chartElementId) {
  // 获取图表容器元素
  var chartDom = document.getElementById(chartElementId);
  var myChart = echarts.init(chartDom);
  const nameArr = ['0:00', '02:00', '03:00', '04:00', '05:00','06:00'];
  const valueArr = [3000, 1900, 1000, 2000, 3800,1500];
  // 图表配置
  var   option = {
    grid: {
      left: '0%',
      right: '5%',
      bottom: '10%',
      top: '5%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
        show: true,
        type: 'category',
        boundaryGap: false,
        data: nameArr,  // X轴数据
        axisLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255, 0.40)',
            width: fontSizeRem(1),
          },
        },
        axisTick: {
          show: false,  // 隐藏 X 轴的刻度线
        },
        axisLabel: {
          show: true,
          align: 'left',
          interval: 0, // 确保每个点都显示
          color: '#fff',
          fontSize: fontSizeRem(28),
          fontWeight: '400',
          fontFamily: 'Roboto',
          padding: [0, 0, 0, fontSizeRem(-35)],
          margin: fontSizeRem(25),
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dashed',
            color: 'rgba(255, 255, 255, 0.40)',
            width: fontSizeRem(1),
          },
        },
      },
    
    yAxis: {
      type: 'value',
      min: 0,  // 设置 Y 轴最小值为 100
      max: 3800,  // 设置 Y 轴最大值为 500
      interval: 950,  // 设置刻度间隔为 100，显示 100, 200, 300, 400, 500
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.40)',
          type: 'border',
          width: fontSizeRem(1),
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255, 0.40)',
          width: fontSizeRem(1),
        },
      },
      axisLabel: {
        formatter: '{value}',
        margin: fontSizeRem(30), // 设置与刻度的距离
        textStyle: {
          color: '#fff', // y轴文本颜色
          fontSize: fontSizeRem(24),
          fontFamily: "Roboto",
        },
      },
      axisTick: {
        show: false, // 是否显示刻度
      },
      name: '',
      nameTextStyle: {
        color: '#fff',
        fontSize: 12,
      },
    },
  
    series: [
      {
        name: '',
        // name: name1,
        type: 'line',
        smooth: true,
        stack: 'Total',
        emphasis: {
          focus: 'series',
        },
        showSymbol: false,
        label: {
          show: false,
          position: 'top',
          textStyle: {
            color: '#fff',
          },
        },
        itemStyle: {
          color: '#5DF5E7',
          borderWidth: fontSizeRem(1),
        },
        tooltip: {
          show: true,
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: 'rgba(51, 153, 255, 0.02)',
                },
                {
                  offset: 0.1,
                  color: 'rgba(25, 255, 236, 0.2)',
                },
                {
                  offset: 0.2,
                  color: 'rgba(25, 255, 236, 0.1)',
                },
              ],
              false,
            ),
          },
        },
        data: valueArr,
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
