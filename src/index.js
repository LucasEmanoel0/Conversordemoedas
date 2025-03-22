let response = document.querySelector(".append");
let form = document.querySelector("#form");
let value = document.querySelector("#value");
let coin = document.querySelector("#coin");

function transforme(coin, value) {
    response.innerHTML = " "

  let dolar = 5.72;
  let euro = 6.18;

  response.classList.add("response");
  response.classList.remove("append");

  let pCotacao = document.createElement("p");
  let pValorConvertido = document.createElement("h1");

  value = parseFloat(value);
  switch (coin) {
    case "usd":
      pCotacao.innerText = `US$ 1 = R$ ${dolar}`;
      pValorConvertido.innerText = `US$ ${value} = R$ ${(dolar * value).toFixed(
        2
      )}`;
      break;

    case "eur":
      pCotacao.innerText = `€ 1 = R$ ${euro}`;
      pValorConvertido.innerText = `€ ${value} = R$ ${(euro * value).toFixed(
        2
      )}`;
      break;

    default:
      pCotacao.innerText = "Moeda não suportada.";
      break;
  }

  response.appendChild(pCotacao);
  response.appendChild(pValorConvertido);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let value = document.querySelector("#value").value;
  let coin = document.querySelector("#coin").value;
  transforme(coin, value);
});
