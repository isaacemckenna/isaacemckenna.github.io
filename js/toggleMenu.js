function toggleVisible() {
  var x = document.getElementById("menuLinks");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.visibility = "none";
  }
}