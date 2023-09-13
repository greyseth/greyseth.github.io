const imgPath = "./img/sf";
const preloadImages = [
  "ryu/idle1.png",
  "ryu/idle2.png",
  "ryu/move1.png",
  "ryu/move2.png",
  "ryu/move3.png",
  "ryu/move4.png",
  "ken/idle1.png",
  "ken/idle2.png",
  "ken/move1.png",
  "ken/move2.png",
  "ken/move3.png",
];
window.onload = () => {
  preloadImages.forEach((img) => preloadImage(`${imgPath}/${img}`));
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

let playerPos = 15;
let playerSpeed = 0.5;
const animStates = {};
let dirInput = {
  left: false,
  right: false,
  down: false,
};

let enemPos = 15;
let enemInput = {
  left: false,
  right: false,
  down: false,
};

// const atkRate = 1;
// let isAttacking = false;
// let nextAtkTime = 0;
// let atkInput = {
//   punch: { input: false, time: 1000 },
//   kick: { input: false, time: 1000 },
// };

const ryu = document.querySelector(".ryu");
const ken = document.querySelector(".ken");

document.addEventListener("keydown", (e) => {
  if (e.key === "a") dirInput.left = true;
  else if (e.key === "d") dirInput.right = true;
  else if (e.key === "s") dirInput.down = true;

  if (e.key === "j") enemInput.left = true;
  else if (e.key === "l") enemInput.right = true;
  else if (e.key === "k") enemInput.down = true;

  // if (e.key === "j") {
  //   isAttacking = true;

  //   ryu.classList.remove("ryu-idle");
  //   ryu.classList.add("ryu-punch");

  //   // nextAtkTime = timePassed + 1 / atkRate;

  //   setTimeout(() => {
  //     ryu.classList.remove("ryu-punch");
  //     ryu.classList.add("ryu-idle");

  //     isAttacking = false;
  //   }, atkInput.punch.time);
  // } else if (e.key == "k") atkInput.kick.input = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "a") dirInput.left = false;
  else if (e.key === "d") dirInput.right = false;
  else if (e.key === "s") dirInput.down = false;

  if (e.key === "j") enemInput.left = false;
  else if (e.key === "l") enemInput.right = false;
  else if (e.key === "k") enemInput.down = false;

  // if (e.key === "j") atkInput.punch.input = false;
  // else if (e.key == "k") atkInput.kick.input = false;
});

setInterval(() => {
  // let isAttacking = false;
  // if (!isAttacking) {
  //   if (atkInput.punch.input) {
  //     isAttacking = true;

  //     ryu.classList.remove("ryu-idle");
  //     ryu.classList.add("ryu-punch");

  //     nextAtkTime = timePassed + 1 / atkRate;

  //     setTimeout(() => {
  //       ryu.classList.remove("ryu-punch");
  //       ryu.classList.add("ryu-idle");

  //       isAttacking = false;
  //     }, atkInput.punch.time);
  //   } else if (atkInput.kick.input) {
  //     ryu.classList.remove("ryu-idle");
  //     //add kick class

  //     nextAtkTime = timePassed + 1 / atkRate;

  //     setTimeout(() => {
  //       //remove kick class
  //       ryu.classList.add("ryu-idle");
  //     }, atkInput.kick.time);
  //   }
  // }

  p1Update();
  p2Update();
}, 15);

function p1Update() {
  if (dirInput.down) {
    ryu.classList.remove("move");
    ryu.classList.remove("idle");
    ryu.classList.add("crouch");

    return;
  } else {
    ryu.classList.remove("crouch");
  }

  if (dirInput.right) playerPos += playerSpeed;
  if (dirInput.left) playerPos -= playerSpeed;

  if (dirInput.left || dirInput.right) {
    ryu.classList.remove("idle");
    ryu.classList.add("move");
  } else {
    ryu.classList.remove("move");
    ryu.classList.add("idle");
  }

  ryu.style.left = `${playerPos}%`;
}

function p2Update() {
  if (enemInput.down) {
    ken.classList.remove("move");
    ken.classList.remove("idle");
    ken.classList.add("crouch");

    return;
  } else {
    ken.classList.remove("crouch");
  }

  if (enemInput.right) enemPos -= playerSpeed;
  if (enemInput.left) enemPos += playerSpeed;

  if (enemInput.left || enemInput.right) {
    ken.classList.remove("idle");
    ken.classList.add("move");
  } else {
    ken.classList.remove("move");
    ken.classList.add("idle");
  }

  ken.style.right = `${enemPos}%`;
}
