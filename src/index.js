const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardActive = document.createElement("article");

const $icon = `
                <img
                class='icon'
                src='img/icon-collabcode.png' 
                alt='Gueio Mascote da CollabCode' 
                />
            `;

const $iconC = `
                <img
                class='icon'
                src='img/icon-c.png' 
                alt='Ícone de um livro da linguagem C++' 
                />
            `;

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);

$memoryCardActive.classList.add("memory-card");
$memoryCardActive.classList.add("-active");
$root.insertBefore($memoryCardActive, null);

$memoryCard.insertAdjacentHTML("afterbegin", $icon);

$memoryCardActive.insertAdjacentHTML("afterbegin", $iconC);
