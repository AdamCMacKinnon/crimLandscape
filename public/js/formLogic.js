let contactForm = document.getElementById('contactForm');
let email = document.getElementById('email');
let service = document.getElementById('serviceSelect');
let city = document.getElementById('inputCity');
let state = document.getElementById('inputState');
let comments = document.getElementById('comments');

contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    alert("Thank you for your Submission!  We will be in Touch Soon!");
    
    let formData = {
        email: email.value,
        phone: phone.value,
        service: service.value,
        city: city.value,
        state: state.value,
        comments: comments.value
    }
   let xhr = new XMLHttpRequest();
   xhr.open('POST','/contact');
   xhr.setRequestHeader('content-type', 'application/json');
   xhr.onload = function() {
       console.log(`RESPONSE: ${xhr.responseText}`);
       if(xhr.responseText == 'success') {
           alert('email sent');
           email.value = '';
           phone.value = ''
           service.value = '';
           city.value = '';
           state.value = '';
           comments.value = '';
       } else {
            console.log('error')
       }
   }

   xhr.send(JSON.stringify(formData));
});