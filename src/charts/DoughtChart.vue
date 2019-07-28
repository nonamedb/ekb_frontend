<template>
    <div class="pieChart">
        <svg class="pieChart__svg" preserveAspectRatio="xMinYMin meet"></svg>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Prop, Vue } from 'vue-property-decorator';
import { pieChart, destroyPieChart, IData } from '@/charts/pieChart.ts';
@Component
export default class DoughtChart extends Vue {

    private get chartData(): IData[] {

        return [{ name: 'lol', value: 100 }, { name: 'kek', value: 20 }];
    }

    @Watch('chartData')
    private onChartDataChange(): void {
        if (this.chartData.length !== 0) {
            const svg = this.$el.getElementsByTagName('svg')[0];
            destroyPieChart(svg);
            // @ts-ignore
            pieChart(svg, this.chartData);
        }
    }

    private mounted(): void {
        this.onChartDataChange();
    }
}
</script>

<style scoped>
</style>
