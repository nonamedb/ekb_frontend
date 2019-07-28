<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Bar } from 'vue-chartjs';
import { Chart } from 'chart.js';
import { IBarData } from '../store/types';

@Component({
    extends: Bar,
})
export default class BarChart extends Vue {
    @Prop() private data!: IBarData[];

    private get labels(): string[] {
        return this.data.map((item) => item.label);
    }

    private get firstData(): number[] {
        return this.data.map((item) => item.current);
    }

    private get secondData(): number[] {
        return this.data.map((item) => item.prediction);
    }

    private chartdata: any = {
        labels: this.labels,
        datasets: [{
            backgroundColor: '#007AFF',
            data: this.firstData,
        },
        {
            backgroundColor: '#007AFF',
            data: this.secondData,
        }],
    };

    private options: Chart.ChartOptions = {
        legend: false,
        scaleBeginAtZero: false,
        responsive: true,
        scaleStartValue : -500,
        tooltips: {
            displayColors: false,
        },
        scales: {
            minBarLength: 10,
        },
    };

    private mounted(): void {
        this.renderChart(this.chartdata, this.options);
    }
}
</script>
