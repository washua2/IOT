import * as echarts from 'echarts';
import { fontSizeRem } from '../fontSizeRem';

/**
 * 环形图（左侧双环 + 右侧图例 + 中心总数）
 * - 支持空心圆图例
 * - 右侧百分比右对齐
 * - 主环 + 外细环 + 内暗底
 * - 扇区间留缝（padAngle）
 */
export function renderChart(chartElementId, totalValue = 680) {
    const el = document.getElementById(chartElementId);
    const chart = echarts.init(el);

    // ======== TODO: 把下面的颜色/字号按 Figma 替换 ========
    const colors = {
        c1: '#19FFEC', // Sports
        c2: '#3B82F6', // Entertainment
        c3: '#10B981', // National
        c4: '#F59E0B', // Expos
        c5: '#EF4444', // Maintenance
        label: '#EBE8E8',
        labelStrong: '#FFFFFF',
        labelWeak: '#FFFFFF99',
        grid: 'rgba(255,255,255,0.35)',
        innerDark: 'rgba(0,0,0,0.35)' // 中心暗底
    };

    // 示例数据（%）
    const seriesData = [
        { name: 'Supportive Fans', value: 58, color: colors.c1 },
        { name: 'Fanatical Fans', value: 22, color: colors.c2 },
        { name: 'Analytical Fans', value: 12, color: colors.c3 },
        { name: 'Competitive Fans', value: 6, color: colors.c4 },
    ];

    // 右侧 legend 需要查值
    const valueMap = seriesData.reduce((m, d) => (m[d.name] = d.value, m), {});

    const mkLegendIcon = (hex, size = 18, strokeW = 2, fill = 'white') =>
        'image://data:image/svg+xml;utf8,' +
        `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">` +
        `<circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - strokeW}" stroke="${encodeURIComponent(hex).replace('#', '%23')}" stroke-width="${strokeW}" fill="${fill}"/></svg>`;

    const option = {
        backgroundColor: 'transparent',

        // 保留 grid 以兼容你的布局系统（实际饼图不依赖 grid）
        grid: { top: '10%', left: '12%', right: '5%', bottom: '20%' },

        tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(27,126,242,0.21)',
            borderColor: '#fff',
            borderWidth: 1,
            padding: [fontSizeRem(10), fontSizeRem(14)],
            textStyle: { color: '#fff', fontSize: fontSizeRem(24), fontFamily: 'Roboto' },
            formatter: ({ name, value }) => `${name}<br/>${value} %`,
            confine: true
        },

        // 右侧图例：空心圆 + 名称 + 右对齐百分比
        legend: {
            orient: 'vertical',
            top: 'middle',
            left: '37%',
            itemWidth: fontSizeRem(18),
            itemHeight: fontSizeRem(18),
            itemGap: fontSizeRem(20),
            formatter(name) {
                const v = valueMap[name] ?? 0;
                return `{name|${name}} {val|${v}}{unit| %}`;
            },
            data: seriesData.map(d => ({
                name: d.name,
                icon: 'circle'     // ✅ 实心圆
            })),
            textStyle: {
                color: colors.label,
                fontSize: fontSizeRem(28),
                fontFamily: 'Roboto',
                rich: {
                    name: { width: fontSizeRem(430), fontSize: fontSizeRem(28),color:'#EBE8E8', align: 'left' },
                    val: { width: fontSizeRem(60), fontSize: fontSizeRem(40), align: 'right', color:'#EBE8E8', fontWeight: 600 },
                    unit: { width: fontSizeRem(22), align: 'left', color:'#EBE8E8', }
                }
            }
        },


        series: [
            // 内部暗底圆（Total 背景）
            {
                type: 'pie',
                radius: ['0%', '40%'],             // TODO: 内圆半径
                center: ['19%', '40%'],            // TODO: 整个环的位置（水平更靠左）
                silent: true,
                label: { show: false },
                data: [{ value: 100, itemStyle: { color: colors.innerDark } }]
            },
            // 主环（粗）
            {
                type: 'pie',
                radius: ['52%', '58%'],            // TODO: 细边厚度
                // TODO: 主环厚度（外半径 70% 接近截图）
                center: ['19%', '50%'],
                startAngle: 90,
                padAngle: 3,                       // 扇区间留缝（°） TODO: 调大更明显
                label: { show: false },
                labelLine: { show: false },
                itemStyle: { borderWidth: 0 },
                data: seriesData.map(d => ({ value: d.value, name: d.name, itemStyle: { color: d.color } }))
            },
            // 外细环（更细颜色圈）
            {
                type: 'pie',
                radius: ['44%', '50%'],
                center: ['19%', '50%'],
                startAngle: 90,
                silent: true,
                z: 3,
                label: { show: false },
                labelLine: { show: false },
                data: seriesData.map(d => ({ value: d.value, itemStyle: { color: 'rgba(255, 255, 255, 0.13)' } }))
            }
        ],

        // 中心总数与“Total”
        graphic: [
            {
                type: 'text',
                left: '15%',
                top: '35%',                         // 数字略偏上
                z: 10,
                style: {
                    text: `${totalValue}`,            // TODO: 来自接口可传参
                    fill: '#FFFFFF',
                    fontWeight: 700,
                    fontFamily: 'Roboto',
                    fontSize: fontSizeRem(44),       // TODO: 数字字号
                    textAlign: 'center'
                }
            },
            {
                type: 'text',
                left: '12.5%',
                top: '48%',                         // “Total”略偏下
                z: 10,
                style: {
                    text: '————————',
                    fill: '#FFFFFF80',
                    fontFamily: 'Roboto',
                    fontSize: fontSizeRem(20),
                    textAlign: 'center'
                }
            },
            {
                type: 'text',
                left: '16%',
                top: '56%',                         // “Total”略偏下
                z: 10,
                style: {
                    text: 'Total',
                    fill: '#FFFFFF80',
                    fontFamily: 'Roboto',
                    fontSize: fontSizeRem(20),
                    textAlign: 'center'
                }
            }
        ]
    };

    chart.setOption(option);
    window.addEventListener('resize', () => chart.resize());
}
