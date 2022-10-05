import { FirebaseEntity } from "./firebase-entity";
import { generatePaypalLink, getParam } from "./utils";

async function initApp(){
  setTimeout(async () => {
    const fEntity = new FirebaseEntity()
    const link = await fEntity.getLinkById(getParam('id'));
    const user = await fEntity.getUserById(link.user_id);
    const paypalLink = generatePaypalLink(link, user);
    document.getElementById('app').innerHTML = createPaypalContainer(link, user, paypalLink)
  }, 3000);

}

function createPaypalContainer(link, user, paypalLink){
  return `
    <div class="link-container" id="link-container">
      <span>Ciao ${link.name}</span>
      <span>il dottor ${user.name} ti ha inviato una ricetta</span>
      ${link.pet ? `<span>per ${link.pet}</span>`: ''}
      ${link.comment ? `<span>ed ha aggiunto queste informazioni:</span><span>${link.comment}</span>`: ''}
      <span>il costo della ricetta è: ${link.price} €</span>
      <span>per effettuare il pagamento clicca qui:</span>
      <a href="${paypalLink}">Paypal</a>
    </div>
  `
}

initApp();




