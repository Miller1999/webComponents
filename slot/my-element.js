// Los templates son utiles cuando vamos a usar o integrar muchos nodos en un
class myElement extends HTMLElement {
	constructor() {
		super();
		//Inicializamos el Shadow DOM
		this.attachShadow({ mode: "open" });
	}
	getStyles() {
		return `
			<style>
				h2 {
					color:red
				}
			</style>
		`;
	}
	//Se genera este metodo para usar el template
	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `
			<section>
				<h2>Hola mundo dentro del shadowDOM</h2>
				<div>
					<p>Texto del shadowDOM</p>
				</div>
			</section>
			${this.getStyles()}
		`;
		return template;
	}
	// Por buenas practicas se deben separar responsabilidades
	render() {
		// Ahora para renderizar se debe utilizar de la siguiente manera
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
	}
	connectedCallback() {
		this.render();
	}
}

customElements.define("my-element", myElement);
