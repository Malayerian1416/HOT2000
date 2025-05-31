import wall from "@/House/Wall.js";

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

                </Components>
            </Basement>`;
    };
}

export default Basement;
