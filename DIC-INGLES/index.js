const listaPalavras = [];
function registraPalavras(){
  const form = document.getElementById('dictonaryForm')
  const inputNewChord = document.getElementById('inputName')
  const inputSigChord = document.getElementById('iabelSigName')

  let Chord = {
    palavra: inputNewChord.value,
    significado: inputSigChord.value,
  }
  console.log(Chord);
  listaPalavras.push(Chord)
  form.reset ()

}

function tradutionList(){
  console.log(listaPalavras)
}