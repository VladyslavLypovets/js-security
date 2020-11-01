const textArea = document.getElementById('textarea');
const logs = document.getElementById('logs');
const worker = new Worker("./worker.js");
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
  const p = document.createElement("p");
  const node = document.createTextNode(e.data);
  p.appendChild(node);
  logs.appendChild(p);
}, false);




