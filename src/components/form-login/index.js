const formLogin = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
        .form-login{
            padding: 0 35px 40px;
        }
    
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $labelEmail = labelCollabcode.render("E-mail");
    const $inputEmail = inputCollabcode.render({ type: "email", placeholder: "example@email.com" });

    const $labelPassword = labelCollabcode.render("Password");
    const $inputPassword = inputCollabcode.render({ type: "password", placeholder: "........" });

    const $linkCollab = linkCollab.render({ href: "#", content: "Forget password?" });

    const $btn = btnCollabcode.render("Login");

    return `
     ${$labelEmail}
        ${$inputEmail}

        ${$labelPassword}
        ${$inputPassword}

        ${$linkCollab}

        ${$btn}
    `;
  };

  module.render = () => {
    module._style();
    return `<form class="form-login" action="#" method="POST">${module._children()}</form>`;
  };
  return {
    render: module.render
  };
})();
