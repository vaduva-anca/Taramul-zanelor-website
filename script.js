const toggles = document.querySelectorAll(".faq-toggle");

////////////////
const buttonTest = document.querySelector(".submmit-button-test");

buttonTest.addEventListener("click", async (e) => {
  e.preventDefault();

  const copil = {
    nume: document.querySelector('input[placeholder="Name"]').value,
    prenume: document.querySelector('input[placeholder="Prenume"]').value,
    cnp: document.querySelector('input[placeholder="CNP"]').value,
    dataNasterii: document.querySelector('input[type="date"]').value,
    locNastere: document.querySelector('input[placeholder="Locul nasterii"]')
      .value,
    nationalitate: document.querySelector(
      'input[placeholder="Nationalitate"]'
    ).value,
    cetatenie: document.querySelector('input[placeholder="Cetatenie"]').value,
    religie: document.querySelector('input[placeholder="Religia"]').value,
    alergii: document.querySelector('input[placeholder="Afectiuni/Alergii"]')
      .value,
    cerinteSpeciale: document.querySelector(
      'input[placeholder="Cerinte speciale"]'
    ).value,
    adresa: document.querySelector('input[placeholder="Adresa"]').value,
    telefonUrgenta: document.querySelector(
      'input[placeholder="Telefon situatii urgenta"]'
    ).value,
  };

  const mama = {
    nume: document.querySelector(".name-mama").value,
    prenume: document.querySelector(".prenume-mama").value,
    email: document.querySelector(".email-mama").value,
  };

  const tata = {
    nume: document.querySelector(".name-tata").value,
    prenume: document.querySelector(".prenume-tata").value,
    email: document.querySelector(".email-tata").value,
  };

  const programAles = document.querySelector("#program").checked
    ? "Program lung"
    : "Program scurt";

  const acorduri = {
    boliColectivitate: document.getElementById("checkbox1").checked,
    prelucrareDatePersonale: document.getElementById("checkbox2").checked,
  };

  // Trimite datele către backend-ul Node.js:
  try {
    const response = await fetch("http://localhost:3000/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        copil,
        mama,
        tata,
        program: programAles,
        acorduri,
      }),
    });

    const result = await response.json();

    alert(result.message);
  } catch (error) {
    alert("Eroare la trimiterea datelor!");
    console.error(error);
  }
});
console.log(buttonTest);


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

// const checkbox1 = document.getElementById("checkbox1");
// const checkbox2 = document.getElementById("checkbox2");
// const button = document.getElementById("submitButton");

// function checkCheckboxes() {
//   if (checkbox1.checked && checkbox2.checked) {
//     button.disabled = false;
//     button.classList.add("enabled");
//   } else {
//     button.disabled = true;
//     button.classList.remove("enabled");
//   }
// }

//checkbox1.addEventListener("change", checkCheckboxes);
//checkbox2.addEventListener("change", checkCheckboxes);

document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion-header");

  accordions.forEach((header) => {
    header.addEventListener("click", function () {
      const content = this.nextElementSibling; // Selectează div-ul .accordion-content corespunzător
      const icon = this.querySelector("#toggle-icon");

      // Comută secțiunea curentă
      if (content.style.display === "block") {
        content.style.display = "none";
        icon.textContent = "+";
        this.classList.remove("active"); // Îndepărtează clasa activă
      } else {
        content.style.display = "block";
        icon.textContent = "-";
        this.classList.add("active"); // Adaugă clasa activă
      }
    });
  });
});

//TESTIMONIALS
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "Grădinița aceasta oferă un mediu cald și prietenos, exact ce aveam nevoie pentru fetița mea. Personalul este bine pregătit, iar comunicarea cu părinții este excelentă. În plus, copiii sunt încurajați să exploreze și să se exprime liber.",
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Un loc unde copiii sunt tratați cu dragoste și respect! Am observat progrese mari la băiețelul meu, atât în vorbire, cât și în socializare. Mă bucur că l-am înscris aici și sunt recunoscător pentru răbdarea și implicarea personalului.",
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Am ales această grădiniță datorită recomandărilor și nu am regretat nicio clipă! Programul educațional este bine structurat, iar personalul este profesionist și dedicat. Copiii sunt mereu implicați în activități creative, ceea ce îi ajută să se dezvolte armonios.",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Nu am crezut că o adaptare poate fi atât de ușoară! De la prima zi, personalul a știut cum să-l facă pe băiețelul meu să se simtă confortabil. Acum merge cu entuziasm în fiecare dimineață și a învățat o mulțime de lucruri noi. O grădiniță exemplară!",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "Sunt mulțumit per ansamblu de grădiniță. Activitățile sunt educative, iar personalul este amabil. Singurul aspect pe care l-aș îmbunătăți este varietatea meselor oferite, deoarece meniul ar putea fi mai diversificat.",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "Nu am crezut că o adaptare poate fi atât de ușoară! De la prima zi, personalul a știut cum să-l facă pe băiețelul meu să se simtă confortabil. Acum merge cu entuziasm în fiecare dimineață și a învățat o mulțime de lucruri noi. O grădiniță exemplară!",
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "Un loc unde copiii sunt tratați cu dragoste și respect! Am observat progrese mari la băiețelul meu, atât în vorbire, cât și în socializare. Mă bucur că l-am înscris aici și sunt recunoscător pentru răbdarea și implicarea personalului.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
//OPERATIONS
///////////////////////////////////////
// Tabbed component
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");
tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
//////////////////////////////////////
// Reveal sections
const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});




