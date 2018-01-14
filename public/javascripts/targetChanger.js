let audience = ["Podcast", "Broadcast", "Video"];
let target = document.querySelector("body > div.content > h1 > span");

let changer = setInterval(function() {
    switch (target.innerText) {
      case "Podcast":
        target.innerText = audience[1];
        break;
      case "Broadcast":
        target.innerText = audience[2];
        break;
      case "Video":
        target.innerText = audience[0];
        break;
      default:
    }
  }, 5000);
