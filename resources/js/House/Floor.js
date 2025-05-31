import {Exterior, InsulationLayer1, InsulationLayer2, Interior, Sheathing, Spacing, StructureByCode, Studs} from "../House/HouseFileCodesLibrary.js";

class Floor {
    id = null;
    label = null;
    floorType = {idref: null, code: null};
    adjacentEnclosedSpace = null;
    measurements = {
        length: 0,
        area: 0,
    };

    xmlOutput() {
        return `<Floor adjacentEnclosedSpace="${this.adjacentEnclosedSpace}" id="${this.id}">
                <Label>${this.label}</Label>
                <Construction>
                    <Type idref="${this.floorType.idref}">${this.floorType.code}</Type>
                </Construction>
                <Measurements area="${this.measurements.area}" length="${this.measurements.length}" />
            </Floor>`;
    };

    codes = {
        code: "3",
        construction: {
            types: StructureByCode("1"),
            spacing: Spacing(),
            insulationLayer1: InsulationLayer1(),
            insulationLayer2: InsulationLayer2(),
            interior: Interior(),
            sheathing: Sheathing(),
            exterior: Exterior(),
            dropFraming: [
                {english: "No", french: "Oui", code: "0"},
                {english: "Yes", french: "Non", code: "1"}
            ]
        },
    };
}

export default Floor;
