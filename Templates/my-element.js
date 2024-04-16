class myElement extends HTMLElement {
	constructor() {
		super();
	}
	//Se genera este metodo para usar el template
	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `
			<section>
				<h2>Hola mundo template</h2>
				<div>
					<p>Texto del template</p>
				</div>
			</section>
		`;
		return template;
	}
	// Por buenas practicas se deben separar responsabilidades
	render() {
		this.appendChild(this.getTemplate().content.cloneNode(true));
	}
	connectedCallback() {
		this.render();
	}
}

customElements.define("my-element", myElement);
