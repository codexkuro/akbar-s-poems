// Fungsi untuk membuka dan menutup isi puisi secara penuh
function togglePoem(element) {
    const content = element.querySelector('.poem-content');
    content.classList.toggle('expanded');
}
