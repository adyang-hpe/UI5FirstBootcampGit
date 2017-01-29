sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, JSONModel, ResourceModel) {
	"use strict";
	return Controller.extend("sap.ui.bootcamp.controller.App", {
		onInit: function() {
			// Set data model on view
			var oData = {
				field: {
					username: "Username"
				}
			};
			var oModel = new JSONModel(oData);
			this.getView().setModel(oModel);
			
			// set i18n model on view
			var i18nModel = new ResourceModel({
				bundleName: "sap.ui.bootcamp.i18n.i18n"
			});
			this.getView().setModel(i18nModel, "i18n");
		},
		onLoginPress: function() {
			var correctUsername = "myadmin";
			var correctPassword = "p@ssw0rd";
			
			var userField = this.getView().byId("username");
			var passwordField = this.getView().byId("password");
			var username = userField.getValue();
			var password = passwordField.getValue();
			
			if (username && password
			 && username.length >= 6 && username.length <= 8
			 && password.length >= 7 && password.length <= 10
			 && username === correctUsername && password === correctPassword) {
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel().getProperty("/field/username");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
				
				MessageToast.show("Login authentication successful! " + sMsg);
			} else {
				MessageToast.show("Login authentication failed: Invalid Username and Password combination.");
			}
		}
	});
});