const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.parentNode.classList.toggle("active");
    toggle.textContent = toggle.parentNode.parentNode.classList.contains(
      "active"
    )
      ? "x"
      : "+";
  });
});

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

//STIRI
document.addEventListener("DOMContentLoaded", function () {
  // Selectează toate butoanele de zoom și containerele imaginilor mari
  const zoomButtons = document.querySelectorAll(".zoom-btn");
  const fullImageContainer = document.createElement("div");
  fullImageContainer.classList.add("full-image-container");
  fullImageContainer.style.display = "none";
  document.body.appendChild(fullImageContainer);

  const fullImage = document.createElement("img");
  fullImage.classList.add("full-image");
  fullImageContainer.appendChild(fullImage);

  const closeButton = document.createElement("button");
  closeButton.classList.add("close-btn");
  closeButton.innerText = "X";
  fullImageContainer.appendChild(closeButton);

  // Eveniment pentru fiecare buton de zoom
  zoomButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const imgSrc =
        this.closest(".image-container").querySelector(".gallery-img").src;
      fullImage.src = imgSrc;
      fullImageContainer.style.display = "block";
    });
  });

  // Închide imaginea mare la click pe butonul "X"
  closeButton.addEventListener("click", function () {
    fullImageContainer.style.display = "none";
  });

  // Închidere și la click în afara imaginii
  fullImageContainer.addEventListener("click", function (e) {
    if (e.target === fullImageContainer) {
      fullImageContainer.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const firstSection = document.querySelector(".first-section");

  function handleScroll() {
    if (window.innerWidth <= 1200) {
      header.classList.remove("sticky"); // Dezactivează sticky dacă ecranul este mic
      return;
    }

    const sectionTop = firstSection.getBoundingClientRect().top;
    if (sectionTop <= 0) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll); // Se asigură că sticky e verificat la resize
});
