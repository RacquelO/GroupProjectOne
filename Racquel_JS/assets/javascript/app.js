var queryURL = "http://api.undata-api.org/WHO/Life%20expectancy%20at%20birth/Kenya/records?app_id=9ed2c241&app_key=09a895dafcf6e70bad03bef56317f454";

  $.ajax({url: queryURL, method: 'GET'})
   
   .done(function(response) {

       console.log(response);

       console.log("SetOne: " + response[1].gender + " " + response[1].value);
  }); 


// var countries = ['Kenya', 'Canada', 'United%20States%20of%20America'];
// var queryURL = "http://api.undata-api.org/WHO/Life%20expectancy%20at%20birth/" + countries[0] + "/records?app_id=9ed2c241&app_key=09a895dafcf6e70bad03bef56317f454";


// $.ajax({url: queryURL, method: 'GET'})
// 	 .done(function(response) {
// 	     console.log(response);

// 	}); 

// function renderOptions(){ 
// 		$('#country').empty();
// 		for (var i = 0; i < countries.length; i++){
// 		    var a = $('<option>')
// 		    // a.addClass('movi');
// 		    // // a.attr('data-name', movies[i]);
// 		    // // a.text(movies[i]);
// 		    // // $('#buttonsView').append(a);
// 		}
// 	}

// $.ajax({url: queryURL, method: 'GET'})
	//  .done(function(renderOptions) {
	//      $('#country').empty();
	// 	for (var i = 0; i < countries.length; i++){
	// 	    var a = $('<option>')
	// 	}
	// }); 

	//  renderOptions();

	//  $('#country').on('load', function(){
	// 	var countrylist = $('.option').val();
	// 	countries.push(countrylist);
		
	// 	// Creates a new button on click
	// 	renderOptions();
	// 	return false;
	// });

