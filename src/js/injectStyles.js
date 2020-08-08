
const path = chrome.extension.getURL("styles/compiled.css");

const newLinkElement = document.createElement("link")
.setAttribute("rel", "stylesheet")
.setAttribute("type", "text/css")
.setAttribute("href", path)

document.getElementsByTagName("head").appendChild(newLinkElement)

