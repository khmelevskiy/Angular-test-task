'use strict';

const SPAApp = angular.module('SPAApp', ["ui.router", "ngAnimate", "ngMaterial", "ngMessages","angular.filter"]);
SPAApp.config(($stateProvider, $urlRouterProvider) => {
    $urlRouterProvider.otherwise('/objects/list');
    $stateProvider
        .state('objects.list', {
            url: "/objects/list",
            views: {
                "viewListObj": {
                    templateUrl: "views/partials/listObj.html"
                }
            }
        })
        .state('infoObj', {
            url: "/objects/:id",
            views: {
                "viewInfoObj": {
                    templateUrl: "views/partials/informationObj.html"
                }
            }
        })
        .state('newObj', {
            url: "/objects/new",
            views: {
                "viewNewObj": {
                    templateUrl: "views/partials/newObj.html"
                }
            }
        })
});

SPAApp.controller('newObject', ($scope) => {
    $scope.obj = {
        header: "",
        description: "",
        address: "",
        category: ""
    };
});

SPAApp.controller('btnNewObj', ($scope) => {
    $scope.title1 = 'Button';
});

SPAApp.controller('AppCtrl', ($scope) => {
    $scope.title1 = 'Button';
});

SPAApp.controller('NavBar', ($scope) => {
    $scope.currentNavItem = 'listObj';
});

SPAApp.controller('tagsCtrl', ctrlTags);
function ctrlTags($timeout, $q) {
    var self = this;
    //self.readonly = false;
    self.tags = ['ячсм', 'фыва', 'йцук'];
    self.editableTags = angular.copy(self.tags);
};

SPAApp.controller('listObjects', ($scope) => {
    $scope.books = [
        {title: 'The DaVinci Code'},
        {title: 'The Great Gatsby'},
        {title: 'Angels & Demons'},
        {title: 'The Lost Symbol'},
        {title: 'Old Man\'s War'}
    ];
});
