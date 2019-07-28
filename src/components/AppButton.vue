<template>
    <button class="btn" @click="onClick">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class AppButton extends Vue {
    @Prop({ default: 'primary' }) private type!: string;
    @Prop() private click!: (...args: any[]) => void;
    @Prop({ default: false }) private disabled!: boolean;
    @Prop({ default: false }) private hollow!: boolean;

    private onClick(e: Event): void {
        e.preventDefault();
        if (!this.disabled) {
            this.click();
        }
    }
}
</script>

<style scoped>
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    font-family: inherit;
    background-color: #007AFF;
    border: none;
    padding: 0;
    width: 100%;
    border-radius: 5px;
    color: white;
}
</style>
