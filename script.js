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

