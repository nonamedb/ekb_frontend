<template>
    <div class="dashboardPrediction">
        <BarChart v-if="!loading" :data="predictions" class="dashboardRegion__bar"></BarChart>
        <ul class="dashboardPrediction__inputs">
            <li class="inputs__item" v-for="p in newData" :key="p.abbr">
                <AppInput v-model.number="p.students" :label="p.label"></AppInput>
            </li>
            <AppButton class="dashboardPrediction__btn" :click="handleClick">Предсказать</AppButton>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import BarChart from '@/charts/BarChart.vue';
import { IBarData } from '../store/types';
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import { AppModule } from '@/store/modules/app';

@Component({
    components: { BarChart , AppInput, AppButton },
})
export default class DashboardPrediction extends Vue {
    private newData: IBarData[] = [];

    private get predictions(): IBarData[] {
        return AppModule.predictions;
    }

    private handleClick(): void {
        AppModule.postNewData(this.newData);
    }

    private get loading(): boolean {
        return AppModule.loading;
    }

    @Watch('predictions')
    private onPredictionChange(val: IBarData[]): void {
        this.newData = [...val];
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
    margin-top: 0;
}

.dashboardPrediction__btn {
    margin-top: 15px;
    height: 40px;
}

.inputs__item:not(:first-child) {
    margin-top: 10px;
}
</style>
