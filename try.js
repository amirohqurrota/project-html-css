// var array = [[1, 2], [3, 4]];
// var double = x => x * 2;
// var doubledArray = _.map( array, subarray => _.map( subarray, double ));

// var array = [[1, 2], [3, 4]];
// var double = x => x * 2;
// var doubledArray = array.map( subarray => subarray.map( double ));

// console.log(doubledArray)

// let nama="amiroh";
// console.log(nama[1]);

// const array1=[1,2,3,4];
// const a=(x,y)=>x+y;

// console.log(array1.reduce((x,y)=>x+y+2));

function percobaan(angka){
    if (angka*0 !==0){
        throw new Error("Bukan angka!")
    }
    return "ini angka"
}

try{
    console.log(percobaan(1))
}catch(error){
    console.error(error);
}