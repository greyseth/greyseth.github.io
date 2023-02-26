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
window.addEventListener("keydown", (e) => {
  if (e.key === "t") {
    alert(`scroll is at position ${this.scrollY}`);
  }
});

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
