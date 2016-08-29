'use strict';

var app = angular.module('ProductApp', [
	'ngRoute', 
    'ProductApp.services',
    'ProductApp.controllers'
]).

// Note the hashtag : http://localhost:8080/JAX-RSClient/#/products
config(['$routeProvider', function($routeProvider) {
	  $routeProvider.
		when('/products', {templateUrl: 'partials/products.html', controller: 'ProductsController'}).
		when('/products/addproduct', {templateUrl: 'partials/addproduct.html', controller: 'AddProductController'}).
		when('/products/:id', {templateUrl: 'partials/product.html', controller: 'ProductController'}).
		otherwise({redirectTo: '/products'});
}]);