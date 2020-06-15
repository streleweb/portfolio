// DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const biotext = document.getElementById("text-inside-bio");

// NavItems
const navItems = document.querySelectorAll(".nav-item");

//Set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close"); //add Class called close
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close"); //add Class called close
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    //set menu state
    showMenu = false;
  }
}

// BIO Text, Alter Update
function calculate_age(dateOfBirth) {
  var diff_ms = Date.now() - dateOfBirth.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

var alter = calculate_age(new Date(1990, 3, 26));

biotext.innerHTML =
  "Mein Name ist Peter Strele und ich bin " +
  alter +
  " Jahre alt. Nach 12 Jahren als hauptberuflicher Musiker, sehe ich" +
  "meine berufliche Zukunft als Programmierer. Ich studiere zur Zeit IT mit dem Schwerpunkt Programmieren am IT-Kolleg Imst und" +
  "möchte mich auf Web-Developement spezialisieren. Ansonsten bewege mich gern in der freien Natur und begeistere mich für Sportarten" +
  " wie Radfahren, Joggen und Darts.";
