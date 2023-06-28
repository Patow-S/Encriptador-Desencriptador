function changeColorMode() {
    const body = document.body;
    const darkModeButton = document.getElementById("modo");
    body.classList.toggle("dark");
    darkModeButton.classList.toggle("hide");
}