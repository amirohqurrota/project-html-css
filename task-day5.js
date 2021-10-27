var a=5;
let b="kampus merdeka";
const nama = "Budi";
let terdaftar=true;
let lengkap_arr=[1,b,nama,terdaftar];

function perkenalan(){
    let asal="indonesia";
    return console.log(
        "perkenalkan nama saya " +
        nama + 
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        "berasal dari " +
        asal
    );
}

if (terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
//nama = b;

//console.log("asal diakses = " + asal);
console.log("a adalah = " + a);
console.log("b adalah = " + b);

//a. Ambillah index ke 2 dalam array di baris 5 dan tampilkan dalam console
console.log("array : " + lengkap_arr[2]);

//b. Ubah kode diatas sehingga dapat menampilkan baris 22 di dalam console. 
//mengubah let terdaftar menjadi true

//c. Lakukan pemanggilan untuk function perkenalan pada baris 31.
perkenalan();

// 2. Jawab pertanyaan dibawah sesuai dengan materi yang telah dijelaskan 
console.log("\n ==========NO 2==========")

//a. jelaskan kenapa baris 21,22,23 tidak dapat tampil?

console.log("a. baris 21,22,23 tidak dapat tampil karena syarat yang diberikan pada if adalah terdaftar==false. \n sedangkan terdaftar pada baris 4 di assign true, sehingga syarat if tidak terpenuhi")

//b. jelaskan kenapa deklarasi pada baris 26 menyebabkan error?
console.log("b. baris 26 menyebabkan error karena baris 26 mengubah value konstanta nama, sedangkan konstanta adalah tipe yang tidak dapat diubah valuenya")

//c. dengan melakukan komen pada baris ke 26, apakah baris 29 dapat di eksekusi? jelaskan.
console.log("c. baris 29 dapat dieksekusi karena variabel a sudah dideklarasikan di baris 1. yang tidak dapat dieksekusi adalah baris ke 28 karena 'asal' dideklarasikan didalam function. sehingga 'asal' tidak dapat dipanggil diluar function")

//3. Lakukan desctucturing pada kode di bawah sehingga Budi Tersimpan dalam variable bernama a,
//Sita tersimpan dalam variabel bernama b, dan Ayut ersimpan dalam variable bernama c. 
console.log("\n ==========NO 3==========")
const foo=['Budi', 'Sita', 'Ayu'];
[a,b,c]=foo;
console.log("a="+a +"; " + "b="+b +"; " +"c="+c);


//4. Kalian memiliki sebuah variabel berikut (let bdays = [’10-17′,’05-19′,’20-19′]). 
//Ubahlah tanda (-) dalam variabel tersebut menjadi (/) sehingga output yang akan keluar dalam console menjadi [ ’10/17′, ’05/19′, ’20/19′ ]
console.log("\n ==========NO 4==========");
let bdays = ["10-17","05-19","20-19"];
let bdays2 = bdays.map(x => x.replace("-","/"));
console.log(bdays2);

//5. Kalian memiliki variabel berikut (let value = [1,2,3,4,5,6]). 
//Kalikan setiap value dalam array tersebut dengan dua. Sehingga, ketika dipanggil variable value mengeluarkan output berupa [ 2, 4, 6, 8, 10, 12 ]
console.log("\n ==========NO 5==========");
let value = [1,2,3,4,5,6];
value=value.map(x=> x*2);
console.log(value);

//6. Kalian memiliki variabel berikut (let arr = [1.5, 2.56,5.1, 12.33]) 
//Bulatkan ke atas variable tersebut sehingga output yang dihasilkan adalah [ 2, 3, 6, 13 ]
console.log("\n ==========NO 6==========");
let arr = [1.5, 2.56,5.1, 12.33];
arr=arr.map(x=>Math.ceil(x))
console.log(arr)