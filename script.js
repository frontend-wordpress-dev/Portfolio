// animation on title 

window.addEventListener("scroll", () => {
  const heroTitle = document.querySelector(".hero-title");
  const heroSection = document.querySelector(".hero-section");

  if (!heroTitle || !heroSection) return;

  const sectionTop = heroSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (sectionTop < windowHeight / 2) {
    heroTitle.style.color = "#c8acd6";
  } else {
    heroTitle.style.color = "#ffffff";
  }
});



//profesaionl experience section js 


const items = document.querySelectorAll('.timeline-item');

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= (window.innerHeight || document.documentElement.clientHeight) - 100;
}

function checkItems() {
  items.forEach(item => {
    if(isInViewport(item)) {
      item.classList.add('in-view');
    }
  });
}

window.addEventListener('scroll', checkItems);
window.addEventListener('load', checkItems);


// work & experience section js 

const steps = document.querySelectorAll('.journey-step');
const progressFill = document.querySelector('.journey-progress-fill');
let current = 0;

function updateSlide(index) {
  steps.forEach(step => step.classList.remove('active'));
  steps[index].classList.add('active');

  const percent = steps[index].getAttribute('data-progress');
  progressFill.style.width = percent + '%';
}

document.getElementById('nextBtn').addEventListener('click', () => {
  if (current < steps.length - 1) {
    current++;
    updateSlide(current);
  }
});

document.getElementById('prevBtn').addEventListener('click', () => {
  if (current > 0) {
    current--;
    updateSlide(current);
  }
});

updateSlide(current);