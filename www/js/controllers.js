angular.module('starter.controllers', [])

.controller('DashCtrl',['$scope', '$http', function($scope, $http) {
  $scope.unique_request = Math.random();
  $scope.cfdump = '';
  $scope.requestLink = '';
  $scope.response_data= '';
  $scope.showCard = false;

  $scope.sendPickup = function(){
    var request = $http({
      method: 'POST',
      url: 'https://pickmeapp.herokuapp.com/api/pickup',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      transformRequest: function(obj) {
        var str = [];
        for(var p in obj)
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          return str.join("&");
        },
        data: {
          name: $scope.name,
          flight: $scope.flight,
          name_pickuper: $scope.name_pickuper,
          email_pickuper: $scope.email_pickuper,
          message: $scope.message,
          uid: $scope.unique_request
        }
      });
      request.success(
        function( data, status, headers, config ) {

          //$scope.cfdump = data;
          console.log("success");
          //console.log($scope.cfdump);
          console.log(JSON.stringify(data));
          $scope.response_data = data;
          $scope.showCard = true;
        }
      );
      request.error(
        function( data, status, headers, config ) {
          console.log("error");
          //console.log($scope.cfdump);
          console.log("data -> " + JSON.stringify(data));
          console.log("status -> " + status);
          //console.log("headers -> " + headers);
          //console.log("config -> " + JSON.stringify(config));
        }
      );
  };
}])

/*.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})
*/
.controller('RequestCtrl', function($scope) {
  /*$scope.tasks = [
    { title: 'Collect coins' },
    { title: 'Eat mushrooms' },
    { title: 'Get high enough to grab the flag' },
    { title: 'Find the Princess' }
  ];*/
})
;
