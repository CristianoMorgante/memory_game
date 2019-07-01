const btnCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .btn-collabcode {
            color: #fff;
            width: 100%;
            height: 48px;
            border-radius: 24px;
            font-size: 14px;
            text-transform: uppercase;
            background-color: #f25a70;
            cursor: pointer;
        }
        .input-collabcode + .btn-collabcode {
            margin-top: 45px;
        }
        .cards-wrapper + .btn-collabcode {          
          margin: 30px 50%;
          transform: translateX(-50%);
          width: 85vw;          
        }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = (event, path) => {
    event.preventDefault();

    location.hash = `#/${path}`;
    location.reload();
  };

  module.render = ({ content = "", path = "" }) => {
    module._style();
    return `<input 
              class="btn-collabcode" 
              type="submit" 
              value="${content}"
              onClick="btnCollabcode.handleClick(event, '${path}')"
              /> `;
  };
  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
