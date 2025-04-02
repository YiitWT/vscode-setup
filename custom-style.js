console.log("Custom style loaded");
document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.querySelector(".title-border-bottom");
    if (titleElement) {
        titleElement.style.setProperty("--title-border-bottom-color", "transparent");
    }
});