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
    };
    type2 = {

    };
    supplementaryHeatingSystems = [];
}
export default HeatingCooling;
