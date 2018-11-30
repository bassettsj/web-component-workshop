import {
  Component,
  Event,
  EventEmitter,
  Prop,
} from '@stencil/core';

@Component({
  tag: 'my-component-toggle',
  styleUrl: './toggle.css',
  shadow: true,
})
export class ComponentToggle {
  @Event() toggle: EventEmitter;
  @Prop() toggled: boolean = false;
  render() {
    return (
      <button onClick={this.toggle.emit}>
        {this.toggled ? '⬇️' : '⬆️'}
      </button>
    );
  }
}
