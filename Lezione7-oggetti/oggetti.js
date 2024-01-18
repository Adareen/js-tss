// notazione letterale

let studente={

    //dichiaro le mie proprietà
    nome: "pippo", 
    cognome: "rossi",
    eta: 20,
    esami: ["calcolatori", "architettura", "databse"],
    
    docenti: [

        {
            nome: "dario", 
            cognome: "mennillo", 
            materia: "js",

        }, 

        {
            nome: "mauro", 
            cognome: "bogliaccino",
            materia: "java",

        },

        {
            nome: "oscar",
            cognome: "vecchione", 
            materia: "html",
        }, 



    ], 


    computer: {
        marca: "dell",
        modello: "vostro", 
        ram: 8,
        acceso: true,
        
    }, 

    //dichiarazione dei metodi
    presentati: function(){
        //this fa riferimento all'oggetto che lo contiene più vicino 
       let testo= "testo di prova: ";

        for(let i=0; i<this.esami.length; i++)
       {
            document.getElementById("demo").innerHTML+=this.esami[i]+"\n";
       }
       return testo;
    }

        // DA DEBUGGAR"

}

// richiamo delle proprietà, leggo i valori
// console.log(studente);
// console.log(studente.cognome);
// console.log(studente.docenti[0].materia);

//il this all'esterno fa riferimento al window, cioè al browser 
//console.log(this.location);

document.getElementById("lo").innerHTML=studente.presentati();
document.getElementById("demo").innerHTML="il mio studente si chiama "+studente.nome+" "+ studente.cognome;