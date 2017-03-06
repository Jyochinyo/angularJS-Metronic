
app
    // 基本指令
    .directive('myDirective', function() {
        return {
            restrict: 'EACM', 
            template: '<a href="http://www.baidu.com">Click me to go to baidu</a>'
        }; 
    })

    // 绑定策略指令示例
    .directive('myDirectiveBind', function() {
        return {
            restrict: 'EACM', 
            replace: true,
            scope: {
                myUrl: '@',
                myLinkText: '@'
            },
            template: '<a href="{{myUrl}}">' + '{{myLinkText}}</a>'
        }; 
    });

