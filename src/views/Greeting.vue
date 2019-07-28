<template>
    <div class="greeting">
        <div class="greeting__goverment" @click="goToDashboard">ГОССЕКТОР</div>
        <div class="greeting__education" @click="goToDashboard">УНИВЕРСИТЕТЫ</div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Greeting extends Vue {
    private goToDashboard(): void {
        this.$router.push({ name: 'Dashboard' });
    }
}
</script>

<style scoped>
.greeting {
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
}

.greeting__goverment, .greeting__education {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.greeting__goverment {
    border-right: 1px solid black;
}
</style>
