/* =========================
   ALWAYS START AT TOP
========================= */

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

window.addEventListener('load', () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);
});

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);



/* =========================
   PUROSANGUE IMAGE REVEAL
========================= */

gsap.fromTo(
    ".car-image",
    {
        clipPath: "inset(0 100% 0 0)",
        scale: 1.1,
        x: -60
    },
    {
        clipPath: "inset(0 0% 0 0)",
        scale: 1,
        x: 0,
        ease: "power3.out",

        scrollTrigger: {
            trigger: ".image-wrapper",
            start: "top 80%",
            end: "top 35%",
            scrub: 1
        }
    }
);

/* =========================
   PUROSANGUE TEXT REVEAL
========================= */

gsap.from(".reveal-text", {
    opacity: 0,
    y: 40,
    duration: 1,

    scrollTrigger: {
        trigger: ".purosangue",
        start: "top 70%"
    }
});

gsap.from(".reveal-title", {
    opacity: 0,
    y: 100,
    duration: 1.5,

    scrollTrigger: {
        trigger: ".purosangue",
        start: "top 65%"
    }
});

/* =========================
   STATS SECTION FADE IN
========================= */

gsap.from(".stat", {
    opacity: 0,
    y: 100,
    stagger: 0.25,
    duration: 1.2,

    scrollTrigger: {
        trigger: ".stats",
        start: "top 70%"
    }
});

/* =========================
   COUNTER ANIMATION
========================= */

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    ScrollTrigger.create({
        trigger: counter,
        start: "top 85%",
        once: true,

        onEnter: () => {

            const target = parseFloat(
                counter.getAttribute("data-target")
            );

            const obj = {
                value: 0
            };

            gsap.to(obj, {
                value: target,
                duration: 2,
                ease: "power2.out",

                onUpdate: () => {

                    if (target % 1 !== 0) {
                        counter.innerText =
                            obj.value.toFixed(1);
                    } else {
                        counter.innerText =
                            Math.floor(obj.value);
                    }
                }
            });
        }
    });

});
window.addEventListener("load", () => {

    const tl = gsap.timeline();

    // Logo zoom + glow
    tl.to(".loader img",{
        scale:1.15,
        duration:1.2,

        filter:"drop-shadow(0 0 30px rgba(255,40,0,.8))",

        ease:"power2.out"
    });

    // Small pause
    tl.to({},{
        duration:0.4
    });

    // Entire loader slides up
    tl.to(".loader",{
        y:"-100%",
        duration:1.4,

        ease:"power4.inOut"
    });

});
/* =========================
   CINEMATIC SECTION
========================= */

gsap.from(".cinematic-content", {
    opacity: 0,
    y: 100,
    duration: 1.5,

    scrollTrigger: {
        trigger: ".cinematic",
        start: "top 70%"
    }
});

gsap.to(".cinematic-image", {
    scale: 1.2,
    ease: "none",

    scrollTrigger: {
        trigger: ".cinematic",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});

gsap.from(".interior-left",{
    opacity:0,
    x:-100,

    duration:1.2,

    scrollTrigger:{
        trigger:".interior",
        start:"top 70%"
    }
});

gsap.from(".interior-right",{
    opacity:0,
    x:100,

    duration:1.2,

    scrollTrigger:{
        trigger:".interior",
        start:"top 70%"
    }
});

gsap.fromTo(
    ".interior-right img",
    {
        clipPath:"inset(0 50% 0 50%)"
    },
    {
        clipPath:"inset(0 0% 0 0%)",

        ease:"none",

        scrollTrigger:{
            trigger:".interior",
            start:"top 80%",
            end:"top 40%",
            scrub:true
        }
    }
);

/* =========================
   FERRARI ENGINE REVEAL
========================= */

const engineTL = gsap.timeline({
    scrollTrigger:{
    trigger:".engine-showcase",
    start:"top bottom",
    end:"center 55%",
    scrub:1
    }
});

engineTL

.fromTo(
    ".engine-content",
    {
        opacity:0,
        y:80
    },
    {
        opacity:1,
        y:0,
        ease:"none"
    },
    0
)

.to(
    ".light-sweep",
    {
        left:"150%",
        ease:"none"
    },
    0
)

.to(
    ".engine-image",
    {
        filter:"brightness(1)",
        ease:"none"
    },
    0
);

gsap.utils.toArray(".gallery-item img")
.forEach(img=>{

    gsap.fromTo(
        img,
        {
            scale:1.3
        },
        {
            scale:1,

            scrollTrigger:{
                trigger:img,
                start:"top bottom",
                end:"bottom top",
                scrub:true
            }
        }
    );

});

gsap.fromTo(
    ".gallery-title",
    {
        opacity:1
    },
    {
        opacity:0,

        ease:"none",

        scrollTrigger:{
            trigger:".gallery",
            start:"top top",
            end:"bottom 70%",
            scrub:true
        }
    }
);