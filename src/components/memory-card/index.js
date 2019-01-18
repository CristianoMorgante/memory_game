function createMemoryCard() {
    const $memoryCard = document.createElement("article");
    const $icon = `
                <img
                class='icon'
                src='img/icon-collabcode.png' 
                alt='Gueio Mascote da CollabCode' 
                />
            `;
    $memoryCard.classList.add("memory-card");
    $cardsWrapper.insertBefore($memoryCard, null);
    $memoryCard.insertAdjacentHTML("afterbegin", $icon);
}

function createMemoryCardActive() {
    const $memoryCardActive = document.createElement("article");
    const $iconC = `
                <img
                class='icon'
                src='img/icon-c.png' 
                alt='Ícone de um livro da linguagem C++' 
                />
            `;
    $memoryCardActive.classList.add("memory-card");
    $memoryCardActive.classList.add("-active");
    $cardsWrapper.insertBefore($memoryCardActive, null);
    $memoryCardActive.insertAdjacentHTML("afterbegin", $iconC);
}