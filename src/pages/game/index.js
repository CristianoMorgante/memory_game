const $root = document.querySelector('#root');
const $cardsWrapper = createCardsWrapper();
const createMemoryCard = MemoryCard();
const $CardGueio = createMemoryCard({
  src: 'img/icon-collabcode.png',
  alt: 'Gueio mascote da CollabCode',
});
const $CardCsharp = createMemoryCard({
  src: 'img/icon-c.png',
  alt: 'Ícone de um livro da linguagem C++',
});
const $CardPHP = createMemoryCard({
  src: 'img/icon-php.png',
  alt: 'Ícone de um livro de PHP',
});
const $CardJS = createMemoryCard({
  src: 'img/icon-js.png',
  alt: 'Ícone de um livro de Javascript',
});
const $CardCabeca = createMemoryCard({
  src: 'img/icon-cabeca.png',
  alt: 'Imagem de uma cabeça com tag dentro',
});

$cardsWrapper.insertAdjacentHTML('beforeend', $CardCsharp);
$cardsWrapper.insertAdjacentHTML('beforeend', $CardPHP);
$cardsWrapper.insertAdjacentHTML('beforeend', $CardCabeca);
$cardsWrapper.insertAdjacentHTML('beforeend', $CardJS);
$cardsWrapper.insertAdjacentHTML('beforeend', $CardPHP);
$cardsWrapper.insertAdjacentHTML('beforeend', $CardJS);
$cardsWrapper.insertAdjacentHTML('beforeend', $CardCsharp);
$cardsWrapper.insertAdjacentHTML('beforeend', $CardCabeca);

$root.insertAdjacentElement('beforeend', $cardsWrapper);
