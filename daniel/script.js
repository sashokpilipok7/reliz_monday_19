document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".article-but").forEach(button => button.addEventListener("click", function () {
        alert('Сторінка товару ще в розробці!');
    }));

    document.querySelectorAll(".nav-link").forEach(button => button.addEventListener("click", function () {
        alert('Ця сторінка ще в розробці!');
    }));
});