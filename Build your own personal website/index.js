const email = document.getElementById('email')

const btn = document.getElementById('btn');
btn.addEventListener('click', onclick)



function onclick (e) {
    const re = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    btn.style.background ='#dc3545'
        btn.value = 'no email'
  }else{
    btn.style.background ='#28a745',
    btn.value = 'Done'  }  

    e.preventDefault();
}
