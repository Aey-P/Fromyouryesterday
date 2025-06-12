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
      "Due to what pass, I'm glad your here with me at this moment. Thank you for not giving up ;)",
      "To be love and loved by you are my privilege. I'm glad we've got each other.",
      "Have you tell you love me today? No? Well, would you please go to the mirror and to that?",
      "You're never alone. You'll always have me in the mirror. And also someone who watch you from afar that'll jump off if you need a hand. You just need to ask.",
      "I know you independent and strong but don't forget to let yourself feel the vulnerable sometime. To tighten rope to soon its break.",
      "Sometime you have to admit that you are a burden and that's nothing wrong with it. Human is the socialize creature that's need to rely on each other anyway. Sometime you still in the process of learning and need some space to developing. But trust me people will understand. At least they need to.",
      "Love yourself is not selfish action. It's the different things. To be love and taking care of someone shouldn't be forbidden. And in this case the 'someone' is you yourself.",
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





