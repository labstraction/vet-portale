import { FirebaseEntity } from "./firebase-entity";
import { generatePaypalLink, getParam } from "./utils";

async function initApp() {

  const fEntity = new FirebaseEntity()
  const id = getParam('id');
  const link = await fEntity.getLinkById(id);
  const user = await fEntity.getUserById(link.user_id);
  const paypalLink = generatePaypalLink(id, link, user);
  if (link.status === 'completed') {
    redirectToREV(link);
  } else {
    document.getElementById('app').innerHTML = createPaypalContainer(link, user, paypalLink)
  }


}

function createPaypalContainer(link, user, paypalLink) {
  return `
    <div class="link-container" id="link-container">
      <div class="intro">
        <span class="app-title">REVers€</span>
        <span>Ciao <b>${link.name}</b>,</span>
        <span>il dottor <b>${user.name}</b> ti ha inviato una ricetta</span>
        ${link.pet ? `<span>per <b>${link.pet}</b></span>` : ''}
        ${link.comment ? `<span>ed ha aggiunto queste informazioni:</span><span>${link.comment}</span>` : ''}
      </div>
      <span>il costo della ricetta è:</span>
      <span class="price"><b>${link.price} €</b></span>
      <span>per effettuare il pagamento clicca qui:</span>
      <a href="${paypalLink}" target="_blank" class="paypal-link"><img class="paypal-btn" src="./assets/paypal.svg" alt="bottone pagamento"></a>
    </div>
  `
}


function redirectToREV(link) {
  window.location.href = link.hidden_link;
}

initApp();




