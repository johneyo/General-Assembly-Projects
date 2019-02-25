const email = document.getElementById('email')

const btn = document.getElementById('btn');
btn.addEventListener('click', onclick)


function onclick (e) {
if(email.value){
btn.style.background ='#28a745',
btn.value = 'Done'
}else{
    btn.style.background ='#dc3545'
    btn.value = 'no email'

}
    e.preventDefault();
}