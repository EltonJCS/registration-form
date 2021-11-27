const strengthParameters = {
  letters: false,
  numbers: false,
  special: false,
  count: false,
};

let strengthBar = document.getElementById("strengthBar");
let strengthText = document.getElementById("strengthText");

function strengthCheck() {
  let password = document.getElementById("password").value;

  // Changes property in "strengthParameters" to true if it's present in the password
  strengthParameters.letters = /[A-Za-z]+/.test(password) ? true : false;
  strengthParameters.numbers = /[0-9]+/.test(password) ? true : false;
  strengthParameters.special = /[!\"$%&/()=?@~#`\\.\';:+=^*_-]+/.test(password)
    ? true
    : false;
  strengthParameters.count = password.length >= 10 ? true : false;

  // Stores the amount of true values in "strengthParameters"
  let passwordStrength = Object.values(strengthParameters).filter(
    (value) => value
  ).length;

  strengthChange(passwordStrength);
}

function strengthChange(strength) {
  switch (strength) {
    case 1:
      strengthBar.style.display = "";
      strengthText.style.display = "unset";
      strengthText.textContent = "Sua senha é fraca";
      strengthText.style.color = "red";
      strengthBar.style.background = "red";
      strengthBar.style.width = "25%";
      break;
    case 2:
      strengthBar.style.display = "";
      strengthText.style.display = "unset";
      strengthText.textContent = "Sua senha é média";
      strengthText.style.color = "goldenrod";
      strengthBar.style.background = "goldenrod";
      strengthBar.style.width = "50%";
      break;
    case 3:
      strengthBar.style.display = "";
      strengthText.style.display = "unset";
      strengthText.textContent = "Sua senha é boa";
      strengthText.style.color = "green";
      strengthBar.style.background = "green";
      strengthBar.style.width = "75%";
      break;
    case 4:
      strengthBar.style.display = "";
      strengthText.style.display = "unset";
      strengthText.textContent = "Sua senha é ótima";
      strengthText.style.color = "var(--bg-dark)";
      strengthBar.style.background = "var(--bg-dark)";
      strengthBar.style.width = "100%";
      break;
    default:
      strengthBar.style.display = "none";
      strengthText.style.display = "none";
      break;
  }
}

const navMenuSlide = () => {
  const menu = document.querySelector(".menu-icon");
  const nav = document.querySelector(".nav-links");

  //Toggle Menu
  menu.addEventListener("click", () => {
    nav.classList.toggle("menu-tab");
    //Change Menu Icon
    menu.classList.toggle("toggle");
  });
};

navMenuSlide();
