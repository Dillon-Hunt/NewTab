fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=Noosa%2C%20AU&callback=test&id=2172797&lang=null&units=%22metric%22", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "f943679dc4msh5ae6dabfc10d007p1ecc38jsnf1030bf929bf",
		"x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
	}
})
.then(data => {
    console.log(data);
})
//To Be Continued...