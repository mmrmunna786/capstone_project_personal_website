<script>
  const btn = document.getElementById("themeToggleBtn");
  const html = document.documentElement;

  btn.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    html.setAttribute("data-bs-theme", newTheme);
  });
</script>
