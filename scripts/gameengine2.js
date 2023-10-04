let mkPaused = false;

let started = false;
let meter = 0;

const meterSpeed = 10;
const meterAdd = 15;
const meterMax = 100;

let pressing = false;

document.addEventListener("keydown", (e) => {
  if (mkPaused) return;

  if (e.key === "f") {
    if (!started) started = true;
    pressing = true;
  }
});

function mkUpdate() {
  if (pressing) {
    meter += meterAdd;
    pressing = false;
  }

  if (started) {
    meter -= meterSpeed;
  }

  document.getElementById("tempdisplay").textContent = meter;
}

setInterval(mkUpdate, 100);
