const inputName = document.querySelector('input[type="text"]');
const inputEmail = document.querySelector('input[type="email"]');
const inputpassword = document.querySelector('input[type="password"]');
const confirmPassword = document.getElementById('confirmPassword')
const submitBtn = document.getElementById('submitBtn');
console.log('yes');



submitBtn.addEventListener('click',(e)=>{
  if(inputpassword.value == confirmPassword.value){
    // alert('good to go');
  }
  else{
    alert('Password and Correct Password Dont match');
    e.preventDefault();
  }
})
