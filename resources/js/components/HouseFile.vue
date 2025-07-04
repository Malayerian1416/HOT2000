<script setup>
import {inject, nextTick, onMounted, reactive, ref} from "vue";
import {initDropdowns, initModals} from "flowbite";
import {route} from "ziggy-js";
import GoogleUtility from "../utilities/GoogleUtility.js";
import * as Regions from "../utilities/Regions.js";
import Audition from "../components/Audition.vue";


defineEmits(["setComponent"]);
const googleUtility = new GoogleUtility();
let alert = inject('alert');
let loading = inject('loading');
let auditionState = ref(false);
const filterTables = inject('filterTables');
const buttonLoading = inject('buttonLoading');
const maskElement = inject('maskElement');
const inputClass = inject('inputClass');
const houseFileId = 0;

let houseFiles = ref([]);
let companies = ref([]);
let crudType = ref(null);
let cities = Regions.ontario.cities;
let crudHouseFile = reactive({
    companyId: null,
    fileId: null,
    clientFirstName: null,
    clientLastName: null,
    clientPhone: null,
    clientEmail: null,
    street: null,
    unit: null,
    city: null,
    region: null,
    postalCode: null,
    notes: null
});

onMounted(async () => {
    loading.value = false;
    maskElement();
    await fetchHouseFiles();
});
const showAlert = (show, type, message, timeout) => {
    alert.show = show;
    alert.type = type;
    alert.message = message;
    alert.timeout = timeout;
};
const fetchHouseFiles = async () =>{
    await axios.get(route("HouseFile.index")).then(response => {
        houseFiles.value = response.data['houseFiles'];
        companies.value = response.data['companies'];
    }).catch(error => {
        showAlert(true, 'error', error.message, 5);
    }).finally(async () => {
        await nextTick(() => {
            initDropdowns();
            initModals();
        });
    });
}
const setCrudCompany = async (type, values = null) => {
    crudType.value = type;
    crudHouseFile.id = values?.id ? values['id'] : null;
    crudHouseFile.companyId = values?.companyId ? values['companyId'] : null;
    crudHouseFile.fileId = values?.fileId ? values['fileId'] : null;
    crudHouseFile.clientFirstName = values?.clientFirstName ? values['clientFirstName'] : null;
    crudHouseFile.clientLastName = values?.clientLastName ? values['clientLastName'] : null;
    crudHouseFile.clientPhone = values?.clientPhone ? values['clientPhone'] : '';
    crudHouseFile.clientEmail = values?.clientEmail ? values['clientEmail'] : null;
    crudHouseFile.street = values?.street ? values['street'] : null;
    crudHouseFile.unit = values?.unit ? values['unit'] : null;
    crudHouseFile.city = values?.city ? values['city'] : null;
    crudHouseFile.region = values?.region ? values['region'] : null;
    crudHouseFile.postalCode = values?.postalCode ? values['postalCode'] : null;
    crudHouseFile.notes = values?.notes ? values['notes'] : null;
    await nextTick();
    maskElement();
}
const createHouseFile = (e) => {
    const button = e.currentTarget;
    buttonLoading(button, 'load');
    axios.post(route("HouseFile.store"), crudHouseFile).then(response => {
        console.log(response.data.message)
        showAlert(true, response.data.status, response.data.message, 5);
    }).catch(error => {
        inputClass.errors = error.response.data.errors;
        console.log(error.response.data.errors)
        showAlert(true, 'error', error.response.data.errors, 10);
    }).finally(async () => {
        buttonLoading(button, 'stop');
        await fetchHouseFiles();
    });
};
const updateHouseFile = (e) => {
    const button = e.currentTarget;
    buttonLoading(button, 'load');
    axios.put(route("HouseFile.update",{id:crudHouseFile.id}), crudHouseFile).then(response => {
        showAlert(true, response.data.status, response.data.message, 5);
    }).catch(error => {
        inputClass.errors = error.response.data.errors;
        showAlert(true, 'error', error.response.data.errors, 10);
    }).finally(async () => {
        buttonLoading(button, 'stop');
        await fetchHouseFiles();
    });
};
const deleteHouseFile = (e) => {
    const button = e.currentTarget;
    buttonLoading(button, 'load');
    axios.delete(route("HouseFile.destroy",{id:crudHouseFile.id})).then(response => {
        showAlert(true, response.data.status, response.data.message, 5);
    }).catch(error => {
        inputClass.errors = error.response.data.errors;
        showAlert(true, 'error', error.response.data.errors, 10);
    }).finally(async () => {
        buttonLoading(button, 'stop');
        await fetchHouseFiles();
    });
};
async function addressFinder() {
    const result = await googleUtility.GeoLocation(`${crudHouseFile.street}, ${crudHouseFile.city}, ${crudHouseFile.postalCode}, ${crudHouseFile.region}`);
    if (result) {
        crudHouseFile.street = `${result.streetNumber} ${result.streetAddress}`;
        crudHouseFile.unit = result.unit;
        crudHouseFile.city = result.city;
        crudHouseFile.region = result.region;
        crudHouseFile.postalCode = result.postalCode;
    }
}

const closeAndSaveAudition = () => {
    auditionState.value = false;
    document.querySelector("#app").style.display = "";
}

function setCompany(e) {
    crudHouseFile.companyId = parseInt(e.target.value);
    const company = companies.value.find(company => {return company.id === crudHouseFile.companyId;});
    if (company)
        crudHouseFile.fileId = company["nextFileId"];
}

</script>

<template>
    <section v-if="!auditionState" class="bg-gray-50 dark:bg-gray-900 w-full">
        <div class="w-full">
            <div class="bg-white dark:bg-gray-800 relative shadow-md overflow-hidden">
                <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                    <div class="w-full md:w-1/2">
                        <form class="flex items-center">
                            <label for="simple-search" class="sr-only">Search</label>
                            <div class="relative w-full">
                                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <input type="text" data-table="companies" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" @input="filterTables($event.target)" placeholder="Search">
                            </div>
                        </form>
                    </div>
                    <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                        <button data-modal-target="crudModal" data-modal-show="crudModal" type="button" class="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" @click="setCrudCompany('create')">
                            Add Company
                        </button>
                        <div class="flex items-center space-x-3 w-full md:w-auto">
                            <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                <svg class="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                                Actions
                            </button>
                            <div id="actionsDropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                                    <li>
                                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                                    </li>
                                </ul>
                                <div class="py-1">
                                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                                </div>
                            </div>
                            <button id="searchQueryDropdownButton" data-dropdown-toggle="searchQueryDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="h-4 w-4 mr-2 text-gray-400" viewbox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
                                </svg>
                                searchQuery
                                <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                </svg>
                            </button>
                            <div id="searchQueryDropdown" class="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                                <h6 class="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                                <ul class="space-y-2 text-sm" aria-labelledby="searchQueryDropdownButton">
                                    <li class="flex items-center">
                                        <input id="apple" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="apple" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="fitbit" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="fitbit" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Microsoft (16)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="razor" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="razor" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Razor (49)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="nikon" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="nikon" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Nikon (12)</label>
                                    </li>
                                    <li class="flex items-center">
                                        <input id="benq" type="checkbox" value="" class="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                        <label for="benq" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">BenQ (74)</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="overflow-x-auto w-full">
                    <table id="companies" data-columns="[0,1,2,3,4]" class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3">ID</th>
                            <th scope="col" class="px-4 py-3">Company</th>
                            <th scope="col" class="px-4 py-3">File ID</th>
                            <th scope="col" class="px-4 py-3">Client Name</th>
                            <th scope="col" class="px-4 py-3">Street</th>
                            <th scope="col" class="px-4 py-3">Unit</th>
                            <th scope="col" class="px-4 py-3">City</th>
                            <th scope="col" class="px-4 py-3">Region</th>
                            <th scope="col" class="px-4 py-3">Postal Code</th>
                            <th scope="col" class="px-4 py-3">Status</th>
                            <th scope="col" class="px-4 py-3">Created at</th>
                            <th scope="col" class="px-4 py-3">Updated at</th>
                            <th scope="col" class="px-4 py-3">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr class="border-b dark:border-gray-700" v-for="(houseFile, index) in houseFiles" :key="index">
                            <td class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">{{houseFile.id}}</td>
                            <td class="px-4 py-3">{{houseFile.company.name}}</td>
                            <td class="px-4 py-3">{{houseFile.fileId}}</td>
                            <td class="px-4 py-3">{{`${houseFile.clientFirstName} ${houseFile.clientLastName}`}}</td>
                            <td class="px-4 py-3">{{houseFile.street}}</td>
                            <td class="px-4 py-3">{{houseFile.unit}}</td>
                            <td class="px-4 py-3">{{houseFile.city}}</td>
                            <td class="px-4 py-3">{{houseFile.region}}</td>
                            <td class="px-4 py-3">{{houseFile.postalCode}}</td>
                            <td class="px-4 py-3">{{houseFile.status}}</td>
                            <td class="px-4 py-3">{{new Date(houseFile["created_at"]).toLocaleString()}}</td>
                            <td class="px-4 py-3">{{new Date(houseFile["updated_at"]).toLocaleString()}}</td>
                            <td class="px-4 py-3 flex items-center justify-center">
                                <button :id="`dropdown-button-${houseFile.id}`" data-dropdown-placement="left" :data-dropdown-toggle="`dropdown-${houseFile.id}`" class="inline-flex items-center p-0.5 text-sm font-medium text-center text-gray-500 hover:text-gray-800 rounded-lg focus:outline-none dark:text-gray-400 dark:hover:text-gray-100 cursor-pointer" type="button">
                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                                    </svg>
                                </button>
                                <div :id="`dropdown-${houseFile.id}`" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <div class="py-1 cursor-pointer">
                                        <a class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" @click="auditionState = true; houseFileId = houseFile.id">Start Audition</a>
                                        <a class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Manual</a>
                                    </div>
                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" :aria-labelledby="`dropdown-button-${houseFile.id}`">
                                        <li class="cursor-pointer">
                                            <a class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Show</a>
                                        </li>
                                        <li class="cursor-pointer">
                                            <a role="button" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" data-modal-target="crudModal" data-modal-toggle="crudModal" @click="setCrudCompany('update', houseFile)">Edit</a>
                                        </li>
                                    </ul>
                                    <div class="py-1 cursor-pointer">
                                        <a role="button" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white" data-modal-target="deleteModal" data-modal-toggle="deleteModal" @click="setCrudCompany('delete',houseFile)">Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <nav class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4" aria-label="Table navigation">
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                    Showing
                    <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
                    of
                    <span class="font-semibold text-gray-900 dark:text-white">1000</span>
                </span>
                    <ul class="inline-flex items-stretch -space-x-px">
                        <li>
                            <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Previous</span>
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="flex items-center justify-center text-sm z-10 py-2 px-3 leading-tight text-primary-600 bg-primary-50 border border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">...</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">100</a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <span class="sr-only">Next</span>
                                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <div id="crudModal" tabindex="-1" data-modal-backdrop="static" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full lg:max-w-2/5 max-w-full max-h-full">
            <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                        Create New House File
                    </h3>
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="crudModal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <div class="p-4 md:p-5">
                    <div class="grid gap-4 mb-4 grid-cols-3">
                        <div class="col-span-3 lg:col-span-1">
                            <label for="companyId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                            <select name="companyId" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" @change="setCompany">
                                <option>Choose company...</option>
                                <option v-for="(company, index) in companies" :value="company.id" :key="index">{{company.name}}</option>
                            </select>
                        </div>
                        <div class="col-span-3 lg:col-span-1">
                            <label for="fileId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">File ID</label>
                            <input type="text" name="fileId" v-model="crudHouseFile.fileId" class="uppercase bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        </div>
                        <div class="col-span-3 lg:col-span-1">
                            <label for="clientFirstName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client First Name</label>
                            <input type="text" name="clientFirstName" v-model="crudHouseFile.clientFirstName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        </div>
                        <div class="col-span-3 lg:col-span-1">
                            <label for="clientLastName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client Last Name</label>
                            <input type="text" name="clientLastName" v-model="crudHouseFile.clientLastName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        </div>
                        <div class="col-span-3 lg:col-span-1">
                            <label for="clientPhone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client Phone</label>
                            <input type="text" name="clientPhone" v-model="crudHouseFile.clientPhone" class="phoneMask bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        </div>
                        <div class="col-span-3 lg:col-span-1">
                            <label for="clientEmail" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Client Email</label>
                            <input type="text" name="clientEmail" v-model="crudHouseFile.clientEmail" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                        </div>
                        <div class="col-span-3 lg:col-span-2">
                            <label for="street" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Street</label>
                            <div class="flex mb-2 input-group">
                                <input type="text" name="street" v-model="crudHouseFile.street" class="rounded-s-md bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" @change="crudHouseFile.city='';crudHouseFile.postalCode=''">
                                <span class="inline-flex items-center px-3 rounded-e-md  text-sm text-gray-900 bg-gray-200 border border-gray-300 border-e-0 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                        <i class="fa fa-magnifying-glass-location fa-1_4x cursor-pointer hover:text-gray-200" @click="addressFinder"></i>
                    </span>
                            </div>
                        </div>
                        <div class="col-span-3 lg:col-span-1">
                            <label for="unit" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unit</label>
                            <input type="text" name="unit" v-model="crudHouseFile.unit" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 alphanumericMasks">
                        </div>
                        <div class="col-span-3 lg:col-span-1">
                            <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
                            <input type="text" list="cities" name="city" v-model="crudHouseFile.city" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <datalist id="cities">
                                <option v-for="(city, index) in cities" :value="city" :key="index">{{city}}</option>
                            </datalist>
                        </div>
                        <div class="col-span-3 lg:col-span-1">
                            <label for="region" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Region</label>
                            <input type="text" name="region" v-model="crudHouseFile.region" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" value="Ontario">
                        </div>
                        <div class="col-span-3 lg:col-span-1">
                            <label for="postalCode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Postal Code</label>
                            <input type="text" name="postalCode" v-model="crudHouseFile.postalCode" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 postalCodeMask uppercase">
                        </div>
                        <div class="col-span-3">
                            <label for="notes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Notes</label>
                            <textarea name="notes" v-model="crudHouseFile.notes" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                        </div>
                    </div>
                    <button v-if="crudType === 'create'" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="createHouseFile">
                        <span class="sr-only">
                            <svg aria-hidden="true" class="inline w-4 h-4 me-3 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                            </svg>
                            Creating House File...
                        </span>
                        <span>Create new House File</span>
                    </button>
                    <button v-if="crudType === 'update'" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="updateHouseFile">
                        <span class="sr-only">
                            <svg aria-hidden="true" class="inline w-4 h-4 me-3 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                            </svg>
                            Updating House File...
                        </span>
                        <span>Update House File</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div id="deleteModal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full">
        <div class="relative p-4 w-full max-w-md h-full md:h-auto">
            <div class="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
                <button type="button" class="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="deleteModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <svg class="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                <p class="mb-4 text-gray-500 dark:text-gray-300">Are you sure you want to delete this item?</p>
                <div class="flex justify-center items-center space-x-4">
                    <button data-modal-target="deleteModal" data-modal-toggle="deleteModal" type="button" class="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                        No, cancel
                    </button>
                    <button data-modal-hide="deleteModal" class="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900" @click="deleteHouseFile">
                        <span class="sr-only">
                            <svg aria-hidden="true" class="inline w-4 h-4 me-3 animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                            </svg>
                            Deleting Company...
                        </span>
                        <span>Yes, I'm sure</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <audition v-if="auditionState" :houseFileId="houseFileId" @close-save-audition="closeAndSaveAudition"></audition>
</template>
