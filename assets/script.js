var searchButton = document.getElementById("searchBtn");

searchButton.addEventListener("click", function () {
  var input = document.getElementById("crypto-search").value;
  console.log(input);
  getCrypto(input);
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
      console.log(currentCost, typeof currentCost);

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
  var requestUrl = `http://api.exchangeratesapi.io/v1/latest?access_key=947025021f02a3444dcee081b8b43f73`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var USD = data.rates.USD;
      let roundedUSD = USD.toFixed(2);
      var CAD = data.rates.CAD;
      let roundedCAD = CAD.toFixed(2);
      var AUD = data.rates.AUD;
      let roundedAUD = AUD.toFixed(2);
      var JPY = data.rates.JPY;
      let roundedJPY = JPY.toFixed(2);

      console.log(data);
      console.log(USD);
      console.log(CAD);

      document.getElementById("exchangeHeader").innerText =
        "Euro exchange rate for today: ";
      document.getElementById("cardUSD").innerText =
        "€1 = " + " $" + roundedUSD + " USD";
      document.getElementById("cardCAD").innerText =
        "€1 = " + " $" + roundedCAD + " CAD";
      document.getElementById("cardAUD").innerText =
        "€1 = " + " $" + roundedAUD + " AUD";
      document.getElementById("cardJPY").innerText =
        "€1 = " + " ¥" + roundedJPY + " JPY";
    });
}

// $(function () {
//   var availableTags = [];
//   $("#crypto-search").autocomplete({
//     source: availableTags,
//   });
//   var requestURLtest = `https://api.coincap.io/v2/assets`;
//   fetch(requestURLtest)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       for (i = 0; i < 100; i++) {
//         availableTags.push(data.data[i].id);
//       }
//     });
// });
