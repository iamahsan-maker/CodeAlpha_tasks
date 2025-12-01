const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");

themeToggle.addEventListener("click", () => {
  // Toggle the dark class on the body
  body.classList.toggle("dark");

  // Check which mode is active and show the correct icon
  if (body.classList.contains("dark")) {
    // Dark mode ON → show sun icon
    sun.style.display = "block";
    moon.style.display = "none";
    sun.style.filter = "invert(1)";
  } else {
    // Light mode ON → show moon icon
    sun.style.display = "none";
    moon.style.display = "block";
  }
});


let str = "";
let btns = document.querySelectorAll('.button')

Array.from(btns).forEach((button) => {
  button.addEventListener( 'click', (e) =>{
    if(e.target.innerHTML == "="){
      str = eval(e);
      document.querySelector('input').value = str
    }
    else if(e.target.innerHTML == "Ac"){
      str = "";
      document.querySelector('input').value = str
    } else{
      str = str + e.target.innerHTML;
      document.querySelector('input').value = str;
    }


  })
})
