import * as echarts from 'echarts';
import { fontSizeRem } from '../fontSizeRem';

export function renderChart(chartElementId) {
    const chartDom = document.getElementById(chartElementId);
    const myChart = echarts.init(chartDom);

    const colors = {
        temp: '#19FFEC', // 温度线
        grid: 'rgba(255,255,255,0.35)'
    };

    const option = {
        backgroundColor: 'transparent',
        grid: {
            top: fontSizeRem(60),
            left: fontSizeRem(80),
            right: fontSizeRem(40),
            bottom: fontSizeRem(40),
            containLabel: true
        },
        title: {
            show: false
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'line' },
            backgroundColor: 'rgba(27, 126, 242, 0.21)',
            borderColor: '#fff',
            borderWidth: 1,
            textStyle: { color: '#fff', fontSize: fontSizeRem(28), fontFamily: 'Roboto' },
            formatter(params) {
                const t = params?.[0]?.axisValueLabel || '';
                const lines = params.map(p => `${p.marker} ${p.seriesName}: ${p.value}`).join('<br/>');
                return `<div style="margin-bottom:0.375rem">${t}</div>${lines}`;
            }
        },
        legend: {
            top: fontSizeRem(-7),
            left: '-1%',
            itemWidth: fontSizeRem(18),
            itemHeight: fontSizeRem(18),
            itemGap: fontSizeRem(26),
            textStyle: {
                color: '#FFFFFF99',
                fontSize: fontSizeRem(28),
                fontFamily: 'Roboto',
                verticalAlign: 'middle',
                lineHeight: fontSizeRem(28)
            },
            data: [
                {
                    name: 'Temp.(million)',
                    icon: 'image://data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><circle cx="9" cy="9" r="8" fill="%2319FFEC"/></svg>'
                }
            ]
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2021', '2022', '2023', '2024', '2025'],
            axisTick: { show: false },
            axisLine: {
                show: true,
                lineStyle: { color: colors.grid, width: 1 }
            },
            axisLabel: {
                color: '#fff',
                fontSize: fontSizeRem(24),
                fontFamily: 'Roboto',
                margin: fontSizeRem(16)
            },
            splitLine: { show: false }
        },
        yAxis: {
            type: 'value',
            min: 12,
            max: 20,
            interval: 1.5,
            axisLine: {
                show: true,
                lineStyle: { color: colors.grid, width: 1 }
            },
            axisTick: { show: false },
            axisLabel: {
                color: '#fff',
                fontSize: fontSizeRem(24),
                fontFamily: 'Roboto',
            },
            splitLine: {
                show: true,
                lineStyle: { color: colors.grid, width: 1 }
            },
            name: '(million)',
            nameTextStyle: {
                color: '#fff',
                fontSize: fontSizeRem(24),
                fontFamily: 'Roboto',
                align: 'right',
                verticalAlign: 'top',
                padding: [0, fontSizeRem(10), 0, 0]
            },
            nameGap: fontSizeRem(40)
        },
        series: [
            {
                type: 'line',
                data: [12.5, 14.2, 16.8, 18.7, 19.6],
                smooth: false,
                showSymbol: true,
                symbol: 'circle',
                symbolSize: fontSizeRem(12),
                lineStyle: { width: 3, color: colors.temp },
                itemStyle: {
                    color: '#ffffff',       // ✅ 内部白色
                    borderColor: colors.temp, // ✅ 外圈绿色
                    borderWidth: 2
                }
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}
