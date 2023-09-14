const sfPath = "./img/sf";
const sfSprites = [
  "ryu/idle1.png",
  "ryu/idle2.png",
  "ryu/move1.png",
  "ryu/move2.png",
  "ryu/move3.png",
  "ryu/move4.png",
  "ryu/hado1.png",
  "ryu/hado2.png",
  "ryu/hado3.png",
  "ryu/hado4.png",
  "ryu/shoryu1.png",
  "ryu/shoryu2.png",
  "ryu/shoryu3.png",
  "ryu/shoryu4.png",
  "ryu/shoryu5.png",
  "ryu/shoryu6.png",
  "ryu/crouch.png",
  "ken/idle1.png",
  "ken/idle2.png",
  "ken/move1.png",
  "ken/move2.png",
  "ken/move3.png",
  "ken/crouch.png",
];
const gamesPath = "./img/gaming";
const gameBGs = [
  "chronoBG.jpg",
  "d2BG.jpg",
  "hlBG.jpg",
  "mk3BG.jpg",
  "OOTBG.webp",
  "p3BG.jpg",
  "re4BG.jpg",
  "sc4.jpg",
];

window.onload = () => {
  sfSprites.forEach((img) => preloadImage(`${sfPath}/${img}`));
  gameBGs.forEach((img) => preloadImage(`${gamesPath}/${img}`));
};

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
  "mk",
  "t2",
  "btff",
  "bb",
  "gb",
  "bt",
  "ram",
  "star",
  "metallica",
  "megadeth",
  "a7x",
  "linkinpark",
  "slipknot",
  "korn",
  "ffdp",
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
  ).style.backgroundImage = `url("./img/${path}/${bg}")`;

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
