<script setup>
import {inject, ref, onMounted, provide} from "vue";
import {FacingDirection} from "../File/11.13b43/HouseFileCodesLibrary.js";
import SpeechRecognition from "../components/SpeechRecognition.vue";

let houseFileObject = inject("houseFileObject");
const dataContainer = ".house-data-labels";

provide("dataContainer", dataContainer);
onMounted(() => {
});
</script>

<template>
    <div class="house-data-labels grid gap-4 mb-4 grid-cols-2">
        <div class="col-span-2">
            <speech-recognition></speech-recognition>
        </div>
        <div class="col-span-2 lg:col-span-1">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Front Orientation</label>
            <select name="frontOrientation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="houseFileObject.house.houseType">
                <option v-for="(item, index) in FacingDirection()" :key="index" :value="item.code" :selected="index === 0">{{item.english}}</option>
            </select>
        </div>
        <div class="col-span-2 lg:col-span-1">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">House Type</label>
            <select name="houseType" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="houseFileObject.house.houseType">
                <option v-for="(item, index) in houseFileObject.house.codes.houseType" :key="index" :value="item.code" :selected="index === 0">{{item.english}}</option>
            </select>
        </div>
        <div class="col-span-2 lg:col-span-1">
            <label for="numberOfFloors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Floors</label>
            <select name="numberOfFloors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="houseFileObject.house.houseType">
                <option v-for="(item, index) in houseFileObject.house.codes.houseType" :key="index" :value="item.code" :selected="index === 0">{{item.english}}</option>
            </select>
        </div>
        <div class="col-span-2 lg:col-span-1">
            <label for="weatherCity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weather City</label>
            <select name="weatherCity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="houseFileObject.house.houseType">
                <option v-for="(item, index) in houseFileObject.house.codes.houseType" :key="index" :value="item.code" :selected="index === 0">{{item.english}}</option>
            </select>
        </div>
    </div>
</template>

<style scoped>

</style>
