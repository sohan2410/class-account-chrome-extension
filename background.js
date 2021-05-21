chrome.tabs.onCreated.addListener((tab) => {
  chrome.tabs.executeScript(null, { file: "classAccount.js" });
});
chrome.tabs.onUpdated.addListener((tabid, chInfo, tab) => {
  chrome.tabs.executeScript(null, { file: "classAccount.js" });
});
