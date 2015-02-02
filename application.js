if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(success,error);
}
else {
alert('Geolocation is not supported');
}

function error() {
alert("That's weird! We couldn't find you!");
}

function success(position) {
  
      var apikey = "10cfa1d790a05aa4"
      var weatherForecast = "http://api.wunderground.com/api/"+ apikey +"/forecast/geolookup/conditions/q/" + position.coords.latitude + "," + position.coords.longitude + ".json";

      $.getJSON( weatherForecast, function( data ) {
      		var location =data['location']['city'];
			var temp = data['current_observation']['temp_f'];
			var img = data['current_observation']['icon_url'];
			var desc = data['current_observation']['weather'];
			var wind = data['current_observation']['wind_string'];

						//setting the spans to the correct parameters
			$('#location').html(location);
			$('#temp').html(temp);
			$('#desc').html(desc);
			$('#wind').html(wind);
			//filling the image src attribute with the image url
			$('#img').attr('src', img);
		});
}



