<template>
    <div class="position-relative w-dvw h-dvh flex justify-center p-3">
        <div id="canvasContainer" class="text-center w-full h-full">
            <canvas
                id="canvas"
                tabindex="1"
                class="border-2 border-dashed border-stone-400 cursor-crosshair m-auto"
                :width="canvasDimensions.width"
                :height="canvasDimensions.height"
                @click="canvasOnMouseClick"
                @mousemove="canvasOnMouseMove"
                @mouseup="canvasOnMouseUp"
                @contextmenu="canvasOnContextMenu"
                @touchstart="canvasOnTouchStart"
                @touchend="canvasOnTouchEnd"
                @touchmove="canvasOnTouchMove"
                @keydown="canvasOnKeyDown">
            </canvas>
            <span id="floatingLineLengthLabel" class="floatingLineLengthLabel"></span>
        </div>
        <div data-dial-init class="fixed flex end-8 bottom-10 group">
            <div id="speed-dial-menu-horizontal-lineThickness" class="flex items-center hidden me-4 space-x-2 rtl:space-x-reverse">
                <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="top" class="flex justify-center items-center w-12 h-12 text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-xs dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400" @click="lineWidth = 1.5">
                    <i class="fas fa-circle fa-055x"></i>
                    <span class="sr-only">Normal</span>
                </button>
                <div id="tooltip-share" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    Normal
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button type="button" data-tooltip-target="tooltip-print" data-tooltip-placement="top" class="flex justify-center items-center w-12 h-12 text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-xs dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400" @click="lineWidth = 3">
                    <i class="fas fa-circle fa-075x"></i>
                    <span class="sr-only">Thick</span>
                </button>
                <div id="tooltip-print" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    Thick
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="top" class="flex justify-center items-center w-12 h-12 text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-xs dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400" @click="lineWidth = 4.5">
                    <i class="fas fa-circle fa-095x"></i>
                    <span class="sr-only">Thickest</span>
                </button>
                <div id="tooltip-download" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    Thickest
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
            <button type="button" data-dial-toggle="speed-dial-menu-horizontal-lineThickness" aria-controls="speed-dial-menu-horizontal" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-12 h-12 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <i class="fa fa-pen-line fa-1_4x"></i>
                <span class="sr-only">Line thickness</span>
            </button>
        </div>
        <div data-dial-init class="fixed flex end-8 bottom-25 group">
            <div id="speed-dial-menu-horizontal-color" class="flex items-center hidden me-4 space-x-2 rtl:space-x-reverse">
                <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="top" class="flex justify-center items-center w-12 h-12 text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-xs dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400" @click="lineColor = '#2b7fff'">
                    <i class="fas fa-circle fa-1_2x text-blue-500"></i>
                    <span class="sr-only">Blue</span>
                </button>
                <div id="tooltip-share" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    Blue
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button type="button" data-tooltip-target="tooltip-print" data-tooltip-placement="top" class="flex justify-center items-center w-12 h-12 text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-xs dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400" @click="lineColor = '#f0b100'">
                    <i class="fas fa-circle fa-1_2x text-yellow-500"></i>
                    <span class="sr-only">Yellow</span>
                </button>
                <div id="tooltip-print" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    Yellow
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="top" class="flex justify-center items-center w-12 h-12 text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-xs dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400" @click="lineColor = '#00c950'">
                    <i class="fas fa-circle fa-1_2x text-green-500"></i>
                    <span class="sr-only">Green</span>
                </button>
                <div id="tooltip-download" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    Green
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="top" class="flex justify-center items-center w-12 h-12 text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-xs dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400" @click="lineColor = '#fb2c36'">
                    <i class="fas fa-circle fa-1_2x text-red-500"></i>
                    <span class="sr-only">Red</span>
                </button>
                <div id="tooltip-download" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    Red
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button type="button" data-tooltip-target="tooltip-download" data-tooltip-placement="top" class="flex justify-center items-center w-12 h-12 text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-xs dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400" @click="lineColor = '#000000'">
                    <i class="fas fa-circle fa-1_2x text-black"></i>
                    <span class="sr-only">Black</span>
                </button>
                <div id="tooltip-download" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    Black
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
            <button type="button" data-dial-toggle="speed-dial-menu-horizontal-color" aria-controls="speed-dial-menu-horizontal" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-12 h-12 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <i class="fa fa-palette fa-1_4x"></i>
                <span class="sr-only">Line thickness</span>
            </button>
        </div>
        <div data-dial-init class="fixed flex end-8 bottom-40 group">
            <div id="speed-dial-menu-horizontal-scale" class="flex items-center hidden me-4 space-x-2 rtl:space-x-reverse">
                <button type="button" data-tooltip-target="tooltip-share" data-tooltip-placement="top" class="flex justify-center items-center w-12 h-12 text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-xs dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400" @click="isScaled = true">
                    <i class="fas fa-scribble fa-1_2x"></i>
                    <span class="sr-only">Blue</span>
                </button>
                <div id="tooltip-share" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    Blue
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button type="button" data-tooltip-target="tooltip-print" data-tooltip-placement="top" class="flex justify-center items-center w-12 h-12 text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-xs dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400" @click="isScaled = false">
                    <i class="fas fa-pencil-ruler fa-1_2x"></i>
                    <span class="sr-only">Yellow</span>
                </button>
                <div id="tooltip-print" role="tooltip" class="absolute z-10 invisible inline-block w-auto px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-xs opacity-0 tooltip dark:bg-gray-700">
                    Yellow
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
            <button type="button" data-dial-toggle="speed-dial-menu-horizontal-scale" aria-controls="speed-dial-menu-horizontal" aria-expanded="false" class="flex items-center justify-center text-white bg-blue-700 rounded-full w-12 h-12 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                <i class="fad fa-gear fa-1_4x"></i>
                <span class="sr-only">Line thickness</span>
            </button>
        </div>
    </div>
</template>
<script setup>
import {ref, reactive, onMounted, nextTick, onUnmounted} from "vue";

let touchable = null;
let gridSize = 25;
let canvasDimensions = reactive({width: 0, height: 0});
let canvasContainer = ref();
let canvas = ref();
let canvasContext = ref();
let floatingLineLengthLabel = ref();
let isDrawing = false;
let isScaled = true;
let scale = 5;
let lineWidth = 1.5;
let lineColor = "#000000";
let startX = ref(0);
let startY = ref(0);
let lastX = ref(0);
let lastY = ref(0);
let Lines = reactive([]);
let vertices = reactive([]);

onMounted(async () => {
    document.addEventListener('touchmove', documentTouchMove,{ passive: false });
    touchable = window.isTouchable;
    scale = isTouchable ? 25 : 5;
    canvasContainer = document.getElementById("canvasContainer");
    canvas = document.getElementById("canvas");
    canvasContext = canvas.getContext("2d");
    floatingLineLengthLabel = document.getElementById("floatingLineLengthLabel");
    await setCanvasDimensions();
    await drawCanvasGrid();
});
onUnmounted(async () => {
    document.removeEventListener('touchmove',documentTouchMove);
});
const documentTouchMove =  (e) => {
    if (e.touches.length > 1 || e.touches[0].clientY > 0) {
        e.preventDefault();
    }
}
const setCanvasDimensions = async () => {
    await nextTick()
    const parentWidth = canvas.parentElement.clientWidth;
    const parentHeight = canvas.parentElement.clientHeight;
    canvasDimensions.width = parentWidth - (parentWidth % gridSize - 1);
    canvasDimensions.height = parentHeight - (parentHeight % gridSize - 1);
}
const drawCanvasGrid = async () => {
    await nextTick();
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.beginPath();
    for (let x = 0; x < canvas.width; x += gridSize) {
        canvasContext.moveTo(x, 0);
        canvasContext.lineTo(x, canvas.height);
    }
    for (let y = 0; y < canvas.height; y += gridSize) {
        canvasContext.moveTo(0, y);
        canvasContext.lineTo(canvas.width, y);
    }
    canvasContext.strokeStyle = '#ddd';
    canvasContext.lineWidth = 1;
    canvasContext.stroke();
    await drawLines();
}
const sameStartPoint = async (x, y) => {
    var samePoint = null;
    vertices.forEach(vertex => {
        if (between(vertex[0],x-15,x+15) && between(vertex[1],y-15,y+15))
            samePoint = {x:vertex[0], y:vertex[1]};
    });
    console.log(isDrawing)
    return samePoint;
}
const canvasOnMouseClick = async e => {
    await nextTick();
    const snappedPoint = snapToGrid(e.offsetX, e.offsetY);
    console.log(snappedPoint.x,snappedPoint.y);
    const samePoint = await sameStartPoint(snappedPoint.x,snappedPoint.y);
    console.log(samePoint);
    if (!isDrawing) {
        startX = lastX && lastX > 0 ? lastX : snappedPoint.x;
        startY = lastY && lastY > 0 ? lastY : snappedPoint.y;
        floatingLineLengthLabel.style.top = `${e.offsetY - 35}px`
        floatingLineLengthLabel.style.left = `${e.offsetX - 35}px`
        floatingLineLengthLabel.style.display = "flex";
        isDrawing = true;
    } else {
        startX = snappedPoint.x;
        startY = snappedPoint.y;
    }
}
const canvasOnTouchStart = async e => {
    await nextTick();
    const x = e.touches[0].clientX, y = e.touches[0].clientY;
    if (!isDrawing) {
        startX = lastX && lastX > 0 ? lastX : x;
        startY = lastY && lastY > 0 ? lastY : y;
        // floatingLineLengthLabel.style.top = `${e.touches[0].clientY - 35}px`
        // floatingLineLengthLabel.style.left = `${e.touches[0].clientX - 35}px`
        // floatingLineLengthLabel.style.display = "flex";
        isDrawing = true;
    } else {
        startX = x;
        startY = y;
    }
    canvasContext.beginPath();
    canvasContext.moveTo(startX, startY);
}
const drawLines = async () => {
    await nextTick();
    Lines.forEach((line) => {
        canvasContext.beginPath();
        canvasContext.moveTo(snapToGrid(line.x1, line.y1).x, snapToGrid(line.x1, line.y1).y);
        canvasContext.lineTo(snapToGrid(line.x2, line.y2).x, snapToGrid(line.x2, line.y2).y);
        canvasContext.strokeStyle = line.color;
        canvasContext.lineWidth = line.thickness;
        canvasContext.stroke();
    });
}
const canvasOnMouseMove = async e => {
    await nextTick();
    if (isDrawing) {
        const snappedPoint = snapToGrid(e.offsetX, e.offsetY);
        const checkX = snappedPoint.x;
        const checkY = snappedPoint.y;
        if (between(checkX, startX - 10, startX + 10)) {
            lastX = startX;
            lastY = snappedPoint.y;
        }
        else if (between(checkY, startY - 10, startY + 10)) {
            lastX = snappedPoint.x;
            lastY = startY;
        }
        else{
            lastX = snappedPoint.x;
            lastY = snappedPoint.y;
        }
        floatingLineLengthLabel.style.top = `${e.offsetY - 35}px`
        floatingLineLengthLabel.style.left = `${e.offsetX - 35}px`
        if (startX === lastX || startY === lastY)
            floatingLineLengthLabel.classList.add("balanced");
        else
            floatingLineLengthLabel.classList.remove("balanced")
        canvasContext.clearRect(0, 0, canvas.width, canvas.height);
        await drawCanvasGrid();
        Lines.forEach(line => {
            if (between(line.x1, lastX - 10, lastX + 10) && between(line.y1, lastY - 10, lastY + 10)) {
                lastX = line.x1;
                lastY = line.y1;
            }
            else if(between(line.x2, lastX - 10, lastX + 10) && between(line.y2, lastY - 10, lastY + 10)){
                lastX = line.x2;
                lastY = line.y2;
            }
        });
        canvasContext.beginPath();
        canvasContext.moveTo(startX, startY);
        canvasContext.lineTo(lastX, lastY);
        const segmentLength = ((Math.sqrt(Math.pow(lastX - startX, 2) + Math.pow(lastY - startY, 2))) / scale) / 2;
        floatingLineLengthLabel.innerText = `${roundByNum(segmentLength).toString()} ft`;
        canvasContext.strokeStyle = lineColor;
        canvasContext.lineWidth = lineWidth;
        canvasContext.stroke();
    }
}
const canvasOnTouchMove = async e => {
    await nextTick();
    if (isDrawing) {
        const x = e.touches[0].clientX, y = e.touches[0].clientY;
        const checkX = x;
        const checkY = y;
        if (between(checkX, startX - 10, startX + 10)) {
            lastX = startX;
            lastY = y;
        }
        else if (between(checkY, startY - 10, startY + 10)) {
            lastX = x;
            lastY = startY;
        }
        else{
            lastX = x;
            lastY = y;
        }
        Lines.forEach(line => {
            if (between(line.x1, lastX - 10, lastX + 10) && between(line.y1, lastY - 10, lastY + 10)) {
                lastX = line.x1;
                lastY = line.y1;
            }
            else if(between(line.x2, lastX - 10, lastX + 10) && between(line.y2, lastY - 10, lastY + 10)){
                lastX = line.x2;
                lastY = line.y2;
            }
        })

        canvasContext.lineTo(lastX, lastY);
        canvasContext.strokeStyle = lineColor;
        canvasContext.lineWidth = lineWidth;
        canvasContext.stroke();
    }
}
const canvasOnMouseUp = async e => {
    if (isDrawing && e.button === 0) {
        const snappedPoint = snapToGrid(e.offsetX, e.offsetY);
        const checkX = snappedPoint.x;
        const checkY = snappedPoint.y;
        if (between(checkX, startX - 10, startX + 10)) {
            lastX = startX;
            lastY = snappedPoint.y;
        }
        else if (between(checkY, startY - 10, startY + 10)) {
            lastX = snappedPoint.x;
            lastY = startY;
        }
        else{
            lastX = snappedPoint.x;
            lastY = snappedPoint.y;
        }
        Lines.forEach(line => {
            if (between(line.x1, lastX - 10, lastX + 10) && between(line.y1, lastY - 10, lastY + 10)) {
                lastX = line.x1;
                lastY = line.y1;
            }
            else if(between(line.x2, lastX - 10, lastX + 10) && between(line.y2, lastY - 10, lastY + 10)){
                lastX = line.x2;
                lastY = line.y2;
            }
        })
        canvasContext.beginPath();
        canvasContext.moveTo(startX, startY);
        canvasContext.lineTo(lastX, lastY);
        canvasContext.strokeStyle = lineColor;
        canvasContext.lineWidth = lineWidth;
        canvasContext.stroke();
        const lineLabel = await setLineLengthLabel();
        vertices.push([startX, startY]);
        vertices.push([lastX, lastY]);
        Lines.push({x1: startX, y1: startY, x2: lastX, y2: lastY, color: lineColor, thickness: lineWidth, length:lineLabel.lineLength, label:lineLabel.id});
        isDrawing = false;
    }
    else if (e.button === 2){
        lastX = startX;
        lastY = startY;
        await drawCanvasGrid();
    }
}
const canvasOnTouchEnd = async e => {
    isDrawing = false;
    //const lineLabel = await setLineLengthLabel()
    !existInArray(vertices, [lastX, lastY]) ? vertices.push([lastX, lastY]) : null;
    Lines.push({x1: startX, y1: startY, x2: lastX, y2: lastY, color: lineColor, thickness: lineWidth, length:"10", label:"12"});
}
const canvasOnContextMenu = async e => {
    e.preventDefault();
    isDrawing = false;
    floatingLineLengthLabel.innerText = "";
    floatingLineLengthLabel.style.display = "none";

}
const canvasOnKeyDown = async e => {
    if(e.ctrlKey && e.key === "Z" || e.ctrlKey && e.key === "z" && Lines.length > 0) {
        floatingLineLengthLabel.innerText = "";
        floatingLineLengthLabel.display = "none";
        isDrawing = false;
        document.getElementById(Lines[Lines.length - 1].label).remove();
        Lines.pop();
        await drawCanvasGrid();
    }
}
const setLineLengthLabel = async () => {
    let lineLengthLabel = document.createElement("span");
    lineLengthLabel.classList.add("lineLengthLabel");
    const segmentLength = Math.sqrt(Math.pow(lastX - startX, 2) + Math.pow(lastY - startY, 2));
    lineLengthLabel.id = `line_label_${Math.random() * 9876}${Date.now()}`;
    lineLengthLabel.innerText = `${roundByNum(segmentLength / scale / 2)}'`;
    canvasContainer.appendChild(lineLengthLabel);
    const left = Math.floor(((lastX - startX) / 2) + startX);
    const top = Math.floor(((lastY - startY) / 2) + startY);
    lineLengthLabel.style.left = `${left}px`;
    lineLengthLabel.style.top = `${top}px`;
    return {id: lineLengthLabel.id, lineLength: roundByNum(segmentLength / scale / 2)};
}
const snapToGrid = (x, y) => {
    return {
        x: (Math.round(x / scale) * scale),
        y: (Math.round(y / scale) * scale),
    };
}
const between = (val, min, max) => {
    return val >= min && val <= max;
}
const roundByNum = (num, rounder) => {
    let multiplier = 1/(rounder||0.5);
    return Math.round(num*multiplier)/multiplier;
}
const existInArray = (haystack, needle) => {
    let i, j, current;
    for(i = 0; i < haystack.length; ++i){
        if(needle.length === haystack[i].length){
            current = haystack[i];
            for(j = 0; j < needle.length && needle[j] === current[j]; ++j) {
                if (j === needle.length)
                    return true;
            }
        }
    }
    return false;
}
</script>
