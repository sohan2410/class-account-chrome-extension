let num = 1;
chrome.storage.sync.get("ca", function (data) {
  num = data.ca;
});
let temp = window.location.href;
let url = new URL(temp);
if (url.origin === "https://meet.google.com") {
  alert("hello from onCreated if condition true");
  url.search = "?authuser=" + num;
  console.log(url.toString());
  location.assign(url.toString());
}
