const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("mobile-open");

        menuBtn.classList.toggle("active", isOpen);

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );
    });


    // Close menu when a link is clicked

    const links = navLinks.querySelectorAll("a");

    links.forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("mobile-open");

            menuBtn.classList.remove("active");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    });


    // Close menu when clicking outside

    document.addEventListener("click", (event) => {
        const clickedInsideMenu =
            navLinks.contains(event.target);

        const clickedButton =
            menuBtn.contains(event.target);

        if (
            !clickedInsideMenu &&
            !clickedButton &&
            navLinks.classList.contains("mobile-open")
        ) {
            navLinks.classList.remove("mobile-open");

            menuBtn.classList.remove("active");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });
}