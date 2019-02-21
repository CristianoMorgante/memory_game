function createCardsWrapper() {
  const $cardsWrapper = document.createElement("section");
  $cardsWrapper.classList.add("cards-wrapper");

  const $head = document.querySelector("head");
  const $style = document.createElement("style");
  $style.textContent = `
  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content:  space-around;
    padding-top: 10px;
  }

  .cards-wrapper::after{
    content: "";
    width:100vw;
    height: 100vh;
    background-color: rgb(58, 64, 66, .9);
    position: absolute;
    top: 0;
  }

  .cards-wrapper > .memory-card {
    margin-bottom: 10px;
  }
  
  
  `;

  $head.insertBefore($style, null);

  $cardsWrapper.addEventListener("click", () => {
    store.$cardTurned = $cardsWrapper.querySelectorAll(".memory-card.-front").length;
  });

  return $cardsWrapper;
}
