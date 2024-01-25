document.addEventListener("DOMContentLoaded", function() {
  var header = document.querySelector('header');
  var images = [
      'url(https://pbs.twimg.com/media/Dn0zsZ3WkAAN4Wb.jpg)',
      'url(https://pbs.twimg.com/media/DpMICQNW0AABm4g?format=jpg&name=medium)',
      'url(https://pbs.twimg.com/media/Dnt7zW1WwAY_CEe?format=jpg&name=large)',
      'url(https://img.mlbstatic.com/mlb-images/image/upload/t_16x9/t_w1024/mlb/bm72euvuxaywdkrm2xtx)',
      'url(https://imageio.forbes.com/specials-images/imageserve/651f0383073293f531d908b4/MLB-Playoffs-2023-Twins-WC/960x0.jpg?format=jpg&width=960)',
      'url(https://a.espncdn.com/photo/2023/1102/r1247254_2_608x342_16-9.jpg)'
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
