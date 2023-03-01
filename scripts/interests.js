const toPush = [
  { name: "gamesDesc", pos: 700, change: "games-extra-in" },
  { name: "gamesDesc2", pos: 710, change: "games-extra-in" },
  { name: "moviesDesc", pos: 1800, change: "games-extra-in" },
];
toPush.forEach((s) => scrollAnims.push(s));

const bgItems = [
  "d2",
  "re4",
  "oot",
  "p3",
  "sc4",
  "hl",
  "t2",
  "btff",
  "bb",
  "gb",
  "bt",
  "ram",
  "star",
];
function enableBG(logo, bg, target = "games") {
  let path = "";
  switch (target) {
    case "games":
      path = "gaming";
      break;
    case "movies":
      path = "movies";
      break;
    case "music":
      path = "music";
      break;
  }

  document.getElementById(
    target
  ).style.backgroundImage = `url("../img/${path}/${bg}")`;

  bgItems.forEach((b) => {
    if (b === logo) {
      document.getElementById(b).classList.add("img-selected");
    } else {
      document.getElementById(b).classList.remove("img-selected");
    }
  });
}

function reverse(target) {
  document.getElementById(target).classList.toggle("reversed");
}
