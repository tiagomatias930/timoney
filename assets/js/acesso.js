const form = document.querySelector('form');

localStorage.meuCodigo = 4242;
const confirma = localStorage.meuCodigo;
const audio = document.querySelector('.audio');
const source = document.querySelector('.video-background');
let i = 0;
form.addEventListener('submit', (e)=>{
   
   e.preventDefault()
   
  const cod = document.getElementById('pin').value;
     
     if (cod != confirma)
      {
        
        const musica = document.querySelector('audio');
       const musica1 = document.querySelector('#audioSe');
       
       musica1.src = '/assets/res/security_breach.mp3';
       
       musica1.play();
        musica.play();
        console.log('erro');
        form.style.display = 'none';
        while (i < 100) {
           const alerta = document.createElement('p');
           const textoAlerta = document.createTextNode('Erro! Intruso!!!!');
           source.appendChild(alerta);
           alerta.appendChild(textoAlerta);
           alerta.className = 'alert alert-danger text-center col col-8 m-5';
           i++;
        }
        
      
     }
     else {
       
        setTimeout(function ()
        {
           
           window.location = '/index.html';
        },7000)
        
        const musica = document.querySelector('audio');
        musica.src = '/assets/res/ElevenLabs_2024-05-01T10_45_31_Sarah_pre_s50_sb75_se0_b_m2.mp3';
        musica.play();
        const alerta = document.createElement('p');
        const textoAlerta = document.createTextNode('Acesso Liberado');
        audio.appendChild(alerta);
        alerta.appendChild(textoAlerta);
        alerta.className = 'alert alert-success text-center col col-4 m-5';
        console.log('certo')
     }
 
})