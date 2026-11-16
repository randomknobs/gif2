/*
	Let's custom everything!
 	javascript:alert("hi");
*/
var gifProvider = "klipy";
var klipyAPIKey = "diInsVg1vb3WHRuKnnSX4bw7VfYqWuDZcg5T02yh2qBYY06EHqckebR0YJSkCg2N";


// Replace my temp API key with yours. Grab one here: https://developers.giphy.com/ (it's free)
var giphyAPIKey = "vG3d4pRIarPmO7NE0myIFimWTS8woSeh";

// The title of your own GiphyTV :)
var giphyTVUsername = "";

// The description where you can put some HTML inside!
var giphyTVDescription = "";

// Your category of Giphy GIFs, only one word please.
var giphyTVSearch = "random";

// Delay between GIFs (5000=5seconds)
var giphyTVDelay = 8000;

// MAGIC! (don't touch, it hurts)
document.getElementById("giphyTVUsername").innerHTML = giphyTVUsername;
document.getElementById("giphyTVDescription").innerHTML = giphyTVDescription;
