/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
// Use a variable for all sections of the page
const sections = document.querySelectorAll("section");
// use variable for navigation bar list
const uL = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
// Creating a hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar__menu ul");
const navbarList = document.querySelector("#navbar__list");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const menu = document.querySelector(".navbar__menu");
const menuBtn = document.querySelector(".navbar__menu .hamburger");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("opened");
});

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
// looping over all sections
function generateNavbar() {
  const sections = Array.from(document.getElementsByTagName("section"));
  const navlist = document.getElementById("navbar__list");
  for (section of sections) {
    const sectionId = section.id;
    const sectionName = section.dataset.nav;
    // create li & anchor tag
    const li = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#" + sectionId;
    link.text = sectionName;
    // Add a CSS style to the navigation menu
    link.classList.add("menu__link");
    // Adding smooth scrolling when moving to an item

    // adding a link to the list
    li.appendChild(link);
    // adding the list to the navbar
    navlist.appendChild(li);
  }
}
generateNavbar();
// Adding smooth scrolling when moving to an item
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", function (e) {
    e.preventDefault();
    let anchorLink = document.querySelector(this.getAttribute("href"));
    anchorLink.scrollIntoView({
      block: "start",
      alignTop: true,
      behavior: "smooth",
    });
  });
});

// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", () => {
  const section = document.querySelectorAll("sections");
  sections.forEach((section) => {
    // Using getBoundingClientRect to find the dimensions of the rectangle surrounding the section
    const check = section.getBoundingClientRect();
    const min = -50;
    const max = 250;
    if (check.top > min && check.top <= max) {
      // adding the active section
      section.classList.add("your-active-class");
      document
        .querySelector(`a[href="#${section.id}"]`)
        .classList.add("active");
    } else {
      // remove the active section
      section.classList.remove("your-active-class");
      document
        .querySelector(`a[href="#${section.id}"]`)
        .classList.remove("active");
    }
  });
});

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// Create a go up button

// Use the go up button variable
const btn = document.getElementById("btn");
// Show and hide the button when scrolling is done
window.onscroll = function () {
  if (scrollY >= 450) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
// Scroll up smoothly with the button
btn.onclick = function () {
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
