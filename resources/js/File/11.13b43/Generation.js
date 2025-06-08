class Generation {
    id= null;
    solarReady= null;
    photovoltaicCapacity= null;
    batteryStorage= null;
    label = null;

    xmlOutput() {
        return `<Generation solarReady="${this.solarReady}" PhotovoltaicCapacity="${this.photovoltaicCapacity}" batteryStorage="${this.batteryStorage}" id="${this.id}">
            <Label>${this.label}</Label>
        </Generation>`;
    }
}
export default Generation;
