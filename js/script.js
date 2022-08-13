const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const mobileMenu = document.getElementById("mobile-menu");

const counters = document.querySelectorAll(".counter");
let isScrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

function navToggle() {
    btn.classList.toggle("open");
    overlay.classList.toggle("overlay-show");
    document.body.classList.toggle("prevent-scroll");
    mobileMenu.classList.toggle("show-menu");
}

function scrollPage() {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100 && !isScrollStarted) {
        countUp();
        isScrollStarted = true;
    } else if (scrollPosition <= 100 && isScrollStarted) {
        reset();
        isScrollStarted = false;
    }
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = "0";
        const targetCount = +counter.getAttribute("data-target");

        const updateCounter = () => {
            const currentCount = +counter.innerText;
            const increment = targetCount / 100;

            if (currentCount < targetCount) {
                counter.innerText = `${Math.ceil(currentCount + increment)}`;

                setTimeout(updateCounter, 100);
            } else {
                currentCount.innerText = targetCount;
            }
        };

        updateCounter();
    });
}

function reset() {
    counters.forEach((counter) => counter.innerText = "0");
}