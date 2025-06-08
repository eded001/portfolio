document.addEventListener("DOMContentLoaded", () => {
    const yearsSince2005 = new Date().getFullYear() - 2005;
    document.getElementById("years-of-experience").textContent = yearsSince2005;
    document.body.removeAttribute("data-loading");
});
