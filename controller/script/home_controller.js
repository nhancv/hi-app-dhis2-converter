testApp
    .controller('HomeController', function ($rootScope,
                                            $scope,
                                            $location) {

        $(function () {
            var pstyle = 'border: 1px solid #dfdfdf; padding: 5px;';
            $('#layout').w2layout({
                name: 'layout',
                panels: [
                    {type: 'top', size: 50, style: pstyle, content: 'top'},
                    {type: 'left', size: 200, style: pstyle, content: 'left'},
                    {type: 'main', style: pstyle, content: 'main'}
                ]
            });
        });

    });
