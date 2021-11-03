
// DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
var biotext = document.getElementById("text-inside-bio");

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



biotext.innerHTML +=
  alter +
  " years old. After 12 years of touring through many European Countries as a musician, " +
  "I am now directing my focus onto coding. I love being in touch with fun and kind people and I`m" +
  " probably drinking too much coffee :) ";
