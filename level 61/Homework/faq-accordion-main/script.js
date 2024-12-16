const plusIcons = document.querySelectorAll('.plus-icon');

plusIcons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    
    const dropdown = document.querySelectorAll('.text_dropdown')[index];

    if (dropdown.style.display === "block") {
      dropdown.style.display = "none";  
      icon.classList.remove('open');    
    } else {
      dropdown.style.display = "block"; 
      icon.classList.add('open');       
    }
  });
});