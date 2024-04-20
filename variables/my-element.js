class myElement extends HTMLElement {
	constructor() {
		super();

		this.attachShadow({
			mode: "open",
		});
	}

	getStyles() {
		return `
        
            <style>
            // Se definen las variables y luego estas pueden ser alteradas por el css general en el archivo html o en un archivo css, de esta manera se pueden cambiar los estilos sin necesidad de entrar a modificar el componente
            // El :host seria el equivalente al :root para crear las variables solo para nuestro componente
                :host {

                    --primary-color: tomato;
                    --secondary-color: salmon;
                    --heading-primary: 30px;
                    --heading-secondary: 25px;

                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width: 450px;

                }

                section {
                    background: var(--primary-color);
                }

                section div {
                    background: var(--secondary-color);
                }

                h1 {
                    font-size: var(--heading-primary);
                }

                p {
                    font-size: var(--heading-secondary);
                }
            
            </style>

        `;
	}

	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `

            <section>

                <h1>
                    <slot name="title"></slot>
                </h1>

                <div>
                    <p>
                        <slot name="parrafo"></slot>
                    </p>
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
