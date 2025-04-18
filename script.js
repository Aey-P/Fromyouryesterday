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




function getQuote() {
  const num = parseInt(document.getElementById("quote-number").value);

  if (num >= 1 && num <= 50) {
    // ✅ Hide the input box after valid input
    document.getElementById("quote-input-box").classList.add("hidden");

    // 🔥 Optional: display a quote (example)
    alert("You picked number " + num + "! Here's your inspirational quote card...");
  } else {
    alert("Please enter a number between 1 and 50.");
  }
}


startSequence();
