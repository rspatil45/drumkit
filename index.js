// var user = prompt("Enter your name");
// var str1 = "Artist : "+user;
// document.querySelector("h1").after(str1);
var sound1=new Audio("sounds/crash.mp3");
var sound2=new Audio("sounds/kick-bass.mp3");
var sound3=new Audio("sounds/snare.mp3");
var sound4=new Audio("sounds/tom-1.mp3");
var sound5=new Audio("sounds/tom-2.mp3");
var sound6=new Audio("sounds/tom-3.mp3");
var sound7=new Audio("sounds/tom-4.mp3");
var i = 0;

no_of_button = document.querySelectorAll("button").length;


for(i=0;i<no_of_button;i++)
  {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){ playSound(event.originalTarget.innerHTML);});
    document.querySelectorAll(".drum")[i].addEventListener("keypress",function(){playSound(event.key); dochange(event.key);});
  }


function playSound(key)
{
  switch(key)
  {
    case 'w': sound1.play();
              break;
    case 'a': sound2.play();
              break;
    case 's': sound3.play();
              break;
    case 'd': sound4.play();
              break;
    case 'j': sound5.play();
              break;
    case 'k': sound6.play();
              break;
    case 'l': sound7.play();
              break;
  }
}
function dochange(key){

}
