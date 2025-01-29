import Inputmask from "inputmask";

const selector = document.querySelector("#phone") as HTMLInputElement | null; 

const im = new Inputmask("+375 (99) 999-99-99");

if (selector) {
  im.mask(selector); 
} 