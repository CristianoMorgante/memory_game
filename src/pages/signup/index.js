(function() {
  const $root = document.querySelector("#root");
  const $loginButton = flatButton.render("Log in");
  const $signupButton = flatButton.render("Sign up", true);
  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("Welcome");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  const $labelUsername = labelCollabcode.render("Username");
  const $inputUsername = inputCollabcode.render("text");

  const $labelEmail = labelCollabcode.render("E-mail");
  const $inputEmail = inputCollabcode.render("email");

  const $labelPassword = labelCollabcode.render("Password");
  const $inputPassword = inputCollabcode.render("password");

  const $labelConfirmPass = labelCollabcode.render("Confirm password");
  const $inputConfirmPassword = inputCollabcode.render("password");

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);

  $root.insertAdjacentHTML("beforeend", $labelUsername);
  $root.insertAdjacentHTML("beforeend", $inputUsername);

  $root.insertAdjacentHTML("beforeend", $labelEmail);
  $root.insertAdjacentHTML("beforeend", $inputEmail);

  $root.insertAdjacentHTML("beforeend", $labelPassword);
  $root.insertAdjacentHTML("beforeend", $inputPassword);

  $root.insertAdjacentHTML("beforeend", $labelConfirmPass);
  $root.insertAdjacentHTML("beforeend", $inputConfirmPassword);
})();
