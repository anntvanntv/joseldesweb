

let aparece = document.getElementById("aparecer")
let menuIcon = document.getElementById("menu-icon")

  function myFunction(){
    
    if (window.getComputedStyle(aparece).display === "none"){
        aparece.style.display = "flex";
         menuIcon.textContent = "close";
    } else {
        aparece.style.display = "none";
        menuIcon.textContent = "menu";

    }
}
  

/* 
function myFunction(){
    aparece.classList.toggle("visible");

    if(aparece.classList.contains("visible")) {
        menuIcon.textContent = "close";
    } else {
        menuIcon.textContent = "menu";
    }
} */
