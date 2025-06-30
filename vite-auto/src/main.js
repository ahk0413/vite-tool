import '/src/style.css'
import { Header } from "./components/Header";
import { router } from '/src/router';

function defineElements(){
  customElements.define('c-header',Header);
  
}

defineElements();

window.addEventListener('DOMContentLoaded',router);