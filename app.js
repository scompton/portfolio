var images = [
  "images/google_clone.png",
  "images/streetfighter.png",
  "images/shopping_list.png",
  "images/hot_or_cold.png",
  "images/quiz.png",
  "images/stackerAJAX.png",
  "images/apihack.png"
];
var links = [
  "http://scompton.github.io/google-clone/",
  "http://scompton.github.io/jquery-streetfighter/",
  "http://scompton.github.io/shopping-list/",
  "http://scompton.github.io/hot-or-cold-starter/",
  "http://scompton.github.io/quizapp/",
  "http://scompton.github.io/stackerAJAX/",
  "http://scompton.github.io/apihack/"
];

var imageNumber = 0;
var imageLength = images.length-1;

function changeImage(num) {
  console.log(num);
  imageNumber = imageNumber+num;
  if (imageNumber>imageLength) {
    imageNumber = 0;
  }
  if (imageNumber<0) {
    imageNumber = imageLength;
  }

  $("#ss").attr("src",images[imageNumber]);
  $("#imageLink").attr("href",links[imageNumber]);
}

$(document).ready(function() {
  setInterval("changeImage(1)",2500);

  $('#prev').click(function(e) {
    changeImage(-1);
    e.preventDefault();
  });

  $('#next').click(function(e) {
    changeImage(1);
    e.preventDefault();
  });
});
