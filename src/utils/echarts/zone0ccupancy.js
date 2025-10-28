import * as echarts from 'echarts';
import { fontSizeRem } from '../fontSizeRem';

export function renderZone0ccupancyChart(chartElementId) {
    const chartDom = document.getElementById(chartElementId);
    if (!chartDom) return;

    // ✅ 先销毁旧实例（防止切换时不显示）
    const old = echarts.getInstanceByDom(chartDom);
    if (old) echarts.dispose(old);

    const myChart = echarts.init(chartDom);

    const colors = {
        bar: '#4F9BFF',  // 主体蓝色
        grid: 'rgba(255,255,255,0.35)'
    };

    const option = {
        backgroundColor: 'transparent',
        grid: {
            top: fontSizeRem(60),
            left: fontSizeRem(10),
            right: fontSizeRem(40),
            bottom: fontSizeRem(40),
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' },
            backgroundColor: 'rgba(27, 126, 242, 0.21)',
            borderColor: '#fff',
            borderWidth: 1,
            textStyle: {
                color: '#fff',
                fontSize: fontSizeRem(22),
                fontFamily: 'Roboto'
            },
            formatter(params) {
                const t = params?.[0]?.axisValueLabel || '';
                const lines = params.map(p => `${p.marker} ${p.seriesName}: ${p.value}%`).join('<br/>');
                return `<div style="margin-bottom:0.375rem">${t}</div>${lines}`;
            }
        },
        legend: {
            top: fontSizeRem(-7),
            right: '0%',
            itemWidth: fontSizeRem(24),
            itemHeight: fontSizeRem(24),
            itemGap: fontSizeRem(10),
            textStyle: {
                color: '#FFFFFF99',
                fontSize: fontSizeRem(24),
                fontFamily: 'Roboto',
                verticalAlign: 'bottom',
                lineHeight: fontSizeRem(28)
            },
            data: [
                {
                    name: 'district',
                    icon: 'image://data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><rect x="1" y="1" width="24" height="24" rx="3" fill="%23339FFF"/></svg>'
                }
            ]
        },
        xAxis: {
    type: 'category',
    data: ['Sector A', 'Sector B', 'Sector C', 'Sector D', 'VIP Lounge'],
    boundaryGap: true,   // ✅ 保证柱子居中且首尾不被裁掉
    axisTick: { show: false },
    axisLine: {
        show: true,
        lineStyle: { color: colors.grid, width: 1 }
    },
    axisLabel: {
        color: '#fff',
        fontSize: fontSizeRem(20),
        margin: fontSizeRem(16),
        interval: 0,     // ✅ 所有标签都显示
    }
},
        yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            interval: 20,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                color: '#fff',
                fontSize: fontSizeRem(24),
                formatter: '{value}%'
            },
            splitLine: {
                show: true,
                lineStyle: { color: colors.grid, width: 1, type: 'dashed' }
            }
        },
        series: [
            {
                name: 'district',
                type: 'bar',
                data: [58, 72, 50, 78, 74],
                barWidth: fontSizeRem(28),
                itemStyle: {
                    // ✅ 常态就用高亮颜色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: 'rgba(0, 85, 255, 0.00)' }, // 亮蓝
                        { offset: 0.3, color: '#0783FA' }, // 亮蓝
                        { offset: 1, color: '#0783FA' }  // 深蓝
                    ])
                },
                // ✅ 移入时不再改变
                emphasis: {
                    disabled: true
                },
                label: {
                    show: true,
                    position: 'top',
                    color: '#fff',
                    fontSize: fontSizeRem(18),
                    formatter: '{c}%',
                    fontWeight: '500'
                }
            }
        ]

    };

    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}
