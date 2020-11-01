self.addEventListener('message', function(e) {
  const check = checkXss(e.data);
  self.postMessage({ ...check, value: e.data });
}, false);

function checkXss(string) {
  if (string.indexOf('<script') !== -1) {
    return { string: 'string is danger', className: 'danger' };
  }
  return { string: 'string is save', className: 'success' }
}