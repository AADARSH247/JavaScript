// let marks=[90,80,70,60,90,80];
// sum=0;
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i];
// }
// console.log("Average is",sum/marks.length);


// list=[140,90,890,700,100,90];
// con=[99,65,56]
// list.push(1000)
// let deleted=list.pop()
// for(let i=0;i<list.length;i++){
//     list[i]=list[i]-(0.1*list[i])
// }
// console.log(`The Final Price After 10% discount on each item is: ${list}`)
// console.log("The deleted price was :",deleted)
// console.log("In string",list.toString())

// arrays concatination
// let array_add=list.concat(con);
// console.log(array_add)
// heros=["spiderman","batman","kalupandey","harikrishna","RaMNathYogi"];
// heros_slice=heros.slice(1,4);
// console.log(heros_slice);
// heros.unshift("Shaktiman");
// console.log(heros);

// let deleted_hero=heros.shift();
// console.log(heros)



// Splice.Array...
let numerical_array=[90,100,51,24,53,65,78,97,102];
numerical_array.splice(3,2,1000,1001);
console.log(numerical_array);

let companies=["microsoft","apple","uber","ibm","Netflix"];
let new_companies=companies.shift();
companies.splice(2,1,"Ola");
companies.push("Amazon");
console.log(new_companies);
console.log(companies);
