const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


const year = new Date().getFullYear();
document.querySelector("#rights").innerHTML="© Copyright " + year + " Steciuc Angel Florentin";

function onlineClick(){
  document.querySelector("#details").style.display="block";
  document.querySelector("#online").style.display="block";
  document.querySelector("#app").style.display="none";
  document.querySelector("#other").style.display="none";
}

function appClick(){
  document.querySelector("#details").style.display="block";
  document.querySelector("#online").style.display="none";
  document.querySelector("#app").style.display="block";
  document.querySelector("#other").style.display="none";
}

function otherClick(){
  document.querySelector("#details").style.display="block";
  document.querySelector("#online").style.display="none";
  document.querySelector("#app").style.display="none";
  document.querySelector("#other").style.display="block";
}