class myElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	// Este metodo es usado para observar los atributos y solo se observaran los que esten dentro del array
	static get observedAttributes() {
		return ["title", "parrafo", "img"];
	}
	// Se selecciona el atributo que se quiere y se observa si ha cambiado, si si se actualiza al nuevo valor si no se deja el valor que ya estaba
	/*
		Este es el codigo de la clase pero se vuelve poco practico a medida que se aumentan los atributos
		if (actualValue === "title") this.title = newVal;
		if (actualValue === "parrafo") this.parrafo = newVal;
		if (actualValue === "img") this.img = newVal;
		Por lo tanto se usa la forma de abajo para acceder al atributo que se quiere esto con la nomeclatura de objeto object[attr], de esta manera no se usan ifs y tampoco se comete errores de typo
		*/
	attributeChangedCallback(attr, oldValue, newVal) {
		this[attr] = newVal;
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

		template.innerHTML = `
			<section>
				<h2>${this.title}</h2>
				<div>
					<p>${this.parrafo}</p>
					<img src=${this.img}/>
				</div>
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
