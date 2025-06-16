import HeatingSystem from "./HeatingSystem.js";
import CoolingSystem from "./CoolingSystem.js";
import SupplementaryHeatingSystem from "./SupplementaryHeatingSystem.js";

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
    codes = {
        heatingSystems: {
            baseboards: {
                outputCapacity:[
                    {code: "1", english: "User specified", french: "Spécifié par l'util."},
                    {code: "2", english: "Calculated", french: "Calculé"}
                ]
            },
            furnace: {
                equipmentTypes: new HeatingSystem().furnace.codes
            },
            boiler: {
                equipmentTypes: new HeatingSystem().boiler.codes
            },
            comboHeatDhw: {
                equipmentTypes: new HeatingSystem().comboHeatDhw.codes
            }
        },
        coolingSystems: {
            airHeatPump: {
                equipmentTypes: new CoolingSystem().airHeatPump.codes,
                outputCapacity: [
                    {code: "1", english: "User-Specified", french: "Spécifiée par l'utilisateur"},
                    {code: "2", english: "Calculated", french: "Calculé"},
                    {code: "3", english: "1.25 x cooling load", french: "1,25 x charge de refroidissement"}
                ],
                cutoffType: [
                    {code: "1", english: "Balance point", french: "Point d'équilibre"},
                    {code: "2", english: "Restricted", french: "Restreint"},
                    {code: "3", english: "Unrestricted", french: "Non restreint"}
                ],
                ratingType: [
                    {code: "1", english: "8.3 C (47 F)", french: "8.3 C (47 F)"},
                    {code: "2", english: "0.0 C (32 F)", french: "0.0 C (32 F)"},
                    {code: "3", english: "User specified", french: "Spécifié par l'util."}
                ]
            },
            waterHeatPump: {
                equipmentTypes: new CoolingSystem().waterHeatPump.codes,
                outputCapacity: [
                    {code: "1", english: "User-Specified", french: "Spécifiée par l'utilisateur"},
                    {code: "2", english: "Calculated", french: "Calculé"},
                    {code: "3", english: "1.25 x cooling load", french: "1,25 x charge de refroidissement"}
                ],
                cutoffType: [
                    {code: "3", english: "Unrestricted", french: "Non restreint"}
                ],
                ratingType: [
                    {code: "1", english: "8.3 C (47 F)", french: "8.3 C (47 F)"},
                    {code: "2", english: "0.0 C (32 F)", french: "0.0 C (32 F)"},
                    {code: "3", english: "User specified", french: "Spécifié par l'util."}
                ],
                waterTemperature: [
                    {code: "1", english: "User specified", french: "Spécifié par l'util."},
                    {code: "2", english: "Calculated", french: "Calculé"}
                ]
            },
            groundHeatPump: {
                equipmentTypes: new CoolingSystem().groundHeatPump.codes,
                outputCapacity: [
                    {code: "1", english: "User-Specified", french: "Spécifiée par l'utilisateur"},
                    {code: "2", english: "Calculated", french: "Calculé"},
                    {code: "3", english: "1.25 x cooling load", french: "1,25 x charge de refroidissement"}
                ],
                cutoffType: [
                    {code: "3", english: "Unrestricted", french: "Non restreint"}
                ],
                ratingType: [
                    {code: "1", english: "8.3 C (47 F)", french: "8.3 C (47 F)"},
                    {code: "2", english: "0.0 C (32 F)", french: "0.0 C (32 F)"},
                    {code: "3", english: "User specified", french: "Spécifié par l'util."}
                ],
                groundTemperature: [
                    {code: "1", english: "User specified", french: "Spécifié par l'util."},
                    {code: "2", english: "Calculated", french: "Calculé"}
                ]
            },
            airConditioning: {
                equipmentTypes: new CoolingSystem().airConditioning.codes,
                outputCapacity: [
                    {code: "1", english: "User-Specified", french: "Spécifiée par l'utilisateur"},
                    {code: "2", english: "Calculated", french: "Calculé"}
                ]
            }
        },
        supplementalHeatingSystems: {
            equipmentTypes: new SupplementaryHeatingSystem().codes,
            yearMade: [
                {code: "1", english: "Before 1920", french: "Avant 1920"},
                {code: "2", english: "1920-29", french: "1920-29"},
                {code: "3", english: "1930-39", french: "1930-39"},
                {code: "4", english: "1940-49", french: "1940-49"},
                {code: "5", english: "1950-59", french: "1950-59"},
                {code: "6", english: "1960-69", french: "1960-69"},
                {code: "7", english: "1970-79", french: "1970-79"},
                {code: "8", english: "1980-89", french: "1980-89"},
                {code: "9", english: "1990-99", french: "1990-99"},
                {code: "10", english: "2000-", french: "2000-"}
            ],
            usage: [
                {code: "1", english: "Never", french: "Jamais"},
                {code: "2", english: "10% of the time", french: "10% du temps"},
                {code: "3", english: "25% of the time", french: "25%  du temps"},
                {code: "4", english: "50% of the time", french: "50%  du temps"},
                {code: "5", english: "75% of the time", french: "75%  du temps"},
                {code: "6", english: "Always", french: "Toujours"},
                {code: "7", english: "Specified monthly (%)", french: "Spécifié mensuellement (%)"},
                {code: "8", english: "Specified monthly (hr/day)", french: "Spécifié mensuellement (hr/jour)"}
            ],
            locationHeated: [
                {code: "1", english: "Main Floors", french: "Plancher Principaux"},
                {code: "2", english: "Basement", french: "Sous-Sol"},
                {code: "3", english: "Exterior", french: "Extérieur"}
            ],
            flueLocation: [
                {code: "", english: "Interior", french: "Intérieur"},
                {code: "", english: "Exterior", french: "Extérieur"}
            ],
            flueType: [
                {code: "1", english: "Brick", french: "Brique"},
                {code: "2", english: "Brick/Tile lined", french: "Brique/Tuile contrecollé"},
                {code: "3", english: "Plastic single wall", french: "Mur plastique à paroi simple"},
                {code: "4", english: "Metal", french: "Métal"},
                {code: "5", english: "Metal insulated", french: "Métal isolé"}
            ]
        }
    }
}
export default HeatingCooling;
