document.addEventListener('DOMContentLoaded', function() {
  const gallery = document.querySelector('.gallery');
    const images = gallery.querySelectorAll('img');

    images.forEach(img => {
        img.addEventListener('click', function() {

            const imgSrc = img.getAttribute('src');

            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');

            const lightboxImg = document.createElement('img');
            lightboxImg.src = imgSrc;

            lightboxImg.classList.add('lightbox-img');
            lightbox.appendChild(lightboxImg);
            
            document.body.appendChild(lightbox);
            lightbox.style.display = 'flex';

            lightbox.addEventListener('click', function() {
                lightbox.style.display = 'none';
                lightbox.remove(); 
            });
        });
    });
});
