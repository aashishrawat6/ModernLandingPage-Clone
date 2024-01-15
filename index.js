const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


var tl = gsap.timeline();

tl.to("#page1",{
    y:"100vh", // here page will go to 100vh
    scale:0.6,
    duration:0
})

tl.to("#page1",{
    y:"30vh", // this will bring back the page to 30vh
    duration: 1,
    delay: 1
})

tl.to("#page1",{
    y:"0vh", // this will bring page to 0vh - to top
    rotate:360, // 1 rotation will happen
    scale:1,    // page will come back to original size
    duration:0.5
})

