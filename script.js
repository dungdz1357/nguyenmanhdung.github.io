"use strict";

// Thuộc tính value để lấy và thiết lập giá trị cho các thuộc tính input
// Thuộc tính textContent để lấy nội dung text của một phần tử
let score = 20;
let highScore = 0; //Chức năng high score là chức năng ghi lại điểm cao nhất
let secretNumber = Number(Math.trunc(Math.random() * 20) + 1);
// const secretNumber = Number(Math.random() * 19 + 1).toFixed(0);
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

//Dùng hàm trunc() chứ không dùng toFixed() vì trunc làm tròn xuống + 1, toFixed thì phải *20 rồi + 1
console.log(secretNumber, typeof secretNumber);
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (score > 1) {
    if (!guess) {
      displayMessage("🙄No number");
      //Trường hợp No number xảy ra khi ở ô input ta không có số nào, thì JS sẽ mặc định một giá trị falsy là 0
    } else if (guess === secretNumber) {
      document.querySelector(".number").textContent = secretNumber;
      displayMessage("😍Correct number!");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
      // Gán chuỗi vế phải cho nội dung text của class messsage.
    }
    if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? "📈Too high" : "Too low");
        score--;
        document.querySelector(".score").textContent = score;
        console.log(`Score: ${score}`);
      }
    }
  } else {
    displayMessage("🙃You lost this game");
    document.querySelector(".score").textContent = 0;
  }
});
//Nhìn thì có vẻ như không gọi hàm nhưng khi click chuột thì hàm sẽ được gọi

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});

// document.querySelector(".again").addEventListener("click", function () {
// })
