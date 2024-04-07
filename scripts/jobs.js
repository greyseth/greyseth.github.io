const toPush = [
  { name: "itch-link", pos: 450, change: "link-in" },
  { name: "offer", pos: 640, change: "offer-in" },
  { name: "blender", pos: 1550, change: "blender-in" },
  { name: "blender-2", pos: 1550, change: "blender-in" },
  { name: "blender-3", pos: 1550, change: "blender-in" },
  { name: "blender-4", pos: 1550, change: "blender-in" },
  { name: "blender-5", pos: 1550, change: "blender-in" },
  { name: "blender-6", pos: 1550, change: "blender-in" },
  { name: "latest-proj", pos: 2250, change: "latest-in" },
];
toPush.forEach((s) => scrollAnims.push(s));

const galleryFolder = "./img/latestproj";
let selectedImg = `${galleryFolder}/CoverHor.jpg`;
const galleryImages = [
  `${galleryFolder}/level1.jpg`,
  `${galleryFolder}/level3.jpg`,
  `${galleryFolder}/level2.2.jpg`,
  `${galleryFolder}/level3.3.jpg`,
  `${galleryFolder}/level4.jpg`,
];

function updateGalleryImages() {
  document.querySelector("#proj-gallery").innerHTML = "";

  document.querySelector(".selected-image").src = selectedImg;
  galleryImages.forEach((img) => {
    const HTML = `<img src="${img}" onclick="viewGalleryImage('${img}')"/>`;
    document
      .querySelector("#proj-gallery")
      .insertAdjacentHTML("beforeend", HTML);
  });
}

function viewGalleryImage(select) {
  const selectedTemp = selectedImg;
  const galleryTemp = [...galleryImages];

  const targetIndex = galleryImages.findIndex((f) => f === select);
  galleryImages[targetIndex] = selectedTemp;
  selectedImg = galleryTemp[targetIndex];

  updateGalleryImages();
}

updateGalleryImages();
