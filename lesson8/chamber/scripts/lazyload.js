const images = document.querySelectorAll("[data-src]");

function preloadImgage(image) {
    const dataSrc = image.getAttribute("data-src");
    if (!dataSrc) {
        return;
    }
    image.src = dataSrc;
    image.onload = () => {
        image.removeAttribute("data-src");
    };
}

const imgOptions = {
    rootMargin: "0px 0px 300px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImgage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

images.forEach(image => {
    imgObserver.observe(image);
})
