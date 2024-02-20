//costruttore

/**
 * utili per dare contesto a chi vede il codice e guidare l'utente al corrento inserimento di dati
 *
 * @param {String} nome
 * @param {String} cognome
 * @param {Number} eta
 * @param {String} cf
 */
      // persona1("andrea", "rizzo", 28, "rewrwef")
function Persona(nome, cognome, eta, cf) {
  this.nome = nome;
  this.cognome = cognome;
  this.eta = eta;
  this.cf = cf;

  this.toString = function () {
    return `${this.nome}- ${this.cognome}- ${this.eta}- ${this.cf}`;
  };
}

let persona1 = new Persona();
  
let personeRegistrate = [new Persona()];
