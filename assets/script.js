var searchButton = document.getElementById("searchBtn");

var searchForm = document.getElementById("searchForm");

var currencySelect = document.getElementById("currencies");

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var input = document.getElementById("crypto-search");
  getCrypto(currencySelect.value.toLowerCase());
  // getCrypto(input.value.toLowerCase());
  getExchangeRate();
});

function getCrypto(input) {
  var requestURL2 = `https://api.coincap.io/v2/assets/${input}`;
  fetch(requestURL2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data.data.priceUsd);

      var currentCost = Math.abs(data.data.priceUsd);
      let roundedCost = currentCost.toFixed(2);
      console.log(roundedCost);

      var currentChange = Math.abs(data.data.changePercent24Hr);
      let roundedChange = currentChange.toFixed(2);

      document.getElementById("cryptoID").innerText =
        "Symbol: " + data.data.symbol;

      document.getElementById("price").innerText =
        input + " cost for today: $" + roundedCost;

      document.getElementById("change").innerText =
        "Change today: " + roundedChange + "%";
    });
}

function getExchangeRate() {
  var requestUrl = `https://api.getgeoapi.com/v2/currency/convert?api_key=103e53649f5c4517b3533f662e2a33db20ffb4b4&from=USD&to=EUR&to&amount=1&format=json`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var USD = 1;
      var EUR = Math.abs(data.rates.EUR.rate);
      let roundedEUR = EUR.toFixed(2);

      document.getElementById("exchangeHeader").innerText =
        "Dollar Exchange Rate";
      document.getElementById("cardUSD").innerText =
        "$" + USD + " = " + "€" + roundedEUR;
    });

  var requestUrl3 = `https://api.getgeoapi.com/v2/currency/convert?api_key=103e53649f5c4517b3533f662e2a33db20ffb4b4&from=USD&to=AUD&to&amount=1&format=json`;
  fetch(requestUrl3)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var USD = 1;
      var AUD = Math.abs(data.rates.EUR.rate);
      let roundedAUD = AUD.toFixed(2);

      document.getElementById("cardCAD").innerText =
        "$" + USD + " = " + "$" + roundedAUD + " AUD";
    });
}

// function getExchangeRate() {
//   var requestUrl = `http://api.exchangeratesapi.io/v1/latest?access_key=947025021f02a3444dcee081b8b43f73`;
//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       var USD = data.rates.USD;
//       let roundedUSD = USD.toFixed(2);
//       var CAD = data.rates.CAD;
//       let roundedCAD = CAD.toFixed(2);
//       var AUD = data.rates.AUD;
//       let roundedAUD = AUD.toFixed(2);
//       var JPY = data.rates.JPY;
//       let roundedJPY = JPY.toFixed(2);

//       console.log(data);
//       console.log(USD);
//       console.log(CAD);

//       document.getElementById("exchangeHeader").innerText =
//         "Euro exchange rate for today: ";
//       document.getElementById("cardUSD").innerText =
//         "€1 = " + " $" + roundedUSD + " USD";
//       document.getElementById("cardCAD").innerText =
//         "€1 = " + " $" + roundedCAD + " CAD";
//       document.getElementById("cardAUD").innerText =
//         "€1 = " + " $" + roundedAUD + " AUD";
//       document.getElementById("cardJPY").innerText =
//         "€1 = " + " ¥" + roundedJPY + " JPY";
//     });
// }

var getCurrenciesList = function () {
  var requestURLtest = `https://api.coincap.io/v2/assets`;
  fetch(requestURLtest)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      data.data.forEach((currency) => {
        var option = document.createElement("option");
        option.value = currency.id;
        option.innerText = currency.id;
        currencySelect.appendChild(option);
      });
    });
};

getCurrenciesList();
