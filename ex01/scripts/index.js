function myModal() {
  var btn = document.querySelectorAll(".modal-button");

  var modals = document.querySelectorAll(".modal");

  var spans = document.getElementsByClassName("close");

  // When the user clicks the button, open the modal
  for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function (e) {
      e.preventDefault();
      modals = document.querySelector(e.target.getAttribute("href"));
      modals.style.display = "block";
    };
  }

  // When the user clicks on <span> (x), close the modal
  for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
      for (var index in modals) {
        if (typeof modals[index].style !== "undefined")
          modals[index].style.display = "none";
      }
    };
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target.classList.contains("modal")) {
      for (var index in modals) {
        if (typeof modals[index].style !== "undefined")
          modals[index].style.display = "none";
      }
    }
  };
}
