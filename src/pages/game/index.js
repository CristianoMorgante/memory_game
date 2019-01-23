const $root = document.querySelector("#root");
const $cardsWrapper = createCardsWrapper();
const $CardGueio = createMemoryCard({
  src: "img/icon-collabcode.png",
  alt: "Gueio mascote da CollabCode"
});
const $CardCsharp = createMemoryCard({
  src: "img/icon-c.png",
  alt: "Ícone de um livro da linguagem C++",
  nameClass: "-active"
});
const $CardPHP = createMemoryCard({
  src: "img/icon-php.png",
  alt: "Ícone de um livro de PHP",
  nameClass: "-active"
});
const $CardJS = createMemoryCard({
  src: "img/icon-js.png",
  alt: "Ícone de um livro de Javascript",
  nameClass: "-active"
});
const $CardCabeca = createMemoryCard({
  src: "img/icon-cabeca.png",
  alt: "Imagem de uma cabeça com tag dentro",
  nameClass: "-active"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $CardCabeca);
$cardsWrapper.insertAdjacentHTML("beforeend", $CardCabeca);
$cardsWrapper.insertAdjacentHTML("beforeend", $CardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $CardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $CardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $CardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $CardCsharp);
$cardsWrapper.insertAdjacentHTML("beforeend", $CardCsharp);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
