/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import "flowbite";
import { ZiggyVue } from "ziggy-js";
import {isTouchable} from "./utilities/device.js";
window.flowbiteInstances = FlowbiteInstances;
const app = createApp({}).use(ZiggyVue);
window.isTouchable = isTouchable();
Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
    app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
});
app.mount('#app');
