function showPopup() {
        document.getElementById("popup").style.display = "flex";
    }

    function closePopup() {
        document.getElementById("popup").style.display = "none";
    }

    // Cierre al hacer clic fuera del contenido (opcional)
    window.addEventListener("click", function (e) {
        const popup = document.getElementById("popup");
        if (e.target === popup) {
            popup.style.display = "none";
        }
    });