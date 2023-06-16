const template = document.createElement("template");
template.innerHTML = `
<style>
    label {
        color: red;
        display: block;
    }

    .description {
        font-size: .65rem;
        font-weight: lighter;
        color: #777;
    }
</style>
<label>
    <input type="checkbox">
    <slot></slot>
    <span class="description">
        <slot name="description"></slot>
    </span>
</label>
`;

// the slot is anything between the HTML brackets, is basically a placeholder for content that is going to come when we actually write the html
// in the shadow DOM, all the styles are coming from the template NOT OUTISDE and the SD's styles won't affect anything else on the page
// can use named slots which can pass through HTML

class ToDoItem extends HTMLElement { // construct a custom HTML element
     constructor() {
        super(); // need to get all the props and methods of normal HTML elements
        const shadow = this.attachShadow({mode: "open"}); // attaches the shadow dom, open means you can make modifications to it by referring to this.shadowRoot, bit easier to make changes
        shadow.append(template.content.cloneNode(true)); // appends everything inside of the template
        this.checkbox = shadow.querySelector("input"); // get the input from the shadow
     }

     static get observedAttributes() {
        return [
            "checked" // want to do trigge attributeChangedCallback when this thing changes
        ]
     }

     attributeChangedCallback(name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
        if (name === "checked") this.updateChecked(newValue);
     }

     updateChecked(value) {
        this.checkbox.checked = value != null && value !== "false" // basically will return true if it is checked
     }

     connectedCallback() {
        console.log('connected'); // this callback will be called every time something is added to the dom
     }

     disconnectedCallback() {
        console.log('disconnected'); // this callback will be called every time removed from the dom
     }
}

customElements.define("todo-item", ToDoItem); // registers our custom element, must contain a hyphen to differentiate it from normal elements