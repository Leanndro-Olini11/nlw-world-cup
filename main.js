function createGame (player1, hour, player2) {
  return `
<li>
            <img src="./Bandeiras dos países/icon=${player1}.svg" alt="Bandeira do Catar">
            <strong>${hour}</strong>
            <img src="./Bandeiras dos países/icon=${player2}.svg" alt="Bandeira do Equador">
        </li>
  `
}
// variables criada para adição de animação via JS 
let delay = 0.2;
function createCard (date, day, games) { 
  delay = delay + 0.2;

  return `
  <div class="cards" style = "animation-delay: ${delay}s">  
    <h2>${date}<span>${day}</span></h2>
    <ul>
      ${games}  
    </ul>
  </div>
`

}
// function rafatorada
document.querySelector("#cards").innerHTML =
  createCard("20/11", "DOMINGO", createGame("qatar", "12:00", "ecuador")) +
  createCard(
    "21/11",
    "SEGUNDA",
    createGame("england", "09:00", "iran") +
      createGame("senegal", "12:00", "netherlands") +
      createGame("united states", "15:00", "wales")
  ) +
  createCard(
    "22/11",
    "TERÇA",
    createGame("argentina", "06:00", "saudi arabia") +
      createGame("denmark", "09:00", "tunisia") +
      createGame("mexico", "12:00", "poland") +
      createGame("france", "15:00", "australia")
  ) +
  createCard(
    "23/11",
    "QUARTA",
    createGame("morocco", "06:00", "croatia") +
      createGame("germany", "09:00", "japan") +
      createGame("spain", "12:00", "costa rica") +
      createGame("belgium", "15:00", "canada")
  ) +
  createCard(
    "24/11",
    "QUINTA",
    createGame("switzerland", "06:00", "cameroon") +
      createGame("uruguay", "09:00", "south korea") +
      createGame("portugal", "12:00", "ghana") +
      createGame("brazil", "15:00", "serbia")
  ) +
  createCard(
    "25/11",
    "SEXTA",
    createGame("wales", "06:00", "iran") +
      createGame("qatar", "09:00", "senegal") +
      createGame("netherlands", "12:00", "ecuador") +
      createGame("england", "15:00", "united states")
  ) +
  createCard(
    "26/11",
    "SABADO",
    createGame("tunisia", "06:00", "australia") +
      createGame("poland", "09:00", "saudi arabia") +
      createGame("france", "12:00", "denmark") +
      createGame("argentina", "15:00", "mexico")
  ) +
  createCard(
    "27/11",
    "DOMINGO",
    createGame("japan", "06:00", "costa rica") +
      createGame("belgium", "09:00", "morocco") +
      createGame("croatia", "12:00", "canada") +
      createGame("spain", "15:00", "germany")
  ) +
  createCard(
    "28/11",
    "SEGUNDA",
    createGame("cameroon", "06:00", "serbia") +
      createGame("south korea", "09:00", "ghana") +
      createGame("brazil", "12:00", "switzerland") +
      createGame("portugal", "15:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "TERÇA",
    createGame("ecuador", "11:00", "senegal") +
      createGame("netherlands", "11:00", "qatar") +
      createGame("iran", "15:00", "united states") +
      createGame("wales", "15:00", "england")
  ) +
  createCard(
    "30/11",
    "QUARTA",
    createGame("tunisia", "11:00", "france") +
      createGame("australia", "11:00", "denmark") +
      createGame("poland", "15:00", "argentina") +
      createGame("saudi arabia", "15:00", "mexico")
  ) +
  createCard(
    "01/12",
    "QUINTA",
    createGame("croatia", "11:00", "belgium") +
      createGame("canada", "11:00", "morocco") +
      createGame("japan", "15:00", "spain") +
      createGame("costa rica", "15:00", "germany")
  ) +
  createCard(
    "02/12",
    "SEGUNDA",
    createGame("south korea", "11:00", "portugal") +
      createGame("ghana", "11:00", "uruguay") +
      createGame("serbia", "15:00", "switzerland") +
      createGame("cameroon", "15:00", "brazil")
  ) 