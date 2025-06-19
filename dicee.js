
// ...existing code...
document.getElementById("rollButton").addEventListener("click", function () {
  // Add shake animation
  var img1 = document.querySelector(".img1");
  var img2 = document.querySelector(".img2");
  img1.classList.add("shake");
  img2.classList.add("shake");

  setTimeout(function () {
    img1.classList.remove("shake");
    img2.classList.remove("shake");
  }, 400);

  // ...existing code...
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
  var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", randomDiceImage1);
  document.querySelector(".img2").setAttribute("src", randomDiceImage2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }
});
// ...existing code...