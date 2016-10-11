$(document).ready(function() {
	console.log("ready");
// Creation of city element
	var city;

// Line 7 - Function for the Event Button
	$('#submit-btn').on("click", function(event) {
       		event.preventDefault();
       		console.log("your on click events works");
//  Line 11 - Assignment of User Input to city variable     	
       		city = $('#city-type').val(); 
       		console.log(city);
// Line 14 - This resets the user input box after 
       		$('#city-type').val("");
// Loops Statements for Image Swapping       		

       		if (city === "NYC" || city === "New York City" || city === "New York") {
       			$("body").css("background-image", "url(images/nyc.jpg)");
       			//Line 16 - Actual Code for swapping images
       		} 

       		else if (city === "San Francisco" || city === "SF" || city === "Bay Area") {
       			$("body").css("background-image", "url(images/sf.jpg)");
       		}
       		
       		else if (city === "Los Angeles" || city === "LA" || city === "LAX") {
       			$("body").css("background-image", "url(images/la.jpg)");
       		}
       		else if (city === "Austin" || city === "ATX") {
       			$("body").css("background-image", "url(images/austin.jpg)");
       		}

       		else if (city === "Sydney" || city === "SYD") {
       			$("body").css("background-image", "url(images/sydney.jpg)");
       		}

      });


});