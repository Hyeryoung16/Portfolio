'user strict';

//Navbar Transparent
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  }
  else{
    navbar.classList.remove('navbar--dark');
  }
});

//Navbar Menu Scrolling 
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (event)=>{
  const target = event.target;
  const link = target.dataset.link;
  if (link == null){
    return;
  }
  else{
    scrollIntoView(link);
  }
});

// Home Contact Scrolling
const contact = document.querySelector(".home__contact");
contact.addEventListener("click", () => {
  scrollIntoView('#contact');
});

// Home Transparent
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=>{
  home.style.opacity = (1 - window.scrollY/homeHeight);
});

// Arrow Display
const arrow = document.querySelector(".arrow-up");
document.addEventListener("scroll", ()=>{
  if (window.scrollY > homeHeight/2){
    arrow.classList.add('visible');
  }
  else{
    arrow.classList.remove('visible');
  }
})

// Arrow Scrolling
arrow.addEventListener("click", ()=>{
  scrollIntoView('#home');
});

//
const workCategory = document.querySelector(".work__category");
const workProjects = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".projects");
workCategory.addEventListener('click', (event)=>{
  const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (filter == null){
    return;
  }
  else{
    projects.forEach((project) =>{
      if (filter === '*' || filter === project.dataset.type){
        project.classList.remove('invisible');
      }
      else{
        project.classList.add('invisible');
      }
    });
  }
});


function scrollIntoView(Selection){
  const scrollTo = document.querySelector(Selection);
  scrollTo.scrollIntoView({behavior: "smooth"});
}

