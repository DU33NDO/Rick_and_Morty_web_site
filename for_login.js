const BtnSend = document.querySelector(
  ".login__outer_box__inner_box__inputs__btn"
);
const Users = JSON.parse(localStorage.getItem("Users"))
BtnSend.addEventListener("click", function () {
  function findUserByLogin(login) {
    for (let i = 0; i < Users.length; i++) {
      if (Users[i].login === login) {
        return Users[i];
    }
    }
  }
  const login = document.querySelector("#login").value;
  const password = document.querySelector("#password").value;
  const userFromStorage = findUserByLogin(login);
  if (userFromStorage && userFromStorage.password === password) {
    alert("You are loged in");
    window.location.href = './main.html';
  } else {
    alert("Error, try again");
  }
});
