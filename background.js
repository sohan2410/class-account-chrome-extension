chrome.tabs.onCreated.addListener((tab) => {
  chrome.tabs.executeScript(null, { file: "classAccount.js" });
});
