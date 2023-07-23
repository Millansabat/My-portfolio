
let a = document.getElementById("nav-btn");
let b= document.getElementById("nav-bar");
a.addEventListener('click',()=>{
   
    if (b.style.display === "none") {
        b.style.display="block";
        b.style.width="25vh";
        b.style.height="50vh";
        console.log("clicked");
      } else {
        b.style.display = "none";
      }

})

