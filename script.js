document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const code = btn.nextElementSibling.innerText;
    navigator.clipboard.writeText(code).then(() => {
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = "Copy"), 2000);
    });
  });
});

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    tabContents.forEach((content) => {
      content.style.display = "none";
    });

    document.getElementById(tab.dataset.tab).style.display = "block";
  });
});
