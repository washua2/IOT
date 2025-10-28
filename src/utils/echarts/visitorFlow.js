import * as echarts from 'echarts';
import { fontSizeRem } from '../fontSizeRem';

export function renderChart(chartElementId) {
    const chartDom = document.getElementById(chartElementId);
    if (!chartDom) return;

    // ✅ 如果之前创建过实例，先销毁旧的（防止切换时不显示）
    const old = echarts.getInstanceByDom(chartDom);
    if (old) echarts.dispose(old);

    const myChart = echarts.init(chartDom);

    const colors = {
        a: '#00E0FF',    // Sector A
        b: '#4F9BFF',    // Sector B
        c: '#00B68F',    // Sector C
        d: '#F9A03F',    // Sector D
        total: '#C273FF',// Total
        grid: 'rgba(255,255,255,0.35)'
    };

    const option = {
        backgroundColor: 'transparent',
        grid: {
            top: fontSizeRem(60),
            left: fontSizeRem(10),
            right: fontSizeRem(30),
            bottom: fontSizeRem(40),
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'line' },
            backgroundColor: 'rgba(27, 126, 242, 0.21)',
            borderColor: '#fff',
            borderWidth: 1,
            textStyle: { color: '#fff', fontSize: fontSizeRem(22), fontFamily: 'Roboto' },
            formatter(params) {
                const t = params?.[0]?.axisValueLabel || '';
                const lines = params.map(p => `${p.marker} ${p.seriesName}: ${p.value}`).join('<br/>');
                return `<div style="margin-bottom:0.375rem">${t}</div>${lines}`;
            }
        },
        legend: {
            top: fontSizeRem(-7),
            left: '0%',
            itemWidth: fontSizeRem(18),
            itemHeight: fontSizeRem(18),
            itemGap: fontSizeRem(15),
            align: 'auto',
            textStyle: {
                color: '#FFFFFF99',
                fontSize: fontSizeRem(28),
                fontFamily: '29LT Azer',
                verticalAlign: 'middle',
                lineHeight: fontSizeRem(28)
            },
            data: [
                {
                    name: 'Sector A',
                    icon: 'image://data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><circle cx="9" cy="9" r="8" fill="%2300E0FF"/></svg>'
                },
                {
                    name: 'Sector B',
                    icon: 'image://data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><circle cx="9" cy="9" r="8" fill="%234F9BFF"/></svg>'
                },
                {
                    name: 'Sector C',
                    icon: 'image://data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><circle cx="9" cy="9" r="8" fill="%2300B68F"/></svg>'
                },
                {
                    name: 'Sector D',
                    icon: 'image://data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><circle cx="9" cy="9" r="8" fill="%23F9A03F"/></svg>'
                },
                {
                    name: 'Total',
                    icon: 'image://data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><circle cx="9" cy="9" r="8" fill="%23C273FF"/></svg>'
                }
            ]
        },

        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['09:00', '10:00', '11:00', '12:00', '13:00'],
            axisTick: { show: false },
            axisLine: {
                show: true,
                lineStyle: { color: colors.grid, width: 1 }
            },
            axisLabel: {
                color: '#fff',
                fontSize: fontSizeRem(24),
                margin: fontSizeRem(16)
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 400,
            interval: 100,
            axisLine: {
                show: false,
                lineStyle: { color: colors.grid, width: 1 }
            },
            axisTick: { show: false },
            axisLabel: {
                color: '#fff',
                fontSize: fontSizeRem(24)
            },
            splitLine: {
                show: true,
                lineStyle: { color: colors.grid, width: 1 }
            }
        },
        series: [
            {
                name: 'Sector A',
                type: 'line',
                data: [20, 25, 35, 40, 45],
                symbol: 'circle',
                symbolSize: fontSizeRem(10),
                lineStyle: { width: 2, color: colors.a },
                itemStyle: {
                    color: '#fff',
                    borderColor: colors.a,
                    borderWidth: 2
                }
            },
            {
                name: 'Sector B',
                type: 'line',
                data: [25, 30, 40, 48, 55],
                symbol: 'circle',
                symbolSize: fontSizeRem(10),
                lineStyle: { width: 2, color: colors.b },
                itemStyle: {
                    color: '#fff',
                    borderColor: colors.b,
                    borderWidth: 2
                }
            },
            {
                name: 'Sector C',
                type: 'line',
                data: [30, 40, 50, 60, 70],
                symbol: 'circle',
                symbolSize: fontSizeRem(10),
                lineStyle: { width: 2, color: colors.c },
                itemStyle: {
                    color: '#fff',
                    borderColor: colors.c,
                    borderWidth: 2
                }
            },
            {
                name: 'Sector D',
                type: 'line',
                data: [15, 20, 30, 40, 55],
                symbol: 'circle',
                symbolSize: fontSizeRem(10),
                lineStyle: { width: 2, color: colors.d },
                itemStyle: {
                    color: '#fff',
                    borderColor: colors.d,
                    borderWidth: 2
                }
            },
            {
                name: 'Total',
                type: 'line',
                data: [100, 180, 230, 280, 340],
                symbol: 'circle',
                symbolSize: fontSizeRem(10),
                lineStyle: { width: 3, color: colors.total },
                itemStyle: {
                    color: '#fff',
                    borderColor: colors.total,
                    borderWidth: 2
                }
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', () => myChart.resize());
}
