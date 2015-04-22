### nativescript-kitchensink

Wanted an extremely simple overview of what NativeScript could do without the complications of building an extensive app.

This is a TabView based application, with features and functions segmented out into categories.  Each tab has a list view of these features that when tapped will open a new Page with examples of that particular feature.

Pull requests are welcomed.  The naming stucture for the example Pages is explained in the comments in index.js. Placeholder files have been placed in the views/ directory so the app won't crash if an uncompleted page is tapped.


#### Prepare the project
Assuming you have NativeScript CLI installed, clone the repo and run

	tns platform add ios
	tns platform add android

This will prepare the project for both ios and android, as the repo doesn't track the generated files.
