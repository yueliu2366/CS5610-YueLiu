﻿ app.factory('VecnaService', function VecnaService($http, $location) {
	 
	 var patients = [
	                  {
	                	    "name": {
	                	      "firstName": "Emily",
	                	      "lastName": "Fields"
	                	    },
	                	    "ssn": "2683",
	                	    "address": {
	                	      "street": "987 Ciahu Ct",
	                	      "city": "Nocefab",
	                	      "state": "Missouri",
	                	      "zip": "86508"
	                	    },
	                	    "primaryPhone": "(978) 758-2932",
	                	    "workPhone": "(200) 321-6668",
	                	    "birthDate": "6/24/1974"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Eugenia",
	                	      "lastName": "Stokes"
	                	    },
	                	    "ssn": "3027",
	                	    "address": {
	                	      "street": "850 Zunmos Vw",
	                	      "city": "Ipasta",
	                	      "state": "Oklahoma",
	                	      "zip": "86439"
	                	    },
	                	    "primaryPhone": "(938) 825-3495",
	                	    "workPhone": "(440) 894-3508",
	                	    "birthDate": "8/18/1957"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Lois",
	                	      "lastName": "Fox"
	                	    },
	                	    "ssn": "7135",
	                	    "address": {
	                	      "street": "935 Miecu Park",
	                	      "city": "Pibugeh",
	                	      "state": "New York",
	                	      "zip": "58646"
	                	    },
	                	    "primaryPhone": "(479) 510-7233",
	                	    "workPhone": "(442) 444-5861",
	                	    "birthDate": "3/3/1988"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Bruce",
	                	      "lastName": "Ray"
	                	    },
	                	    "ssn": "9275",
	                	    "address": {
	                	      "street": "650 Wouj Blvd",
	                	      "city": "Likpela",
	                	      "state": "Pennsylvania",
	                	      "zip": "03047"
	                	    },
	                	    "primaryPhone": "(947) 339-3004",
	                	    "workPhone": "(928) 915-4910",
	                	    "birthDate": "4/28/1968"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Blanche",
	                	      "lastName": "Rowe"
	                	    },
	                	    "ssn": "2874",
	                	    "address": {
	                	      "street": "596 Ladde Pt",
	                	      "city": "Kothotvuz",
	                	      "state": "Vermont",
	                	      "zip": "75038"
	                	    },
	                	    "primaryPhone": "(677) 459-4103",
	                	    "workPhone": "(214) 458-9586",
	                	    "birthDate": "8/3/1953"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Lina",
	                	      "lastName": "Farmer"
	                	    },
	                	    "ssn": "4358",
	                	    "address": {
	                	      "street": "775 Ulzug Ave",
	                	      "city": "Vipjucos",
	                	      "state": "Nebraska",
	                	      "zip": "27351"
	                	    },
	                	    "primaryPhone": "(952) 939-7336",
	                	    "workPhone": "(906) 772-6711",
	                	    "birthDate": "6/16/1985"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Gordon",
	                	      "lastName": "Zimmerman"
	                	    },
	                	    "ssn": "1058",
	                	    "address": {
	                	      "street": "244 Urozuw Pkwy",
	                	      "city": "Oftikike",
	                	      "state": "Alabama",
	                	      "zip": "41569"
	                	    },
	                	    "primaryPhone": "(968) 754-6874",
	                	    "workPhone": "(414) 563-8521",
	                	    "birthDate": "5/16/1983"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Herbert",
	                	      "lastName": "Fleming"
	                	    },
	                	    "ssn": "5944",
	                	    "address": {
	                	      "street": "316 Tohoc Mill",
	                	      "city": "Uswiki",
	                	      "state": "Kansas",
	                	      "zip": "97506"
	                	    },
	                	    "primaryPhone": "(204) 275-5441",
	                	    "workPhone": "(329) 375-4443",
	                	    "birthDate": "2/12/1994"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Edith",
	                	      "lastName": "McDaniel"
	                	    },
	                	    "ssn": "5143",
	                	    "address": {
	                	      "street": "714 Tispe Ln",
	                	      "city": "Eforeezo",
	                	      "state": "Tennessee",
	                	      "zip": "83722"
	                	    },
	                	    "primaryPhone": "(341) 358-2147",
	                	    "workPhone": "(410) 821-8472",
	                	    "birthDate": "2/21/1976"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Augusta",
	                	      "lastName": "Joseph"
	                	    },
	                	    "ssn": "7195",
	                	    "address": {
	                	      "street": "287 Pagif Ave",
	                	      "city": "Berfedu",
	                	      "state": "District of Columbia",
	                	      "zip": "34648"
	                	    },
	                	    "primaryPhone": "(868) 575-4356",
	                	    "workPhone": "(906) 632-3099",
	                	    "birthDate": "3/12/1962"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Sally",
	                	      "lastName": "Todd"
	                	    },
	                	    "ssn": "1994",
	                	    "address": {
	                	      "street": "631 Vezi St",
	                	      "city": "Ruhjijmam",
	                	      "state": "Ohio",
	                	      "zip": "18906"
	                	    },
	                	    "primaryPhone": "(979) 852-8700",
	                	    "workPhone": "(374) 959-5900",
	                	    "birthDate": "6/29/1976"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Caroline",
	                	      "lastName": "Reeves"
	                	    },
	                	    "ssn": "2735",
	                	    "address": {
	                	      "street": "929 Pohra Ext",
	                	      "city": "Bihunza",
	                	      "state": "Michigan",
	                	      "zip": "62004"
	                	    },
	                	    "primaryPhone": "(624) 402-7104",
	                	    "workPhone": "(476) 970-9793",
	                	    "birthDate": "3/1/1985"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Jesse",
	                	      "lastName": "Obrien"
	                	    },
	                	    "ssn": "7832",
	                	    "address": {
	                	      "street": "331 Ezaego Hwy",
	                	      "city": "Codecho",
	                	      "state": "South Dakota",
	                	      "zip": "58570"
	                	    },
	                	    "primaryPhone": "(240) 245-3428",
	                	    "workPhone": "(759) 702-4890",
	                	    "birthDate": "12/15/1979"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Sadie",
	                	      "lastName": "Rhodes"
	                	    },
	                	    "ssn": "8399",
	                	    "address": {
	                	      "street": "533 Japlub Hwy",
	                	      "city": "Potalur",
	                	      "state": "Delaware",
	                	      "zip": "28126"
	                	    },
	                	    "primaryPhone": "(645) 204-4796",
	                	    "workPhone": "(820) 219-2522",
	                	    "birthDate": "9/7/1971"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Christian",
	                	      "lastName": "Coleman"
	                	    },
	                	    "ssn": "3828",
	                	    "address": {
	                	      "street": "336 Figun Hwy",
	                	      "city": "Budipiane",
	                	      "state": "Texas",
	                	      "zip": "10664"
	                	    },
	                	    "primaryPhone": "(526) 610-8908",
	                	    "workPhone": "(379) 481-3320",
	                	    "birthDate": "11/16/1961"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Lottie",
	                	      "lastName": "Watts"
	                	    },
	                	    "ssn": "3898",
	                	    "address": {
	                	      "street": "951 Gocof Path",
	                	      "city": "Tagzatu",
	                	      "state": "Ohio",
	                	      "zip": "70850"
	                	    },
	                	    "primaryPhone": "(778) 368-1896",
	                	    "workPhone": "(582) 979-2128",
	                	    "birthDate": "7/12/1957"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Louis",
	                	      "lastName": "Richardson"
	                	    },
	                	    "ssn": "6167",
	                	    "address": {
	                	      "street": "159 Robrij Blvd",
	                	      "city": "Biduggal",
	                	      "state": "Wisconsin",
	                	      "zip": "16989"
	                	    },
	                	    "primaryPhone": "(417) 371-4591",
	                	    "workPhone": "(563) 684-1909",
	                	    "birthDate": "4/13/1975"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Frederick",
	                	      "lastName": "Goodwin"
	                	    },
	                	    "ssn": "0174",
	                	    "address": {
	                	      "street": "70 Dojim Pass",
	                	      "city": "Mipezuvi",
	                	      "state": "Missouri",
	                	      "zip": "62281"
	                	    },
	                	    "primaryPhone": "(351) 922-4361",
	                	    "workPhone": "(750) 677-3140",
	                	    "birthDate": "3/5/1958"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Mamie",
	                	      "lastName": "Moss"
	                	    },
	                	    "ssn": "0759",
	                	    "address": {
	                	      "street": "229 Tumce Hts",
	                	      "city": "Nuvrelhi",
	                	      "state": "Alabama",
	                	      "zip": "57030"
	                	    },
	                	    "primaryPhone": "(931) 724-3914",
	                	    "workPhone": "(933) 828-7621",
	                	    "birthDate": "5/2/1967"
	                	  },
	                	  {
	                	    "name": {
	                	      "firstName": "Birdie",
	                	      "lastName": "Andrews"
	                	    },
	                	    "ssn": "7800",
	                	    "address": {
	                	      "street": "409 Sorofo Loop",
	                	      "city": "Fezezti",
	                	      "state": "West Virginia",
	                	      "zip": "10565"
	                	    },
	                	    "primaryPhone": "(868) 974-1029",
	                	    "workPhone": "(650) 473-1534",
	                	    "birthDate": "12/31/1971"
	                	  }
	                	];
	 
    var currentPatient = null;
    var currentIndex = 0;

    var setCurrentPatient = function (patient){
    	currentPatient = patient;
    	currentIndex = patients.indexOf(patient);
    }
    
    var getCurrentPatient = function (){
    	return currentPatient;
    }
    
    var updateCurrentPatient = function (updatedPatient){
    	patients[currentIndex] = updatedPatient;
    }
    
    var showMore = function (patient){
    	patient.showButton = !patient.showButton;
    }
    
    var getPatients = function (){
    	return patients;
    }
    
    var toHomePage = function (patient){
    	$location.url('/home');
    }
    
    var toDetailPage = function (patient){
    	currentPatient = patient;
    	currentIndex = patients.indexOf(patient);
    	$location.url('/detail');
    }
    
    return {
    	setCurrentPatient: setCurrentPatient,
        getCurrentPatient: getCurrentPatient,
        showMore : showMore,
        getPatients : getPatients,
        toHomePage : toHomePage,
        updateCurrentPatient : updateCurrentPatient,
        toDetailPage : toDetailPage
    }
});