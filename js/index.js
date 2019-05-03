window.addEventListener("scroll", function() {
    document
        .querySelector(".navigation")
        .classList[window.scrollY > 80 ? "add" : "remove"]("scrolled");
});
