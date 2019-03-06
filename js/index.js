
var rnd1 = getRandomNumber(1,7);
var rnd2 = getRandomNumber(1,7);

console.log(rnd1+", "+rnd2);

document.querySelector(".img1").src = "images/dice"+rnd1+".png";
document.querySelector(".img2").src = "images/dice"+rnd2+".png";

var title = document.querySelector("h1");

if(rnd1 === rnd2){
  title.textContent = "It's a draw!";
}else{
  if(rnd1 > rnd2){
    title.textContent = "🏆 Player 1 wins!";
  }else{
    title.textContent = "Player 2 wins! 🏆";
  }
}

//Retorna numero aleatorio entre min(incluido) y max(excluido)
function getRandomNumber(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}
