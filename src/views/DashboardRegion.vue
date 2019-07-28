<template>
    <div class="dashboardRegion">
        <img src="/sverd.svg" alt="obl">
        <ul class="dashboardRegion__list">
            <li class="list__item">
                <span>Программист</span>
                <span>&nbsp;—&nbsp;</span>
                <span class="mark_up">+8%</span>
                <span class="icon-up"></span>
            </li>
            <li class="list__item">
                <span>Учитель</span>
                <span>&nbsp;—&nbsp;</span>
                <span class="mark_down">-2%</span>
                <span class="icon-down"></span>
            </li>
                <li class="list__item">
                <span>Юрист</span>
                <span>&nbsp;—&nbsp;</span>
                <span class="mark_up">+4%</span>
                <span class="icon-up"></span>
            </li>
            <li>
                <li class="list__item">
                <span>Повар</span>
                <span>&nbsp;—&nbsp;</span>
                <span class="mark_up">+11%</span>
                <span class="icon-up"></span>
            </li>
            <li class="list__item">
                <span>Художник</span>
                <span>&nbsp;—&nbsp;</span>
                <span class="mark_down">-3%</span>
                <span class="icon-down"></span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DashboardRegion extends Vue {

}
</script>

<style scoped>
.dashboardRegion {
    display: flex;
}

.dashboardRegion__list {
    list-style-type: none;
}

.mark_down {
    color: #FF1053;
}

.mark_up {
    color: #05E389;
}

.icon-up, .icon-down {
    font-size: 8px;
}

.icon-down {
    color: #FF1053;
}

.icon-up {
    color: #05E389;
}

.list__item {
    display: flex;
    align-items: center;
}

.list__item:not(:first-child) {
    margin-top: 15px;
}
</style>
