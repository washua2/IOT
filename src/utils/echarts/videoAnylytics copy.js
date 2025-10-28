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
      height: "62%",
      width: "80%",
      top: "5%",
      left: "9.2%",  // 设置 X 轴与左边的距离
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
      data: ['23:00', '23:30', '00:00', '00:30', '01:00', '01:30', '02:00'],  // X轴数据
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
        fontSize: fontSizeRem(26),
        fontWeight: '400',
        fontFamily: 'inter',
        // padding: [0, 0, 0, fontSizeRem(-35)],
        margin: fontSizeRem(35),
      },
      splitLine: {
        show: false,  // 隐藏 X 轴的分隔线
      }
    },
    yAxis: {
      type: 'value',
      min: 100,  // 设置 Y 轴最小值为 100
      max: 500,  // 设置 Y 轴最大值为 500
      interval: 100,  // 设置刻度间隔为 100，显示 100, 200, 300, 400, 500
      axisLine: {
        show: false,  // 隐藏 Y 轴的线条
      },
      axisLabel: {
        formatter: '{value}',
        color: '#fff',
        fontSize: fontSizeRem(26),
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
        type: 'line',
        // stack: 'total',  // 确保重叠
        emphasis: {
          focus: 'series'
        },
        data: [100, 332, 130, 334, 190, 330, 120],  // 确保数据的数量和 X 轴匹配
        color: '#E6B0FF',
        symbol: 'none'  // 去除折线的原点
      },
      {
        name: 'Southern',
        type: 'line',
        // stack: 'total',  // 确保重叠
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 110, 134, 190, 230, 110],  // 确保数据的数量和 X 轴匹配
        color: '#1e90ff',
        symbol: 'none'  // 去除折线的原点
      },
      {
        name: 'Western',
        type: 'line',
        // stack: 'total',  // 确保重叠
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310],  // 确保数据的数量和 X 轴匹配
        color: '#8a2be2',
        symbol: 'none'  // 去除折线的原点
      },
      {
        name: 'Eastern',
        type: 'line',
        // stack: 'total',  // 确保重叠
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410],  // 确保数据的数量和 X 轴匹配
        color: '#20b2aa',
        symbol: 'none'  // 去除折线的原点
      }
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
