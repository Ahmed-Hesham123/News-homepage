const ulLinks = document.getElementById("ullinks");
const menuOpen = document.getElementById("menuopen");
const menuClose = document.getElementById("menuclose");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const ulLi = document.querySelectorAll("li");

menuOpen.addEventListener("click", (eo) => {
  ulLinks.classList.add("active");
  btn1.style.display = "none";
  btn2.style.display = "block";
});

menuClose.addEventListener("click", (eo) => {
  ulLinks.classList.remove("active");
  btn1.style.display = "block";
  btn2.style.display = "none";
});

ulLi.forEach((item) => {
  item.addEventListener("click", (eo) => {
    ulLinks.classList.remove("active");
    btn1.style.display = "block";
    btn2.style.display = "none";
  });
});
