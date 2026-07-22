function changeImage() {
  const changeImage = document.querySelector("#image");

  const url = prompt("Fadlan geli image URL:");
  const borderColor = prompt("Fadlan geli border color:");
  const width = prompt("Fadlan geli width (lambar kaliya):");
  const height = prompt("Fadlan geli height (lambar kaliya):");
  const borderRadius = prompt("Fadlan geli border radius (lambar kaliya):");

  changeImage.setAttribute("src", url);
  changeImage.style.borderColor = borderColor;
  changeImage.style.borderWidth = "px";
  changeImage.style.borderStyle = "solid";
  changeImage.style.width = width + "px";
  changeImage.style.height = height + "px";
  changeImage.style.borderRadius = borderRadius + "px";
}
