window.toggleTheme = () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    html.setAttribute("data-bs-theme", newTheme);
};
