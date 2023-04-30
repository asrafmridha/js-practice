function getApi() {
  var url = "https://jsonplaceholder.typicode.com/posts";
  var config = { method: "GET" };
  fetch(url, config)
    .then((response) => response.json())
    .then((result) => console.log(result))
    .then((err) => console.log(err));
}
