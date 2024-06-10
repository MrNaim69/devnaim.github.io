const mobile_nav = document.querySelector(".mobile-navbar");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());





// Counter Annimation Js 


const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  console.log(entries);


  const counterNum = document.querySelectorAll(".counter-numbers");
  const speed = 50;

  counterNum.forEach((curNumber) => {
    const updateNumber = () => {
      const targetNumber = parseInt(curNumber.dataset.number);
      const initialNumber = parseInt(curNumber.innerText);
      const incrementNumber = Math.trunc(targetNumber / speed);

      if (initialNumber < targetNumber) {
        curNumber.innerText = `${initialNumber + incrementNumber}+`;
        setTimeout(updateNumber, 10);
      } else {
        curNumber.innerText = `${targetNumber}+`;
      }

    };
    updateNumber();
  });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
  root: null,
  threshold: 0,
});

workSecObserver.observe(workSection);



// Preloder Style 

const preLoderX = document.getElementById('preloder');


function preLoderFunction(){
    preLoderX.style.display = 'none';
} 

