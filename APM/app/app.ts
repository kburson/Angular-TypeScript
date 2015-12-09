module app {
    console.log("define module -- 'productManagement'");
    angular.module("productManagement", [
        "common.services",
        "productResourceMock"]);
}