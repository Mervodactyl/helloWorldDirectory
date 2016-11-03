var app = angular.module("myApp", [] );

app.directive("helloWorld", function() {
  return {
    scope: {
      // color: "@colorAttr" // "@" for one way data binding
      color: "=", // "=" for two way data binding
      changeColor: "&" // "&" character reference is "&amp;"
    },
    restrict: "AE", // use as a new html el/attr, "AEC" is for class
    replace: true, // stackoverflow.com/questions/22497706/angular-directive-replace-true
    template: "<p style='background-color:{{ color }}'>Hello World!</p>",
    // templateUrl: "template.html",
    link: function(scope, elem, attrs) { // using jQLite hence the "elem"'s
      elem.bind("click", function() {
        scope.$apply(function() {
          scope.color = "white";
        });
      });
      elem.bind("mouseover", function() {
        elem.css("cursor", "pointer");
        scope.$apply(function() {
          scope.color = scope.changeColor();
        });
      });
      scope.$watch("color", function(changedVal) {
        console.log("change detected");
      });
    }
  };
});
