import * as echarts from 'echarts';
import { fontSizeRem } from '../fontSizeRem'; // 保持原有引用，假设用于字体大小

export function renderChart(chartElementId, value) {
  // 获取图表容器元素
  var chartDom = document.getElementById(chartElementId);
  var myChart = echarts.init(chartDom);

  const nameArr = ['T1(International)', 'T2 (Domestic)', 'T3 (Royal)', 'T4 (Cargo)', 'T5 (Private)'];
  const valueArr = [150, 60, 80, 180, 90];


  var option = {
    grid: {
      top: '10%',
      left: '7%',
      right: '2%',
      bottom: '15%',
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross', // 使用 cross 指针来在焦点时显示 Y 轴值
        crossStyle: {
          color: '#fff'
        }
      },
      backgroundColor: 'rgba(93, 170, 244, 0.5)',  // 修改白色框的背景色
      borderColor: '#fff',
      borderWidth: 1,
      padding: [fontSizeRem(10), fontSizeRem(15)], // 调整内边距
      formatter: '{b} : {c}',
      textStyle: {
        color: '#ffffff',  // 设置字体颜色
        fontSize: fontSizeRem(26), // 设置字体大小
        fontWeight: '400', // 设置字体粗细
        fontFamily: 'inter'  // 设置字体
      }
    },
    legend: {
      show:false,
      icon: 'rect',
      top: 10,
      right: 5,
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        fontSize: 12,
        color: '#FFEB3B',
      },
    },
    xAxis: {
      type: 'category',
      axisPointer: {
        type: 'shadow',
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
        interval: 0, // 显示所有标签
        rotate: 0, // 如果有需要可以设置角度，例如 45
        textStyle: {
          color: '#fff', // x轴文本颜色
          fontSize: fontSizeRem(28),
          fontFamily: "Roboto"
        },
      },
      axisTick: {
        show: false,
      },
      data: nameArr,
    },
    
    yAxis: {
      type: 'value',
      min: 0,
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.40)',
          type: 'dashed',
          width: fontSizeRem(1),
        },
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
        formatter: '{value}',
        margin: fontSizeRem(30), // 设置与刻度的距离
        textStyle: {
          color: '#fff', // y轴文本颜色
          fontSize: fontSizeRem(28),
          fontFamily: "Roboto",
        },
      },
      axisTick: {
        show: true, // 是否显示刻度
      },
      name: '',
      nameTextStyle: {
        color: '#fff',
        fontSize: 12,
      },
    },
    
    
    series: [
      {
        type: 'bar',
        name: '',
        barWidth: fontSizeRem(60),
        emphasis: {
          itemStyle: {
            color: '#7fb7e9',
          },
        },
        itemStyle: {
          normal: {
            // 设置渐变背景色
            color: new echarts.graphic.LinearGradient(
              0, 1, 0, 0, [
                { offset: 0, color: 'rgba(7, 131, 250, 0)' },
                { offset: 1, color: 'rgba(7, 131, 250, 0.7)' }
              ]
            ),
          },
        },
        data: valueArr,
      },
      {
        name: '',
        type: 'pictorialBar',
        itemStyle: {
          normal: {
            color: 'rgba(255, 255, 255, 1)',
          },
        },
        symbol: 'rect', // 图形类型，这里是矩形
        symbolRotate: 0,
        symbolSize: [fontSizeRem(60), fontSizeRem(1)],
        symbolPosition: 'end',
        data: valueArr,
        z: 3,
      },
      // {
      //   name: '中线',
      //   type: 'pictorialBar',
      //   symbol: 'rect', // 图形类型，这里是矩形
      //   symbolSize: [fontSizeRem(1), '100%'], // 控制线条的宽度和高度
      //   symbolPosition: 'end', // 设置线条的位置
      //   itemStyle: {
      //     normal: {
      //       color: 'rgba(255, 255, 255, 1)', // 中线的颜色
      //       // 虚线样式
      //       borderWidth: fontSizeRem(1), // 设置边框宽度
      //       borderType: 'dashed', // 虚线
      //     },
      //   },
      //   data: valueArr.map((value) => value / 1), // 计算每个柱子的中线位置
      //   z: 3,
      // }
      
    ],
  };

  // 使用指定的配置项和数据显示图表
  myChart.setOption(option);

  // 监听窗口大小变化，重新调整图表尺寸
  window.addEventListener('resize', function () {
    myChart.resize();
  });
}
