

//POST DATA IN API
function postData(_obj) {
	fetch("https://striveschool-api.herokuapp.com/api/movies", {
		method: 'POST',
		body: JSON.stringify(_obj),
		headers: {

			"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWM5NDRiYjUzZDAwMTViMTllY2MiLCJpYXQiOjE2MzI0NzY2NDAsImV4cCI6MTYzMzY4NjI0MH0.EfADlnD4qaCkTQXgxZufji8eoBYtPLM0N5yAamp7gCU",
			'Content-Type': 'application/json'
		}
	})



}



//empty array of movies 
let arrayOfMoviees = []

// downloading data from external api to make own array and pass it trhout post method
function makeArrayOfMovies(_gnre) {



	//FETCHIN IMGs urls
	fetch("https://imdb8.p.rapidapi.com/title/get-images?tconst=tt0944947&limit=21", {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "imdb8.p.rapidapi.com",
			"x-rapidapi-key": "d65ac9b76cmsh71ba0670489b3b5p1e9ad6jsn6a46df1306c0"
		}
	})
		.then(response => {
			return response.json();
		}).then((data) => {


			console.log(data.images)
			data.images.forEach(e => {
				let obj = {
					name: e.caption,
					description: e.createdOn,
					category: _gnre,
					imageUrl: e.url

				}

				arrayOfMoviees.push(obj)
			});

			arrayOfMoviees.forEach(e => {
				postData(e)


			})

		})
		.catch(err => {
			console.error(err);
		})

	return arrayOfMoviees

}

//getdata from api
function getData(_gnre='comedy') {

	//FETCHING DTA FROM API
	fetch("https://striveschool-api.herokuapp.com/api/movies/"+_gnre ,  {
		headers: {
			"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTRiMWM5NDRiYjUzZDAwMTViMTllY2MiLCJpYXQiOjE2MzI0NzY2NDAsImV4cCI6MTYzMzY4NjI0MH0.EfADlnD4qaCkTQXgxZufji8eoBYtPLM0N5yAamp7gCU"
		}
	})
		.then(response => {
			return response.json()
		})
		.then((data) => {
			

			createCarousel(data)


			console.log(data)
		})
		.catch(err => {
			console.error(err);
		})


}

//create element passing data

function createCarousel(_data, _row='trendingNow' ){
	let rowNode = document.getElementById(_row)
	let IMGs = document.querySelectorAll(`#${_row} > div > img`)//array of images from the file

	let  dataEXAMPLE = 'https://m.media-amazon.com/images/M/MV5BNGVmNzRiNzEtNjBkOS00MzUxLWFjNTktZDM2MGRlODhlYzAyXkEyXkFqcGdeQXVyNTYxNTc2OTg@._V1_.jpg'



	for(let i =0; i<IMGs.length; i++){
		IMGs[i].src=_data[i].imageUrl


	}




}



window.onload = function () {

let romanceButton = document.getElementById('romance')
romanceButton.addEventListener('click', ()=>{
	getData('romance')

})

let comedyButton = document.getElementById('comedy')
comedyButton.addEventListener('click', ()=>{
	getData()

})
let FantasyButton = document.getElementById('fantasy')
FantasyButton.addEventListener('click', ()=>{
	getData('fantasy')

})







}

