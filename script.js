const CORRECT_PASSWORD = "love123"; // change this

function checkPassword() {
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === CORRECT_PASSWORD) {
    sendTelegramMessage();
    window.location.href = "gallery.html";
  } else {
    error.textContent = "❌ Wrong password, try again!";
    error.style.color = "red";
  }
}
const button = document.getElementById("showMsgBtn");
const slider = document.getElementById("messageSlider");
const typedText = document.getElementById("typedText");

const message = "Every picture here is a piece of my heart, a memory of us 💞 You make every moment shine brighter than stars ✨ I love you endlessly ❤️";

let index = 0;
let typing = false;

button.addEventListener("click", () => {
  slider.classList.add("active");
  if (!typing) {
    typing = true;
    typeMessage();
  }
  createHearts();
});

function typeMessage() {
  if (index < message.length) {
    typedText.textContent += message.charAt(index);
    index++;
    setTimeout(typeMessage, 70);
  }
}

function createHearts() {
  const heartContainer = document.querySelector(".heart-container");
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = Math.random() * 30 + 20 + "px";
    heartContainer.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300);
}


// 🔔 Telegram alert when someone logs in
function sendTelegramMessage() {
  const BOT_TOKEN = "YOUR_BOT_TOKEN";
  const CHAT_ID = "YOUR_CHAT_ID";
  const message = `💌 Someone logged in to your love page at ${new Date().toLocaleString()}`;
  
  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
  });
}
