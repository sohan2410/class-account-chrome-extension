console.log("came into class Account.js");
let num = 2;
let temp = window.location.href;
let url = new URL(temp);
if (url.origin === "https://meet.google.com") {
  url.search = "?authuser=" + num;
  console.log(url.toString());
  location.assign(url.toString());
  initiallyCondition = 0;
}
