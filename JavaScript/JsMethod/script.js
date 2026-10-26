const str ="Anand Kumar Kumar";
console.log(str.charAt(3));
console.log(str.at(3));

// const Arrya =[10,20,30,40,50]
// console.log(arr.at(2));
// console.log(str.charAt(2));

const str2 = str.slice(2,6);
console.log(str2);

const s_str= str.substring(2,5);
console.log(s_str);

const Str3 = str.trim(2);
console.log(Str3);

const Str4 = str.trimEnd(4,5);
console.log(Str4);

const Str5 =str.toLowerCase(str);
console.log(Str5);

const Str6 =str.toUpperCase(str);
console.log(Str6);

const Str7 = str.includes("and");
console.log(Str7);

const Str8 = str.endsWith("mar");
console.log(Str8);

const Str9 = str.startsWith("Ana");
console.log(Str9);

const Str10 = str.replace("Kumar", "Soni");
console.log(Str10);

const Str11 = str.replaceAll("Kumar", "Soni");
console.log(Str11);

const Str12 = str.indexOf("K");
console.log(Str12);

const Str13= str.lastIndexOf("K");
console.log(Str13);

const Str14 = str.repeat((4));
console.log(Str14);



const marks ="22.20";
const fee ="22222";

console.log(Number.parseInt(fee));
console.log(Number.parseFloat(marks));

console.log(Number.isInteger(marks));
console.log(Number.isFinite(fee));
console.log(Number.isSafeInteger(fee));








