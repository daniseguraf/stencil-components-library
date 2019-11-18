import { Component, h } from '@stencil/core';


@Component({
  tag: 'ubd-dropdown',
  styleUrl: 'dropdown.css',
  shadow: true
})
export class Dropdown {
  render() {
    return (
      <div class="dropdown">
        <div class="dropdown-toggle">
          <slot name="header"></slot>
        </div>

        <div class="dropdown-menu">
          <slot></slot>
        </div>
      </div>
    )
  }
}