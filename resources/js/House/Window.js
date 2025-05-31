class Window {
    id = null;
    number = null;
    er= null;
    shgc= null;
    frameHeight= null;
    frameAreaFraction= null;
    edgeOfGlassFraction= null;
    centreOfGlassFraction= null;
    adjacentEnclosedSpace= null;
    label = null;
    construction = {
        energyStar: null,
        type: {idref: null, text: null}
    };
    measurements = {
        height: null,
        width: null,
        headerHeight: null,
        overhangWidth: null,
        tilt: {code: null, value: null, english: null, french: null,}
    };
    shading = {curtain: null, shutterRValue: null};
    facingDirection = {code: null, english: null, french: null};

    xmlOutput() {
        return `<Window number="${this.number}" er="${this.er}" shgc="${this.shgc}" frameHeight="${this.frameHeight}" frameAreaFraction="${this.frameAreaFraction}" edgeOfGlassFraction="${this.edgeOfGlassFraction}" centreOfGlassFraction="${this.centreOfGlassFraction}" adjacentEnclosedSpace="${this.adjacentEnclosedSpace}" id="${this.id}">
                        <Label>${this.label}</Label>
                        <Construction energyStar="${this.construction.energyStar}">
                            <Type idref="${this.construction.type.idref}">${this.construction.type.text}</Type>
                        </Construction>
                        <Measurements height="${this.measurements.height}" width="${this.measurements.width}" headerHeight="${this.measurements.headerHeight}" overhangWidth="${this.measurements.overhangWidth}">
                            <Tilt code="${this.measurements.tilt.code}" value="${this.measurements.tilt.value}">
                                <English>${this.measurements.tilt.english}</English>
                                <French>${this.measurements.tilt.french}</French>
                            </Tilt>
                        </Measurements>
                        <Shading curtain="${this.shading.curtain}" shutterRValue="${this.shading.shutterRValue}" />
                        <FacingDirection code="${this.facingDirection.code}">
                            <English>${this.facingDirection.english}</English>
                            <French>${this.facingDirection.french}</French>
                        </FacingDirection>
                    </Window>`;
    };
}
