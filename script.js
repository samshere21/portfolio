// Open form
document.getElementById("openForm").onclick = () => {
  document.getElementById("contactForm").classList.remove("hidden");
};

// Close form
document.getElementById("closeForm").addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById("contactForm").classList.add("hidden");
});

// Validation
document.getElementById("messageForm").onsubmit = (e) => {
  const name = document.querySelector("input[name='name']").value.trim();
  const email = document.querySelector("input[name='email']").value.trim();
  const message = document.querySelector("textarea[name='message']").value.trim();
  const captcha = document.getElementById("captcha");

  if (!name || !email || !message) {
    alert("⚠️ Please fill out all fields before sending.");
    e.preventDefault();
    return;
  }

  if (!captcha.checked) {
    alert("⚠️ Please confirm you are human!");
    e.preventDefault();
    return;
  }

  alert("✅ Your message will be sent via email client.");
};

// Scroll reveal + nav highlight
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute("id");

    if (entry.isIntersecting) {
      // Fade in section
      entry.target.classList.add("opacity-100");

      // Update nav links (green active link)
      navLinks.forEach(link => {
        link.classList.remove("bg-green-500", "text-white");
        link.classList.add("text-white");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("bg-green-500", "text-white");
        }
      });
    }
  });
}, options);

sections.forEach(section => observer.observe(section));
