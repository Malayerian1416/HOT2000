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
    };

    codes = {
        energySource: {
            electric: {code: "1", english: "Electric", french: "Électricité"},
            naturalGas: {code: "2", english: "Natural gas", french: "Gaz naturel"},
            oil: {code: "3", english: "Oil", french: "Mazout"},
            propane: {code: "4", english: "Propane", french: "Propane"},
            mixedWood: {code: "5", english: "Mixed Wood", french: "Bois mélangé"},
            solar: {code: "6", english: "Solar", french: "Solaire"},
            hardwood: {code: "8", english: "Hardwood", french: "Bois dur"},
            softwood: {code: "9", english: "Softwood", french: "Bois mou"},
            woodPellets: {code: "10", english: "Wood Pellets", french: "Granules de bois"}
        },
        tankType: {
            energyFactor: {
                electric: [
                    {
                        code: "2", english: "Conventional tank", french: "Réservoir classique", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {
                        code: "3", english: "Conserver tank", french: "Réservoir à conservation", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "4", english: "Instantaneous", french: "Chauffage instantané", tankVolume: []},
                    {code: "5", english: "Tankless heat pump", french: "Thermopompe sans réserv.", tankVolume: []},
                    {code: "6", english: "Heat pump", french: "Thermopompe", tankVolume: []},
                    {
                        code: "7", english: "Integrated heat pump", french: "Thermopompe intégrée", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    }
                ],
                naturalGas: [
                    {
                        code: "2", english: "Conventional tank", french: "Réservoir classique", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {
                        code: "3",
                        english: "Conventional tank (pilot)",
                        french: "Réservoir classique (veilleuse)",
                        tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {
                        code: "4", english: "Tankless coil", french: "Serpentin sans réservoir", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "5", english: "Instantaneous", french: "Instantané", tankVolume: []},
                    {code: "6", english: "Instantaneous (pilot)", french: "Instantané (veilleuse)", tankVolume: []},
                    {
                        code: "7", english: "Induced draft fan", french: "à tirage induit", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {
                        code: "8",
                        english: "Induced draft fan (pilot)",
                        french: "à tirage induit (veilleuse)",
                        tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {
                        code: "9", english: "Direct vent (sealed)", french: "à évacuation directe (scellé)", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {
                        code: "10",
                        english: "Direct vent (sealed, pilot)",
                        french: "à évacuation directe (scellé, veill.)",
                        tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {
                        code: "11", english: "Condensing", french: "Réservoir de condensation", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {
                        code: "12",
                        english: "Instantaneous (condensing)",
                        french: "Instantané (à condensation)",
                        tankVolume: []
                    }
                ],
                oil: [
                    {code: "2", english: "Conventional tank", french: "Réservoir classique", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "3", english: "Tankless coil", french: "Serpentin sans réservoir", tankVolume: []}
                ],
                propane: [
                    {code: "2", english: "Conventional tank", french: "Réservoir classique", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "3", english: "Conventional tank (pilot)", french: "Réservoir classique (veilleuse)", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "4", english: "Tankless coil", french: "Serpentin sans réservoir", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "5", english: "Instantaneous", french: "Instantané", tankVolume: []},
                    {code: "6", english: "Instantaneous (pilot)", french: "Instantané (veilleuse)", tankVolume: []},
                    {code: "7", english: "Induced draft fan", french: "à tirage induit", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "8", english: "Induced draft fan (pilot)", french: "à tirage induit (veilleuse)", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "9", english: "Direct vent (sealed)", french: "à évacuation directe (scellé)", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "10", english: "Direct vent (sealed, pilot)", french: "à évacuation directe (scellé, veill.)", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "11", english: "Condensing", french: "Réservoir de condensation", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "12", english: "Instantaneous (condensing)", french: "Instantané (à condensation)", tankVolume: []}
                ],
                mixedWood: [
                    {code: "2", english: "Fireplace", french: "Foyer à feu ouvert", tankVolume: []},
                    {code: "3", english: "Wood stove water coil", french: "Poêle à bois + serpentin à eau", tankVolume: []},
                    {code: "4", english: "Indoor wood boiler", french: "Chaudière à bois intérieure", tankVolume: []},
                    {code: "5", english: "Outdoor wood boiler", french: "Chaudière à bois extérieure", tankVolume: []},
                    {code: "8", english: "Wood hot water tank", french: "Réservoir à eau chaude au bois", tankVolume: []
                    }
                ],
                solar: [
                    {code: "2", english: "Solar collector system", french: "Chauffe-eau solaire", tankVolume: []},
                ],
                hardwood: [
                    {code: "2", english: "Fireplace", french: "Foyer à feu ouvert", tankVolume: []},
                    {code: "3", english: "Wood stove water coil", french: "Poêle à bois + serpentin à eau", tankVolume: []},
                    {code: "4", english: "Indoor wood boiler", french: "Chaudière à bois intérieure", tankVolume: []},
                    {code: "5", english: "Outdoor wood boiler", french: "Chaudière à bois extérieure", tankVolume: []},
                    {code: "8", english: "Wood hot water tank", french: "Réservoir à eau chaude au bois", tankVolume: []}
                ],
                softwood: [
                    {code: "2", english: "Fireplace", french: "Foyer à feu ouvert", tankVolume: []},
                    {code: "3", english: "Wood stove water coil", french: "Poêle à bois + serpentin à eau", tankVolume: []},
                    {code: "4", english: "Indoor wood boiler", french: "Chaudière à bois intérieure", tankVolume: []},
                    {code: "5", english: "Outdoor wood boiler", french: "Chaudière à bois extérieure", tankVolume: []},
                    {code: "8", english: "Wood hot water tank", french: "Réservoir à eau chaude au bois", tankVolume: []}
                ],
                woodPellets: [
                    {code: "2", english: "Fireplace", french: "Foyer à feu ouvert", tankVolume: []},
                    {code: "3", english: "Wood stove water coil", french: "Poêle à bois + serpentin à eau", tankVolume: []},
                    {code: "4", english: "Indoor wood boiler", french: "Chaudière à bois intérieure", tankVolume: []},
                    {code: "5", english: "Outdoor wood boiler", french: "Chaudière à bois extérieure", tankVolume: []},
                    {
                        code: "8",
                        english: "Wood hot water tank",
                        french: "Réservoir à eau chaude au bois",
                        tankVolume: []
                    }
                ]
            },
            uniformEnergyFactor: {
                electric: [
                    {code: "7", english: "Integrated heat pump", french: "Thermopompe intégrée", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                ],
                naturalGas: [
                    {code: "2", english: "Conventional tank", french: "Réservoir classique", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "3", english: "Conventional tank (pilot)", french: "Réservoir classique (veilleuse)", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "4", english: "Tankless coil", french: "Serpentin sans réservoir", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "5", english: "Instantaneous", french: "Instantané", tankVolume: []},
                    {code: "6", english: "Instantaneous (pilot)", french: "Instantané (veilleuse)", tankVolume: []},
                    {code: "7", english: "Induced draft fan", french: "à tirage induit", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "8", english: "Induced draft fan (pilot)", french: "à tirage induit (veilleuse)", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "9", english: "Direct vent (sealed)", french: "à évacuation directe (scellé)", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "10", english: "Direct vent (sealed, pilot)", french: "à évacuation directe (scellé, veill.)", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "11", english: "Condensing", french: "Réservoir de condensation", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "12", english: "Instantaneous (condensing)", french: "Instantané (à condensation)", tankVolume: []}
                ],
                oil: [
                    {code: "2", english: "Conventional tank", french: "Réservoir classique", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    }
                ],
                propane: [
                    {code: "2", english: "Conventional tank", french: "Réservoir classique", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "3", english: "Conventional tank (pilot)", french: "Réservoir classique (veilleuse)", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "4", english: "Tankless coil", french: "Serpentin sans réservoir", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "5", english: "Instantaneous", french: "Instantané", tankVolume: []},
                    {code: "6", english: "Instantaneous (pilot)", french: "Instantané (veilleuse)", tankVolume: []},
                    {code: "7", english: "Induced draft fan", french: "à tirage induit", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "8", english: "Induced draft fan (pilot)", french: "à tirage induit (veilleuse)", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "9", english: "Direct vent (sealed)", french: "à évacuation directe (scellé)", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "10", english: "Direct vent (sealed, pilot)", french: "à évacuation directe (scellé, veill.)", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "11", english: "Condensing", french: "Réservoir de condensation", tankVolume:
                            [
                                {code: "1", english: "User specified", french: "Spécifié par l'utilisateur"},
                                {code: "2", english: "113.6 L, 25.0 Imp, 30 US gal", french: "113.6 L, 25.0 imp, 30 gal ÉU"},
                                {code: "3", english: "151.4 L, 33.3 Imp, 40 US gal", french: "151.4 L, 33.3 imp, 40 gal ÉU"},
                                {code: "4", english: "189.3 L, 41.6 Imp, 50 US gal", french: "189.3 L, 41.6 imp, 50 gal ÉU"},
                                {code: "5", english: "246.1 L, 54.1 Imp, 65 US gal", french: "246.1 L, 54.1 imp, 65 gal ÉU"},
                                {code: "6", english: "302.8 L, 66.6 Imp, 80 US gal", french: "302.8 L, 66.6 imp, 80 gal ÉU"},
                                {code: "7", english: "Not applicable", french: "Sans objet"}
                            ]
                    },
                    {code: "12", english: "Instantaneous (condensing)", french: "Instantané (à condensation)", tankVolume: []}
                ]
            }
        },
        tankLocation: [
            {code: "1", english: "Main floor", french: "Rez-de-chaussée"},
            {code: "2", english: "Basement", french: "Sous-sol"},
            {code: "3", english: "Attic", french: "Combles"},
            {code: "4", english: "Crawl space", french: "Vide sanitaire"},
            {code: "5", english: "Garage", french: "Garage"},
            {code: "6", english: "Porch", french: "Véranda"},
            {code: "7", english: "Outside", french: "Extérieur"}
        ]
    }
}
