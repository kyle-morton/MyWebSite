angular.module('mySiteApp', [])

  .controller('mainController', function () {

    console.log("Creating Controller");

      var vm = this;

      vm.message = "Hello, World!";

      console.log("After Creating Variables");

  });

alert("Hello, World");
