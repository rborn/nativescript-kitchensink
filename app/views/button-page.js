var frameModule = require("ui/frame");
var view = require("ui/core/view");
var topmost = frameModule.topmost();

function onTap(args){
	var btn = args.object;
	btn.count++;
	btn.text = "You tapped me " + btn.count + (btn.count > 1 ? " times" : " time");
}

function pageLoaded(args) {
	var page = args.object;

	page.addCss("#jsStyledButton { color: red }");

	var tapButton = view.getViewById(page, "tapButton");
	tapButton.text = "TAP ME!";
	tapButton.count = 0;

	tapButton.on("tap", onTap);

}

function goBack() {
	topmost.goBack();
}

exports.pageLoaded = pageLoaded;
exports.goBack = goBack;
