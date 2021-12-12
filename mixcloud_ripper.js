function download(filename, text) {
    var element = document.createElement("a");

    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(text)
    );
    element.setAttribute("download", filename);

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

let title = document.querySelectorAll(".tracklist-table-row-song")
let titles = []
title.forEach(element => { titles.push(element.firstChild.title)});

let artist = document.querySelectorAll(".tracklist-table-row-artist")
let artists = []
artist.forEach(element => { artists.push(element.firstChild.innerText)});

data = ""
for(let i = 1; i < titles.length; ++i) {
  data += (artists[i] + " " + titles[i] + "\n").replace(/\&/g, "")
}

let mix_title = document.querySelector(".title-inner-wrapper").firstElementChild.firstElementChild.innerText
mix_title = mix_title.replace(/\s/g, "_")
download(mix_title + ".txt", data)