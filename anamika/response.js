document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;

  document.getElementById("formResponse").innerText =
    "Thank you " + name + "! Your enquiry for " + service + " has been received.";

  this.reset();
});
