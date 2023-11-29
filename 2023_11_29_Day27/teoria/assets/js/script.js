let links = document.querySelectorAll("a.nav-link");
links.forEach((link) => {
  
    link.addEventListener("mouseover", (e) => {
        if (window.innerWidth < 992) {
      e.target.style.transform = "translate(10px, 0)";
      e.target.style.transition = "transform 0.3s linear";
}
});

    link.addEventListener("mouseout", (e) => {
      e.target.style.transform = "translate(0)";
      // e.target.style.transition = 'transform 0.3s linear'
    });
  }
);

// links.addEventListener('mouseover', (e) => {
//     if(window.innerWidth < 992){
//     e.target.style.transformX = '10px';
//     e.target.style.transition = 'transform 0.3s ease';
// }
// })
