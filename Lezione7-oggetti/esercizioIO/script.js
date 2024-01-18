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
    console.log(`lo studente ${this.nome} ${this.cognome}, avente matricola: ${this.matricola}, frequenta i seguenti corsi\n`)
    for(let i=0; i<this.materia.length; i++)
    {
        console.log(this.materia[i].nomeMat+ " per "+ this.materia[i].ore);
    };
    
  },
};

studente.descriviStudente();