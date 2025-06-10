import Version from "./Version.js";
import Application from "./Application.js";
import ProgramInformation from "./ProgramInformation.js";
import House from "./House.js";

class HouseFile {
    lang = null;
    uiUnits = null;
    version = new Version();
    application = new Application();
    programInformation = new ProgramInformation();
    house = new House();
}
export default HouseFile;
