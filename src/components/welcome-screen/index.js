const welcomeScreen = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
    .wrapper-screen {
        background-color: #fff;
        border-radius: 50%;
        padding: 35px;
        position: absolute;
        top: 105px;
        left: 50%;
        transform: translateX(-50%)
    }    

    .wrapper-screen > .icon {
      width:170px;
      height: 175px;
    }

    .wrapper-screen .content {
      display: flex;
      justify-content: center;
      color: #f25a70;
      font-size: 24px;   
      line-height: 27px;
      letter-spacing: .58px;
      text-transform: uppercase;
      margin-top: 35px;
    }
    
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module.create = content => {
    module._style();
    return `
            <section class="wrapper-screen">
                <img class="icon" src="img/icon-collabcode.png"/>
                <h2 class="content">${content}</h2>
            </section>
        `;
  };

  return {
    create: module.create
  };
})();
