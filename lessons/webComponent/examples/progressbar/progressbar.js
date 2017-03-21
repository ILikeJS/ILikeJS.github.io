class ProgressBar extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.createShadowRoot();
    this._complete = 0;
  }

  get complete() {
    return this._complete;
  }

  set complete(val) {
    this.setAttribute('same_attr', val);
  }
  static get observedAttributes() {
    return ['complete'];
  }

  // аттрибут изменен (а также добавлен или удален)
  attributeChangedCallback(name, oldVal, newVal) {
    var innerBar  = this.shadow.querySelector('.progress-bar-inner');
    switch(name) {
      case 'complete':
        this._complete = parseInt(newVal, 10) || 0;
        innerBar.style.width = this.complete + '%';
        innerBar.innerHTML = this.complete + '%';
    }
  }

  connectedCallback() {
    var template = `
    <style>
      .progress-bar {
        width: 50%;
        height: 30px;
        background-color: #edf2f4;
        border-radius: 5px;
        color: #fff;
      }
      .progress-bar-inner {
        height: 100%;
        line-height: 30px;
        background-color: #2b2d42;
        text-align: center;
        border-radius: 5px;
        transition: width 0.25s;
      }
    </style>
      <div class="progress-bar">
        <div class="progress-bar-inner">${this.complete}%</div>
      </div>
    `;

    this.shadow.innerHTML = template;
  }
}

window.customElements.define('progress-bar', ProgressBar, {extends: 'div'});
