function spunta(){
 
    const barra_di_ricerca = document.querySelector("#blocco");
    if (barra_di_ricerca.classList.contains('hidden')) {    
        barra_di_ricerca.classList.remove('hidden');
    } else {
        barra_di_ricerca.classList.add('hidden');
    }
  }
  
  const apri_barra = document.querySelector('#ricerca');
  apri_barra.addEventListener('click', spunta);

  const chiudi_barra=document.querySelector('button');
  chiudi_barra.addEventListener('click', spunta);

  function cambia(evento){
  
  
    const articolo=evento.currentTarget.querySelector('img')
    // const index = parseInt(evento.currentTarget.dataset.index)
   // const origin=evento.currentTarget.querySelector('img')
    // console.log(index)
    articolo.src = evento.currentTarget.dataset.immagine
    //origin.src=evento.currentTarget.dataset.originale
    // if(articolo===origin){
    //   articolo.removeListener('mouseover', cambia);
    // }

    // if (index === 0)
    // articolo.src='https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif'
    // else if (index==1)
    //   articolo.src='https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif'
   
  }

  function cambia2(evento){
    
    
    const articolo=evento.currentTarget.querySelector('img')
    // const index = parseInt(evento.currentTarget.dataset.index)
    
    // console.log(index)
    
    // if (index === 1)
    articolo.src= evento.currentTarget.dataset.originale
    // else if (index==2)
    //   articolo.src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png"
   
  }
  const articles=document.querySelectorAll('.articolo');
  for (const article of articles){ /* for cost i=0; i<articles.lenght*/
    article.addEventListener('mouseover', cambia);
  article.addEventListener('mouseout',cambia2)}
  

  function aggiungitesto(evento){

    const text=document.createElement('p')
    text.textContent='benvenuti'

    text.classList.add('testonuovo')

    const newlogo=evento.currentTarget
    newlogo.appendChild(text)


  }
  
  const testo=document.querySelector('#logo1')
  testo.addEventListener('click', aggiungitesto)
  