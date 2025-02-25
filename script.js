document.addEventListener("DOMContentLoaded", function() {
    const events = document.querySelectorAll(".event");

    const showElements = () => {
        events.forEach(event => {
            const rect = event.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                event.style.opacity = "1";
                event.style.transform = "translateY(0)";
            }
        });
    };

    window.addEventListener("scroll", showElements);
    showElements();
});
