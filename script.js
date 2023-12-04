var tomatoCard = document.querySelector('.health_info1 .scene:nth-child(1) .card');
var eggCard = document.querySelector('.health_info1 .scene:nth-child(2) .card');
var tofuCard = document.querySelector('.health_info2 .scene:nth-child(1) .card');
var garlicCard = document.querySelector('.health_info2 .scene:nth-child(2) .card');
var bcCard = document.querySelector('.health_info3 .scene:nth-child(1) .card');
var mushCard = document.querySelector('.health_info3 .scene:nth-child(2) .card');

tomatoCard.addEventListener('click', function () {
  tomatoCard.classList.toggle('is-flipped');
});

eggCard.addEventListener('click', function () {
  eggCard.classList.toggle('is-flipped');
});

tofuCard.addEventListener('click', function () {
  tofuCard.classList.toggle('is-flipped');
});

garlicCard.addEventListener('click', function () {
  garlicCard.classList.toggle('is-flipped');
});

bcCard.addEventListener('click', function () {
  bcCard.classList.toggle('is-flipped');
});

mushCard.addEventListener('click', function () {
  mushCard.classList.toggle('is-flipped');
});
