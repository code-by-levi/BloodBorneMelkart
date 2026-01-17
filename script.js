const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

function setActiveTab(tabName) {
  // Tabs
  tabs.forEach((t) => {
    const active = t.dataset.tab === tabName;
    t.classList.toggle("active", active);
    t.setAttribute("aria-selected", active ? "true" : "false");
  });

  // Panels
  panels.forEach((p) => {
    const active = p.dataset.panel === tabName;
    p.classList.toggle("active", active);
    if (active) p.focus();
  });
}

tabs.forEach((t) => {
  t.addEventListener("click", () => setActiveTab(t.dataset.tab));

  // Basic keyboard support (Enter/Space)
  t.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveTab(t.dataset.tab);
    }
  });
});
