// typing.js
document.addEventListener("DOMContentLoaded", () => {
  const typingSpeed = 7; // ms per character
  const baseDelay = 0;    // you can offset all lines if you want

  const lines = Array.from(document.querySelectorAll(".type-line"));

  // Prepare each element: store full text & clear it
  lines.forEach((el) => {
    const fullText = el.textContent.trim();
    const customSpeed = el.getAttribute("data-speed");
    const delayAttr = el.getAttribute("data-delay");

    el.dataset.fullText = fullText;
    el.textContent = "";

    // Optional: define per-line speed and delay
    el.dataset.typingSpeed = customSpeed ? Number(customSpeed) : typingSpeed;
    el.dataset.delay =
      delayAttr !== null ? Number(delayAttr) : baseDelay;
  });

  // Type one element
  function typeElement(el) {
    const text = el.dataset.fullText || "";
    const speed = Number(el.dataset.typingSpeed) || typingSpeed;
    let index = 0;

    const cursorSpan = document.createElement("span");
    cursorSpan.className = "typing-cursor";
    cursorSpan.textContent = "▍";
    el.appendChild(cursorSpan);

    const intervalId = setInterval(() => {
      if (index < text.length) {
        const char = text.charAt(index);
        cursorSpan.insertAdjacentText("beforebegin", char);
        index++;
      } else {
        clearInterval(intervalId);
        cursorSpan.remove();
      }
    }, speed);
  }

  // Schedule all elements with their delays
  lines.forEach((el) => {
    const delay = Number(el.dataset.delay) || 0;
    setTimeout(() => typeElement(el), delay);
  });
});
