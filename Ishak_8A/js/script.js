
document.getElementById("change-color").addEventListener("click", function(e){
  var divs = document.getElementsByTagName("div");
      for(var i =0; i <divs.lenght; i++)  {
          divs[i].innerHTML = "";
          divs[i].style.color = "blue";
      }
      
});
document.getElementById("italicize").addEventListener("click", function () {
  var divs = document.getElementsByClassName("div class");
      for(var i =0; i <divs.lenght; i++)  {
          divs[i].innerHTML = "";
          divs[i].style.fontStyle = "italic";
      }
});
document.getElementById("create-new").addEventListener ("click", function(){ 

  var s = prompt("");
  var divs = document.getElemtById("new-element-holder");
      s += "" + divs.tagName + "\n";
      s += "" + divs.getAttribut("id") + "\n";
      s += "" + divs.getAttribute("class");
      s += "" + divs.innerHTML+ "";
  document.getElementById("new-element-holder").innerHTML = s;
})




/*
document.getElementById("change-color").addEventListener("click", function(e){
  var divs = document.getElementsByTagName("div");
      for(var i =0; i <divs.lenght; i++)  {
          divs[i].innerHTML = "";
          divs[i].style.color = "blue";
      }
      
});
document.getElementById("italicize").addEventListener("click", function () {
  var divs = document.getElementsByClassName("div class");
      for(var i =0; i <divs.lenght; i++)  {
          divs[i].innerHTML = "";
          divs[i].style.fontFamily = "italic";
      }
});
document.getElementById("create-new").addEventListener ("click", function(){ 

  var s = prompt("");
  var divs = document.getElemtById("new-element-holder");
      s += "" + divs.tagName + "\n";
      s += "" + divs.getAttribut("id") + "\n";
      s += "" + divs.getAttribute("class");
      s += "" + divs.innerHTML+ "";
  document.getElementById("new-element-holder").innerHTML = s;
})
*/



