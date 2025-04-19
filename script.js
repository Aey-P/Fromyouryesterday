startSequence();

function fadeIn(id, delay = 0) {
  const el = document.getElementById(id);
  setTimeout(() => {
    el.classList.remove("hidden");
    el.classList.add("visible");
  }, delay);
}

function fadeOut(id, delay = 0) {
  setTimeout(() => {
    const el = document.getElementById(id);
    el.classList.remove("visible");
    el.classList.add("hidden");
  }, delay);
}

async function startSequence() {
  fadeIn("msg1");
  await new Promise(r => setTimeout(r, 2000));

  fadeOut("msg1");
  await new Promise(r => setTimeout(r, 1000));

  fadeIn("msg2");
  await new Promise(r => setTimeout(r, 2500));

  fadeOut("msg2");
  await new Promise(r => setTimeout(r, 1000));

  fadeIn("weather");
  await new Promise(r => setTimeout(r, 2500));

  fadeOut("weather");
  await new Promise(r => setTimeout(r, 1000));
  


  // ✅ Fade in the whole input box
  fadeIn("quote-input-box");
  await new Promise(r => setTimeout(r, 1500));

  // ✅ After fading in the box, fade in the children
  fadeIn("typing-text");
  fadeIn("quote-number");
  fadeIn("quote-button");
  await new Promise(r => setTimeout(r, 1500));
}




async function getQuote() {
  const num = parseInt(document.getElementById("quote-number").value);

  if (num >= 1 && num <= 50) {
    fadeOut("typing-text");
    fadeOut("quote-number");
    fadeOut("quote-button");
    await new Promise(r => setTimeout(r, 1000));
  
    document.getElementById("quote-input-box").style.display = "none";

    // Quote list
    const quotes = [
      "Believe in yourself and all that you are.",
      "You are stronger than you think.",
      "Every moment is a fresh beginning.",
      "Start where you are. Use what you have. Do what you can.",
      "The best time for new beginnings is now.",
    ];
    const quote = quotes[(num - 1) % quotes.length];

    // Typing animation
    const display = document.getElementById("quote-display");
    display.textContent = ""; // Clear previous
    display.classList.remove("hidden");
    display.style.opacity = 1; // Instantly visible (for typing)

    let i = 0;
    const cursor = document.createElement("span");
    cursor.classList.add("typing-cursor");
    display.appendChild(cursor);

    const typeInterval = setInterval(() => {
      if (i < quote.length) {
        display.insertBefore(document.createTextNode(quote.charAt(i)), cursor);
        i++;
      } else {
        clearInterval(typeInterval);
        cursor.remove(); // remove blinking cursor
      }
    }, 50); // Speed of typing
  } else {
    alert("Please enter a number between 1 and 50.");
  }
}





