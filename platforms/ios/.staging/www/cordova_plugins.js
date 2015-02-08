cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/uk.co.workingedge.phonegap.plugin.LaunchNavigator/www/ios/launchnavigator.js",
        "id": "uk.co.workingedge.phonegap.plugin.LaunchNavigator.LaunchNavigator",
        "clobbers": [
            "launchnavigator"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.plugin/www/phonenavigator.js",
        "id": "org.apache.cordova.plugin.PhoneNavigator",
        "clobbers": [
            "window.PhoneNavigator"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "uk.co.workingedge.phonegap.plugin.LaunchNavigator": "2.0.0",
    "org.apache.cordova.plugin": "0.1.0"
}
// BOTTOM OF METADATA
});