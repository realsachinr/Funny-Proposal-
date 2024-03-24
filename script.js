const button = document.querySelector('.btn-no');
const btnYes = document.querySelector('.btn-yes');
const boxContainer = document.querySelector('.box-container');


  button.addEventListener('mouseover', () => {
    button.style.opacity = '0'; // Change this value to the desired position
  });

  button.addEventListener('mouseout', () => {
    button.style.opacity = '1'; // Reset to the original position
  });



  btnYes.addEventListener('click', () => {

    let newpara = document.createElement('p');
    newpara.textContent = "Okay Come Hug ME"

    boxContainer.appendChild(newpara);
  });

