const CORRECT_PASSWORD = "Dramaking"; // change this

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

const message = "Happiest Birthday to the man I love the most❤.Every picture in this video is a piece of my heart, every smile, every hug, every little moment we’ve shared is a memory I’ll treasure forever🥹🎀. I don’t even know where to start when I try to explain my love for you—how do I explain the way my heart races and I get butterflies just by looking at you? How do I describe the joy and warmth that floods me every time you say ‘I love you’? How do I ever put into words the comfort and peace I feel when I’m around you, knowing that you are my safest place. Being with you turns ordinary moments into so special ❤. Even the smallest things—walking together, talking, laughing, or simply sitting in silence or even fighting🤣—are moments I’ll never forget.On your special day, I just want you to know that my love for you is endless🥹❤. You are my happiness, my calm in the storm, my safe place 😳💋. Thank you for being the most incredible person in my life, for every memory, every smile, every hug, and every word that makes my heart skip a beat👀🫀.I love you more than words can ever capture and I will always love youuu🥹❤.May you achieve everything in life you desired for and always surround by the people who cares about you just like I do🥹🎀 .Once again Happiest birthday my Dramaking 💋";

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
  const BOT_TOKEN = "8461580627:AAGFm74-YzSZSLLTajYBoqRphnWFGw_lnl8";
  const CHAT_ID = "8181790338";
  const message = `💌 Someone logged in to your love page at ${new Date().toLocaleString()}`;
  
  fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
  });
}