document.addEventListener('DOMContentLoaded', function() {
  const box = document.getElementById('movingBox');
  let position = 0;
  const interval = setInterval(move, 10);

  function move() {
    if (position >= 300) {
      clearInterval(interval);
    } else {
      position++;
      box.style.left = position + 'px';
    }
  }
});
