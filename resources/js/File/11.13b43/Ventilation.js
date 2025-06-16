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
    wholeHouseVentilatorList = [];
    supplementalVentilatorList = [];

    xmlOutput() {
        let WholeHouseVentilatorList = null;
        let SupplementalVentilatorList = null;
        this.wholeHouseVentilatorList.forEach(ventilator => {
            WholeHouseVentilatorList += ventilator.xmlOutput();
        });
        this.supplementalVentilatorList.forEach(ventilator => {
            SupplementalVentilatorList += ventilator.xmlOutput();
        });
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
            <WholeHouseVentilatorList>
                ${WholeHouseVentilatorList}
            </WholeHouseVentilatorList>
            <SupplementalVentilatorList>
                ${SupplementalVentilatorList}
            </SupplementalVentilatorList>
        </Ventilation>`;
    };

    codes = {
        use: [
            {code: "1", english: "F326", french: "F326"},
            {code: "2", english: "ACH", french: "CAH"},
            {code: "3", english: "Flow rate", french: "Débit"},
            {code: "4", english: "Not applicable", french: "Sans objet"}
        ],
        airDistributionType: [
            {code: "1", english: "Forced air heating ductwork", french: "Conduites à entraînement forcé pour l'air chauffé"},
            {code: "2", english: "Dedicated low volume ductwork", french: "Conduites à faible volume dédiées au VRC"},
            {code: "3", english: "Dedicated ductwork with transfer fans", french: "Conduites dédiées et ventilateurs de transfert"}
        ],
        airDistributionFanPower: [
            {code: "0", english: "User specified", french: "Prescrit par l'utilisateur"},
            {code: "1", english: "Default", french: "Par défaut"}
        ],
        operationSchedule: [
            {code: "0", english: "User specified", french: "Spécifié par l’utilisateur"},
            {code: "1", english: "Continuous", french: "Continu"},
            {code: "2", english: "Temperature controlled", french: "Réglage selon la température"},
            {code: "3", english: "45 min/day", french: "45 min/j"},
            {code: "4", english: "72 min/day", french: "72 min/j"},
            {code: "5", english: "90 min/day", french: "90 min/j"},
            {code: "6", english: "480 min/day", french: "480 min/j"}
        ],
        ventilator: [
            {code: "", english: "N/A", french: "N/A"},
            {code: "1", english: "HRV/ERV", french: "VRC/VRE"},
            {code: "2", english: "Range hood", french: "Hotte aspirante"},
            {code: "3", english: "Bathroom", french: "Salle de bains"},
            {code: "4", english: "Utility", french: "Utilité"},
            {code: "5", english: "Dryer", french: "Sécheuse"}
        ],
        coldAirDucts: {
            supply:{
                location: [
                    {code: "1", english: "Basement", french: "Sous-sol"},
                    {code: "2", english: "Crawl space", french: "Vide sanitaire"},
                    {code: "3", english: "Attic", french: "Grenier"},
                    {code: "4", english: "Main floor", french: "Rez-de-chaussée"}

                ],
                type: [
                    {code: "1", english: "Flexible", french: "Flexible"},
                    {code: "2", english: "Sheet metal w/ liner", french: "Tôle doublée"},
                    {code: "3", english: "Exterior insulated sheet metal", french: "Tôle isolée extérieure"}
                ],
                sealing: [
                    {code: "1", english: "Very tight", french: "Very tight"},
                    {code: "2", english: "Sealed", french: "Scellé"},
                    {code: "3", english: "Unsealed", french: "Non scellé"}
                ]
            },
            exhaust: {
                location: [
                    {code: "1", english: "Basement", french: "Sous-sol"},
                    {code: "2", english: "Crawl space", french: "Vide sanitaire"},
                    {code: "3", english: "Attic", french: "Grenier"},
                    {code: "4", english: "Main floor", french: "Rez-de-chaussée"}

                ],
                type: [
                    {code: "1", english: "Flexible", french: "Flexible"},
                    {code: "2", english: "Sheet metal w/ liner", french: "Tôle doublée"},
                    {code: "3", english: "Exterior insulated sheet metal", french: "Tôle isolée extérieure"}
                ],
                sealing: [
                    {code: "1", english: "Very tight", french: "Very tight"},
                    {code: "2", english: "Sealed", french: "Scellé"},
                    {code: "3", english: "Unsealed", french: "Non scellé"}
                ]
            }
        }
    }
}
export default Ventilation;
