function welcomeMessage() {
  let userName = prompt("Please enter your name:");
  if (!userName) userName = "Guest";

  document.getElementById("welcome-speech").innerText =
    "Welcome, " + userName + "!";
}
welcomeMessage();

// Smooth scroll to profile
function scrollToProfile() {
  document.getElementById("profile").scrollIntoView({ behavior: "smooth" });
}

// FORM RESULT
const form = document.querySelector("form");
const resultBox = document.getElementById("formResult");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    let output = `<h2 class="text-xl font-bold mb-3">Your Message Summary</h2>`;

    formData.forEach((value, key) => {
      output += `<p><strong>${key}:</strong> ${value}</p>`;
    });

    resultBox.innerHTML = output;
    resultBox.classList.remove("hidden");

    form.reset();

    resultBox.scrollIntoView({ behavior: "smooth" });
  });
}
