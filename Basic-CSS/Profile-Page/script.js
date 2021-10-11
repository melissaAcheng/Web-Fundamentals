var requestElement = document.querySelector("#circle");
var connectionElement = document.querySelector("#oval");

function confirm(element) {
  element.parentNode.remove();
  requestElement.innerText--;
  connectionElement.innerText++;
}

function deny(element) {
  element.parentNode.remove();
  requestElement.innerText--;
}

function editProfile() {
  var newName = prompt("Enter full name");
  var userName = document.querySelector("#user-fullname");
  userName.innerText = newName;
}
