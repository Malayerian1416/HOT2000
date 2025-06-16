class NaturalAirInfiltration {
    id = null;
    label = null;
    specifications = {
        house: {volume: null, includeCrawlspaceVolume: null, airTightnessTest: {code: null, english: null, french: null},},
        blowerTest: {
            airChangeRate: null,
            leakageArea: null,
            isCgsbTest: null,
            guarded: null,
            isCalculated: null,
            pressure: {code: null, english: null, french: null}
        },
        buildingSite: {highestCeiling: null, terrain: {code: null, english: null, french: null}},
        localShielding: {
            walls: {code: null, english: null, french: null},
            flue: {code: null, english: null, french: null}
        },
        exhaustDevicesTest: {result: null, testStatus: {code: null, english: null, french: null}},
        commonSurfaceFloor: {surfaceFloor: null},
        commonSurfaceWall: {surfaceWall: null},
        commonSurfaceCeiling: {surfaceCeiling: null},
        commonSurfaceArea: {surfacearea: null}
    };
    otherFactors = {
        weatherStation: {anemometerHeight: null, terrain: {code: null, english: null, french: null}},
        leakageFractions: {useDefaults: null, ceilings: null, walls: null, floors: null}
    };
    airLeakageTestData = {
        hasCgsbConditions: null,
        outsideTemperature: null,
        barometricPressure: null,
        testType: {code: null, english: null, french: null},
        testData: {
            test: {
                rank: null,
                equipment: null,
                insideTemperature: null,
                zoneHeatedVolume: null,
                manometer: null,
                pressure: {static: {initial: null, final: null}},
                fanType: {code: null, text: null},
                data: []
            }
        }
    };

    xmlOutput() {
        const TestData = async () => {
            let result = "";
            await this.airLeakageTestData.testData.test.data.forEach((testData, index) => {
                result += `<DataPoint rank="${++index}" housePressure="${testData['housePressure']}" fanPressure="${testData['fanPressure']}">
                                <FlowRanges code="${testData['flowRanges']['code']}">${testData['flowRanges']['ring']}</FlowRanges>
                            </DataPoint>`;
            });
            return result;
        }
        return `<NaturalAirInfiltration id="${this.id}">
            <Label>${this.label}</Label>
            <Specifications>
                <House volume="${this.specifications.house.volume}" includeCrawlspaceVolume="${this.specifications.house.includeCrawlspaceVolume}">
                    <AirTightnessTest code="${this.specifications.house.airTightnessTest.code}">
                        <English>${this.specifications.house.airTightnessTest.english}</English>
                        <French>${this.specifications.house.airTightnessTest.french}</French>
                    </AirTightnessTest>
                </House>
                <BlowerTest airChangeRate="${this.specifications.blowerTest.airChangeRate}" leakageArea="${this.specifications.blowerTest.leakageArea}" isCgsbTest="${this.specifications.blowerTest.isCgsbTest}" guarded="${this.specifications.blowerTest.guarded}" isCalculated="${this.specifications.blowerTest.isCalculated}">
                    <Pressure code="${this.specifications.blowerTest.pressure.code}">
                        <English>${this.specifications.blowerTest.pressure.english}</English>
                        <French>${this.specifications.blowerTest.pressure.french}</French>
                    </Pressure>
                </BlowerTest>
                <BuildingSite highestCeiling="${this.specifications.buildingSite.highestCeiling}">
                    <Terrain code="${this.specifications.buildingSite.terrain.code}">
                        <English>${this.specifications.buildingSite.terrain.english}</English>
                        <French>${this.specifications.buildingSite.terrain.french}</French>
                    </Terrain>
                </BuildingSite>
                <LocalShielding>
                    <Walls code="${this.specifications.localShielding.walls.code}">
                        <English>${this.specifications.localShielding.walls.english}</English>
                        <French>${this.specifications.localShielding.walls.french}</French>
                    </Walls>
                    <Flue code="${this.specifications.localShielding.flue.code}">
                        <English>${this.specifications.localShielding.flue.english}</English>
                        <French>${this.specifications.localShielding.flue.french}</French>
                    </Flue>
                </LocalShielding>
                <ExhaustDevicesTest result="${this.specifications.exhaustDevicesTest.result}">
                    <TestStatus code="${this.specifications.exhaustDevicesTest.testStatus.code}">
                        <English>${this.specifications.exhaustDevicesTest.testStatus.english}</English>
                        <French>${this.specifications.exhaustDevicesTest.testStatus.french}</French>
                    </TestStatus>
                </ExhaustDevicesTest>
                <CommonSurfaceFloor surfaceFloor="${this.specifications.commonSurfaceFloor.surfaceFloor}" />
                <CommonSurfaceWall surfaceWall="${this.specifications.commonSurfaceWall.surfaceWall}" />
                <CommonSurfaceCeiling surfaceCeiling="${this.specifications.commonSurfaceCeiling.surfaceCeiling}" />
                <CommonSurfaceArea surfacearea="${this.specifications.commonSurfaceArea.surfacearea}" />
            </Specifications>
            <OtherFactors>
                <WeatherStation anemometerHeight="${this.otherFactors.weatherStation.anemometerHeight}">
                    <Terrain code="${this.otherFactors.weatherStation.terrain.code}">
                        <English>${this.otherFactors.weatherStation.terrain.english}</English>
                        <French>${this.otherFactors.weatherStation.terrain.french}</French>
                    </Terrain>
                </WeatherStation>
                <LeakageFractions useDefaults="${this.otherFactors.leakageFractions.useDefaults}" ceilings="${this.otherFactors.leakageFractions.ceilings}" walls="${this.otherFactors.leakageFractions.walls}" floors="${this.otherFactors.leakageFractions.floors}" />
            </OtherFactors>
            <AirLeakageTestData hasCgsbConditions="${this.airLeakageTestData.hasCgsbConditions}" outsideTemperature="${this.airLeakageTestData.outsideTemperature}" barometricPressure="${this.airLeakageTestData.barometricPressure}">
                <TestType code="${this.airLeakageTestData.testType.code}">
                    <English>${this.airLeakageTestData.testType.english}</English>
                    <French>${this.airLeakageTestData.testType.french}</French>
                </TestType>
                <TestData>
                    <Test rank="${this.airLeakageTestData.testData.test.rank}" equipment="${this.airLeakageTestData.testData.test.equipment}" insideTemperature="${this.airLeakageTestData.testData.test.insideTemperature}" zoneHeatedVolume="${this.airLeakageTestData.testData.test.zoneHeatedVolume}">
                        <Manometer>${this.airLeakageTestData.testData.test.manometer}</Manometer>
                        <Pressure>
                            <Static initial="${this.airLeakageTestData.testData.test.pressure.static.initial}" final="${this.airLeakageTestData.testData.test.pressure.static.final}" />
                        </Pressure>
                        <FanType code="${this.airLeakageTestData.testData.test.fanType.code}">${this.airLeakageTestData.testData.test.fanType.text}</FanType>
                        <Data>
                            ${TestData}
                        </Data>
                    </Test>
                </TestData>
            </AirLeakageTestData>
        </NaturalAirInfiltration>`;
    };

    codes = {
        airTightnessType: [
            {code: "x", english: "Blower door test values", french: "Valeurs d'essai de dépressurisation"},
            {code: "A", english: "Loose (10.35 ACH @50 Pa)", french: "Faible (10.35 CAH @50 Pa)"},
            {code: "B", english: "Average (4.55 ACH @ 50 Pa)", french: "Moyenne (4.55 CAH @ 50 Pa)"},
            {code: "C", english: "Present (3.57 ACH @ 50 Pa)", french: "Construction récente (3.57 CAH @ 50 Pa)"},
            {code: "D", english: "Energy tight (1.5 ACH @ 50 Pa)", french: "Très étanche (1.5 CAH @ 50 Pa)"}
        ],
        specificationTerrain: [
            {code: "1", english: "Open sea, fetch > 5 km", french: "Près de la mer > 5 km"},
            {code: "2", english: "Mud flats, no vegetation", french: "Aucune végétation, slikke"},
            {code: "3", english: "Open flat terrain, grass", french: "Prairie à l'herbe"},
            {code: "4", english: "Low crops", french: "Cultures basses"},
            {code: "5", english: "High crops, scattered obstacles", french: "Culture haute, obstacles"},
            {code: "6", english: "Parkland, bushes", french: "Parc, boisés"},
            {code: "7", english: "Suburban, forest", french: "Banlieue, forêt"},
            {code: "8", english: "City centre", french: "Centre-ville"}
        ],
        depressurizationTestStatus: [
            {code: "1", english: "Not applicable", french: "Non applicable"},
            {code: "2", english: "Not possible to perform test", french: "Impossible d'effectuer le test"},
            {code: "3", english: "Test result", french: "Résultat du test"}
        ],
        localShielding: {
            walls: [
                {code: "1", english: "None", french: "Aucun abri"},
                {code: "2", english: "Light", french: "Un peu d'abri"},
                {code: "3", english: "Heavy", french: "Assez d'abri"},
                {code: "4", english: "Very heavy", french: "Beaucoup d'abri"},
                {code: "5", english: "Complete (by large buildings)", french: "Abri complet (gros bâtiments)"}
            ],
            flue: [
                {code: "1", english: "None", french: "Aucun abri"},
                {code: "2", english: "Light", french: "Un peu d'abri"},
                {code: "3", english: "Heavy", french: "Assez d'abri"},
                {code: "4", english: "Very heavy", french: "Beaucoup d'abri"},
                {code: "5", english: "Complete (by large buildings)", french: "Abri complet (gros bâtiments)"}
            ],
        },
        otherFactorTerrain: [
            {code: "1", english: "Open sea, fetch > 5 km", french: "Près de la mer > 5 km"},
            {code: "2", english: "Mud flats, no vegetation", french: "Aucune végétation, slikke"},
            {code: "3", english: "Open flat terrain, grass", french: "Prairie à l'herbe"},
            {code: "4", english: "Low crops", french: "Cultures basses"},
            {code: "5", english: "High crops, scattered obstacles", french: "Culture haute, obstacles"},
            {code: "6", english: "Parkland, bushes", french: "Parc, boisés"},
            {code: "7", english: "Suburban, forest", french: "Banlieue, forêt"},
            {code: "8", english: "City centre", french: "Centre-ville"}
        ],
        leakageFraction: ["Use defaults", "User specified"],
        testType: [
            {code: "0", english: "1 blower - whole house", french: "1 infiltromètre - maison complète"},
            {code: "1", english: "2 blowers - whole house", french: "2 infiltromètres - maison complète"},
            {code: "2", english: "1 blower - Duplex", french: "1 infiltromètre - duplex"},
            {code: "3", english: "1 blower - Triplex", french: "1 infiltromètre - triplex"},
            {code: "4", english: "2 blowers - Triplex", french: "2 infiltromètres - triplex"}
        ],
        fanType: [
            {code: "7", text: "Minneapolis Duct Blaster A", flowRanges:
                    [
                        {code: "0", text: "Open"},
                        {code: "1", text: "Ring 1"},
                        {code: "2", text: "Ring 2"},
                        {code: "3", text: "Ring 3"}
                    ]
            },
            {code: "8", text: "Minneapolis Duct Blaster B", flowRanges:
                    [
                        {code: "0", text: "Open"},
                        {code: "1", text: "Ring 1"},
                        {code: "2", text: "Ring 2"},
                        {code: "3", text: "Ring 3"}
                    ]
            },
            {code: "9", text: "Minneapolis Model 2", flowRanges:
                    [
                        {code: "0", text: "Open"},
                        {code: "1", text: "0 plugged"},
                        {code: "2", text: "4 plugged"},
                        {code: "3", text: "7 plugged"}
                    ]
            },
            {code: "10", text: "Minneapolis Model 3", flowRanges:
                    [
                        {code: "0", text: "Open"},
                        {code: "1", text: "A"},
                        {code: "2", text: "B"},
                        {code: "3", text: "C"},
                        {code: "4", text: "D"},
                        {code: "5", text: "E"}
                    ]
            },
            {code: "11", text: "Retrotec DU200", flowRanges:
                    [
                        {code: "0", text: "Open"},
                        {code: "1", text: "Mid"},
                        {code: "2", text: "Low"}
                    ]
            },
            {code: "12", text: "Retrotec 600/700", flowRanges:
                    [
                        {code: "0", text: "Open(20)"},
                        {code: "1", text: "12"},
                        {code: "2", text: "8"},
                        {code: "3", text: "6"},
                        {code: "4", text: "2"},
                        {code: "5", text: "1"}
                    ]
            },
            {code: "13", text: "Retrotec 800/900", flowRanges:
                    [
                        {code: "0", text: "18F"},
                        {code: "1", text: "18R"},
                        {code: "2", text: "9"},
                        {code: "3", text: "5"},
                        {code: "4", text: "3"},
                        {code: "5", text: "1.4"},
                        {code: "6", text: "1.3"},
                        {code: "7", text: "1.2"},
                        {code: "8", text: "1.1"},
                        {code: "9", text: "0.1"}
                    ]
            },
            {code: "14", text: "Retrotec 1000/2000/3000", flowRanges:
                    [
                        {code: "0", text: "Open"},
                        {code: "1", text: "A"},
                        {code: "2", text: "B"},
                        {code: "3", text: "C8"},
                        {code: "4", text: "C6"},
                        {code: "5", text: "C4"},
                        {code: "6", text: "C2"},
                        {code: "7", text: "C1"},
                        {code: "8", text: "L4"},
                        {code: "9", text: "L2"},
                        {code: "10", text: "L1"}
                    ]
            },
            {code: "15", text: "Retrotec 300", flowRanges:
                    [
                        {code: "0", text: "Open"},
                        {code: "1", text: "102"},
                        {code: "2", text: "74"},
                        {code: "3", text: "47"},
                        {code: "4", text: "29"},
                        {code: "5", text: "18"},
                        {code: "6", text: "11"},
                        {code: "7", text: "7"}
                    ]
            },
            {code: "16", text: "Retrotec 5000", flowRanges:
                    [
                        {code: "0", text: "Open"},
                        {code: "1", text: "Ring A"},
                        {code: "2", text: "B8"},
                        {code: "3", text: "B4"},
                        {code: "4", text: "B2"},
                        {code: "5", text: "B1"},
                        {code: "6", text: "B74"},
                        {code: "7", text: "B47"},
                        {code: "8", text: "B29"}
                    ]
            },
            {code: "17", text: "Retrotec 6000", flowRanges:
                    [
                        {code: "0", text: "Open"},
                        {code: "1", text: "Ring A"},
                        {code: "2", text: "B8"},
                        {code: "3", text: "B4"},
                        {code: "4", text: "B2"},
                        {code: "5", text: "B1"},
                        {code: "6", text: "B74"},
                        {code: "7", text: "B47"},
                        {code: "8", text: "B29"}
                    ]
            }
        ]

    }
}
export default NaturalAirInfiltration;
