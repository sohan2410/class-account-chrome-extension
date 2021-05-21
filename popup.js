window.onload = function () {
  document.querySelector(".submitButton").onclick = function () {
    var classAccount = document.querySelector(".classAccount").value;

    chrome.storage.sync.set({ ca: classAccount }, function () {
      alert("Stored Successfully");
    });
  };
  document.querySelector(".get").onclick = function () {
    chrome.storage.sync.get("ca", function (data) {
      alert(data.ca);
    });
  };
};
