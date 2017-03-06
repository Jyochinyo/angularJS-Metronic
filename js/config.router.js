/* Setup Rounting For All Pages */
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    // Redirect any unmatched url
    $urlRouterProvider.otherwise("/cic/dashboard.html");  
    
    $stateProvider
        .state('cic', {
            abstract: true,
            url: '/cic',
            templateUrl: 'tpl/app.html'
        })

        // Dashboard
        .state('cic.dashboard', {
            url: "/dashboard.html",
            templateUrl: "views/dashboard.html",            
            data: {pageTitle: 'Admin Dashboard Template'},
            controller: "DashboardController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [
                            'assets/global/plugins/morris/morris.css',                            
                            'assets/global/plugins/morris/morris.min.js',
                            'assets/global/plugins/morris/raphael-min.js',                            
                            'assets/global/plugins/jquery.sparkline.min.js',
                            'assets/pages/scripts/dashboard.min.js',
                            'js/controllers/DashboardController.js',
                        ] 
                    });
                }]
            }
        })

        // AngularJS plugins
        .state('cic.fileupload', {
            url: "/file_upload.html",
            templateUrl: "views/file_upload.html",
            data: {pageTitle: 'AngularJS File Upload'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'angularFileUpload',
                        files: [
                            'assets/global/plugins/angularjs/plugins/angular-file-upload/angular-file-upload.min.js',
                        ] 
                    }, {
                        name: 'app',
                        files: [
                            'js/controllers/GeneralPageController.js'
                        ]
                    }]);
                }]
            }
        })

        // UI Select
        .state('cic.uiselect', {
            url: "/ui_select.html",
            templateUrl: "views/ui_select.html",
            data: {pageTitle: 'AngularJS Ui Select'},
            controller: "UISelectController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'ui.select',
                        insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
                        files: [
                            'assets/global/plugins/angularjs/plugins/ui-select/select.min.css',
                            'assets/global/plugins/angularjs/plugins/ui-select/select.min.js'
                        ] 
                    }, {
                        name: 'app',
                        files: [
                            'js/controllers/UISelectController.js'
                        ] 
                    }]);
                }]
            }
        })

        // UI Bootstrap
        .state('cic.uibootstrap', {
            url: "/ui_bootstrap.html",
            templateUrl: "views/ui_bootstrap.html",
            data: {pageTitle: 'AngularJS UI Bootstrap'},
            controller: "GeneralPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: 'app',
                        files: [
                            'js/controllers/GeneralPageController.js'
                        ] 
                    }]);
                }] 
            }
        })

        // taskPage
        .state('cic.taskPage', {
            url: "/taskPage.html?params",
            templateUrl: "views/taskPage/taskPage.html",
            data: {pageTitle: '新任务'},
            controller: "taskPageController",
            resolve: {
                deps: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load([{
                        name: '新任务',
                        files: [
                            'views/taskPage/taskPage.js'
                        ] 
                    }]);
                }] 
            }
        })

        // User Profile
        // .state("profile", {
        //     url: "/profile",
        //     templateUrl: "views/profile/main.html",
        //     data: {pageTitle: 'User Profile'},
        //     controller: "UserProfileController",
        //     resolve: {
        //         deps: ['$ocLazyLoad', function($ocLazyLoad) {
        //             return $ocLazyLoad.load({
        //                 name: 'app',  
        //                 insertBefore: '#ng_load_plugins_before', // load the above css files before '#ng_load_plugins_before'
        //                 files: [
        //                     'assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.css',
        //                     'assets/pages/css/profile.css',
                            
        //                     'assets/global/plugins/jquery.sparkline.min.js',
        //                     'assets/global/plugins/bootstrap-fileinput/bootstrap-fileinput.js',

        //                     'assets/pages/scripts/profile.min.js',

        //                     'js/controllers/UserProfileController.js'
        //                 ]                    
        //             });
        //         }]
        //     }
        // })

        // // User Profile Dashboard
        // .state("profile.dashboard", {
        //     url: "/dashboard",
        //     templateUrl: "views/profile/dashboard.html",
        //     data: {pageTitle: 'User Profile'}
        // })

        // // User Profile Account
        // .state("profile.account", {
        //     url: "/account",
        //     templateUrl: "views/profile/account.html",
        //     data: {pageTitle: 'User Account'}
        // })

        // // User Profile Help
        // .state("profile.help", {
        //     url: "/help",
        //     templateUrl: "views/profile/help.html",
        //     data: {pageTitle: 'User Help'}      
        // })

}]);