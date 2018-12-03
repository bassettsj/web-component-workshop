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

    #collapseTarget {
      height: 100px;
    }

    .collapse {
      transition-property: height;
      transition-duration: 1s;
      transition-timing-function: ease-in-out;
      overflow: hidden;
    }

    .collapse.collapsed {
      height: 0 !important;
    }

    .wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .name {
      grid-column: 1;
    }
    .show-info {
      grid-column: 2;
      justify-self: end;
      align-self: center;
    }

  </style>
  <header class="wrapper">
    <div class="name">
      <h3><span id="first"></span> <span id="last"></span></h3>
    </div>
    <div class="show-info">
      <button type="button" id="toggle">More Info</button>
    </div>
    </header>
  <div id="collapseTarget" class="collapse collapsed">
    <slot>Provide a description</slot>
  </div>
`
export default template;
