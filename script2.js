var soybeanCard = document.querySelector('.health_info1 .scene:nth-child(1) .card');
var mungbeanCard = document.querySelector('.health_info2 .scene:nth-child(1) .card');

soybeanCard.addEventListener('click', function () {
    soybeanCard.classList.toggle('is-flipped');
  });
  
mungbeanCard.addEventListener('click', function () {
    mungbeanCard.classList.toggle('is-flipped');
  });