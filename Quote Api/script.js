const quoteText = document.querySelector('.quote-text');
const generateBtn = document.querySelector('.generate-btn');
const cursor = document.querySelector('.custom-cursor');

const quotes = [
  "The cosmos is within us. We are made of star-stuff.",
  "Somewhere, something incredible is waiting to be known.",
  "Space isn’t remote at all. It’s only an hour’s drive away if your car could go straight up.",
  "Across the sea of space, the stars are other suns.",
  "Exploration is in our nature. We began as wanderers, and we are wanderers still."
];

generateQuote();

generateBtn.addEventListener('click', generateQuote);

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = `"${quotes[randomIndex]}"`;

  generateBtn.classList.add('btn-clicked');
  setTimeout(() => generateBtn.classList.remove('btn-clicked'), 200);
}

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
