const bgItems = ["d2", "re4", "oot", "p3", "sc4", "hl"];
function enableBG(logo, bg) {
  document.querySelector(
    ".games"
  ).style.backgroundImage = `url("../img/gaming/${bg}")`;

  bgItems.forEach((b) => {
    if (b === logo) {
      document.getElementById(b).classList.add("img-selected");
    } else {
      document.getElementById(b).classList.remove("img-selected");
    }
  });
}
