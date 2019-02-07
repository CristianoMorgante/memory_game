const MemoryCard = () => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');
  $style.textContent = `
  .memory-card{
    width: 135px;
    height: 135px;
    position: relative;
  }
  .memory-card > .card {
    width: 135px;
    height: 135px;
    background-color: #f25a70;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    position: relative;
    margin: 8px 8px;
    position:absolute;
  }

  .memory-card.-front .card,
  .memory-card.-score .card{
    display: none;
    transition: transform 90ms linear;
    transform: rotateX(360deg);
  }

  .memory-card .card.-active,
  .memory-card .card.-score {
    background-color: #fff;
    display: flex;
  }

  .memory-card .card.-active::before {
    content: "";
    width: 95px;
    height: 95px;
    background-color: #d4d4d4;
    border-radius: 50%;
    position: absolute;
  }

  .memory-card .card>.icon {
    width: 100px;
    height: 100px;
  }

  .memory-card .card.-active>.icon {
    position: absolute;
    transform: translateY(-12px);
  }
  `;
  $head.insertBefore($style, null);

  return ({ src, alt }) => `
  <article class="memory-card" onclick= "handleClick(this)">
    <div class='card -active' >
      <img
            class="icon"
            src= "${src}"
            alt="${alt}"
            />
    </div>
    <div class='card'>
      <img
          class="icon "
          src= "img/icon-collabcode.png"
          alt="Gueio mascote da CollabCode"
          />
    </div>
  </article>
`;
};
let score = 0;
const handleClick = ($card) => {
  if (!$card.classList.contains('-front')) {
    if ($cardTurned < 2) {
      $card.classList.toggle('-front');
    }
    if ($cardTurned === 1) {
      const $memoryCards = document.querySelectorAll('.memory-card.-front');
      if (
        $memoryCards[0].querySelector('.-active .icon').getAttribute('src')
        === $memoryCards[1].querySelector('.-active .icon').getAttribute('src')
      ) {
        score++;
        $memoryCards.forEach(($memoryCard) => {
          $memoryCard.classList.add('-score');
          $memoryCard.classList.remove('-front');
        });
        console.log(score);
      } else {
        setTimeout(() => {
          const $frontCard = document.querySelectorAll('.memory-card.-front');
          $frontCard.forEach(($memoryCard) => {
            $memoryCard.classList.remove('-front');
          });

          $cardTurned = 0;
        }, 1500);
      }
    }
  }
};
