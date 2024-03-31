document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var domain = document.getElementById("domain").value;
  var outputElement = document.getElementById("output");

  outputElement.innerHTML =
    "<p>Hello, <strong>" + name + "</strong>! Welcome to our website.</p>";

  if (domain === "WBTECH") {
    document.body.style.backgroundImage = 'url("images/Web-1.jpg")';
    outputElement.innerHTML +=
      "<p>Your favorite Domain is <strong>WB-TECH</strong>.</p>";
  } else if (domain === "MARKETING") {
    document.body.style.backgroundImage = 'url("images/marketing.png")';
    outputElement.innerHTML +=
      "<p>Your favorite Domain is <strong>MARKETING</strong>.</p>";
  } else if (domain === "FINANCE") {
    document.body.style.backgroundImage = 'url("images/finance.png")';

    outputElement.innerHTML +=
      "<p>Your favorite Domain is <strong>FINANCE</strong>.</p>";
  } else {
    document.body.style.backgroundImage = "";
    outputElement.innerHTML += "<p>You did not select a favorite Domain.</p>";
  }
});
