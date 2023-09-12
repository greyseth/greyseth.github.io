let firstScroll = true;
let showHeader = false;
let update = false;
const header = document.querySelector("header");

document.addEventListener("scroll", (e) => {
  if (this.scrollY > 0 || firstScroll) {
    showHeader = true;
  } else {
    showHeader = false;
  }

  scrollAnims.forEach((s, i) => {
    if (this.scrollY >= s.pos) {
      const el = document.getElementById(s.name);
      window.requestAnimationFrame(() => {
        el.classList.add(s.change);
      });
      scrollAnims.splice(i, 1);
    }
  });

  updateHeader();
  firstScroll = false;
});

function updateHeader() {
  if (update === showHeader) return;

  if (showHeader) {
    header.classList.remove("header-out");
    header.classList.remove("header-in");
    setTimeout(() => {
      header.classList.add("header-out");
    }, 1);
  } else {
    header.classList.remove("header-out");
    header.classList.remove("header-in");
    setTimeout(() => {
      header.classList.add("header-in");
    }, 1);
  }

  update = showHeader;
}

// setInterval(updateHeader, 1000);
// window.addEventListener("keydown", (e) => {
//   if (e.key === "t") {
//     alert(`scroll is at position ${this.scrollY}`);
//   }
// });

const scrollAnims = [];
// setInterval(() => {
//   scrollAnims.forEach((s) => {
//     if (this.scrollY >= s.pos) {
//       const el = document.getElementById(s.name);
//       window.requestAnimationFrame(() => {
//         el.classList.add(s.change);
//       });
//     }
//   });
// }, 500);

const notSecret = `
<div class="secret-container">
<div class="secret-msg">
  <p>Secret input accepted</p>
  <button onclick="window.location = './forbidden.html'">
    Get secret
  </button>
  <button onclick="document.querySelector('.secret-container').remove();">
    Close
  </button>
</div>
</div>`;

let secretInput = {
  up: 0,
  down: 0,
  left: 0,
  right: 0,
};

document.addEventListener("keydown", (e) => {
  let isArrow = false;

  switch (e.key) {
    case "ArrowLeft":
      secretInput.left++;
      isArrow = true;
      break;
    case "ArrowRight":
      secretInput.right++;
      isArrow = true;
      break;
    case "ArrowDown":
      secretInput.down++;
      isArrow = true;
      break;
    case "ArrowUp":
      secretInput.up++;
      isArrow = true;
      break;
  }

  if (isArrow) {
    let incomplete = false;
    for (const dir in secretInput) {
      if (secretInput[dir] < 2) incomplete = true;
    }

    if (!incomplete)
      document
        .querySelector("main")
        .insertAdjacentHTML("afterbegin", notSecret);
  }
});
