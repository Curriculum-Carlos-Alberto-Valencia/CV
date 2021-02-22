//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".portada");

//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 150;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 150;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});


//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";

    //Popout
    title.style.transform = "translateZ(30px)";
    sneaker.style.transform = "translateZ(25px) rotateZ(-15deg)";
    description.style.transform = "translateZ(25px)";
    sizes.style.transform = "translateZ(10px)";
    purchase.style.transform = "translateZ(7px)";
});




//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.3s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;

    //Popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});