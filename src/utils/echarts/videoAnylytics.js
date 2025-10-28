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
      height: "47%",
      width: "87%",
      top: "28%",
      left: "9%",  // 设置 X 轴与左边的距离
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
      data: ['Academic A', 'Academic B', 'Sports Zone', 'Admin Zone'],
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
      top: '0%',
      x: 'left',
      y: 'top',
      itemGap: fontSizeRem(40),
    },
    xAxis: {
      show:true,
      type: 'category',
      boundaryGap: false,
      data: ['23:00', '23:30', '00:00', '00:30', '01:00', '01:30', '01:00'],  // X轴数据
      axisLine: {
        show: true,  // 隐藏 X 轴的线条
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
        position: '0',
        interval: 0,
        color: '#fff',
        fontSize: fontSizeRem(26),
        fontWeight: '400',
        fontFamily: 'inter',
        padding: [0, 0, 0, fontSizeRem(-35)],
        margin: fontSizeRem(25),
      },
      splitLine: {
        show: true,  // 隐藏 X 轴的分隔线
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
      max: 30,  // 设置 Y 轴最大值为 500
      interval: 10,  // 设置刻度间隔为 100，显示 100, 200, 300, 400, 500
      axisLine: {
        show: false,  // 隐藏 Y 轴的线条
      },
      axisLabel: {
        formatter: '{value}',
        color: '#fff',
        fontSize: fontSizeRem(26),
        fontWeight: '400',
        fontFamily: 'inter',
        margin:15
      },
      axisLine: {
        show: true,
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255, 0.40)',
          width: fontSizeRem(1),
        },
      },
      splitLine: {
        show: true,  // 隐藏 Y 轴的分隔线
        lineStyle: {
          type: 'dashed',
          color: 'rgba(255, 255, 255, 0.40)',
          width: fontSizeRem(1),
        },
      },
      axisTick: {
        show: true,  // 隐藏 Y 轴的刻度线
      },
      emphasis: {
        axisLabel: {
          show: false, // 隐藏 Y 轴的值，特别是在焦点时
        }
      }
    },
    series: [
      {
        name: 'Academic A',
        type: 'line',
         smooth: 0.3, // 调整曲率，值越接近 1，曲线越圆滑
        // stack: 'total',  // 确保重叠
        emphasis: {
          focus: 'series'
        },
        data: [6, 8, 6, 8, 6, 8, 6],  // 确保数据的数量和 X 轴匹配
        color: '#E6B0FF',
        symbol: 'none'  // 去除折线的原点
      },
      {
        name: 'Academic B',
        type: 'line',
         smooth: 0.3, // 调整曲率，值越接近 1，曲线越圆滑
        // stack: 'total',  // 确保重叠
        emphasis: {
          focus: 'series'
        },
        data: [4, 6, 4, 6, 4, 6, 4],  // 确保数据的数量和 X 轴匹配
        color: '#0783FA',
        symbol: 'none'  // 去除折线的原点
      },
      {
        name: 'Sports Zone',
        type: 'line',
         smooth: 0.3, // 调整曲率，值越接近 1，曲线越圆滑
        // stack: 'total',  // 确保重叠
        emphasis: {
          focus: 'series'
        },
        data: [4, 2, 4, 2, 4, 2, 4],  // 确保数据的数量和 X 轴匹配
        color: '#0E9F6E',
        symbol: 'none'  // 去除折线的原点
      },
      {
        name: 'Admin Zone',
        type: 'line',
         smooth: 0.3, // 调整曲率，值越接近 1，曲线越圆滑
        // stack: 'total',  // 确保重叠
        emphasis: {
          focus: 'series'
        },
        data: [24, 22, 24, 22, 24, 22, 24],  // 确保数据的数量和 X 轴匹配
        color: '#19FFEC',
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
