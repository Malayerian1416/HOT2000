import {
    Exterior,
    InsulationLayer1,
    InsulationLayer2,
    Interior, Lintel, Sheathing,
    Spacing,
    StructureByCode, Studs
} from "./HouseFileCodesLibrary.js";

class Crawlspace {
    id = null;
    label = null;
    isExposedSurface= null;
    exposedSurfacePerimeter= null;
    configuration = {type: null, subtype: null, text: null};
    ventilationType = {code: null, english: null, french: null};
    floor = {
        construction: {
            isBelowFrostline: null,
            hasIntegralFooting: null,
            heatedFloor: null,
            floorsAbove: {idref: null, text: null},
        },
        measurements: {isRectangular: null, area: null, perimeter: null}
    };
    wall = {
        compositeSection: {rank: null, percentage: null},
        construction: {
            corners: null,
            type: {
                idref: null,
                description: null,
                composite: []
            }
        },
        measurements: {height: null, depth: null},
    };
    rValues = {skirt: null, thermalBreak: null};
    components = {
        windows: [],
        doors: [],
        floorHeaders: []
    };

    xmlOutput() {
        let constructionComponents,windows,doors,floorHeaders;
        this.wall.construction.type.composite.forEach(section => {
            constructionComponents = constructionComponents + `<Section rank="${section.rank}" percentage="${section.percentage}" />`;
        });
        this.components.windows.forEach(window => {
            windows = windows + window.xmlOutput();
        });
        this.components.doors.forEach(door => {
            doors = doors + door.xmlOutput();
        });
        this.components.floorHeaders.forEach(floorHeader => {
            floorHeaders = floorHeaders + floorHeader.xmlOutput();
        });
        return `<Crawlspace isExposedSurface="${this.isExposedSurface}" exposedSurfacePerimeter="${this.exposedSurfacePerimeter}" id="${this.id}">
                <Label>${this.label}</Label>
                <Configuration type="${this.configuration.type}" subtype="${this.configuration.subtype}">${this.configuration.text}</Configuration>
                <VentilationType code="${this.ventilationType.code}">
                    <English>${this.ventilationType.english}</English>
                    <French>${this.ventilationType.french}</French>
                </VentilationType>
                <Floor>
                    <Construction isBelowFrostline="${this.floor.construction.isBelowFrostline}" hasIntegralFooting="${this.floor.construction.hasIntegralFooting}" heatedFloor="${this.floor.construction.heatedFloor}">
                        <FloorsAbove idref="${this.floor.construction.floorsAbove.idref}">${this.floor.construction.floorsAbove.text}</FloorsAbove>
                    </Construction>
                    <Measurements isRectangular="${this.floor.measurements.isRectangular}" area="${this.floor.measurements.area}" perimeter="${this.floor.measurements.perimeter}" />
                </Floor>
                <Wall>
                    <Construction corners="${this.wall.construction.corners}">
                        <Type idref="${this.wall.construction.type.idref}">
                            <Description>${this.wall.construction.type.description}</Description>
                            <Composite>
                                ${constructionComponents}
                            </Composite>
                        </Type>
                    </Construction>
                    <Measurements height="${this.wall.measurements.height}" depth="${this.wall.measurements.depth}" />
                    <RValues skirt="${this.rValues.skirt}" thermalBreak="${this.rValues.thermalBreak}" />
                </Wall>
                <Components>
                ${doors}
                ${windows}
                ${floorHeaders}
                </Components>
            </Crawlspace>`;
    };

    codes = {
        crawlspaceType: [
            {code: "1", english: "Vented", french: "Ventilé"},
            {code: "2", english: "Open", french: "Ouvert"},
            {code: "3", english: "Closed", french: "Fermé"}
        ],
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
        wallConstruction: {
            structureType: StructureByCode("1"),
            spacing: Spacing(),
            insulationLayer1 : InsulationLayer1(),
            insulationLayer2 : InsulationLayer2(),
            interior: Interior(),
            sheathing: Sheathing(),
            exterior: Exterior(),
            studs: Studs(),
            lintels: Lintel()
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
            ],
            floorsAboveFoundation: {
                structureType: StructureByCode("1"),
                spacing: Spacing(),
                insulationLayer1: InsulationLayer1(),
                insulationLayer2: InsulationLayer2(),
                interior: Interior(),
                sheathing: Sheathing(),
                exterior: Exterior(),
                dropFraming: [{code: "0", english: "No", french: "No"}, {code: "0", english: "Yes", french: "Yes"}],
            }
        }
    }
}
