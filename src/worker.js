self.addEventListener('message', function(e) {
  const check = checkXss(e.data);
  self.postMessage({ ...check, value: e.data });
}, false);

const dangerStrings = [
  '<script',
  'onerror'
];

function checkXss(string) {
  if (dangerStrings.find((str) => string.includes(str))) {
    return { string: 'string is danger', className: 'danger' };
  }
  return { string: 'string is save', className: 'success' }
}
