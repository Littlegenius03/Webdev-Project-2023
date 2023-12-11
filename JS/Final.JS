function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/* function bigpic(x) {

  x.style.width = "30em"
} */

function normal(x) {
  x.style.width = ""
}

function bigpic() {
  document.querySelectorAll('.image-container img').forEach(image => {
    image.onclick = () => {
      document.querySelector('.popup-image').style.display = 'block';
      document.querySelector('.popup-image img').src = image.getAttribute('src')
    }
  })

  document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
  }
}
document.addEventListener("DOMContentLoaded", () => {

  document.getElementById('Send').addEventListener('click', sent)

  function sent() {
    var myText = "You have sent a message";
    alert(myText);
  }




  /* nav link color change*/

  function setupLinkColorChange() {
    var links = document.querySelectorAll('.links li a');

    links.forEach(function(link) {
      link.addEventListener('mouseover', function() {
        link.style.color = '#004d99'; // Change color on mouseover
      });

      link.addEventListener('mouseout', function() {
        link.style.color = ''; // Reset color on mouseout
      });
    });
  }
setupLinkColorChange();







});




