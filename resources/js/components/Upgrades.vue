<script setup>
import {inject, nextTick, onMounted, reactive, ref} from "vue";
import {initDropdowns, initModals} from "flowbite";
import {route} from "ziggy-js";

let alert = inject('alert');
let loading = inject('loading');
const filterTables = inject('filterTables');
const buttonLoading = inject('buttonLoading');
const maskElement = inject('maskElement');
const inputClass = inject('inputClass');

let upgrades = ref([]);
let crudType = ref(null);
let crudUpgrades = reactive({
    attic: {
        flat: {
            roofSlope: null,
            heelHeight: null,
            structureType: null,
            componentType: null,
            spacing: null,
            insulationLayer1: null,
            insulationLayer2: null,
            interior: null
        },
        gable: {
            roofSlope: null,
            heelHeight: null,
            structureType: null,
            componentType: null,
            spacing: null,
            insulationLayer1: null,
            insulationLayer2: null,
            interior: null
        },
        hip: {
            roofSlope: null,
            heelHeight: null,
            structureType: null,
            componentType: null,
            spacing: null,
            insulationLayer1: null,
            insulationLayer2: null,
            interior: null
        },
        cathedral: {
            roofSlope: null,
            heelHeight: null,
            structureType: null,
            componentType: null,
            spacing: null,
            insulationLayer1: null,
            insulationLayer2: null,
            interior: null
        },
        scissor: {
            roofSlope: null,
            heelHeight: null,
            structureType: null,
            componentType: null,
            spacing: null,
            insulationLayer1: null,
            insulationLayer2: null,
            interior: null
        },
    },
    mainWalls: {
        structureType: null,
        componentType: null,
        spacing: null,
        insulationLayer1: null,
        insulationLayer2: null,
        interior: null,
        sheathing: null,
        exterior: null,
        studs: null,
    },
    exposedFloor: {
        structureType: null,
        componentType: null,
        spacing: null,
        insulationLayer1: null,
        insulationLayer2: null,
        interior: null,
        sheathing: null,
        exterior: null,
        dropFraming: null,
    },
    foundation: {
        framing: null,
        spacing: null,
        insulationInFramingLayer: null,
        extraInsulationLayer: null,
    },
    temperatures: {},
    generation: {},
    naturalAirInfiltration: {},
    ventilation: {},
    heatingCoolingSystem: {},
    domesticHotWater: {},
    referenceHouse: {}
});
</script>

<template>

</template>

