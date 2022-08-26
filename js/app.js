
class SlideShowGallery {

    static INDEX = 0;
    static CAPTIONS = ["Animal", "Edison", "Flower", "Lava", "Monkey", "Wheel"]

    constructor() {
        this.next = document.querySelector(".next");
        this.previous = document.querySelector(".previous")
        this.caption = document.querySelector(".slideCaption")
        this.slides = document.querySelectorAll(".slide");
        this.thumbnails = document.querySelectorAll(".thumbnail");
    }

    removeClass(elements, attribute){
        for (const element of elements) {
            if(element.classList.contains(attribute)){
                element.classList.remove(attribute);
            }
        }
    }

    showSlide(index){
        this.removeClass(this.slides, "activeSlide");
        this.removeClass(this.thumbnails, "activeThumbnail");
        this.slides[index].classList.add("activeSlide");
        this.thumbnails[index].classList.add("activeThumbnail");
        this.caption.textContent = SlideShowGallery.CAPTIONS[index];
    }

    nextSlide(){
        SlideShowGallery.INDEX = (SlideShowGallery.INDEX + 1) % this.slides.length;
        this.showSlide(SlideShowGallery.INDEX);
    }

    previousSlide(){
        if(SlideShowGallery.INDEX == 0){
            SlideShowGallery.INDEX = this.slides.length;
        }
        SlideShowGallery.INDEX = (SlideShowGallery.INDEX - 1) % this.slides.length;
        this.showSlide(SlideShowGallery.INDEX);
    }

    currentSlide(index){
        this.showSlide(index);
    }

    execute(){
        this.next.addEventListener("click", () => this.previousSlide() );
        this.previous.addEventListener("click", () => this.nextSlide());

        this.thumbnails.forEach( (thumbnail, index) =>
            thumbnail.addEventListener("click", () => this.currentSlide(index))
        )
    }
    
}

new SlideShowGallery().execute();