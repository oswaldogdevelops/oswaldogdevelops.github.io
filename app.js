const buttonhome = document.getElementById("home-tab")

buttonhome.addEventListener("click", e =>{

const home = document.getElementById("home").style.display = 'block'
const hide2 = document.getElementById("profile").style.display = 'none'
const hide3 = document.getElementById("messages").style.display = 'none'
const hide4 = document.getElementById("settings").style.display = 'none'

   e.preventDefault()
})

const buttonprofile = document.getElementById("profile-tab")

buttonprofile.addEventListener("click", e =>{

const home = document.getElementById("home").style.display = 'none'
const hide2 = document.getElementById("profile").style.display = 'block'
const hide3 = document.getElementById("messages").style.display = 'none'
const hide4 = document.getElementById("settings").style.display = 'none'

     e.preventDefault()
  })

  const buttonmessages = document.getElementById("messages-tab")  

  buttonmessages.addEventListener("click", e =>{

const home = document.getElementById("home").style.display = 'none'
const hide2 = document.getElementById("profile").style.display = 'none'
const hide3 = document.getElementById("messages").style.display = 'block'
const hide4 = document.getElementById("settings").style.display = 'none'

     e.preventDefault()
  })

  const buttonsettings = document.getElementById("settings-tab")  

  buttonsettings.addEventListener("click", e =>{

const home = document.getElementById("home").style.display = 'none'
const hide2 = document.getElementById("profile").style.display = 'none'
const hide3 = document.getElementById("messages").style.display = 'none'
const hide4 = document.getElementById("settings").style.display = 'block'

     e.preventDefault()
  })

