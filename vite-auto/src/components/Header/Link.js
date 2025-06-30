export class Link extends HTMLElement {
 
  constructor(){
    super();
    this.attachShadow({mode:'open'});

    this.href = this.getAttribute('to') || '/'
    this.label = this.textContent || ''

    this.render();
    
  }

  render(){

    this.shadowRoot.innerHTML = `
      <li><a href="${this.href}">${this.label}</a></li>
    `
  }
  
}



customElements.define('header-link',Link)