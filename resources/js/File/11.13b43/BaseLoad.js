class BaseLoad {
    id = null;
    basementFractionOfInternalGains = null;
    commonSpaceElectricalConsumption = null;
    label = null;
    occupancy = {
        isOccupied: null,
        adults: {occupants: null, atHome: null},
        children: {occupants: null, atHome: null},
        infants: {occupants: null, atHome: null}
    };
    summary = {electricalAppliances: null, lighting: null, otherElectric: null, exteriorUse: null, hotWaterLoad: null};
    waterUsage = {
        temperature: null,
        otherHotWaterUse: null,
        lowFlushToilets: null,
        bathroomFaucets: {code: null, value: null, numberPerOccupantPerDay: null, english: null, french: null},
        shower: {
            averageDuration: null,
            numberPerOccupantPerWeek: null,
            totalDurationPerDay: null,
            temperature: {code: null, value: null, english: null, french: null},
            flowRate: {code: null, value: null, english: null, french: null},
        },
        clothesWasher: {
            numberPerOccupantPerWeek: null,
            ratedValues: {code: null, ratedWaterConsumptionPerCycle: null, ratedAnnualEnergyConsumption: null, english: null, french: null},
            temperature: {code: null, value: null, english: null, french: null},
        },
        dishWasher: {
            numberPerOccupantPerWeek: null,
            ratedValues: {code: null, ratedWaterConsumptionPerCycle: null, ratedAnnualEnergyConsumption: null, english: null, french: null},
        }
    };
    electricalUsage = {
        otherLoad: null,
        averageExteriorUse: null,
        clothesDryer: {
            percentageOfWasherLoads: null,
            energySource: {code: null, english: null, french: null},
            ratedValue: {code: null, value: null, english: null, french: null},
            location: {code: null, english: null, french: null}
        },
        stove: {
            energySource: {code: null, english: null, french: null},
            ratedValue: {code: null, value: null, english: null, french: null}
        },
        refrigerator: {code: null, value: null, english: null, french: null},
        interiorLighting: {code: null, value: null, english: null, french: null},
    };

    xmlOutput(){
        return `<BaseLoads basementFractionOfInternalGains="${this.basementFractionOfInternalGains}" commonSpaceElectricalConsumption="${this.commonSpaceElectricalConsumption}" id="${this.id}">
            <Label>${this.label}</Label>
            <Occupancy isOccupied="${this.occupancy.isOccupied}">
                <Adults occupants="${this.occupancy.adults.occupants}" atHome="${this.occupancy.adults.atHome}" />
                <Children occupants="${this.occupancy.children.occupants}" atHome="${this.occupancy.children.atHome}" />
                <Infants occupants="${this.occupancy.infants.occupants}" atHome="${this.occupancy.infants.atHome}" />
            </Occupancy>
            <Summary electricalAppliances="${this.summary.electricalAppliances}" lighting="${this.summary.lighting}" otherElectric="${this.summary.otherElectric}" exteriorUse="${this.summary.exteriorUse}" hotWaterLoad="${this.summary.hotWaterLoad}" />
            <WaterUsage temperature="${this.waterUsage.temperature}" otherHotWaterUse="${this.waterUsage.otherHotWaterUse}" lowFlushToilets="${this.waterUsage.lowFlushToilets}">
                <BathroomFaucets code="${this.waterUsage.bathroomFaucets.code}" value="${this.waterUsage.bathroomFaucets.value}" numberPerOccupantPerDay="${this.waterUsage.bathroomFaucets.numberPerOccupantPerDay}">
                    <English>${this.waterUsage.bathroomFaucets.english}</English>
                    <French>${this.waterUsage.bathroomFaucets.french}</French>
                </BathroomFaucets>
                <Shower averageDuration="${this.waterUsage.shower.averageDuration}" numberPerOccupantPerWeek="${this.waterUsage.shower.numberPerOccupantPerWeek}" totalDurationPerDay="${this.waterUsage.shower.totalDurationPerDay}">
                    <Temperature code="${this.waterUsage.shower.temperature.code}" value="${this.waterUsage.shower.temperature.value}">
                        <English>${this.waterUsage.shower.temperature.english}</English>
                        <French>${this.waterUsage.shower.temperature.french}</French>
                    </Temperature>
                    <FlowRate code="${this.waterUsage.shower.flowRate.code}" value="${this.waterUsage.shower.flowRate.value}">
                        <English>${this.waterUsage.shower.flowRate.english}</English>
                        <French>${this.waterUsage.shower.flowRate.french}</French>
                    </FlowRate>
                </Shower>
                <ClothesWasher numberPerOccupantPerWeek="${this.waterUsage.clothesWasher.numberPerOccupantPerWeek}">
                    <RatedValues code="${this.waterUsage.clothesWasher.ratedValues.code}" ratedWaterConsumptionPerCycle="${this.waterUsage.clothesWasher.ratedValues.ratedWaterConsumptionPerCycle}" ratedAnnualEnergyConsumption="${this.waterUsage.clothesWasher.ratedValues.ratedAnnualEnergyConsumption}">
                        <English>${this.waterUsage.clothesWasher.ratedValues.english}</English>
                        <French>${this.waterUsage.clothesWasher.ratedValues.french}</French>
                    </RatedValues>
                    <Temperature code="${this.waterUsage.clothesWasher.temperature.code}">
                        <English>${this.waterUsage.clothesWasher.temperature.english}</English>
                        <French>${this.waterUsage.clothesWasher.temperature.french}</French>
                    </Temperature>
                </ClothesWasher>
                <DishWasher numberPerOccupantPerWeek="${this.waterUsage.dishWasher.numberPerOccupantPerWeek}">
                    <RatedValues code="${this.waterUsage.dishWasher.ratedValues.code}" ratedWaterConsumptionPerCycle="${this.waterUsage.dishWasher.ratedValues.ratedWaterConsumptionPerCycle}" ratedAnnualEnergyConsumption="${this.waterUsage.dishWasher.ratedValues.ratedAnnualEnergyConsumption}">
                        <English>${this.waterUsage.dishWasher.ratedValues.english}</English>
                        <French>${this.waterUsage.dishWasher.ratedValues.french}</French>
                    </RatedValues>
                </DishWasher>
            </WaterUsage>
            <ElectricalUsage otherLoad="${this.electricalUsage.otherLoad}" averageExteriorUse="${this.electricalUsage.averageExteriorUse}">
                <ClothesDryer percentageOfWasherLoads="${this.electricalUsage.clothesDryer.percentageOfWasherLoads}">
                    <EnergySource code="${this.electricalUsage.clothesDryer.energySource.code}">
                        <English>${this.electricalUsage.clothesDryer.energySource.english}</English>
                        <French>${this.electricalUsage.clothesDryer.energySource.french}</French>
                    </EnergySource>
                    <RatedValue code="${this.electricalUsage.clothesDryer.ratedValue.code}" value="${this.electricalUsage.clothesDryer.ratedValue.value}">
                        <English>${this.electricalUsage.clothesDryer.ratedValue.english}</English>
                        <French>${this.electricalUsage.clothesDryer.ratedValue.french}</French>
                    </RatedValue>
                    <Location code="${this.electricalUsage.clothesDryer.location.code}">
                        <English>${this.electricalUsage.clothesDryer.location.english}</English>
                        <French>${this.electricalUsage.clothesDryer.location.french}</French>
                    </Location>
                </ClothesDryer>
                <Stove>
                    <EnergySource code="${this.electricalUsage.stove.energySource.code}">
                        <English>${this.electricalUsage.stove.energySource.english}</English>
                        <French>${this.electricalUsage.stove.energySource.french}</French>
                    </EnergySource>
                    <RatedValue code="${this.electricalUsage.stove.ratedValue.code}" value="${this.electricalUsage.stove.ratedValue.value}">
                        <English>${this.electricalUsage.stove.ratedValue.english}</English>
                        <French>${this.electricalUsage.stove.ratedValue.french}</French>
                    </RatedValue>
                </Stove>
                <Refrigerator code="${this.electricalUsage.refrigerator.code}" value="${this.electricalUsage.refrigerator.value}">
                    <English>${this.electricalUsage.refrigerator.english}</English>
                    <French>${this.electricalUsage.refrigerator.french}</French>
                </Refrigerator>
                <InteriorLighting code="${this.electricalUsage.interiorLighting.code}" value="${this.electricalUsage.interiorLighting.value}">
                    <English>${this.electricalUsage.interiorLighting.english}</English>
                    <French>${this.electricalUsage.interiorLighting.french}</French>
                </InteriorLighting>
            </ElectricalUsage>
        </BaseLoads>`;
    }
}
export default BaseLoad;
