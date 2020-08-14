const path = chrome.extension.getURL("compiled.css");

let newLinkElement = document.createElement("link")
newLinkElement.setAttribute("rel", "stylesheet")
newLinkElement.setAttribute("type", "text/css")
newLinkElement.setAttribute("href", path)

document.querySelector("head").appendChild(newLinkElement);
