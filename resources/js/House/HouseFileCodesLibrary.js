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
]
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
