// Function to show the popup
function showPopup() {
    document.getElementById('videoPopup').style.display = 'flex';
  }

  // Function to close the popup
  function closePopup() {
    document.getElementById('videoPopup').style.display = 'none';
  }

  // Attach event listener to the button
  document.getElementById('video_button').addEventListener('click', showPopup)