class House {
    label = {english: 'english', french: 'french'};
    specifications = {
        houseType: {code: null, english: 'english', french: 'french'},
        planShape: {code: null, english: 'english', french: 'french'},
        storeys: {code: null, english: 'english', french: 'french'},
        facingDirection: {code: null, english: 'english', french: 'french'},
        thermalMass: {code: null, english: 'english', french: 'french'},
        yearBuilt: {code: null, value: null, english: 'english', french: 'french'},
        wallColour: {code: null, value: null, english: 'english', french: 'french'},
        soilCondition: {code: null, english: 'english', french: 'french'},
        RoofColour: {code: null, value: null, english: 'english', french: 'french'},
        waterLevel: {code: null, english: 'english', french: 'french'},
        heatedFloorArea: {aboveGrade: null, belowGrade: null}
    };
    windowTightness = {code: null, value: null, english: 'english', french: 'french'};
    temperatures = new Temperature();
    baseLoads = new BaseLoad();
}
