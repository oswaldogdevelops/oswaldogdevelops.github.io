const videoejercicio = document.getElementById("videoejercicio")





class tarjeta{
   constructor( logo, musculo, idtargeta, src, countdownid, startcountdownid, series ){
      this.logo = logo
      this.musculo = musculo
      this.idtargeta = idtargeta
      this.src = src
      this.countdownid = countdownid
      this.startcountdownid = startcountdownid
      this.series = series
   }

  
Printarjeta(){
 const tarjeta = document.getElementById("createtarjeta1")
 const div = document.createElement("div")

 div.innerHTML = `<br><br>
 
   <div class="row justify-content-md-center all responsivelogofix">
     <div class="col-sm-1,7">
      
         <div class="card row col-md-12   ">
           <div class="card-body  ">
 
 
           <i class="${this.logo} align-self-center mr-4"  id="${this.idtargeta}"   style=" font-size: 120px;  color:red;" alt="Card image cap" ></i> 
           </div>  
         </div>
          
 
 
     </div>
     
        <!-- <div class="col-md-4">    -->
     
 
       <div class="card row col-md-4" >  
         <div class="card-body">
           <h5 class="card-title">Set principante: ${this.musculo} </h5>
           <p class="card-text">Haz Click En el icono Para ver demostracion en video  </p>
           <div id="appendcount">
           <div class="mr-8" id="${this.countdownid}" ></div>
           
           <form id="${this.startcountdownid}" >
           <label for="series">Elige la cantidad de series</label>
           <br>
           <input type="number" name="" id="${this.series}" style="width: 12%;">
          
           <input type="submit" value="empezar" class="btn btn-success" >
           </form>

           </div>
         </div>
       </div>
 
 
     </div>
   </div>
 </div>
 
 </div>
 `

  tarjeta.appendChild(div)

}
showModal(){
  const cardone = document.getElementById(`${this.idtargeta}`)
 

  cardone.addEventListener('click', e =>{
    const yt = document.getElementById("yt")
    const videotype = document.createElement('div')
   
 
    videotype.innerHTML = ` <div class="bg-modal" id="cerrar">
    <div class="modal-contents"> 
    <div class="close" id="close" > +</div>
  
    ${this.src}
  
    
    </div>
  </div>
  
  </div>   `
 
 
    yt.appendChild(videotype)
 
  })
   
  


}

Countdown(){

  //countdown
  const countdownid = document.getElementById(`${this.countdownid}`)
  const selectbtn = document.getElementById(`${this.startcountdownid}`)
  const selectseries = document.getElementById(`${this.series}`)
  
  
  selectbtn.addEventListener('submit',  function(e){
    
    
  console.log(selectseries.value)
  
   var reps = 0
   var series = 0
  
  var intervalos = setInterval(() => {
   
    reps += 1
   
    
    countdownid.innerHTML =  reps + ' repeticiones ' + series + ' series' ;
  
   
  if( reps >= 6 ){  series++}  
  
  if(reps == 6){  reps = 0}
  
  if(series == selectseries.value && reps == 1){
    clearInterval(intervalos)
    countdownid.innerHTML =   'has completado las ' + selectseries.value + ' series' ;
  }
  
  } , 1000);
  
    e.preventDefault()
  })
  
  }

}




//objetos tarjetas
//Nombre del icono, nombre del musculo, id de la tarjeta, etique div con iframe y source del video youtube

const segundatarjeta = new tarjeta("bi bi-youtube","pierna","tarjeta1",`<div> <iframe class="yt-content" width="560" height="315" src="https://www.youtube.com/embed/HNosAVcpsz4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </div>`, "countdown1", "press1", "serie1")

   
const terceratarjeta = new tarjeta("bi bi-collection-play-fill","espalda","tarjeta2",` <div> <iframe class="yt-content" width="560" height="315" src="https://www.youtube.com/embed/renP8kf3Jis" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>`, 
"countdown2","press2", "serie2")

const cuartatarjeta = new tarjeta("bi bi-collection-play","abdomen","tarjeta3",` <div> <iframe class="yt-content" width="560" height="315" src="https://www.youtube.com/embed/2tXQbi16EdI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>`, 
"countdown3","press3", "serie3")

const quintatarjeta = new tarjeta("bi bi-file-earmark-play-fill","brazos","tarjeta4",` <div> <iframe class="yt-content" width="560" height="315" src="https://www.youtube.com/embed/fFRzON_ihVY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> </div>`, 
"countdown4","press4", "serie4")


//Tarjetas


segundatarjeta.Printarjeta()
terceratarjeta.Printarjeta()
cuartatarjeta.Printarjeta()
quintatarjeta.Printarjeta()



//modals
segundatarjeta.showModal()
terceratarjeta.showModal()
cuartatarjeta.showModal()
quintatarjeta.showModal()

//contadores
segundatarjeta.Countdown()
terceratarjeta.Countdown()
cuartatarjeta.Countdown()
quintatarjeta.Countdown()


const hide = document.getElementById("remove") 

hide.addEventListener('click', e =>{
  const noshow = document.querySelector('.bg-modal')
   noshow.remove()
})




