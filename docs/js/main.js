// dots section
const container = document.querySelector(".dot-container");

function createDots() {
  container.innerHTML = "";

  let numberOfDots = window.innerWidth <= 768 ? 5 : 15;
  for (let i = 0; i < numberOfDots; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    container.appendChild(dot);
  }
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot) => {
    let angle = Math.random() * (2 * Math.PI);
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;
    let speed = 0.01;
    let distance = Math.random() * 150 + 50;
    let ellipseX = 1.5;
    let ellipseY = 0.5;

    function animate() {
      angle += speed;
      let x = centerX + distance * Math.cos(angle) * ellipseX;
      let y = centerY + distance * Math.sin(angle) * ellipseY;

      let red = Math.floor((255 * (Math.sin(angle) + 1)) / 2);
      let green = Math.floor((255 * (Math.cos(angle) + 1)) / 2);
      let blue = 255 - red;

      dot.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

      let scale = 0.5 + 0.5 * Math.sin(angle);
      dot.style.transform = `scale(${scale})`;

      dot.style.left = x + "px";
      dot.style.top = y + "px";
      requestAnimationFrame(animate);
    }

    animate();
  });
}
createDots();
window.addEventListener("resize", createDots);

// change navbar property
const stickyElement = document.querySelector(".sticky-element");
let isSticky = false;

window.addEventListener("scroll", function () {
  if (window.scrollY > 100 && !isSticky) {
    stickyElement.style.position = "sticky";
    stickyElement.style.zIndex = "";
    stickyElement.style.top = "0";
    isSticky = true;
  } else if (window.scrollY <= 100 && isSticky) {
    stickyElement.style.position = "";
    isSticky = false;
  }
});

// set focus on each section for navbar
document.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  let currentSectionId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      pageYOffset >= sectionTop - sectionHeight / 3 &&
      pageYOffset < sectionTop + sectionHeight
    ) {
      currentSectionId = section.id;
    }
  });

  document.querySelectorAll("nav a").forEach((a) => {
    a.classList.remove("active");
  });

  if (currentSectionId) {
    document
      .querySelector(`nav a[href="#${currentSectionId}"]`)
      .classList.add("active");
  }
});

// for modal

var modals = document.querySelectorAll(".modal");
var modalImgs = document.querySelectorAll(".modal-content");
var portfolioLinks = document.querySelectorAll(".portfolio_link");
var closeButtons = document.querySelectorAll(".close-btn");
var nextButtons = document.querySelectorAll(".next");
var prevButtons = document.querySelectorAll(".prev");

var imageSets = [
  [
    "images/projects/sunnychildcare/sunnychildcare.png",
    "images/projects/sunnychildcare/sunnychildcare1.png",
    "images/projects/sunnychildcare/sunnychildcare2.png",
    "images/projects/sunnychildcare/sunnychildcare3.png",
    "images/projects/sunnychildcare/sunnychildcare4.png",
    "images/projects/sunnychildcare/sunnychildcare5.png",
    "images/projects/sunnychildcare/sunnychildcare6.png",
  ],
  [
    "images/projects/sunnychildcareAdmission/sunnychildcareAdmission.png",
    "images/projects/sunnychildcareAdmission/sunnychildcareAdmission1.png",
    "images/projects/sunnychildcareAdmission/sunnychildcareAdmission2.png",
  ],
  [
    "images/projects/rawg/rawg.png",
    "images/projects/rawg/rawg1.png",
    "images/projects/rawg/rawg2.png",
    "images/projects/rawg/rawg3.png",
    "images/projects/rawg/rawg4.png",
  ],
  [
    "images/projects/cloud/cloud.png",
    "images/projects/cloud/cloud1.png",
    "images/projects/cloud/cloud2.png",
    "images/projects/cloud/cloud3.png",
  ],
  [
    "images/projects/lts/lts.png",
    "images/projects/lts/lts1.png",
    "images/projects/lts/lts2.png",
  ],
  ["images/projects/production/production.png"],
  [
    "images/projects/scrollanimation/scrollanimation.png",
    "images/projects/scrollanimation/scrollanimation1.png",
    "images/projects/scrollanimation/scrollanimation2.png",
    "images/projects/scrollanimation/scrollanimation3.png",
  ],
];

var currentImageIndices = Array(imageSets.length).fill(0);

portfolioLinks.forEach((link, index) => {
  link.addEventListener("click", function () {
    currentImageIndices[index] = 0;
    modals[index].style.display = "flex";
    modalImgs[index].src = imageSets[index][currentImageIndices[index]];
  });
});

closeButtons.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    modals[index].style.display = "none";
  });
});

nextButtons.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    currentImageIndices[index] =
      (currentImageIndices[index] + 1) % imageSets[index].length;
    modalImgs[index].src = imageSets[index][currentImageIndices[index]];
  });
});

prevButtons.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    currentImageIndices[index] =
      (currentImageIndices[index] - 1 + imageSets[index].length) %
      imageSets[index].length;
    modalImgs[index].src = imageSets[index][currentImageIndices[index]];
  });
});
