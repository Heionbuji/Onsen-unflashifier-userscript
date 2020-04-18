// ==UserScript==
// @name     Onsen unflashifier
// @include	 http://www.onsen.ag/index.html?pid=* 
// @include  https://www.onsen.ag/index.html?pid=*
// @version  1
// @grant    none
// ==/UserScript==
// Note: Doesn't work if you change the show from within the same page (meaning the URL doesn't change).
// Also doesn't work if you just click play on the front page.

let code = location.search.substr(5);
let url = 'http://www.onsen.ag/data/api/getMovieInfo/' + code;

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let audio = document.createElement('audio');
	    audio.src = xhttp.responseText.match(/https[^"]+/)[0]; // this should work as long as the format of the response doesn't change
		audio.controls = true;
        audio.style = "padding-left: 82px"; // this should line up the player with the image, but YMMV
		document.getElementById('movieWrap').appendChild(audio);
    }
};
xhttp.open("GET", url, true);
xhttp.send();

