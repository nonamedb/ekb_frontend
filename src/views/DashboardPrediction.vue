<template>
    <div class="dashboardPrediction">
        <BarChart v-if="!loading" :data="predictions" class="dashboardRegion__bar"></BarChart>
        <ul class="dashboardPrediction__inputs">
            <li v-for="p in newData" :key="p.abbr">
                <AppInput v-model.number="p.students" :label="p.label"></AppInput>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import BarChart from '@/charts/BarChart.vue';
import { IBarData } from '../store/types';
import AppInput from '@/components/AppInput.vue';
import { AppModule } from '@/store/modules/app';

@Component({
    components: { BarChart , AppInput },
})
export default class DashboardPrediction extends Vue {
    private newData: IBarData[] = [];

    private get predictions(): IBarData[] {
        return AppModule.predictions;
    }

    private get loading(): boolean {
        return AppModule.loading;
    }

    @Watch('predictions')
    private onPredictionChange(val: IBarData[]): void {
        this.newData = val;
    }

    private mounted(): void {
        AppModule.getPredictions();
    }
}
</script>

<style scoped>
.dashboardPrediction {
    display: flex;
}

.dashboardRegion__bar {
    width: 400px;
    height: 400px;
}

.dashboardPrediction__inputs {
    list-style-type: none;
}
</style>
