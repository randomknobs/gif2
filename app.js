const img = document.querySelector("img");
const btn = document.querySelector("button");
const form = document.querySelector(".form");
const search = document.getElementById("search");

btn.addEventListener("click", loadGIF);
form.addEventListener("submit", loadGIF);

function loadGIF(e) {
 var apiKey = '0HaE831ZSEgJOV6ELIn13XPVEZRiif5S';
  var url = 'http://api.giphy.com/v1/gifs/search?q=';
  var query = status;
  $.getJSON(url + query + apiKey, function(data) {
    $('body').css('background-image', 'url(' + data.data[5].images.original.url + ')');
  });
}

/* Refactored code using async and await
const refactorimg = document.querySelector("img");

async function getCats() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats",
    { mode: "cors" }
  );
  const catData = await response.json();
  img.src = catData.data.images.original.url;
}
getCats();

document.addEventListener("DOMContentLoaded", loadGIF);
*/
