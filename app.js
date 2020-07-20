const burger = document.querySelector(".burger");
const links = document.querySelector(".links");
const navLinks = document.querySelectorAll(".links li");

burger.addEventListener("click",()=> {
    links.classList.toggle("burger-active")
    navLinks.forEach(link =>{
        if(link.style.animation){
        link.style.animation = ""
        }else {
            link.style.animation = "navlinksan  ease forwards 1.5s"
        }
    })
})