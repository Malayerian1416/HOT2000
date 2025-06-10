class HeatingCooling {
    id = null;
    label = null;
    coolingSeason = {
        start: {code: null, text: null},
        end: {code: null, text: null},
        design: {code: null, text: null}
    };
    type1 = {
        fansAndPump: {
            hasEnergyEfficientMotor: null,
            mode: {code: null, english: null, french: null},
            power: {isCalculated: null, low: null, high: null}
        },
        heatingSystem: null,
    };
    type2 = {
        shadingInF280Cooling: null,
        coolingSystem: null,
    };
    multipleSystems = {summary: {energySaverHeatingSystems: null, energySaverAirSourceHeatPump: null, woodAppliances: null, epaCsaHeatingSystems: null}}
    supplementaryHeatingSystems = [];

    xmlOutput() {
        let SupplementaryHeatingSystems = null;
        this.supplementaryHeatingSystems.forEach(system => {
            SupplementaryHeatingSystems += system.xmlOutput();
        });
        return `<HeatingCooling id="${this.id}">
            <Label>${this.label}</Label>
            <CoolingSeason>
                <Start code="${this.coolingSeason.start.code}">${this.coolingSeason.start.text}</Start>
                <End code="${this.coolingSeason.end.code}">${this.coolingSeason.end.text}</End>
                <Design code="${this.coolingSeason.design.code}">${this.coolingSeason.design.text}</Design>
            </CoolingSeason>
            <Type1>
            ${this.type1.heatingSystem.xmlOutput()}
            </Type1>
            <Type2 shadingInF280Cooling="${this.type2.shadingInF280Cooling}">
            ${this.type2.coolingSystem.xmlOutput()}
            </Type2>
            <MultipleSystems>
                <Summary energySaverHeatingSystems="${this.multipleSystems.summary.energySaverHeatingSystems}" energySaverAirSourceHeatPump="${this.multipleSystems.summary.energySaverAirSourceHeatPump}" woodAppliances="${this.multipleSystems.summary.woodAppliances}" epaCsaHeatingSystems="${this.multipleSystems.summary.epaCsaHeatingSystems}" />
            </MultipleSystems>
            <SupplementaryHeatingSystems>
               ${SupplementaryHeatingSystems}
            </SupplementaryHeatingSystems>
        </HeatingCooling>`;
    };
}
export default HeatingCooling;
