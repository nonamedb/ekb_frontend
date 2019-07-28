<template>
    <div class="dashboardIndustry">
        <DonutChart class="dashboardIndustry__chart"></DonutChart>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import DonutChart from '@/charts/DonutChart.vue';

@Component({
    components: { DonutChart },
})
export default class DashboardIndustry extends Vue {

}
</script>

<style scoped>
.dashboardIndustry__chart {
    width: 350px;
    height: 350px;
}
</style>
