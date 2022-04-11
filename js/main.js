let isDark = false

document.getElementById("mode__switch").onclick = function () {
    if(isDark){
        document.getElementById("home").className = "dark";
    }else{
        document.getElementById("home").className = "light";
        
    }
      

}