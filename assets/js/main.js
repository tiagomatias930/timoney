function geradorNumero(limite) {
   // gerador dos numeros aleatorios
   let referencia = [];
   
   if (limite >= 1000) {
      alert("Estabeleça limite de  valores menor ou igual a 999");
   }
   else {
      let num = 0;
      let number = Math.round(Math.random() * limite);
      let number1 = Math.round(Math.random()* 9);
      
      if (!(number < 100 || number >= 1000)) {
         
         for (let i = 0; i <= 3 ; i++) {
            // ciclo responsavel por add os numeros de referencia em um array 
            
            if (number < 100)
            {
               
               number = Math.round(Math.random() * 999);
               referencia[i] = number;
            }
            
            if (number >= 100)
            {
               
               referencia[i] = number;
               number = Math.round(Math.random() * 999);
            }
            
            if (i == 3) {
              
              if (number <= 999)
              {
                number = Math.ceil(Math.random() * 9999);
              }
               referencia[3] = number;
            }
         }
         console.log("Referencia" + referencia);
      }   
      return (referencia);
      }

}

function gerardorMoney() {
   // gerador da quantia a ser levantada
   let money = 0;
   let quantia = [];
   let auxi = 1000;
   let getMoney = Math.round(Math.random() * quantia.length);
   
   while (auxi < 100000) {
      
      quantia.unshift(auxi);
      auxi += 500;
      getMoney = Math.round(Math.random() * quantia.length);
   }
   console.log("Montante "+quantia[getMoney]);
   return (quantia[getMoney]);
   
}

function linha(quantidadeLinha, line) {
   // Quantidade de linhas
   let li = 0;
   
   while (li < quantidadeLinha)
   {
      // print linhas na tela
      
      line.textContent +="_";
      li++;
   }
}

let referencia = geradorNumero(999);
let dinheiro = gerardorMoney();
let textoTest = document.querySelector(".valor");
let line = document.querySelector(".line");
let referenciaText = document.querySelector(".referencia");
let footerValor = document.getElementById("valor1");

textoTest.innerHTML = `\t${dinheiro} Kzs`;
footerValor.textContent = `\t${dinheiro} Kzs`;
for (var prop in referencia) 
{
   referenciaText.textContent += `\t${referencia[prop]}`;
}

function confirmado() {
   // Confirmação da operação
   
   let botao = document.getElementById("continuar");
   
   botao.className = 'btn col-md-6 p-1 text-light btn-secondary  form-control';
   botao.textContent = 'Confirmado';
   setTimeout(function ()
   {
     window.location.reload()
   },5000);
}

function acesso()
{
  window.location = '/acesso.index.html';
}