import {
    Exterior,
    InsulationLayer1,
    InsulationLayer2,
    Interior, Lintel, Sheathing,
    Spacing,
    StructureByCode, Studs
} from "@/File/11.13b43/HouseFileCodesLibrary.js";

class SlabOnGrade {
    id= null;
    label = null;
    isExposedSurface= null;
    exposedSurfacePerimeter= null;
    configuration = {type: null, subtype: null, text: null};
    floor = {
        construction: {isBelowFrostline: null, hasIntegralFooting: null, heatedFloor: null},
        measurements: {isRectangular: null, area: null, perimeter: null}
    };
    wall = {rValues:{skirt: null, thermalBreak: null}};

    xmlOutput(){
        return `<Slab isExposedSurface="${this.isExposedSurface}" exposedSurfacePerimeter="${this.exposedSurfacePerimeter}" id="${this.id}">
                <Label>${this.label}</Label>
                <Configuration type="${this.configuration.type}" subtype="${this.configuration.subtype}">${this.configuration.text}</Configuration>
                <Floor>
                    <Construction isBelowFrostline="${this.floor.construction.isBelowFrostline}" hasIntegralFooting="${this.floor.construction.hasIntegralFooting}" heatedFloor="${this.floor.construction.heatedFloor}" />
                    <Measurements isRectangular="${this.floor.measurements.isRectangular}" area="${this.floor.measurements.area}" perimeter="${this.floor.measurements.perimeter}" />
                </Floor>
                <Wall>
                    <RValues skirt="${this.wall.rValues.skirt}" thermalBreak="${this.wall.rValues.thermalBreak}" />
                </Wall>
            </Slab>`;
    };

    codes = {
        insulationConfiguration: {
            uninsulated: {
                withSkirt: [
                    {type: "SCN", subtype: "7"},
                    {type: "SCN", subtype: "8"}
                ],
                withoutSkirt: [
                    {type: "SCN", subtype: "1"},
                    {type: "SCN", subtype: "2"},
                    {type: "SCN", subtype: "3"},
                    {type: "SCN", subtype: "4"}
                ],
            },
            belowSlab: {
                withSkirt: {
                    full: [
                        {type: "SCB", subtype: "33"},
                        {type: "SCB", subtype: "34"},
                        {type: "SCB", subtype: "35"},
                        {type: "SCB", subtype: "36"}
                    ],
                    "1.0 m (3.3 ft) width": [
                        {type: "SCB", subtype: "21"},
                        {type: "SCB", subtype: "22"},
                        {type: "SCB", subtype: "23"},
                        {type: "SCB", subtype: "24"}
                    ],
                    "0.6 m (2 ft) width": [
                        {type: "SCB", subtype: "9"},
                        {type: "SCB", subtype: "10"},
                        {type: "SCB", subtype: "11"},
                        {type: "SCB", subtype: "12"}
                    ]
                },
                withoutSkirt: {
                    full: [
                        {type: "SCB", subtype: "25"},
                        {type: "SCB", subtype: "26"},
                        {type: "SCB", subtype: "29"},
                        {type: "SCB", subtype: "30"},
                        {type: "SCB", subtype: "31"},
                        {type: "SCB", subtype: "32"}
                    ],
                    "1.0 m (3.3 ft) width": [
                        {type: "SCB", subtype: "13"},
                        {type: "SCB", subtype: "14"},
                        {type: "SCB", subtype: "17"},
                        {type: "SCB", subtype: "18"},
                        {type: "SCB", subtype: "39"},
                        {type: "SCB", subtype: "40"}
                    ],
                    "0.85 m (2.8 ft) width": [
                        {type: "SCB", subtype: "3"},
                        {type: "SCB", subtype: "4"}
                    ],
                    "0.6 m (2 ft) width": [
                        {type: "SCB", subtype: "1"},
                        {type: "SCB", subtype: "2"},
                        {type: "SCB", subtype: "5"},
                        {type: "SCB", subtype: "6"},
                        {type: "SCB", subtype: "37"},
                        {type: "SCB", subtype: "38"}
                    ]
                }
            },
            aboveSlab: {
                withSkirt: [
                    {type: "SCA", subtype: "21"},
                    {type: "SCA", subtype: "22"},
                    {type: "SCA", subtype: "23"},
                    {type: "SCA", subtype: "24"}
                ],
                withoutSkirt: [
                    {type: "SCA", subtype: "1"},
                    {type: "SCA", subtype: "2"},
                    {type: "SCA", subtype: "9"},
                    {type: "SCA", subtype: "10"},
                    {type: "SCA", subtype: "17"},
                    {type: "SCA", subtype: "18"},
                    {type: "SCA", subtype: "19"},
                    {type: "SCA", subtype: "20"}
                ]
            }
        },
        floorConstruction: {
            insulationAddedToSlab: [
                {code: "6", english: "50 mm EPS I (2 in)", french: "50 mm EPS I (2 po)"},
                {code: "7", english: "38 mm EPS II (1.5 in)", french: "38 mm EPS II (1.5 po)"},
                {code: "F", english: "50 mm EPS II (2 in)", french: "50 mm EPS II (2 po)"},
                {code: "8", english: "76 mm EPS II (3 in)", french: "76 mm EPS II (3 po)"},
                {code: "9", english: "19 mm XTPS IV (0.75 in)", french: "19 mm XTPS IV (0.75 po)"},
                {code: "A", english: "38 mm XTPS IV (1.5 in)", french: "38 mm XTPS IV (1.5 po)"},
                {code: "B", english: "64 mm XTPS IV (2.5 in)", french: "64 mm XTPS IV (2.5 po)"},
                {code: "C", english: "25 mm semi-rigid (1 in)", french: "25 mm semi-rigid (1 po)"},
                {code: "D", english: "19 mm polyisocyan.(0.75 in)", french: "19 mm polyisocyan.(0.75 po)"},
                {code: "E", english: "50 mm rig. glass fib.(2 in)", french: "50 mm rig. glass fib.(2 po)"},
                {code: "", english: "User specified", french: "Spécifié par l'utilisateur"},
            ]
        }
    }
}
