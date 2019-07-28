<template>
    <label class="appInput">
        <span class="label">{{ label }}</span>
        <input @input="handleInput"
               @focus="onFocus"
               @blur="onBlur"
               class="input"
               :type="typeValue"
               :placeholder="placeholder"
               v-model="input"
        >
        <ul class="list_default appInput__items" v-if="searchItems.length !== 0 && isSearchShown">
            <li class="appInput__item" v-for="item in searchItems" :key="item" @mousedown="handleSelect(item)">{{ item }}</li>
        </ul>
    </label>
</template>

<script lang="ts">
import { Component, Prop, Model, Vue } from 'vue-property-decorator';

@Component
export default class AppInput extends Vue {
    @Prop({ default: 'text' }) private type!: string;
    @Prop({ default: '' }) private label!: string;
    @Prop({ default: '' }) private placeholder!: string;
    @Prop({ default: () => [] }) private searchItems!: string[];
    @Prop({ default: 0 }) private searchStart!: number;
    @Prop({ default: '' }) private value!: string;

    private input: string = this.value;
    private focused: boolean = false;
    private visited: boolean = false;
    private isPasswordShown: boolean = false;
    private typeValue: string = this.type;

    private isSelected: boolean = false;

    private get isSearchShown(): boolean {
        return !this.isSelected && this.searchStart <= this.input.length && this.focused;
    }

    private onFocus(): void {
        this.focused = true;
    }

    private onBlur(): void {
        this.focused = false;
        this.visited = true;
    }

    private handleInput(event: any): void {
        this.$emit('input', event.target.value);
        this.isSelected = false;
    }

    private toggleEye(): void {
        if (this.isPasswordShown) {
            this.typeValue = 'password';
        } else {
            this.typeValue = 'text';
        }
        this.isPasswordShown = !this.isPasswordShown;
    }

    private handleSelect(value: string): void {
        this.$emit('input', value);
        this.isSelected = true;
    }
}
</script>

<style scoped>
.appInput {
    display: block;
    position: relative;
}

.appInput {
    width: 100%;
}

.appInput__items {
    color: white;
    padding: 10px 17px;
    background-color: black;
    margin-top: -2px;
    border-radius: 3px;
    position: absolute;
    width: inherit;
    box-sizing: border-box;
    z-index: 1;
}

.appInput__item {
    cursor: pointer;
    padding: 5px 0;
}

.appInput__item:not(:first-child) {
    border-top: solid grey 1px;
}

.label {
    display: block;
    color: #979797;
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 5px;
}

.input {
    border: 1px solid #D8D8D8;
    border-radius: 5px;
    background-color: white;
    width: 225px;
    height: 40px;
    padding-left: 15px;
    font-size: 12px;
    color: #979797;
}

.input:focus {
    outline: none;
}
</style>
