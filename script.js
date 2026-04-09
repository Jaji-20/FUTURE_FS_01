// TYPING EFFECT
const text = "Full Stack Developer | Clean UI Enthusiast";
let i = 0;

function typing() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing, 80);
  }
}
typing();

// SMOOTH SCROLL
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// NAV ACTIVE
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// SECTION HIGHLIGHT
const allSections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSection = null;

  allSections.forEach(section => {
    const top = window.scrollY;
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;

    if (top >= offset && top < offset + height) {
      currentSection = section;
    }
  });

  allSections.forEach(section => {
    section.classList.remove("active-section");
  });

  if (currentSection) {
    currentSection.classList.add("active-section");
  }
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  const trigger = window.innerHeight - 100;

  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < trigger) {
      section.classList.add("active");
    }
  });
});
// PROJECT MODAL
function openProject(title, desc, tech, link) {
  document.getElementById("projectModal").style.display = "flex";
  document.getElementById("projectTitle").innerText = title;
  document.getElementById("projectDesc").innerText = desc;
  document.getElementById("projectTech").innerText = tech;
  document.getElementById("projectLink").href = link;
}

function closeProject() {
  document.getElementById("projectModal").style.display = "none";
}