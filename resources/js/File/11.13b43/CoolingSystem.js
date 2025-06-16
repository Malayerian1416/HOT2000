class CoolingSystem {
    NA=  {};
    airHeatPump = {
        equipmentInformation: {energystar: null, CCASHP: null, AHRI: null, manufacturer: null, model: null},
        equipment: {
            crankcaseHeater: null,
            type: {code: null, english: null, french: null},
            function: {code: null, english: null, french: null}
        },
        specifications: {
            outputCapacity: {code: null, value: null, uiUnits: null, english: null, french: null},
            heatingEfficiency: {isCop: null, unit: null, value: null},
            coolingEfficiency: {isCop: null, unit: null, value: null}
        },
        temperature: {
            cutoffType: {code: null, english: null, french: null},
            ratingType: {code: null, value: null, english: null, french: null}
        },
        coolingParameters: {
            sensibleHeatRatio: null,
            openableWindowArea: null,
            fansAndPump: {
                flowRate: null,
                hasEnergyEfficientMotor: null,
                mode: {code: null, english: null, french: null},
                power: {isCalculated: null}
            }
        },
        coldClimateHeatPump: {
            heatingEfficiency: null,
            coolingEfficiency: null,
            heatingEfficiencyUnit: null,
            coolingEfficiencyUnit: null,
            capacity: null,
            uiUnits: null,
            cop: null,
            capacityMaintenance: null
        },
        xmlOutput() {
            return `<AirHeatPump>
                    <EquipmentInformation energystar="${this.equipmentInformation.energystar}" CCASHP="${this.equipmentInformation.CCASHP}" AHRI="${this.equipmentInformation.AHRI}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Equipment crankcaseHeater="${this.equipment.crankcaseHeater}">
                        <Type code="${this.equipment.type.code}">
                            <English>${this.equipment.type.english}</English>
                            <French>${this.equipment.type.french}</French>
                        </Type>
                        <Function code="${this.equipment.function.code}">
                            <English>${this.equipment.function.english}</English>
                            <French>${this.equipment.function.french}</French>
                        </Function>
                    </Equipment>
                    <Specifications>
                        <OutputCapacity code="${this.specifications.outputCapacity.code}" value="${this.specifications.outputCapacity.value}" uiUnits="${this.specifications.outputCapacity.uiUnits}">
                            <English>${this.specifications.outputCapacity.english}</English>
                            <French>${this.specifications.outputCapacity.french}</French>
                        </OutputCapacity>
                        <HeatingEfficiency isCop="${this.specifications.heatingEfficiency.isCop}" unit="${this.specifications.heatingEfficiency.unit}" value="${this.specifications.heatingEfficiency.value}" />
                        <CoolingEfficiency isCop="${this.specifications.coolingEfficiency.isCop}" unit="${this.specifications.coolingEfficiency.unit}" value="${this.specifications.coolingEfficiency.value}" />
                    </Specifications>
                    <Temperature>
                        <CutoffType code="${this.temperature.cutoffType.code}">
                            <English>${this.temperature.cutoffType.english}</English>
                            <French>${this.temperature.cutoffType.french}</French>
                        </CutoffType>
                        <RatingType code="${this.temperature.ratingType.code}" value="${this.temperature.ratingType.value}">
                            <English>${this.temperature.ratingType.english}</English>
                            <French>${this.temperature.ratingType.french}</French>
                        </RatingType>
                    </Temperature>
                    <CoolingParameters sensibleHeatRatio="${this.coolingParameters.sensibleHeatRatio}" openableWindowArea="${this.coolingParameters.openableWindowArea}">
                        <FansAndPump flowRate="${this.coolingParameters.fansAndPump.flowRate}" hasEnergyEfficientMotor="${this.coolingParameters.fansAndPump.hasEnergyEfficientMotor}">
                            <Mode code="${this.coolingParameters.fansAndPump.mode.code}">
                                <English>${this.coolingParameters.fansAndPump.mode.english}</English>
                                <French>${this.coolingParameters.fansAndPump.mode.french}</French>
                            </Mode>
                            <Power isCalculated="${this.coolingParameters.fansAndPump.power}" />
                        </FansAndPump>
                    </CoolingParameters>
                    <ColdClimateHeatPump heatingEfficiency="${this.coldClimateHeatPump.heatingEfficiency}" coolingEfficiency="${this.coldClimateHeatPump.coolingEfficiency}" heatingEfficiencyUnit="${this.coldClimateHeatPump.heatingEfficiencyUnit}" coolingEfficiencyUnit="${this.coldClimateHeatPump.coolingEfficiencyUnit}" capacity="${this.coldClimateHeatPump.capacity}" uiUnits="${this.coldClimateHeatPump.uiUnits}" cop="${this.coldClimateHeatPump.cop}" capacityMaintenance="${this.coldClimateHeatPump.capacityMaintenance}" />
                </AirHeatPump>`;
        },
        codes: {
            equipment: [
                {code: "1", english: "Central split system", french: "Système central bibloc"},
                {code: "2", english: "Central single package system", french: "Système central monobloc"},
                {code: "3", english: "Ductless Mini- or Multi-split system", french: "Système mini- ou multi-biblocs sans conduits"},
                {code: "4", english: "Compact Ducted Mini- or Multi-split system", french: "Système mini- ou multi-biblocs compact avec conduits"},
                {code: "5", english: "Coils Only", french: "Serpentins seulement"}
            ],
            function: [
                {code: "1", english: "Heating", french: "Chauffage"},
                {code: "2", english: "Heating/Cooling", french: "Chauffage/climatisation"}
            ],
        }
    };
    waterHeatPump = {
        equipmentInformation: {canCsaC448: null, CCASHP: null, AHRI: null, manufacturer: null, model: null},
        equipment: {
            crankcaseHeater: null,
            function: {code: null, english: null, french: null}
        },
        specifications: {
            outputCapacity: {code: null, value: null, uiUnits: null, english: null, french: null},
            heatingEfficiency: {isCop: null, unit: null, value: null},
            coolingEfficiency: {isCop: null, unit: null, value: null}
        },
        temperature: {
            cutoffType: {code: null, english: null, french: null},
            ratingType: {code: null, value: null, english: null, french: null}
        },
        sourceTemperature: {depth: null, use: {code: null, english: null, french: null}},
        coolingParameters: {
            sensibleHeatRatio: null,
            openableWindowArea: null,
            fansAndPump: {
                flowRate: null,
                hasEnergyEfficientMotor: null,
                mode: {code: null, english: null, french: null},
                power: {isCalculated: null}
            }
        },
        coldClimateHeatPump: {
            heatingEfficiency: null,
            coolingEfficiency: null,
            heatingEfficiencyUnit: null,
            coolingEfficiencyUnit: null,
            capacity: null,
            uiUnits: null,
            cop: null,
            capacityMaintenance: null
        },
        xmlOutput() {
            return `<WaterHeatPump>
                    <EquipmentInformation canCsaC448="${this.equipmentInformation.canCsaC448}" CCASHP="${this.equipmentInformation.CCASHP}" AHRI="${this.equipmentInformation.AHRI}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Equipment crankcaseHeater="${this.equipment.crankcaseHeater}">
                        <Function code="${this.equipment.function.code}">
                            <English>${this.equipment.function.english}</English>
                            <French>${this.equipment.function.french}</French>
                        </Function>
                    </Equipment>
                    <Specifications>
                        <OutputCapacity code="${this.specifications.outputCapacity.code}" value="${this.specifications.outputCapacity.value}" uiUnits="${this.specifications.outputCapacity.uiUnits}">
                            <English>${this.specifications.outputCapacity.english}</English>
                            <French>${this.specifications.outputCapacity.french}</French>
                        </OutputCapacity>
                        <HeatingEfficiency isCop="${this.specifications.heatingEfficiency.isCop}" unit="${this.specifications.heatingEfficiency.unit}" value="${this.specifications.heatingEfficiency.value}" />
                        <CoolingEfficiency isCop="${this.specifications.coolingEfficiency.isCop}" unit="${this.specifications.coolingEfficiency.unit}" value="${this.specifications.coolingEfficiency.value}" />
                    </Specifications>
                    <Temperature>
                        <CutoffType code="${this.temperature.cutoffType.code}">
                            <English>${this.temperature.cutoffType.english}</English>
                            <French>${this.temperature.cutoffType.french}</French>
                        </CutoffType>
                        <RatingType code="${this.temperature.ratingType.code}" value="${this.temperature.ratingType.value}">
                            <English>${this.temperature.ratingType.english}</English>
                            <French>${this.temperature.ratingType.french}</French>
                        </RatingType>
                    </Temperature>
                    <SourceTemperature depth="${this.sourceTemperature.depth}">
                        <Use code="${this.sourceTemperature.use.code}">
                            <English>${this.sourceTemperature.use.english}</English>
                            <French>${this.sourceTemperature.use.french}</French>
                        </Use>
                    </SourceTemperature>
                    <CoolingParameters sensibleHeatRatio="${this.coolingParameters.sensibleHeatRatio}" openableWindowArea="${this.coolingParameters.openableWindowArea}">
                        <FansAndPump flowRate="${this.coolingParameters.fansAndPump.flowRate}" hasEnergyEfficientMotor="${this.coolingParameters.fansAndPump.hasEnergyEfficientMotor}">
                            <Mode code="${this.coolingParameters.fansAndPump.mode.code}">
                                <English>${this.coolingParameters.fansAndPump.mode.english}</English>
                                <French>${this.coolingParameters.fansAndPump.mode.french}</French>
                            </Mode>
                            <Power isCalculated="${this.coolingParameters.fansAndPump.power}" />
                        </FansAndPump>
                    </CoolingParameters>
                    <ColdClimateHeatPump heatingEfficiency="${this.coldClimateHeatPump.heatingEfficiency}" coolingEfficiency="${this.coldClimateHeatPump.coolingEfficiency}" heatingEfficiencyUnit="${this.coldClimateHeatPump.heatingEfficiencyUnit}" coolingEfficiencyUnit="${this.coldClimateHeatPump.coolingEfficiencyUnit}" capacity="${this.coldClimateHeatPump.capacity}" uiUnits="${this.coldClimateHeatPump.uiUnits}" cop="${this.coldClimateHeatPump.cop}" capacityMaintenance="${this.coldClimateHeatPump.capacityMaintenance}" />
                </WaterHeatPump>`;
        },
        codes: {
            function: [
                {code: "1", english: "Heating", french: "Chauffage"},
                {code: "2", english: "Heating/Cooling", french: "Chauffage/climatisation"}
            ]
        }
    };
    groundHeatPump = {
        equipmentInformation: {canCsaC448: null, CCASHP: null, AHRI: null, manufacturer: null, model: null},
        equipment: {
            crankcaseHeater: null,
            function: {code: null, english: null, french: null}
        },
        specifications: {
            outputCapacity: {code: null, value: null, uiUnits: null, english: null, french: null},
            heatingEfficiency: {isCop: null, unit: null, value: null},
            coolingEfficiency: {isCop: null, unit: null, value: null}
        },
        temperature: {
            cutoffType: {code: null, english: null, french: null},
            ratingType: {code: null, value: null, english: null, french: null}
        },
        sourceTemperature: {depth: null, use: {code: null, english: null, french: null}},
        coolingParameters: {
            sensibleHeatRatio: null,
            openableWindowArea: null,
            fansAndPump: {
                flowRate: null,
                hasEnergyEfficientMotor: null,
                mode: {code: null, english: null, french: null},
                power: {isCalculated: null}
            }
        },
        coldClimateHeatPump: {
            heatingEfficiency: null,
            coolingEfficiency: null,
            heatingEfficiencyUnit: null,
            coolingEfficiencyUnit: null,
            capacity: null,
            uiUnits: null,
            cop: null,
            capacityMaintenance: null
        },
        xmlOutput() {
            return `<GroundHeatPump>
                    <EquipmentInformation canCsaC448="${this.equipmentInformation.canCsaC448}" CCASHP="${this.equipmentInformation.CCASHP}" AHRI="${this.equipmentInformation.AHRI}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Equipment crankcaseHeater="${this.equipment.crankcaseHeater}">
                        <Function code="${this.equipment.function.code}">
                            <English>${this.equipment.function.english}</English>
                            <French>${this.equipment.function.french}</French>
                        </Function>
                    </Equipment>
                    <Specifications>
                        <OutputCapacity code="${this.specifications.outputCapacity.code}" value="${this.specifications.outputCapacity.value}" uiUnits="${this.specifications.outputCapacity.uiUnits}">
                            <English>${this.specifications.outputCapacity.english}</English>
                            <French>${this.specifications.outputCapacity.french}</French>
                        </OutputCapacity>
                        <HeatingEfficiency isCop="${this.specifications.heatingEfficiency.isCop}" unit="${this.specifications.heatingEfficiency.unit}" value="${this.specifications.heatingEfficiency.value}" />
                        <CoolingEfficiency isCop="${this.specifications.coolingEfficiency.isCop}" unit="${this.specifications.coolingEfficiency.unit}" value="${this.specifications.coolingEfficiency.value}" />
                    </Specifications>
                    <Temperature>
                        <CutoffType code="${this.temperature.cutoffType.code}">
                            <English>${this.temperature.cutoffType.english}</English>
                            <French>${this.temperature.cutoffType.french}</French>
                        </CutoffType>
                        <RatingType code="${this.temperature.ratingType.code}" value="${this.temperature.ratingType.value}">
                            <English>${this.temperature.ratingType.english}</English>
                            <French>${this.temperature.ratingType.french}</French>
                        </RatingType>
                    </Temperature>
                    <SourceTemperature depth="${this.sourceTemperature.depth}">
                        <Use code="${this.sourceTemperature.use.code}">
                            <English>${this.sourceTemperature.use.english}</English>
                            <French>${this.sourceTemperature.use.french}</French>
                        </Use>
                    </SourceTemperature>
                    <CoolingParameters sensibleHeatRatio="${this.coolingParameters.sensibleHeatRatio}" openableWindowArea="${this.coolingParameters.openableWindowArea}">
                        <FansAndPump flowRate="${this.coolingParameters.fansAndPump.flowRate}" hasEnergyEfficientMotor="${this.coolingParameters.fansAndPump.hasEnergyEfficientMotor}">
                            <Mode code="${this.coolingParameters.fansAndPump.mode.code}">
                                <English>${this.coolingParameters.fansAndPump.mode.english}</English>
                                <French>${this.coolingParameters.fansAndPump.mode.french}</French>
                            </Mode>
                            <Power isCalculated="${this.coolingParameters.fansAndPump.power}" />
                        </FansAndPump>
                    </CoolingParameters>
                    <ColdClimateHeatPump heatingEfficiency="${this.coldClimateHeatPump.heatingEfficiency}" coolingEfficiency="${this.coldClimateHeatPump.coolingEfficiency}" heatingEfficiencyUnit="${this.coldClimateHeatPump.heatingEfficiencyUnit}" coolingEfficiencyUnit="${this.coldClimateHeatPump.coolingEfficiencyUnit}" capacity="${this.coldClimateHeatPump.capacity}" uiUnits="${this.coldClimateHeatPump.uiUnits}" cop="${this.coldClimateHeatPump.cop}" capacityMaintenance="${this.coldClimateHeatPump.capacityMaintenance}" />
                </GroundHeatPump>`;
        },
        codes: {
            function: [
                {code: "1", english: "Heating", french: "Chauffage"},
                {code: "2", english: "Heating/Cooling", french: "Chauffage/climatisation"}
            ]
        }
    };
    airConditioning = {
        equipmentInformation: {energystar: null, manufacturer: null, model: null},
        equipment: {
            crankcaseHeater: null,
            type: {tag: null, code: null, english: null, french: null},
        },
        specifications: {
            sizingFactor: null,
            ratedCapacity: {code: null, value: null, uiUnits: null, english: null, french: null},
            efficiency: {isCop: null, unit: null, value: null}
        },
        coolingParameters: {
            sensibleHeatRatio: null,
            openableWindowArea: null,
            fansAndPump: {
                flowRate: null,
                hasEnergyEfficientMotor: null,
                mode: {code: null, english: null, french: null},
                power: {isCalculated: null}
            }
        },
        xmlOutput() {
            const Type = `<${this.equipment.type.tag} code="${this.equipment.type.code}">
                            <English>${this.equipment.type.english}</English>
                            <French>${this.equipment.type.french}</French>
                        </${this.equipment.type.tag}>`;
            return `<AirConditioning>
                    <EquipmentInformation energystar="${this.equipmentInformation.energystar}">
                        <Manufacturer>${this.equipmentInformation.manufacturer}</Manufacturer>
                        <Model>${this.equipmentInformation.model}</Model>
                    </EquipmentInformation>
                    <Equipment crankcaseHeater="${this.equipment.crankcaseHeater}">
                        ${Type}
                    </Equipment>
                    <Specifications>
                         <RatedCapacity code="${this.specifications.ratedCapacity.code}" value="${this.specifications.ratedCapacity.value}" uiUnits="${this.specifications.ratedCapacity.uiUnits}">
                            <English>${this.specifications.ratedCapacity.english}</English>
                            <French>${this.specifications.ratedCapacity.french}</French>
                        </RatedCapacity>
                        <Efficiency isCop="${this.specifications.efficiency.isCop}" unit="${this.specifications.efficiency.unit}" value="${this.specifications.efficiency.value}" />
                    </Specifications>
                    <CoolingParameters sensibleHeatRatio="${this.coolingParameters.sensibleHeatRatio}" openableWindowArea="${this.coolingParameters.openableWindowArea}">
                        <FansAndPump flowRate="${this.coolingParameters.fansAndPump.flowRate}" hasEnergyEfficientMotor="${this.coolingParameters.fansAndPump.hasEnergyEfficientMotor}">
                            <Mode code="${this.coolingParameters.fansAndPump.mode.code}">
                                <English>${this.coolingParameters.fansAndPump.mode.english}</English>
                                <French>${this.coolingParameters.fansAndPump.mode.french}</French>
                            </Mode>
                            <Power isCalculated="${this.coolingParameters.fansAndPump.power}" />
                        </FansAndPump>
                    </CoolingParameters>
                </AirConditioning>`;
        },
        codes: [
            {code: "1", english: "Central split system", french: "Système central bibloc"},
            {code: "2", english: "Central single package system", french: "Système central monobloc"},
            {code: "3", english: "Ductless Mini- or Multi-split system", french: "Système mini- ou multi-biblocs sans conduits"},
            {code: "4", english: "Compact Ducted Mini- or Multi-split system", french: "Système mini- ou multi-biblocs compact avec conduits"},
            {code: "5", english: "Coils Only", french: "Serpentins seulement"}
        ]
    };
}

export default CoolingSystem;
