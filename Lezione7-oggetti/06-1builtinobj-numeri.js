let numero1 = 12.234234;
// oggetto della famiglia number, con . si accedono a tutti i metodi disponibili dell'oggetto

let numero2 = "45"; // occhio che è una stringa !
console.log(numero1.toExponential(2));
console.log(Number(numero2)); // diventa numero
console.log(parseFloat(numero2));
console.log(parseInt("10101010", 2));
console.log(parseInt("12", 6)); //esadecimale



let numero3 = "ciao";
let numero4 = 123;

console.log("ciao è un non numero? " + isNaN(numero3));
console.log("123 è un non numero? " + isNaN(numero4));

//oggetto math - interfaccia math - oggetto globale math
let abs = Math.abs(-34);
console.log(abs);

let num5 = 2;
console.log(Math.pow(num5, 2));
console.log(Math.sqrt(num5));

let num6 = 2.2455765765657;
let round1 = Math.round(num6);
console.log(round1);
console.log(num6.toPrecision(2));

// ceil arrotonda all'intero superiore
console.log(Math.ceil(num6));

// floor arrotonda ad intero inferiore
console.log(Math.floor(num6));

// random - boringgg
// ciao angelo come stai, meglio?

let rnd=Math.random()*10;
console.log(rnd);




