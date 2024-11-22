let products = [];
function fetchData() {
  const textValue = document.getElementById("searchInput").value;

  fetch(
    // `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=react`
    `https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=${textValue}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log("response", response);
      console.log("response.query.search", response.query.search);
      products = response.query.search;
      displayInfo();
    })
    .catch(function (Data) {
      console.log(Data);
    });
}

function displayInfo() {
  const resultContainer = products.map(function (v, i) {
    return `<div class="result-item">
        <h3 class="result-title">
          ${v.title}
        </h3>
        <pre class="result-snippet">${v.snippet}</pre>
      </div>`;
  });

  document.getElementById("results").innerHTML = resultContainer.join(" ");
}
