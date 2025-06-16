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
    };

    codes = {
        doorType: [
            {code: "1", english: "Wood hollow core", french: "Bois / âme creuse"},
            {code: "2", english: "Solid wood", french: "Bois massif"},
            {code: "3", english: "Steel fibreglass core", french: "Acier / âme en fibre de verre"},
            {code: "4", english: "Steel polystyrene core", french: "Acier / âme en polystyrène"},
            {code: "5", english: "Steel Medium density spray foam core", french: "Acier / âme en mousse à vaporiser de densité moyenne"},
            {code: "6", english: "Fibreglass polystyrene core", french: "Fibre de verre / âme en polystyrène"},
            {code: "7", english: "Fibreglass Medium density spray foam core", french: "Fibre de verre / âme en mousse à vaporiser de densité moyenne"},
            {code: "8", english: "User specified", french: "Spécifié par l'utilisateur"}
        ]
    }
}
