class HeatingSystem {
    baseboards = {
        equipmentInformation: {numberOfElectronicThermostats: null, manufacturer: null, model: null},
        specifications: {
            sizingFactor: null,
            efficiency: null,
            outputCapacity: {code: null, value: null, uiUnits: null, english: null, french: null}
        },
        xmlOutput() {
            return `<Baseboards>
                    <EquipmentInformation numberOfElectronicThermostats="${this.baseboards.equipmentInformation.numberOfElectronicThermostats}">
                        <Manufacturer>${this.baseboards.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.baseboards.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Specifications sizingFactor="${this.baseboards.specifications.sizingFactor}" efficiency="${this.baseboards.specifications.efficiency}">
                        <OutputCapacity code="${this.baseboards.specifications.outputCapacity.code}" value="${this.baseboards.specifications.outputCapacity.value}" uiUnits="${this.baseboards.specifications.outputCapacity.uiUnits}">
                            <English>${this.baseboards.specifications.outputCapacity.english}</English>
                            <French>${this.baseboards.specifications.outputCapacity.french}</French>
                        </OutputCapacity>
                    </Specifications>
                </Baseboards>`;
        },
        codes: [

        ]
    };
    furnace = {
        equipmentInformation: {energystar: null, manufacturer: null, model: null},
        equipment: {
            isBiEnergy: null,
            switchoverTemperature: null,
            energySource: {code: null, english: null, french: null},
            equipmentType: {code: null, english: null, french: null},
        },
        specifications: {
            sizingFactor: null,
            efficiency: null,
            isSteadyState: null,
            pilotLight: null,
            flueDiameter: null,
            outputCapacity: {code: null, value: null, uiUnits: null, english: null, french: null}
        },
        xmlOutput() {
            return `<Furnace>
                    <EquipmentInformation energystar="${this.equipmentInformation.energystar}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Equipment isBiEnergy="${this.equipment.isBiEnergy}" switchoverTemperature="${this.equipment.switchoverTemperature}">
                        <EnergySource code="${this.equipment.energySource.code}">
                            <English>${this.equipment.energySource.english}</English>
                            <French>${this.equipment.energySource.french}</French>
                        </EnergySource>
                        <EquipmentType code="${this.equipment.equipmentType.code}">
                            <English>${this.equipment.equipmentType.english}</English>
                            <French>${this.equipment.energySource.french}</French>
                        </EquipmentType>
                    </Equipment>
                    <Specifications sizingFactor="${this.specifications.sizingFactor}" efficiency="${this.specifications.efficiency}" isSteadyState="${this.specifications.isSteadyState}" pilotLight="${this.specifications.pilotLight}" flueDiameter="${this.specifications.flueDiameter}">
                        <OutputCapacity code="${this.specifications.outputCapacity.code}" value="${this.specifications.outputCapacity.value}" uiUnits="${this.specifications.outputCapacity.uiUnits}">
                            <English>${this.specifications.outputCapacity.english}</English>
                            <French>${this.specifications.outputCapacity.french}</French>
                        </OutputCapacity>
                    </Specifications>
                </Furnace>`;
        },
        codes: {
            electric: [{code: "2", english: "Electric furnace", french: "Fournaise électrique"}],
            naturalGas: [
                {code: "1", english: "Furnace w/ continuous pilot", french: "Fournaise avec veilleuse permanente"},
                {code: "2", english: "Furnace w/ spark ignition", french: "Fournaise à allumage par étincelle"},
                {code: "3", english: "Furn. w/ spark ignition &amp; vent damper", french: "Fourn. à allum. par étin., avec registre"},
                {code: "4", english: "Induced draft fan furnace", french: "Fournaise à tirage induit"},
                {code: "5", english: "Condensing", french: "Fournaise à condensation"}
            ],
            oil: [
                {code: "1", english: "Furnace", french: "Fournaise"},
                {code: "2", english: "Furnace w/vent damper", french: "Fournaise avec registre de tirage"},
                {code: "3", english: "Furnace w/ flame ret. head", french: "Fourn. avec tête de rétention de flamme"},
                {code: "4", english: "Mid-eff. furnace (no dil. air)", french: "Fourn. à rend. moy. (sans air de dilution)"},
                {code: "5", english: "Condensing furnace (no chimney)", french: "Fourn. à condensation (sans cheminée)"},
                {code: "6", english: "Direct vent, non-condensing", french: "Fourn. à évacuation directe - sans condensation"}
            ],
            propane: [
                {code: "1", english: "Furnace w/ continuous pilot", french: "Fournaise avec veilleuse permanente"},
                {code: "2", english: "Furnace w/ spark ignition", french: "Fournaise à allumage par étincelle"},
                {code: "3", english: "Furn. w/ spark ignition &amp; vent damper", french: "Fourn. à allum. par étin., avec registre"},
                {code: "4", english: "Induced draft fan furnace", french: "Fournaise à tirage induit"},
                {code: "5", english: "Condensing", french: "Fournaise à condensation"}
            ],
            mixedWood: [
                {code: "1", english: "Advanced airtight wood stove", french: "Poêle hermétique performant"},
                {code: "2", english: "1st option with catalytic converter", french: "1er option + convert. catalitique."},
                {code: "3", english: "Conventional furnace", french: "Fournaise conventionnelle"},
                {code: "5", english: "Conventional stove", french: "Poêle conventionnel"},
                {code: "6", english: "Pellet stove", french: "Poêle à granules"},
                {code: "7", english: "Masonry heater", french: "Foyer de masse"},
                {code: "8", english: "Conventional fireplace", french: "Foyer conventionnel"},
                {code: "10", english: "Fireplace insert", french: "Foyer encastrable"},
            ],
            hardwood: [
                {code: "1", english: "Advanced airtight wood stove", french: "Poêle hermétique performant"},
                {code: "2", english: "1st option with catalytic converter", french: "1er option + convert. catalitique."},
                {code: "3", english: "Conventional furnace", french: "Fournaise conventionnelle"},
                {code: "5", english: "Conventional stove", french: "Poêle conventionnel"},
                {code: "6", english: "Pellet stove", french: "Poêle à granules"},
                {code: "7", english: "Masonry heater", french: "Foyer de masse"},
                {code: "8", english: "Conventional fireplace", french: "Foyer conventionnel"},
                {code: "10", english: "Fireplace insert", french: "Foyer encastrable"},
            ],
            softwood: [
                {code: "1", english: "Advanced airtight wood stove", french: "Poêle hermétique performant"},
                {code: "2", english: "1st option with catalytic converter", french: "1er option + convert. catalitique."},
                {code: "3", english: "Conventional furnace", french: "Fournaise conventionnelle"},
                {code: "5", english: "Conventional stove", french: "Poêle conventionnel"},
                {code: "6", english: "Pellet stove", french: "Poêle à granules"},
                {code: "7", english: "Masonry heater", french: "Foyer de masse"},
                {code: "8", english: "Conventional fireplace", french: "Foyer conventionnel"},
                {code: "10", english: "Fireplace insert", french: "Foyer encastrable"},
            ],
            woodPellets: [
                {code: "1", english: "Advanced airtight wood stove", french: "Poêle hermétique performant"},
                {code: "2", english: "1st option with catalytic converter", french: "1er option + convert. catalitique."},
                {code: "3", english: "Conventional furnace", french: "Fournaise conventionnelle"},
                {code: "5", english: "Conventional stove", french: "Poêle conventionnel"},
                {code: "6", english: "Pellet stove", french: "Poêle à granules"},
                {code: "7", english: "Masonry heater", french: "Foyer de masse"},
                {code: "8", english: "Conventional fireplace", french: "Foyer conventionnel"},
                {code: "10", english: "Fireplace insert", french: "Foyer encastrable"},
            ]
        }
    };
    boiler = {
        equipmentInformation: {energystar: null, manufacturer: null, model: null},
        equipment: {
            isBiEnergy: null,
            switchoverTemperature: null,
            energySource: {code: null, english: null, french: null},
            equipmentType: {code: null, english: null, french: null},
        },
        specifications: {
            sizingFactor: null,
            efficiency: null,
            isSteadyState: null,
            pilotLight: null,
            flueDiameter: null,
            outputCapacity: {code: null, value: null, uiUnits: null, english: null, french: null}
        },
        xmlOutput() {
            return `<Boiler>
                    <EquipmentInformation energystar="${this.equipmentInformation.energystar}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Equipment isBiEnergy="${this.equipment.isBiEnergy}" switchoverTemperature="${this.equipment.switchoverTemperature}">
                        <EnergySource code="${this.equipment.energySource.code}">
                            <English>${this.equipment.energySource.english}</English>
                            <French>${this.equipment.energySource.french}</French>
                        </EnergySource>
                        <EquipmentType code="${this.equipment.equipmentType.code}">
                            <English>${this.equipment.equipmentType.english}</English>
                            <French>${this.equipment.energySource.french}</French>
                        </EquipmentType>
                    </Equipment>
                    <Specifications sizingFactor="${this.specifications.sizingFactor}" efficiency="${this.specifications.efficiency}" isSteadyState="${this.specifications.isSteadyState}" pilotLight="${this.specifications.pilotLight}" flueDiameter="${this.specifications.flueDiameter}">
                        <OutputCapacity code="${this.specifications.outputCapacity.code}" value="${this.specifications.outputCapacity.value}" uiUnits="${this.specifications.outputCapacity.uiUnits}">
                            <English>${this.specifications.outputCapacity.english}</English>
                            <French>${this.specifications.outputCapacity.french}</French>
                        </OutputCapacity>
                    </Specifications>
                </Boiler>`;
        },
        codes: {
            electric: [{code: "2", english: "Electric boiler", french: "Chaudière électrique"}],
            naturalGas: [
                {code: "1", english: "Boiler w/ continuous pilot", french: "Chaudière avec veilleuse permanente"},
                {code: "2", english: "Boiler w/ spark ignition", french: "Chaudière à allumage par étincelle"},
                {code: "3", english: "Boiler w/ spark ignition &amp; vent damper", french: "Chaudière. à allum. par étin., avec registre"},
                {code: "4", english: "Induced draft fan boiler", french: "Chaudière à tirage induit"},
                {code: "5", english: "Condensing", french: "Chaudière à condensation"}
            ],
            oil: [
                {code: "1", english: "Boiler", french: "Chaudière"},
                {code: "2", english: "Boiler w/vent damper", french: "Chaudière avec registre de tirage"},
                {code: "3", english: "Boiler w/ flame ret. head", french: "Chaudière. avec tête de rétention de flamme"},
                {code: "4", english: "Mid-eff. boiler (no dil. air)", french: "Chaudière. à rend. moy. (sans air de dilution)"},
                {code: "5", english: "Condensing boiler (no chimney)", french: "Chaudière. à condensation (sans cheminée)"},
                {code: "6", english: "Direct vent, non-condensing", french: "Chaudière. à évacuation directe - sans condensation"}
            ],
            propane: [
                {code: "1", english: "Boiler w/ continuous pilot", french: "Chaudière avec veilleuse permanente"},
                {code: "2", english: "Boiler w/ spark ignition", french: "Chaudière à allumage par étincelle"},
                {code: "3", english: "Boiler w/ spark ignition &amp; vent damper", french: "Chaudière. à allum. par étin., avec registre"},
                {code: "4", english: "Induced draft fan boiler", french: "Chaudière à tirage induit"},
                {code: "5", english: "Condensing", french: "Chaudière à condensation"}
            ],
            mixedWood: [
                {code: "4", english: "Conventional boiler", french: "Chaudière conventionnelle"},
                {code: "11", english: "Outdoor wood boiler", french: "Chaudière à bois extérieur"}
            ],
            hardwood: [
                {code: "4", english: "Conventional boiler", french: "Chaudière conventionnelle"},
                {code: "11", english: "Outdoor wood boiler", french: "Chaudière à bois extérieur"}
            ],
            softwood: [
                {code: "4", english: "Conventional boiler", french: "Chaudière conventionnelle"},
                {code: "11", english: "Outdoor wood boiler", french: "Chaudière à bois extérieur"}
            ],
            woodPellets: [
                {code: "4", english: "Conventional boiler", french: "Chaudière conventionnelle"},
                {code: "11", english: "Outdoor wood boiler", french: "Chaudière à bois extérieur"}
            ]
        }
    };
    comboHeatDhw = {
        equipmentInformation: {energystar: null, manufacturer: null, model: null},
        equipment: {
            isBiEnergy: null,
            switchoverTemperature: null,
            energySource: {code: null, english: null, french: null},
            equipmentType: {code: null, english: null, french: null},
        },
        specifications: {
            sizingFactor: null,
            efficiency: null,
            isSteadyState: null,
            pilotLight: null,
            flueDiameter: null,
            outputCapacity: {code: null, value: null, uiUnits: null, english: null, french: null}
        },
        comboTankAndPump: {
            tankCapacity: {code: null, value: null, english: null, french: null},
            energyFactor: {useDefaults: null},
            tankLocation: {code: null, english: null, french: null},
            circulationPump: {isCalculated: null, value: null, hasEnergyEfficientMotor: null}
        },
        xmlOutput() {
            return `<ComboHeatDhw>
                    <EquipmentInformation energystar="${this.equipmentInformation.energystar}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Equipment isBiEnergy="${this.equipment.isBiEnergy}" switchoverTemperature="${this.equipment.switchoverTemperature}">
                        <EnergySource code="${this.equipment.energySource.code}">
                            <English>${this.equipment.energySource.english}</English>
                            <French>${this.equipment.energySource.french}</French>
                        </EnergySource>
                        <EquipmentType code="${this.equipment.equipmentType.code}">
                            <English>${this.equipment.equipmentType.english}</English>
                            <French>${this.equipment.energySource.french}</French>
                        </EquipmentType>
                    </Equipment>
                    <Specifications sizingFactor="${this.specifications.sizingFactor}" efficiency="${this.specifications.efficiency}" isSteadyState="${this.specifications.isSteadyState}" pilotLight="${this.specifications.pilotLight}" flueDiameter="${this.specifications.flueDiameter}">
                        <OutputCapacity code="${this.specifications.outputCapacity.code}" value="${this.specifications.outputCapacity.value}" uiUnits="${this.specifications.outputCapacity.uiUnits}">
                            <English>${this.specifications.outputCapacity.english}</English>
                            <French>${this.specifications.outputCapacity.french}</French>
                        </OutputCapacity>
                    </Specifications>
                    <ComboTankAndPump>
                        <TankCapacity code="${this.comboTankAndPump.tankCapacity.code}" value="${this.comboTankAndPump.tankCapacity.value}">
                            <English>${this.comboTankAndPump.tankCapacity.english}</English>
                            <French>${this.comboTankAndPump.tankCapacity.french}</French>
                        </TankCapacity>
                        <EnergyFactor useDefaults="${this.comboTankAndPump.energyFactor.useDefaults}" />
                        <TankLocation code="${this.comboTankAndPump.tankLocation.code}">
                            <English>${this.comboTankAndPump.tankLocation.english}</English>
                            <French>${this.comboTankAndPump.tankLocation.french}</French>
                        </TankLocation>
                        <CirculationPump isCalculated="${this.comboTankAndPump.circulationPump.isCalculated}" value="${this.comboTankAndPump.circulationPump.value}" hasEnergyEfficientMotor="${this.comboTankAndPump.circulationPump.hasEnergyEfficientMotor}" />
                    </ComboTankAndPump>
                </ComboHeatDhw>`;
        },
        codes: {
            naturalGas: [
                {code: "1", english: "Heater w/ continuous pilot", french: "Réchauffeur avec veilleuse continue"},
                {code: "2", english: "Heater w/ spark ignition", french: "Réchauffeur avec allumage par étincelle"},
                {code: "3", english: "Heater w/ spark ignition &amp; vent damper", french: "Réchauffeur avec allumage par étincelle et limiteur de vent."},
                {code: "4", english: "Heater w/ Induced draft fan", french: "Réchauffeur avec ventillateur"},
                {code: "5", english: "Condensing heater", french: "Réchauffeur à condensation"}
            ],
            oil: [
                {code: "1", english: "Heater w/vent damper", french: "Réchauffeur avec limiteur de ventillation"},
                {code: "2", english: "Heater w/ flame ret. head", french: "Réchauffeur avec tête de rétention"},
                {code: "3", english: "Mid-eff. heater (no dil. air)", french: "Réchauffeur à efficacité moy. (pas d'air dil.)"},
                {code: "4", english: "Direct vent, non-condensing heater", french: "Réchauffeur à vent. directe, sans condensation"},
                {code: "5", english: "Condensing heater (no chimney)", french: "Réchauffeur à condensation (sans cheminée)"}
            ],
            propane: [
                {code: "1", english: "Heater w/ continuous pilot", french: "Réchauffeur avec veilleuse continue"},
                {code: "2", english: "Heater w/ spark ignition", french: "Réchauffeur avec allumage par étincelle"},
                {code: "3", english: "Heater w/ spark ignition &amp; vent damper", french: "Réchauffeur avec allumage par étincelle et limiteur de vent."},
                {code: "4", english: "Heater w/ Induced draft fan", french: "Réchauffeur avec ventillateur"},
                {code: "5", english: "Condensing heater", french: "Réchauffeur à condensation"}
            ]
        }
    };
    P9 = {
        numberOfSystems: null,
        thermalPerformanceFactor: null,
        annualElectricity: null,
        spaceHeatingCapacity: null,
        spaceHeatingEfficiency: null,
        waterHeatingPerformanceFactor: null,
        burnerInput: null,
        recoveryEfficiency: null,
        isUserSpecified: null,
        equipmentInformation: {energystar: null, manufacturer: null, model: null},
        testData: {
            controlsPower: null,
            circulationPower: null,
            dailyUse: null,
            standbyLossWithFan: null,
            standbyLossWithoutFan: null,
            oneHourRatingHotWater: null,
            oneHourRatingConcurrent: null,
            energySource: {code: null, english: null, french: null},
            netEfficiency: {loadPerformance15: null, loadPerformance40: null, loadPerformance100: null},
            electricalUse: {loadPerformance15: null, loadPerformance40: null, loadPerformance100: null},
            blowerPower: {loadPerformance15: null, loadPerformance40: null, loadPerformance100: null},
        },
        xmlOutput() {
            return `<P9 numberOfSystems="${this.numberOfSystems}" thermalPerformanceFactor="${this.thermalPerformanceFactor}" annualElectricity="${this.annualElectricity}" spaceHeatingCapacity="${this.spaceHeatingCapacity}" spaceHeatingEfficiency="${this.spaceHeatingEfficiency}" waterHeatingPerformanceFactor="${this.waterHeatingPerformanceFactor}" burnerInput="${this.burnerInput}" recoveryEfficiency="${this.recoveryEfficiency}" isUserSpecified="${this.isUserSpecified}">
                    <EquipmentInformation energystar="${this.equipmentInformation.energystar}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <TestData controlsPower="${this.testData.controlsPower}" circulationPower="${this.testData.circulationPower}" dailyUse="${this.testData.dailyUse}" standbyLossWithFan="${this.testData.standbyLossWithFan}" standbyLossWithoutFan="${this.testData.standbyLossWithoutFan}" oneHourRatingHotWater="${this.testData.oneHourRatingHotWater}" oneHourRatingConcurrent="${this.testData.oneHourRatingConcurrent}">
                        <EnergySource code="${this.testData.energySource.code}">
                            <English>${this.testData.energySource.english}</English>
                            <French>${this.testData.energySource.french}</French>
                        </EnergySource>
                        <NetEfficiency loadPerformance15="${this.testData.netEfficiency.loadPerformance15}" loadPerformance40="${this.testData.netEfficiency.loadPerformance40}" loadPerformance100="${this.testData.netEfficiency.loadPerformance100}" />
                        <ElectricalUse loadPerformance15="${this.testData.electricalUse.loadPerformance15}" loadPerformance40="${this.testData.electricalUse.loadPerformance40}" loadPerformance100="${this.testData.electricalUse.loadPerformance100}" />
                        <BlowerPower loadPerformance15="${this.testData.blowerPower.loadPerformance15}" loadPerformance40="${this.testData.blowerPower.loadPerformance40}" loadPerformance100="${this.testData.blowerPower.loadPerformance100}" />
                    </TestData>
                </P9>`;
        }
    }
}

export default HeatingSystem;
