//we didn't include [] after because we are not creating a new model.
angular.module('friendsList')
    .controller('mainCtrl', function ($scope) {
        $scope.test = "woo";
        $scope.friends = ['kevin', 'Raphael', 'Gabriel', 'cheribim'];

        //console.log('Showing value for Array at MainCtrl: ', $scope.friends);


    });


//I made a mistake of adding another controller called addFriend.
//but It is interesting that I can access another controllers array value.
angular.module('friendsList')
    .controller('addFriend', function ($scope) {
        $scope.name = 'asd';

        // console.log('Showing value for scopeName from root controller: ', $scope.name);
        // console.log('Showing value for Array from root controller: ', $scope.friends);

        $scope.addFriendX = function () {
            console.log('Showing value for scopeName from function: ', $scope.name);
            console.log('Showing value for Array from function: ', $scope.friends);
            if ($scope.name !== '') {
                $scope.friends.push($scope.name);
            }
            console.log('Showing value for Array from function: ', $scope.friends);
        };
    });