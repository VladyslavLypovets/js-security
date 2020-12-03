self.addEventListener('message', function(e) {
  const check = checkXss(e.data);
  self.postMessage({ ...check, value: e.data });
}, false);

const dangerStrings = [
  '<script',
  'onerror',
  'onload',
  'onmouseover',
  'onmouseleave',
  'onmouseenter',
  'onmousedown',
  'onmouseup',
  'onsubmit',
  'onmouseout',
  'onmousemove',
  'oncontextmenu',
  'onclick',
  'dblclick',
  'onabort',
  'onblur',
  'onchange',
  'ondragdrop',
  'onfocus',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onmove',
  'onreset',
  'onresize',
  'onselect',
  'onunload',
  'javascript:',
];

// for tests <p onClick="alert('hi')" language="alert('hi')">text more</p>

function checkXss(string) {
  if (dangerStrings.find((str) => string.toLowerCase().includes(str))) {
    return { string: 'string is danger', className: 'danger' };
  }
  return { string: 'string is save', className: 'success' }
}
