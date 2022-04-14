/* App version 2, Angular 1.2
 * Authored by Gentry Lin, Target Specialist SC
 * Developed for Summit 2020 lab: Personalize with Single Page Apps
 */

/** MAIN WEB APP **/
 
var app = angular.module('storeWebApp', ['ngRoute']);


/** APP.CONFIG **/

/* Configures the routes */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: 'PageCtrl', title: 'shop TEEhugger', 
    	pageName: 'Home', pageType: 'Info', siteSection: 'Home', siteSubsection: 'Menu'})
    
    // Navigation Menu Pages
    .when("/about", {templateUrl: "partials/about.html", controller: 'PageCtrl', title: 'about us',
    	pageName: 'About', pageType: 'Info', siteSection: 'Home', siteSubsection: 'Menu'})
    	
    .when("/faq", {templateUrl: "partials/faq.html", controller: 'PageCtrl', title: 'faq',
    	pageName: 'FAQ', pageType: 'Info', siteSection: 'Home', siteSubsection: 'Menu'})
    	
    .when("/contact", {templateUrl: "partials/contact.html", controller: 'PageCtrl', title: 'contact us',
    	pageName: 'Contact', pageType: 'Info', siteSection: 'Home', siteSubsection: 'Menu'})
    	
    .when("/baby",  {templateUrl: "partials/baby.html", controller: 'PageCtrl', title: 'for the babes',
    	pageName: 'Product:Category:Baby', pageType: 'Category', siteSection: 'Home', siteSubsection: 'Department', category: 'Baby'})
    	
    .when("/kids",  {templateUrl: "partials/kids.html", controller: 'PageCtrl', title: 'for the kiddos',
    	pageName: 'Product:Category:Kids', pageType: 'Category', siteSection: 'Home', siteSubsection: 'Department', category: 'Kids'})
    	
    .when("/mens",  {templateUrl: "partials/mens.html", controller: 'PageCtrl', title: 'for the guys',
    	pageName: 'Product:Category:Mens', pageType: 'Category', siteSection: 'Home', siteSubsection: 'Department', category: 'Mens'})
    	
    .when("/womens",  {templateUrl: "partials/womens.html", controller: 'PageCtrl', title: 'for the gals',
    	pageName: 'Product:Category:Womens', pageType: 'Category', siteSection: 'Home', siteSubsection: 'Department', category: 'Womens'})
    	
    .when("/shop-login",  {templateUrl: "partials/shop-login.html", controller: 'PageCtrl', title: 'log in',
    	pageName: 'Log In', pageType: 'Form', siteSection: 'Home', siteSubsection: 'Menu'})
    	
    .when("/sign-up",  {templateUrl: "partials/sign-up.html", controller: 'PageCtrl', title: 'sign up',
    	pageName: 'Sign Up', pageType: 'Form', siteSection: 'Home', siteSubsection: 'Menu'})


    
    // Product Detail Pages
    .when("/baby-crew",  {templateUrl: "partials/baby-crew.html", controller: 'PageCtrl', title: 'baby crew onesie', 
    	pageName: 'Product:Baby:Crew', pageType: 'Product', siteSection: 'Baby', siteSubsection: 'Crew', category: 'Baby',
    	productID: 'aep-12345', productName: 'Baby Crew', revenue: '10.99'})
    	 
    .when("/baby-v",  {templateUrl: "partials/baby-v.html", controller: 'PageCtrl', title: 'baby v onesie',
    	pageName: 'Product:Baby:V', pageType: 'Product', siteSection: 'Baby', siteSubsection: 'V Neck', category: 'Baby',
    	productID: 'aep-23456', productName: 'Baby V', revenue: '10.99'})
    	
    .when("/kids-crew",  {templateUrl: "partials/kids-crew.html", controller: 'PageCtrl', title: 'kids crew neck',
    	pageName: 'Product:Kids:Crew', pageType: 'Product', siteSection: 'Kids', siteSubsection: 'Crew', category: 'Kids',
    	productID: 'aep-34567', productName: 'Kids Crew', revenue: '19.99'})
    	
    .when("/kids-v",  {templateUrl: "partials/kids-v.html", controller: 'PageCtrl', title: 'kids v neck', category: 'Kids',
    	pageName: 'Product:Kids:V', pageType: 'Product', siteSection: 'Kids', siteSubsection: 'V Neck', 
    	productID: 'aep-45678', productName: 'Kids V', revenue: '19.99'})
    	
    .when("/mens-crew",  {templateUrl: "partials/mens-crew.html", controller: 'PageCtrl', title: 'mens crew neck', category: 'Mens',
    	pageName: 'Product:Mens:Crew', pageType: 'Product', siteSection: 'Mens', siteSubsection: 'Crew',
    	productID: 'aep-56789', productName: 'Mens Crew', revenue: '24.99'})
    	
    .when("/mens-v",  {templateUrl: "partials/mens-v.html", controller: 'PageCtrl', title: 'mens v neck',
    	pageName: 'Product:Mens:V', pageType: 'Product', siteSection: 'Mens', siteSubsection: 'V Neck', category: 'Mens',
    	productID: 'aep-67891', productName: 'Mens V', revenue: '24.99'})
    	
    .when("/womens-crew",  {templateUrl: "partials/womens-crew.html", controller: 'PageCtrl', title: 'womens crew neck',
    	pageName: 'Product:Womens:Crew', pageType: 'Product', siteSection: 'Womens', siteSubsection: 'Crew', category: 'Womens',
    	productID: 'aep-78910', productName: 'Womens Crew', revenue: '29.99'})
    	
    .when("/womens-v",  {templateUrl: "partials/womens-v.html", controller: 'PageCtrl', title: 'womens v neck',
    	pageName: 'Product:Womens:V', pageType: 'Product', siteSection: 'Womens', siteSubsection: 'V Neck', category: 'Womens',
    	productID: 'aep-89101', productName: 'Womens V', revenue: '29.99'})
    
    // Checkout Confirmation Page
    .when("/checkout",  {templateUrl: "partials/checkout.html", controller: 'CheckoutPageCtrl', title: 'thank you',
    	pageName: 'Order Confirmation', pageType: 'Checkout', siteSection: 'Order', siteSubsection: 'Checkout'})
    
	// Form/Login Page Secure Zone redirect
	.when("/my-account",  {templateUrl: "partials/my-account.html", controller: 'LoginCtrl', title: 'my account',
		pageName: 'My Account', pageType: 'Form', siteSection: 'Account', siteSubsection: 'Login'})
		
	.when("/new-account",  {templateUrl: "partials/new-account.html", controller: 'PageCtrl', title: 'welcome',
		pageName: 'Welcome', pageType: 'Form', siteSection: 'Account', siteSubsection: 'Sign Up'})
		
	.when("/my-account-logout",  {templateUrl: "partials/my-account-logout.html", controller: 'PageCtrl', title: 'log out',
		pageName: 'Log out', pageType: 'Form', siteSection: 'Account', siteSubsection: 'Menu'})
		
	.when("/my-account-cart",  {templateUrl: "partials/my-account-cart.html", controller: 'PageCtrl', title: 'cart',
		pageName: 'Shopping Cart', pageType: 'Form', siteSection: 'Account', siteSubsection: 'Menu'})
	
    .when("/my-account-logout-confirmation",  {templateUrl: "partials/my-account-logout-confirmation.html", controller: 'LogoutCtrl', title: 'log out',
        pageName: 'Log Out Confirmation', pageType: 'Form', siteSection: 'Account', siteSubsection: 'Menu'})

		   
    /* else 404
    .otherwise({redirectTo: '#'});
    */
    .otherwise("/404", {templateUrl: "partials/404.html", controller: 'PageCtrl'});
    
}]);


/** RUN BLOCK **/

app.run(['$rootScope', '$route', function($rootScope, $route) { 
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
        
        // Set data layer variables (stored in meta tags)
        $rootScope.pageName = $route.current.pageName; 
        $rootScope.pageType = $route.current.pageType;
        $rootScope.siteSection = $route.current.siteSection;
        $rootScope.siteSubsection = $route.current.siteSubsection;
        $rootScope.category = $route.current.category;
        $rootScope.productID = $route.current.productID;
        $rootScope.productName = $route.current.productName;
        $rootScope.revenue = $route.current.revenue;
        $rootScope.productTotalRevenue = $route.current.productTotalRevenue;
        $rootScope.productTotalUnits = $route.current.productTotalUnits;
        
    });
    
    // Set new params in view top header (global page params)
	$rootScope.$on('$routeChangeSuccess', function() { 
		// Update Data Layer
		digitalData.page.pageName = $rootScope.pageName;
		digitalData.page.destinationURL = encodeURIComponent(window.location.href);
		digitalData.page.pageType = $rootScope.pageType;
		digitalData.page.siteSection = $rootScope.siteSection;
		digitalData.page.siteSubsection = $rootScope.siteSubsection;
		digitalData.page.category = $rootScope.category;
		
		digitalData.page.productID = $rootScope.productID;
		digitalData.page.productName = $rootScope.productName;
		digitalData.page.revenue = $rootScope.revenue;
			
		digitalData.page.productTotalRevenue = $rootScope.productTotalRevenue;
		digitalData.page.productTotalUnits = $rootScope.productTotalUnits;
		
		
		// Custom Event - Event View Start - triggers call for Launch
		var evt = new CustomEvent('event-view-start');
		document.body.dispatchEvent(evt);
		
    });
    
    
    // DON'T NEED THIS FOR WEB SDK??? View bottom - triggers AA call (should now trigger at event-view-start)
	$rootScope.$on('$viewContentLoaded', function(event) {
		// Custom Event - Event View End
		var evt=new CustomEvent('event-view-end');
		document.getElementById('app').dispatchEvent(evt);
	});
	
}]);

/* APP.SERVICE
 * Controls purchase variables on Checkout Confirmation Pages
 * two-way binding for purchase event variables between each PDP-click controller and Checkout controller
 * *********
 * 1/11/20: added '$scope' to service, and $scope, shared to function ()
 */

app.service('sharedProperties', function () {
    var purchRNG = '';

    return {
        getPurchRNG: function () {
            return purchRNG;
        },
        setPurchRNG: function (string) {
            purchRNG = string;
        }
     };
    
    var productParamsArray = [];
	
	return {
		getProductParamsArray: function () {
			return productParamsArray;
		},
		setProductParamsArray: function (array) {
			productParamsArray = array;
		}
	};
    
})



/** APP.CONTROLLERS **/

/* Controls all non-Checkout pages */
app.controller('PageCtrl', ['$scope', function ($scope) {
	digitalData.page.purchaseID = null;
   
}]);
   
app.controller('LoginCtrl', ['$scope', function ($scope) {
    digitalData.page.purchaseID = null;

    function makeid(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


var cookieName = 'teehuggerCookie';
var cookieValue = makeid(10);
var myDate = new Date();
myDate.setMonth(myDate.getMonth() + 12);
document.cookie = cookieName +"=" + cookieValue + ";expires=" + myDate + ";domain=.teehuggers.com;path=/";
   
}]);


/* Baby Crew Controller, declared in #baby-crew HTML element */
app.controller('BabyCrewClickCtrl', ['$scope', 'sharedProperties', function ($scope, shared) {
    $scope.createId = function() {
  		$scope.purchRNG = 'bc' + Math.random().toString(36).substr(2,9);
  	};
    $scope.purchRNG = shared.getPurchRNG();
    
    // watching the change and updating the shared
    $scope.$watch('purchRNG', function (value) {
        shared.setPurchRNG(value);
    })
  
    // watching the shared directly
    $scope.shared = shared;
    $scope.$watch('shared.getPurchRNG()', function (value) {
        console.log("Baby Crew Click Controller: sharedProperty purchase ID is: " + value);
    })

	// injecting controller-specific page parameters
	productParamsArray = ['aep-12345', 'Baby Crew', '21.98', '2'];
	
	$scope.$watch('productParamsArray()', function () {
		return productParamsArray;
		shared.setProductParamsArray();
	})
	
    $scope.$watch('shared.getProductParamsArray()', function () {
        console.log("PDP parameters: " + productParamsArray);
    })

}])

/* Baby V-neck Controller, declared in #baby-v HTML element */
app.controller('BabyVClickCtrl', ['$scope', 'sharedProperties', function ($scope, shared) {
    $scope.createId = function() {
  		$scope.purchRNG = 'bv' + Math.random().toString(36).substr(2,9);
  	};
    $scope.purchRNG = shared.getPurchRNG();
    
    // watching the change and updating the shared
    $scope.$watch('purchRNG', function (value) {
        shared.setPurchRNG(value);
    })
  
    // watching the shared directly
    $scope.shared = shared;
    $scope.$watch('shared.getPurchRNG()', function (value) {
        console.log("Baby V Click Controller: sharedProperty purchase ID is: " + value);
    })

	// injecting controller-specific page parameters
	productParamsArray = ['aep-23456', 'Baby V', '43.96', '4'];
	
	$scope.$watch('productParamsArray()', function () {
		return productParamsArray;
		shared.setProductParamsArray();
	})
	
    $scope.$watch('shared.getProductParamsArray()', function () {
        console.log("PDP parameters: " + productParamsArray);
    })

}])

/* Kids Crew Controller, declared in #kids-crew HTML element */
app.controller('KidsCrewClickCtrl', ['$scope', 'sharedProperties', function ($scope, shared) {
    $scope.createId = function() {
  		$scope.purchRNG = 'kc' + Math.random().toString(36).substr(2,9);
  	};
    $scope.purchRNG = shared.getPurchRNG();
    
    // watching the change and updating the shared
    $scope.$watch('purchRNG', function (value) {
        shared.setPurchRNG(value);
    })
  
    // watching the shared directly
    $scope.shared = shared;
    $scope.$watch('shared.getPurchRNG()', function (value) {
        console.log("Kids Crew Click Controller: sharedProperty purchase ID is: " + value);
    })

	// injecting controller-specific page parameters
	productParamsArray = ['aep-34567', 'Kids Crew', '79.96', '4'];
	
	$scope.$watch('productParamsArray()', function () {
		return productParamsArray;
		shared.setProductParamsArray();
	})
	
    $scope.$watch('shared.getProductParamsArray()', function () {
        console.log("PDP parameters: " + productParamsArray);
    })

}])
/* Kids V-neck Controller, declared in #kids-v HTML element */
app.controller('KidsVClickCtrl', ['$scope', 'sharedProperties', function ($scope, shared) {
    $scope.createId = function() {
  		$scope.purchRNG = 'kv' + Math.random().toString(36).substr(2,9);
  	};
    $scope.purchRNG = shared.getPurchRNG();
    
    // watching the change and updating the shared
    $scope.$watch('purchRNG', function (value) {
        shared.setPurchRNG(value);
    })
  
    // watching the shared directly
    $scope.shared = shared;
    $scope.$watch('shared.getPurchRNG()', function (value) {
        console.log("Kids V Click Controller: sharedProperty purchase ID is: " + value);
    })

	// injecting controller-specific page parameters
	productParamsArray = ['aep-45678', 'Kids V', '59.97', '3'];
	
	$scope.$watch('productParamsArray()', function () {
		return productParamsArray;
		shared.setProductParamsArray();
	})
	
    $scope.$watch('shared.getProductParamsArray()', function () {
        console.log("PDP parameters: " + productParamsArray);
    })

}])
/* Mens Crew Controller, declared in #mens-crew HTML element */
app.controller('MensCrewClickCtrl', ['$scope', 'sharedProperties', function ($scope, shared) {
    $scope.createId = function() {
  		$scope.purchRNG = 'mc' + Math.random().toString(36).substr(2,9);
  	};
    $scope.purchRNG = shared.getPurchRNG();
    
    // watching the change and updating the shared
    $scope.$watch('purchRNG', function (value) {
        shared.setPurchRNG(value);
    })
  
    // watching the shared directly
    $scope.shared = shared;
    $scope.$watch('shared.getPurchRNG()', function (value) {
        console.log("Mens Crew Click Controller: sharedProperty purchase ID is: " + value);
    })

	// injecting controller-specific page parameters
	productParamsArray = ['aep-56789', 'Mens Crew', '49.98', '2'];
	
	$scope.$watch('productParamsArray()', function () {
		return productParamsArray;
		shared.setProductParamsArray();
	})
	
    $scope.$watch('shared.getProductParamsArray()', function () {
        console.log("PDP parameters: " + productParamsArray);
    })

}])

/* Mens V-neck Controller, declared in #mens-v HTML element */
app.controller('MensVClickCtrl', ['$scope', 'sharedProperties', function ($scope, shared) {
    $scope.createId = function() {
  		$scope.purchRNG = 'mv' + Math.random().toString(36).substr(2,9);
  	};
    $scope.purchRNG = shared.getPurchRNG();
    
    // watching the change and updating the shared
    $scope.$watch('purchRNG', function (value) {
        shared.setPurchRNG(value);
    })
  
    // watching the shared directly
    $scope.shared = shared;
    $scope.$watch('shared.getPurchRNG()', function (value) {
        console.log("Mens V Click Controller: sharedProperty purchase ID is: " + value);
    })

	// injecting controller-specific page parameters
	productParamsArray = ['aep-67891', 'Mens V', '74.97', '3'];
	
	$scope.$watch('productParamsArray()', function () {
		return productParamsArray;
		shared.setProductParamsArray();
	})
	
    $scope.$watch('shared.getProductParamsArray()', function () {
        console.log("PDP parameters: " + productParamsArray);
    })

}])

/* Womens Crew Controller, declared in #womens-crew HTML element */
app.controller('WomensCrewClickCtrl', ['$scope', 'sharedProperties', function ($scope, shared) {
    $scope.createId = function() {
  		$scope.purchRNG = 'wc' + Math.random().toString(36).substr(2,9);
  	};
    $scope.purchRNG = shared.getPurchRNG();
    
    // watching the change and updating the shared
    $scope.$watch('purchRNG', function (value) {
        shared.setPurchRNG(value);
    })
  
    // watching the shared directly
    $scope.shared = shared;
    $scope.$watch('shared.getPurchRNG()', function (value) {
        console.log("Womens Crew Click Controller: sharedProperty purchase ID is: " + value);
    })

	// injecting controller-specific page parameters
	productParamsArray = ['aep-78910', 'Womens Crew', '149.95', '5'];
	
	$scope.$watch('productParamsArray()', function () {
		return productParamsArray;
		shared.setProductParamsArray();
	})
	
    $scope.$watch('shared.getProductParamsArray()', function () {
        console.log("PDP parameters: " + productParamsArray);
    })

}])

/* Womens V-neck Controller, declared in #womens-v HTML element */
app.controller('WomensVClickCtrl', ['$scope', 'sharedProperties', function ($scope, shared) {
    $scope.createId = function() {
  		$scope.purchRNG = 'wv' + Math.random().toString(36).substr(2,9);
  	};
    $scope.purchRNG = shared.getPurchRNG();
    
    // watching the change and updating the shared
    $scope.$watch('purchRNG', function (value) {
        shared.setPurchRNG(value);
    })
  
    // watching the shared directly
    $scope.shared = shared;
    $scope.$watch('shared.getPurchRNG()', function (value) {
        console.log("Womens V Click Controller: sharedProperty purchase ID is: " + value);
    })

	// injecting controller-specific page parameters
	productParamsArray = ['aep-89101', 'Womens V', '59.98', '2'];
	
	$scope.$watch('productParamsArray()', function () {
		return productParamsArray;
		shared.setProductParamsArray();
	})
	
    $scope.$watch('shared.getProductParamsArray()', function () {
        console.log("PDP parameters: " + productParamsArray);
    })

}])

/* Controls Checkout Page */
app.controller('CheckoutPageCtrl', ['$scope', 'sharedProperties', function ($scope, shared) {
	$scope.shared = shared;
    $scope.purchaseId = shared.getPurchRNG();
    $scope.$watch('shared.getPurchRNG()', function (value) {
        console.log("Checkout Controller: sharedProperty purchase ID is: " + value);
        $scope.purchaseId = shared.getPurchRNG();
        var purchaseId = $scope.purchaseId;
        
    	$scope.$watch('getProductParamsArray', function () {
        	console.log("Purchase params: " + productParamsArray);
    	})
    
  		digitalData.page.purchaseID = purchaseId;
    	digitalData.page.productID = productParamsArray[0];
		digitalData.page.productName = productParamsArray[1];
		digitalData.page.productTotalRevenue = productParamsArray[2];
		digitalData.page.productTotalUnits = productParamsArray[3];
    })
    
}]);


/* Controls Logout Page */
app.controller('LogoutCtrl', ['$scope', '$route', function ($scope, $route) {
    $scope.reloadRoute = function() {
        $route.reload();
    };

}]);








