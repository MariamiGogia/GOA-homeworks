const form = document.getElementById('contact-form');
  const fname = document.getElementById('fname');
  const lname = document.getElementById('lname');
  const email = document.getElementById('e');
  const message = document.getElementById('m');
  const radio1 = document.getElementById('radio1');
  const radio2 = document.getElementById('radio2');
  const checkbox = document.getElementById('checkbox');
  const fnameError = document.getElementById('fname-error');
  const lnameError = document.getElementById('lname-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const queryError = document.getElementById('query-error');
  const consentError = document.getElementById('consent-error');

  
  form.addEventListener('submit', function (event) {
    let isValid = true;

    if (fname.value.trim() === '') {
      fname.style.borderColor = 'red';
      fnameError.style.display = 'inline';
      isValid = false;
    } else {
      fname.style.borderColor = '';
      fnameError.style.display = 'none';
    }

    if (lname.value.trim() === '') {
      lname.style.borderColor = 'red';
      lnameError.style.display = 'inline';
      isValid = false;
    } else {
      lname.style.borderColor = '';
      lnameError.style.display = 'none';
    }

    if (email.value.trim() === '') {
      email.style.borderColor = 'red';
      emailError.style.display = 'inline';
      isValid = false;
    } else {
      email.style.borderColor = '';
      emailError.style.display = 'none';
    }

    if (message.value.trim() === '') {
      message.style.borderColor = 'red';
      messageError.style.display = 'inline';
      isValid = false;
    } else {
      message.style.borderColor = '';
      messageError.style.display = 'none';
    }

    if (!radio1.checked && !radio2.checked) {
      queryError.style.display = 'inline';
      isValid = false;
    } else {
      queryError.style.display = 'none';
    }

    if (!checkbox.checked) {
      consentError.style.display = 'inline';
      isValid = false;
    } else {
      consentError.style.display = 'none';
    }

    if (isValid) { 
      const userConfirmed = confirm("Message Sent!");
      if (userConfirmed) {
        form.reset();
      }
    } else {
      event.preventDefault();
    }
  });