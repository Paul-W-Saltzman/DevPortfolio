window.setTheme = (isDark) => {
    const body = document.body;
    if (isDark) {
        body.setAttribute("data-bs-theme", "dark");
    } else {
        body.setAttribute("data-bs-theme", "light");
    }
};