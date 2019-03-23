const labelCollabcode = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .label-collabcode {
            color: rgba(58, 64, 66, .5);
            font-size: 16px;
        }
        `;

    $head.insertAdjacentElement("beforeend", $style);
  };
  module.render = (...content) => {
    module._style();
    return `<label class="label-collabcode">${content.join("")}</label>`;
  };
  return {
    render: module.render
  };
})();
