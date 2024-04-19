class MyCustomElement extends HTMLElement {
	constructor() {
		super();
		console.log("Constructor");
	}
	connectedCallback() {
		console.log("HOLA DOM");
	}
	// Eliminar funciones, eventos, etc del DOM
	disconnectedCallback() {
		console.log("CHAO DOM");
	}
}
customElements.define("my-custom-element", MyCustomElement);
document.querySelector("my-custom-element").remove();
