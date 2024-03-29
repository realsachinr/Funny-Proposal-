const button = document.querySelector(".btn-no");
const btnYes = document.querySelector(".btn-yes");
const boxContainer = document.querySelector(".box-container");
const gif = document.querySelector(".tenor-gif-embed");

button.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;
});

btnYes.addEventListener("click", () => {
  gif.style.display = "block";
  // let newpara = document.createElement('p');
  // newpara.textContent = "Okay Come Hug ME"

  // boxContainer.appendChild(newpara);
});
