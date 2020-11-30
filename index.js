
function rollTheDice(){
  var imageList = ['images/dice1.png', 'images/dice2.png', 'images/dice3.png', 'images/dice4.png', 'images/dice5.png', 'images/dice6.png'];//your image list as an array of urls;
  var randomNumber1 = Math.floor(Math.random() * imageList.length);
  //var imageNumber = randomNumber1 * imageList.length; //gives you a random number in the range of imageList's size
  document.querySelector(".img1").setAttribute("src", imageList[randomNumber1]);

  var randomNumber2 = Math.floor(Math.random() * imageList.length);
  document.querySelector(".img2").setAttribute("src", imageList[randomNumber2]);

  if (randomNumber1>randomNumber2)
  {
    document.querySelector("h1").innerHTML="🚩Player 1 wins";
  }else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins🚩";
  }else{
    document.querySelector("h1").innerHTML="🎌Draw🎌";
  }
}
rollTheDice();
