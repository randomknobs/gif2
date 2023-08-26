/* 0. GIPHY API key */ 
var API_key = "tSpTyBGW4UGXXGsx6f5oy92rPlnnUiJ7";

/* 1. Grab the input value */
var locale = navigator.language;
var translation = new Map();
translation.set("en", "#StayHome");
translation.set("es", "#QuedateEnCasa");
translation.set("it", "#StareACasa");
translation.set("fr", "#ResterALaMaison");

var title = document.querySelector("#title");
var input = document.querySelector(".js-userinput");
var button = document.querySelector(".js-go");
var giphyTvContainer = document.querySelector(".giphyTvContainer")
var jsContainer = document.querySelector(".js-container");

translation.forEach((value, key) => {
    if(locale.match(key)) {
        title.innerHTML = value + " - " + title.innerHTML;
    }
});

input.addEventListener('keyup', function(e){
    if(e.which === 13){
        jsContainer.innerHTML = "";
        APIsearch(input.value);
    }
});

button.addEventListener('click', function(){
    jsContainer.innerHTML = "";
    APIsearch(input.value);
});

APItrending();




/* 2. do the data stuff with the API */
function APItrending() {

    var API_data;
    var API_trending_url = `https://api.giphy.com/v1/gifs/trending?api_key=${API_key}&limit=1000&offset=0&rating=G&lang=en`;
    
    var GIPHYAPIResponse;
    var GIPHYAPIRequest = new XMLHttpRequest();
    GIPHYAPIRequest.open('GET', API_trending_url);
    GIPHYAPIRequest.send();
    
    GIPHYAPIRequest.addEventListener('load', function(e){
        GIPHYAPIResponse = e;
        API_data = GIPHYAPIResponse.target.response;
        pushToGiphyTV(API_data);
    });
}

function APIsearch(searchText){

    var API_data;
    var API_search_url = `https://api.giphy.com/v1/gifs/search?api_key=${API_key}&q=${searchText}&limit=200&offset=0&rating=G&lang=en`;
    
    var GIPHYAPIResponse;
    var GIPHYAPIRequest = new XMLHttpRequest();
    GIPHYAPIRequest.open('GET', API_search_url);
    GIPHYAPIRequest.send();
    
    GIPHYAPIRequest.addEventListener('load', function(e){
        GIPHYAPIResponse = e;
        API_data = GIPHYAPIResponse.target.response;
        pushToJSContainer(API_data);
    });

}



/* 3. Show me the GIFs */
function pushToGiphyTV(data) {

    var response = JSON.parse(data);
    var imageURLs = shuffle(response.data);

    imageURLs.forEach((element, i) => {
        var imageURL = element.images.fixed_height.url;

        setTimeout(() => {
            giphyTvContainer.innerHTML = '<img src="'+imageURL+'" class="container-tv">';
            if(i === imageURLs.length) {
                APItrending();
            }
        }, 7000 * i);

    });
}

function pushToJSContainer(data) {

    var response = JSON.parse(data);
    var imageURLs = response.data;

    imageURLs.forEach(element => {
        var imageURL = element.images.fixed_height.url;
    
        console.log(imageURL);
    
        jsContainer.innerHTML += '<img src="'+imageURL+'" class="container-image">';
    });

}

/* 4. Aditional functions */
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }