document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
        const moreText = button.nextElementSibling;
        moreText.style.display = (moreText.style.display === "none" || !moreText.style.display) ? "block" : "none";
    });
});