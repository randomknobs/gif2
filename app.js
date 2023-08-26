const img = document.querySelector("img");
const btn = document.querySelector("button");
const form = document.querySelector(".form");
const search = document.getElementById("search");

btn.addEventListener("click", loadGIF);
form.addEventListener("submit", loadGIF);

function loadGIF(e) {
  var searchValue = search.value; // Create a variable with the input value
  if (!searchValue) {
    searchValue = "random"; // If the value is empty, we put the 'random' value
  }
  e.preventDefault();
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=g3TEgnU2pGODGJrcvHcn36HwOhK3E8l9&s=" +
      searchValue,
    {
      // Here we use the variable searchValue with what was typed by the user.
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      img.src = json.data.images.fixed_height.url;
    })
    .catch(function (err) {
      console.log(err);
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
