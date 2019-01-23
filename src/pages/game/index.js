const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const $CardGueio = createMemoryCard("img/icon-collabcode.png", "Gueio mascote da CollabCode");
const $CardCsharp = createMemoryCard("img/icon-c.png", "Ícone de um livro da linguagem C++",
    "-active");
const $CardPHP = createMemoryCard("img/icon-php.png", "Ícone de um livro de PHP", "-active");
const $CardJS = createMemoryCard("img/icon-js.png", "Ícone de um livro de Javascript", "-active");
const $CardCabeca = createMemoryCard("img/icon-cabeca.png", "Imagem de uma cabeça com tag dentro", "-active");


$cardsWrapper.insertAdjacentHTML("beforeend", $CardCabeca);
$cardsWrapper.insertAdjacentHTML("beforeend", $CardCabeca);
$cardsWrapper.insertAdjacentHTML("beforeend", $CardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $CardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $CardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $CardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $CardCsharp);
$cardsWrapper.insertAdjacentHTML("beforeend", $CardCsharp);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
