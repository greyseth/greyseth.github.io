let mkPaused = false;

let started = false;
let hasHit = false;
let meter = 0;

const meterSpeed = 11;
const meterAdd = 15;
const meterMax = 100;

//in miliseconds
const hitAnimTime = 700;
const postHitTime = 2500;

const char = document.querySelector(".scorps");
const fillBar = document.getElementById("fill");
const target = document.querySelector(".target");

let pressing = false;

document.addEventListener("keydown", (e) => {
  if (mkPaused) return;

  if (e.key === "f") {
    if (!started) started = true;
    pressing = true;
  }
});

function hit() {
  meter = meterMax;
  hasHit = true;

  char.classList.remove("s-idle");
  char.classList.add("s-hit");

  setTimeout(() => {
    if (meter >= meterMax) {
      target.classList.add("target-broken");
    }
  }, hitAnimTime);

  // setTimeout(() => {
  //   char.classList.remove("s-hit");
  //   char.classList.add("s-idle");
  // }, postHitTime);
}

function mkUpdate() {
  if (hasHit) return;

  if (started && (meter >= meterMax || meter <= -15)) {
    hit();
    return;
  }

  if (pressing) {
    meter += meterAdd;
    pressing = false;
  }

  if (started && meter > 0) {
    meter -= meterSpeed;
  }

  fillBar.style.height = `${meter}%`;
}

setInterval(mkUpdate, 100);
