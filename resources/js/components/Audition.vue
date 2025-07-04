<script setup>
import {inject, nextTick, onMounted, provide, reactive, ref} from "vue";
import {route} from "ziggy-js";
import {initModals} from "flowbite";
import HouseFile from "../File/11.13b43/HouseFile.js";

defineEmits(["close-save-audition"]);
let loading = inject('loading');
let alert = inject('alert');
let houseFile = ref([]);
let houseFileObject = reactive([]);
houseFileObject = new HouseFile();
provide("houseFileObject",houseFileObject);
let companies = ref([]);
let component = ref({title: null, step: null});
const props = defineProps(["houseFileId"]);
onMounted(async () => {
    await fetchHouseFile();
    document.querySelector("#app").style.display = "none";
});
const showAlert = (show, type, message, timeout) => {
    alert.show = show;
    alert.type = type;
    alert.message = message;
    alert.timeout = timeout;
};
const progressChecker = (step) => {
    let result;
    switch (step) {
        case 1: {
            result = {
                companyAndFileId: houseFile.value?.companyId !== null && houseFile.value?.fileId !== null,
                clientInformation: houseFile.value?.clientFirstName !== null && houseFile.value?.clientLastName !== null && houseFile.value?.clientPhone !== null && houseFile.value?.clientEmail !== null,
                clientAddress: houseFile.value?.street !== null && houseFile.value?.city !== null && houseFile.value?.region !== null && houseFile.value?.postalCode !== null,
            }
            break;
        }
    }
    result.progress = () => {
        let progressBarWidth = 0;
        const itemWidth = Math.floor(100 / Object.keys(result).length);
        Object.keys(result).forEach( key => {
            if (result[key])
                progressBarWidth += itemWidth;
        });
        progressBarWidth = progressBarWidth * itemWidth;
        if(progressBarWidth > 100 || (progressBarWidth + itemWidth) > 100)
            progressBarWidth = 100;
        return `w-${progressBarWidth}`;
    }
    return result;
}
const fetchHouseFile = async () =>{
    await axios.post(route("audition.index", props.houseFileId)).then(response => {
        houseFile.value = response.data['houseFile'];
        houseFileObject.programInformation.client.name.first = houseFile.value["clientFirstName"];
        houseFileObject.programInformation.client.name.last = houseFile.value["clientLastName"];
        houseFileObject.programInformation.client.telephone = houseFile.value["clientPhone"];
        houseFileObject.programInformation.file.builderName = houseFile.value["clientEmail"];
        houseFileObject.programInformation.file.notes = houseFile.value["notes"];
        houseFileObject.programInformation.client.streetAddress.street = houseFile.value["street"];
        houseFileObject.programInformation.client.streetAddress.city = houseFile.value["city"];
        houseFileObject.programInformation.client.streetAddress.province = houseFile.value["region"];
        houseFileObject.programInformation.client.streetAddress.postalCode = houseFile.value["postalCode"];
        houseFileObject.programInformation.file.evaluationDate = new Date().toISOString().split("T")[0];
        houseFileObject.programInformation.file.enteredBy = houseFile.value["user"]["name"];
        houseFileObject.programInformation.file.userTelephone = houseFile.value["user"]["phone"];
        houseFileObject.programInformation.file.identification = houseFile.value["fileId"];
        houseFileObject.programInformation.file.company = houseFile.value["company"]["name"];
        houseFileObject.programInformation.file.companyTelephone = houseFile.value["company"]["phone"];
        companies.value = response.data['companies'];
    }).catch(error => {
        showAlert(true, 'error', error.message, 5);
    }).finally(async () => {
        await nextTick(() => {
            initModals();
        });
    });
}
</script>

<template>
    <Teleport to="body">
        <div class="audition-body w-dvw h-full absolute top-0 left-0 bg-gray-50 dark:bg-gray-900 p-8">
            <button class="fixed py-2 px-3 text-sm font-medium text-center text-white bg-blue-600 mb-2 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-red-900" @click="$emit('close-save-audition')">
                Save and exit
            </button>
            <div class="grid gap-5 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 content-between mt-12">
                <div data-modal-target="auditionModal" data-modal-show="auditionModal" class="bg-white border cursor-pointer group border-gray-200 hover:border-blue-500 hover:bg-gray-900 transition-all rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700" @click="component.step = 'audition-client-information'; component.title = 'Client information'">
                    <div class="w-fit overflow-hidden rounded-t-lg bg-white">
                        <img class="group-hover:scale-110 transition-all" src="../../images/audition/clientInformation.jpg" alt="" />
                    </div>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">CLIENT INFORMATION</h5>
                        </a>
                        <ul>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i v-if="progressChecker(1).companyAndFileId" class="fa fa-check text-green-500"></i>
                                <i v-else class="fa fa-times text-red-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Company and File ID</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i v-if="progressChecker(1).clientInformation" class="fa fa-check text-green-500"></i>
                                <i v-else class="fa fa-times text-red-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Client information</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i v-if="progressChecker(1).clientAddress" class="fa fa-check text-green-500"></i>
                                <i v-else class="fa fa-times text-red-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Client address</span>
                            </li>
                        </ul>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-2">
                            <div class="bg-blue-600 h-2.5 rounded-full" :class="progressChecker(1).progress()"></div>
                        </div>
                    </div>
                </div>
                <div data-modal-target="auditionModal" data-modal-show="auditionModal" class="bg-white border cursor-pointer group border-gray-200 hover:border-blue-500 hover:bg-gray-900 transition-all rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700" @click="component.step = 'audition-house-details'; component.title = 'House details'">
                    <div class="w-fit overflow-hidden rounded-t-lg bg-white">
                        <img class="group-hover:scale-110 transition-all" src="../../images/audition/houseDetails.jpg" alt="" />
                    </div>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HOUSE DETAILS </h5>
                        </a>
                        <ul>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Name & Family</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-times text-red-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                        </ul>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-2">
                            <div class="bg-blue-600 h-2.5 rounded-full w-10"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-white border cursor-pointer group border-gray-200 hover:border-blue-500 hover:bg-gray-900 transition-all hover:border-blue-500 hover:bg-gray-900 transition-all rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <div class="w-fit overflow-hidden rounded-t-lg bg-white">
                            <img class="group-hover:scale-110" src="../../images/audition/plan.jpg" alt="" />
                        </div>
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">PLAN</h5>
                        </a>
                        <ul>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Name & Family</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-times text-red-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                        </ul>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-2">
                            <div class="bg-blue-600 h-2.5 rounded-full w-10"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-white border cursor-pointer group border-gray-200 hover:border-blue-500 hover:bg-gray-900 transition-all rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div class="w-fit overflow-hidden rounded-t-lg bg-white">
                        <img class="group-hover:scale-110 transition-all" src="../../images/audition/atticDetails.jpg" alt="" />
                    </div>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">ATTIC</h5>
                        </a>
                        <ul>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Name & Family</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-times text-red-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                        </ul>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-2">
                            <div class="bg-blue-600 h-2.5 rounded-full w-10"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-white border cursor-pointer group border-gray-200 hover:border-blue-500 hover:bg-gray-900 transition-all rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div class="w-fit overflow-hidden rounded-t-lg bg-white">
                        <img class="group-hover:scale-110 transition-all" src="../../images/audition/wallDetails.jpg" alt="" />
                    </div>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">MAIN WALLS</h5>
                        </a>
                        <ul>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Name & Family</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-times text-red-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                        </ul>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-2">
                            <div class="bg-blue-600 h-2.5 rounded-full w-10"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-white border cursor-pointer group border-gray-200 hover:border-blue-500 hover:bg-gray-900 transition-all rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div class="w-fit overflow-hidden rounded-t-lg bg-white">
                        <img class="group-hover:scale-110 transition-all" src="../../images/audition/exposedFloorDetails.jpg" alt="" />
                    </div>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">EXPOSED FLOORS</h5>
                        </a>
                        <ul>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Name & Family</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-times text-red-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                        </ul>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-2">
                            <div class="bg-blue-600 h-2.5 rounded-full w-10"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-white border cursor-pointer group border-gray-200 hover:border-blue-500 hover:bg-gray-900 transition-all rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div class="w-fit overflow-hidden rounded-t-lg bg-white">
                        <img class="group-hover:scale-110 transition-all" src="../../images/audition/foundationDetails.jpg" alt="" />
                    </div>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FOUNDATION</h5>
                        </a>
                        <ul>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Name & Family</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-times text-red-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                        </ul>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-2">
                            <div class="bg-blue-600 h-2.5 rounded-full w-10"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-white border cursor-pointer group border-gray-200 hover:border-blue-500 hover:bg-gray-900 transition-all rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div class="w-fit overflow-hidden rounded-t-lg bg-white">
                        <img class="group-hover:scale-110 transition-all" src="../../images/audition/airInfiltration.jpg" alt="" />
                    </div>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BLOWER DOOR TEST</h5>
                        </a>
                        <ul>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Name & Family</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-times text-red-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                        </ul>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-2">
                            <div class="bg-blue-600 h-2.5 rounded-full w-10"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-white border cursor-pointer group border-gray-200 hover:border-blue-500 hover:bg-gray-900 transition-all rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div class="w-fit overflow-hidden rounded-t-lg bg-white">
                        <img class="group-hover:scale-110 transition-all" src="../../images/audition/heatingCooling.jpg" alt="" />
                    </div>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">HEATING/COOLING</h5>
                        </a>
                        <ul>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Name & Family</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-times text-red-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                        </ul>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-2">
                            <div class="bg-blue-600 h-2.5 rounded-full w-10"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-white border cursor-pointer group border-gray-200 hover:border-blue-500 hover:bg-gray-900 transition-all rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div class="w-fit overflow-hidden rounded-t-lg bg-white">
                        <img class="group-hover:scale-110 transition-all" src="../../images/audition/dhw.jpg" alt="" />
                    </div>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">DHW</h5>
                        </a>
                        <ul>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Name & Family</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-times text-red-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                        </ul>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-2">
                            <div class="bg-blue-600 h-2.5 rounded-full w-10"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-white border cursor-pointer group border-gray-200 hover:border-blue-500 hover:bg-gray-900 transition-all rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <div class="w-fit overflow-hidden rounded-t-lg bg-white">
                        <img class="group-hover:scale-110 transition-all" src="../../images/audition/windowsDoors.jpg" alt="" />
                    </div>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">WINDOWS/DOORS</h5>
                        </a>
                        <ul>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Name & Family</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-times text-red-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                        </ul>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-2">
                            <div class="bg-blue-600 h-2.5 rounded-full w-10"></div>
                        </div>
                    </div>
                </div>
                <div class="bg-white border cursor-pointer group border-gray-200 hover:border-blue-500 hover:bg-gray-900 transition-all hover:border-blue-500 hover:bg-gray-900 transition-all rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <div class="w-fit overflow-hidden rounded-t-lg bg-white">
                            <img class="group-hover:scale-110 transition-all" src="../../images/audition/ventilation.jpg" alt="" />
                        </div>
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">VENTILATION</h5>
                        </a>
                        <ul>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Name & Family</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-times text-red-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                            <li class="flex flex-row items-center justify-items-start gap-1">
                                <i class="fa fa-check text-green-500"></i>
                                <span class="text-sm text-gray-700 dark:text-gray-400">Phone and Email</span>
                            </li>
                        </ul>
                        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-2">
                            <div class="bg-blue-600 h-2.5 rounded-full w-10"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="auditionModal" tabindex="-1" data-modal-backdrop="static" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full lg:max-w-2/5 max-w-full max-h-full">
                    <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                                {{ component.title }}
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="auditionModal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div class="p-4 md:p-5">
                            <component :is="component.step"></component>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<style scoped>
.audition-body{
    z-index: 200;
}
</style>
