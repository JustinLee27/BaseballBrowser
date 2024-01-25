document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector('header');
  var images = [
      'url(https://pbs.twimg.com/media/Dn0zsZ3WkAAN4Wb.jpg)',
      'url(https://pbs.twimg.com/media/DpMICQNW0AABm4g?format=jpg&name=medium)',
      'url(https://pbs.twimg.com/media/Dnt7zW1WwAY_CEe?format=jpg&name=large)'
  ];

  var currentIndex = 0;

  function changeBackground() {
      header.style.backgroundImage = images[currentIndex];
      currentIndex++;
      if (currentIndex >= images.length) { currentIndex = 0; }
  }

  setInterval(changeBackground, 5000); // Change image every 5000 milliseconds (5 seconds)
  changeBackground(); // Initial call to set the first image
});
