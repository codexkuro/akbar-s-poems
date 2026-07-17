// Fungsi untuk membuka dan menutup isi puisi secara penuh
function togglePoem(element) {
    const content = element.querySelector('.poem-content');
    content.classList.toggle('expanded');
}

// Fitur Pesan Tersembunyi (Easter Egg)
let clickCount = 0;
let clickTimer;

const titleElement = document.getElementById('main-title');
const modalElement = document.getElementById('secret-modal');

// Mendeteksi klik pada judul
titleElement.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 1) {
        // Mulai timer 1.5 detik. Kalau klik ga sampe 3, hitungan di-reset.
        clickTimer = setTimeout(() => {
            clickCount = 0;
        }, 1500);
    }

    // Kalau berhasil klik 3 kali secara cepat
    if (clickCount === 3) {
        clearTimeout(clickTimer); // Hentikan timer
        clickCount = 0; // Reset hitungan
        showSecret(); // Munculin pesan
    }
});

// Fungsi untuk nampilin modal pesan
function showSecret() {
    modalElement.classList.add('show-modal');
}

// Fungsi untuk nutup modal pesan
function closeSecret() {
    modalElement.classList.remove('show-modal');
}
