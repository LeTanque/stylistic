// I don't completely understand this file, but stylish runs this along with apply.

ocument.body.addEventListener("click", function(event) {
  if(event.target.href) {
      chrome.runtime.sendMessage({tax: event.target.href});
  }
});

document.body.addEventListener('contextmenu', function(event) {
  if(event.target.href) {
      chrome.runtime.sendMessage({tax: event.target.href});
  }
  return false;
}, false);

document.body.addEventListener("auxclick", function(event) {
  if(event.target.href) {
      chrome.runtime.sendMessage({tax: event.target.href});
  }
});