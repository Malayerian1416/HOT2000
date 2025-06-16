class Generation {
    id= null;
    solarReady= null;
    photovoltaicCapacity= null;
    batteryStorage= null;
    label = null;
    photovoltaicSystems = [];

    xmlOutput() {
        let PhotovoltaicSystems = null;
        this.photovoltaicSystems.forEach(system => {
            PhotovoltaicSystems += system.xmlOutput();
        });
        return `<Generation solarReady="${this.solarReady}" PhotovoltaicCapacity="${this.photovoltaicCapacity}" batteryStorage="${this.batteryStorage}" id="${this.id}">
            <Label>${this.label}</Label>
            <PhotovoltaicSystems>
            ${PhotovoltaicSystems}
            </PhotovoltaicSystems>
        </Generation>`;
    };

    photovoltaicSystem = {
        system: {
            rank: null,
            equipmentInformation: {manufacturer: null, model: null},
            array: {area: null, slope: null, azimuth: null},
            efficiency: {miscellaneousLosses: null, otherPowerLosses: null, inverterEfficiency: null, gridAbsorptionRate: null},
            module: {
                efficiency: null,
                cellTemperature: null,
                coefficientOfEfficiency: null,
                type: {code: null, english: null, french: null},
            },
            orientation: {
                solarPanel: null,
                degrees: null,
                minutes: null,
                code: null,
                declination: {code: null, english: null, french: null}
            }
        },
        xmlOutput() {
            return `<System rank="${this.system.rank}">
                    <EquipmentInformation>
                        <Manufacturer>${this.system.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.system.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Array area="${this.system.array.area}" slope="${this.system.array.slope}" azimuth="${this.system.array.azimuth}" />
                    <Efficiency miscellaneousLosses="${this.system.efficiency.miscellaneousLosses}" otherPowerLosses="${this.system.efficiency.otherPowerLosses}" inverterEfficiency="${this.system.efficiency.inverterEfficiency}" gridAbsorptionRate="${this.system.efficiency.gridAbsorptionRate}" />
                    <Module efficiency="${this.system.module.efficiency}" cellTemperature="${this.system.module.cellTemperature}" coefficientOfEfficiency="${this.system.module.coefficientOfEfficiency}">
                        <Type code="${this.system.module.type.code}">
                            <English>${this.system.module.type.english}</English>
                            <French>${this.system.module.type.french}</French>
                        </Type>
                    </Module>
                    <Orientation solarPanel="${this.system.orientation.solarPanel}" degrees="${this.system.orientation.degrees}" minutes="${this.system.orientation.minutes}">
                        <MagGeo code="${this.system.orientation.code}" />
                        <Declination code="${this.system.orientation.declination.code}">
                            <English>${this.system.orientation.declination.english}</English>
                            <French>${this.system.orientation.declination.french}</French>
                        </Declination>
                    </Orientation>
                </System>`;
        }
    }

    codes = {
        orientation: [
            {code: "19", text: "Magnetic"},
            {code: "1790", text: "Geographic"}
        ],
        declination: [
            {code: "1", english: "Westerly", french: "Vers l'ouest"},
            {code: "2", english: "Easterly", french: "Vers l'est"}
        ],
        moduleType: [
            {code: "1", english: "Mono-Si", french: "Mono-Si"},
            {code: "2", english: "Poly-Si", french: "Poly-Si"},
            {code: "3", english: "a-Si", french: "a-Si"},
            {code: "4", english: "CdTe", french: "CdTe"},
            {code: "5", english: "CIS", french: "CIS"},
            {code: "6", english: "User Specified", french: "Spécifié par l'utilisateur"}
        ]
    };
}
export default Generation;
