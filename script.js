// Function to check if an element is in the viewport
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to pause the video when it is not in the viewport
function pauseVideoIfNotInViewport() {
  var video1 = document.getElementById('video-player1');
  var videoSection1 = document.getElementById('video-section1');
  var video2 = document.getElementById('video-player2');
  var videoSection2 = document.getElementById('video-section2');

  if (!isElementInViewport(videoSection1)) {
    video1.pause();
  }
  if (!isElementInViewport(videoSection2)) {
    video2.pause();
  }
}

// Event listener for scroll events
window.addEventListener('scroll', pauseVideoIfNotInViewport);

// Event listener for the page load to initially pause the video if not in the viewport
window.addEventListener('load', pauseVideoIfNotInViewport);



// Button Functionality for my website navigation

var btn_home = document.getElementById("btn-home");
var btn_about = document.getElementById("btn-about");
var btn_project = document.getElementById("btn-project");
var btn_contact = document.getElementById("btn-contact");

var home = document.getElementById("home");
var about = document.getElementById("about");
var project = document.getElementById("project");
var contact = document.getElementById("contact");

btn_home.addEventListener('click', ()=>{
    btn_home.style.transform='rotate(20deg)';
    btn_about.style.backgroundColor='#F6F6F6';
    btn_project.style.backgroundColor='#F6F6F6';
    btn_contact.style.backgroundColor='#F6F6F6';

    home.style.display='block';
    about.style.display='none';
    project.style.display='none';
    contact.style.display='none';
});
btn_about.addEventListener('click', ()=>{
    btn_home.style.transform='rotate(0deg)';
    btn_about.style.backgroundColor='rgba(24, 61, 61, 0.3)';
    btn_project.style.backgroundColor='#F6F6F6';
    btn_contact.style.backgroundColor='#F6F6F6';

    home.style.display='none';
    about.style.display='block';
    project.style.display='none';
    contact.style.display='none';
});
btn_project.addEventListener('click', ()=>{
    btn_home.style.transform='rotate(0deg)';
    btn_about.style.backgroundColor='#F6F6F6';
    btn_project.style.backgroundColor='rgba(24, 61, 61, 0.3)';
    btn_contact.style.backgroundColor='#F6F6F6';

    home.style.display='none';
    about.style.display='none';
    project.style.display='block';
    contact.style.display='none';
});
btn_contact.addEventListener('click', ()=>{
    btn_home.style.transform='rotate(0deg)';
    btn_about.style.backgroundColor='#F6F6F6';
    btn_project.style.backgroundColor='#F6F6F6';
    btn_contact.style.backgroundColor='rgba(24, 61, 61, 0.3)';

    home.style.display='none';
    about.style.display='none';
    project.style.display='none';
    contact.style.display='block';
});

// Download my CV Button
document.addEventListener("DOMContentLoaded", function () {
  // Get the download button element by its ID
  const downloadButton = document.getElementById("download-cv");

  // Add a click event listener to the download button
  downloadButton.addEventListener("click", function () {
    // Create a link element
    const downloadLink = document.createElement("a");
    //'path/to/your/cv.pdf' with the actual path to your CV file
    downloadLink.setAttribute("href", "CV/Recaplaza_Rymark_S.pdf");
    // Set the desired file name for the download
    downloadLink.setAttribute("download", "RYMARK-RECAPLAZA-CV.pdf");

    // Append the link to the document (it doesn't have to be visible)
    document.body.appendChild(downloadLink);

    // Programmatically click the link to initiate the download
    downloadLink.click();

    // Remove the link from the document after the download is initiated
    document.body.removeChild(downloadLink);
  });
});


// Carousel Animation for my Letter Portraits in the website About section
const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.carousel-slide');
let currentIndex = 0;

function updateCarousel() {
  carousel.style.transition = 'transform 0.5s ease-in-out';
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showNextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateCarousel();
}

function startAutomaticSlide() {
  showNextSlide();
  if (currentIndex === 0) {
    // Stay longer on the first slide (e.g., 8 seconds)
    setTimeout(startAutomaticSlide, 15000);
  } else {
    setTimeout(startAutomaticSlide, 15000);
  }
}

startAutomaticSlide(); // Start automatic sliding
