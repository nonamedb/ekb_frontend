<template>
    <router-view id="app"></router-view>
</template>

<style>
@import '/fonts/icons/hack.css';

html, body {
    height: 100%;
    padding: 0;
    margin: 0;
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

@font-face {
    font-family: 'hack';
    font-weight: normal;
    font-style: normal;
    src: url('/fonts/icons/hack.woff') format('woff');
}

</style>
