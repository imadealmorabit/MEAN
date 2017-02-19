app.directive('ngComment', function(){
	return {
		scope : {

			comment : '=',
			commenta : '@comment',
			select : '&'

		},

		restrict : 'E',

		templateUrl : 'partials/_comment.html'
	}
});



app.directive('datepicker', function(){
	return {
		restrict : 'C',
		scope : {
			options : '=datepickerOptions'
		},

		link : function(scope, element, attrs){
			$(element).pickadate(scope.options);
			
		}
	}
});



app.directive('ngTest', function(){
	return{
		template : '<div>Salut <strong>{{username }}</strong><div ng-transclude></div></div>',
		restrict : 'A',
		transclude : true,
		scope : {

			username : '='
		}
	}
});


app.directive('ngTabs', function(){
	return {

		restrict : 'E',
		transclude : true,
		templateUrl : 'js/directive/tabs.html',
		 scope : {},
		  controller : function($scope){
		  		$scope.tabs = [];
		  		
		  		this.add = function(tab){
		  			$scope.tabs.push(tab);

		  		}
		  	}

		  }

	
});


app.directive('ngTab', function(){
	return {

		restrict : 'E',
		transclude : true,
		 scope : {
		 	title : '@'
		 },
		 templateUrl : 'js/directive/tab.html',
		 require : 'ngTabs',
		 link : function(scope, element, attrs, tabsCtrl){
		 	
		 		tabsCtrl.add(scope);
		 
		 }

	}
});






























































app.directive('time', function(dateFilter, $interval){
	return {
		 restrict : 'E',
		 template : '{{time}}',
		 scope : {},
		 link : function(scope, element, attrs){
		 		
		 		element.on('destroy', function(){
		 			$interval.cancel(interval);
		 		});

		 		interval = $interval(function(){
		 		scope.time = dateFilter(new Date(), 'hh:mm:ss'); 
		 		console.log('time changed');
		 	}, 1000 )
		 }
	}
	
});    