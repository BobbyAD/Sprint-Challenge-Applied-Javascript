class Carousel {
    constructor(carouselElement) {
        this.carouselElement = carouselElement;
        this.carouselImages = Array.from(this.carouselElement.querySelectorAll('img')).map(element => {
            return new CarouselImages(element);
        });
    }

    nextImage() {

    }

    previousImage() {

    }
}

class CarouselImages {
    constructor(carouselImage) {
        this.carouselImage = carouselImage;
        this.carouselData = this.carouselImage.dataset.vis;
        console.log(this.carouselData);
        if (this.carouselData == 'visible') {
            this.carouselImage.style.display = 'flex';
        }
        else {
            this.carouselImage.style.display = 'none';
        }
    }
}

let carousel = document.querySelectorAll('.carousel');
carousel.forEach(carousel => {
    new Carousel(carousel);
});

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/