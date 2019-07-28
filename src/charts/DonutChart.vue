<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Doughnut } from 'vue-chartjs';
import { Chart } from 'chart.js';

@Component({
    extends: Doughnut,
})
export default class DonutChart extends Vue {
    private chartdata: any = {
        datasets: [{
            data: [80, 20],
            backgroundColor: [
                '#35A1FF',
                '#1E3BB2',
                '#64A6BD',
                '#D1BCE3',
                '#F9E0D9',
                '#FF1053',
            ],
        }],
        labels: ['lol', 'kek'],
    };

    private options: Chart.ChartOptions = {
        responsive: true,
        legend: false,
        maintainAspectRatio: false,
        tooltips: {
            enabled: true,
            backgroundColor: 'white',
            displayColors: false,
            titleFontSize: '40',
            bodyFontColor: '#1F3BB3',
        },
    };

    private mounted(): void {
        this.renderChart(this.chartdata, this.options);
    }
}
</script>
