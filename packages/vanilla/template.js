const template = document.createElement('template');
template.innerHTML = `
  <style>
    :host {
      display: block;
      padding: 1em;
      border-color: var(--border-color);
      box-shadow: 0 0 1px #9E9E9E;
      border-radius: 12px;

    }
    header {
      border-bottom: solid 1px #333;
    }

    .collapse {
      transition-property: height;
      transition-duration: 1;
      overflow: hidden;
    }

    .collapse.collapsed {
      height: 0;
    }

  </style>
  <header>
    <h3><span id="first"></span> <span id="last"></span></h3>
  </header>
  <button type="button" id="toggle">More Info</button>
  <div id="collapseTarget" class="collapse collapsed">
    <slot>Provide a description</slot>
  </div>
`
export default template;
