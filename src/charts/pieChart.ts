import * as d3 from 'd3';

const CHART_THICKNESS = 30;
const START_ANGLE = 1.8;
const FONT_SIZE = 11;
const COLORS = ['#30bfac', '#ffcc00', '#d16d35', '#d13e35', '#b5105f', '#3d22ff', '#1774ff'];

function pieChartBuild(svgElem: Element, chartData: IData[]): void {
    const svg = d3.select(svgElem);
    const rect = svgElem.getBoundingClientRect();
    const width = rect.right - rect.left;
    const height = rect.bottom - rect.top;
    const CHART_RADIUS = width / 4;
    const PAD_RADIUS = CHART_RADIUS - CHART_THICKNESS;
    svg.attr('viewBox', `-${width / 2} -${(height) / 2} ${width} ${height}`);
    const chartGroup = svg.append('g');

    const color = d3.scaleOrdinal().domain(chartData.map((item) => item.name)).range(COLORS);

    const pie = d3.pie().startAngle(START_ANGLE).endAngle(Math.PI * 2 + START_ANGLE).value((data: any) => data.value);
    const readyData = pie(chartData as any);
    const arc = d3.arc().innerRadius(CHART_RADIUS - CHART_THICKNESS).outerRadius(CHART_RADIUS) as any;

    chartGroup.selectAll('allSlices').data(readyData).enter()
    .append('path').attr('d', arc).attr('fill', (item: any) => color(item.data.name) as any);
}

function destroyChart(element: Element): void {
    d3.select(element.children[0]).remove();
}

export const pieChart = pieChartBuild;
export const destroyPieChart = destroyChart;

export interface IData {
    name: string;
    value: number;
}
