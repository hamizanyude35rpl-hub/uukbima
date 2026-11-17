const namaInput = document.getElementById("nama") as HTMLInputElement;
const gajiPokokInput = document.getElementById("gajiPokok") as HTMLInputElement;
const jamLemburInput = document.getElementById("jamLembur") as HTMLInputElement;
const hariAbsenInput = document.getElementById("hariAbsen") as HTMLInputElement;
const btnHitung = document.getElementById("btnHitung") as HTMLButtonElement;
const hasilGaji = document.getElementById("hasilGaji") as HTMLElement;

function hitungGaji(): void {
    const nama = namaInput.value;
    const gajiPokok = Number(gajiPokokInput.value);
    const jamLembur = Number(jamLemburInput.value);
    const hariAbsen = Number(hariAbsenInput.value);

    if (gajiPokok === 0 || jamLembur === 0 || hariAbsen === 0) {
        hasilGaji.innerHTML = "Error: Data tidak valid.";
        return;
    }

    const upahLembur: number = 25000;
    const potonganAbsen: number = 100000;
    const gajiBersih = gajiPokok + (jamLembur * upahLembur) - (hariAbsen * potonganAbsen);

    let kedisiplinan: string;
    if (hariAbsen === 0) {
        kedisiplinan = "Sangat Disiplin";
    } else if (hariAbsen <= 2) {
        kedisiplinan = "Disiplin";
    } else if (hariAbsen <= 4) {
        kedisiplinan = "Cukup Disiplin";
    } else if (hariAbsen <= 6) {
        kedisiplinan = "Kurang Disiplin";
    } else {
        kedisiplinan = "Perlu Pembinaan"; 
    }

    hasilGaji.innerHTML =
        "Nama: " + nama + "<br>" +
        "Gaji bersih: Rp" + gajiBersih + "<br>" +
        "Kedisiplinan: " + kedisiplinan;
}

btnHitung.addEventListener("click", hitungGaji);
