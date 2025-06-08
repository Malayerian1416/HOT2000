class Door{
    id= null;
    label = null;
    adjacentEnclosedSpace= null;
    construction = {
        energyStar: null,
        type: {code: null, value: null, english: null, french: null},
    };
    measurements = {height: null, width: null};
    components = [];

    xmlOutput() {
        let windows;
        this.components.forEach(window => {
            windows = windows + window.xmlOutput();
        });
        return `<Door adjacentEnclosedSpace="${this.adjacentEnclosedSpace}" id="${this.id}">
                        <Label>${this.label}</Label>
                        <Construction energyStar="${this.construction.energyStar}">
                            <Type code="${this.construction.type.code}" value="${this.construction.type.value}">
                                <English>${this.construction.type.english}</English>
                                <French>${this.construction.type.french}</French>
                            </Type>
                        </Construction>
                        <Measurements height="${this.measurements.height}" width="${this.measurements.width}" />
                        <Components>
                            ${windows}
                        </Components>
                    </Door>`;
    }
}
