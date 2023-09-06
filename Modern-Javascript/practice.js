const searchInput = document.querySelector(".search");

const display = document.querySelector(".result");

const thanks = document.querySelector(".thanks");

function write() {
  display.innerHTML = this.value;
  var self = this;
  setTimeout(function () {
    thanks.innerHTML = `You Have Typed : ${self.value}`;
  }, 1000);

}
searchInput.addEventListener("keyup", write);
