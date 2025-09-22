// Staff carousel
const items = document.querySelectorAll(".item");
const prevbtn = document.getElementById("prevbtn");
const nextbtn = document.getElementById("nextbtn");
let current = 0;

function showImages(index) {
  items.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) {
      item.classList.add("active");
    }
  });
}

// Next button
nextbtn.addEventListener("click", () => {
  current = (current + 1) % items.length;
  showImages(current);
});

// Previous button
prevbtn.addEventListener("click", () => {
  current = (current - 1 + items.length) % items.length;
  showImages(current);
});

// Form validation
document.getElementById("sbmtbtn").addEventListener("click", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("formMessage");

  if (name === "") {
    message.textContent = "⚠️ Username cannot be empty!";
    message.style.color = "red";
  } else if (email === "") {
    message.textContent = "⚠️ Email cannot be empty!";
    message.style.color = "red";
  } else if (!email.includes("@")) {
    message.textContent = "⚠️ Invalid email!";
    message.style.color = "red";
  } else {
    message.textContent = "✅ Submitted successfully!";
    message.style.color = "green";
  }
});
