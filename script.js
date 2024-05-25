document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    let index = 0;
    const totalImages = images.length;
  
    setInterval(() => {
      index = (index + 1) % totalImages;
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
  });
  