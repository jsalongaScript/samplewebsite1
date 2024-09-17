const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header_content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header_links", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".steps_card", {
  ...scrollRevealOption,
  interval: 500,
});

function findVehicle() {
  const pickupLocation = document.getElementById("pickup-location").value;
  const pickupDate = document.getElementById("pickup-date").value;
  const returnDate = document.getElementById("return-date").value;
  const sameLocation = document.getElementById("same-location").checked;

  alert(`Pick Up Location: ${pickupLocation}\nPick Up Date: ${pickupDate}\nReturn Date: ${returnDate}\nReturn to Same Location: ${sameLocation}`);
}

document.querySelectorAll('.details-btn').forEach(button => {
  button.addEventListener('click', function() {
      alert('Details for this car are coming soon!');
  });
});


const reviews = document.querySelectorAll('.review-card');
let currentReview = 0;

setInterval(() => {
    reviews[currentReview].style.display = 'none';
    currentReview = (currentReview + 1) % reviews.length;
    reviews[currentReview].style.display = 'block';
}, 3000);
