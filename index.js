let nameofPlayer1;
let nameofPlayer2;
function editNames(){
nameofPlayer1=prompt("Enter player one name");
nameofPlayer2=prompt("Enter player two name");

document.querySelectorAll("p")[0].innerHTML=nameofPlayer1;
document.querySelectorAll("p")[1].innerHTML=nameofPlayer2;
}


function rollTheDice(){
randomNumber1=Math.floor(Math.random()*6)+1;
randomNumber2=Math.floor(Math.random()*6)+1;
//console.log(randomNumber1);

if(randomNumber1>randomNumber2){
  //player1 win
  document.querySelector("h1").innerHTML=nameofPlayer1+" Win !!!"
}else if(randomNumber1<randomNumber2){
  //player2 win
  document.querySelector("h1").innerHTML=nameofPlayer2+" win !!!"
}else{
  //match draw
  document.querySelector("h1").innerHTML="Match Draw !!!"
}

document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png")
}




document.querySelectorAll("button")[0].addEventListener("click",rollTheDice);
document.querySelectorAll("button")[1].addEventListener("click",editNames);
