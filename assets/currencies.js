var getCurrenciesList = function () {
  var requestURLtest = `https://api.coincap.io/v2/assets`;
  fetch(requestURLtest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (i = 0; i < 100; i++) {
        var currencyLI = document.createElement("li");
        currencyLI.textContent = data.data[i].id;
        document.getElementById("currency-ul").appendChild(currencyLI);
      }
    });
};

getCurrenciesList();
