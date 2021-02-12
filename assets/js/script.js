
//  SCROLL 

window.addEventListener("scroll", ()=> {
  let page, header, scrollTop;
  header = document.querySelector(".header");
  scrollTop = document.querySelector("#scrollTop");
  page = window.pageYOffset;
  
  if (page > 0) {
    header.classList.add("sticky");
  }

  if (page > 530) {
    scrollTop.classList.add("show-arw-btn");
  }

  if(page <= 0 && page < 500) {
    header.classList.remove("sticky");
    scrollTop.classList.add("hide-arw-btn");
  }
  
});




let bodyDark = document.querySelector("#dark");
let bodyWhite = document.querySelector("#white");

bodyDark.addEventListener("click", () => {
  let body, logo, changeMenuColor, heading2, heading3, menuCard;
  body = document.querySelector("body");
  logo = document.querySelector(".navbar-brand");
  changeMenuColor = document.querySelector(".navbar-nav");
  heading2 = document.querySelectorAll("#heading2");
  heading3 = document.querySelectorAll("#heading3");
  menuCard = document.querySelectorAll (".card");


  // ! CHANGE STYLE
  changeMenuColor.classList.add("color-light");
  
  // body.classList.contains("dark-theme");
  body.style.background = "#1D2521";
  
  logo.classList.add("logo-light");
  dark.style.display = "none";
  white.style.display = "block";

  heading2.forEach(head => {
    head.classList.add("light-color");
  });
  heading3.forEach((head1) => {
    head1.classList.add("light-color");
  });

  //  MENU CARD

  menuCard.forEach(addCalss => {
    addCalss.classList.add("card-inner-color");
  });

});

bodyWhite.addEventListener("click", () => {

  let body, logo, changeMenuColor, heading2, heading3, menuCard;
  
  body = document.querySelector("body");
  logo = document.querySelector(".navbar-brand");
  changeMenuColor = document.querySelector(".navbar-nav");
  heading2 = document.querySelectorAll("#heading2");
  heading3 = document.querySelectorAll("#heading3");
  menuCard = document.querySelectorAll(".card");

  changeMenuColor.classList.remove("color-light");
  logo.classList.remove("logo-light");
  body.style.background = "#fff";
  dark.style.display = "block";
  white.style.display = "none";

  heading2.forEach((element) => {
    element.classList.remove("light-color");
  });
  heading3.forEach((elements) => {
    elements.classList.remove("light-color");
  });

  menuCard.forEach((addCalss) => {
    addCalss.classList.remove("card-inner-color");
  });

});

