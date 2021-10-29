// Buatlah sebuah variabel bernama “nilai1” berupa array yang memiliki value integer. Kemudian buat sebuah variabel baru yang bernama “nilai2”  berisikan penjumlahan dari setiap value pada variable “nilai1”. Tampilkan hasil dari dari penjumlahan tersebut pada console. 
// Kalian memiliki variable berikut var filterValue = [-4,3,2,-21,1] . melakukan filter pada variabel tersebut sehingga isinya hanya berupa angka positif ([ 3, 2, 1 ])

console.log("\n ==================NO 1=====================")
let nilai1=[1,2,3,4]
let nilai2=nilai1.reduce((x,y)=>x+y)
console.log("isi nilai1 : [" + nilai1 +"]")
console.log("hasil nilai2 : "+nilai2);

console.log("\n ==================NO 2=====================")
var filterValue = [-4,3,2,-21,1]
filterValue=filterValue.filter(x=>x>0)
console.log(filterValue)

console.log("\n ==================NO 3=====================")
var data=[
    {name: "daniel", age:45},
    {name: "john", age:30},
    {name: "robert", age:null},
    {name: "jen", age:undefined},
    {name: null, age:undefined},
]
let result = data.filter(x=>x.name!=null && x.age!=null && x.age!=undefined)
console.log(result)


console.log("\n ==================NO 4=====================")
function konfersiMenit(number){
    let jam = Math.floor(number/60)
    let menit = number%60
    menit=(menit).toString().padStart(2,0)
    return jam+":"+menit
}

console.log("Hasil dari konfersi 88 :")
console.log(konfersiMenit(88))
console.log("Hasil dari konfersi 53 :")
console.log(konfersiMenit(53))
console.log("Hasil dari konfersi 120 :")
console.log(konfersiMenit(120))
console.log("Hasil dari konfersi 124 :")
console.log(konfersiMenit(124))

console.log("\n ==================NO 5=====================")
function inputHarusGenap(angka){
    if (angka%2!=0){
        throw new Error("Invalid")
    }
    return ("Valid")
}
console.log("hasil pemanggilan function dengan parameter 7")
try{
    console.log(inputHarusGenap(7));
} catch (e){
    console.log(e)
}
console.log("hasil pemanggilan function dengan parameter 4")
try{
    console.log(inputHarusGenap(4));
} catch (e){
    console.log(e)
}

console.log("\n ==================NO 6=====================")
function  perkalianUnik(arr){
    let base=arr.reduce((x,y)=>x*y)
    let result=arr.map(x=>base/x)
    return result
}

console.log("Hasil dari [2,4,6] :")
console.log(perkalianUnik([2,4,6]))
console.log("\nHasil dari [1,2,3,4,5] :")
console.log(perkalianUnik([1,2,3,4,5]))
console.log("\nHasil dari [1,4,3,2,5] :")
console.log(perkalianUnik([1,4,3,2,5]))
console.log("\nHasil dari [1,3,3,1] :")
console.log(perkalianUnik([1,3,3,1]))
console.log("\nHasil dari [2,1,8,10,2] :")
console.log(perkalianUnik([2,1,8,10,2]))