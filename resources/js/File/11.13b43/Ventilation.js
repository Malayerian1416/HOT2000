class Ventilation {
    id = null;
    label = null;
    rooms = {
        living: null,
        bedrooms: null,
        bathrooms: null,
        utility: null,
        otherHabitable: null,
        ventilationRate: {code: null, english: null, french: null},
        depressurizationLimit: {code: null, value: null},
    };
    requirements = {ach: null, supply: null, exhaust: null, use:{code: null, english: null, french: null}};
    wholeHouse = {
        temperatureControlLower: null,
        temperatureControlUpper: null,
        airDistributionType: {code: null, english: null, french: null},
        airDistributionFanPower: {code: null, english: null, french: null},
        operationSchedule: {code: null, value: null, english: null, french: null}
    };
    wholeHouseVentilatorList = null;
    supplementalVentilatorList = [];

    xmlOutput() {
        const SupplementalVentilatorList = null;

        return `<Ventilation id="${this.id}">
            <Label>${this.label}</Label>
            <Rooms living="${this.rooms.living}" bedrooms="${this.rooms.bedrooms}" bathrooms="${this.rooms.bathrooms}" utility="${this.rooms.utility}" otherHabitable="${this.rooms.otherHabitable}">
                <VentilationRate code="${this.rooms.ventilationRate.code}">
                    <English>${this.rooms.ventilationRate.english}</English>
                    <French>${this.rooms.ventilationRate.french}</French>
                </VentilationRate>
                <DepressurizationLimit code="${this.rooms.depressurizationLimit.code}" value="${this.rooms.depressurizationLimit.value}" />
            </Rooms>
            <Requirements ach="${this.requirements.ach}" supply="${this.requirements.supply}" exhaust="${this.requirements.exhaust}">
                <Use code="${this.requirements.use.code}">
                    <English>${this.requirements.use.english}</English>
                    <French>${this.requirements.use.french}</French>
                </Use>
            </Requirements>
            <WholeHouse temperatureControlLower="${this.wholeHouse.temperatureControlLower}" temperatureControlUpper="${this.wholeHouse.temperatureControlUpper}">
                <AirDistributionType code="${this.wholeHouse.airDistributionType.code}">
                    <English>${this.wholeHouse.airDistributionType.english}</English>
                    <French>${this.wholeHouse.airDistributionType.french}</French>
                </AirDistributionType>
                <AirDistributionFanPower code="${this.wholeHouse.airDistributionFanPower.code}">
                    <English>${this.wholeHouse.airDistributionFanPower.english}</English>
                    <French>${this.wholeHouse.airDistributionFanPower.french}</French>
                </AirDistributionFanPower>
                <OperationSchedule code="${this.wholeHouse.operationSchedule.code}" value="${this.wholeHouse.operationSchedule.value}">
                    <English>${this.wholeHouse.operationSchedule.english}</English>
                    <French>${this.wholeHouse.operationSchedule.french}</French>
                </OperationSchedule>
            </WholeHouse>
            <WholeHouseVentilatorList />
            <SupplementalVentilatorList>
                ${SupplementalVentilatorList}
            </SupplementalVentilatorList>
        </Ventilation>`;
    }
}
export default Ventilation;
