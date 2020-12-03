const textArea = document.getElementById('textarea');
const logs = document.getElementById('logs');
const output = document.getElementById('output');
const worker = new Worker("./src/worker.js");
let textAreaModified = false;

textArea.addEventListener('keydown', () => {
  textAreaModified = true;
});

setInterval(() => {
  if (textarea.value && textAreaModified) {
    textAreaModified = false;
    worker.postMessage(textarea.value);
  }
}, 500);

worker.addEventListener('message', function(e) {
  const { string, value, className } = e.data;
  const p = document.createElement("p");
  const node = document.createTextNode(`${value} - ${string}`);
  p.className = className;
  p.appendChild(node);
  logs.appendChild(p);
  if (className === 'success') {
    output.innerHTML = value;
  }
}, false);
