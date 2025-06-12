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
  await new Promise(r => setTimeout(r, 4500));

  fadeOut("msg1");
  await new Promise(r => setTimeout(r, 1000));

  fadeIn("msg2");
  await new Promise(r => setTimeout(r, 4500));

  fadeOut("msg2");
  await new Promise(r => setTimeout(r, 2000));

  fadeIn("msg3");
  await new Promise(r => setTimeout(r, 2000));

  fadeOut("msg3");
  await new Promise(r => setTimeout(r, 1000));

  fadeIn("msg4");
  await new Promise(r => setTimeout(r, 2500));

  fadeOut("msg4");
  await new Promise(r => setTimeout(r, 1000));

  fadeIn("msg5");
  await new Promise(r => setTimeout(r, 2500));

  fadeOut("msg5");
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

  if (num >= 1 && num <= 10) {
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
      "You know, tears are nature’s way of relieving our pain. To cry is to be brave enough to embrace your vulnerability and get ready to come back stronger. So don’t worry—just let it all out.",
      "Don’t you think today is a good day to celebrate yourself? You may not have succeeded yet, but it’s amazing how far you’ve come. It hasn’t been easy, and it’s taken a lot of effort. You did great—really, I mean it. So cheers to that!",
      "You may think it’s unfortunate that you’re not as gifted as others. But someone once told me that effort is a talent too. Not everyone has the determination and passion that you do. That’s what makes you special—and it will make you great."
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
        const char = document.createTextNode(quote.charAt(i));
        display.insertBefore(char, cursor);
        i++;

        // Move cursor to end again
        display.appendChild(cursor);
      } else {
        clearInterval(typeInterval);
        cursor.remove(); // remove blinking cursor
      }
    }, 50);

    // Show the back button
    const backButton = document.getElementById("back-button");
    backButton.classList.remove("hidden");
    backButton.addEventListener("click", goBack);

    // Hide the input box
    const quoteBox = document.getElementById("quote-input-box");
    quoteBox.classList.add("hidden");
    quoteBox.style.display = "none"; // ✅ Hide the box

    // Show the quote display
    display.classList.remove("hidden");
  } else {
    alert("Please enter a number between 1 and 10.");
  }
}

function goBack() {
  const quoteDisplay = document.getElementById("quote-display");
  quoteDisplay.classList.add("hidden");
  quoteDisplay.textContent = ""; // Optional: clear the quote text

  document.getElementById("back-button").classList.add("hidden");

  const quoteBox = document.getElementById("quote-input-box");
  quoteBox.classList.remove("hidden");
  quoteBox.style.display = "block"; // ✅ Make sure it's visible again

  document.getElementById("typing-text").classList.remove("hidden");
  document.getElementById("quote-number").classList.remove("hidden");
  document.getElementById("quote-button").classList.remove("hidden");
}






