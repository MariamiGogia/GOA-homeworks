function getAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then(res => res.json())
      .then(data => {
        const adviceNumber = data.slip.id;
        const adviceText = data.slip.advice;

        document.getElementById("adviceNumber").textContent = `Advice #${adviceNumber}`;
        document.getElementById("advice").textContent = `"${adviceText}"`;
      });
  }
  
getAdvice();
document.getElementById("generateAdvice").onclick = getAdvice;