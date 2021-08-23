const nav = document.getElementById("navbar");
const navlinks = document.getElementsByClassName("nav-link")
const navbarToggler = document.getElementsByClassName("navbar-toggler-icon")[0]


nav.addEventListener("click", () => console.log("Yo"))

changeStyle = () => {
    nav.classList.add("navbarScroll")
    nav.classList.add("shadow")
    navbarToggler.classList.add("navbar-toggler-scroll")
}

console.log(navbarToggler)

// if (window.pageYOffset > 430) {

//     changeStyle()

//     for (let i = 0; i < navlinks.length; i++) {
//         navlinks[i].classList.add("scrolled")
//     }
// }


window.onscroll = () => {
    if (this.scrollY > 430) {
    changeStyle()
    
        for (let i = 0; i < navlinks.length; i++) {
            navlinks[i].classList.add("scrolled")
        }
    } else {
        nav.classList.remove("navbarScroll")
        nav.classList.remove("shadow")
        for (let i = 0; i < navlinks.length; i++){
  
            navlinks[i].classList.remove("scrolled")
            navbarToggler.classList.remove("navbar-toggler-scroll")
         
        }
    }

}

