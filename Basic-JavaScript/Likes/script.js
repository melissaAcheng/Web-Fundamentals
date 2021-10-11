var likes = [];
var count = 1;
var likeElement = document.querySelector("#like-count");


console.log(likeElement);

function addLike() {
  likes.push(count++);
  likeElement.innerText = `${likes[likes.length-1]} like(s)`;
  console.log(likes);
}

var likes1 = [];
var count1 = 1;
var likeElement1 = document.querySelector("#like-count-1");

console.log(likeElement1);

function addLike1() {
  likes1.push(count1++);
  likeElement1.innerText = `${likes1[likes1.length-1]} like(s)`;
  console.log(likes1);
}

var likes2 = [];
var count2 = 1;
var likeElement2 = document.querySelector("#like-count-2");

console.log(likeElement2);

function addLike2() {
  likes2.push(count2++);
  likeElement2.innerText = `${likes2[likes2.length-1]} like(s)`;
  console.log(likes2);
}