import { Component, h } from '@stencil/core';

@Component({
  tag: 'ubd-button',
  styleUrl: 'button.css',
  shadow: true
})
export class Button {
  onclick() {
    console.log('click');

  }

  render() {
    return (
      <button onClick={this.onclick}>
        <slot></slot>
      </button>
    );
  }

}
