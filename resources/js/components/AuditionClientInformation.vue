<script setup>
import {inject} from "vue";

let houseFileObject = inject("houseFileObject");
</script>

<template>
    <div class="grid gap-4 mb-4 grid-cols-3">
    <div class="col-span-3 lg:col-span-1">
        <label for="companyId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
        <input type="text" readonly disabled name="fileId" v-model="houseFileObject.programInformation.file.company" class="uppercase bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
    </div>
    <div class="col-span-3 lg:col-span-1">
        <label for="fileId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File ID</label>
        <input type="text" disabled readonly name="fileId" v-model="houseFileObject.programInformation.file.identification" class="uppercase bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
    </div>
    <div class="col-span-3 lg:col-span-1">
        <label for="clientFirstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client First Name</label>
        <input type="text" readonly disabled name="clientFirstName" v-model="houseFileObject.programInformation.client.name.first" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
    </div>
    <div class="col-span-3 lg:col-span-1">
        <label for="clientLastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client Last Name</label>
        <input type="text" readonly disabled name="clientLastName" v-model="houseFileObject.programInformation.client.name.last" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
    </div>
    <div class="col-span-3 lg:col-span-1">
        <label for="clientPhone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client Phone</label>
        <input type="text" readonly disabled name="clientPhone" v-model="houseFileObject.programInformation.client.telephone" class="phoneMask bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
    </div>
    <div class="col-span-3 lg:col-span-1">
        <label for="clientEmail" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client Email</label>
        <input type="text" readonly disabled name="clientEmail" v-model="houseFileObject.programInformation.file.builderName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
    </div>
    <div class="col-span-3 lg:col-span-2">
        <label for="street" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Street</label>
        <input type="text" readonly disabled name="clientEmail" v-model="houseFileObject.programInformation.client.streetAddress.street" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
    </div>
    <div class="col-span-3 lg:col-span-1">
        <label for="unit" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unit</label>
        <input type="text" readonly disabled name="unit" v-model="houseFileObject.programInformation.client.streetAddress.unit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 alphanumericMasks">
    </div>
    <div class="col-span-3 lg:col-span-1">
        <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
        <input type="text" readonly disabled list="cities" name="city" v-model="houseFileObject.programInformation.client.streetAddress.city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
    </div>
    <div class="col-span-3 lg:col-span-1">
        <label for="region" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Province</label>
        <input type="text" readonly disabled name="region" v-model="houseFileObject.programInformation.client.streetAddress.province" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="Ontario">
    </div>
    <div class="col-span-3 lg:col-span-1">
        <label for="postalCode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postal Code</label>
        <input type="text" readonly disabled name="postalCode" v-model="houseFileObject.programInformation.client.streetAddress.postalCode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 postalCodeMask uppercase">
    </div>
    <div class="col-span-3">
        <label for="notes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Notes</label>
        <textarea name="notes" v-model="houseFileObject.programInformation.file.notes" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
    </div>
</div>
</template>

<style scoped>

</style>
