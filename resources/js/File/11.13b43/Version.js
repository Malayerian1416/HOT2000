class Version {
    major = null;
    minor = null;
    labels = {english: null, french: null};

    xmlOutput() {
        return `<Version major="${this.major}" minor="${this.minor}">
        <Labels>
            <English>${this.labels.english}</English>
            <French>${this.labels.french}</French>
        </Labels>
    </Version>`;
    }
}
export default Version;
