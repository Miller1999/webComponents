class myElement extends HTMLElement {
	constructor() {
		super();
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
	getTemplate() {
		const template = document.createElement("template");
		// Se agrega slot para poder ingresar informacion desde afuera del componente
		// Con el atributo name se puede renderizar mas de un slot
		template.innerHTML = `
			<section>
				<h2><slot name="title"></slot></h2>
				<p><slot name="parrafo"></slot></p>
			</section>
			${this.getStyles()}
		`;
		return template;
	}
	render() {
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
	}
	connectedCallback() {
		this.render();
	}
}

customElements.define("my-element", myElement);
