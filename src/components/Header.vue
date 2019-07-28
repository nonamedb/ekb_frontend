<template>
    <header class="header">
        <div class="header__icon icon-menu"></div>
        <div class="header__icon icon-calendary"></div>
        <div class="header__icon icon-recent"></div>
        <div class="header__icon icon-search"></div>
        <div class="header__icon icon-favourites"></div>
        <div class="header__icon icon-sources"></div>
        <div>
            <span class="header__icon icon-user"></span>
            <span>Личный кабинет</span>
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>

<style scoped>
.header {
    height: 74px;
    width: 100%;
    background-color: #D8D8D8;
    padding: 0 27px;
    display: grid;
    grid-template-columns: repeat(4, max-content) auto repeat(3, max-content);
    align-items: center;
    grid-column-gap: 30px;
    box-sizing: border-box;
}

.header__icon {
    color: #8A8A8F;
    cursor: pointer;
}

.icon-favourites {
    grid-column: 6 / 7;
}
</style>
