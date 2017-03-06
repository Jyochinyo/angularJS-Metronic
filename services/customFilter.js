app
    .filter('capitalize', function () {
        // input是我们传入的字符串
        return function (input) {
            if (input) {
                return input[0].toUpperCase() + input.slice(1);
            }
        }
    });
