var col = document.getElementsByClassName("collapsible");

for (var i = 0; i < col.length; i++){
    col[i].addEventListener("click", function(){
        this.classList.toggle("active");
        var contingut = this.nextElementSibling;
        if(contingut.style.maxHeight){
            contingut.style.maxHeight = null;
        }else{
            contingut.style.maxHeight = contingut.scrollHeight + "px";
        }
    });
}