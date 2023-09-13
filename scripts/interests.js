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

let timePassed = 0;

let playerPos = 15;
let playerSpeed = 0.5;
let dirInput = {
  left: false,
  right: false,
};

const atkRate = 1;
let isAttacking = false;
let nextAtkTime = 0;
let atkInput = {
  punch: { input: false, time: 1000 },
  kick: { input: false, time: 1000 },
};

const ryu = document.querySelector(".ryu");

document.addEventListener("keydown", (e) => {
  if (e.key === "a") dirInput.left = true;
  else if (e.key === "d") dirInput.right = true;

  if (e.key === "j") {
    isAttacking = true;

    ryu.classList.remove("ryu-idle");
    ryu.classList.add("ryu-punch");

    // nextAtkTime = timePassed + 1 / atkRate;

    setTimeout(() => {
      ryu.classList.remove("ryu-punch");
      ryu.classList.add("ryu-idle");

      isAttacking = false;
    }, atkInput.punch.time);
  } else if (e.key == "k") atkInput.kick.input = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "a") dirInput.left = false;
  else if (e.key === "d") dirInput.right = false;

  // if (e.key === "j") atkInput.punch.input = false;
  // else if (e.key == "k") atkInput.kick.input = false;
});

setInterval(() => {
  const ken = document.querySelector(".ken");

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

  if (!isAttacking) {
    if (dirInput.right) playerPos += playerSpeed;
    if (dirInput.left) playerPos -= playerSpeed;

    if (dirInput.left || dirInput.right) {
      ryu.classList.remove("ryu-idle");
      ryu.classList.add("ryu-move");
    } else {
      ryu.classList.remove("ryu-move");
      ryu.classList.add("ryu-idle");
    }

    ryu.style.left = `${playerPos}%`;
  }

  timePassed += 1;
}, 15);
