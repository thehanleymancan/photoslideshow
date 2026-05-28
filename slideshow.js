document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.phoslysho').forEach(slideshow => {

        const slides = slideshow.querySelector('.phoslysho__slides');
        const buttons = slideshow.querySelectorAll('.phoslysho__indicators button');
        const viewport = slideshow.querySelector('.phoslysho__viewport');

        let current = 0;

        function goToSlide(n) {
            current = n;
            slides.style.transform = `translateX(-${n * 100}%)`;
            buttons.forEach(btn => btn.classList.remove('is-active'));
            buttons[n].classList.add('is-active');
        }

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                goToSlide(parseInt(btn.dataset.slide));
            });
        });

        let startX = 0;

        viewport.addEventListener('touchstart', e => {
            startX = e.touches[0].clientX;
        });

        viewport.addEventListener('touchend', e => {
            let endX = e.changedTouches[0].clientX;
            let delta = endX - startX;

            if (Math.abs(delta) > 50) {
                if (delta < 0 && current < buttons.length - 1) goToSlide(current + 1);
                if (delta > 0 && current > 0) goToSlide(current - 1);
            }
        });

    });

});
