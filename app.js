
function showNavigation() {
  let x = document.getElementById("nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else if (x.style.display === "none")  {
    x.style.display = "block";
    x.style.display = "flex";
    x.style.position = "absolute";
    x.style.background = "#151515";
    x.style.height = "100%";
    x.style.width = "100%";
    x.style.flexDirection = "column";
    x.style.borderTop = "1px solid #222";
    x.style.padding = "20px";
    x.style.color = "red";
    x.style.top = "60px";
    x.style.fontSize = "50px";
    x.style.paddingTop = "40px";
  } else {
    x.style.display = "none";
  }
}
function showPerson() {
  let y = document.getElementById("person");
  if (y.style.backgroundImage === "url") {
    y.style.backgroundImage = "none";
    y.style.backgroundColor = "rgb(204, 21, 21)";
} else if (y.style.backgroundImage === "none") {
  y.style.backgroundImage = "url"
} else {
  y.style.backgroundColor = "none";
}
}