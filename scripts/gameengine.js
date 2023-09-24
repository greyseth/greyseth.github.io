let playerPos = 15;
let playerSpeed = 0.5;
const playerSize = 7;
let playerState = "idle";
let dirInput = {
  left: false,
  right: false,
  down: false,
};

let enemPos = 65;
let enemState = "idle";
const enemSize = 7;
let enemInput = {
  left: false,
  right: false,
  down: false,
};

let lastInputs = {
  p1: [],
  p2: [],
};

const wallRight = 90;
const wallLeft = 0;

const ryu = document.querySelector(".ryu");
const ken = document.querySelector(".ken");

let p1IsAttacking = false;
let p1AttackCountdown = 0;
let movingX = { moving: false, speed: 0.5 };
let movingY = { moving: false, speed: 0.5 };

let paused = false;

//Input handling
document.addEventListener("keydown", (e) => {
  if (!paused) {
    if (e.key === "a") {
      dirInput.left = true;
      addInput("p1", "back");
    } else if (e.key === "d") {
      dirInput.right = true;
      addInput("p1", "forward");
    } else if (e.key === "s") {
      dirInput.down = true;
      addInput("p1", "down");
    }

    if (e.key === "j") {
      enemInput.left = true;
      addInput("p2", "forward");
    } else if (e.key === "l") {
      enemInput.right = true;
      addInput("p2", "back");
    } else if (e.key === "k") {
      enemInput.down = true;
      addInput("p2", "down");
    }

    if (e.key === "c") {
      if (lastInputs.p1.toString() === "forward,down,forward") {
        updateState(ryu, "shoryu");
        p1IsAttacking = true;
        p1AttackCountdown = 650;
        movingX.moving = true;
        movingX.speed = 0.5;

        lastInputs.p1 = [];
      }

      if (
        (lastInputs.p1[0] === "down" && lastInputs.p1[1] === "forward") ||
        (lastInputs.p1[1] === "down" && lastInputs.p1[2] === "forward")
      ) {
        updateState(ryu, "hado");
        p1IsAttacking = true;
        p1AttackCountdown = 400;

        lastInputs.p1 = [];
      }
    }
  }

  if (e.key === "p") paused = !paused;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "a") dirInput.left = false;
  else if (e.key === "d") dirInput.right = false;
  else if (e.key === "s") dirInput.down = false;

  if (e.key === "j") enemInput.left = false;
  else if (e.key === "l") enemInput.right = false;
  else if (e.key === "k") enemInput.down = false;
});

const stateList = ["idle", "move", "crouch", "hado", "shoryu"];
function updateState(char, newState) {
  //Clears all animation states
  stateList.forEach((state) => {
    char.classList.remove(state);
  });

  //Sets new state
  char.classList.add(newState);
}

function addInput(char, dir) {
  let inputs = lastInputs[char];
  if (inputs.length < 3) inputs.push(dir);
  else {
    let newInputs = [];

    newInputs[0] = inputs[1];
    newInputs[1] = inputs[2];
    newInputs[2] = dir;

    lastInputs[char] = newInputs;
  }
}

function p1Update() {
  if (!p1IsAttacking) {
    if (dirInput.down) {
      updateState(ryu, "crouch");

      return;
    } else updateState(ryu, "idle");

    if (dirInput.right) {
      if (playerPos < enemPos - enemSize) {
        playerPos += playerSpeed;
        updateState(ryu, "move");
      }
    } else if (dirInput.left) {
      if (playerPos > wallLeft) {
        playerPos -= playerSpeed;
        updateState(ryu, "move");
      }
    } else {
      updateState(ryu, "idle");
    }

    ryu.style.left = `${playerPos}%`;
  } else {
    p1AttackCountdown -= 15;
    if (p1AttackCountdown <= 0) {
      p1IsAttacking = false;
      movingX.moving = false;
      movingY.moving = false;
    }
  }

  if (movingX.moving) {
    playerPos += movingX.speed;
    ryu.style.left = `${playerPos}%`;
  }
}

function p2Update() {
  if (enemInput.down) {
    updateState(ken, "crouch");

    return;
  } else updateState(ken, "idle");

  if (enemInput.right) {
    if (enemPos + enemSize < wallRight) {
      enemPos += playerSpeed;
      updateState(ken, "move");
    }
  } else if (enemInput.left) {
    if (enemPos > playerPos + playerSize) {
      enemPos -= playerSpeed;
      updateState(ken, "move");
    }
  } else {
    updateState(ken, "idle");
  }

  ken.style.left = `${enemPos}%`;
}

setInterval(() => {
  if (paused) {
    document.querySelector(".sf-pause").hidden = false;
    ryu.style.animationPlayState = "paused";
    ken.style.animationPlayState = "paused";
    return;
  } else {
    document.querySelector(".sf-pause").hidden = true;
    ryu.style.animationPlayState = "running";
    ken.style.animationPlayState = "running";
  }

  p1Update();
  p2Update();
}, 15);
