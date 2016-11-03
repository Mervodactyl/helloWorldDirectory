app.controller("MainCtrl", function($scope) {
  $scope.colors = ["pink", "yellow", "gold"];

  $scope.change = function() {
    return $scope.colors[Math.floor((Math.random() * 3 ))];
  }

});
