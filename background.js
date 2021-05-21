chrome.tabs.onCreated.addListener((tab) => {
  chrome.tabs.executeScript(null, { file: "classAccount.js" });
  // alert("on created");

});

// chrome.tabs.onUpdated.addListener((tabid, chInfo, tab) => {
//   // chrome.tabs.executeScript(null, { file: "classAccount.js" });
//   // alert("on updated");
//   let temp = window.location.href;
//   let url = new URL(temp);
//   if (url.origin === "https://meet.google.com") {
//     url.search = "?authuser=" + num;
//     chrome.tabs.update(tab.id, {
//       url: tab.url.replace(url.toString()),
//     });
//   }
// });
