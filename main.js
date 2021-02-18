'user strict';

const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

/* Event 등록*/
document.addEventListener('scroll', () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  }
  else{
    navbar.classList.remove('navbar--dark');
  }
});

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

const contact = document.querySelector(".home__contact");
contact.addEventListener("click", () => {
  scrollIntoView('#contact');
});

function scrollIntoView(Selection){
  const scrollTo = document.querySelector(Selection);
  scrollTo.scrollIntoView({behavior: "smooth"});
}