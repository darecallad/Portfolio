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

var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var images = ["../docs/images/sunnychildcare.png", "...other images..."];
var currentImageIndex = 0;

document
  .querySelector(".portfolio_link")
  .addEventListener("click", function () {
    modal.style.display = "flex";
    modalImg.src = images[currentImageIndex];
  });

function closeModal() {
  modal.style.display = "none";
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  modalImg.src = images[currentImageIndex];
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  modalImg.src = images[currentImageIndex];
}
