import template from './template.js';

customElements.define('fancy-name', class MyNameElement extends HTMLElement  {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'open' });
  }

  handleToggled() {
    this._collapse.classList.toggle('collapsed');
  }

  connectedCallback() {
    this.addEventListener('my-name:toggled', this.handleToggled.bind(this));
    this._root.appendChild(document.importNode(template.content, true));
    this._firstEl = this._root.querySelector('#first');
    this._lastEl= this._root.querySelector('#last');
    this._collapse = this._root.querySelector('#collapseTarget');
    this._toggle = this._root.addEventListener('click', (ev) => {
      this.dispatchEvent(new CustomEvent('my-name:toggled'));
    });
    this._render();
  }
  get first () {
    return this.getAttribute('first');
  }
  get last() {
    return this.getAttribute('last');
  }

  set first(value) {
    this.setAttribute('first', value);
    this._render();
  }
  set last(value) {
    this.setAttribute('last', value);
    this._render();
  }

  _render() {
    this._firstEl.innerHTML = this.first;
    this._lastEl.innerHTML = this.last;
  }
});
