const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
//Metodo tradizionale
// const reversedTeachers = teachers.reverse();
// console.log(reversedTeachers)
//metodo con For
// const teacherR = teachers.length - 1
// for (let i = teacherR; i >=0; i--) {

//   const teachersReverse = teachers[i];
//   console.log(i, teachersReverse);
// }

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
//Metodo con propieta di ARRAY
const longNames = teachers.filter(nome => nome.length >= 5);
console.log(longNames)
// Metodo con For 
let nomeL = [];
for (let i = 0; i < teachers.length - 1; i++) {

  const nomiLunghi = teachers[i]
  
  if (nomiLunghi.length >= 5) {
    nomeL.push(nomiLunghi)
  }
}
console.log(nomeL)


// 3. Rimuovi 'Ed' dall'array teachers
delete teachers[1]
console.log(teachers)

// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;