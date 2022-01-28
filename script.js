let nabvar=document.querySelector('.nabvar')
let desplegar=document.querySelector('.desplegar')
desplegar.addEventListener('click',()=>{
    nabvar.classList.toggle('.ul')
})

//agregar los nombre
let agregarNombre=document.querySelector('.nombre-automatico')

let inputNombre =document.querySelector('.input-nombre') 


inputNombre.addEventListener('keyup',()=>{
    agregarNombre.innerHTML=inputNombre.value;
    
    
}) 


//agregar otros

let agregarOtros=document.querySelector('.otros-automatico')

let inputOtros =document.querySelector('.input-otros') 


inputOtros.addEventListener('keyup',()=>{
    agregarOtros.innerHTML=inputOtros.value;
    
    
}) 

//agregar ubi

let agregarUbicacion=document.querySelector('.ubicacion-automatico')

let inputUbicacion =document.querySelector('.input-ubicacion') 


inputUbicacion.addEventListener('keyup',()=>{
    agregarUbicacion.innerHTML=inputUbicacion.value;
    
    
})

//agregar wspp

let agregarWspp=document.querySelector('.wspp-automatico')

let inputWspp =document.querySelector('.input-wspp') 


inputWspp.addEventListener('keyup',()=>{
    agregarWspp.innerHTML=inputWspp.value;
    
    
})

//agregar face

let agregarFace=document.querySelector('.face-automatico')

let inputFace =document.querySelector('.input-face') 


inputFace.addEventListener('keyup',()=>{
    agregarFace.innerHTML=inputFace.value;
    
    
})

//agregar inst

let agregarInst=document.querySelector('.inst-automatico')

let inputInst =document.querySelector('.input-inst') 


inputInst.addEventListener('keyup',()=>{
    agregarInst.innerHTML=inputInst.value;
    
    
})

//emnviar

let idForm = document.querySelector('#form');

idForm.addEventListener('submit',handleSubmit)

async function handleSubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action,{
  method: this.method,
  body: form,
  headers:{
    'accept': 'application/json'
  }
  }
  )
  if(response.ok){
    this.reset()
    
  }
}

let button = document.querySelector('button')
button.addEventListener('click',()=>{
    let agregarEnviar=document.createElement('h1')
    let containerEnviar=document.querySelector('.container-enviar')
    containerEnviar.style.display='block';
    agregarEnviar.innerHTML='datos enviados';
    containerEnviar.appendChild(agregarEnviar) 
})