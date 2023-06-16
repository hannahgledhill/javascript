/**
 * this will extend an EXISING html element - the <ul></ul>
 */

class ExpandableList extends HTMLUListElement {
    constructor() {
        super()
        this.style.position = 'relative'
        this.toggleBtn = document.createElement('button')
        this.toggleBtn.style.position = 'absolute'
        this.toggleBtn.style.border = 'none'
        this.toggleBtn.style.background = 'none'
        this.toggleBtn.style.padding = 0
        this.toggleBtn.style.top = 0;
        this.toggleBtn.style.left = '5px'
        this.toggleBtn.style.curosr = 'pointer'
        this.toggleBtn.innerText = '>'
        this.toggleBtn.addEventListener('click', () => {
            this.dataset.expanded = !this.expanded
        })
        this.appendChild(this.toggleBtn)
    }

    get isExpanded() {
        return this.dataset.exxpanded !== 'false' && this.dataset.expanded != null // checks if it is false or missing
    }

    static get observedAttributes() {
        return ["data-expanded"]
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.updateStyles()
    }

    connectedCallback() {
        this.updateStyles()
    }

    updateStyles() {
        const transform = this.isExpanded ? "rotate(90deg" : ""
        this.toggleBtn.style.transform = transform;
        [...this.children].forEach(child => {
            if (child !== this.toggleBtn) {
                child.style.display = this.isExpanded ? "" : "none"
            }
        })
    }
}

customElements.define("expandable-list", ExpandableList, {
    extends: "ul"
})