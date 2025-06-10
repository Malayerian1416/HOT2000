const structures = {
    woodFrame:
        {
            name: "Wood Frame",
            code: "2",
            usable: ["1", "2", "3"],
            componentTypes: [
                {englishName: "38x89 mm (2x4 in)", frenchName: "38x89 mm (2x4 in)", code: "0"},
                {englishName: "38x140 mm (2x6 in)", frenchName: "38x140 mm (2x6 in)", code: "1"},
                {englishName: "38x184 mm (2x8 in)", frenchName: "38x184 mm (2x8 in)", code: "2"},
                {englishName: "38x235 mm (2x10 in)", frenchName: "38x235 mm (2x10 in)", code: "3"},
                {englishName: "38x286 mm (2x12 in)", frenchName: "38x286 mm (2x12 in)", code: "4"},
                {englishName: "51x102 mm (Rough cut 2x4 in)", frenchName: "51x102 mm (Rough cut 2x4 in)", code: "5"},
            ],
        },
    steelFrame:
        {
            name: "Steel Frame",
            code: "3",
            usable: ["1", "2", "3"],
            componentTypes: [
                {englishName: "30x92 mm (1.2x3.6 in)", frenchName: "30x92 mm (1.2x3.6 in)", code: "0"},
                {englishName: "30x152 mm (1.2x6 in)", frenchName: "30x152 mm (1.2x6 in)", code: "1"},
            ],
        },
    truss:
        {
            name: "Truss",
            code: "4",
            usable: ["1", "2", "3"],
            componentTypes: [
                {englishName: "38x89 mm (2x4 in) Attic truss", frenchName: "38x89 mm (2x4 in) Attic truss", code: "0"},
                {englishName: "38x114 mm (2x5 in) Attic truss", frenchName: "38x114 mm (2x5 in) Attic truss", code: "1"},
                {englishName: "38x451 mm (2x17.75 in) Flat truss", frenchName: "38x451 mm (2x17.75 in) Flat truss", code: "2"},
                {englishName: "38x356 mm (2x14.00 in) Flat truss", frenchName: "38x356 mm (2x14.00 in) Flat truss", code: "3"},
                {englishName: "38x324 mm (2x12.75 in) Steel web I", frenchName: "38x324 mm (2x12.75 in) Steel web I", code: "4"},
                {englishName: "38x375 mm (2x14.75 in) Steel web I", frenchName: "38x375 mm (2x14.75 in) Steel web I", code: "5"},
                {englishName: "38x451 mm (2x17.75 in) Steel web I", frenchName: "38x451 mm (2x17.75 in) Steel web I", code: "6"},
                {englishName: "38x324 mm (2x12.75 in) Steel web II", frenchName: "38x324 mm (2x12.75 in) Steel web II", code: "7"},
                {englishName: "38x375 mm (2x14.75 in) Steel web II", frenchName: "38x375 mm (2x14.75 in) Steel web II", code: "8"},
                {englishName: "38x451 mm (2x17.75 in) Steel web II", frenchName: "38x451 mm (2x17.75 in) Steel web II", code: "9"},
                {englishName: "64x324 mm (2x12.75 in) Steel web II", frenchName: "64x324 mm (2x12.75 in) Steel web II", code: "A"},
                {englishName: "64x375 mm (2x14.75 in) Steel web II", frenchName: "64x375 mm (2x14.75 in) Steel web II", code: "B"},
                {englishName: "64x451 mm (2x17.75 in) Steel web II", frenchName: "64x451 mm (2x17.75 in) Steel web II", code: "C"}
            ]
        },
    compositeWoodJoist:
        {
            name: "Composite wood joist",
            code: "5",
            usable: ["1", "2", "3"],
            componentTypes: [
                {englishName: "38x241 mm (2x9.5 in)", frenchName: "38x241 mm (2x9.5 in)", code: "0"},
                {englishName: "38x302 mm (2x11.875 in)", frenchName: "38x302 mm (2x11.875 in)", code: "1"},
                {englishName: "38x356 mm (2x14 in)", frenchName: "38x356 mm (2x14 in)", code: "2"},
                {englishName: "38x406 mm (2x16 in)", frenchName: "38x406 mm (2x16 in)", code: "3"},
            ]
        },
    solid:
        {
            name: "Solid",
            code: "6",
            usable: ["1", "2", "3"],
            componentTypes: [
                {englishName: "76 mm (3 in) Concrete", frenchName: "76 mm (3 in) Concrete", code: "0"},
                {englishName: "203 mm (8 in) Concrete", frenchName: "203 mm (8 in) Concrete", code: "1"},
                {englishName: "305 mm (12 in) Concrete", frenchName: "305 mm (12 in) Concrete", code: "2"},
                {englishName: "203 mm (8 in) Concrete block", frenchName: "203 mm (8 in) Concrete block", code: "3"},
                {englishName: "305 mm (12 in) Concrete block", frenchName: "305 mm (12 in) Concrete block", code: "4"},
                {englishName: "Insulating concrete block", frenchName: "Insulating concrete block", code: "5"},
                {englishName: "203 mm (8 in) Concrete + 2 layers XTPS IV", frenchName: "203 mm (8 in) Concrete + 2 layers XTPS IV", code: "6"},
                {englishName: "140 mm (5.5 in) Concrete + 2 layers EPS II", frenchName: "140 mm (5.5 in) Concrete + 2 layers EPS II", code: "7"},
                {englishName: "159 mm (6.25 in) Concrete + 2 layers EPS II", frenchName: "159 mm (6.25 in) Concrete + 2 layers EPS II", code: "8"},
                {englishName: "305 mm (12 in) round-scribed Log", frenchName: "305 mm (12 in) round-scribed Log", code: "9"},
                {englishName: "150 mm (6 in) rectangular-milled Log", frenchName: "150 mm (6 in) rectangular-milled Log", code: "A"},
                {englishName: "254 mm (10 in) Round log", frenchName: "254 mm (10 in) Round log", code: "B"},
                {englishName: "406 mm (16 in) Round log", frenchName: "406 mm (16 in) Round log", code: "C"},
                {englishName: "610 mm (24 in) Stone", frenchName: "610 mm (24 in) Stone", code: "D"},
                {englishName: "102 mm (4 in) Planks logs", frenchName: "102 mm (4 in) Planks logs", code: "E"},
                {englishName: "Double brick", frenchName: "Double brick", code: "F"},
                {englishName: "610 mm (24 in) Quartzitic and sandstone", frenchName: "610 mm (24 in) Quartzitic and sandstone", code: "G"},
                {englishName: "610 mm (24 in) Calcitic, dolomitic, limestone, marble, granite", frenchName: "610 mm (24 in) Calcitic, dolomitic, limestone, marble, granite", code: "H"}
            ],
        },
    panel:
        {
            name: "Panel",
            code: "7",
            usable: ["1", "2", "3"],
            componentTypes: [
                {englishName: "Single stud, 140 mm, ins.", frenchName: "Single stud, 140 mm, ins.", code: "0"},
                {englishName: "Double turned stud, 140 mm, ins.", frenchName: "Double turned stud, 140 mm, ins.", code: "1"},
                {englishName: "Stressed skin, stud, 82 mm (3 1/4 in), ins.", frenchName: "Stressed skin, stud, 82 mm (3 1/4 in), ins.", code: "2"},
                {englishName: "Stressed skin, stud, 108 mm (4 1/4 in), ins.", frenchName: "Stressed skin, stud, 108 mm (4 1/4 in), ins.", code: "3"},
                {englishName: "Stressed skin, stud, 159 mm (6 1/4 in), ins.", frenchName: "Stressed skin, stud, 159 mm (6 1/4 in), ins.", code: "4"},
                {englishName: "Stressed skin, no stud, 89 mm (3 1/2 in)", frenchName: "Stressed skin, no stud, 89 mm (3 1/2 in)", code: "5"},
                {englishName: "Stressed skin, no stud, 140 mm (5 1/2 in)", frenchName: "Stressed skin, no stud, 140 mm (5 1/2 in)", code: "6"}
            ],
        },
    floorHeader:
        {
            name: "Floor header",
            code: "8",
            usable: ["1"],
        }
}
const lintel = {
    type: [
        {englishName: "Single", frenchName: "None", code: "0"},
        {englishName: "Double", frenchName: "None", code: "1"},
        {englishName: "Triple", frenchName: "None", code: "2"},
    ],
    material: [
        {englishName: "Wood", frenchName: "None", code: "0"},
        {englishName: "Steel", frenchName: "None", code: "1"},
    ],
    insulation: [
        {englishName: "None", frenchName: "None", code: "0"},
        {englishName: "Same as wall framing cavity", frenchName: "None", code: "1"},
        {englishName: "EPS I (50 mm, 2 in)", frenchName: "None", code: "2"},
        {englishName: "EPS II (38 mm, 1.5 in)", frenchName: "None", code: "3"},
        {englishName: "EPS II (76 mm, 3 in)", frenchName: "None", code: "4"},
        {englishName: "XTPS IV (19 mm, 0.75 in)", frenchName: "None", code: "5"},
        {englishName: "XTPS IV (38 mm, 1.5 in)", frenchName: "None", code: "6"},
        {englishName: "XTPS IV (64 mm, 2.5 in)", frenchName: "None", code: "7"},
        {englishName: "Semi-rigid (25 mm, 1 in)", frenchName: "None", code: "8"},
        {englishName: "Polyisocyanurate (19 mm, 0.75 in)", frenchName: "None", code: "9"},
    ]
}
const spacing = [
    {englishName: "305 mm (12 in)", frenchName: "None", code: "0"},
    {englishName: "400 mm (16 in)", frenchName: "None", code: "1"},
    {englishName: "487 mm (19 in)", frenchName: "None", code: "2"},
    {englishName: "600 mm (24 in)", frenchName: "None", code: "3"}
]
const interior = [
    {englishName: "None", frenchName: "None", code: "0"},
    {englishName: "12 mm (0.5 in) gypsum board", frenchName: "12 mm (0.5 in) gypsum board", code: "1"},
    {englishName: "Gypsum + Non insul, strapping", frenchName: "Gypsum + Non insul, strapping", code: "2"},
    {englishName: "Gypsum + RSI 1.4 (R8) insul, strapping", frenchName: "Gypsum + RSI 1.4 (R8) insul, strapping", code: "3"},
    {englishName: "Tile-linoleum", frenchName: "Tile-linoleum", code: "4"},
    {englishName: "Gypsum + Tile-linoleum", frenchName: "Gypsum + Tile-linoleum", code: "5"},
    {englishName: "Wood", frenchName: "Wood", code: "6"},
    {englishName: "Gypsum + Wood", frenchName: "Gypsum + Wood", code: "7"},
    {englishName: "Lath & plaster", frenchName: "Lath & plaster", code: "9"},
];
const insulationLayer1 = [
    {englishName: "None", frenchName: "None", code: "0"},
    {englishName: "RSI 1.41 @ 64 mm (R 8 @ 2.5\"\) batt", frenchName: "None", code: "1"},
    {englishName: "RSI 1.76 @ 89 mm (R 10 @ 3.5\"\) batt", frenchName: "None", code: "K"},
    {englishName: "RSI 2.11 @ 89 mm (R 12 @ 3.5\"\) batt", frenchName: "None", code: "2"},
    {englishName: "RSI 2.46 @ 89 mm (R 14 @ 3.5\"\) batt", frenchName: "None", code: "X"},
    {englishName: "RSI 3.34 @ 140 mm (R 19 @ 5.5\"\) batt", frenchName: "None", code: "Y"},
    {englishName: "RSI 3.52 @ 152 mm (R 20 @ 6.0\"\) batt", frenchName: "None", code: "3"},
    {englishName: "RSI 3.87 @ 140 mm (R 22 @ 5.5\"\) batt", frenchName: "None", code: "4"},
    {englishName: "RSI 4.23 @ 140 mm (R 24 @ 5.5\"\) batt", frenchName: "None", code: "Z"},
    {englishName: "RSI 4.93 @ 178 mm (R 28 @ 7.0\"\) batt", frenchName: "None", code: "a"},
    {englishName: "RSI 4.93 @ 216 mm (R 28 @ 8.5\"\) batt", frenchName: "None", code: "5"},
    {englishName: "RSI 5.46 @ 241 mm (R 31 @ 9.5\"\) batt", frenchName: "None", code: "L"},
    {englishName: "RSI 6.16 @ 267 mm (R 35 @ 10.5\"\) batt", frenchName: "None", code: "c"},
    {englishName: "RSI 7.04 @ 279 mm (R 40 @ 11.0\"\) batt", frenchName: "None", code: "J"},
    {englishName: "RSI 7.04 @ 300 mm (R 40 @ 11.8\"\) batt", frenchName: "None", code: "b"},
    {englishName: "RSI 3.5 (R 20) Blown cellulose", frenchName: "None", code: "6"},
    {englishName: "RSI 4.9 (R 28) Blown cellulose", frenchName: "None", code: "7"},
    {englishName: "RSI 9.0 (R 51) Blown cellulose", frenchName: "None", code: "8"},
    {englishName: "RSI 10.57 (R 60) Blown cellulose", frenchName: "None", code: "d"},
    {englishName: "RSI 3.5 (R 20) Blown mineral fibre", frenchName: "None", code: "B"},
    {englishName: "RSI 4.9 (R 28) Blown mineral fibre", frenchName: "None", code: "C"},
    {englishName: "RSI 9.0 (R 51) Blown mineral fibre", frenchName: "None", code: "D"},
    {englishName: "36.0 RSI/m (R 5.19/in) Medium density spray foam", frenchName: "None", code: "U"},
    {englishName: "RSI 0.9 25 mm (1 in) Medium density spray foam", frenchName: "None", code: "V"},
    {englishName: "RSI 1.8 51 mm (2 in) Medium density spray foam", frenchName: "None", code: "W"},
    {englishName: "RSI 2.2 (R 12.6) Low density spray foam", frenchName: "None", code: "G"},
    {englishName: "RSI 4.4 (R 25.2) Low density spray foam", frenchName: "None", code: "I"},
    {englishName: "RSI 0.18 (R 1.0) Seaweed batt", frenchName: "None", code: "e"},
    {englishName: "Wood shavings", frenchName: "None", code: "M"},
    {englishName: "Newspaper", frenchName: "None", code: "N"},
    {englishName: "Wood pieces", frenchName: "None", code: "O"},
    {englishName: "Vermiculite", frenchName: "None", code: "P"},
    {englishName: "Straw", frenchName: "None", code: "Q"},
    {englishName: "Expanded Polystyrene(EPS I)", frenchName: "None", code: "R"},
    {englishName: "Expanded Polystyrene(EPS II)", frenchName: "None", code: "S"},
    {englishName: "Extruded Polystyrene(XTPS IV)", frenchName: "None", code: "T"},
];
const insulationLayer2 = [
    {englishName: "None", frenchName: "None", code: "0"},
    {englishName: "13 mm (0.5 in) EPS I", frenchName: "None", code: "K"},
    {englishName: "19 mm (0.75 in) EPS I", frenchName: "None", code: "L"},
    {englishName: "25 mm (1 in) EPS I", frenchName: "None", code: "M"},
    {englishName: "38 mm (1.5 in) EPS I", frenchName: "None", code: "N"},
    {englishName: "50 mm (2 in) EPS I", frenchName: "None", code: "1"},
    {englishName: "76 mm (3 in) EPS I", frenchName: "None", code: "O"},
    {englishName: "13 mm (0.5 in) EPS II", frenchName: "None", code: "P"},
    {englishName: "25 mm (1 in) EPS II", frenchName: "None", code: "C"},
    {englishName: "38 mm (1.5 in) EPS II", frenchName: "None", code: "2"},
    {englishName: "50 mm (2 in) EPS II", frenchName: "None", code: "A"},
    {englishName: "76 mm (3 in) EPS II", frenchName: "None", code: "3"},
    {englishName: "13 mm (0.5 in) XTPS IV", frenchName: "None", code: "H"},
    {englishName: "19 mm (0.75 in) XTPS IV", frenchName: "None", code: "4"},
    {englishName: "25 mm (1 in) XTPS IV", frenchName: "None", code: "B"},
    {englishName: "38 mm (1.5 in) XTPS IV", frenchName: "None", code: "5"},
    {englishName: "51 mm (2 in) XTPS IV", frenchName: "None", code: "I"},
    {englishName: "64 mm (2.5 in) XTPS IV", frenchName: "None", code: "6"},
    {englishName: "76 mm (3 in) XTPS IV", frenchName: "None", code: "J"},
    {englishName: "25 mm (1 in) Semi-rigid fiberglass", frenchName: "None", code: "7"},
    {englishName: "51 mm (2 in) Semi-rigid fiberglass", frenchName: "None", code: "Q"},
    {englishName: "13 mm (0.5 in) isocyanurate", frenchName: "None", code: "R"},
    {englishName: "19 mm (0.75 in) isocyanurate", frenchName: "None", code: "8"},
    {englishName: "25 mm (1 in) isocyanurate", frenchName: "None", code: "S"},
    {englishName: "38 mm (1.5 in) isocyanurate", frenchName: "None", code: "T"},
    {englishName: "51 mm (2 in) isocyanurate", frenchName: "None", code: "U"},
    {englishName: "Same as Insulation Layer 1", frenchName: "None", code: "9"},
    {englishName: "25 mm (1 in) Medium density spray foam", frenchName: "None", code: "D"},
    {englishName: "51 mm (2 in) Medium density spray foam", frenchName: "None", code: "E"},
    {englishName: "76 mm (3 in) Medium density spray foam", frenchName: "None", code: "F"},
    {englishName: "89 mm (3.5 in) Medium density spray foam", frenchName: "None", code: "G"},
];

const facingDirection ={
    notApplicable : {englishName: "N/A", frenchName: "S/O", code: "0"},
    south : {englishName: "South", frenchName: "Sud", code: "1"},
    southEast : {englishName: "Southeast", frenchName: "Sud-est", code: "2"},
    east : {englishName: "East", frenchName: "Est", code: "3"},
    northEast : {englishName: "Northeast", frenchName: "Nord-est", code: "4"},
    north : {englishName: "North", frenchName: "Nord", code: "5"},
    northWest : {englishName: "Northwest", frenchName: "Nord-ouest", code: "6"},
    west : {englishName: "West", frenchName: "Ouest", code: "7"},
    southWest : {englishName: "Southwest", frenchName: "Sud-ouest", code: "8"},
};

const sheathing = [
    {englishName: "None", frenchName: "None", code: "0"},
    {englishName: "Waferboard/OSB 9.5 mm (3/8 in)", frenchName: "None", code: "1"},
    {englishName: "Waferboard/OSB 11.1 mm (7/16 in)", frenchName: "None", code: "2"},
    {englishName: "Waferboard/OSB 15.9 mm (5/8 in)", frenchName: "None", code: "3"},
    {englishName: "Plywood/Particle board 9.5 mm (3/8 in)", frenchName: "None", code: "4"},
    {englishName: "Plywood/Particle board 12.7 mm (1/2 in)", frenchName: "None", code: "5"},
    {englishName: "Plywood/Particle board 15.5 mm (5/8 in)", frenchName: "None", code: "6"},
    {englishName: "Plywood/Particle board 18.5 mm (3/4 in)", frenchName: "None", code: "7"},
    {englishName: "Fibreboard 9.5 mm (3/8 in)", frenchName: "None", code: "8"},
    {englishName: "Fibreboard 11.1 mm (7/16 in)", frenchName: "None", code: "9"},
    {englishName: "Gypsum sheathing 9.5 mm (3/8 in)", frenchName: "None", code: "A"},
    {englishName: "Gypsum sheathing 12.7 mm (1/2 in)", frenchName: "None", code: "B"},

];

const exterior = [
    {englishName: "None", frenchName: "None", code: "0"},
    {englishName: "Wood (lapped)", frenchName: "None", code: "1"},
    {englishName: "Hollow metal/vinyl cladding", frenchName: "None", code: "2"},
    {englishName: "Insul. metal/vinyl cladding", frenchName: "None", code: "3"},
    {englishName: "Brick", frenchName: "None", code: "4"},
    {englishName: "Mortar", frenchName: "None", code: "5"},
    {englishName: "Stucco", frenchName: "None", code: "6"},
    {englishName: "Stone", frenchName: "None", code: "7"},
    {englishName: "Quartzitic and sandstone", frenchName: "None", code: "8"},
    {englishName: "Calcitic, dolomitic, limestone, marble, granite", frenchName: "None", code: "9"}
];

const studs = [
    {englishName: "2 studs", frenchName: "None", code: "0"},
    {englishName: "3 studs", frenchName: "None", code: "1"},
    {englishName: "4 studs", frenchName: "None", code: "2"},
];

const heatingSystems = {
    baseboards: {
        equipmentInformation: {numberOfElectronicThermostats: null, manufacturer: null, model: null},
        specifications: {
            sizingFactor: null,
            efficiency: null,
            outputCapacity: {code: null, value: null, uiUnits: null, english: null, french: null}
        },
        xmlOutput() {
            return `<Baseboards>
                    <EquipmentInformation numberOfElectronicThermostats="${this.baseboards.equipmentInformation.numberOfElectronicThermostats}">
                        <Manufacturer>${this.baseboards.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.baseboards.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Specifications sizingFactor="${this.baseboards.specifications.sizingFactor}" efficiency="${this.baseboards.specifications.efficiency}">
                        <OutputCapacity code="${this.baseboards.specifications.outputCapacity.code}" value="${this.baseboards.specifications.outputCapacity.value}" uiUnits="${this.baseboards.specifications.outputCapacity.uiUnits}">
                            <English>${this.baseboards.specifications.outputCapacity.english}</English>
                            <French>${this.baseboards.specifications.outputCapacity.french}</French>
                        </OutputCapacity>
                    </Specifications>
                </Baseboards>`;
        }
    },
    furnace: {
        equipmentInformation: {energystar: null, manufacturer: null, model: null},
        equipment: {
            isBiEnergy: null,
            switchoverTemperature: null,
            energySource: {code: null, english: null, french: null},
            equipmentType: {code: null, english: null, french: null},
        },
        specifications: {
            sizingFactor: null,
            efficiency: null,
            isSteadyState: null,
            pilotLight: null,
            flueDiameter: null,
            outputCapacity: {code: null, value: null, uiUnits: null, english: null, french: null}
        },
        xmlOutput() {
            return `<Furnace>
                    <EquipmentInformation energystar="${this.equipmentInformation.energystar}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Equipment isBiEnergy="${this.equipment.isBiEnergy}" switchoverTemperature="${this.equipment.switchoverTemperature}">
                        <EnergySource code="${this.equipment.energySource.code}">
                            <English>${this.equipment.energySource.english}</English>
                            <French>${this.equipment.energySource.french}</French>
                        </EnergySource>
                        <EquipmentType code="${this.equipment.equipmentType.code}">
                            <English>${this.equipment.equipmentType.english}</English>
                            <French>${this.equipment.energySource.french}</French>
                        </EquipmentType>
                    </Equipment>
                    <Specifications sizingFactor="${this.specifications.sizingFactor}" efficiency="${this.specifications.efficiency}" isSteadyState="${this.specifications.isSteadyState}" pilotLight="${this.specifications.pilotLight}" flueDiameter="${this.specifications.flueDiameter}">
                        <OutputCapacity code="${this.specifications.outputCapacity.code}" value="${this.specifications.outputCapacity.value}" uiUnits="${this.specifications.outputCapacity.uiUnits}">
                            <English>${this.specifications.outputCapacity.english}</English>
                            <French>${this.specifications.outputCapacity.french}</French>
                        </OutputCapacity>
                    </Specifications>
                </Furnace>`;
        }
    },
    boiler: {
        equipmentInformation: {energystar: null, manufacturer: null, model: null},
        equipment: {
            isBiEnergy: null,
            switchoverTemperature: null,
            energySource: {code: null, english: null, french: null},
            equipmentType: {code: null, english: null, french: null},
        },
        specifications: {
            sizingFactor: null,
            efficiency: null,
            isSteadyState: null,
            pilotLight: null,
            flueDiameter: null,
            outputCapacity: {code: null, value: null, uiUnits: null, english: null, french: null}
        },
        xmlOutput() {
            return `<Boiler>
                    <EquipmentInformation energystar="${this.equipmentInformation.energystar}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Equipment isBiEnergy="${this.equipment.isBiEnergy}" switchoverTemperature="${this.equipment.switchoverTemperature}">
                        <EnergySource code="${this.equipment.energySource.code}">
                            <English>${this.equipment.energySource.english}</English>
                            <French>${this.equipment.energySource.french}</French>
                        </EnergySource>
                        <EquipmentType code="${this.equipment.equipmentType.code}">
                            <English>${this.equipment.equipmentType.english}</English>
                            <French>${this.equipment.energySource.french}</French>
                        </EquipmentType>
                    </Equipment>
                    <Specifications sizingFactor="${this.specifications.sizingFactor}" efficiency="${this.specifications.efficiency}" isSteadyState="${this.specifications.isSteadyState}" pilotLight="${this.specifications.pilotLight}" flueDiameter="${this.specifications.flueDiameter}">
                        <OutputCapacity code="${this.specifications.outputCapacity.code}" value="${this.specifications.outputCapacity.value}" uiUnits="${this.specifications.outputCapacity.uiUnits}">
                            <English>${this.specifications.outputCapacity.english}</English>
                            <French>${this.specifications.outputCapacity.french}</French>
                        </OutputCapacity>
                    </Specifications>
                </Boiler>`;
        }
    },
    comboHeatDhw: {
        equipmentInformation: {energystar: null, manufacturer: null, model: null},
        equipment: {
            isBiEnergy: null,
            switchoverTemperature: null,
            energySource: {code: null, english: null, french: null},
            equipmentType: {code: null, english: null, french: null},
        },
        specifications: {
            sizingFactor: null,
            efficiency: null,
            isSteadyState: null,
            pilotLight: null,
            flueDiameter: null,
            outputCapacity: {code: null, value: null, uiUnits: null, english: null, french: null}
        },
        comboTankAndPump: {
            tankCapacity: {code: null, value: null, english: null, french: null},
            energyFactor: {useDefaults: null},
            tankLocation: {code: null, english: null, french: null},
            circulationPump: {isCalculated: null, value: null, hasEnergyEfficientMotor: null}
        },
        xmlOutput() {
            return `<ComboHeatDhw>
                    <EquipmentInformation energystar="${this.equipmentInformation.energystar}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Equipment isBiEnergy="${this.equipment.isBiEnergy}" switchoverTemperature="${this.equipment.switchoverTemperature}">
                        <EnergySource code="${this.equipment.energySource.code}">
                            <English>${this.equipment.energySource.english}</English>
                            <French>${this.equipment.energySource.french}</French>
                        </EnergySource>
                        <EquipmentType code="${this.equipment.equipmentType.code}">
                            <English>${this.equipment.equipmentType.english}</English>
                            <French>${this.equipment.energySource.french}</French>
                        </EquipmentType>
                    </Equipment>
                    <Specifications sizingFactor="${this.specifications.sizingFactor}" efficiency="${this.specifications.efficiency}" isSteadyState="${this.specifications.isSteadyState}" pilotLight="${this.specifications.pilotLight}" flueDiameter="${this.specifications.flueDiameter}">
                        <OutputCapacity code="${this.specifications.outputCapacity.code}" value="${this.specifications.outputCapacity.value}" uiUnits="${this.specifications.outputCapacity.uiUnits}">
                            <English>${this.specifications.outputCapacity.english}</English>
                            <French>${this.specifications.outputCapacity.french}</French>
                        </OutputCapacity>
                    </Specifications>
                    <ComboTankAndPump>
                        <TankCapacity code="${this.comboTankAndPump.tankCapacity.code}" value="${this.comboTankAndPump.tankCapacity.value}">
                            <English>${this.comboTankAndPump.tankCapacity.english}</English>
                            <French>${this.comboTankAndPump.tankCapacity.french}</French>
                        </TankCapacity>
                        <EnergyFactor useDefaults="${this.comboTankAndPump.energyFactor.useDefaults}" />
                        <TankLocation code="${this.comboTankAndPump.tankLocation.code}">
                            <English>${this.comboTankAndPump.tankLocation.english}</English>
                            <French>${this.comboTankAndPump.tankLocation.french}</French>
                        </TankLocation>
                        <CirculationPump isCalculated="${this.comboTankAndPump.circulationPump.isCalculated}" value="${this.comboTankAndPump.circulationPump.value}" hasEnergyEfficientMotor="${this.comboTankAndPump.circulationPump.hasEnergyEfficientMotor}" />
                    </ComboTankAndPump>
                </ComboHeatDhw>`;
        }
    },
    P9: {
        numberOfSystems: null,
        thermalPerformanceFactor: null,
        annualElectricity: null,
        spaceHeatingCapacity: null,
        spaceHeatingEfficiency: null,
        waterHeatingPerformanceFactor: null,
        burnerInput: null,
        recoveryEfficiency: null,
        isUserSpecified: null,
        equipmentInformation: {energystar: null, manufacturer: null, model: null},
        testData: {
            controlsPower: null,
            circulationPower: null,
            dailyUse: null,
            standbyLossWithFan: null,
            standbyLossWithoutFan: null,
            oneHourRatingHotWater: null,
            oneHourRatingConcurrent: null,
            energySource: {code: null, english: null, french: null},
            netEfficiency: {loadPerformance15: null, loadPerformance40: null, loadPerformance100: null},
            electricalUse: {loadPerformance15: null, loadPerformance40: null, loadPerformance100: null},
            blowerPower: {loadPerformance15: null, loadPerformance40: null, loadPerformance100: null},
        },
        xmlOutput() {
            return `<P9 numberOfSystems="${this.numberOfSystems}" thermalPerformanceFactor="${this.thermalPerformanceFactor}" annualElectricity="${this.annualElectricity}" spaceHeatingCapacity="${this.spaceHeatingCapacity}" spaceHeatingEfficiency="${this.spaceHeatingEfficiency}" waterHeatingPerformanceFactor="${this.waterHeatingPerformanceFactor}" burnerInput="${this.burnerInput}" recoveryEfficiency="${this.recoveryEfficiency}" isUserSpecified="${this.isUserSpecified}">
                    <EquipmentInformation energystar="${this.equipmentInformation.energystar}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <TestData controlsPower="${this.testData.controlsPower}" circulationPower="${this.testData.circulationPower}" dailyUse="${this.testData.dailyUse}" standbyLossWithFan="${this.testData.standbyLossWithFan}" standbyLossWithoutFan="${this.testData.standbyLossWithoutFan}" oneHourRatingHotWater="${this.testData.oneHourRatingHotWater}" oneHourRatingConcurrent="${this.testData.oneHourRatingConcurrent}">
                        <EnergySource code="${this.testData.energySource.code}">
                            <English>${this.testData.energySource.english}</English>
                            <French>${this.testData.energySource.french}</French>
                        </EnergySource>
                        <NetEfficiency loadPerformance15="${this.testData.netEfficiency.loadPerformance15}" loadPerformance40="${this.testData.netEfficiency.loadPerformance40}" loadPerformance100="${this.testData.netEfficiency.loadPerformance100}" />
                        <ElectricalUse loadPerformance15="${this.testData.electricalUse.loadPerformance15}" loadPerformance40="${this.testData.electricalUse.loadPerformance40}" loadPerformance100="${this.testData.electricalUse.loadPerformance100}" />
                        <BlowerPower loadPerformance15="${this.testData.blowerPower.loadPerformance15}" loadPerformance40="${this.testData.blowerPower.loadPerformance40}" loadPerformance100="${this.testData.blowerPower.loadPerformance100}" />
                    </TestData>
                </P9>`;
        }
    }
};

const coolingSystems = {
    NA: {},
    airHeatPump: {
        equipmentInformation: {energystar: null, CCASHP: null, AHRI: null, manufacturer: null, model: null},
        equipment: {
            crankcaseHeater: null,
            type: {code: null, english: null, french: null},
            function: {code: null, english: null, french: null}
        },
        specifications: {
            outputCapacity: {code: null, value: null, uiUnits: null, english: null, french: null},
            heatingEfficiency: {isCop: null, unit: null, value: null},
            coolingEfficiency: {isCop: null, unit: null, value: null}
        },
        temperature: {
            cutoffType: {code: null, english: null, french: null},
            ratingType: {code: null, value: null, english: null, french: null}
        },
        coolingParameters: {
            sensibleHeatRatio: null,
            openableWindowArea: null,
            fansAndPump: {
                flowRate: null,
                hasEnergyEfficientMotor: null,
                mode: {code: null, english: null, french: null},
                power: {isCalculated: null}
            }
        },
        coldClimateHeatPump: {
            heatingEfficiency: null,
            coolingEfficiency: null,
            heatingEfficiencyUnit: null,
            coolingEfficiencyUnit: null,
            capacity: null,
            uiUnits: null,
            cop: null,
            capacityMaintenance: null
        },
        xmlOutput() {
            return `<AirHeatPump>
                    <EquipmentInformation energystar="${this.equipmentInformation.energystar}" CCASHP="${this.equipmentInformation.CCASHP}" AHRI="${this.equipmentInformation.AHRI}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Equipment crankcaseHeater="${this.equipment.crankcaseHeater}">
                        <Type code="${this.equipment.type.code}">
                            <English>${this.equipment.type.english}</English>
                            <French>${this.equipment.type.french}</French>
                        </Type>
                        <Function code="${this.equipment.function.code}">
                            <English>${this.equipment.function.english}</English>
                            <French>${this.equipment.function.french}</French>
                        </Function>
                    </Equipment>
                    <Specifications>
                        <OutputCapacity code="${this.specifications.outputCapacity.code}" value="${this.specifications.outputCapacity.value}" uiUnits="${this.specifications.outputCapacity.uiUnits}">
                            <English>${this.specifications.outputCapacity.english}</English>
                            <French>${this.specifications.outputCapacity.french}</French>
                        </OutputCapacity>
                        <HeatingEfficiency isCop="${this.specifications.heatingEfficiency.isCop}" unit="${this.specifications.heatingEfficiency.unit}" value="${this.specifications.heatingEfficiency.value}" />
                        <CoolingEfficiency isCop="${this.specifications.coolingEfficiency.isCop}" unit="${this.specifications.coolingEfficiency.unit}" value="${this.specifications.coolingEfficiency.value}" />
                    </Specifications>
                    <Temperature>
                        <CutoffType code="${this.temperature.cutoffType.code}">
                            <English>${this.temperature.cutoffType.english}</English>
                            <French>${this.temperature.cutoffType.french}</French>
                        </CutoffType>
                        <RatingType code="${this.temperature.ratingType.code}" value="${this.temperature.ratingType.value}">
                            <English>${this.temperature.ratingType.english}</English>
                            <French>${this.temperature.ratingType.french}</French>
                        </RatingType>
                    </Temperature>
                    <CoolingParameters sensibleHeatRatio="${this.coolingParameters.sensibleHeatRatio}" openableWindowArea="${this.coolingParameters.openableWindowArea}">
                        <FansAndPump flowRate="${this.coolingParameters.fansAndPump.flowRate}" hasEnergyEfficientMotor="${this.coolingParameters.fansAndPump.hasEnergyEfficientMotor}">
                            <Mode code="${this.coolingParameters.fansAndPump.mode.code}">
                                <English>${this.coolingParameters.fansAndPump.mode.english}</English>
                                <French>${this.coolingParameters.fansAndPump.mode.french}</French>
                            </Mode>
                            <Power isCalculated="${this.coolingParameters.fansAndPump.power}" />
                        </FansAndPump>
                    </CoolingParameters>
                    <ColdClimateHeatPump heatingEfficiency="${this.coldClimateHeatPump.heatingEfficiency}" coolingEfficiency="${this.coldClimateHeatPump.coolingEfficiency}" heatingEfficiencyUnit="${this.coldClimateHeatPump.heatingEfficiencyUnit}" coolingEfficiencyUnit="${this.coldClimateHeatPump.coolingEfficiencyUnit}" capacity="${this.coldClimateHeatPump.capacity}" uiUnits="${this.coldClimateHeatPump.uiUnits}" cop="${this.coldClimateHeatPump.cop}" capacityMaintenance="${this.coldClimateHeatPump.capacityMaintenance}" />
                </AirHeatPump>`;
        }
    },
    waterHeatPump: {
        equipmentInformation: {canCsaC448: null, CCASHP: null, AHRI: null, manufacturer: null, model: null},
        equipment: {
            crankcaseHeater: null,
            function: {code: null, english: null, french: null}
        },
        specifications: {
            outputCapacity: {code: null, value: null, uiUnits: null, english: null, french: null},
            heatingEfficiency: {isCop: null, unit: null, value: null},
            coolingEfficiency: {isCop: null, unit: null, value: null}
        },
        temperature: {
            cutoffType: {code: null, english: null, french: null},
            ratingType: {code: null, value: null, english: null, french: null}
        },
        sourceTemperature: {depth: null, use: {code: null, english: null, french: null}},
        coolingParameters: {
            sensibleHeatRatio: null,
            openableWindowArea: null,
            fansAndPump: {
                flowRate: null,
                hasEnergyEfficientMotor: null,
                mode: {code: null, english: null, french: null},
                power: {isCalculated: null}
            }
        },
        coldClimateHeatPump: {
            heatingEfficiency: null,
            coolingEfficiency: null,
            heatingEfficiencyUnit: null,
            coolingEfficiencyUnit: null,
            capacity: null,
            uiUnits: null,
            cop: null,
            capacityMaintenance: null
        },
        xmlOutput() {
            return `<WaterHeatPump>
                    <EquipmentInformation canCsaC448="${this.equipmentInformation.canCsaC448}" CCASHP="${this.equipmentInformation.CCASHP}" AHRI="${this.equipmentInformation.AHRI}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Equipment crankcaseHeater="${this.equipment.crankcaseHeater}">
                        <Function code="${this.equipment.function.code}">
                            <English>${this.equipment.function.english}</English>
                            <French>${this.equipment.function.french}</French>
                        </Function>
                    </Equipment>
                    <Specifications>
                        <OutputCapacity code="${this.specifications.outputCapacity.code}" value="${this.specifications.outputCapacity.value}" uiUnits="${this.specifications.outputCapacity.uiUnits}">
                            <English>${this.specifications.outputCapacity.english}</English>
                            <French>${this.specifications.outputCapacity.french}</French>
                        </OutputCapacity>
                        <HeatingEfficiency isCop="${this.specifications.heatingEfficiency.isCop}" unit="${this.specifications.heatingEfficiency.unit}" value="${this.specifications.heatingEfficiency.value}" />
                        <CoolingEfficiency isCop="${this.specifications.coolingEfficiency.isCop}" unit="${this.specifications.coolingEfficiency.unit}" value="${this.specifications.coolingEfficiency.value}" />
                    </Specifications>
                    <Temperature>
                        <CutoffType code="${this.temperature.cutoffType.code}">
                            <English>${this.temperature.cutoffType.english}</English>
                            <French>${this.temperature.cutoffType.french}</French>
                        </CutoffType>
                        <RatingType code="${this.temperature.ratingType.code}" value="${this.temperature.ratingType.value}">
                            <English>${this.temperature.ratingType.english}</English>
                            <French>${this.temperature.ratingType.french}</French>
                        </RatingType>
                    </Temperature>
                    <SourceTemperature depth="${this.sourceTemperature.depth}">
                        <Use code="${this.sourceTemperature.use.code}">
                            <English>${this.sourceTemperature.use.english}</English>
                            <French>${this.sourceTemperature.use.french}</French>
                        </Use>
                    </SourceTemperature>
                    <CoolingParameters sensibleHeatRatio="${this.coolingParameters.sensibleHeatRatio}" openableWindowArea="${this.coolingParameters.openableWindowArea}">
                        <FansAndPump flowRate="${this.coolingParameters.fansAndPump.flowRate}" hasEnergyEfficientMotor="${this.coolingParameters.fansAndPump.hasEnergyEfficientMotor}">
                            <Mode code="${this.coolingParameters.fansAndPump.mode.code}">
                                <English>${this.coolingParameters.fansAndPump.mode.english}</English>
                                <French>${this.coolingParameters.fansAndPump.mode.french}</French>
                            </Mode>
                            <Power isCalculated="${this.coolingParameters.fansAndPump.power}" />
                        </FansAndPump>
                    </CoolingParameters>
                    <ColdClimateHeatPump heatingEfficiency="${this.coldClimateHeatPump.heatingEfficiency}" coolingEfficiency="${this.coldClimateHeatPump.coolingEfficiency}" heatingEfficiencyUnit="${this.coldClimateHeatPump.heatingEfficiencyUnit}" coolingEfficiencyUnit="${this.coldClimateHeatPump.coolingEfficiencyUnit}" capacity="${this.coldClimateHeatPump.capacity}" uiUnits="${this.coldClimateHeatPump.uiUnits}" cop="${this.coldClimateHeatPump.cop}" capacityMaintenance="${this.coldClimateHeatPump.capacityMaintenance}" />
                </WaterHeatPump>`;
        }
    },
    groundHeatPump: {
        equipmentInformation: {canCsaC448: null, CCASHP: null, AHRI: null, manufacturer: null, model: null},
        equipment: {
            crankcaseHeater: null,
            function: {code: null, english: null, french: null}
        },
        specifications: {
            outputCapacity: {code: null, value: null, uiUnits: null, english: null, french: null},
            heatingEfficiency: {isCop: null, unit: null, value: null},
            coolingEfficiency: {isCop: null, unit: null, value: null}
        },
        temperature: {
            cutoffType: {code: null, english: null, french: null},
            ratingType: {code: null, value: null, english: null, french: null}
        },
        sourceTemperature: {depth: null, use: {code: null, english: null, french: null}},
        coolingParameters: {
            sensibleHeatRatio: null,
            openableWindowArea: null,
            fansAndPump: {
                flowRate: null,
                hasEnergyEfficientMotor: null,
                mode: {code: null, english: null, french: null},
                power: {isCalculated: null}
            }
        },
        coldClimateHeatPump: {
            heatingEfficiency: null,
            coolingEfficiency: null,
            heatingEfficiencyUnit: null,
            coolingEfficiencyUnit: null,
            capacity: null,
            uiUnits: null,
            cop: null,
            capacityMaintenance: null
        },
        xmlOutput() {
            return `<GroundHeatPump>
                    <EquipmentInformation canCsaC448="${this.equipmentInformation.canCsaC448}" CCASHP="${this.equipmentInformation.CCASHP}" AHRI="${this.equipmentInformation.AHRI}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Equipment crankcaseHeater="${this.equipment.crankcaseHeater}">
                        <Function code="${this.equipment.function.code}">
                            <English>${this.equipment.function.english}</English>
                            <French>${this.equipment.function.french}</French>
                        </Function>
                    </Equipment>
                    <Specifications>
                        <OutputCapacity code="${this.specifications.outputCapacity.code}" value="${this.specifications.outputCapacity.value}" uiUnits="${this.specifications.outputCapacity.uiUnits}">
                            <English>${this.specifications.outputCapacity.english}</English>
                            <French>${this.specifications.outputCapacity.french}</French>
                        </OutputCapacity>
                        <HeatingEfficiency isCop="${this.specifications.heatingEfficiency.isCop}" unit="${this.specifications.heatingEfficiency.unit}" value="${this.specifications.heatingEfficiency.value}" />
                        <CoolingEfficiency isCop="${this.specifications.coolingEfficiency.isCop}" unit="${this.specifications.coolingEfficiency.unit}" value="${this.specifications.coolingEfficiency.value}" />
                    </Specifications>
                    <Temperature>
                        <CutoffType code="${this.temperature.cutoffType.code}">
                            <English>${this.temperature.cutoffType.english}</English>
                            <French>${this.temperature.cutoffType.french}</French>
                        </CutoffType>
                        <RatingType code="${this.temperature.ratingType.code}" value="${this.temperature.ratingType.value}">
                            <English>${this.temperature.ratingType.english}</English>
                            <French>${this.temperature.ratingType.french}</French>
                        </RatingType>
                    </Temperature>
                    <SourceTemperature depth="${this.sourceTemperature.depth}">
                        <Use code="${this.sourceTemperature.use.code}">
                            <English>${this.sourceTemperature.use.english}</English>
                            <French>${this.sourceTemperature.use.french}</French>
                        </Use>
                    </SourceTemperature>
                    <CoolingParameters sensibleHeatRatio="${this.coolingParameters.sensibleHeatRatio}" openableWindowArea="${this.coolingParameters.openableWindowArea}">
                        <FansAndPump flowRate="${this.coolingParameters.fansAndPump.flowRate}" hasEnergyEfficientMotor="${this.coolingParameters.fansAndPump.hasEnergyEfficientMotor}">
                            <Mode code="${this.coolingParameters.fansAndPump.mode.code}">
                                <English>${this.coolingParameters.fansAndPump.mode.english}</English>
                                <French>${this.coolingParameters.fansAndPump.mode.french}</French>
                            </Mode>
                            <Power isCalculated="${this.coolingParameters.fansAndPump.power}" />
                        </FansAndPump>
                    </CoolingParameters>
                    <ColdClimateHeatPump heatingEfficiency="${this.coldClimateHeatPump.heatingEfficiency}" coolingEfficiency="${this.coldClimateHeatPump.coolingEfficiency}" heatingEfficiencyUnit="${this.coldClimateHeatPump.heatingEfficiencyUnit}" coolingEfficiencyUnit="${this.coldClimateHeatPump.coolingEfficiencyUnit}" capacity="${this.coldClimateHeatPump.capacity}" uiUnits="${this.coldClimateHeatPump.uiUnits}" cop="${this.coldClimateHeatPump.cop}" capacityMaintenance="${this.coldClimateHeatPump.capacityMaintenance}" />
                </GroundHeatPump>`;
        }
    },
    airConditioning: {
        equipmentInformation: {energystar: null, manufacturer: null, model: null},
        equipment: {
            crankcaseHeater: null,
            type: {tag: null, code: null, english: null, french: null},
        },
        specifications: {
            sizingFactor: null,
            ratedCapacity: {code: null, value: null, uiUnits: null, english: null, french: null},
            efficiency: {isCop: null, unit: null, value: null}
        },
        coolingParameters: {
            sensibleHeatRatio: null,
            openableWindowArea: null,
            fansAndPump: {
                flowRate: null,
                hasEnergyEfficientMotor: null,
                mode: {code: null, english: null, french: null},
                power: {isCalculated: null}
            }
        },
        xmlOutput() {
            const Type = `<${this.equipment.type.tag} code="${this.equipment.type.code}">
                            <English>${this.equipment.type.english}</English>
                            <French>${this.equipment.type.french}</French>
                        </${this.equipment.type.tag}>`;
            return `<AirConditioning>
                    <EquipmentInformation energystar="${this.equipmentInformation.energystar}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Equipment crankcaseHeater="${this.equipment.crankcaseHeater}">
                        ${Type}
                    </Equipment>
                    <Specifications>
                         <RatedCapacity code="${this.specifications.ratedCapacity.code}" value="${this.specifications.ratedCapacity.value}" uiUnits="${this.specifications.ratedCapacity.uiUnits}">
                            <English>${this.specifications.ratedCapacity.english}</English>
                            <French>${this.specifications.ratedCapacity.french}</French>
                        </RatedCapacity>
                        <Efficiency isCop="${this.specifications.efficiency.isCop}" unit="${this.specifications.efficiency.unit}" value="${this.specifications.efficiency.value}" />
                    </Specifications>
                    <CoolingParameters sensibleHeatRatio="${this.coolingParameters.sensibleHeatRatio}" openableWindowArea="${this.coolingParameters.openableWindowArea}">
                        <FansAndPump flowRate="${this.coolingParameters.fansAndPump.flowRate}" hasEnergyEfficientMotor="${this.coolingParameters.fansAndPump.hasEnergyEfficientMotor}">
                            <Mode code="${this.coolingParameters.fansAndPump.mode.code}">
                                <English>${this.coolingParameters.fansAndPump.mode.english}</English>
                                <French>${this.coolingParameters.fansAndPump.mode.french}</French>
                            </Mode>
                            <Power isCalculated="${this.coolingParameters.fansAndPump.power}" />
                        </FansAndPump>
                    </CoolingParameters>
                </AirConditioning>`;
        }
    },
};
const supplementaryHeatingSystems = {
    system: {
        rank: null,
        equipmentInformation: {csaEpa: null, manufacturer: null, model: null, description: null},
        equipment: {
            energySource: {code: null, english: null, french: null},
            type: {code: null, english: null, french: null}
        },
        specifications: {
            efficiency: null,
            pilotLight: null,
            damperClosed: null,
            yearMade: {code: null, english: null, french: null},
            usage: {code: null, english: null, french: null},
            locationHeated: { code: null, value: null, english: null, french: null},
            flue: {isInterior: null, diameter: null, type: {code: null, english: null, french: null}},
            outputCapacity: {value: null, uiUnits: null}
        }
    },
    xmlOutput() {
        return `<System rank="1">
                    <EquipmentInformation csaEpa="${this.system.equipmentInformation.csaEpa}">
                        <Manufacturer>${this.system.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.system.equipmentInformation.model}</Model>
                        <Description>${this.system.equipmentInformation.description}</Description>
                    </EquipmentInformation>
                    <Equipment>
                        <EnergySource code="${this.system.equipment.energySource.code}">
                            <English>${this.system.equipment.energySource.english}</English>
                            <French>${this.system.equipment.energySource.french}</French>
                        </EnergySource>
                        <Type code="${this.system.equipment.type.code}">
                            <English>${this.system.equipment.type.english}</English>
                            <French>${this.system.equipment.type.french}</French>
                        </Type>
                    </Equipment>
                    <Specifications efficiency="${this.system.specifications.efficiency}" pilotLight="${this.system.specifications.pilotLight}" damperClosed="${this.system.specifications.damperClosed}">
                        <YearMade code="${this.system.specifications.yearMade.code}">
                            <English>${this.system.specifications.yearMade.english}</English>
                            <French>${this.system.specifications.yearMade.french}</French>
                        </YearMade>
                        <Usage code="${this.system.specifications.usage.code}">
                            <English>${this.system.specifications.usage.english}</English>
                            <French>${this.system.specifications.usage.french}</French>
                        </Usage>
                        <LocationHeated code="${this.system.specifications.locationHeated.code}" value="${this.system.specifications.locationHeated.value}">
                            <English>${this.system.specifications.locationHeated.english}</English>
                            <French>${this.system.specifications.locationHeated.french}</French>
                        </LocationHeated>
                        <Flue isInterior="${this.system.specifications.flue.isInterior}" diameter="${this.system.specifications.flue.diameter}">
                            <Type code="${this.system.specifications.flue.type.code}">
                                <English>${this.system.specifications.flue.type.english}</English>
                                <French>${this.system.specifications.flue.type.french}</French>
                            </Type>
                        </Flue>
                        <OutputCapacity value="${this.system.specifications.outputCapacity.value}" uiUnits="${this.system.specifications.outputCapacity.uiUnits}" />
                    </Specifications>
                </System>`;
    }
}
export const AllStructures = () => {
    return structures;
}
export const StructureByCode = (code) => {
    let result = {};
    Object.keys(structures).forEach((key) => {
        if (structures[key]["usable"].includes(code))
            result[key] = structures[key];
    });
    return result;
}

export const Lintel = () => {
    return lintel;
}
export const Spacing = () => {
    return spacing;
}

export const Interior = () => {
    return interior;
}

export const Sheathing = () => {
    return sheathing;
}

export const InsulationLayer1 = () => {
    return insulationLayer1;
}

export const InsulationLayer2 = () => {
    return insulationLayer2;
}

export const Exterior = () => {
    return exterior;
}

export const Studs = () => {
    return studs;
}

export const FacingDirection = () => {
    return facingDirection;
}

export const HeatingSystems = () => {
    return heatingSystems;
}

export const CoolingSystems = () => {
    return coolingSystems;
}

export const SupplementaryHeatingSystems = () => {
    return supplementaryHeatingSystems;
}
