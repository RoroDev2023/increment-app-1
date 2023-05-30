var x = document.getElementById("output");

function decrement() {
  var value = parseInt(x.innerHTML);
  value--;
  x.innerHTML = value;
}

function increment() {
  var value = parseInt(x.innerHTML);
  value++;
  x.innerHTML = value;
}