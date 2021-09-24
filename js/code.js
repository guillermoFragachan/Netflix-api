console.log('dasda')

fetch("https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/inception",{
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com",
		"x-rapidapi-key": "d65ac9b76cmsh71ba0670489b3b5p1e9ad6jsn6a46df1306c0"
	}
})
.then(response => {
	return response.json();
}).then((data)=> console.log(data.titles[2].image))
.catch(err => {
	console.error(err);
});