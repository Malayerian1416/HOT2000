class Temperature {
    id = null;
    label = null;
    mainFloors = {
        daytimeHeatingSetPoint: null,
        nighttimeHeatingSetPoint: null,
        nighttimeSetbackDuration: null,
        coolingSetPoint: null,
        allowableRise: {code: null, english: 'english', french: 'french'}
    };
    basement = {heated: null, cooled: null, separateThermostat: null, heatingSetPoint: null, basementUnit: null};
    equipment = {heatingSetPoint: null, coolingSetPoint: null};
    crawlspace = {exist: null, heated: null, heatingSetPoint: null};

    xmlOutput() {
        const crawlSpace = this.crawlspace.exist ? `<Crawlspace heated="${this.crawlspace.heated}" heatingSetPoint="${this.crawlspace.heatingSetPoint}" />` : null;
        return `<Temperatures id="${this.id}">
            <Label>${this.label}</Label>
            <MainFloors daytimeHeatingSetPoint="${this.mainFloors.daytimeHeatingSetPoint}" nighttimeHeatingSetPoint="${this.mainFloors.nighttimeHeatingSetPoint}" nighttimeSetbackDuration="${this.mainFloors.nighttimeSetbackDuration}" coolingSetPoint="${this.mainFloors.coolingSetPoint}">
                <AllowableRise code="${this.mainFloors.allowableRise.code}">
                    <English>${this.mainFloors.allowableRise.english}</English>
                    <French>${this.mainFloors.allowableRise.french}</French>
                </AllowableRise>
            </MainFloors>
            <Basement heated="${this.basement.heated}" cooled="${this.basement.cooled}" separateThermostat="${this.basement.separateThermostat}" heatingSetPoint="${this.basement.heatingSetPoint}" basementUnit="${this.basement.basementUnit}" />
            <Equipment heatingSetPoint="${this.equipment.heatingSetPoint}" coolingSetPoint="${this.equipment.coolingSetPoint}" />
            ${crawlSpace}
        </Temperatures>`;
    };
}
