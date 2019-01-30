const MemoryCard = () => {
  const $head = document.querySelector('head');
  const $style = document.createElement('style');
  $style.textContent = `
  .memory-card {
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
    transition: transform 100ms linear;
    transform: rotatex(180deg);
  }

  .memory-card.-active {
    background-color: #fff;
    transform: rotatex(360deg);
  }

  .memory-card.-active::before {
    content: "";
    width: 95px;
    height: 95px;
    background-color: #d4d4d4;
    border-radius: 50%;
    position: absolute;
  }

  .memory-card>.icon {
    width: 100px;
    height: 100px;
    transform: rotatex(180deg);
  }


  .memory-card .icon.-turned{
    display: none;
  }
  .memory-card.-active .icon.gueio{
    display: none;
  }
  .memory-card.-active .icon.-turned{
    display: block;
  }

  .memory-card.-active>.icon {
    position: absolute;
    transform: translateY(-12px);
  }


  `;
  $head.insertBefore($style, null)

  return ({ nameClass, src, alt }) => `
    <article class='memory-card ${nameClass} '>
        <img
            class="icon -turned"
            src= "${src}"
            alt="${alt}"
            onclick="handleclick()"
            />
            <img
            class="icon gueio "
            src= "img/icon-collabcode.png"
            alt="Gueio mascote da CollabCode"
            onclick="handleclick()"
            />

    </article>
`;
}
const handleclick = () => {
  const $article = document.querySelector('article');
  $article.classList.toggle('-active');
  console.log($article);
};
