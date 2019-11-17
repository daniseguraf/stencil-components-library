import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'ubd-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Button {
  @Prop() disabled: boolean = false;
  @Prop() type: 'button' | 'reset' | 'submit' = 'button';

  render() {
    return (
      <button type={this.type}  disabled={this.disabled}>
        <slot></slot>
      </button>
    );
  }
}
