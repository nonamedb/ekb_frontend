<template>
    <div class="dashboard">
        <Header></Header>
        <main class="dashboardMain">
            <h1 class="dashboard__title">ОБЩАЯ СТАТИСТИКА</h1>
            <ul class="dashboard__routing">
                <li class="routing__item"
                    @click="goToRegion"
                    :class="{ 'routing_selected': currentRoute === 'DashboardRegion' }"
                >
                    СТАТИСТИКА ПО РЕГИОНАМ
                </li>
                <div class="divider"></div>
                <li class="routing__item"
                    @click="goToIndustry"
                    :class="{ 'routing_selected': currentRoute === 'DashboardIndustry' }"
                >
                    СТАТИСТИКА ПО ОТРАСЛЯМ
                </li>
                <div class="divider"></div>
                <li class="routing__item"
                    @click="goToPrediction"
                    :class="{ 'routing_selected': currentRoute === 'DashboardPrediction' }"
                >
                    ПРОГНОЗ
                </li>
            </ul>
            <router-view></router-view>
        </main>
    </div>
</template>

<script lang="ts">
import { Component, Watch, Prop, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
import { Route } from 'vue-router';

@Component({
    components: { Header },
})
export default class Dashboard extends Vue {
    // @ts-ignore
    private currentRoute: string = '';

    private goToRegion(): void {
        this.$router.push({ name: 'DashboardRegion' });
    }

    private goToIndustry(): void {
        this.$router.push({ name: 'DashboardIndustry' });
    }

    private goToPrediction(): void {
        this.$router.push({ name: 'DashboardPrediction' });
    }

    @Watch('$route')
    private onRouteChange(val: Route): void {
        // @ts-ignore
        this.currentRoute = val.name;
    }

    private mounted(): void {
        // @ts-ignore
        this.currentRoute = this.$route.name;
    }
}
</script>

<style scoped>
.dashboard {
    width: 100%;
    height: 100%;
}

.dashboardMain {
    padding: 30px;
}

.dashboard__title {
    color: #007AFF;
    font-size: 18px;
    margin-top: 0;
}

.dashboard__routing {
    list-style-type: none;
    display: flex;
    align-items: center;
    user-select: none;
    padding: 0;
    margin-top: 20px;
}

.routing__item {
    color: #979797;
    font-size: 12px;
    cursor: pointer;
}

.divider {
    transform: rotate(21.83deg);
    height: 42px;
    background-color: #007AFF;
    width: 2.5px;
    margin: 0 13px;
}

.routing_selected {
    color: black;
}
</style>
