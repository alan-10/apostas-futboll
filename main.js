let buttonPay = document.querySelector('#play');
buttonPay.addEventListener('click', clicar);


let showResults = document.querySelector('#idShow');

let golsFeitoTime1;
let golsFeitoTime2;



function gerarNumerosAleatorios(min, max) {
  golsFeitoTime1 = Math.floor(Math.random() * max) + min;
  golsFeitoTime2 = Math.floor(Math.random() * max) + min;
}



function clicar() {
  let golTime1Aposta = 0;
  let goltime2Aposta = 0;

  let time1 = document.querySelector('#time1').value;
  let time2 = document.querySelector('#time2').value;

  gerarNumerosAleatorios(0, 5);

  if (time1 == '' || time2 == '') {
    return alert('informe os times para jogar!');
  } else {



    let partida = confirm('Os times começaram a jogar! faça sua aposta no proximo passo!');

    if (partida == false) {
      alert('Partida canselada')
    } else {


      golTime1Aposta = prompt(`Quantos gols o ${time1} marcou? `);
      goltime2Aposta = prompt(`Quantos gols o ${time2} marcou? `)

      if (isNaN(golTime1Aposta) || isNaN(goltime2Aposta)) {
        
        alert('você não escolheu valores válidos!');

      } else {

        showResults.innerHTML += `<h2> O placar final da partida foi: 
      <span style="color:rgb(53, 252, 63)" >${time1} <span style="color:black">${golsFeitoTime1}</span>
          <span style="color:blue"> x </span>
      <span style="color:black"> ${golsFeitoTime2}</span> ${time2} </span> </h2> `


        showResults.innerHTML += `<h2> A sua aposta foi:
      <span  style="color:rgb(53, 252, 63)"> ${time1} <span style="color:black"> 
      ${golTime1Aposta}</span>
       <span style="color:blue">x</span>
         <span style="color:black">${goltime2Aposta}</span> ${time2} </span> </h2>`

        if (golTime1Aposta == golsFeitoTime1 && goltime2Aposta == golsFeitoTime2) {
          showResults.innerHTML += `<h1 style="color:blue;background-color:black;width:300px;
           padding:10px;">PARAAAAABÉNS VOCÊ ACERTOU O  PLACAR! :)</h1> <hr/>`;
        } else {
          showResults.innerHTML += `<h1 style="color:red;
           background-color:black;width:300px;
           padding:10px;"> <strong>QUE PENA,
            VOCÊ ERROU! TALVEZ NA PRÓXIMA! :( </strong></h1>  <hr/>`;
        }


        time1 = document.querySelector('#time1').value = '';
        time1 = document.querySelector('#time2').value = '';

      }
    }
  }





}