import {StructureByCode} from "../House/HouseLibrary.js";

class Ceiling {
    id = null;
    label = null;
    type = {code: null, english: null, french: null};
    ceilingType = {idref: null};
    measurements = {
        length: 0,
        area: 0,
        heelHeight: 0,
        slope: {english: "", french: "", value: null, code: null},
    };
    xmlOutput() {
        return `<Ceiling id="${this.id}">
                <Label>"${this.label}"</Label>
                <Construction>
                    <Type code="${this.type.code}">
                        <English>${this.type.english}</English>
                        <French>${this.type.french}</French>
                    </Type>
                    <CeilingType idref="${this.ceilingType.idref}"></CeilingType>
                </Construction>
                <Measurements length="${this.measurements.length}" area="${this.measurements.area}" heelHeight="${this.measurements.heelHeight}">
                    <Slope code="${this.measurements.slope.code}" value="${this.measurements.slope.value}">
                        <English>${this.measurements.slope.english}</English>
                        <French>${this.measurements.slope.french}</French>
                    </Slope>
                </Measurements>
            </Ceiling>`;
    };
    codes = {
        code: 2,
        construction: {
            gable: {
                englishName: "Gable",
                frenchName: "",
                code: 2,
                types: () => {
                    let structures = structuredClone(StructureByCode("2"));
                    structures.truss.componentTypes.splice(2, 11);
                    return structures;
                }
            },
            hip: {
                englishName: "Hip",
                frenchName: "",
                code: 3,
                types: () => {
                    let structures = structuredClone(StructureByCode("2"));
                    structures.truss.componentTypes.splice(2, 11);
                    return structures;
                }
            },
            cathedral: {
                englishName: "Cathedral",
                frenchName: "",
                code: 4,
                types: () => {
                    let structures = structuredClone(StructureByCode("2"));
                    structures.truss.componentTypes.splice(0, 2);
                    return structures;
                }
            },
            flat: {
                englishName: "Flat",
                frenchName: "",
                code: 5,
                types: () => {
                    let structures = structuredClone(StructureByCode("2"));
                    structures.truss.componentTypes.splice(0, 2);
                    return structures;
                }
            },
            scissor: {
                englishName: "Scissor",
                frenchName: "",
                code: 6,
                types: () => {
                    let structures = structuredClone(StructureByCode("2"));
                    structures.truss.componentTypes.splice(0, 2);
                    return structures;
                }
            },
        },
        roofSlope: {
            name: "Roof Slope",
            value:
                {
                    userSpecified: {name: "User specified", value: null},
                    flatRoof: {name: "Flat Roof", value: 0},
                    slope212: {name: "2/12", value: 0.167},
                    slope312: {name: "3/12", value: 0.250},
                    slope412: {name: "4/12", value: 0.333},
                    slope512: {name: "5/12", value: 0.417},
                    slope612: {name: "6/12", value: 0.5},
                    slope712: {name: "7/12", value: 0.583},
                }
        },
    }
}

export default Ceiling;
