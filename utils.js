export function getParam(paramName){
  return new URLSearchParams(window.location.search).get(paramName);
}

export function generatePaypalLink(id, link, user){
  return 'https://www.paypal.com/webscr?cmd=_xclick&item_name=' + 'ricetta' //todo decidere name
  + '&amount=' + link.price.toFixed(2)
  + '&currency_code=EUR&business=' + user.paypal
  + '&rm=2&return=https://reverse.fly.dev/' + id;
}