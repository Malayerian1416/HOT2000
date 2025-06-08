class Application {
    name = null;
    version = {major: null, minor: null, build: null, labels: {english: null, french: null}};

    xmlOutput() {
      return `<Application>
        <Name>${this.name}</Name>
        <Version major="${this.version.major}" minor="${this.version.minor}" build="${this.version.build}">
            <Labels>
                <English>${this.version.labels.english}</English>
                <French>${this.version.labels.french}</French>
            </Labels>
        </Version>
    </Application>`;
    };
}
export default Application;
