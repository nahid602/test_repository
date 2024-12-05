
let edits = document.querySelectorAll('.edit')

let colorInput = document.querySelector('#color')
let widthInput = document.querySelector('#width')
let unitInput = document.querySelector('#unit')

var bgColor = ''
var target =''


edits.forEach(edit => {
  edit.addEventListener('click', (ev) => {
      edit.classList.toggle('active')

    target = ev.target

    // console.log(target)
      
      

      
  })
})


colorInput.addEventListener('input', (ev) => {
        

if(target) {
  target.style.backgroundColor = ev.target.value
  console.log(unitInput.value)
  target.style.backgroundColor = width.value
  target.style.width = width.value  + unitInput.value

}

})















// var text = ["I am a Developer", "I am a Designer", 'I am a Problem Solver']
// let dynamicDiv = document.querySelector('.dynamic_skill')



// var i = -1
// var textIndex = 0


// function typeWriter() {
//   if(i < text[textIndex].length ){ 

//     dynamicDiv.innerHTML += text[textIndex].charAt(i)
//     i++
  
//   setTimeout(typeWriter, 100)
//   }else {
//     setTimeout(eraseText, 1000)
//   }
// }

// function eraseText() {
//   if(i > 0){
//     dynamicDiv.innerHTML = text[textIndex].slice(0, i)
//     i--
//     setTimeout(eraseText, 100)
//   }else {
//     if(textIndex < text.length - 1){
//       dynamicDiv.innerHTML = "" 
//       textIndex++
//       // index = 0
//       setTimeout(typeWriter, 100)
//     }else {
//       textIndex = 0
//       dynamicDiv.innerHTML = "" 
//       i = -1
//       setTimeout(typeWriter, 1000)
//     }
//   }
// }

// typeWriter()









// let text = "The latest tech news about the world's best (and sometimes worst) hardware, apps, and much more. From top companies like Google and Apple to tiny startups vying for your attention, Verge Tech has the latest in what matters in technology daily."




// for(var i=0; i<text.length; i++){

//    const span = document.createElement('span')
//    span.innerText = text[i]
//    span.style.animationDelay = `${i * 0.01}s`
//    span.classList = 'animate'
   

//    document.body.appendChild(span)
// }














// Initialize Lenis
const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf)