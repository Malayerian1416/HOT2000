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
    }
}
export default NaturalAirInfiltration;
