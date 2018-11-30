import { Component, Prop, State, Listen} from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() toggled: boolean = true;

  @Listen('toggle')
  onToggle(ev: CustomEvent<'toggle'>) {
    ev.stopPropagation();
    this.toggled = !this.toggled;
  }
  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        <header>
          <h3>Hello, World! I'm {this.getText()}</h3>
          <my-component-toggle toggled={this.toggled}></my-component-toggle>
        </header>
        <div class={{collapsed: this.toggled, collapse: true  }}>
          <slot />
        </div>
      </div>
    );
  }
}
