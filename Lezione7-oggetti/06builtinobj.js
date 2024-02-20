let miaString = "Oggi è un martedì di lezione";

console.log("lunghezza: " + miaString.length);

console.log(miaString.charAt(12));
console.log(miaString.charCodeAt(12));

//retituisce la prima occorrenza di quel pattern o lettera
console.log(miaString.indexOf("un"));
console.log(miaString.lastIndexOf("lezione"));

console.log(miaString.replace("martedì", "domenica"));

//unica differenza con -senzalocale- gestione della memoria
console.log(miaString.toLocaleUpperCase());




let mioNome="dario";
let mioNomeArray=mioNome.split("");
console.log(mioNomeArray);

// come fare il reverse? splitta -> diventa array -> usa reverse -> joina per ottenere stringa di nuovo
mioNomeArray.forEach(lettera => {
    console.log(lettera);
})

console.log(mioNomeArray.reverse());
console.log(mioNomeArray.join(""));


// in una botta sola
let pal="i topi non avevano nipoti";
let palindroma=pal.split("").reverse().join("");
console.log(palindroma);

