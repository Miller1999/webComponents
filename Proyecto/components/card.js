class Card extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	static get observedAttributes() {
		return ["title", "collection", "description", "img", "brand", "price"];
	}
	attributeChangedCallback(attr, oldVal, newVal) {
		if (oldVal !== newVal) this[attr] = newVal;
	}

	getStyles() {
		return `
    <style>
      :host{
        --primary-background: #5a6cb2;
        max-width: 900px;
        min-width: 280px;
        margin: 0 auto;
      }
      *{
        box-sizing:border-box;
      }
      .card {
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 300px;
        height: 100vh;
        background-color: white;
        max-height: 100vh;
        
	    && .card__header {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 30vh;
      background-color: var(--primary-background);
      && span {
        color: rgba(0, 0, 0, 0.2);
        font-size: 5rem;
      }
      && picture {
        display: flex;
        width: 100%;
        justify-content: flex-end;
        && img {
          width: 70%;
          transform: translateY(-25px) translateX(-50px);
        }
      }
    }
	&& .card__main {
		padding: 1rem;
		height: 800vh;
	}
	&& .card__titles {
		h1 {
			font-size: 2rem;
			margin: 1rem 0rem;
		}
		h2 {
			font-size: 1rem;
			color: lightgray;
			margin: 0;
			margin-bottom: 0.5rem;
		}
	}
	&& .card__info {
		margin: 0;
	}
	&& .card__footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 20vh;
    padding:1rem ;
		&& p {
			color: lightgray;
			font-size: 1.5rem;
		}
		&& button {
			background-color: var(--primary-background);
			height: fit-content;
			padding: 0.5rem;
			border: none;
			border-radius: 1rem;
			color: white;
			font-weight: 900;
		}
	}
}

    </style>
    `;
	}

	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `
		<article class="card">
			<section class="card__header">
				<span>${this.brand}</span>
				<picture><img src=${this.img} alt=${this.title} /></picture>
			</section>
			<section class="card__main">
				<div class="card__titles">
					<h1>${this.title}</h1>
					<h2>${this.collection}</h2>
				</div>
				<div class="card__info">
					<p>
						${this.description}
					</p>
				</div>
				<div class="card__footer">
					<p>${this.price}</p>
					<button>Buy Now</button>
				</div>
			</section>
		</article>
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

customElements.define("shopping-card", Card);
