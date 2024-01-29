// loading function
function loader() {
    var tl = gsap.timeline()

    tl.to('#yellow1', {
        top: '-100%',
        delay: 0.4,
        duration: 0.5,
        ease: "expo.out",
    })
    tl.from('#yellow2', {
        top: '100%',
        delay: 0.3,
        duration: 0.5,
        ease: "expo.out",
    }, 'anim')
    tl.to('#loader h1', {
        delay: 0.3,
        duration: 0.3,
        color: 'black',
        ease: "expo.out",
    }, 'anim')
    tl.to('#black1', {
        top: '-100%',
        delay: 0.3,
        duration: 0.5,
        zIndex: 7,
        ease: "expo.out",
    }, 'anim')

    tl.to('#loader', {
        opacity: 0,
        display: "none"
    })
}

loader();

// locomotive smooth scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


// hovering list items and change bg

const elems = document.querySelectorAll(".elem");
const page2 = document.getElementById("page2");

elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        let bgimg = elem.getAttribute("data-img");
        page2.style.backgroundImage = `url(${bgimg})`;
    })
})


// scroll back to top

document.querySelector("#page3 a").addEventListener("click", function () {
    scroll.scrollTo(0)
})

// page by page scroll

let screenHeight = window.innerHeight;

document.querySelector("#page1 .page-footer a").addEventListener("click", function () {
    scroll.scrollTo(screenHeight)
})

document.querySelector("#page2 .page-footer a").addEventListener("click", function () {
    scroll.scrollTo(screenHeight + screenHeight)
})

window.addEventListener("resize", function () {
    screenHeight = window.innerHeight
})


// navbar opening and closing 
const nav_elems = document.querySelectorAll("#nav .nav-right .elems");
const navLink = document.querySelector("#nav .nav-right a");

var isOpen = true; // Initially, the navigation is closed

// Function to toggle navigation elements
function toggleNav() {
    var nl = gsap.timeline();
    if (isOpen) {
        navLink.style.transform = "rotate(-135deg)"
        nl.to(nav_elems, { x: "0%", stagger: 0.1, ease: "expo.out", duration: 1 }, "yup");
        nl.to(".hide", { opacity: 1, visibility: "visible", stagger: 0.3 }, "yup");
    } else {
        navLink.style.transform = "rotate(0deg)"
        nl.to(nav_elems, { x: "78%", stagger: 0.1, ease: "expo.out", duration: 1 }, "yo");
        nl.to(".hide", { opacity: 0, visibility: "hidden", }, "yo");
    }
    isOpen = !isOpen; // Toggle the isOpen state
}

// Event listener for navigation click
toggleNav()
navLink.addEventListener("click", function () {
    toggleNav(); // Play the timeline when clicked
});