function toggleHighContrast() {
  document.body.classList.toggle('high-contrast');
}

function increaseFont() {
  const body = document.body;
  const style = window.getComputedStyle(body, null).getPropertyValue('font-size');
  const currentSize = parseFloat(style);
  body.style.fontSize = (currentSize + 2) + 'px';
}

function decreaseFont() {
  const body = document.body;
  const style = window.getComputedStyle(body, null).getPropertyValue('font-size');
  const currentSize = parseFloat(style);
  body.style.fontSize = (currentSize - 2) + 'px';
}

