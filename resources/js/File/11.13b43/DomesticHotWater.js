class DomesticHotWater {
    id = null;
    label = null;
    hasSecondary = false;
    primary = {
        hasDrainWaterHeatRecovery: null,
        insulatingBlanket: null,
        combinedFlue: null,
        flueDiameter: null,
        energyStar: null,
        ecoEnergy: null,
        userDefinedPilot: null,
        connectedUnitsDwhr: null,
        fraction: null,
        pilotEnergy: null,
        equipmentInformation: {manufacturer: null, model: null},
        energySource: {code: null, english: null, french: null},
        tankType: {code: null, english: null, french: null},
        tankVolume: {code: null, value: null, english: null, french: null},
        energyFactor: {
            code: null,
            value: null,
            inputCapacity: null,
            isUniform: null,
            english: null,
            french: null
        },
        tankLocation: {code: null, english: null, french: null}
    };
    secondary = {
        hasDrainWaterHeatRecovery: null,
        insulatingBlanket: null,
        combinedFlue: null,
        flueDiameter: null,
        energyStar: null,
        ecoEnergy: null,
        userDefinedPilot: null,
        connectedUnitsDwhr: null,
        fraction: null,
        pilotEnergy: null,
        equipmentInformation: {manufacturer: null, model: null},
        energySource: {code: null, english: null, french: null},
        tankType: {code: null, english: null, french: null},
        tankVolume: {code: null, value: null, english: null, french: null},
        energyFactor: {
            code: null,
            value: null,
            inputCapacity: null,
            isUniform: null,
            english: null,
            french: null
        },
        tankLocation: {code: null, english: null, french: null}
    };

    xmlOutput(){
        let secondary = null;
        if(this.hasSecondary)
            secondary = `<Secondary hasDrainWaterHeatRecovery="${this.secondary.hasDrainWaterHeatRecovery}" insulatingBlanket="${this.secondary.insulatingBlanket}" combinedFlue="${this.secondary.combinedFlue}" flueDiameter="${this.secondary.flueDiameter}" energyStar="${this.secondary.energyStar}" ecoEnergy="${this.secondary.ecoEnergy}" userDefinedPilot="${this.secondary.userDefinedPilot}" connectedUnitsDwhr="${this.secondary.connectedUnitsDwhr}" fraction="${this.secondary.fraction}" pilotEnergy="${this.secondary.pilotEnergy}">
                    <EquipmentInformation>
                        <Manufacturer>${this.secondary.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.secondary.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <EnergySource code="${this.secondary.energySource.code}">
                        <English>${this.secondary.energySource.english}</English>
                        <French>${this.secondary.energySource.french}</French>
                    </EnergySource>
                    <TankType code="${this.secondary.tankType.code}">
                        <English>${this.secondary.tankType.english}</English>
                        <French>${this.secondary.tankType.french}</French>
                    </TankType>
                    <TankVolume code="${this.secondary.tankVolume.code}" value="${this.secondary.tankVolume.value}">
                        <English>${this.secondary.tankVolume.english}</English>
                        <French>${this.secondary.tankVolume.french}</French>
                    </TankVolume>
                    <EnergyFactor code="${this.secondary.energyFactor.code}" value="${this.secondary.energyFactor.value}" inputCapacity="${this.secondary.energyFactor.inputCapacity}" isUniform="${this.secondary.energyFactor.isUniform}">
                        <English>${this.secondary.energyFactor.english}</English>
                        <French>${this.secondary.energyFactor.french}</French>
                    </EnergyFactor>
                    <TankLocation code="${this.secondary.tankLocation.code}">
                        <English>${this.secondary.tankLocation.english}</English>
                        <French>${this.secondary.tankLocation.french}</French>
                    </TankLocation>
                </Secondary>`;
        return `<HotWater id="${this.id}">
                <Label>${this.label}</Label>
                <Primary hasDrainWaterHeatRecovery="${this.primary.hasDrainWaterHeatRecovery}" insulatingBlanket="${this.primary.insulatingBlanket}" combinedFlue="${this.primary.combinedFlue}" flueDiameter="${this.primary.flueDiameter}" energyStar="${this.primary.energyStar}" ecoEnergy="${this.primary.ecoEnergy}" userDefinedPilot="${this.primary.userDefinedPilot}" connectedUnitsDwhr="${this.primary.connectedUnitsDwhr}" fraction="${this.primary.fraction}" pilotEnergy="${this.primary.pilotEnergy}">
                    <EquipmentInformation>
                        <Manufacturer>${this.primary.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.primary.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <EnergySource code="${this.primary.energySource.code}">
                        <English>${this.primary.energySource.english}</English>
                        <French>${this.primary.energySource.french}</French>
                    </EnergySource>
                    <TankType code="${this.primary.tankType.code}">
                        <English>${this.primary.tankType.english}</English>
                        <French>${this.primary.tankType.french}</French>
                    </TankType>
                    <TankVolume code="${this.primary.tankVolume.code}" value="${this.primary.tankVolume.value}">
                        <English>${this.primary.tankVolume.english}</English>
                        <French>${this.primary.tankVolume.french}</French>
                    </TankVolume>
                    <EnergyFactor code="${this.primary.energyFactor.code}" value="${this.primary.energyFactor.value}" inputCapacity="${this.primary.energyFactor.inputCapacity}" isUniform="${this.primary.energyFactor.isUniform}">
                        <English>${this.primary.energyFactor.english}</English>
                        <French>${this.primary.energyFactor.french}</French>
                    </EnergyFactor>
                    <TankLocation code="${this.primary.tankLocation.code}">
                        <English>${this.primary.tankLocation.english}</English>
                        <French>${this.primary.tankLocation.french}</French>
                    </TankLocation>
                </Primary>
                ${secondary}
            </HotWater>`;
    }
}
