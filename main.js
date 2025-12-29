const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const form = document.getElementById("contactForm");
const statusMsg = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name.length < 3) {
    showMessage("الاسم لازم يكون أكتر من 3 حروف", "error");
    return;
  }

  if (!validateEmail(email)) {
    showMessage("من فضلك أدخل بريد إلكتروني صحيح", "error");
    return;
  }

  if (message.length < 10) {
    showMessage("الرسالة قصيرة جدًا", "error");
    return;
  }

  const formData = {
    name,
    email,
    message,
    date: new Date().toLocaleString(),
  };

  localStorage.setItem("contactMessage", JSON.stringify(formData));

  showMessage("تم إرسال رسالتك بنجاح 🎉", "success");
  form.reset();
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function showMessage(msg, type) {
  statusMsg.textContent = msg;
  statusMsg.className = type;
}
