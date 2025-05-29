class Codes {
    ceiling = {

    };
    structure = {
        name: "Structure Type",
        types: {
            woodFrame:
                {
                    name: "Wood Frame",
                    componentTypes: [
                        "38x89 mm (2x4 in)",
                        "38x140 mm (2x6 in)",
                        "38x184 mm (2x8 in)",
                        "38x235 mm (2x10 in)",
                        "38x286 mm (2x12 in)",
                        "51x102 mm (Rough cut 2x4 in)",
                    ],
                    studs: [
                        "2 studs",
                        "3 studs",
                        "4 studs",
                    ]
                },
            steelFrame:
                {
                    name: "Steel Frame",
                    componentTypes: [
                        "30x92 mm (1.2x3.6 in)",
                        "30x152 mm (1.2x6 in)",
                    ],
                    studs: [
                        "2 studs",
                        "3 studs",
                        "4 studs",
                    ]
                },
            truss:
                {
                    name: "Truss",
                    componentTypes: {
                        attic: [
                            "38x89 mm (2x4 in) Attic truss",
                            "38x114 mm (2x5 in) Attic truss",
                        ],
                        wall: [
                            "38x451 mm (2x17.75 in) Flat truss",
                            "38x356 mm (2x14.00 in) Flat truss",
                            "38x324 mm (2x12.75 in) Steel web I",
                            "38x375 mm (2x14.75 in) Steel web I",
                            "38x451 mm (2x17.75 in) Steel web I",
                            "38x324 mm (2x12.75 in) Steel web II",
                            "38x375 mm (2x14.75 in) Steel web II",
                            "38x451 mm (2x17.75 in) Steel web II",
                            "64x324 mm (2x12.75 in) Steel web II",
                            "64x375 mm (2x14.75 in) Steel web II",
                            "64x451 mm (2x17.75 in) Steel web II",
                        ]
                    },
                    studs: [
                        "2 studs",
                        "3 studs",
                        "4 studs",
                    ]
                },
            compositeWoodJoist:
                {
                    name: "Composite wood joist",
                    componentTypes: [
                        "38x241 mm (2x9.5 in)",
                        "38x302 mm (2x11.875 in)",
                        "38x356 mm (2x14 in)",
                        "38x406 mm (2x16 in)",
                    ],
                    studs: [
                        "2 studs",
                        "3 studs",
                        "4 studs",
                    ]
                },
            solid:
                {
                    name: "Solid",
                    componentTypes: [
                        "76 mm (3 in) Concrete",
                        "203 mm (8 in) Concrete",
                        "305 mm (12 in) Concrete",
                        "203 mm (8 in) Concrete block",
                        "305 mm (12 in) Concrete block",
                        "Insulating concrete block",
                        "203 mm (8 in) Concrete + 2 layers XTPS IV",
                        "140 mm (5.5 in) Concrete + 2 layers EPS II",
                        "159 mm (6.25 in) Concrete + 2 layers EPS II",
                        "305 mm (12 in) round-scribed Log",
                        "150 mm (6 in) rectangular-milled Log",
                        "254 mm (10 in) Round log",
                        "406 mm (16 in) Round log",
                        "610 mm (24 in) Stone",
                        "102 mm (4 in) Planks logs",
                        "Double brick",
                        "610 mm (24 in) Quartzitic and sandstone",
                        "610 mm (24 in) Calcitic, dolomitic, limestone, marble, granite"
                    ],
                },
            panel:
                {
                    name: "Panel",
                    componentTypes: [
                        "Single stud, 140 mm, ins.",
                        "Double turned stud, 140 mm, ins.",
                        "Stressed skin, stud, 82 mm (3 1/4 in), ins.",
                        "Stressed skin, stud, 108 mm (4 1/4 in), ins.",
                        "Stressed skin, stud, 159 mm (6 1/4 in), ins.",
                        "Stressed skin, no stud, 89 mm (3 1/2 in)",
                        "Stressed skin, no stud, 140 mm (5 1/2 in)",
                    ],
                }
        }
    }

    interior = [
        "None",
        "12 mm (0.5 in) gypsum board",
        "Gypsum + Non insul, strapping",
        "Gypsum + RSI 1.4 (R8) insul, strapping",
        "Tile-linoleum",
        "Gypsum + Tile-linoleum",
        "Wood",
        "Gypsum + Wood",
        "Lath & plaster"
    ];

    sheathing = [
        "Waferboard/OSB 9.5 mm (3/8 in)",
        "Waferboard/OSB 11.1 mm (7/16 in)",
        "Waferboard/OSB 15.9 mm (5/8 in)",
        "Plywood/Particle board 9.5 mm (3/8 in)",
        "Plywood/Particle board 12.7 mm (1/2 in)",
        "Plywood/Particle board 15.5 mm (5/8 in)",
        "Plywood/Particle board 18.5 mm (3/4 in)",
        "Fibreboard 9.5 mm (3/8 in)",
        "Fibreboard 11.1 mm (7/16 in)",
        "Gypsum sheathing 9.5 mm (3/8 in)",
        "Gypsum sheathing 12.7 mm (1/2 in)",
    ];

    exterior = [
        "Wood (lapped)",
        "Hollow metal/vinyl cladding",
        "Insul. metal/vinyl cladding",
        "Brick",
        "Mortar",
        "Stucco",
        "Stone",
        "Quartzitic and sandstone",
        "Calcitic, dolomitic, limestone, marble, granite",
    ];

    insulation = {
        attic: {
            layer1: [],
            layer2: []
        },
        wall: {
            layer1: [],
            layer2: []
        }
    }
}
