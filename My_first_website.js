
function showPopup() {
    document.getElementById('videoPopup').style.display = 'flex';
  }


  function closePopup() {
    document.getElementById('videoPopup').style.display = 'none';
  }


  document.getElementById('video_button').addEventListener('click', showPopup)