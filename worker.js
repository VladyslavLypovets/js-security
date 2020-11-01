self.addEventListener('message', function(e) {
  self.postMessage(`${e.data} - ${checkXss(e.data)}`);
}, false);

function checkXss(string) {
  if (string.indexOf('<script') !== -1) {
    return 'string is danger';
  }
  return 'string is save'
}