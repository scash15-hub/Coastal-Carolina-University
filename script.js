function openPopup(popupId) {

    document.getElementById(popupId).style.display = "flex";

}

function closePopup(popupId) {

    document.getElementById(popupId).style.display = "none";

}

document.addEventListener("DOMContentLoaded", function () {

    const carouselElement = document.getElementById("sportsCarousel");

    if (carouselElement && window.bootstrap) {
        const carousel = bootstrap.Carousel.getOrCreateInstance(carouselElement, {
            interval: 3000,
            pause: false,
            ride: "carousel"
        });

        carousel.cycle();
    }

});