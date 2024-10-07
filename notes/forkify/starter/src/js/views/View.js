import icons from 'url:../../img/icons.svg';
import fracty from 'fracty';

export default class View {
    _data;

    renderSpinner() {
        const markup = `
            <div class="spinner">
                <svg><use href="${icons}#icon-loader"></use></svg>
            </div>
        `;
        this._clear();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }

    renderError(message = this._errorMessage) {
        const markup = `
            <div class="error">
                <div>
                    <svg><use href="${icons}#icon-alert-triangle"></use></svg>
                </div>
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }

    renderMessage(message = this._message) {
        const markup = `
            <div class="message">
                <div>
                    <svg><use href="${icons}icon-smile"></use></svg>
                </div>
                <p>${message}</p>
            </div>
        `;
        this._clear();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }

    render(data) {
        if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError(); // we can return and call the render error method at the same time

        this._data = data;
        const markup = this._generateMarkup();
        this._clear();
        this._parentEl.insertAdjacentHTML('afterbegin', markup);
    }

    update(data) {
        this._data = data;
        const newMarkup = this._generateMarkup();
        const newDOM = document.createRange().createContextualFragment(newMarkup); // basically creates like a shadow dom that we can compare to the current dom and only update the parts that have changed
        const newElements = Array.from(newDOM.querySelectorAll('*')); // creates an array holding all the new dom elements
        const curElements = Array.from(this._parentEl.querySelectorAll('*'));

        newElements.forEach((newEl, i) => {
            const curEl = curElements[i];

            // update changed text
            if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') { // detects if the nodes are different and if they are nodes containing only text
                curEl.textContent = newEl.textContent;
            }

            // update changed attributes
            if (!newEl.isEqualNode(curEl)) {
                Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value)); // loop over the new attributes and copy them to the current attributes
            }
        });
    }

    _clear() {
        this._parentEl.innerHTML = '';
    }
}