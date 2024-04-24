document.addEventListener('DOMContentLoaded', function() {
    // Function to create indicators for a given carousel
    function createIndicatorsForCarousel(carouselId) {
        var carousel = document.querySelector(carouselId);
        var indicators = document.createElement('ol');
        indicators.className = 'carousel-indicators';
        var items = carousel.querySelectorAll('.carousel-item');

        for (var i = 0; i < items.length; i++) {
            var indicator = document.createElement('li');
            if (i === 0) {
                indicator.className = 'active'; // Make the first indicator active
            }
            indicator.setAttribute('data-bs-target', carouselId);
            indicator.setAttribute('data-bs-slide-to', i.toString());
            indicators.appendChild(indicator);
        }

        carousel.appendChild(indicators);
    }

    createIndicatorsForCarousel('#heroSlider');

    createIndicatorsForCarousel('#imageCarousel');
});