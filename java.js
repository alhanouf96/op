

$('#main .lazy').lazyload();





  // When the user scrolls the page, execute myFunction 
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 145) {
        document.getElementById('pills-tab').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('pills-tab').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


  

function gofor(id) {

switch(id){

  case "kin":
var val = "ki"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "vi":
var val = "vii"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "vi":
var val = "vii"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "km":
var val = "kmm"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;



case "la":
var val = "laa"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;



case "sp":
var val = "spp"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;

case "stk":
var val = "stkk"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;

case "stk1":
var val = "stkk11"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
break;


case "fl":
var val = "fll"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "es":
var val = "ess"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "trfz":
var val = "trfzz"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

 case "ta":
var val = "taa"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;



case "ym":
var val = "ymm"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

/*tea*/

case "am":
var val = "amm"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "frsh":
var val = "frshh"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;




case "cpro":
var val = "cproo"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "cpr":
var val = "cprr"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "csv":
var val = "csvv"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "cre":
var val = "cree"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;



case "ckh":
var val = "ckhh"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;


 case "cfr":
var val = "cfrr"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

 case "cbe":
var val = "cbee"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

/*cheae*/


 case "bg":
var val = "bgg"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;
case "su1":
var val = "suu1"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "su2":
var val = "suu2"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;

case "su3":
var val = "suu3"
localStorage.setItem("storageName",val);
window.location.href = "deet.html";
 break;
 
}
}
