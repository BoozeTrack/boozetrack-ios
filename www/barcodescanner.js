/**
 * PhoneGap/Cordova is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) Matt Kane 2010
 * Copyright (c) 2010, IBM Corporation
 */

;(function(){

console.log("barcodescanner.js");

//if (cordova.hasResource("barcodeScanner")) return;

//cordova.addResource("barcodeScanner")

//-------------------------------------------------------------------
var BarcodeScanner = function() {
}
BarcodeScanner.prototype.isBarcodeScannerAvailable = function(response){
    cordova.exec(response, null, "BarcodeScannerPlugin", "isBarcodeScannerAvailable", []);
};

BarcodeScanner.prototype.isBarcodeScannerSetup = function(response){
    cordova.exec(response, null, "BarcodeScannerPlugin", "isBarcodeScannerSetup", []);
};

//-------------------------------------------------------------------
BarcodeScanner.Encode = {
    TEXT_TYPE:     "TEXT_TYPE",
    EMAIL_TYPE:    "EMAIL_TYPE",
    PHONE_TYPE:    "PHONE_TYPE",
    SMS_TYPE:      "SMS_TYPE",
    CONTACT_TYPE:  "CONTACT_TYPE",
    LOCATION_TYPE: "LOCATION_TYPE"
}

//-------------------------------------------------------------------
/*BarcodeScanner.prototype.scan = function(success, fail, options) {
    console.log("scan1");
    function successWrapper(result) {
        result.cancelled = (result.cancelled == 1)
        success.call(null, result)
    }

    if (!fail) { fail = function() {}}

    if (typeof fail != "function")  {
        console.log("BarcodeScanner.scan failure: failure parameter not a function")
        return
    }

    if (typeof success != "function") {
        fail("success callback parameter must be a function")
        return
    }

    if ( null == options )
      options = []
    console.log("scan2");

    return cordova.exec(successWrapper, fail, "org.apache.cordova.barcodeScanner", "scan", options)
}*/

BarcodeScanner.prototype.scan = function(success, fail, options) {
    console.log("test1");
    function successWrapper(result) {
        result.cancelled = (result.cancelled == 1)
        success.call(null, result)
    }

    if (!fail) { fail = function() {}}

    if (typeof fail != "function")  {
        console.log("BarcodeScanner.scan failure: failure parameter not a function")
        return
    }

    if (typeof success != "function") {
        fail("success callback parameter must be a function")
        return
    }

    if ( null == options )
        options = []

        return cordova.exec(successWrapper, fail, "com.cordova.barcodeScanner", "scan", options)
}


//-------------------------------------------------------------------
/*
BarcodeScanner.prototype.encode = function(type, data, success, fail, options) {
    if (!fail) { fail = function() {}}

    if (typeof fail != "function")  {
        console.log("BarcodeScanner.scan failure: failure parameter not a function")
        return
    }

    if (typeof success != "function") {
        fail("success callback parameter must be a function")
        return
    }

    return cordova.exec(success, fail, "org.apache.cordova.barcodeScanner", "encode", [{type: type, data: data, options: options}])
}
*/
BarcodeScanner.prototype.encode = function(type, data, success, fail, options) {
    console.log("test2");
    if (!fail) { fail = function() {}}

    if (typeof fail != "function")  {
        console.log("BarcodeScanner.scan failure: failure parameter not a function")
        return
    }

    if (typeof success != "function") {
        fail("success callback parameter must be a function")
        return
    }

    return cordova.exec(success, fail, "com.cordova.barcodeScanner", "encode", [{type: type, data: data, options: options}])
}

//-------------------------------------------------------------------
cordova.addConstructor(function() {
    console.log("add scanner 1");
    if (!window.plugins) window.plugins = {}

    if (!window.plugins.barcodeScanner) {
        console.log("add scanner 2");
        window.plugins.barcodeScanner = new BarcodeScanner()
    }
    else {
        console.log("Not installing barcodeScanner: window.plugins.barcodeScanner already exists")
    }
})

})();
