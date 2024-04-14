const template = document.createElement("div");
template.innerHTML = `
  <p>Hola mundo 2</p>
  <p>texto ejemplo</p>
`;

// Los webcomponents se basan en clases
// Se extiende de HTMLElement ya que esta es la API que nos permite construir webcomponents
class myElement extends HTMLElement {
	// Dentro del constructor solo vamos a definir que es lo que vamos a usar pero no vamos a mostrarlo
	constructor() {
		super();
		this.p = document.createElement("p");
	}
	// Esta funcion se usa para mostrar lo definido
	connectedCallback() {
		this.p.textContent = "Hola mundo!!";
		this.appendChild(this.p);
		this.appendChild(template);
	}
}
// customElements.define -> para darle el nombre al componente
customElements.define("my-element", myElement);
