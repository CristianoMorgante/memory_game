const $root = document.querySelector("#root");
const $cardsWrapper = document.createElement("section");

$cardsWrapper.classList.add("cards-wrapper");

$root.insertBefore($cardsWrapper, null);

$cardsWrapper.addEventListener("click", event => {

    const $target = event.target;
    if ($target.tagName === "ARTICLE" | $target.tagName === "IMG") {
        console.log('foi');
    }
})