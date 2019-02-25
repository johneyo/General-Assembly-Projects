const btn1 = document.getElementById('btn1')
btn3 = document.getElementById('btn3');
btn2 = document.getElementById('btn2');

btn1.addEventListener('click', function(e){
  btn1Value ++
  btn1.innerText =`Like(s) ${btn1Value}`
  console.log(btn1Value)
  e.preventDefault()
});
btn2.addEventListener('click', function(e){
  btn2Value ++
  btn2.innerText =`Like(s) ${btn2Value}`
  console.log(btn2Value)
  e.preventDefault()
});
btn3.addEventListener('click', function(e){
  btn3Value ++
  btn3.innerText =`Like(s) ${btn3Value}`
  console.log(btn3Value)
  e.preventDefault()
});


 let btn1Value = 0,
     btn2Value = 0,
     btn3Value = 0;

