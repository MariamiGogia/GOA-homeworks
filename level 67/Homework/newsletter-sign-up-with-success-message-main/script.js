const form = document.querySelector('form');
  const emailInput = document.getElementById('e');
  const errorText = document.querySelector('#error p');
  const mainSection = document.getElementById('main');
  const messageSection = document.getElementById('message');
  const messageButton = document.querySelector('#message button');

  
  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = emailInput.value;
    
    if (!email.includes('@')) {
      errorText.style.display = 'block';
      emailInput.style.border = '1px solid red';
      emailInput.style.backgroundColor = 'hsl(4, 77.00%, 76.10%)';
      emailInput.style.color = 'red';
      errorText.style.color = 'red';
    } else {
      errorText.style.display = 'none';
      emailInput.style.border = '1px solid hsl(231, 7%, 60%)';
      emailInput.style.backgroundColor = 'white';
      emailInput.style.color = ' hsl(231, 7%, 60%)';


      mainSection.style.display = 'none';
      messageSection.style.display = 'flex';
    }
  });

  messageButton.addEventListener('click', function() {
    messageSection.style.display = 'none';
    mainSection.style.display = 'flex';

    emailInput.value = '';
    emailInput.style.border = '1px solid hsl(231, 7%, 60%)';
  });
