const inputCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .input-collabcode {
            display: block;
            width: 100%;
            color: #3a4042;
            font-size: 18px;
            font-weight: bold;
            border-bottom: 2px solid rgba(58, 64, 66, .5);
            padding: 12px 0;
            
        }
        /*Seletor + verifica se existe um input antes do label, se existir a margin é colocada no label*/
        .input-collabcode + .label-collabcode { 
            margin-top: 30px;
        }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };
  module.render = (content1, content2) => {
    module._style();
    return `<input class="input-collabcode" type="${content1}" placeholder="${content2}"/>`;
  };
  return {
    render: module.render
  };
})();
