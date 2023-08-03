export function addStar() {
  const starBox = document.getElementById("container");

  var xpos = Math.round(Math.random() * 100);
  var ypos = Math.round(Math.random() * 100);

  var fadeTime = Math.random() * 10;
  const newStar = document.createElement("div");
  newStar.setAttribute("class", "star");
  newStar.style.left = xpos + "vw";
  newStar.style.top = ypos + "vh";

  starBox.appendChild(newStar);
}
