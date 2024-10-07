import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
    _parentEl = document.querySelector('.pagination');
    _errorMessage = 'We couldn\'t find that recipe, please try again.';
    _message;

    addHandlerClick(handler) {
        this._parentEl.addEventListener('click', function(e){
            e.preventDefault();
            const btn = e.target.closest('.btn--inline');
            if (!btn) return;

            const targetPage = Number.parseInt(btn.dataset.targetPage);
            handler(targetPage);
        });
    }

    _generateMarkupButton(type = 'next') {
        if (type === 'next') {
            return `
                <button class="btn--inline pagination__btn--next" data-target-page="${this._data.page + 1}">
                    <span>Page ${this._data.page + 1}</span>
                    <svg class="search__icon">
                    <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>
            `;
        }

        return `
            <button class="btn--inline pagination__btn--prev" data-target-page="${this._data.page - 1}">
                <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
                </svg>
                <span>Page ${this._data.page - 1}</span>
            </button>
        `;
    }

    _generateMarkup() {
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        // page 1, and there are other pages
        if (this._data.page === 1 && numPages > 1) {
            return this._generateMarkupButton('next');
        }

        // page 1, and there are NO other pages
        if (this._data.page === 1 && numPages === 1) {
            return '';
        }

        // last page
        if (this._data.page === numPages) {
            return this._generateMarkupButton('prev');
        }

        // other page
        if (this._data.page < numPages) {
            return `${this._generateMarkupButton('prev')}${this._generateMarkupButton('next')}`;
        }
    }
}

export default new PaginationView();