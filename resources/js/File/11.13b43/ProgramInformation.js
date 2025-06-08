class ProgramInformation {
    mixed = null;
    weather = {
        depthOfFrost: null,
        heatingDegreeDay: null,
        library: null,
        region: {code: null, english: null, french: null},
        location: {code: null, english: null, french: null}
    };
    file = {
        evaluationDate: null,
        identification: null,
        previousFileId: null,
        applicationNumber: null,
        enrollmentId: null,
        ownership: {code: null, english: null, french: null},
        ownerOccupied: {exist: null, code: null, english: null, french: null},
        taxNumber: null,
        enteredBy: null,
        userTelephone: null,
        userExtension: null,
        companyTelephone: null,
        companyExtension: null,
        company: null,
        builderName: null,
        homeownerAuthorizationId: null
    };
    client = {
        name: {first: null, last: null},
        telephone: null,
        streetAddress : {street: null, city: null, province: null, postalCode: null},
        mailingAddress : {name: null, street: null, city: null, province: null, postalCode: null},
    };
    justifications = {
        nameplateEfficiency: null,
        combustionTestEfficiency: null,
        heatingCorrection: null,
        achCorrection: null,
        twoBlowerDoors: null,
        over18Months: null,
        possessionDate: {selected: null, date: null},
        heatingVolumeDecrease: {selected: null, text: null},
        correctedInsulation: {
            ceiling: {selected: null, text: null},
            walls: {selected: null, text: null},
            basement: {selected: null, text: null}
        },
        other: {selected: null, text: null},
        energyStar: {code: null, english: null, french: null}
    };
    information = [];
    xmlOutput() {
        const PreviousFileId = this.file.previousFileId ? `<PreviousFileId>${this.file.previousFileId}</PreviousFileId>` : `<PreviousFileId />`;
        const ApplicationNumber = this.file.applicationNumber ? `<ApplicationNumber>${this.file.applicationNumber}</ApplicationNumber>` : `<ApplicationNumber />`;
        const EnrollmentId = this.file.enrollmentId ? `<EnrollmentId>${this.file.enrollmentId}</EnrollmentId>` : `<EnrollmentId />`;
        const OwnerOccupied = this.file.ownerOccupied.code ? `<OwnerOccupied code="${this.file.ownerOccupied.code}"><English>${this.file.ownerOccupied.english}</English><French>${this.file.ownerOccupied.french}</French></OwnerOccupied>` : `<OwnerOccupied code="" />`;
        const UserExtension = this.file.userExtension ? `<UserExtension>${this.file.userExtension}</UserExtension>` : `<UserExtension />`;
        const CompanyExtension = this.file.companyExtension ? `<CompanyExtension>${this.file.companyExtension}</CompanyExtension>` : `<CompanyExtension />`;
        const BuilderName = this.file.builderName ? `<BuilderName>${this.file.builderName}</BuilderName>` : `<BuilderName />`;
        const HomeownerAuthorizationId = this.file.homeownerAuthorizationId ? `<HomeownerAuthorizationId>${this.file.homeownerAuthorizationId}</HomeownerAuthorizationId>` : `<HomeownerAuthorizationId />`;
        const PossessionDate = this.justifications.possessionDate.selected ? `<PossessionDate selected="${this.justifications.possessionDate.selected}">${this.justifications.possessionDate.date}</PossessionDate>` : `<PossessionDate selected="${this.justifications.possessionDate.selected}" />`;
        const HeatingVolumeDecrease = this.justifications.heatingVolumeDecrease.selected ? `<HeatingVolumeDecrease selected="${this.justifications.heatingVolumeDecrease.selected}">${this.justifications.heatingVolumeDecrease.text}</HeatingVolumeDecrease>` : `<HeatingVolumeDecrease selected="${this.justifications.heatingVolumeDecrease.selected}" />`;
        const CorrectedInsulation = {ceiling: null, walls: null, basement: null};
        CorrectedInsulation.ceiling = this.justifications.correctedInsulation.ceiling.selected ?
            `<Ceilings selected="${this.justifications.correctedInsulation.ceiling.selected}">${this.justifications.correctedInsulation.ceiling.text}</Ceilings>` : `<Ceilings selected="${this.justifications.correctedInsulation.ceiling.selected}" />`;
        CorrectedInsulation.walls = this.justifications.correctedInsulation.walls.selected ?
            `<Walls selected="${this.justifications.correctedInsulation.walls.selected}">${this.justifications.correctedInsulation.walls.text}</Walls>` : `<Walls selected="${this.justifications.correctedInsulation.walls.selected}" />`;
        CorrectedInsulation.basement = this.justifications.correctedInsulation.basement.selected ?
            `<Basement selected="${this.justifications.correctedInsulation.basement.selected}">${this.justifications.correctedInsulation.basement.text}</Basement>` : `<Basement selected="${this.justifications.correctedInsulation.basement.selected}" />`;
        const Other = this.justifications.other ? `<Other selected="${this.justifications.other.selected}">${this.justifications.other.text}</Other>` : `<Other selected="${this.justifications.other.selected}" />`;
        const Information = this.information.length ? async () => {
            let result = "<Information>";
            await this.information.forEach((information) => {
                result += `<Info code="${information.code}">${information.text}</Info>`;
            });
            result += "</Information>";
        } : null;

        return `<ProgramInformation mixed="${this.mixed}">
        <Weather depthOfFrost="${this.weather.depthOfFrost}" heatingDegreeDay="${this.weather.heatingDegreeDay}" library="${this.weather.library}">
            <Region code="${this.weather.region.code}">
                <English>${this.weather.region.english}</English>
                <French>${this.weather.region.french}</French>
            </Region>
            <Location code="${this.weather.location.code}">
                <English>${this.weather.location.english}</English>
                <French>${this.weather.location.french}</French>
            </Location>
        </Weather>
        <File evaluationDate="${this.file.evaluationDate}">
            <Identification>${this.file.identification}</Identification>
            ${PreviousFileId}
            ${ApplicationNumber}
            ${EnrollmentId}
            <Ownership code="${this.file.ownership.code}">
                <English>${this.file.ownerOccupied.english}</English>
                <French>${this.file.ownerOccupied.french}</French>
            </Ownership>
            ${OwnerOccupied}
            <TaxNumber>${this.file.taxNumber}</TaxNumber>
            <EnteredBy>${this.file.enteredBy}</EnteredBy>
            <UserTelephone>${this.file.userTelephone}</UserTelephone>
            ${UserExtension}
            <CompanyTelephone>${this.file.companyTelephone}</CompanyTelephone>
            ${CompanyExtension}
            <Company>${this.file.company}</Company>
            ${BuilderName}
            ${HomeownerAuthorizationId}
        </File>
        <Client>
            <Name>
                <First>${this.client.name.first}</First>
                <Last>${this.client.name.last}</Last>
            </Name>
            <Telephone>${this.client.telephone}</Telephone>
            <StreetAddress>
                <Street>${this.client.streetAddress.street}</Street>
                <City>${this.client.streetAddress.city}</City>
                <Province>${this.client.streetAddress.province}</Province>
                <PostalCode>${this.client.streetAddress.postalCode}</PostalCode>
            </StreetAddress>
            <MailingAddress>
                <Name>${this.client.mailingAddress.name}</Name>
                <Street>${this.client.mailingAddress.street}</Street>
                <City>${this.client.mailingAddress.city}</City>
                <Province>${this.client.mailingAddress.province}</Province>
                <PostalCode>${this.client.mailingAddress.postalCode}</PostalCode>
            </MailingAddress>
        </Client>
        <Justifications nameplateEfficiency="${this.justifications.nameplateEfficiency}" combustionTestEfficiency="${this.justifications.combustionTestEfficiency}" heatingCorrection="${this.justifications.heatingCorrection}" achCorrection="${this.justifications.achCorrection}" twoBlowerDoors="${this.justifications.twoBlowerDoors}" over18Months="${this.justifications.over18Months}">
            ${PossessionDate}
            ${HeatingVolumeDecrease}
            <CorrectedInsulation>
                ${CorrectedInsulation.ceiling}
                ${CorrectedInsulation.walls}
                ${CorrectedInsulation.basement}
            </CorrectedInsulation>
            ${Other}
            <EnergyStar code="${this.justifications.energyStar.code}">
                <English>${this.justifications.energyStar.english}</English>
                <French>${this.justifications.energyStar.french}</French>
            </EnergyStar>
        </Justifications>
        ${Information}
    </ProgramInformation>`;
    }
}
export default ProgramInformation;
