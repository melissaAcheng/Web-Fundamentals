function confirm(element) {
  element.parentNode.remove();
}

function deny(element) {
  element.parentNode.remove();
}

function editProfile() {
  var newName = prompt("Enter full name");
  var userName = document.getElementById("user-fullname");
  userName.innerHTML = newName;
}
