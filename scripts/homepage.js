const toPush = [
  { name: "bio-main", pos: 300, change: "bio-in" },
  { name: "likes", pos: 600, change: "likes-dislikes-in" },
  { name: "dislikes", pos: 600, change: "likes-dislikes-in" },
  { name: "top-bar", pos: 750, change: "decor-in" },
  { name: "bottom-bar", pos: 750, change: "decor-in" },
  { name: "more", pos: 1300, change: "more-in" },
];
toPush.forEach((p) => scrollAnims.push(p));

let isZooming = false;
let zoomedIn;

function showText(e) {
  if (isZooming) return;

  isZooming = true;
  zoomedIn = e;
  const el = document.getElementById(e);

  el.classList.remove("desc-in");
  el.classList.remove("desc-out");
  // setTimeout(() => {
  //   el.classList.add("desc-in");
  // }, 1);
  window.requestAnimationFrame(() => {
    el.classList.add("desc-in");
  });
}

function hideText() {
  if (isZooming) {
    const desc = document.getElementById(zoomedIn);

    desc.classList.remove("desc-in");
    // setTimeout(() => {
    //   desc.classList.add("desc-out");
    // }, 1);
    window.requestAnimationFrame(() => {
      desc.classList.add("desc-out");
    });

    isZooming = false;
  }
}

window.addEventListener("keydown", (e) => {
  hideText();
});

window.addEventListener("mousedown", () => {
  hideText();
});

const lists = ["likes", "dislikes"];
lists.forEach((li) => {
  const list = document.getElementById(li);
  list.addEventListener("click", () => {
    let i = 0;
    for (const child of list.children) {
      if (child.innerHTML === "I LIKE..." || child.innerHTML === "I HATE...")
        continue;

      setTimeout(() => {
        child.classList.remove("list-move");
        window.requestAnimationFrame(() => {
          child.classList.add("list-move");
        });
      }, 100 * i);

      i++;
    }
  });
});
