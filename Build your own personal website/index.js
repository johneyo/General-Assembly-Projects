const email = document.getElementById('email')

const btn = document.getElementById('btn');
btn.addEventListener('click', onclick)


function onclick (e) {
if(email.value){
btn.style.background ='green',
btn.value = 'Done'
}else{
    btn.style.background ='red'
    btn.value = 'no email'

}
    e.preventDefault();
}