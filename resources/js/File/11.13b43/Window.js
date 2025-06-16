import {FacingDirection} from "./HouseFileCodesLibrary.js";

class Window {
    id = null;
    number = null;
    er= null;
    shgc= null;
    frameHeight= null;
    frameAreaFraction= null;
    edgeOfGlassFraction= null;
    centreOfGlassFraction= null;
    adjacentEnclosedSpace= null;
    label = null;
    construction = {
        energyStar: null,
        type: {idref: null, text: null}
    };
    measurements = {
        height: null,
        width: null,
        headerHeight: null,
        overhangWidth: null,
        tilt: {code: null, value: null, english: null, french: null,}
    };
    shading = {curtain: null, shutterRValue: null};
    facingDirection = {code: null, english: null, french: null};

    xmlOutput() {
        return `<Window number="${this.number}" er="${this.er}" shgc="${this.shgc}" frameHeight="${this.frameHeight}" frameAreaFraction="${this.frameAreaFraction}" edgeOfGlassFraction="${this.edgeOfGlassFraction}" centreOfGlassFraction="${this.centreOfGlassFraction}" adjacentEnclosedSpace="${this.adjacentEnclosedSpace}" id="${this.id}">
                        <Label>${this.label}</Label>
                        <Construction energyStar="${this.construction.energyStar}">
                            <Type idref="${this.construction.type.idref}">${this.construction.type.text}</Type>
                        </Construction>
                        <Measurements height="${this.measurements.height}" width="${this.measurements.width}" headerHeight="${this.measurements.headerHeight}" overhangWidth="${this.measurements.overhangWidth}">
                            <Tilt code="${this.measurements.tilt.code}" value="${this.measurements.tilt.value}">
                                <English>${this.measurements.tilt.english}</English>
                                <French>${this.measurements.tilt.french}</French>
                            </Tilt>
                        </Measurements>
                        <Shading curtain="${this.shading.curtain}" shutterRValue="${this.shading.shutterRValue}" />
                        <FacingDirection code="${this.facingDirection.code}">
                            <English>${this.facingDirection.english}</English>
                            <French>${this.facingDirection.french}</French>
                        </FacingDirection>
                    </Window>`;
    };

    codes = {
        construction: {
            glazingType: [
                {code: "1", english: "Single (SG)", french: "Simple (VS)",
                    coatingsTints:[
                        {code: "0", english: "Clear", french: "Transparent"},
                        {code: "5", english: "Tint", french: "Teinté"},
                        {code: "A", english: "Reflective", french: "Réflecteur"},
                        {code: "B", english: "Reflective + tint", french: "Réflecteur + teinté"}
                    ],
                    fillType: [],
                    spacerType: [],
                    frameMaterial: [
                        {code: "0", english: "Aluminum", french: "Aluminium"},
                        {code: "2", english: "Wood", french: "Bois"}
                    ]
                },
                {code: "2", english: "Double/double with 1 coat", french: "Double/double, 1 couche",
                    coatingsTints:[
                        {code: "0", english: "Clear", french: "Transparent"},
                        {code: "1", english: "Low-E .04 (soft)", french: "Faible E .04 (Doux)"},
                        {code: "2", english: "Low-E .10 (soft)", french: "Faible E .10 (Doux)"},
                        {code: "3", english: "Low-E .20 (hard1)", french: "Faible E .20 (Dur 1)"},
                        {code: "4", english: "Low-E .35 (hard2)", french: "Faible E .35 (Dur 2)"},
                        {code: "5", english: "Tint", french: "Teinté"},
                        {code: "6", english: "Tint + Low-E .04", french: "Teinté + faible E .04"},
                        {code: "7", english: "Tint + Low-E .10", french: "Teinté + faible E .10"},
                        {code: "8", english: "Tint + Low-E .20", french: "Teinté + faible E .20"},
                        {code: "9", english: "Tint + Low-E .35", french: "Teinté +faible E .35"},
                        {code: "A", english: "Reflective", french: "Réflecteur"},
                        {code: "B", english: "Reflective + tint", french: "Réflecteur + teinté"}
                    ],
                    fillType: [
                        {code: "0", english: "13 mm Air", french: "13 mm d'air"},
                        {code: "1", english: "9 mm Air", french: "9 mm d'air"},
                        {code: "2", english: "6 mm Air", french: "6 mm d'air"},
                        {code: "3", english: "13 mm Argon", french: "13 mm d'argon"},
                        {code: "4", english: "9 mm Argon", french: "9 mm d'argon"},
                        {code: "5", english: "6 mm Argon", french: "6 mm d'argon"},
                        {code: "6", english: "9 mm Krypton", french: "9 mm de krypton"}
                    ],
                    spacerType: [
                        {code: "0", english: "Metal", french: "Métal"},
                        {code: "1", english: "Fused glass", french: "Verre fondu"},
                        {code: "2", english: "Insulating", french: "Isolant"}
                    ],
                    frameMaterial: [
                        {code: "0", english: "Aluminum", french: "Aluminium"},
                        {code: "1", english: "Aluminum thermal break", french: "Isol. therm. en aluminium"},
                        {code: "2", english: "Wood", french: "Bois"},
                        {code: "3", english: "Aluminum clad wood", french: "Bois recouvert d'aluminium"},
                        {code: "4", english: "Vinyl", french: "Vinyle"},
                        {code: "5", english: "Reinforced vinyl", french: "Vinyle renforcé"}
                    ]
                },
                {code: "3", english: "Triple/triple with 1 coat", french: "Triple/triple, 1 couche",
                    coatingsTints:[
                        {code: "0", english: "Clear", french: "Transparent"},
                        {code: "1", english: "Low-E .04 (soft)", french: "Faible E .04 (Doux)"},
                        {code: "2", english: "Low-E .10 (soft)", french: "Faible E .10 (Doux)"},
                        {code: "3", english: "Low-E .20 (hard1)", french: "Faible E .20 (Dur 1)"},
                        {code: "4", english: "Low-E .35 (hard2)", french: "Faible E .35 (Dur 2)"},
                        {code: "5", english: "Tint", french: "Teinté"},
                        {code: "6", english: "Tint + Low-E .04", french: "Teinté + faible E .04"},
                        {code: "7", english: "Tint + Low-E .10", french: "Teinté + faible E .10"},
                        {code: "8", english: "Tint + Low-E .20", french: "Teinté + faible E .20"},
                        {code: "9", english: "Tint + Low-E .35", french: "Teinté +faible E .35"},
                        {code: "A", english: "Reflective", french: "Réflecteur"},
                        {code: "B", english: "Reflective + tint", french: "Réflecteur + teinté"}
                    ],
                    fillType: [
                        {code: "0", english: "13 mm Air", french: "13 mm d'air"},
                        {code: "1", english: "9 mm Air", french: "9 mm d'air"},
                        {code: "2", english: "6 mm Air", french: "6 mm d'air"},
                        {code: "3", english: "13 mm Argon", french: "13 mm d'argon"},
                        {code: "4", english: "9 mm Argon", french: "9 mm d'argon"},
                        {code: "5", english: "6 mm Argon", french: "6 mm d'argon"},
                        {code: "6", english: "9 mm Krypton", french: "9 mm de krypton"}
                    ],
                    spacerType: [
                        {code: "0", english: "Metal", french: "Métal"},
                        {code: "1", english: "Fused glass", french: "Verre fondu"},
                        {code: "2", english: "Insulating", french: "Isolant"}
                    ],
                    frameMaterial: [
                        {code: "0", english: "Aluminum", french: "Aluminium"},
                        {code: "1", english: "Aluminum thermal break", french: "Isol. therm. en aluminium"},
                        {code: "2", english: "Wood", french: "Bois"},
                        {code: "3", english: "Aluminum clad wood", french: "Bois recouvert d'aluminium"},
                        {code: "4", english: "Vinyl", french: "Vinyle"},
                        {code: "5", english: "Reinforced vinyl", french: "Vinyle renforcé"}
                    ]
                },
                {code: "4", english: "TG with 2 coatings", french: "Triple, 2 couches",
                    coatingsTints:[
                        {code: "1", english: "Low-E .04 (soft)", french: "Faible E .04 (Doux)"},
                        {code: "2", english: "Low-E .10 (soft)", french: "Faible E .10 (Doux)"},
                        {code: "3", english: "Low-E .20 (hard1)", french: "Faible E .20 (Dur 1)"},
                        {code: "4", english: "Low-E .35 (hard2)", french: "Faible E .35 (Dur 2)"},
                        {code: "6", english: "Tint + Low-E .04", french: "Teinté + faible E .04"},
                        {code: "7", english: "Tint + Low-E .10", french: "Teinté + faible E .10"},
                        {code: "8", english: "Tint + Low-E .20", french: "Teinté + faible E .20"},
                        {code: "9", english: "Tint + Low-E .35", french: "Teinté +faible E .35"}
                    ],
                    fillType: [
                        {code: "0", english: "13 mm Air", french: "13 mm d'air"},
                        {code: "1", english: "9 mm Air", french: "9 mm d'air"},
                        {code: "2", english: "6 mm Air", french: "6 mm d'air"},
                        {code: "3", english: "13 mm Argon", french: "13 mm d'argon"},
                        {code: "4", english: "9 mm Argon", french: "9 mm d'argon"},
                        {code: "5", english: "6 mm Argon", french: "6 mm d'argon"},
                        {code: "6", english: "9 mm Krypton", french: "9 mm de krypton"}
                    ],
                    spacerType: [
                        {code: "0", english: "Metal", french: "Métal"},
                        {code: "1", english: "Fused glass", french: "Verre fondu"},
                        {code: "2", english: "Insulating", french: "Isolant"}
                    ],
                    frameMaterial: [
                        {code: "0", english: "Aluminum", french: "Aluminium"},
                        {code: "1", english: "Aluminum thermal break", french: "Isol. therm. en aluminium"},
                        {code: "2", english: "Wood", french: "Bois"},
                        {code: "3", english: "Aluminum clad wood", french: "Bois recouvert d'aluminium"},
                        {code: "4", english: "Vinyl", french: "Vinyle"},
                        {code: "5", english: "Reinforced vinyl", french: "Vinyle renforcé"}
                    ]
                },
                {code: "5", english: "Double acrylic", french: "Double, acrylique",
                    coatingsTints:[
                        {code: "0", english: "Clear", french: "Transparent"},
                        {code: "5", english: "Tint", french: "Teinté"}
                    ],
                    fillType: [
                        {code: "0", english: "13 mm Air", french: "13 mm d'air"},
                        {code: "1", english: "9 mm Air", french: "9 mm d'air"},
                        {code: "2", english: "6 mm Air", french: "6 mm d'air"},
                        {code: "3", english: "13 mm Argon", french: "13 mm d'argon"},
                        {code: "4", english: "9 mm Argon", french: "9 mm d'argon"},
                        {code: "5", english: "6 mm Argon", french: "6 mm d'argon"},
                        {code: "6", english: "9 mm Krypton", french: "9 mm de krypton"}
                    ],
                    spacerType: [
                        {code: "0", english: "Metal", french: "Métal"},
                        {code: "1", english: "Fused glass", french: "Verre fondu"},
                        {code: "2", english: "Insulating", french: "Isolant"}
                    ],
                    frameMaterial: [
                        {code: "0", english: "Aluminum", french: "Aluminium"},
                        {code: "1", english: "Aluminum thermal break", french: "Isol. therm. en aluminium"},
                        {code: "2", english: "Wood", french: "Bois"},
                        {code: "3", english: "Aluminum clad wood", french: "Bois recouvert d'aluminium"},
                        {code: "4", english: "Vinyl", french: "Vinyle"},
                        {code: "5", english: "Reinforced vinyl", french: "Vinyle renforcé"}
                    ]
                },
                {code: "6", english: "DG + 1 Heat Mirror 66", french: "VD + 1 miroir chaleur 66",
                    coatingsTints:[
                        {code: "0", english: "Clear", french: "Transparent"},
                        {code: "1", english: "Low-E .04 (soft)", french: "Faible E .04 (Doux)"},
                        {code: "2", english: "Low-E .10 (soft)", french: "Faible E .10 (Doux)"},
                        {code: "3", english: "Low-E .20 (hard1)", french: "Faible E .20 (Dur 1)"},
                        {code: "4", english: "Low-E .35 (hard2)", french: "Faible E .35 (Dur 2)"},
                        {code: "5", english: "Tint", french: "Teinté"},
                        {code: "6", english: "Tint + Low-E .04", french: "Teinté + faible E .04"},
                        {code: "7", english: "Tint + Low-E .10", french: "Teinté + faible E .10"},
                        {code: "8", english: "Tint + Low-E .20", french: "Teinté + faible E .20"},
                        {code: "9", english: "Tint + Low-E .35", french: "Teinté +faible E .35"},
                        {code: "A", english: "Reflective", french: "Réflecteur"},
                        {code: "B", english: "Reflective + tint", french: "Réflecteur + teinté"}
                    ],
                    fillType: [
                        {code: "0", english: "13 mm Air", french: "13 mm d'air"},
                        {code: "1", english: "9 mm Air", french: "9 mm d'air"},
                        {code: "2", english: "6 mm Air", french: "6 mm d'air"},
                        {code: "3", english: "13 mm Argon", french: "13 mm d'argon"},
                        {code: "4", english: "9 mm Argon", french: "9 mm d'argon"},
                        {code: "5", english: "6 mm Argon", french: "6 mm d'argon"},
                        {code: "6", english: "9 mm Krypton", french: "9 mm de krypton"}
                    ],
                    spacerType: [
                        {code: "0", english: "Metal", french: "Métal"},
                        {code: "1", english: "Fused glass", french: "Verre fondu"},
                        {code: "2", english: "Insulating", french: "Isolant"}
                    ],
                    frameMaterial: [
                        {code: "0", english: "Aluminum", french: "Aluminium"},
                        {code: "1", english: "Aluminum thermal break", french: "Isol. therm. en aluminium"},
                        {code: "2", english: "Wood", french: "Bois"},
                        {code: "3", english: "Aluminum clad wood", french: "Bois recouvert d'aluminium"},
                        {code: "4", english: "Vinyl", french: "Vinyle"},
                        {code: "5", english: "Reinforced vinyl", french: "Vinyle renforcé"}
                    ]
                },
                {code: "7", english: "DG + 1 Heat Mirror 88", french: "VD + 1 miroir chaleur 88",
                    coatingsTints:[
                        {code: "0", english: "Clear", french: "Transparent"},
                        {code: "1", english: "Low-E .04 (soft)", french: "Faible E .04 (Doux)"},
                        {code: "2", english: "Low-E .10 (soft)", french: "Faible E .10 (Doux)"},
                        {code: "3", english: "Low-E .20 (hard1)", french: "Faible E .20 (Dur 1)"},
                        {code: "4", english: "Low-E .35 (hard2)", french: "Faible E .35 (Dur 2)"},
                        {code: "5", english: "Tint", french: "Teinté"},
                        {code: "6", english: "Tint + Low-E .04", french: "Teinté + faible E .04"},
                        {code: "7", english: "Tint + Low-E .10", french: "Teinté + faible E .10"},
                        {code: "8", english: "Tint + Low-E .20", french: "Teinté + faible E .20"},
                        {code: "9", english: "Tint + Low-E .35", french: "Teinté +faible E .35"},
                        {code: "A", english: "Reflective", french: "Réflecteur"},
                        {code: "B", english: "Reflective + tint", french: "Réflecteur + teinté"}
                    ],
                    fillType: [
                        {code: "0", english: "13 mm Air", french: "13 mm d'air"},
                        {code: "1", english: "9 mm Air", french: "9 mm d'air"},
                        {code: "2", english: "6 mm Air", french: "6 mm d'air"},
                        {code: "3", english: "13 mm Argon", french: "13 mm d'argon"},
                        {code: "4", english: "9 mm Argon", french: "9 mm d'argon"},
                        {code: "5", english: "6 mm Argon", french: "6 mm d'argon"},
                        {code: "6", english: "9 mm Krypton", french: "9 mm de krypton"}
                    ],
                    spacerType: [
                        {code: "0", english: "Metal", french: "Métal"},
                        {code: "1", english: "Fused glass", french: "Verre fondu"},
                        {code: "2", english: "Insulating", french: "Isolant"}
                    ],
                    frameMaterial: [
                        {code: "0", english: "Aluminum", french: "Aluminium"},
                        {code: "1", english: "Aluminum thermal break", french: "Isol. therm. en aluminium"},
                        {code: "2", english: "Wood", french: "Bois"},
                        {code: "3", english: "Aluminum clad wood", french: "Bois recouvert d'aluminium"},
                        {code: "4", english: "Vinyl", french: "Vinyle"},
                        {code: "5", english: "Reinforced vinyl", french: "Vinyle renforcé"}
                    ]
                },
                {code: "8", english: "DG + 2 Heat Mirror 88", french: "VD + 2 miroir chaleur 88",
                    coatingsTints:[
                        {code: "0", english: "Clear", french: "Transparent"},
                        {code: "1", english: "Low-E .04 (soft)", french: "Faible E .04 (Doux)"},
                        {code: "2", english: "Low-E .10 (soft)", french: "Faible E .10 (Doux)"},
                        {code: "3", english: "Low-E .20 (hard1)", french: "Faible E .20 (Dur 1)"},
                        {code: "4", english: "Low-E .35 (hard2)", french: "Faible E .35 (Dur 2)"},
                        {code: "5", english: "Tint", french: "Teinté"},
                        {code: "6", english: "Tint + Low-E .04", french: "Teinté + faible E .04"},
                        {code: "7", english: "Tint + Low-E .10", french: "Teinté + faible E .10"},
                        {code: "8", english: "Tint + Low-E .20", french: "Teinté + faible E .20"},
                        {code: "9", english: "Tint + Low-E .35", french: "Teinté +faible E .35"},
                        {code: "A", english: "Reflective", french: "Réflecteur"},
                        {code: "B", english: "Reflective + tint", french: "Réflecteur + teinté"}
                    ],
                    fillType: [
                        {code: "0", english: "13 mm Air", french: "13 mm d'air"},
                        {code: "1", english: "9 mm Air", french: "9 mm d'air"},
                        {code: "2", english: "6 mm Air", french: "6 mm d'air"},
                        {code: "3", english: "13 mm Argon", french: "13 mm d'argon"},
                        {code: "4", english: "9 mm Argon", french: "9 mm d'argon"},
                        {code: "5", english: "6 mm Argon", french: "6 mm d'argon"},
                        {code: "6", english: "9 mm Krypton", french: "9 mm de krypton"}
                    ],
                    spacerType: [
                        {code: "0", english: "Metal", french: "Métal"},
                        {code: "1", english: "Fused glass", french: "Verre fondu"},
                        {code: "2", english: "Insulating", french: "Isolant"}
                    ],
                    frameMaterial: [
                        {code: "0", english: "Aluminum", french: "Aluminium"},
                        {code: "1", english: "Aluminum thermal break", french: "Isol. therm. en aluminium"},
                        {code: "2", english: "Wood", french: "Bois"},
                        {code: "3", english: "Aluminum clad wood", french: "Bois recouvert d'aluminium"},
                        {code: "4", english: "Vinyl", french: "Vinyle"},
                        {code: "5", english: "Reinforced vinyl", french: "Vinyle renforcé"}
                    ]
                }
            ],
            windowType: [
                {code: "0", english: "Picture", french: "Fixe"},
                {code: "1", english: "Hinged", french: "à battants"},
                {code: "2", english: "Slider with sash", french: "Coulissant"},
                {code: "3", english: "Semi-sash slider", french: "Semi-coulissant"},
                {code: "4", english: "Patio door", french: "Porte patio"},
                {code: "5", english: "Skylight", french: "Puits de lumière"}
            ]
        },
        facingDirection: FacingDirection()
    }
}
