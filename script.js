function openPopup(popupId) {

    document.getElementById(popupId).style.display = "flex";

}

function closePopup(popupId) {

    document.getElementById(popupId).style.display = "none";

}

function submitForm(event) {

    event.preventDefault();

    alert("Thank you for contacting Coastal Carolina!");

}

//got from drews code

// Scroll-triggered counter animation
const counters = document.querySelectorAll('.counter');
let counted = false;

function runCounters() {
  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let current = 0;
    const increment = Math.ceil(target / 200);

    const updateCounter = () => {
      current += increment;
      if(current < target) {
        counter.innerText = current.toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };

    updateCounter();
  });
}

function checkCounters() {
  const statsSection = document.getElementById('stats');
  if(!statsSection) return;
  const sectionTop = statsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if(sectionTop < screenHeight && !counted) {
    runCounters();
    counted = true;
  }
}

// Run once in case the section is already in view
checkCounters();

// Listen for scroll to trigger counters
window.addEventListener('scroll', checkCounters);