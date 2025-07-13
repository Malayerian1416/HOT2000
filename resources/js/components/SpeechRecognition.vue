<script setup>
import {onMounted, ref, inject} from "vue";
import SpeechToText from "../utilities/SpeechToText.js";
const recognizer = new SpeechToText();
import { driver } from "driver.js";

const dataContainer = inject("dataContainer");
const likeWords = (text, pattern, caseSensitive = false) => {
    let regexPattern = pattern.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
    regexPattern = regexPattern.replace(/%/g, '.*');
    regexPattern = regexPattern.replace(/_/g, '.');
    regexPattern = `^${regexPattern}$`;
    const flags = caseSensitive ? '' : 'i';
    const regex = new RegExp(regexPattern, flags);
    return regex.test(text);
}
let recording = ref(false)
const startMic = () => {
    if (recognizer) {
        recognizer.start();
        recording.value = true;
    }
}
const dataElements = () => {
    return Array.from(document.querySelector(dataContainer).querySelectorAll("input[type='text'], select"));
}
const stopMic = () => {
    if (recognizer) {
        recognizer.stop();
        recording.value = false;
        setTimeout(() => {
            recognizer.getFullTranscript().forEach((transcript) => {
                const explodedTranscript = transcript.split("is");
                if (explodedTranscript.length > 1){
                    const label = explodedTranscript[0].trimStart().trimEnd().toLowerCase();
                    const data = explodedTranscript[1].replace(/\./g, "").trimStart().trimStart().trimEnd().toLowerCase();
                    dataElements().forEach((element) => {
                        const inputName = element.name.split(/(?=[A-Z])/).join(" ").toLowerCase();
                        if (likeWords(inputName, `%${label}%`)){
                            if (element.tagName.toLowerCase() === "input")
                                element.value = data;
                            else if (element.tagName.toLowerCase() === "select"){
                                const exact = Array.from(element.options).find(option => {
                                    return option.text.toLowerCase() === data
                                });
                                const firstOfString = Array.from(element.options).find(option => {
                                    return likeWords(option.text, `${data}%`) && option.value !== exact?.value;
                                });
                                const lastOfString = Array.from(element.options).find(option => {
                                    return likeWords(option.text, `%${data}`) && option.value !== exact?.value && option.value !== firstOfString?.value;
                                });
                                const middleOfString = Array.from(element.options).find(option => {
                                    return likeWords(option.text, `%${data}%`) && option.value !== exact?.value && option.value !== firstOfString?.value && option.value !== lastOfString?.value;
                                });
                                element.value = exact?.value || firstOfString?.value || lastOfString?.value || middleOfString?.value;
                            }
                        }
                    })
                }
            });
        },1000);
    }
}
onMounted(() => {
    // setTimeout(() => {
    //     const driverObj = driver({
    //         showProgress: true,
    //         steps: [
    //             { element: '.speech-container', popover: { title: 'Speech Bar', description: 'You can use this bar to select or input all the required information for each section simply through your speech.',side: "top", align: 'center' } },
    //             { element: '.speech-button', popover: { title: 'Record Button', description: "By clicking or tapping this button, voice recording will begin, and you can continuously input various information. If needed, you can stop it and restart at a more appropriate time.This button appears as a voice record icon when starting, and changes to a stop icon during voice recording.", side: "top", align: 'start' } },
    //             { element: '.speech-button', popover: { title: 'Record Button', description: "<i class='fa fa-circle'></i>", side: "top", align: 'start' } },
    //         ]
    //     });
    //     driverObj.drive();
    // }, 500);
});
</script>

<template>
    <div class="sticky speech-container">
        <div class="relative w-full border border-gray-200 dark:border-gray-400 rounded py-4 px-2">
            <div class="absolute -top-4 left-3 dark:bg-gray-700 bg-white px-2">
                <label class="font-sans text-xs text-gray-900 dark:text-white">Speech Bar</label>
            </div>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-1.5 cursor-pointer">
                    <span v-if="!recording" class="fa-stack group" @click="startMic">
                        <i class="fa fa-circle fa-stack-2x text-red-500 group-hover:text-red-600 transition-all speech-button"></i>
                        <i class="fa fa-circle fa-stack-1x text-gray-50 group-hover:text-gray-100"></i>
                    </span>
                    <span v-else class="fa-stack cursor-pointer group" @click="stopMic('')">
                        <i class="fa fa-square fa-stack-2x text-gray-300 group-hover:text-gray-100 transition-all"></i>
                        <i class="fa fa-square fa-stack-1x text-gray-50 group-hover:text-gray-100"></i>
                    </span>
                </div>
                <h2 id="finalTranscript" disabled readonly class="bg-gray-50 border border-gray-300 h-12 text-gray-900 rounded-lg focus:ring-blue-500 text-md lg:text-lg xl:text-xl focus:border-blue-500 block w-full ps-13 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 leading-11 lg:leading-10"></h2>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>
