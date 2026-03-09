document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".article-but").forEach(button => button.addEventListener("click", function () {
        alert('Сторінка товару ще в розробці!');
    }));
});