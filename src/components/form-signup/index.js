const formSignup = (() => {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");
    $style.textContent = `
      .form-signup {
          padding: 0 35px 40px;
          position:relative
      }        
    `;
    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $labelUsername = labelCollabcode.render("Username");
    const $inputUsername = inputCollabcode.render({
      type: "text",
      placeholder: "Name-example"
    });

    const $labelEmail = labelCollabcode.render("E-mail");
    const $inputEmail = inputCollabcode.render({
      type: "email",
      placeholder: "example@email.com"
    });

    const $eyeCollab = eyeCollab.render({ attrFor: "password" });

    const $labelPassword = labelCollabcode.render("Password");
    const $inputPassword = inputCollabcode.render({
      type: "password",
      placeholder: "........"
    });

    const $labelConfirmPass = labelCollabcode.render("Confirm password");
    const $inputConfirmPassword = inputCollabcode.render({
      id: "password",
      type: "password",
      placeholder: "........"
    });

    const $btn = btnCollabcode.render({ content: "Signup", path: "login" });

    return `
      ${$labelUsername}
      ${$inputUsername}

      ${$labelEmail}
      ${$inputEmail}

      ${$labelPassword}               
      ${$inputPassword}
      ${$eyeCollab}         

      ${$labelConfirmPass}        
      ${$inputConfirmPassword}
      ${$eyeCollab}        

      ${$btn}
    `;
  };
  module.render = () => {
    module._style();
    return `<form class="form-signup" action="#" method="POST">${module._children()}</form>`;
  };
  return {
    render: module.render
  };
})();
