const pekerjaInput = document.getElementById("pekerja");
const jamKerjaInput = document.getElementById("jamKerja");
const upahJamInput = document.getElementById("upahJam");
const btnSimpan = document.getElementById("btnSimpan");
const btnReset = document.getElementById("btnReset");
const hasil = document.getElementById("hasil");

const daftarPekerja = [];
const daftarJam = [];
const daftarUpahJam = [];
const daftarUpah = [];

function hitungUpah(jam, upah) {
    return jam * upah;
}

function hitungTotalUpah() {
    let total = 0;
    for (let i = 0; i < daftarUpah.length; i++) {
        total += daftarUpah[i];
    }
    return total;
}

function tampilkanData() {
    hasil.innerHTML = "";

    for (let i = 0; i < daftarPekerja.length; i++) {
        hasil.innerHTML +=
            "<p>Nama Pekerja: " + daftarPekerja[i] + "<br>" +
            "Jam Kerja: " + daftarJam[i] + "<br>" +
            "Upah per Jam: " + daftarUpahJam[i] + "<br>" +
            "Total Upah: " + daftarUpah[i] + "</p>";
    }

    hasil.innerHTML += "<p>Total Pengeluaran Upah: Rp" + hitungTotalUpah() + "</p>";
}

function resetInput() {
    pekerjaInput.value = "";
    jamKerjaInput.value = "";
    upahJamInput.value = "";
}

function resetSemuaData() {
    daftarPekerja.length = 0;
    daftarJam.length = 0;
    daftarUpahJam.length = 0;
    daftarUpah.length = 0;
    resetInput();
    hasil.innerHTML = "";
}

function simpanData() {
    daftarPekerja.push(pekerjaInput.value);
    daftarJam.push(Number(jamKerjaInput.value));
    daftarUpahJam.push(Number(upahJamInput.value));

    const indeks = daftarPekerja.length - 1;
    const upah = hitungUpah(daftarJam[indeks], daftarUpahJam[indeks]);
    daftarUpah.push(upah);

    tampilkanData();
    resetInput();
}

btnSimpan.addEventListener("click", simpanData);
btnReset.addEventListener("click", resetSemuaData);
