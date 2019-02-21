const gameButton = (function() {
  const module = {};
  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .game-button{
          width: 100px;
          height: 100px;
          border: 3px solid #fffcee;
          border-radius: 50%;
          position: absolute;
          bottom: 5vh;
          left: 50%;
          transform: translatex(-50%);
          background-color: #2ed573;
          color: #fffcee;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 1.05em;
          cursor: pointer;
          box-shadow: 0 4px 8px #3a4042;
        }
      `;
    $head.insertBefore($style, null);
  };

  module.render = () => {
    module._style();
    return `
          <button class="game-button">Start</button>
        `;
  };
  return {
    render: module.render
  };
})();
