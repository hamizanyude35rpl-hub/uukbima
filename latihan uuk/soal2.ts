const pekerjaInput = document.getElementById("pekerja") as HTMLInputElement;
const jamKerjaInput = document.getElementById("jamKerja") as HTMLInputElement;
const upahJamInput = document.getElementById("upahJam") as HTMLInputElement;
const btnSimpan = document.getElementById("btnSimpan") as HTMLButtonElement;
const btnReset = document.getElementById("btnReset") as HTMLButtonElement;
const hasil = document.getElementById("hasil") as HTMLElement;

const daftarPekerja: string[] = [];
const daftarJam: number[] = [];
const daftarUpahJam: number[] = [];
const daftarUpah: number[] = [];

function hitungUpah(jam: number, upah: number): number {
    return jam * upah;
}

function hitungTotalUpah(): number {
    let total: number = 0;
    for (let i = 0; i < daftarUpah.length; i++) {
        total += daftarUpah[i];
    }
    return total;
}

function tampilkanData(): void {
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

function resetInput(): void {
    pekerjaInput.value = "";
    jamKerjaInput.value = "";
    upahJamInput.value = "";
}

function resetSemuaData(): void {
    daftarPekerja.length = 0;
    daftarJam.length = 0;
    daftarUpahJam.length = 0;
    daftarUpah.length = 0;
    resetInput();
    hasil.innerHTML = "";
}

function simpanData(): void {
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
