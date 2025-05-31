import {Exterior, InsulationLayer1, InsulationLayer2, Interior, Sheathing, Spacing, StructureByCode, Studs} from "../House/HouseFileCodesLibrary.js";

class Wall{
    id = null;
    label = null;
    adjacentEnclosedSpace = null;
    corners = null;
    intersections = null;
    wallType = {idref: null, code: null};
    lintelType = {idref: null, code: null};
    measurements = {
        height: 0,
        perimeter: 0,
    };
    facingDirection = {code: null, english: null, french: null};
    components = {
        windows:[],
        doors: [],
        floorHeaders: []
    }

    xmlOutput() {
        return `<Wall adjacentEnclosedSpace="${this.adjacentEnclosedSpace}" id="${this.id}">
                <Label>${this.label}</Label>
                <Construction corners="${this.corners}" intersections="${this.intersections}">
                    <Type idref="${this.wallType.idref}">${this.wallType.code}</Type>
                    <LintelType idref="${this.lintelType.idref}">${this.lintelType.code}</LintelType>
                </Construction>
                <Measurements height="${this.measurements.height}" perimeter="${this.measurements.perimeter}" />
                <FacingDirection code="${this.facingDirection.code}">
                    <English>${this.facingDirection.english}</English>
                    <French>${this.facingDirection.french}</French>
                </FacingDirection>
            </Wall>`;
    };

    codes = {
        code: "1",
        construction: {
            types: StructureByCode("1"),
            spacing: Spacing(),
            insulationLayer1: InsulationLayer1(),
            insulationLayer2: InsulationLayer2(),
            interior: Interior(),
            sheathing: Sheathing(),
            exterior: Exterior(),
            studs: Studs()
        },
    };
}

export default Wall;
