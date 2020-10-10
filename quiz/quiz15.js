let warna = ["biru", "merah", "kuning", "hijau"]
let dataBukuTambahan = {
    penulis: "john dor",
    tahunTerbit: 2020
}
let buku = {
    nama: "pemrograman dasar",
    jumlahHalaman: 172,
    warnaSampul: ["hitam"]
}

warnabuku = {...buku, warnaSampul: [warna[1]], ...dataBukuTambahan, }


console.log(warnabuku)
