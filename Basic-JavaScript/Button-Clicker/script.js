function loginOut(element) {
  if (element.innerText == "Login") {
    element.innerText = "Logout";
  }
  else {
    element.innerText = "Login";
  }
  // element.innerText = (element.innerText == "Login" ? "Logout" : "Login")
}

function addDefinition(element) {
  element.remove();
}

function likedMessage(element) {
  alert("Ninja was liked");
}
