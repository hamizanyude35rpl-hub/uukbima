"use strict";
const namaInput = document.getElementById("nama");
const gajiPokokInput = document.getElementById("gajiPokok");
const jamLemburInput = document.getElementById("jamLembur");
const hariAbsenInput = document.getElementById("hariAbsen");
const btnHitung = document.getElementById("btnHitung");
const hasilGaji = document.getElementById("hasilGaji");
function hitungGaji() {
    const nama = namaInput.value;
    const gajiPokok = Number(gajiPokokInput.value);
    const jamLembur = Number(jamLemburInput.value);
    const hariAbsen = Number(hariAbsenInput.value);
    if (gajiPokok === 0 || jamLembur === 0 || hariAbsen === 0) {
        hasilGaji.innerHTML = "Error: Data tidak valid.";
        return;
    }
    const upahLembur = 25000;
    const potonganAbsen = 100000;
    const gajiBersih = gajiPokok + (jamLembur * upahLembur) - (hariAbsen * potonganAbsen);
    let kedisiplinan;
    if (hariAbsen === 0) {
        kedisiplinan = "Sangat Disiplin";
    }
    else if (hariAbsen <= 2) {
        kedisiplinan = "Disiplin";
    }
    else if (hariAbsen <= 4) {
        kedisiplinan = "Cukup Disiplin";
    }
    else if (hariAbsen <= 6) {
        kedisiplinan = "Kurang Disiplin";
    }
    else {
        kedisiplinan = "Perlu Pembinaan";
    }
    hasilGaji.innerHTML =
        "Nama: " + nama + "<br>" +
            "Gaji bersih: Rp" + gajiBersih + "<br>" +
            "Kedisiplinan: " + kedisiplinan;
}
btnHitung.addEventListener("click", hitungGaji);
