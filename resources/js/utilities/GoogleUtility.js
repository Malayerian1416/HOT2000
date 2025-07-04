import {Loader} from "@googlemaps/js-api-loader";

class GoogleUtility {
    constructor(apiKey = null) {
        this.apiKey = apiKey || import.meta.env.VITE_GOOGLE_MAP_API_KEY;
        this.loader = new Loader({
            apiKey: this.apiKey,
            version: "weekly",
        });
    }

    async GeoLocation(address) {
        let addressComponents = {streetNumber: "", unit: "", streetAddress: "", city: "", region: "", postalCode: ""};
        await this.loader.importLibrary("geocoding").then(async () => {
            const geocoder = new google.maps.Geocoder();
            return geocoder.geocode({ address: address }, (results, status) => {
                if (status === "OK") {
                    const data = Object.entries(results[0]["address_components"]);
                    data.forEach(element => {
                        element[1]["types"][0] === "street_number" ? addressComponents.streetNumber = element[1]["long_name"] : "";
                        element[1]["types"][0] === "subpremise" ? addressComponents.unit = element[1]["long_name"] : "";
                        element[1]["types"][0] === "route" ? addressComponents.streetAddress = element[1]["long_name"] : "";
                        element[1]["types"][0] === "locality" ? addressComponents.city = element[1]["long_name"] : "";
                        element[1]["types"][0] === "administrative_area_level_1" ? addressComponents.region = element[1]["long_name"] : "";
                        element[1]["types"][0] === "postal_code" ? addressComponents.postalCode = element[1]["long_name"] : "";
                    });
                } else {
                    console.error("Geocode was not successful for the following reason: " + status);
                }
            })
        });
        return addressComponents;
    };
}

export default GoogleUtility;
