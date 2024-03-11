const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg']; 
    let currentIndex = 0;
    const sliderImage = document.getElementById('slider-image');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');

    function showSlide(index) {
        sliderImage.src = images[index];
        if (index === 0) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'block';
        }
        if (index === images.length - 1) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'block';
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            showSlide(currentIndex);
        }
    }

    function nextSlide() {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            showSlide(currentIndex);
        }
    }

    showSlide(currentIndex);