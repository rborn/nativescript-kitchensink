var view = require("ui/core/view");
var frames = require("ui/frame");

var observableModule = require("data/observable");
var source = new observableModule.Observable();

// array of layout menu items
var layoutItems = [{
    title: "Page"
}, {
    title: "TabView"
}, {
    title: "ScrollView"
}, {
    title: "StackLayout"
}, {
    title: "GridLayout"
}, {
    title: "WrapLayout"
}, {
    title: "AbsoluteLayout"
}];

// array of widget menu items
var widgetItems = [{
    title: "Button"
}, {
    title: "Label"
}, {
    title: "TextField"
}, {
    title: "SearchBar"
}, {
    title: "Switch"
}, {
    title: "Slider"
}, {
    title: "Progress"
}, {
    title: "ActivityIndicator"
}, {
    title: "Image"
}, {
    title: "ListView"
}, {
    title: "WebView"
}, {
    title: "Dialogs"
}];

// array of platform menu items
var platformItems = [{
    title: "Gestures"
}, {
    title: "Locations"
}, {
    title: "Camera"
}, {
    title: "File System"
}, {
    title: "System Information"
}];

// set our lists in the source
source.set("layoutItems", layoutItems);
source.set("widgetItems", widgetItems);
source.set("platformItems", platformItems);

// Event handler for Page "loaded" event attached in main-page.xml
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = source;
}
exports.pageLoaded = pageLoaded;

// event handler for our listviews
function listViewItemTap(args) {
    // in a proper app you would use the index to key into your array, 
    // but alas, we are cheating to use a single event listener here (not best practice, demo only)
    // take the lowercase of our label text, prepend location of our views, append -page
    var targetView = "app/views/" + args.view.text.toLowerCase() + "-page";
    // strip out spaces if ther are any
    targetView = targetView.replace(/\s+/g, '');
    console.log(targetView);
    // open the view 
    frames.topmost().navigate({
        moduleName: targetView
    });

}

exports.listViewItemTap = listViewItemTap;