var app = angular.module('tbd', ['ngAnimate'])
app.config([function(){

}]).controller('TbdCtrl', ['$scope', function($scope) {
	$scope.skills=["Angular.js", "Node/Express", "MongoDB", "JQuery"]
	$scope.currentSkill=1
	$scope.currentPage=0
	$scope.test = function(){
		alert("test")
	}
	$scope.skillIncrement=function(){
		$scope.currentSkill++
		if($scope.currentSkill==$scope.skills.length)
			$scope.currentSkill=0
		$scope.$apply()
	}
	setInterval(function(){$scope.skillIncrement()},2000)
}])