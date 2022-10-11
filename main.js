import { FirebaseEntity } from "./firebase-entity";
import { generatePaypalLink, getParam } from "./utils";

async function initApp(){
  setTimeout(async () => {
    const fEntity = new FirebaseEntity()
    const id = getParam('id');
    const link = await fEntity.getLinkById(id);
    const user = await fEntity.getUserById(link.user_id);
    const paypalLink = generatePaypalLink(id, link, user);
    document.getElementById('app').innerHTML = link.status === 'completed' ? createLinkContainer(link) 
                                                                           : createPaypalContainer(link, user, paypalLink)
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
      <a href="${paypalLink}" target="_blank">Paypal</a>
    </div>
  `
}


function createLinkContainer(link){
  return `
    <div class="link-container" id="link-container">
      <a href="${link.hidden_link}"><span class="open-link">Accedi alla ricetta</span></a>
    </div>
  `
}

initApp();




