/**
 * Xcenda Programming Test
 * Tatiana Kerick

 *http://api.trakt.tv/shows/trending.json/apikey
**/

$( document ).ready(function() {

var url = 'http://api.trakt.tv/shows/trending.json/7ebdb3e13fd17aba610e27ce538ca0e2';

$.ajax({
	url: url,
	context: document.body,
	type: 'GET',
	dataType: 'jsonp',
	success: function(response) {

		for(var i = 0; i < 10; i++) {
			
			console.log(response[i]);

			var shows = response[i].title;

			var watchers = response[i].watchers;

			console.log(shows);

			$('.showList').append('<li>' + shows + ' &nbsp; - &nbsp;  ' + 'Viewers: ' + watchers + '</li>');

		}

	}
});



});//doc