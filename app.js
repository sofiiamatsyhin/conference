
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
function showPerson1() {
  let y = document.getElementById("person1");
  if (y.style.backgroundImage === "url(https://engineering.unl.edu/images/staff/Kayla_Person-small.jpg)") {
    y.style.backgroundImage = "none";
    y.style.backgroundColor = "rgb(204, 21, 21)";
} else if (y.style.backgroundImage === "none") {
  y.style.backgroundImage = "url(https://engineering.unl.edu/images/staff/Kayla_Person-small.jpg)"
} else {
  y.style.backgroundColor = "none";
}
}
function showPerson2() {
  let y = document.getElementById("person2");
  if (y.style.backgroundImage === "url(https://falkner-gutachten.de/wp-content/uploads/2015/03/Person.Ashley.jpg)") {
    y.style.backgroundImage = "none";
    y.style.backgroundColor = "rgb(204, 21, 21)";
} else if (y.style.backgroundImage === "none") {
  y.style.backgroundImage = "url(https://falkner-gutachten.de/wp-content/uploads/2015/03/Person.Ashley.jpg)"
} else {
  y.style.backgroundColor = "none";
}
}
function showPerson3() {
  let y = document.getElementById("person3");
  if (y.style.backgroundImage === "url(https://engineering.unl.edu/images/staff/Maggie_Schaefer.jpg)") {
    y.style.backgroundImage = "none";
    y.style.backgroundColor = "rgb(204, 21, 21)";
} else if (y.style.backgroundImage === "none") {
  y.style.backgroundImage = "url(https://engineering.unl.edu/images/staff/Maggie_Schaefer.jpg)"
} else {
  y.style.backgroundColor = "none";
}
}
function showPerson4() {
  let y = document.getElementById("person4");
  if (y.style.backgroundImage === "url(https://www.jamsadr.com/images/neutrals/mills-larry-900x1080.jpg)") {
    y.style.backgroundImage = "none";
    y.style.backgroundColor = "rgb(204, 21, 21)";
} else if (y.style.backgroundImage === "none") {
  y.style.backgroundImage = "url(https://www.jamsadr.com/images/neutrals/mills-larry-900x1080.jpg)"
} else {
  y.style.backgroundColor = "none";
}
}