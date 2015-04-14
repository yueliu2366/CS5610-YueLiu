
app.controller("HomeCtrl",function ($scope, VecnaService) {
    var patients = VecnaService.getPatients();

    patients.sort(function(a, b){
        if(a.name.lastName < b.name.lastName) return -1;
        if(a.name.lastName > b.name.lastName) return 1;
        if(a.name.lastName == b.name.lastName)
        	{
        	if(a.name.firstName < b.name.firstName) return -1;
            if(a.name.firstName > b.name.firstName) return 1;
            return 0;
        	}
    });


    $scope.patients = patients;
   
  
    $scope.viewProfile = function (patient) {
    	VecnaService.toDetailPage(patient);
    }
    
    $scope.showMore = function (patient) {
    	VecnaService.showMore(patient);
    }
    
 
		
});