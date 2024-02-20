let studente = {
  nome: "andrea",
  cognome: "rizzo",
  matricola: 10,
  materia: [
    {
      nomeMat: "js",
      docente: "mennillo",
      ore: 20,
    },
    {
      nomeMat: "db",
      docente: "vecchione",
      ore: 16,
    },
    {
      nomeMat: "java",
      docente: "bogliaccino",
      ore: 13,
    },
  ],

  descriviStudente() {
    let presentazione=`lo studente ${this.nome} ${this.cognome}, avente matricola: ${this.matricola}, frequenta i seguenti corsi\n`;
    
    for(let i=0; i<this.materia.length; i++)
    {
        presentaione+=`${materia.nomeMat} - ${materia.ore}`;
    };
    return presentazione;
  },
};

studente.descriviStudente();


// descriviStudente() {
//     let presentazione=`lo studente ${this.nome} ${this.cognome}, avente matricola: ${this.matricola}, frequenta i seguenti corsi\n`;
//     array.forEach(element => {
        
//         for(let i=0; i<this.materia.length; i++)
//     });
//     {
//         presentaione+=`${materia.nomeMat} - ${materia.ore}`;
//     };
//     return presentazione;
//   },