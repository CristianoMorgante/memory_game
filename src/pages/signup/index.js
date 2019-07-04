const signup = () => {
  const $root = document.querySelector("#root");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);
  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("Welcome");
  const $formSignup = formSignup.render();
  const $loginButton = flatButton.render("Log in", false, "login");
  const $signupButton = flatButton.render("Sign up", true, "signup");

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);
  $root.insertAdjacentHTML("beforeend", $formSignup);
};
