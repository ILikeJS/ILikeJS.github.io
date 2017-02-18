var _id = function (id) {
  return document.getElementById(id);
};
  // присвоение локальной даты
    var date = new Date();
    var options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    _id("exchange-today").innerHTML = date.toLocaleDateString("uk-UA", options);
var buyUSD = _id("exchange-usd");
var buyEUR = _id("exchange-eur");
var buyRUR = _id("exchange-rur");
var saleUSD = _id("exchange-sale-usd");
var saleEUR = _id("exchange-sale-eur");
var saleRUR = _id("exchange-sale-rur");
function view (obj) {
  let [{buy: euBuy, sale: euSale},
    {buy: ruBuy, sale: ruSale},
    {buy: usBuy, sale: usSale}, {} ] = obj;

    buyUSD.innerHTML = parseFloat(usBuy).toFixed(2);
    buyEUR.innerHTML = parseFloat(euBuy).toFixed(2);
    buyRUR.innerHTML = parseFloat(ruBuy).toFixed(2);
    saleUSD.innerHTML = parseFloat(usSale).toFixed(2);
    saleEUR.innerHTML = parseFloat(euSale).toFixed(2);
    saleRUR.innerHTML = parseFloat(ruSale).toFixed(2);
  };
   var urlPrivat = "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5";

   fetch(urlPrivat, {metod: "get"})
  .then(
    function(response) {
      if (response.status == 200) {
        // var result = JSON.parse(response);
        // view(JSON.parse(result));
        console.log('response = ', response);
        return Promise.resolve(response);
      }else {
        return Promise.reject(new Error("Status Code:" + response.statusText);
      }
    }
  )
  .then(function(response) {
    return response.json();
  })
  .then(function (json) {
    console.log('json = ', json);
  })
  .catch(function(error) {
    console.log('Fetch Error :-S', error);
  });
