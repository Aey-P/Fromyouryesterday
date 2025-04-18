function fadeIn(id, delay = 0) {
  setTimeout(() => {
    const el = document.getElementById(id);
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

  fadeOut("msg1", 1000);
  fadeIn("msg2", 1000);
  await new Promise(r => setTimeout(r, 2500));

  fadeOut("msg2", 1000);
  fadeIn("weather", 1000);
  await new Promise(r => setTimeout(r, 2000));

  fadeOut("weather", 1000);
  fadeIn("button-box", 1000);
}

startSequence();
