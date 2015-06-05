angular.module('mySiteApp', ['routerRoutes'])

  .controller('mainController', function () {

    console.log("Creating Controller");

      var vm = this;

      vm.message = "Hello, World!";

      vm.email = "";

      console.log("After Creating Variables");

      vm.joinNewsletter = function () {
          alert("Email Entered: " + vm.email);
          vm.email = "";
      }

  });
