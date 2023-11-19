/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

var icon = {
    scissor: "https://dl.dropbox.com/s/k5nie73m0cryuvm/cut.png",
    paper:"https://dl.dropbox.com/s/f3p9frcgvdcrk23/document.png",
    rock:"https://dl.dropbox.com/s/qxxzauaw521wbi6/rock.png"
}
//alert("Want your name in the list? comment down\nAnd Dont Forget To Upvote!")
var charName = "Rowsej,Alex Tusinean,Gordon,David Carroll,Faisal,HonFu,Hira Ali,Jingga Sona,Amethyst,Prometheus,Zarthan,Short Code,L    ast Order,Rugved Modak,Aanisha,Ketan,Aditya Khandelwal,S. Golecca,Venom666,Satnam Singh,Mitali,Coder,Burey,Bobbie,Louis,Haris,BroFarOps,Sololearn,lololearn,Anya,Jay,Danijel Ivanović,Richard Myatt,PKA,Oma Falk,Donthack,Siddarth Golecha,Jax,Michael,Manual,Seniru Pasan,Pedro H.J,Vincent Bereger,Asterisk,Abraham,Modi,Donna,Martin,Jaydeep Khatri,r8w9,Mickel,PALAK,Rull Deef,aryan maurya,Seniru Pasan,Serena Yvone,amsr,Flandre Scarlet,Calvin,NASA,Microsoft,Google"
var charImg = [
    "https://dl.dropbox.com/s/8ahht8nzbpm2phk/Featured-Image20.png",
    "https://dl.dropbox.com/s/7z1giu54wc1kf4b/2d-game-character-png-7.png",
    "https://dl.dropbox.com/s/owu73a7oxl2jl0p/2d-game-character-png-5.png",
    "https://dl.dropbox.com/s/i5e8pii4lyycwp8/2d-game-character-png-.png",
    "https://dl.dropbox.com/s/tny6nwwbzq8myw6/Featured-Image5.png"
]
var pHp
var eHp
var abc = 0
window.onload = function(){
    pHp = pHP.offsetWidth
    eHp = eHP.offsetWidth
    dis()
    var pImg = _RandomArray(charImg)
    var eImg = _RandomArray(charImg)
    eName.innerHTML = _RandomString(charName,",")
    arena.innerHTML += `<img id="plImg" src="${pImg}" />`
    arena.innerHTML += `<img id="enImg" src="${eImg}" />`
    anime({
        targets:"#plImg",
        translateX: 210,
        duration:3000,
        delay:2000
    })
    anime({
        targets:"#enImg",
        translateX:-210,
        duration:3000,
        delay:2000,
        rotateY:180
        
    })
    setTimeout(function(){
        abl()
    },3500)
}
function dis(){
    rock.disabled = true
    paper.disabled = true
    scissor.disabled = true
}
function abl(){
    rock.disabled = false
    paper.disabled = false
    scissor.disabled = false
}
function blink(x){
    x = document.getElementById(x)
    x.style.opacity = 0
    setTimeout(() => {
        x.style.opacity = 1
    },100)
    setTimeout(() => {
        x.style.opacity = 0
    },200)
    setTimeout(() => {
        x.style.opacity = 1
    },300)
}
var choice = ["scissor",'rock',"paper"]
rock.addEventListener('click',() => {
    dis()
    arena.innerHTML += `<img class="test" id="pRockImg" src="${icon.rock}">`
    var chx = _RandomArray(choice)
    if (chx == "rock"){
        arena.innerHTML += `<img class="test" id="eRockImg" src="${icon.rock}">`
        anime({
            targets:"#pRockImg",
            left:window.innerHeight/2 - 20,
            duration: 1000,
            delay:2000,
            easing:'linear'
        })
        anime({
            targets:"#eRockImg",
            left:window.innerHeight/2 + 20,
            duration: 1000,
            easing:"linear",
            delay:2000
        })
        anime({
            targets:".test",
            opacity:0,
            delay:4000,
            duration:1000,
            easing:"linear"
        })
        setTimeout(() => {
            /*eRockImg.style.dislay = "none"
            pRockImg.style.dislay = "none"*/
            abl()
        },5000)
    }
    else if(chx == "paper"){
        arena.innerHTML += `<img class="test" id="eRockImg" src="${icon.paper}">`
        anime({
            targets:"#pRockImg",
            left:window.innerHeight/2 - 20,
            duration: 1000,
            delay:2000,
            easing:'linear'
        })
        anime({
            targets:"#eRockImg",
            left:window.innerHeight/2 + 20,
            duration: 1000,
            easing:"linear",
            delay:2000
        })
        anime({
            targets:"#pRockImg",
            opacity:0,
            easing:"linear",
            delay:4000,
            
        })
        setTimeout(() => {
           /* pRockImg.style.display="none"*/
        },5000)
        setTimeout(() => {
        anime({
            targets:'#eRockImg',
            left:0,
            translateY:50,
            easing:"linear",
            duration:500
        })
        },5500)
        setTimeout(() => {
        anime({
            targets:'#eRockImg',
            opacity:0,
            easing:"linear",
            duration:1000
        })
        anime({
            targets:"#pHP",
            width:pHp -= _RandomNumber(20,50),
            easing:"linear"
        })
        },6000)
        setTimeout(() => {
            blink("plImg")
        },6000)
        setTimeout(() => {
            abl()
        },7000)
    }
    if(chx == "scissor"){
        arena.innerHTML += `<img class="test" id="eRockImg" src="${icon.scissor}">`
        anime({
            targets:"#pRockImg",
            left:window.innerHeight/2 - 20,
            duration: 1000,
            delay:2000,
            easing:'linear'
        })
        anime({
            targets:"#eRockImg",
            left:window.innerHeight/2 + 20,
            duration: 1000,
            easing:"linear",
            delay:2000
        })
        anime({
            targets:"#eRockImg",
            opacity:0,
            easing:"linear",
            delay:4000,
            
        })
        setTimeout(() => {
           /* pRockImg.style.display="none"*/
        },5000)
        setTimeout(() => {
        anime({
            targets:'#pRockImg',
            left:window.innerHeight-20,
            translateY:50,
            easing:"linear",
            duration:500
        })
        },5500)
        setTimeout(() => {
        anime({
            targets:'#pRockImg',
            opacity:0,
            easing:"linear",
            duration:1000
        })
        var att = _RandomNumber(20,50)
        anime({
            targets:"#eHP",
            width:eHp -= att,
            translateX:abc += att,
            easing:"linear"
        })
        },6000)
        setTimeout(() => {
            
            blink("enImg")
        },6000)
        setTimeout(() => {
            abl()
        },7000)
    }
})





paper.addEventListener('click',() => {
    dis()
    arena.innerHTML += `<img class="test" id="pRockImg" src="${icon.paper}">`
    var chx = _RandomArray(choice)
    if (chx == "paper"){
        arena.innerHTML += `<img class="test" id="eRockImg" src="${icon.paper}">`
        anime({
            targets:"#pRockImg",
            left:window.innerHeight/2 - 20,
            duration: 1000,
            delay:2000,
            easing:'linear'
        })
        anime({
            targets:"#eRockImg",
            left:window.innerHeight/2 + 20,
            duration: 1000,
            easing:"linear",
            delay:2000
        })
        anime({
            targets:".test",
            opacity:0,
            delay:4000,
            duration:1000,
            easing:"linear"
        })
        setTimeout(() => {
            /*eRockImg.style.dislay = "none"
            pRockImg.style.dislay = "none"*/
            abl()
        },5000)
    }
    else if(chx == "scissor"){
        arena.innerHTML += `<img class="test" id="eRockImg" src="${icon.scissor}">`
        anime({
            targets:"#pRockImg",
            left:window.innerHeight/2 - 20,
            duration: 1000,
            delay:2000,
            easing:'linear'
        })
        anime({
            targets:"#eRockImg",
            left:window.innerHeight/2 + 20,
            duration: 1000,
            easing:"linear",
            delay:2000
        })
        anime({
            targets:"#pRockImg",
            opacity:0,
            easing:"linear",
            delay:4000,
            
        })
        setTimeout(() => {
           /* pRockImg.style.display="none"*/
        },5000)
        setTimeout(() => {
        anime({
            targets:'#eRockImg',
            left:0,
            translateY:50,
            easing:"linear",
            duration:500
        })
        },5500)
        setTimeout(() => {
        anime({
            targets:'#eRockImg',
            opacity:0,
            easing:"linear",
            duration:1000
        })
        anime({
            targets:"#pHP",
            width:pHp -= _RandomNumber(20,50),
            easing:"linear"
        })
        },6000)
        setTimeout(() => {
            blink("plImg")
        },6000)
        setTimeout(() => {
            abl()
        },7000)
    }
    if(chx == "rock"){
        arena.innerHTML += `<img class="test" id="eRockImg" src="${icon.rock}">`
        anime({
            targets:"#pRockImg",
            left:window.innerHeight/2 - 20,
            duration: 1000,
            delay:2000,
            easing:'linear'
        })
        anime({
            targets:"#eRockImg",
            left:window.innerHeight/2 + 20,
            duration: 1000,
            easing:"linear",
            delay:2000
        })
        anime({
            targets:"#eRockImg",
            opacity:0,
            easing:"linear",
            delay:4000,
            
        })
        setTimeout(() => {
           /* pRockImg.style.display="none"*/
        },5000)
        setTimeout(() => {
        anime({
            targets:'#pRockImg',
            left:window.innerHeight-20,
            translateY:50,
            easing:"linear",
            duration:500
        })
        },5500)
        setTimeout(() => {
        anime({
            targets:'#pRockImg',
            opacity:0,
            easing:"linear",
            duration:1000
        })
        var att = _RandomNumber(20,50)
        anime({
            targets:"#eHP",
            width:eHp -= att,
            translateX:abc += att,
            easing:"linear"
        })
        },6000)
        setTimeout(() => {
            
            blink("enImg")
        },6000)
        setTimeout(() => {
            abl()
            if(eHp <= 0){
                var b = confirm("You Win! Play Again?")
                if(b == true){
                    anime({
                        targets:"#pHP",
                        width:"100%"
                    })
                    anime({
                        targets:"#eHP",
                        width:"100%",
                        translateX:0
                    })
                    abc = 0
                    pHp = pHP.offsetWidth
                    eHp = eHp.offsetWidth
                } else{
                    dis()
                }
                
            }
            
            if(pHp <= 0){
                var b = confirm("You Lose! Play Again?")
                if(b == true){
                    anime({
                        targets:"#pHP",
                        width:"100%"
                    })
                    anime({
                        targets:"#eHP",
                        width:"100%",
                        translateX:0
                    })
                    abc = 0
                    pHp = pHP.offsetWidth
                    eHp = eHP.offsetWidth
                } else{
                    dis()
                }
                
            }
        },7000)
    }
})


scissor.addEventListener('click',() => {
    dis()
    arena.innerHTML += `<img class="test" id="pRockImg" src="${icon.scissor}">`
    var chx = _RandomArray(choice)
    if (chx == "scissor"){
        arena.innerHTML += `<img class="test" id="eRockImg" src="${icon.scissor}">`
        anime({
            targets:"#pRockImg",
            left:window.innerHeight/2 - 20,
            duration: 1000,
            delay:2000,
            easing:'linear'
        })
        anime({
            targets:"#eRockImg",
            left:window.innerHeight/2 + 20,
            duration: 1000,
            easing:"linear",
            delay:2000
        })
        anime({
            targets:".test",
            opacity:0,
            delay:4000,
            duration:1000,
            easing:"linear"
        })
        setTimeout(() => {
            /*eRockImg.style.dislay = "none"
            pRockImg.style.dislay = "none"*/
            abl()
        },5000)
    }
    else if(chx == "rock"){
        arena.innerHTML += `<img class="test" id="eRockImg" src="${icon.rock}">`
        anime({
            targets:"#pRockImg",
            left:window.innerHeight/2 - 20,
            duration: 1000,
            delay:2000,
            easing:'linear'
        })
        anime({
            targets:"#eRockImg",
            left:window.innerHeight/2 + 20,
            duration: 1000,
            easing:"linear",
            delay:2000
        })
        anime({
            targets:"#pRockImg",
            opacity:0,
            easing:"linear",
            delay:4000,
            
        })
        setTimeout(() => {
           /* pRockImg.style.display="none"*/
        },5000)
        setTimeout(() => {
        anime({
            targets:'#eRockImg',
            left:0,
            translateY:50,
            easing:"linear",
            duration:500
        })
        },5500)
        setTimeout(() => {
        anime({
            targets:'#eRockImg',
            opacity:0,
            easing:"linear",
            duration:1000
        })
        anime({
            targets:"#pHP",
            width:pHp -= _RandomNumber(20,50),
            easing:"linear"
        })
        },6000)
        setTimeout(() => {
            blink("plImg")
        },6000)
        setTimeout(() => {
            abl()
            if(eHp <= 0){
                var b = confirm("You Win! Play Again?")
                if(b == true){
                    anime({
                        targets:"#pHP",
                        width:"100%"
                    })
                    anime({
                        targets:"#eHP",
                        width:"100%",
                        translateX:0
                    })
                    abc = 0
                    pHp = pHP.offsetWidth
                    eHp = eHp.offsetWidth
                } else{
                    dis()
                }
                
            }
            
            if(pHp <= 0){
                var b = confirm("You Lose! Play Again?")
                if(b == true){
                    anime({
                        targets:"#pHP",
                        width:"100%"
                    })
                    anime({
                        targets:"#eHP",
                        width:"100%",
                        translateX:0
                    })
                    abc = 0
                    pHp = pHP.offsetWidth
                    eHp = eHP.offsetWidth
                } else{
                    dis()
                }
                
            }
        },7000)
    }
    if(chx == "paper"){
        arena.innerHTML += `<img class="test" id="eRockImg" src="${icon.paper}">`
        anime({
            targets:"#pRockImg",
            left:window.innerHeight/2 - 20,
            duration: 1000,
            delay:2000,
            easing:'linear'
        })
        anime({
            targets:"#eRockImg",
            left:window.innerHeight/2 + 20,
            duration: 1000,
            easing:"linear",
            delay:2000
        })
        anime({
            targets:"#eRockImg",
            opacity:0,
            easing:"linear",
            delay:4000,
            
        })
        setTimeout(() => {
           /* pRockImg.style.display="none"*/
        },5000)
        setTimeout(() => {
        anime({
            targets:'#pRockImg',
            left:window.innerHeight-20,
            translateY:50,
            easing:"linear",
            duration:500
        })
        },5500)
        setTimeout(() => {
        anime({
            targets:'#pRockImg',
            opacity:0,
            easing:"linear",
            duration:1000
        })
        var att = _RandomNumber(20,50)
        anime({
            targets:"#eHP",
            width:eHp -= att,
            translateX:abc += att,
            easing:"linear"
        })
        },6000)
        setTimeout(() => {
            
            blink("enImg")
        },6000)
        setTimeout(() => {
            abl()
            if(eHp <= 0){
                var b = confirm("You Win! Play Again?")
                if(b == true){
                    anime({
                        targets:"#pHP",
                        width:"100%"
                    })
                    anime({
                        targets:"#eHP",
                        width:"100%",
                        translateX:0
                    })
                    abc = 0
                    pHp = pHP.offsetWidth
                    eHp = eHp.offsetWidth
                } else{
                    dis()
                }
                
            }
            
            if(pHp <= 0){
                var b = confirm("You Lose! Play Again?")
                if(b == true){
                    anime({
                        targets:"#pHP",
                        width:"100%"
                    })
                    anime({
                        targets:"#eHP",
                        width:"100%",
                        translateX:0
                    })
                    abc = 0
                    pHp = pHP.offsetWidth
                    eHp = eHP.offsetWidth
                } else{
                    dis()
                }
                
            }
        },7000)
    }
})

/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/