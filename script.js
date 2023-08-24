let menubar = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

window.onscroll = () => {
  // sticky navbar
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menubar.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//   toggle change
menubar.onclick = () => {
  menubar.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

var typed = new Typed("#element", {
  strings: ["Programmer", "Web Developer", "Desktop Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  lopp: true,
});



const downloadResume = () => {
  var resumeUrl = 'Muhammad Zain ul Abideen (Resume).pdf';
  var link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}