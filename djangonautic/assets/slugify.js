const titleInput = document.querySelector('input[name=title]');
const slugInput = document.querySelector('input[name=slug]');

const slugify = (string) => {
    return string.toString().toLowerCase().trim()
        .replace(/&/g, '-and-')
        .replace(/[\s\W-]+/g, '-');
}

titleInput.addEventListener('input', () => {
    slugInput.setAttribute('value', slugify(titleInput.value));
})