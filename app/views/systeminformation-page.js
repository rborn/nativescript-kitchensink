var platformModule = require("platform");

var observableModule = require("data/observable");
var source = new observableModule.Observable();

// set our data in the source
source.set("deviceModel", platformModule.device.model);
source.set("deviceType", platformModule.device.deviceType);
source.set("deviceOS", platformModule.device.os);
source.set("osVersion", platformModule.device.osVersion);
source.set("sdkVersion", platformModule.device.sdkVersion);
source.set("screenWidth", platformModule.screen.mainScreen.widthPixels);
source.set("screenHeight", platformModule.screen.mainScreen.heightPixels);
source.set("screenScale", platformModule.screen.mainScreen.scale);
// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = source;
}
exports.pageLoaded = pageLoaded;