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
    }
}
