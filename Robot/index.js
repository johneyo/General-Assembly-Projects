document.querySelector('.flash').addEventListener('click', function(){
    document.querySelector('.brain').classList.toggle('laser')
})

document.querySelector('.discoY').addEventListener('click', function(){       
const myVar = setInterval(function(){ 
    var number1 = Math.floor(Math.random()*255);
    var number2 = Math.floor(Math.random()*255);
    var number3 = Math.floor(Math.random()*255);
    var randomRGBA = 'rgba(' + number1 +',' +number2 +',' +number3+ ',1)';
    document.querySelector('.bod').style.background = randomRGBA;
     }, 100);
     document.querySelector('.discoN').addEventListener('click', function(){
        clearInterval(myVar)
          })
})


  
  