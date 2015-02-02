if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(success,error);
}
else {
alert('Error: Geolocation unsupported');
}

function error() {
alert("We're having issues locating you. Have you disabled geolocation in your browser? Or are you on a local server? Please see README for more info.");
}

function success(position) {
  
      var apikey = "10cfa1d790a05aa4"
      var weatherForecast = "http://api.wunderground.com/api/"+ apikey +"/forecast/geolookup/conditions/q/" + position.coords.latitude + "," + position.coords.longitude + ".json";

      //get data from api and set relevant info to variables
      $.getJSON( weatherForecast, function( data ) {
      		var location =data['location']['city'];
			var temperature = data['current_observation']['temp_f'];
			var img = data['current_observation']['icon_url'];
			var desc = data['current_observation']['weather'];
			var wind = data['current_observation']['wind_string'];

			//jQuery apply data to page <div>s
			$('#location').html(location);
			$('#temp').html(temperature);
			$('#desc').html(desc);
			$('#wind').html(wind);
			$('#img').attr('src', img);
		});
}



