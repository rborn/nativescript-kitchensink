var dialogs = require("ui/dialogs");

function openActionDialog(args) {
    dialogs.action({
        message: "Your message",
        cancelButtonText: "Cancel text",
        actions: ["Option1", "Option2"]
    }).then(function (result) {
        console.log("Dialog result: " + result)
    });
}
exports.openActionDialog = openActionDialog;

function openConfirmDialog(args) {
    dialogs.confirm({
        title: "Your title",
        message: "Your message",
        okButtonText: "Your button text",
        cancelButtonText: "Cancel text",
        neutralButtonText: "Neutral text"
    }).then(function (result) {
        // result argument is boolean
        console.log("Dialog result: " + result);
    });
}
exports.openConfirmDialog = openConfirmDialog;

function openAlertDialog(args) {
    dialogs.alert({
        title: "Your title",
        message: "Your message",
        okButtonText: "Your button text"
    }).then(function () {
        console.log("Dialog closed!");
    });
}
exports.openAlertDialog = openAlertDialog;

function openLoginDialog(args) {
    dialogs.login({
        title: "Your title",
        message: "Your message",
        okButtonText: "Your button text",
        cancelButtonText: "Cancel text",
        neutralButtonText: "Neutral text",
        userName: "User name",
        password: "Password"
    }).then(function (r) {
        console.log("Dialog result: " + r.result + ", user: " + r.userName + ", pwd: " + r.password);
    });
}
exports.openLoginDialog = openLoginDialog;

function openPromptDialog(args) {
    dialogs.prompt({
        title: "Your title",
        message: "Your message",
        okButtonText: "Your button text",
        cancelButtonText: "Cancel text",
        neutralButtonText: "Neutral text",
        defaultText: "Default text",
        inputType: dialogs.inputType.password
    }).then(function (r) {
        console.log("Dialog result: " + r.result + ", text: " + r.text);
    });
}
exports.openPromptDialog = openPromptDialog;