<script setup>
import {inject, ref, onMounted} from "vue";
import FrontOrientation from "../components/FrontOrientation.vue";
import {FacingDirection} from "../File/11.13b43/HouseFileCodesLibrary.js";

let houseFileObject = inject("houseFileObject");
let startMic = inject("startMic");
let stopMic = inject("stopMic");
let recording = inject("recording");

onMounted(() => {

});
</script>

<template>
    <div class="grid gap-4 mb-4 grid-cols-3">
        <div class="col-span-3 lg:col-span-1">
            <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Front orientation</label>
            <div class="relative mb-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5">
                    <i v-if="!recording" class="fa fa-microphone fa-1_2x text-gray-500 dark:text-gray-300 hover:text-gray-100 cursor-pointer" @click="startMic"></i>
                    <i v-else class="fa fa-stop fa-1_2x text-gray-500 dark:text-gray-300 hover:text-gray-100 cursor-pointer" @click="stopMic('orientation')"></i>
                </div>
                <select name="orientation" class="ps-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="houseFileObject.house.facingDirection">
                    <option v-for="(item, index) in FacingDirection()" :key="index" :value="item.code" :selected="index === 0">{{item.english}}</option>
                </select>
            </div>
        </div>
        <div class="col-span-3 lg:col-span-1">
            <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">House type</label>
            <div class="relative mb-6">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3.5">
                    <i v-if="!recording" class="fa fa-microphone fa-1_2x text-gray-500 dark:text-gray-300 hover:text-gray-100 cursor-pointer" @click="startMic"></i>
                    <i v-else class="fa fa-stop fa-1_2x text-gray-500 dark:text-gray-300 hover:text-gray-100 cursor-pointer" @click="stopMic('storeys')"></i>
                </div>
                <select name="storeys" class="ps-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" v-model="houseFileObject.house.houseType">
                    <option v-for="(item, index) in houseFileObject.house.codes.houseType" :key="index" :value="item.code" :selected="index === 0">{{item.english}}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
