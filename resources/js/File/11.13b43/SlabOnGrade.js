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
    }
}
