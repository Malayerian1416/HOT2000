import {
    Exterior,
    InsulationLayer1,
    InsulationLayer2,
    Interior,
    Lintel, Sheathing,
    Spacing,
    StructureByCode,
    Studs
} from "./HouseFileCodesLibrary.js";

class Basement{
    id = null;
    label = null;
    isExposedSurface= null;
    exposedSurfacePerimeter= null;
    configuration = {type: null, subtype: null, overlap: null, text: null};
    openingUpstairs = {code: null, english: null, french: null, value: null};
    roomType = {code: null, english: null, french: null};
    floor = {
        construction: {
            isBelowFrostline: null,
            hasIntegralFooting: null,
            heatedFloor: null,
            addedToSlab: {text: null},
            floorsAbove: {idref: null, text: null},
        },
        measurements: {isRectangular: null, area: null, perimeter: null}
    };
    wall = {
        hasPonyWall: null,
        compositeSection: {rank: null, percentage: null},
        construction: {
            corners: null,
            interiorAddedInsulation:
                {
                    idref: null,
                    description: null,
                    composite: []
                },
            exteriorAddedInsulation:
                {
                    idref: null,
                    description: null,
                    composite: []
                },
            lintels: {idref: null, text: null},
            ponyWallType: {
                idref: null,
                description: null,
                composite: []
            },
        },
        measurements: {height: null, depth: null, ponyWallHeight: null},
    };
    components = {
        windows: [],
        doors: [],
        floorHeaders: []
    };

    xmlOutput() {
        let interiorAddedInsulationSections,exteriorAddedInsulationSections,ponyWallSections,windows,doors,floorHeaders;
        this.wall.construction.interiorAddedInsulation.composite.forEach(section => {
            interiorAddedInsulationSections = interiorAddedInsulationSections + `<Section rank="${section.rank}" percentage="${section.percentage}" />`;
        });
        this.wall.construction.exteriorAddedInsulation.composite.forEach(section => {
            exteriorAddedInsulationSections = exteriorAddedInsulationSections + `<Section rank="${section.rank}" percentage="${section.percentage}" />`;
        });
        this.wall.construction.ponyWallType.composite.forEach(section => {
            ponyWallSections = ponyWallSections + `<Section rank="${section.rank}" percentage="${section.percentage}" />`;
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
        return `<Basement isExposedSurface="${this.isExposedSurface}" exposedSurfacePerimeter="${this.exposedSurfacePerimeter}" id="${this.id}">
                <Label>${this.label}</Label>
                <Configuration type="${this.configuration.type}" subtype="${this.configuration.subtype}" overlap="${this.configuration.overlap}">${this.configuration.text}</Configuration>
                <OpeningUpstairs code="${this.openingUpstairs.code}" value="${this.openingUpstairs.value}">
                    <English>${this.openingUpstairs.english}</English>
                    <French>${this.openingUpstairs.french}</French>
                </OpeningUpstairs>
                <RoomType code="${this.roomType.code}">
                    <English>${this.roomType.english}</English>
                    <French>${this.roomType.french}</French>
                </RoomType>
                <Floor>
                    <Construction isBelowFrostline="${this.floor.construction.isBelowFrostline}" hasIntegralFooting="${this.floor.construction.hasIntegralFooting}" heatedFloor="${this.floor.construction.heatedFloor}">
                        <AddedToSlab>${this.floor.construction.addedToSlab.text}</AddedToSlab>
                        <FloorsAbove idref="${this.floor.construction.floorsAbove.idref}">${this.floor.construction.floorsAbove.text}</FloorsAbove>
                    </Construction>
                    <Measurements isRectangular="${this.floor.measurements.isRectangular}" area="${this.floor.measurements.area}" perimeter="${this.floor.measurements.perimeter}" />
                </Floor>
                <Wall hasPonyWall="${this.wall.hasPonyWall}">
                    <Construction corners="${this.wall.construction.corners}">
                        <InteriorAddedInsulation idref="${this.wall.construction.interiorAddedInsulation.idref}">
                            <Description>${this.wall.construction.interiorAddedInsulation.description}</Description>
                            <Composite>
                                ${interiorAddedInsulationSections}
                            </Composite>
                        </InteriorAddedInsulation>
                        <ExteriorAddedInsulation>
                            <Description>${this.wall.construction.exteriorAddedInsulation.description}</Description>
                            <Composite>
                                ${exteriorAddedInsulationSections}
                            </Composite>
                        </ExteriorAddedInsulation>
                        <Lintels idref="${this.wall.construction.lintels.idref}">${this.wall.construction.lintels.text}</Lintels>
                        <PonyWallType idref="${this.wall.construction.ponyWallType.idref}">
                            <Description>${this.wall.construction.ponyWallType.description}</Description>
                            <Composite>
                                ${ponyWallSections}
                            </Composite>
                        </PonyWallType>
                    </Construction>
                    <Measurements height="${this.wall.measurements.height}" depth="${this.wall.measurements.depth}" ponyWallHeight="${this.wall.measurements.ponyWallHeight}" />
                </Wall>
                <Components>
                ${doors}
                ${windows}
                ${floorHeaders}
                </Components>
            </Basement>`;
    };

    codes = {
        insulationConfiguration: {
            concrete: {
                insulation: {
                    uninsulated: [
                        {type: "BCNN", subtype: "1"},
                        {type: "BCNN", subtype: "2"}
                    ],
                    interiorWallInsulation: [
                        {type: "BCIN", subtype: "1"},
                        {type: "BCIN", subtype: "2"},
                        {type: "BCIN", subtype: "3"},
                        {type: "BCIN", subtype: "4"}
                    ],
                    exteriorWallInsulation: [
                        {type: "BCEN", subtype: "1"},
                        {type: "BCEN", subtype: "2"},
                        {type: "BCEN", subtype: "3"},
                        {type: "BCEN", subtype: "4"},
                        {type: "BCEN", subtype: "5"},
                        {type: "BCEN", subtype: "6"}
                    ],
                    combinationWallInsulation: [
                        {type: "BCCN", subtype: "1"},
                        {type: "BCCN", subtype: "2"},
                        {type: "BCCN", subtype: "3"},
                        {type: "BCCN", subtype: "4"},
                        {type: "BCCN", subtype: "5"},
                    ],
                    interiorWallAndSlabInsulation: {
                        aboveSlab: [
                            {type: "BCIA", subtype: "1"},
                            {type: "BCIA", subtype: "3"},
                            {type: "BCIA", subtype: "4"},
                            {type: "BCIA", subtype: "5"},
                            {type: "BCIA", subtype: "6"},
                        ],
                        belowSlab: [
                            {type: "BCIB", subtype: "1"},
                            {type: "BCIB", subtype: "2"},
                            {type: "BCIB", subtype: "3"},
                            {type: "BCIB", subtype: "4"},
                            {type: "BCIB", subtype: "5"},
                            {type: "BCIB", subtype: "6"},
                            {type: "BCIB", subtype: "7"},
                            {type: "BCIB", subtype: "8"},
                            {type: "BCIB", subtype: "9"},
                            {type: "BCIB", subtype: "10"},
                        ]
                    },
                    exteriorWallAndSlabInsulation: {
                        aboveSlab: [
                            {type: "BCEA", subtype: "1"},
                            {type: "BCEA", subtype: "3"},
                            {type: "BCEA", subtype: "4"},
                            {type: "BCEA", subtype: "5"},
                            {type: "BCEA", subtype: "6"},
                            {type: "BCEA", subtype: "7"},
                            {type: "BCEA", subtype: "8"},
                            {type: "BCEA", subtype: "9"},
                            {type: "BCEA", subtype: "10"},
                            {type: "BCEA", subtype: "11"},
                        ],
                        belowSlab: [
                            {type: "BCEB", subtype: "1"},
                            {type: "BCEB", subtype: "2"},
                            {type: "BCEB", subtype: "3"},
                            {type: "BCEB", subtype: "4"},
                            {type: "BCEB", subtype: "5"},
                            {type: "BCEB", subtype: "6"},
                            {type: "BCEB", subtype: "8"},
                            {type: "BCEB", subtype: "9"},
                            {type: "BCEB", subtype: "10"},
                            {type: "BCEB", subtype: "11"}
                        ]
                    },
                    combinationWallAndSlabInsulation: {
                        aboveSlab: [
                            {type: "BCCA", subtype: "1"},
                            {type: "BCCA", subtype: "4"},
                            {type: "BCCA", subtype: "7"},
                            {type: "BCCA", subtype: "8"},
                        ],
                        belowSlab: [
                            {type: "BCCB", subtype: "4"},
                            {type: "BCCB", subtype: "8"},
                            {type: "BCCB", subtype: "9"},
                            {type: "BCCB", subtype: "10"},
                        ]
                    }
                }
            },
            wood: {
                insulation: {
                    uninsulated: [
                        {type: "BWNN", subtype: "1"}
                    ],
                    interiorWallInsulation: [
                        {type: "BWIN", subtype: "1"},
                        {type: "BWIN", subtype: "2"},
                        {type: "BWIN", subtype: "3"}
                    ],
                    exteriorWallInsulation: [
                        {type: "BWEN", subtype: "1"},
                        {type: "BWEN", subtype: "2"},
                        {type: "BWEN", subtype: "3"}
                    ],
                    interiorWallAndSlabInsulation: {
                        aboveSlab: [
                            {type: "BWIA", subtype: "1"},
                            {type: "BWIA", subtype: "2"},
                            {type: "BWIA", subtype: "3"},
                        ],
                        belowSlab: [
                            {type: "BWIB", subtype: "1"},
                            {type: "BWIB", subtype: "2"},
                            {type: "BWIB", subtype: "4"},
                        ]
                    },
                    exteriorWallAndSlabInsulation: {
                        belowSlab: [
                            {type: "BWEB", subtype: "1"},
                            {type: "BWEB", subtype: "2"},
                            {type: "BWEB", subtype: "3"},
                            {type: "BWEB", subtype: "4"},
                        ]
                    }
                }
            },
            concreteAndWood: {
                insulation: {
                    interiorWallInsulation: [
                        {type: "BBIN", subtype: "1"},
                        {type: "BBIN", subtype: "2"}
                    ],
                    exteriorWallInsulation: [
                        {type: "BBEN", subtype: "1"},
                        {type: "BBEN", subtype: "2"},
                    ],
                    interiorWallAndSlabInsulation: {
                        aboveSlab: [
                            {type: "BBIA", subtype: "1"},
                            {type: "BBIA", subtype: "2"}
                        ],
                        belowSlab: [
                            {type: "BBIB", subtype: "1"},
                            {type: "BBIB", subtype: "2"},
                            {type: "BBIB", subtype: "3"},
                            {type: "BBIB", subtype: "4"},
                            {type: "BBIB", subtype: "5"},
                            {type: "BBIB", subtype: "6"}
                        ]
                    },
                    exteriorWallAndSlabInsulation: {
                        aboveSlab: [
                            {type: "BBEA", subtype: "2"},
                        ],
                        belowSlab: [
                            {type: "BBEB", subtype: "1"},
                            {type: "BBEB", subtype: "2"},
                            {type: "BBEB", subtype: "3"},
                            {type: "BBEB", subtype: "4"},
                            {type: "BBEB", subtype: "5"},
                        ]
                    }
                }
            }
        },
        roomType: [
            {code: "1", english: "Kitchen", french: "Cuisine"},
            {code: "2", english: "Living Room", french: "Salon"},
            {code: "3", english: "Dining Room", french: "Salle à Manger"},
            {code: "4", english: "Bedroom", french: "Chambre"},
            {code: "5", english: "Bathroom", french: "Salle de Bain"},
            {code: "6", english: "Utility Room", french: "Pièce Utilitaire"},
            {code: "7", english: "Other", french: "Autre"}
        ],
        openingUpstairs: [
            {code: "1", english: "Standard door - open", french: "Porte standard - ouverte", value: 1.5598},
            {code: "2", english: "Standard door - closed", french: "Porte standard - fermée", value: 0},
            {code: "3", english: "Stairwell", french: "Puits d'escalier", value: "8.64"},
            {code: "4", english: "User specified", french: "Spécifié par l'utilisateur", value: 0}
        ],
        ponyWallConstructionType: {
            structureType: StructureByCode("1"),
            spacing: Spacing(),
            insulationLayer1 : InsulationLayer1(),
            insulationLayer2 : InsulationLayer2(),
            interior: Interior(),
            sheathing: Sheathing(),
            exterior: Exterior(),
            studs: Studs(),
        },
        wallConstruction: {
            interiorAddedInsulation: {
                framing: [
                    {code: "0", english: "None", french: "None"},
                    {code: "1", english: "38x64 mm (2x3 in) wood", french: "38x64 mm (2x3 po) bois"},
                    {code: "2", english: "38x89 mm (2x4 in) wood", french: "38x89 mm (2x4 po) bois"},
                    {code: "3", english: "38x140 mm (2x6 in) wood", french: "38x140 mm (2x6 po)bois"},
                    {code: "4", english: "38x184 mm (2x8 in) wood", french: "38x184 mm (2x8 po) bois"},
                    {code: "5", english: "38x235 mm (2x10 in) wood", french: "38x235 mm (2x10 po) bois"},
                    {code: "6", english: "38x286 mm (2x12 in) wood", french: "38x286 mm (2x12 po) bois"},
                    {code: "7", english: "30x92 mm (1.2x3.6 in) steel", french: "30x92 mm (1.2x3.6 po) acier"},
                    {code: "8", english: "40x92 mm (1.6x3.6 in) steel", french: "40x92 mm (1.6x3.6 po) acier"},
                ],
                spacing: Spacing(),
                studs: Studs(),
                insulationInFramingLayer: InsulationLayer1(),
                extraInsulationLayer: InsulationLayer2(),
                interiorFinish: Interior()
            },
            exteriorAddedInsulation: [
                {code: "49", english: "50 mm EPS I (2 in)", french: "50 mm EPS I (2 po)"},
                {code: "50", english: "38 mm EPS II (1.5 in)", french: "38 mm EPS II (1.5 po)"},
                {code: "65", english: "50 mm EPS II (2 in)", french: "50 mm EPS II (2 po)"},
                {code: "51", english: "76 mm EPS II (3 in)", french: "76 mm EPS II (3 po)"},
                {code: "52", english: "19 mm XTPS IV (0.75 in)", french: "19 mm XTPS IV (0.75 po)"},
                {code: "53", english: "38 mm XTPS IV (1.5 in)", french: "38 mm XTPS IV (1.5 po)"},
                {code: "54", english: "64 mm XTPS IV (2.5 in)", french: "64 mm XTPS IV (2.5 po)"},
                {code: "55", english: "25 mm semi-rigid (1 in)", french: "25 mm semi-rigid (1 po)"},
                {code: "56", english: "19 mm polyisocyan.(0.75 in)", french: "19 mm polyisocyan.(0.75 po)"},
                {code: "57", english: "50 mm rig. glass fib.(2 in)", french: "50 mm rig. glass fib.(2 po)"},
                {code: "", english: "User specified", french: "Spécifié par l'utilisateur"},
            ],
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
                insulationLayer1 : InsulationLayer1(),
                insulationLayer2 : InsulationLayer2(),
                interior: Interior(),
                sheathing: Sheathing(),
                exterior: Exterior(),
                dropFraming: [{code: "0", english: "No", french: "No"},{code: "0", english: "Yes", french: "Yes"}],
            }
        }
    };
}

export default Basement;
