class SupplementaryHeatingSystem {
    system = {
        rank: null,
        equipmentInformation: {csaEpa: null, manufacturer: null, model: null, description: null},
        equipment: {
            energySource: {code: null, english: null, french: null},
            type: {code: null, english: null, french: null}
        },
        specifications: {
            efficiency: null,
            pilotLight: null,
            damperClosed: null,
            yearMade: {code: null, english: null, french: null},
            usage: {code: null, english: null, french: null},
            locationHeated: { code: null, value: null, english: null, french: null},
            flue: {isInterior: null, diameter: null, type: {code: null, english: null, french: null}},
            outputCapacity: {value: null, uiUnits: null}
        }
    };
    xmlOutput() {
        return `<System rank="1">
                    <EquipmentInformation csaEpa="${this.system.equipmentInformation.csaEpa}">
                        <Manufacturer>${this.system.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.system.equipmentInformation.model}</Model>
                        <Description>${this.system.equipmentInformation.description}</Description>
                    </EquipmentInformation>
                    <Equipment>
                        <EnergySource code="${this.system.equipment.energySource.code}">
                            <English>${this.system.equipment.energySource.english}</English>
                            <French>${this.system.equipment.energySource.french}</French>
                        </EnergySource>
                        <Type code="${this.system.equipment.type.code}">
                            <English>${this.system.equipment.type.english}</English>
                            <French>${this.system.equipment.type.french}</French>
                        </Type>
                    </Equipment>
                    <Specifications efficiency="${this.system.specifications.efficiency}" pilotLight="${this.system.specifications.pilotLight}" damperClosed="${this.system.specifications.damperClosed}">
                        <YearMade code="${this.system.specifications.yearMade.code}">
                            <English>${this.system.specifications.yearMade.english}</English>
                            <French>${this.system.specifications.yearMade.french}</French>
                        </YearMade>
                        <Usage code="${this.system.specifications.usage.code}">
                            <English>${this.system.specifications.usage.english}</English>
                            <French>${this.system.specifications.usage.french}</French>
                        </Usage>
                        <LocationHeated code="${this.system.specifications.locationHeated.code}" value="${this.system.specifications.locationHeated.value}">
                            <English>${this.system.specifications.locationHeated.english}</English>
                            <French>${this.system.specifications.locationHeated.french}</French>
                        </LocationHeated>
                        <Flue isInterior="${this.system.specifications.flue.isInterior}" diameter="${this.system.specifications.flue.diameter}">
                            <Type code="${this.system.specifications.flue.type.code}">
                                <English>${this.system.specifications.flue.type.english}</English>
                                <French>${this.system.specifications.flue.type.french}</French>
                            </Type>
                        </Flue>
                        <OutputCapacity value="${this.system.specifications.outputCapacity.value}" uiUnits="${this.system.specifications.outputCapacity.uiUnits}" />
                    </Specifications>
                </System>`;
    };
    codes = {
        electric: [
            {code: "1", english: "Baseboard/Hydronic/Plenum(duct) htrs", french: "Chauffage Plinthe/Hydronique/Soufflant"},
            {code: "2", english: "Forced air furnace", french: "Fournaise à air forcé"},
            {code: "3", english: "Radiant floor panels", french: "Paneaux Radiants au plancher"},
            {code: "4", english: "Radiant ceiling panels", french: "Paneaux Radiants au plafond"},
            {code: "5", english: "Fan heater units", french: "Radiateurs soufflants"},
            {code: "6", english: "Toe-space heaters", french: "Toe-space heaters"},
            {code: "7", english: "Other (describe)", french: "Autre (décrire)"},
            {code: "8", english: "Same as Type 1 heating system", french: "Identique au système de chauffage Type 1"}

        ],
        naturalGas: [
            {code: "1", english: "Furnace/Boiler w/ spark ignition", french: "Fournaise/Chaudière avec allum. par étincelle"},
            {code: "2", english: "Fireplace with spark ignit. (unsealed)", french: "Foyer avec allum. par étincelle (non scellé)"},
            {code: "3", english: "Fireplace with spark ignit. (sealed)", french: "Foyer avec allum. par étincelle (scellé)"},
            {code: "4", english: "Portable heater", french: "Réchauffeur portable"},
            {code: "5", english: "Other (describe)", french: "Autre (décrire)"},
            {code: "6", english: "Fireplace with pilot (unsealed)", french: "Foyer avec allum. par veilleuse (non scellé)"},
            {code: "7", english: "Fireplace with pilot (sealed)", french: "Foyer avec allum. par veilleuse (scellé)"},
            {code: "8", english: "Same as Type 1 heating system", french: "Identique au système de chauffage Type 1"}
        ],
        oil: [
            {code: "1", english: "Space heater", french: "Chauferette"},
            {code: "2", english: "Other (describe)", french: "Autre (décrire)"},
            {code: "8", english: "Same as Type 1 heating system", french: "Identique au système de chauffage Type 1"}
        ],
        propane: [
            {code: "1", english: "Furnace/Boiler w/ spark ignition", french: "Fournaise/Chaudière avec allum. par étincelle"},
            {code: "2", english: "Fireplace with spark ignit. (unsealed)", french: "Foyer avec allum. par étincelle (non scellé)"},
            {code: "3", english: "Fireplace with spark ignit. (sealed)", french: "Foyer avec allum. par étincelle (scellé)"},
            {code: "4", english: "Portable heater", french: "Réchauffeur portable"},
            {code: "5", english: "Other (describe)", french: "Autre (décrire)"},
            {code: "6", english: "Fireplace with pilot (unsealed)", french: "Foyer avec allum. par veilleuse (non scellé)"},
            {code: "7", english: "Fireplace with pilot (sealed)", french: "Foyer avec allum. par veilleuse (scellé)"},
            {code: "8", english: "Same as Type 1 heating system", french: "Identique au système de chauffage Type 1"}
        ],
        mixedWood: [
            {code: "1", english: "Advanced airtight wood stove", french: "Poêle à bois étanche avancé"},
            {code: "2", english: "Adv. airtight wood stove + cat. conv.", french: "Poêle à bois étan. av. + conv. cat."},
            {code: "3", english: "Wood furnace", french: "Fournaise à bois"},
            {code: "4", english: "Wood fireplace", french: "Foyer à bois"},
            {code: "5", english: "Wood fireplace insert", french: "Foyer à bois encastré"},
            {code: "6", english: "Other (describe)", french: "Autre (décrire)"},
            {code: "8", english: "Same as Type 1 heating system", french: "Identique au système de chauffage Type 1"}
        ],
        hardwood: [
            {code: "1", english: "Advanced airtight wood stove", french: "Poêle à bois étanche avancé"},
            {code: "2", english: "Adv. airtight wood stove + cat. conv.", french: "Poêle à bois étan. av. + conv. cat."},
            {code: "3", english: "Wood furnace", french: "Fournaise à bois"},
            {code: "4", english: "Wood fireplace", french: "Foyer à bois"},
            {code: "5", english: "Wood fireplace insert", french: "Foyer à bois encastré"},
            {code: "6", english: "Other (describe)", french: "Autre (décrire)"},
            {code: "8", english: "Same as Type 1 heating system", french: "Identique au système de chauffage Type 1"},
        ],
        softwood: [
            {code: "1", english: "Advanced airtight wood stove", french: "Poêle à bois étanche avancé"},
            {code: "2", english: "Adv. airtight wood stove + cat. conv.", french: "Poêle à bois étan. av. + conv. cat."},
            {code: "3", english: "Wood furnace", french: "Fournaise à bois"},
            {code: "4", english: "Wood fireplace", french: "Foyer à bois"},
            {code: "5", english: "Wood fireplace insert", french: "Foyer à bois encastré"},
            {code: "6", english: "Other (describe)", french: "Autre (décrire)"},
            {code: "8", english: "Same as Type 1 heating system", french: "Identique au système de chauffage Type 1"},
        ],
        woodPellets: [
            {code: "1", english: "Advanced airtight wood stove", french: "Poêle à bois étanche avancé"},
            {code: "2", english: "Adv. airtight wood stove + cat. conv.", french: "Poêle à bois étan. av. + conv. cat."},
            {code: "3", english: "Wood furnace", french: "Fournaise à bois"},
            {code: "4", english: "Wood fireplace", french: "Foyer à bois"},
            {code: "5", english: "Wood fireplace insert", french: "Foyer à bois encastré"},
            {code: "6", english: "Other (describe)", french: "Autre (décrire)"},
            {code: "8", english: "Same as Type 1 heating system", french: "Identique au système de chauffage Type 1"},
        ]
    }
}

export default SupplementaryHeatingSystem;
