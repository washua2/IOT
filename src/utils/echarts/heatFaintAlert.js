import * as echarts from 'echarts';
import { fontSizeRem } from '../fontSizeRem';

export function renderChart(chartElementId) {
  // 获取图表容器元素
  var chartDom = document.getElementById(chartElementId);
  var myChart = echarts.init(chartDom);

  // 图表配置
  var option = {
    grid: {
      show: true,
      borderWidth: 0,
      height: "80%",
      width: "83%",
      top: "5%",
      left: "8%",  // 设置 X 轴与左边的距离
      bottom:0,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross', // 使用 cross 指针来在焦点时显示 Y 轴值
        crossStyle: {
          color: '#fff'
        }
      },
      backgroundColor: 'rgba(51, 28, 70, 0.5)',  // 修改白色框的背景色
      borderColor: '#fff',
      borderWidth: 1,
      padding: [fontSizeRem(10), fontSizeRem(15)], // 调整内边距
      formatter: function (params) {
        let tooltipContent = params.map(param => {
          return param.seriesName + ': ' + param.value; // 显示 Y 轴的值
        }).join('<br/>');
        return tooltipContent;
      },
      textStyle: {
        color: '#ffffff',  // 设置字体颜色
        fontSize: fontSizeRem(26), // 设置字体大小
        fontWeight: '400', // 设置字体粗细
        fontFamily: 'inter'  // 设置字体
      }
    },
    legend: {
      show:false,
      data: ['Northern', 'Southern', 'Western', 'Eastern'],
      textStyle: {
        color: '#FFFFFF99',
        fontSize: fontSizeRem(32),
        fontFamily: '29LT Azer'  // 设置字体
      },
      icon: 'roundRect',
      itemWidth: fontSizeRem(20),
      itemHeight: fontSizeRem(20),
      fontSize: fontSizeRem(32),
      orient: 'horizontal',
      left: '1%',
      bottom: '0%',
      x: 'left',
      y: 'bottom',
      itemGap: fontSizeRem(30),
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00'],  // X轴数据
      axisLine: {
        show: false,  // 隐藏 X 轴的线条
      },
      axisTick: {
        show: false,  // 隐藏 X 轴的刻度线
      },
      axisLabel: {
        show: true,
        align: 'left',
        position: '0',
        interval: 0,
        color: '#fff',
        fontSize: fontSizeRem(24),
        fontWeight: '400',
        fontFamily: 'inter',
        // padding: [0, 0, 0, fontSizeRem(-35)],
        padding: [0, 0, 0, fontSizeRem(-15)],
        margin: fontSizeRem(35),
      },
      splitLine: {
        show: false,  // 隐藏 X 轴的分隔线
      }
    },
    yAxis: {
      type: 'value',
      min: 30,  // 设置 Y 轴最小值为 100
      max: 38,  // 设置 Y 轴最大值为 500
      interval: 2,  // 设置刻度间隔为 100，显示 100, 200, 300, 400, 500
      axisLine: {
        show: false,  // 隐藏 Y 轴的线条
      },
      axisLabel: {
        formatter: '{value}',
        color: '#fff',
        fontSize: fontSizeRem(24),
        fontWeight: '400',
        fontFamily: 'inter',
      },
      splitLine: {
        show: false,  // 隐藏 Y 轴的分隔线
      },
      emphasis: {
        axisLabel: {
          show: false, // 隐藏 Y 轴的值，特别是在焦点时
        }
      }
    },
    series: [
      {
        name: 'Northern',
        smooth: 0.3, // 调整曲率，值越接近 1，曲线越圆滑
        type: 'line',
        // stack: 'total',  // 确保重叠
        emphasis: {
          focus: 'series'
        },
        data: [30, 32, 34, 32, 34, 32, 38],  // 确保数据的数量和 X 轴匹配
        color: '##E6B0FF',
        symbol: 'none'  // 去除折线的原点
      },
    ],
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'middle',
          style: {
            text: '',
            fill: '#ffffff',
            font: 'Inter'
          }
        }
      ]
    }
  };

  // 使用指定的配置项和数据显示图表
  myChart.setOption(option);
  option && myChart.setOption(option);
  window.addEventListener('resize', function () {
    // 调用 resize 方法重新渲染图表
    myChart.resize();
  });
}
